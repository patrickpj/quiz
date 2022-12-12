import React from "react";

export default function Answers(props) {
    const style = { backgroundColor: props.clicked ? "#D6DBF5" : "white" }
    // console.log(props.clicked)

    return (
        <div className="answer">
            {props.options.map( answer => <button style={style} onClick={props.hold} className="answer-button">{answer}</button> )}
        </div>
    )
}