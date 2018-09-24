import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider,connect } from 'react-redux'
import { createStore } from 'redux'

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const incCounter = () => {
    return {
        type: INCREMENT
    }
}

const decCounter = () => {
    return {
        type: DECREMENT
    }
}

const mainReducer = (state = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return state + 1
        case DECREMENT:
            return state - 1
        default:
            return state
    }
}

const mapStateToProps = (state) => {
    return {state}
} 

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch(decCounter),
        onIncrement: () => dispatch(incCounter)
    }
}

export default class Counter extends Component {
    render() {
        return (
            <div>
                {this.props.count}
                <br/>
                <button
                    onClick={() => this.props.onDecrement}
                >
                    -
                </button>
                <button
                    onClick={() => this.props.onIncrement}
                >
                    +
                </button>
                
            </div>
            
        );
    }
}

connect(mapStateToProps, mapDispatchToProps)(Counter)

const store = createStore(mainReducer)

render(
    <Provider store={store}>
        <Counter />
    </Provider>, document.getElementById('root')
)