import styled from "styled-components";

const MessageContainer = styled.span`
    width: 100%;
    height: fit-content;
    margin-bottom: 40px;
`;

const Content = styled.div`
    border: 1px solid black;
    border-radius: 5px;
    overflow-wrap: break-word;
    padding: 2px;
`;

const PhoneNumber = styled.span`
    color: black;
    font-weight: bold;
`;

const Time = styled.span`
    color: gray;
    float: right;
`;

export const Message = ({ number, content, time }) => {
    return (
        <MessageContainer>
            <PhoneNumber>{number}</PhoneNumber>
            <Time>{time}</Time>
            <Content>{content}</Content>
        </MessageContainer>
    );
}