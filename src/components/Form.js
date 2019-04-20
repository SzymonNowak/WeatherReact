import React, { Component } from 'react';
import './Form.css';
const Form = (props) => {
    return(
        <form onSubmit={props.submit}>
            <fieldset >
                <div className="form-group ">
                    <input type="text"
                           value={props.value}
                           placeholder="Wpisz miasto"
                           onChange={props.change}
                    />
                </div>
                <button type="submit" className="btn btn-outline-dark ">Check Weather</button>
            </fieldset>
        </form>
    )
}

export default Form;