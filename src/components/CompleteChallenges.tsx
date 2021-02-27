import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../style/components/CompleteChallenges.module.css';
export function CompleteChallenges(){
    const { challengesCompleted } = useContext(ChallengesContext)
    return(
        <div className={styles.CompleteChallengesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}