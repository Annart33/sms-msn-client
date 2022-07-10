import { Button } from "antd";
import { useState } from "react";
import styled from "styled-components";
import { MessageHistory } from "./messageHistory/messageHistory";
import { NewMessageForm } from "./newMessage/newMessage";

const StyledLayout = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const APP_OPTIONS = {
    HISTORY: 'History',
    NEW_MESSAGE: 'New Message'
}

const StyledButton= styled(Button)`
    right: 33%;
`;

export const Main = () => {

    const [selectedOption, setOption] = useState(APP_OPTIONS.NEW_MESSAGE);

    const toggleOption = () => {
        if (selectedOption == APP_OPTIONS.NEW_MESSAGE) {
            setOption(APP_OPTIONS.HISTORY);
        } else {
            setOption(APP_OPTIONS.NEW_MESSAGE);
        }
    }

    return (<StyledLayout>
        <StyledButton onClick={toggleOption}>{selectedOption}</StyledButton>
        {selectedOption == APP_OPTIONS.NEW_MESSAGE ? <MessageHistory />: <NewMessageForm />}
    </StyledLayout>);
};  