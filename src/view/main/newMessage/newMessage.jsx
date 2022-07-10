import { Button, Form, Input, notification } from 'antd';
import React from 'react';
import { sendMessage } from '../../../services/smsSender';
import { StyledForm } from './style';
const axios = require('axios').default;

const { TextArea } = Input;

export const NewMessageForm = () => {

    const openNotification = (placement) => {
        notification.info({
            message: `Sent Successfully`,
            placement,
        });
    };

    const onFinish = (values) => {
        sendMessage(values);
        axios.post(`http://localhost:7272/Message/save-message`,
            values, { headers: { "content-type": "application/json" } })
            .then(function (response) {
                openNotification('bottomRight');
            });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (<StyledForm
        name="basic"
        labelCol={{
            span: 8,
        }}
        wrapperCol={{
            span: 16,
        }}
        initialValues={{
            remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Phone number"
            name="Number"
            rules={[
                {
                    message: 'Please input your Phone number!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Message"
            name="Content"
            rules={[
                {
                    message: 'Please input your Message!',
                },
            ]}
        >
            <TextArea />
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </StyledForm>);
}
