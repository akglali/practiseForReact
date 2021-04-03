import styled, { css} from 'styled-components';

const Button = styled.button`
    border: none;
    font-weight: ${props => props.length <= 1 ? 'bold' : 'normal'};
    ${props =>
    props.color && css`
    background-color: ${props => props.length < 2 ? props.theme[props.color] : 'red'};
    color: ${props => props.length <= 1 ? 'black' : 'white'};

`}
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
`

export default Button;