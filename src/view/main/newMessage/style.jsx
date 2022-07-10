import { Form } from "antd";
import styled from "styled-components";

export const StyledForm = styled(Form)`
width: fit-content;

textarea, input{
    width: 100%;
    border-radius: 5px;
}

textarea{
    height: 200px;
}

.ant-form-item-label{
    text-align: left;
}

.ant-form-item{
    display: flex;
    flex-direction: column;
}

.ant-form-item-control{
    width: 400px;
    max-width: 100%;
}

.ant-col-offset-8{
    margin-left: 0px;
}

.ant-btn-primary{
    float: right;
    position: relative;
    border-radius: 20px;
    border-color: #161616;
    background: #161616;
}
`;