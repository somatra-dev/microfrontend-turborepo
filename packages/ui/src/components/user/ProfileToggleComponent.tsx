'use client';

import {
    IconCircleCheck,
    IconChevronsDown,
    IconLogout,
    IconLogin
} from '@tabler/icons-react';

import { Avatar, AvatarFallback, AvatarImage } from '@repo/ui/components/ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@repo/ui/components/ui/dropdown-menu';
import { useGetMeQuery, DEFAULT_NAV_USER } from '@repo/redux/feature/user';

const rootDomain = process.env.NEXT_PUBLIC_ROOT_DOMAIN ?? 'http://localhost:3333';

export function UserCom() {
    const { data, isLoading } = useGetMeQuery();
    const isAuthenticated = Boolean(data?.authenticated && data.user);

    const user = isAuthenticated
        ? {
            name: data?.user?.name ?? DEFAULT_NAV_USER.name,
            email: data?.user?.email ?? DEFAULT_NAV_USER.email,
            avatar: data?.user?.profileImage ?? DEFAULT_NAV_USER.avatar
        }
        : DEFAULT_NAV_USER;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    type='button'
                    className='flex items-center gap-3 rounded-md px-2 py-1 hover:bg-gray-800'
                >
                    <Avatar className='h-8 w-8 rounded-lg'>
                        <AvatarImage src={user.avatar} alt={user.name} />
                        <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                    </Avatar>
                    <div className='grid text-left text-sm leading-tight'>
                        <span className='truncate font-semibold'>
                            {isLoading ? 'Loading...' : user.name}
                        </span>
                        <span className='truncate text-xs'>{user.email}</span>
                    </div>
                    <IconChevronsDown className='ml-1 size-4' />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg bg-amber-900'
                align='end'
                sideOffset={4}
            >
                <DropdownMenuLabel className='p-0 font-normal'>
                    <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                        <Avatar className='h-8 w-8 rounded-lg'>
                            <AvatarImage src={user.avatar} alt={user.name} />
                            <AvatarFallback className='rounded-lg'>DF</AvatarFallback>
                        </Avatar>
                        <div className='grid flex-1 text-left text-sm leading-tight'>
                            <span className='truncate font-semibold'>{user.name}</span>
                            <span className='truncate text-xs'>{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    {isAuthenticated && (
                        <DropdownMenuItem asChild>
                            <a href={`${rootDomain}/profile`} className='flex items-center'>
                                <IconCircleCheck className='mr-2 h-4 w-4' />
                                Profile
                            </a>
                        </DropdownMenuItem>
                    )}
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                {isAuthenticated ? (
                    <DropdownMenuItem asChild>
                        <a href='/logout' className='flex items-center'>
                            <IconLogout className='mr-2 h-4 w-4' />
                            Log out
                        </a>
                    </DropdownMenuItem>
                ) : (
                    <DropdownMenuItem asChild>
                        <a href='/oauth2/authorization/itp-frontbff' className='flex items-center'>
                            <IconLogin className='mr-2 h-4 w-4' />
                            Log in
                        </a>
                    </DropdownMenuItem>
                )}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
