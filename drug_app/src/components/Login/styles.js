import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 130px 0; 

    #span_input {
        margin-top: 13px;
        margin-left: 5px;
    }
    .forgot_pass {
        margin-top: 10px;
    }

    .icon__input {
        padding: 0px 10px;
        height: 100%;
        /* border: 2px solid white; */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .icon__input #icon {
        position: absolute;
        left: 500px;
        /* top: 500px; */
        margin-top: 5px;
    }

`;


export const Button  = styled.button`
    padding: 12px 155px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 6px;
    background: #4169E1; 
    border: transparent;
    color: white;
    font-size: 20px;
`;

export const Input =  styled.input`
  padding: 10px 100px;
        border-radius: 6px;
        outline: 0;
        color: #313131;
        margin-top: 15px;
        background: #FFF;
        border: 1px solid white;
        text-align: center;
`;