import React, { Component } from 'react';

const Result = (props) => {
    return(
        <div>{String(props.error)}</div>
    )
}

export default Result;