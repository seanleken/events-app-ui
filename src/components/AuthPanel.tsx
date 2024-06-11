'use client';

import { useUser } from "@auth0/nextjs-auth0/client";

export default function() {
    const { user, error, isLoading } = useUser();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
  
    return (
      user ? (
        <div>
            <p>Hi {user.name}</p>
            <a href="/api/auth/logout">Logout</a>
        </div>
      ) : <a href="/api/auth/login">Login</a>
    );
}