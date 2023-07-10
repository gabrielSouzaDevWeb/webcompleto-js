import React from 'react';
import ReactDOM from 'react-dom';
import Filho from './components/Filho';
import Pai from './components/Pai';

ReactDOM.render(
  <>
    {/* <Saudacao tipo="Bom dia" nome="João" /> */}
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro" />
      <Filho nome="causa" />
      {/* <Filho nome="Paulo" />
      <Filho nome="Carla" /> */}
    </Pai>
  </>,

  document.getElementById('root')
);
