import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const router = useRouter();
  return (
    <div className={styles.navbar}>
        <ul>
            <li className={router.pathname === "/" ? styles.active : ""}><Link href='/'>Home</Link></li>
            <li className={router.pathname === "/projects" ? styles.active : ""}><Link href='/projects'>Projects</Link></li>
            <li className={router.pathname === "/contact" ? styles.active : ""}><Link href='/contact'>Contact</Link></li>
        </ul>
    </div>
  )
}

export default Navbar