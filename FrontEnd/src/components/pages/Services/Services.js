import { CarouselProvider, DotGroup, Slide, Slider } from "pure-react-carousel";
import Carousel from 'react-bootstrap/Carousel'
import * as React from "react";
import { Element } from "react-scroll";
import './Services.css'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import styled from "styled-components";
import { Marginer } from "./marginer";
import { ReviewCard } from './ReviewCard';
import { SectionTitle } from "./sectionTitle";
import { useMediaQuery } from "react-responsive";
import img from './images/insight.jpg'
import img2 from './images/plan.jpg'
import img3 from './images/img3.jpg'
import "pure-react-carousel/dist/react-carousel.es.css";
import Fade from 'react-reveal/Fade';
import User1Img from "./images/img-5.jpg";
import User2Img from "./images/img-5.jpg";
import User3Img from "./images/img-5.jpg";
import User4Img from "./images/img-5.jpg";
import invest from "./images/about.jpg";
import dashboard from "./images/dash.jpg"
import retire from "./images/img9.jpg"
import { Buttons } from '../../Button';
import Navbar from "../../Navbar"

const ReviewsContainer = styled(Element)`
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -418px;
  bottom: 35px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin-top: -833px;
   
  }
  @media screen and (min-width: 380px) and (max-width: 880px)
{
    width: 100%;
    margin-top: -483px;
}
`;

const StyledCarouselProvider = styled(CarouselProvider)`
  margin-top: 1200px;
  width: 50%;
 
  @media screen and (max-width: 480px) {
    width: 100%;
   
  }
  @media screen and (max-width:  3341px) {
    width: 100%;
    margin-top: 806px;
   
  }
`;


const StyledSlide = styled(Slide)`
  .carousel__inner-slide {
    
    display: flex;
    justify-content: center;
    background-image: linear-gradient( to right, #b9b9b9, #9e9fa2 15%, #e5f0e7 15%, #d7f0a2 85%,#d7f0a2 85%,#d7f0a2 85% );
    left: 0;
    width: 100%;
    height: 76%;
    
  }
  .carousel-inner {
    position: relative;
    width: 100%;
    height: 549px;
    overflow: hidden;
}
`;
const StyledSlider = styled(Slider)`
  .carousel__inner-slider {
   
    height: 549px;
  } @media screen and (max-width: 480px) {
    width: 100%;
    height: 656px;
  }
  @media screen and (min-width: 480px)  and (max-width: 880px) {
    width: 100%;
    height: 456px;
  }
`;

