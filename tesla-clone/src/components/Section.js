import React from "react";
import styled from "styled-components"

function Section(){
    return(
        <Wrap>

            <ItemText>
                <h1>Model S</h1>
                <p>Order Online for Touchless Delivery</p>

            </ItemText>
            <ButtonGroup>
                <LeftButton>
                    LeftButton
                </LeftButton>
                <RightButton>
                    RightButton
                </RightButton>
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>
        </Wrap>
    )
}

export default Section;

const Wrap = styled.div`
height : 100vh;
width : 100vw;
background-size:cover;
background-position:center;
background-repeat: no-repeat;
background-image: url('/imagaes/model-s.jpg');
display: flex;
flex-direction: column;
justify-content: space-between
align-items: center;
`

const ItemText =styled.div`
padding-top:15vh;
text-align:center;`

const ButtonGroup =styled.div`
display:flex;
margin-bottom: 30px`

const LeftButton = styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width:256px;
color:white;
display:flex;
justify-content: center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-tranform:uppercase;
font-size:12px;
cursor:pointer;`


const RightButton =styled.div`
background-color: rgba(23, 26, 32, 0.8);
height: 40px;
width:256px;
color:white;
display:flex;
justify-content: center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-tranform:uppercase;
font-size:12px;
cursor:pointer;`


const DownArrow = styled.img`
margin-top:20px;
height:40px;`