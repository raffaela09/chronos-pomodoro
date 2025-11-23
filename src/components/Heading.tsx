import styles from './Heading.module.css';
//nao pode se utilizar class como se faz em html puro, pq é reservado pro ts
//olhando assim, nao da pra saber qual classe existe, é necessario olhar no arquivo qual existe
//pra isso, utiliza a extensao css modules, que permite ver quais extensoes existem
//permite concatenar dentro do class name
//props - propriedades do component
//props - children do elemento
//ao utilizar as chaves {} está informando ao tsx que vai utilizar js
//é uma boa pratica passar o tipo das coisas, como o props
export function Heading(props) {
  console.log(props);
  return (
    <>
      <h1 className={`${styles.heading} ${styles.cyan}`}>{props.children}</h1>
    </>
  );
}
