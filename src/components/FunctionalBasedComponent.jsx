import React from 'react';
import PropExample from '../PropExample';

const Child = () => <p>Child Component</p>

function FunctionalBasedComponent(){
    const parentComponentHandler = () => {
        console.log('Hello from parent component')
    }
    return (
        <div>
            <Child/>
            functional based component
            <PropExample parentComponentHandler={parentComponentHandler} flag={false} data="data as prop"/>
        </div>
    )
};

export default FunctionalBasedComponent;