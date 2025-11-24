import type React from 'react';
import styles from './styles.module.css';

type HeadingProps = {
  children: React.ReactNode; //utiliza desse tipo pra aceitar qualquer coisa que o react aceita
};

//nao pode se utilizar class como se faz em html puro, pq é reservado pro ts
//olhando assim, nao da pra saber qual classe existe, é necessario olhar no arquivo qual existe
//pra isso, utiliza a extensao css modules, que permite ver quais extensoes existem
//permite concatenar dentro do class name
//props - propriedades do component
//props - children do elemento
//ao utilizar as chaves {} está informando ao tsx que vai utilizar js
//é uma boa pratica passar o tipo das coisas, como o props
//pode passar atributo
//a tipagem, unica coisa que precisa se preocupar por enquanto é a children
//em ts se utiliza type
//tem que dar um tipo pra props
//destructor
//desestruturar o objeto
//pode fazer essa desetruturacao direto
export function Heading({ children }: HeadingProps) {
  return (
    <>
      <h1 className={`${styles.heading} ${styles.cyan}`}>{children}</h1>
    </>
  );
}