const StyledDotGroup = styled(DotGroup)`
  margin: auto;
  display: flex;
  padding-top: 3em;
  margin-top: -892px;
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
    @media screen and (min-width: 380px) and (max-width: 880px)
  {
      width: 100%;
      margin-top: -856px;
  }
  }
  .carousel__dot--selected {
    background-color: #79a37a;
  }
  
`;
export function Services() {
  const isMobile = useMediaQuery({ query: "(max-width: 480px)" });

  return (
    <>
    <div className ="dd"> <Navbar /></div>
 

    <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img} 
      alt="First slide"
    />
    <Carousel.Caption>
      <h2 className = "serviceH2" > <br></br><br></br><br></br>Personal Service Insight</h2>
      <h2 className = "serviceH3">Create Your Finicial Solutions</h2>
      <p className="mainP">Learn how our Finicial advisers can work with you to create a strategy built around your life and your priorities.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img3} 
      alt="Second slide"
    />

    <Carousel.Caption>
    <h2 className = "serviceH2">Our Core Values</h2>
      <h2 className = "serviceH3">Your Unique Life. Our Guided Approach.</h2>
      <p className="mainP">The money decisions you make today lay the foundation for a successful lifetime and legacy. As your dedicated personal advisor, we can assist you in managing your budget, investments, insurance coverage, and other important factors that contribute to your overall financial big picture.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h2 className = "serviceH2">Services For Business Owner</h2>
      <h2 className = "serviceH3">We can help you save up for your bussiness</h2>
      <p className="mainP"> Consultants Can Easily Access Funds For You To: Take your business online and secure your profit</p>
      <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick= {(e) => {
            e.preventDefault();
            window.location.href='https://www.youtube.com/watch?v=RcN3gEiMihI';
            }}
        >Learn More <i className='far fa-play-circle' /></Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  
   <Fade bottom>

 </Fade>
 <div className="accordion">
        <Accordion defaultActiveKey="0">

          <Card className="accordion">
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Balance Sheet Analysis
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  What Is a Balance Sheet?
                </div>
                <p>
                  A balance sheet is a financial statement that reports a company's assets, liabilities and shareholders' equity at a specific point in time, and provides a basis for computing rates of return and evaluating its capital structure. It is a financial statement that provides a snapshot of what a company owns and owes, as well as the amount invested by shareholders.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card >
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Cash Flow Analysis
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div>
                  What Is Cash Flow From Financing Activities?
                </div>
                <p>
                  Cash flow from financing activities (CFF) is a section of a company’s cash flow statement, which shows the net flows of cash that are used to fund the company. Financing activities include transactions involving debt, equity, and dividends.
                  Cash flow from financing activities provides investors with insight into a company’s financial strength and how well a company's capital structure is managed.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Income Analysis
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <div>
                  What Is Cash Flow From Financing Activities?
                </div>
                <p>
                  What is an Income Statement?
                  An income statement is one of the three important financial statements used for reporting a company's financial performance over a specific accounting period, with the other two key statements being the balance sheet and the statement of cash flows.
                  Also known as the profit and loss statement or the statement of revenue and expense, the income statement primarily focuses on the company’s revenues and expenses during a particular period.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>


          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="3">
                Assets Management
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <div>
                  What Are Assets Under Management (AUM)?
                </div>
                <p>
                  Assets under management (AUM) is the total market value of the investments that a person or entity manages on behalf of clients. Assets under management definitions and formulas vary by company.
                  In the calculation of AUM, some financial institutions include bank deposits, mutual funds, and cash in their calculations. Others limit it to funds under discretionary management, where the investor assigns authority to the company to trade on his behalf.
                  Overall, AUM is only one aspect used in evaluating a company or investment. It is also usually considered in conjunction with management performance and management experience. However, investors often consider higher investment inflows and higher AUM comparisons as a positive indicator of quality and management experience.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>



        </Accordion>
      </div>
 <div class = "table">
        <div class="row">
                <div class="column" xs={6} md={4}>
                      <div className ="tdata">
                        <img className="image" src = {invest}/>
                        <p className="para"> We’re at your service. You offer customers an exceptional experience; we are passionate about giving you an exceptional experience as well. <br/> 
                        We have a proven process. Our roadmap allows us to confidently meet our commitments to you, but is still adaptable to meet each client’s unique needs and expectations.</p>
                        </div>
                      </div>
                      <div class="column" xs={6} md={4}>
                        <div className ="tdata">
                      <img className="image" src = {dashboard}/>
                        <p className = "para">Our client’s foremost desire is to first preserve their capital, and second to grow their capital. We want our clients to know exactly what they are investing. Learn how our finicial advisers can work with you to create a strategy built around your life and your priorities. </p>
                        </div>
                      </div>
                      <div class="column"xs={6} md={4}>
                      <div className ="tdata">
                      <img className="image" src = {retire}/>
                        <p className="para">The most ignored part of your everyday money life is your retirement. For some, retirement is decades away, so why think about it now? Others feel that they’re so far behind on savings that their situation is hopeless. Neither is true. It’s never too late to start saving. Equally true: It’s never too early. <br/>Start Planning Your Retirement with Us</p>
                        </div>
                </div>
      </div>
 </div>

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
          <StyledSlider>
            <StyledSlide index={0}>
              <ReviewCard
                reviewText=" I very much enjoyed working with Beema and the team - they have an excellent grasp of their subject, and have created something great for us."
                username="John coner"
                userImgUrl={User1Img}
              />
            </StyledSlide>
            <StyledSlide index={1}>
              <ReviewCard
                reviewText="Finding Financial support for small business is not always easy! Thanks to the Thinking Capital and their team  for working with us in achieving our goals. The team has been very helpful and insightful."
                username="Marci Demi"
                userImgUrl={User2Img}
              />
            </StyledSlide>
            <StyledSlide index={2}>
              <ReviewCard
                reviewText="Excellent staff and rates are lowest compared to others. I have an account with this company for four years I recommend them."
                username="Erin Sterns"
                userImgUrl={User3Img}
              />
            </StyledSlide>
            <StyledSlide index={3}>
              <ReviewCard
                reviewText="The kindness you showed a small business owner like myself was so incredible. Going through such tumultuous pathways through the Global Business Shutdown was so uncertain for a small business owner like myself."
                username="Kobe Mice"
                userImgUrl={User4Img}
              />
            </StyledSlide>
          </StyledSlider>
          <StyledDotGroup />
        </StyledCarouselProvider>
      </ReviewsContainer>
     
     
   </>   
  );
}

