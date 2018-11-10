import React from 'react';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) =>{
                return (
                    <div className="col-md-4">
                        <div className="recipe__box">
                            <img src={recipe.img_url} alt={recipe.title}/>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;
