import React from "react";
import { styled } from "styled-components";
import Section from "./Section";

function Home(){
    return(
        <Container>
            <Section title="Model S"
            backgroundImg="model-s.jpg"
            description="Order online for Touchness Delivery"
            leftButton="Custom Order"
            rightButton="Existing Inventor"/>
            <Section title="Model Y"
                backgroundImg="model-y.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor"/>
            <Section title="Model 3"
                backgroundImg="model-3.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor" />
            <Section title="Model X"
                backgroundImg="model-x.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor" />
            <Section title="Solar Panels"
                backgroundImg="solar-panel.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor"/>
            <Section title="Solar Roof"
                backgroundImg="solar-roof.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor" />
            <Section title="Accessories"
                backgroundImg="accessories.jpg"
                description="Order online for Touchness Delivery"
                leftButton="Custom Order"
                rightButton="Existing Inventor" />
        </Container>
    )
}
export default Home;

const Container = styled.div`
    height:100vh`