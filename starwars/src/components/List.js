import React from "react";
import Information from "./Information"

const List = props => {
    return (
        <div>
            {props.characters.map(char => (<Information characters={char}/>))}
        </div>
    )
}

export default List;