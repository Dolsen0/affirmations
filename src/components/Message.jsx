import React, { useEffect, useState } from "react";

export default function Message() {
    const [message, setMessage] = useState("You're Great")
    
    useEffect(() => {
        fetch("https://www.affirmations.dev")
        .then((response) => response.json())
        .then((data) => {
            console.log({ data });
            setMessage(data)
        })
        .catch((err) => console.error(err));

    }, [setMessage]);
    return (
        <>
        <h2>
        {message}
        </h2>
        </>
    );
}
