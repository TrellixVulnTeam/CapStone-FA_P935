import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import * as React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { Marginer } from "./marginer";
import { ReviewCard } from '../ReviewCard';
import { SectionTitle } from "./sectionTitle";
import { useMediaQuery } from "react-responsive";

import "pure-react-carousel/dist/react-carousel.es.css";

import User1Img from "./images/img-5.jpg";
import User2Img from "./images/img-5.jpg";
import User3Img from "./images/img-5.jpg";
import User4Img from "./images/img-5.jpg";

import Navbar from "../../Navbar"

const ReviewsContainer = styled(Element)`
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  width: 50%;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    display: flex;
    justify-content: center;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  justify-content: center;
  button {
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: #e4e4e4;
    border: none;
    outline: none;
    &:not(:last-of-type) {
      margin-right: 3px;
    }
  }
  .carousel__dot--selected {
    background-color: #c4c4c4;
  }
`;
export function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <>
      <Navbar />
      <ReviewsContainer>
        <SectionTitle>What others are saying about us</SectionTitle>
        <Marginer direction="vertical" margin="3em" />
        <StyledCarouselProvider
          naturalSlideWidth={200}
          naturalSlideHeight={isMobile ? 250 : 205}
          totalSlides={4}
          visibleSlides={isMobile ? 1 : 2}
          dragEnabled={false}
        >
          <Slider>
            <StyledSlide index={0}>
              <ReviewCard
                reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                username="John coner"
                userImgUrl={User1Img}
              />
            </StyledSlide>
            <StyledSlide index={1}>
              <ReviewCard
                reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                username="John coner"
                userImgUrl={User2Img}
              />
            </StyledSlide>
            <StyledSlide index={2}>
              <ReviewCard
                reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                username="John coner"
                userImgUrl={User3Img}
              />
            </StyledSlide>
            <StyledSlide index={3}>
              <ReviewCard
                reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                username="John coner"
                userImgUrl={User4Img}
              />
            </StyledSlide>
          </Slider>
          <StyledDotGroup />
        </StyledCarouselProvider>
      </ReviewsContainer>
      <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </>
  );
}

