import React from "react";
import styled from "styled-components"

function Header(){
    return(
        <Container>
            <div>
                <img src="imagaes/logo-tesla.svg" alt=""/>
            </div>


            <Menu>
                <p><a href="www.example.com">MODEL S</a></p>
                <p><a href="www.example.com">MODEL Y</a></p>
                <p><a href="www.example.com">MODEL 3</a></p>
                <p><a href="www.example.com">MODEL X</a></p>
            </Menu>
            <Rightmenu>
                <p><a href="wwww.example.com">TESLA ACCOUNT</a></p>
            </Rightmenu>
        </Container>
    )
}
export default Header;

const Container = styled.div`
min-height: 60px;
position: fixed;
display: flex;
align-items: center;
padding: 0 20px;`

const Menu = styled.div`
display: flex;
align-items: center;
font-weight: 60px;
justify-content: center;

p{
    font-weight: 600;
    text-tranform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
}
`
const Rightmenu = styled.div`
    font-weight: 600;
    text-tranform: uppercase;
    padding: 0 10px;
`