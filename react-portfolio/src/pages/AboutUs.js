import React from 'react'
// Page component
import AboutSection from '../components/AboutSection';
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";

const AboutUs = () => {
    return (
        <div>
            <AboutSection></AboutSection>
            <ServicesSection></ServicesSection>
            <FaqSection></FaqSection>
        </div>
    )
}

export default AboutUs
