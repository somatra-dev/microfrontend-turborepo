'use client';

import React from 'react';
import { StoreProvider } from '@repo/redux/provider';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <StoreProvider>{children}</StoreProvider>;
}
