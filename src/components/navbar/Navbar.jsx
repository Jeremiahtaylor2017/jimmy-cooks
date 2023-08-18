"use client"

import Link from 'next/link';
import React from 'react';
import styles from './navbar.module.css';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio"
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    },
]

const Navbar = () => {
    const session = useSession();
    const router = useRouter();

    const handleClick = () => {
        router.push("/dashboard/login");
    }

    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>Jimmy Cooks</Link>
            <div className={styles.links}>
                <DarkModeToggle />
                {links.map(link => (
                    <Link key={link.id} href={link.url} className={styles.link}>
                        {link.title}
                    </Link>
                ))}
                {session.status === "authenticated"
                    ? (<button className={styles.logout} onClick={signOut}>Logout</button>)
                    : (<button className={styles.logout} onClick={handleClick}>Login</button>)
                }
            </div>
        </div>
    )
}

export default Navbar;