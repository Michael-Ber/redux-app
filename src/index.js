import {createStore} from 'redux';

const reducer = (state = 0, action = {}) => {
	switch(action.type) {
		case 'INC': return state + 1;
		case 'DEC': return state - 1;
		case 'RES': return 0;
		default: return state;
	}

}

const store = createStore(reducer);

const plus = document.querySelector('.main__btn.plus'),
	  minus = document.querySelector('.main__btn.minus'),
	  reset = document.querySelector('.main__btn.reset'),
	  count = document.getElementById('count');

const update = () => {
	count.textContent = store.getState();
}
update(); //инициализация начального состояния
store.subscribe(update); // при каждом изменении state вызывается update()
plus.addEventListener('click', () => {
	store.dispatch(inc());
	count.textContent = store.getState();
});

minus.addEventListener('click', () => {
	store.dispatch(dec());
});

reset.addEventListener('click', () => {
	store.dispatch(res());
});


const inc = () => ({type : 'INC'});
const dec = () => ({type : 'DEC'});
const res = () => ({type: 'RES'});
