import React from 'react';

const PropExample = (props) => {
    console.log(props)
    const {flag, data, parentComponentHandler} = props;
    return (
        <div>           
            {flag ? data : 'flag is false'}
        <button onClick={parentComponentHandler}>Click</button>        
        </div>
    )
}

export default PropExample