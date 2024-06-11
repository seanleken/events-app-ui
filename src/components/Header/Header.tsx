'use client';

import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import styles from './Header.module.scss';

export default function() {
    const { user}  = useUser();

    return (
        <div className={styles.header}>
            <h4 className={styles.header__title}>Events App</h4>
            <UserManagement user={user} />
        </div>
    )
}

function UserManagement({user}: {user?: UserProfile}) {
    return (
        user 
            ?
            <div>
                <p>Hi {user.name}</p>
                <a href="/api/auth/logout">Logout</a>
            </div>
            : <a href="/api/auth/login">Log In</a>    
    )
}