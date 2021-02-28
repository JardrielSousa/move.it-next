import Head from 'next/head'

import { Profile } from "../components/Profile"
import { ExperienceBar } from "./../components/ExperienceBar"
import { CompleteChallenges } from "../components/CompleteChallenges";
import { CountDown } from "../components/CountDown";
import { ChallengeBox } from "../components/ChallengeBox";

import styles from '../style/pages/Home.module.css';
import { CountDownProvider } from '../contexts/CountDownContext';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | move.it</title>
      </Head>

      <ExperienceBar />
      
      <CountDownProvider>
        <section>
          <div>
            <Profile />
            <CompleteChallenges />
            <CountDown />
          </div>
          <div>
            <ChallengeBox />
          </div>
        </section>
      </CountDownProvider>
    </div>
  )
}
