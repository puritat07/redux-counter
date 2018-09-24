import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

const DECREMENT = 'DECREMENT'
const INCREMENT = 'INCREMENT'

const decCounter = () => {
    return {
        type: DECREMENT
    }
}

const incCounter = () => {
    return {
        type: INCREMENT
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
const store = createStore(mainReducer)

const mapStateToProps = (state) => {
    return {
        count: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncCounter: () => {dispatch(incCounter())},
        onDecCounter: () => {dispatch(decCounter())}
    }
}

export default class Counter extends Component {
    render() {
        console.log(`Current State: ${this.props.count}`)
        return (
            <div>
                Count: {this.props.count}<br/>
                <button
                    onClick={this.props.onDecCounter}
                >
                -
                </button>
                <button
                    onClick={this.props.onIncCounter}
                >
                +
                </button>
            </div>
        );
    }
}

const ConnectedCounter = connect(
    mapStateToProps,
    mapDispatchToProps
    )(Counter)

render(
    <Provider store={store}>
        <ConnectedCounter />
    </Provider>,
    document.getElementById('root')
)