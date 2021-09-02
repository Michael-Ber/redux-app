import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import App from './components/app';


const store = createStore(reducer);

// const { inc, dec, res } = bindActionCreators(actions, dispatch);

// const update = () => {
ReactDOM.render(
<Provider store = {store}>  {/*теперь все приложение имеет доступ к store*/}
	<App/>  {/*также в Provider включен механизм отслеживания изменений, т.е subscribe не нужен*/}
</Provider>, document.getElementById('root'));
// }


// update(); //инициализация начального состояния
// store.subscribe(update); // при каждом изменении state вызывается update()




