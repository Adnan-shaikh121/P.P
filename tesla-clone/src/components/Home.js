import React from "react";
import { styled } from "styled-components";
import Section from "./Section";

function Home(){
    return(
        <Container>
            <Section title="Model S"
            description="Order online for Touchness Delivery"
            leftButoon="Custom Order"
            rightOrder="Existing Inventor"/>
            <Section title="Model Y"
                description="Order online for Touchness Delivery"
                leftButoon="Custom Order"
                rightOrder="Existing Inventor"/>
            <Section />
            <Section />
            <Section />
        </Container>
    )
}
export default Home;

const Container = styled.div`
    height:100vh`