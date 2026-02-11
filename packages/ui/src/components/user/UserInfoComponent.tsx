// components/UserInfoCard.tsx
"use client";

import Image from "next/image";
import { useGetMeQuery } from "@repo/redux/feature/user";

export default function UserInfoCard() {
    const { data, isLoading } = useGetMeQuery();
    const user = data?.user;

    if (isLoading) {
        return (
            <div className="border rounded-xl p-6 shadow-sm bg-card max-w-md">
                <p className="text-sm text-muted-foreground">Loading profile...</p>
            </div>
        );
    }

    if (!data?.authenticated || !user) {
        return (
            <div className="border rounded-xl p-6 shadow-sm bg-card max-w-md">
                <p className="text-sm text-muted-foreground">Please log in to view your profile.</p>
            </div>
        );
    }


    return (
        <div className="border rounded-xl p-6 shadow-sm bg-card max-w-md">
            <div className="flex items-center gap-4 mb-5">
                <div className="w-20 h-14 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                    {user.profileImage ? (
                        <Image
                            width={80}
                            height={80}
                            src={user.profileImage}
                            alt="Profile image"
                            className="object-cover rounded-full"
                        />
                    ) : (
                        <span>
                            {(user.name?.charAt(0) ?? "U").toUpperCase()}
                        </span>
                    )}
                </div>

                <div>
                    <h2 className="text-xl font-bold">{user.name ?? "Unknown User"}</h2>
                    <p className="text-muted-foreground text-sm">{user.email ?? "-"}</p>
                </div>
            </div>

            <div className="space-y-3 text-sm">
                {user.uuid && (
                    <div>
                        <span className="text-muted-foreground">UUID: </span>
                        <span className="font-mono text-xs break-all">{user.uuid}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
