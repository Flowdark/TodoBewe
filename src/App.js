import React from 'react';

//React Redux
import { Provider } from 'react-redux';

//Store
import store from './store';

//Componente
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoTareas from './components/ListadoTareas';

const App = () => {
  return ( 
    <Provider
      store={store}
    >
      <div className="container">
        <Header />
        <Formulario />
        <ListadoTareas />
      </div>
    </Provider>
   );
}
 
export default App;
