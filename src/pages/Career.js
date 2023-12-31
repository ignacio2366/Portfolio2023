import styled from "styled-components";
import Navigation from "../components/Navigation";
import styles from "../assets/styles";
import systemdev from "../images/SystemDev.png";
import PhotoMobile from "../components/PhotoMobile";
import EntryScreen1 from "../images/EntryScreen1.png";
import Wolly from "../images/wollybuggers.png";
import Car from "../images/car3.png";
import Pilon from "../images/pilon.png";
import Payment from "../images/payment.png";
import { PhotoWeb } from "../components/PhotoWeb";
import Moblyze from "../images/mobylzeweb.jpg";
import Image7 from "../images/Image7.png";
import Number13 from "../images/13.jpg";
function Career(options) {
  return (
    <Container>
      <Navigation />
      <HeaderImg>
        <HeaderTxt>
          Working Experience and
          <span style={{ color: `${styles.cherry}` }}>
            Projects <br /> Handled
          </span>
        </HeaderTxt>
        <HeaderP>I secured my career when I was in third level.</HeaderP>
      </HeaderImg>
      <Section>
        <SectionH1>Working Experience</SectionH1>
        <Article>
          <TextHeader>Web and Mobile Developer – JR Position</TextHeader>
          <TextP>
            Rooche Digital Company. Texas USA | April 25, 2022 – Current
          </TextP>
          <ul>
            <TextList>
              Developing the application user interface based on the Figma
              Designed given by the UI/UX Designer approved by clients.
            </TextList>
            <TextList>
              Developing the functionalities based on the task assigned by the
              Project Manager.
            </TextList>
            <TextList>
              Technologies used for Mobile Development are React Native and
              Kotlin Android studio.
            </TextList>
            <TextList>
              The technology used React and Other Libraries for development and
              API for database connection for Web Development Projects.
            </TextList>
            <TextList>
              Absorb from On-the-Job Training with high score.
            </TextList>
          </ul>
        </Article>
        <CardContiner>
          <PhotoMobile
            img={EntryScreen1}
            title={"Moblyze"}
            context={
              "Moblyze is an app based talent marketplace for the net zero era, focussed primarily on the Energy & Industrial sectors"
            }
          />
          <PhotoMobile
            img={Wolly}
            title={"Wolly Bugger"}
            context={
              "Fishing Site locator and display the type of fishes from differnt area"
            }
          />
          <PhotoMobile
            img={Car}
            title={"Car Rental"}
            context={"On time Tracing and Tracking of the registered vehicles"}
          />
          <PhotoMobile
            img={Pilon}
            title={"Loan Management"}
            context={"On time Tracing and Tracking of the registered vehicles"}
          />
          <PhotoWeb
            img={Moblyze}
            title={"Moblyze"}
            context={
              "Moblyze is an app based talent marketplace for the net zero era, focussed primarily on the Energy & Industrial sectors"
            }
          />
          <PhotoWeb
            img={Payment}
            title={"Happy Talk"}
            context={
              "Find a person that user is interested talk with payment process"
            }
          />
        </CardContiner>
      </Section>
      <Section style={{ backgroundColor: `${styles.light}` }}>
        <Article>
          <TextHeader>
            Web and Application Developer – Trainee Position
          </TextHeader>
          <TextP>
            Top Notch Construction, Cavite | August 25 – November, 25, 2021
          </TextP>
          <ul>
            <TextList>
              Responsible for Designs, Front End Development using Adobe XD,
              HTML, CSS with Bootstrap, JavaScript (DOM, jQuery) and ASP.NET MVC
              Core and SQL as Backend.
            </TextList>
            <TextList>
              Responsible to development a Inventory system for warehouse in 52
              sites
            </TextList>
          </ul>
        </Article>
        <CardContiner>
          <PhotoWeb img={Image7} title={"Tool Management"} context={"Inventory System for Warehouse that will monitor the stocks and distributed of tools."} />
          <PhotoWeb
            img={Number13}
            title={"Dashboard Management"}
            context={
              "Monitor the request of the sites from different locations."
            }
          />
        </CardContiner>
      </Section>
    </Container>
  );
}
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${styles.dark};
`;

const HeaderTxt = styled.div`
  font-size: 4rem;
  color: ${styles.white};
  font-family: ${styles.black};
`;

const HeaderP = styled.p`
  font-size: 1.1rem;
  color: ${styles.white};
  font-family: ${styles.regular};
`;

const HeaderImg = styled.div`
  background-image: linear-gradient(
      rgba(33, 45, 60, 0.8),
      rgba(33, 45, 60, 0.8)
    ),
    url(${systemdev});
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 12% 0;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Section = styled.section`
  height: auto;
  width: 100%;
  background-color: ${styles.dark};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 42px 42px 0 0;
  margin-top: -25px;
  padding: 50px 0;
`;

const SectionH1 = styled.h1`
  color: ${styles.cherry};
  font-size: 3rem;
  font-family: ${styles.black};
  margin: 0px;
`;

const Article = styled.article`
  width: 89%;
  height: auto;
  background-color: ${styles.cherry};
  border-radius: 10px;
  padding: 31px 45px;
`;

const TextHeader = styled.h1`
  text-align: left;
  font-size: ${styles.medium};
  color: ${styles.white};
  font-size: 1.5rem;
  padding-left: 32px;
  margin: 0px;
`;
const TextP = styled.p`
  font-size: 1.2rem;
  color: ${styles.white};
  list-style-type: none;
  padding-left: 32px;
  font-family: ${styles.medium};
  margin: 1.2px;
`;
const TextList = styled.li`
  font-family: ${styles.regular};
  font-size: 1rem;
  color: ${styles.white};
  padding: 1.2px;
`;

const CardContiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 35px;
  padding: 31px 12px;
  gap: 5px;
`;
export default Career;
