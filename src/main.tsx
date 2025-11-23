import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
//busca por um elemento da pagina que tem o id root
//strictmode é basicamente uma boa pratica, pra garantir que enquanto ta desenvolvendo a
//pagina, a pagina rodaria
//ao buildar, ele some
//primeiro componente do react por padrao se chama app
//um component é uma funcao, meio que um html bombado
//jsx - uma extensao do html que pode ser usado dentro do js
//na teoria, pode ter react em apenas um trecho da pagina
//nao e muito comum, mas pode acontecer
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
