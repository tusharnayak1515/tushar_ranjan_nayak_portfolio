import React, { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

import styles from '../styles/projects.module.css';

const Project = ({project}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className={styles.project_box} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover && <div className={styles.description_div}>
                <h1>Description</h1>
                <h3>{project.description}</h3>
            </div>}
            {!hover && <Image src={project.image} alt={project.name} width="400px" height="250px" style={{ border: "none", borderRadius: "0.5rem" }} />}
            <div className={styles.bottom_div}>
                <a href={project.github} target="_blank"><FaGithub size="2rem" className={styles.icons} /></a>
                <h2>{project.name}</h2>
                <a href={project.live} target="_blank"><FaExternalLinkAlt size="1.5rem" color='#0000EE' className={styles.icons} /></a>
            </div>
        </div>
    )
}

export default Project