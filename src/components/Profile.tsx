import styles from './../style/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/jardrielsousa.png" alt="Jardriel Sousa"/>
            <div>
                <strong>Jardriel Sousa</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level 1</p>
            </div>
        </div>
    );
}