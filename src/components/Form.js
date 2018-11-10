import React from 'react';
//if you dont need states, make it a stateless component function not class
const Form = props => (
    <form onSubmit={props.getRecipe} style={{marginBottom:"2rem"}}>
        <input className="form__input" type="text" name="recipeName"/>
        <button className="form__button">Search</button>
    </form>
);



export default Form;
