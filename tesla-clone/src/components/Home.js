import React from "react";
import { styled } from "styled-components";
import Section from "./Section";

function Home(){
    return(
        <Container>
            <Section title="Model S"
            backgroundImg="model-s"
            description="Order online for Touchness Delivery"
            leftButoon="Custom Order"
            rightOrder="Existing Inventor"/>
            <Section title="Model Y"
                backgroundImg="model-y"
                description="Order online for Touchness Delivery"
                leftButoon="Custom Order"
                rightOrder="Existing Inventor"/>
            <Section title="Model 3"
                backgroundImg="model-3"
                description="Order online for Touchness Delivery"
                leftButoon="Custom Order"
                rightOrder="Existing Inventor" />
            <Section title="Model X"
                backgroundImg="model-x"
                description="Order online for Touchness Delivery"
                leftButoon="Custom Order"
                rightOrder="Existing Inventor" />
            <Section/>
        </Container>
    )
}
export default Home;

const Container = styled.div`
    height:100vh`