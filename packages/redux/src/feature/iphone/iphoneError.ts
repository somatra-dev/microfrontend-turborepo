import type { SerializedError } from "@reduxjs/toolkit";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

type GatewayFallbackPayload = {
  status?: number;
  error?: string;
  message?: string;
  path?: string;
};

export type IphoneErrorDetails = {
  status?: number | string;
  title: string;
  message: string;
  path?: string;
};

function isFetchBaseQueryError(error: unknown): error is FetchBaseQueryError {
  return typeof error === "object" && error !== null && "status" in error;
}

function isGatewayFallbackPayload(data: unknown): data is GatewayFallbackPayload {
  return typeof data === "object" && data !== null;
}

export function getIphoneErrorDetails(error: unknown): IphoneErrorDetails {
  if (!error) {
    return {
      status: undefined,
      title: "Unable to load iPhones",
      message: "Failed to load iPhones from iphone-service.",
      path: undefined,
    };
  }

  if (isFetchBaseQueryError(error)) {
    const status = error.status;
    const data = "data" in error ? error.data : undefined;

    if (isGatewayFallbackPayload(data)) {
      return {
        status,
        title: data.error ?? "Service Unavailable",
        message: data.message ?? "Failed to load iPhones from iphone-service.",
        path: data.path,
      };
    }

    return {
      status,
      title: "Unable to load iPhones",
      message: "Failed to load iPhones from iphone-service.",
      path: undefined,
    };
  }

  const serialized = error as SerializedError;
  return {
    status: undefined,
    title: "Unable to load iPhones",
    message: serialized.message ?? "Failed to load iPhones from iphone-service.",
    path: undefined,
  };
}
