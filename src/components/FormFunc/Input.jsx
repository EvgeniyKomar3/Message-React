import React from "react";


export const Input = (props) => {

    return <input placeholder="Ввидите сообщение" type="text" value={props.value}
                  onChange={props.change}/>
}