import { Container } from './components/Container';
import { CountDown } from './components/CountDown';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';

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
//os elementos podem possuir atributos (attr) pode colocar as {} para jsx ou ""
//pode utilizar propriedades dessa maneira pra fazer alguma coisa dentro do component
//pode utilizar o pacote de lucide-react para utilizar os icones do react
// -> lembrar de organizar os imports

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <form className='form' action=''>
          <div className='formRow'>
            <label htmlFor='input'>Task</label>
            <input id='input' type='text' />
          </div>

          <div className='formRow'>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div className='formRow'>
            <p>Ciclos</p>
            <p>0 0 0 0 0 0</p>
          </div>
          <div className='formRow'>
            <button>Enviar</button>
          </div>
        </form>
      </Container>
    </>
  );
}

// export { App }; // -> uma forma de exportar, mas ao importar, pode se utilizar qualquer nome
//dessa forma é um export nomeado, entao obrigatoriamente tem que usar chaves e o nome correto ao importar
//pra facilitar, pode ja exportar a funcao, que dá exatamente na mesma coisa que foi feito aqui
