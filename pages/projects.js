import React from 'react';
import Head from 'next/head';
import myprojects from '../public/utils/projects';

import styles from '../styles/projects.module.css';
import Project from '../components/Project';

const Projects = ({allProjects}) => {
  return (
    <div className={styles.projects}>
        <Head>
            <title>Projects</title>
            <meta name="keywords" content="portfolio, next, next.js, projects" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <h1 className={styles.head}>My Projects</h1>
        <div className={styles.projects_div}>
            {allProjects && allProjects.map((project,index)=> {
                return(<Project project={project} key={index} />)
            })}
        </div>
    </div>
  )
}

export async function getServerSideProps() {
    let data = myprojects;
    return {
      props: {allProjects: data},
    }
  }

export default Projects;