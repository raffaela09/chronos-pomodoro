//esse arquivo vai ser buscado sempre que tentar importar alguma coisa dessa pasta
import styles from './styles.module.css';

export function CountDown() {
  return <div className={styles.container}>00:00</div>;
}
