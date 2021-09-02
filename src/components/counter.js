import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'; // функция, связывающая store c counter
import * as actions from '../actions';


const Counter = ({counter, inc, dec, res}) => {
    return (
        
        <div className="main__content">
            <div className="main__count">
                <span>{counter}</span>
            </div>
            <div className="main__triggers">
                <button onClick={inc} className="main__btn plus"></button>
                <button onClick={dec} className="main__btn minus"></button>
                <button onClick={res} className="main__btn reset">
                    <img src="./img/reset.svg" alt="reset"/>
                </button>
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => { // subscribe'ит обернутый компонент на обновление store
    return { counter: state }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch); 
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);