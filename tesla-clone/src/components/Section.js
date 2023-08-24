import React from "react";
import styled from "styled-components"

function Section(props){
    return(
        <Wrap>

            <ItemText>
                <h1>{props.title}</h1>
                <p>{props.description}</p>

            </ItemText>
            <Button>
                    <ButtonGroup>
                    <LeftButton>
                        Custom Order
                    </LeftButton>
                    <RightButton>
                        Existing Inventor
                    </RightButton>
                    
                </ButtonGroup>
                
            </Button>
            
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
justify-content: center;
margin-bottom: 30px;
@media (max-width: 768px) {
    flex-direction: column;
    align-items: center; /* Center align buttons vertically */
  } `

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
cursor:pointer;
margin:8px;
animation : animateDown infinite 2s`


const RightButton =styled.div`
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
cursor:pointer;
margin:8px;
animation : animateDown infinite 2s;
background-color: white;
opacity: 0.68;
color:black;`

const Button = styled.div`
margin-top: 400px;

`