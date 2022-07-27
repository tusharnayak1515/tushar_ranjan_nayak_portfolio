import Head from 'next/head';
import { useRouter } from 'next/router';
import Image from 'next/image';
import bannerImg from '../public/static/images/banner.jpg';
import react from '../public/static/images/react.png';
import node from '../public/static/images/node.jpg';
import express from '../public/static/images/express.png';
import mongodb from '../public/static/images/mongodb.png';
import next from '../public/static/images/next.svg';
import js from '../public/static/images/js.jpg';
import python from '../public/static/images/python.png';

import styles from '../styles/Home.module.css';

export default function Home() {
  const router = useRouter();
  const skills = [{name: "React.js", url: react}, {name: "Node.js", url: node}, {name: "Express", url: express}, {name: "MongoDB", url: mongodb}, {name: "Next.js", url: next}, {name: "JavaScript", url: js}, {name: "Python", url: python}];

  const onProjectClick = (e)=> {
    e.preventDefault();
    router.push("/projects");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Tushar Ranjan Nayak</title>
        <meta name="keywords" content="portfolio next next.js tushar ranjan nayak" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <div className={styles.banner}>
          <div className={styles.banner_left}>
            <div className={styles.heading}>
              <h1>Hi! I Am</h1>
              <h1 className={styles.name}>Tushar Ranjan Nayak</h1>
            </div>

            <div className={styles.intro}>
              {/* <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem perferendis illum fuga dicta cumque dignissimos.   Natus sequi quae unde excepturi laborum, officiis ab laudantium vero dolores libero placeat consequatur, accusantium adipisci enim rerum labore?</h2> */}
              <h2>I’m a Full-Stack Web Developer. I have a passion for creating useful and creative websites. I have been working on <b>MERN STACK</b> and <b>NEXT JS</b> since one year and have quite good hands on it.</h2>
            </div>
          </div>

          <div className={styles.banner_right}>
            <Image src={bannerImg} alt="Banner" width="400px" height="400px" style={{border: "none", borderRadius: "50%"}} />
          </div>

        </div>

        <h1 className={styles.subhead}>Skills</h1>

        <div className={styles.skills}>
          {skills && skills.map((skill,index)=> {
            return(<div className={styles.skill_item} key={index}>
              <Image src={skill.url} alt={skill.name} width="150px" height="150px" style={{border: "none", borderRadius: "50%"}} />
              <h3>{skill.name}</h3>
            </div>)
          })}
        </div>

        <h1 className={styles.subhead}>Projects</h1>

        <div className={styles.projects_container}>
          <button onClick={onProjectClick}>View My Work</button>
        </div>

      </main>
    </div>
  )
}
