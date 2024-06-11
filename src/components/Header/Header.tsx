'use client';

import { UserProfile, useUser } from "@auth0/nextjs-auth0/client";
import styles from './Header.module.scss';
import { Button } from "@radix-ui/themes";

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
            <div className={styles.header__authPanel}>
                <p>Hi {user.name}</p>
                <a href="/api/auth/logout">
                    <Button>
                        Logout
                    </Button>
                </a>
            </div>
            : <a href="/api/auth/login">
                <Button>Log In</Button>
            </a>    
    )
}