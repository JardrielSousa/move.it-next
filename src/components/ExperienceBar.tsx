import { useContext, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/ExperienceBar.module.css'

export function ExperienceBar(){
    const {currentExperience,experiencToNextLevel}  = useContext(ChallengesContext) ;
    const percentToNextLevel = Math.round(currentExperience*100)/ experiencToNextLevel;
    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div className={styles.div}>
                <div style={{width:`${percentToNextLevel}%`}}></div>

                <span className={styles.currentExperience} style={{left:`${percentToNextLevel}%`}}>
                {currentExperience}xp
                </span>
            </div>
            <span>{experiencToNextLevel}xp</span>
        </header>
    );
}