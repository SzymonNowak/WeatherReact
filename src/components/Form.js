import React, { Component } from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.submit}>
            <fieldset >
                <div className="form-group">
                    <input type="text"
                           value={props.value}
                           placeholder="Wpisz miasto"
                           onChange={props.change}
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary">Sprwadz pogode</button>
            </fieldset>
        </form>

    )
}

export default Form;