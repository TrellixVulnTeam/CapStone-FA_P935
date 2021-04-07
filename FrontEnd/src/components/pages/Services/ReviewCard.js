import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import  {FontAwesomeIcon}  from "@fortawesome/react-fontawesome";
import * as Icons from "@fortawesome/fontawesome-free-solid"
import React from "react";
import styled from "styled-components";
import { Marginer } from "./marginer";

const CardContainer = styled.div`
  width: 350px;
  height: 430px;
  padding-bottom: 14.625%;
  background-color: #fff;
  box-shadow: 0px 0px 7px rgba(17, 17, 17, 0.2);
  border-radius: 3px;
  margin: 5px 0;
  position: relative;
  padding: 10px 1.2em;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 29px;
  left: 17px;
  color: #d1d1d1;
  font-size: 37px;
  
`;

const ReviewText = styled.p`
  font-size: 17px;
  color: #585858;
  font-weight: normal;
  display: flex;
  justify-content: center;
  height: 3em;
`;

const Line = styled.span`
  min-width: 100%;
  height: 1em;
  min-height: 1px;
  margin-bottom: 1em;
  background-color: #cdcdcd;
  display: flex;
  @media screen and (min-width: 480px)  and (max-width: 880px) {
    height: 0em;
    margin-bottom: -1em;
    margin-top: -3em;
  }
`;

const UserDetails = styled.div`
  display: flex;
  align-items: center;
  @media screen and (min-width: 480px)  and (max-width: 880px) {
    height: 21em;

  }
`;

const UserImg = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Username = styled.span`
  font-size: 15px;
  color: #000;
  height: 1em;
`;

export  function ReviewCard(props) {
  const { reviewText, username, userImgUrl } = props;

  return (
    <CardContainer>
      <QuoteIcon>
        <FontAwesomeIcon icon={Icons.faQuoteLeft} />
      </QuoteIcon>
      <Marginer direction="vertical" margin="6em" />
      <ReviewText>{reviewText}</ReviewText>
      <Marginer direction="vertical" margin="7em" />
      <Line />
      <UserDetails>
        <UserImg src={userImgUrl} />
        <Username>{username}</Username>
      </UserDetails>
    </CardContainer>
  );
}