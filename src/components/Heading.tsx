import styles from './Heading.module.css';
//nao pode se utilizar class como se faz em html puro, pq é reservado pro ts
//olhando assim, nao da pra saber qual classe existe, é necessario olhar no arquivo qual existe
//pra isso, utiliza a extensao css modules, que permite ver quais extensoes existem
//permite concatenar dentro do class name
export function Heading() {
  return <h1 className={`${styles.heading} ${styles.cyan}`}>Hello World!</h1>;
}
