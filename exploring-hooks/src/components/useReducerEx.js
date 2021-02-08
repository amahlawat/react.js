import React from 'react';

const initialState = { count: 1 };

const reducer = (state, action) => {
    switch(action.type){
        case "add":
            return { ...state, count: state.count + action.payload }
        case "sub":
            return { ...state, count: state.count - action.payload }
        default:
            return state;
    }
}

const MyComponent = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return(
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "add", payload: 1 })}>Add</button>
            <button onClick={() => dispatch({ type: "sub", payload: 1 })}>Subtract</button>
        </div>
    )
}

export default MyComponent;