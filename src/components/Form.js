import React, { Component } from 'react';

const Form = (props) => {
    return(
        <form>
            <input type="text"
                   value={props.value}
                   placeholder="Wpisz miasto"
                   onChange={props.change}
            />
            <button>Sprawdz pogode</button>
        </form>
    )
}

export default Form;