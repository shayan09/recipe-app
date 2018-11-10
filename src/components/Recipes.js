import React from 'react';

import {Link} from 'react-router-dom';

const Recipes = props => (
    <div className="container">
        <div className="row">
            {props.recipes.map((recipe) =>{
                return (
                    <div key={recipe.recipe_id} className="col-md-4" style={{marginBottom: "2rem"}}>
                        <div className="recipes__box">
                            <img className="recipe__box-img"
                            src={recipe.image_url}
                            alt={recipe.title}/>
                            <div className="recipe__text">
                                <h5 className="recipes__title">
                                    {recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
                                </h5>
                                <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
                            </div>
                            <div className="align_button"><button className="recipe_buttons"><a href={recipe.publisher_url} target={"_blank"}>View Website</a></button></div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
);

export default Recipes;
