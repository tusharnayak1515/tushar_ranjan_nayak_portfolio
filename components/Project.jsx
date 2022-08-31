import React, { useState } from 'react';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import just_bg from "../public/static/images/just_bg.jpg";
import text_utils from "../public/static/images/text_utils.jpg";
import notes_app from "../public/static/images/notes_app.png";
import tic_tac_toe from "../public/static/images/tic-tac-toe.jpg";
import codershub from "../public/static/images/codershub.png";
import jpm from "../public/static/images/jpm.jpg";

import styles from '../styles/projects.module.css';

const Project = ({project}) => {
    const [hover, setHover] = useState(false);
    return (
        <div className={styles.project_box} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            {hover && <div className={styles.description_div}>
                <h1>Description</h1>
                <h3>{project.description.substring(0,200)}</h3>
            </div>}
            {!hover && <div className={styles.project_image_div}>
                <Image src={project.image} alt={project.name} layout="fill" />
            </div>}
            <div className={styles.bottom_div}>
                <a href={project.github} target="_blank"><FaGithub className={styles.icons} /></a>
                <h2>{project.name}</h2>
                <a href={project.live} target="_blank"><FaExternalLinkAlt color='#0000EE' className={styles.icons} /></a>
            </div>
        </div>
    )
}

export default Project