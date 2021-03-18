import React, { useState, useEffect } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://127.0.0.1:5005";

const Home = () => {
    const [response, setResponse] = useState([]);

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT);
        socket.on("messages", data => {
            const file = data.split(/\r?\n|\r/)
          setResponse(file);
        });
      }, []);

    return (
        <div div className="container mt-5">
            <h1>Hola prueba</h1>
            <p>
                {/* It's <time dateTime={response}>{response}</time> */}
                {
                    response.map(item => (
                        <p>{item}</p>
                    ))
                }
            </p>
        </div>
    )
}

export default Home
