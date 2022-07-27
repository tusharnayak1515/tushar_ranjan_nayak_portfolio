import Head from 'next/head';
import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
import { MdLocationPin } from 'react-icons/md';
import { BsLinkedin, BsFacebook, BsInstagram, BsGithub } from 'react-icons/bs';

import styles from '../styles/contact.module.css';

const contact = () => {
  return (
    <div className={styles.contact}>
        <Head>
            <title>Contact Me</title>
            <meta name="keywords" content="portfolio, next, next.js, contact me" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className={styles.header}>Contact Me</h1>

        <div className={styles.contact_div}>

            <div className={styles.flexdiv}>
                <FaPhoneAlt size="1.6rem" className={styles.icon} />
                <h2>+91 6370533744</h2>
            </div>

            <div className={styles.flexdiv}>
                <GrMail size="1.6rem" className={styles.icon} />
                <h2>tusharnayak1515@gmail.com</h2>
            </div>

            <div className={styles.flexdiv}>
                <MdLocationPin size="1.6rem" className={styles.icon} />
                <h2>KANSBAHAL,SUNDARGARH,770034</h2>
            </div>

        </div>

        <div className={styles.social}>
            <a href="https://www.linkedin.com/in/tushar-nayak-667156206/" target="_blank">
                <BsLinkedin size="1.6rem" className={`${styles.social_icons} ${styles.linkedin}`} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100010638071586" target="_blank">
                <BsFacebook size="1.6rem" className={`${styles.social_icons} ${styles.facebook}`} />
            </a>
            <a href="https://www.instagram.com/tusharnayak2/" target="_blank">
                <BsInstagram size="1.6rem" className={`${styles.social_icons} ${styles.instagram}`} />
            </a>
            <a href="https://github.com/tusharnayak1515" target="_blank">
                <BsGithub size="1.6rem" className={`${styles.social_icons} ${styles.github}`} />
            </a>
            
        </div>

    </div>
  )
}

export default contact