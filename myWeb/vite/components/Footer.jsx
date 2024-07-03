import React from "react";

export default function Footer() {
let text;
    switch (new Date().getDay()) {
        default:
    text = "Looking forward to the Weekend";
    break;
case 6:
    text = "Today is Saturday";
    break;
case 0:
    text = "Today is Sunday";
}
    return (
        <div>
            <hr />
            <h5>{text}</h5>
        </div>
    )
}