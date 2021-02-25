import { Profile } from "../components/Profile"
import { ExperienceBar } from "./../components/ExperienceBar"
import styles from '../style/pages/Home.module.css';
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import Head from 'next/head'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>
    <ExperienceBar />
    <section>
      <div>
        <Profile />
        <CompleteChallenges />
        <CountDown />
      </div>
      <div></div>
    </section>
   </div>
  )
}
