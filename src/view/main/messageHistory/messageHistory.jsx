import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Message } from './message';
const axios = require('axios').default;

const HistoryLayout = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column; 
    width: 400px;
    min-height: 700px;
    height: 100%
    overflow: auto;
`;

export const MessageHistory = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:7272/Message/get-all`, {headers:{"content-type": "application/json"}})
        .then(function (response) {
            setMessages(response.data);
        });
    },[]);



    return (<HistoryLayout>
        <h1>Message History ({messages.length})</h1>
        {messages.map(msg => {
            return <Message number={msg.number} content={msg.content} time={msg.date} />
        })}
    </HistoryLayout>);
};