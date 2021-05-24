import React from "react";
import home1 from "../img/home1.png";
// styled
import styled from "styled-components";

const AboutSection = () => {
  return (
    <StyledAboutDiv>
      <StyledDescriptionDiv>
        <div className="title">
          <StyledHideDiv>
            <h2>We work to make</h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHideDiv>
          <StyledHideDiv>
            <h2>true.</h2>
          </StyledHideDiv>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </StyledDescriptionDiv>
      <StyledImageDiv>
        <img src={home1} alt="guy with camera" />
      </StyledImageDiv>
    </StyledAboutDiv>
  );
};

// styled components
const StyledAboutDiv = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const StyledDescriptionDiv = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const StyledImageDiv = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const StyledHideDiv = styled.div`
  overflow: hidden;
`;

export default AboutSection;
