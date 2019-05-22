import React from "react";
import './style.css'

const Information = props => {
    return (
        <div class="div">
            <h1 class="h1">Name: {props.characters.name}</h1>
            <p>Height: {props.characters.height}</p>
            <p>Mass: {props.characters.mass}</p>
            <p>Hair Color: {props.characters.hair_color}</p>
            <p>Skin Color: {props.characters.skin_color}</p>
            <p>Eye Color: {props.characters.eye_color}</p>
            <p>Birth Year: {props.characters.birth_year}</p>
            <p>Gender: {props.characters.gender}</p>
        </div>
    )
}

export default Information