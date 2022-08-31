import React from 'react';
import Image from 'next/image';

import styles from "../styles/Home.module.css";

const Skills = ({skills}) => {
  return (
    <div className={styles.skills}>
        {skills && skills.map((skill,index)=> {
        return(<div className={styles.skill_item} key={index}>
            <Image src={skill.url} alt={skill.name} width="80px" height="80px" />
            <h3>{skill.name}</h3>
        </div>)
        })}
    </div>
  )
}

export default Skills