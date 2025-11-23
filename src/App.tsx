import { Heading } from './components/Heading';

import './styles/global.css';
import './styles/theme.css';

//maioria dos casos se utiliza jsx
//precisa dele sempre que se cria um component
//funcao que utiliza o nome em pascal case - PascalCase
//App
//HeaderHeading
//o que retorna da funcao é o que é exibido na pagina
//se tiver mais de uma linha no retorno, é recomendado que se use parenteses - nesse caso o prettier ja ta fazendo isso
//pode reutilizar quantas vezes quiser o component
//jsx só permite que voce retorne UM elemento pai por component
//a tag fechada e vazia se chama react fragment - é uma tag vazia, que funciona como elemento pai dos demais -> esse tipo de coisa funciona no react native?
//nesse caso, ao inspecionar, nao fica mais aparecendo uma div la
//pode ser util para nao quebrar layout
//poderia importar, por ser um elemento do react, <Fragment>
//o css pode ser aplicado como quiser
//dentro de theme fica as variaveis de css
export function App() {
  console.log('Oi');
  return (
    <>
      <Heading />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
    </>
  );
}

// export { App }; // -> uma forma de exportar, mas ao importar, pode se utilizar qualquer nome
//dessa forma é um export nomeado, entao obrigatoriamente tem que usar chaves e o nome correto ao importar
//pra facilitar, pode ja exportar a funcao, que dá exatamente na mesma coisa que foi feito aqui
