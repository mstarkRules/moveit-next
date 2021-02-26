import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox(){

    const contextData = useContext(ChallengesContext);

    const hasActiveChallenge = true;

    console.log(contextData);
    
    return(
        <div className={styles.challengeBoxContainer}>
            {hasActiveChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe 400 xp</header>

                    <main>
                        <img src="icons/body.svg"/>
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada de 3 minutos</p>
                    </main>
                        <footer>
                            <button
                                type="button"
                                className={styles.challengeFailedButton}
                            >
                                Falhei
                            </button>
                            <button
                                type="button"
                                className={styles.challengeSucceededButton}
                            >
                                Completei
                            </button>
                        </footer>
                    

                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                <strong>Finalize um ciclo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up"/>
                    Avance de level completando desafios
                </p>
            </div>
            )}
        </div>
    )
}
