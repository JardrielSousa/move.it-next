import styles from '../style/components/ExperienceBar.module.css'

export function ExperienceBar(){
    return(
        <header className={styles.experienceBar}>
            <span>0xp</span>
            <div className={styles.div}>
                <div style={{width:'50%'}}></div>

                <span className={styles.currentExperience} style={{left:'50%'}}>
                    300px
                </span>
            </div>
            <span>600px</span>
        </header>
    );
}