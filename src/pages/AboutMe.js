import styled from "styled-components";
import Navigation from "../components/Navigation";
import styles from "../assets/styles";
import pajahtoga from "../images/PajaToga.png";
import graduation from "../images/graduation.png";
import { PhotoCert } from "../components/PhotoCard";
import academic2023 from "../images/academic2023.jpg";
import academic2022 from "../images/academic2022.png";
import award1 from "../images/award1.jpg";
import award2 from "../images/award2.jpg";
import cert1 from "../images/cert1.jpg";
function AboutMe() {
  return (
    <Container>
      <Navigation />
      <Header>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <HeaderTxt>
            Mark Angelo F.
            <br /> Ignacio <br />
            <span style={{ color: `${styles.cherry}` }}>
              Web and Mobile Developer
            </span>
          </HeaderTxt>
          <div>
            <HeaderP>Email: markangeloignacio001@gmail.com </HeaderP>
            <HeaderP>
              Linkedin:
              https://www.linkedin.com/in/mark-angelo-ignacio-b0638720b/
            </HeaderP>
          </div>
        </Box>
        <Box>
          <HeaderHero src={pajahtoga} />
        </Box>
      </Header>
      <Section>
        <SectionH1>Field Programs</SectionH1>
        <CardContiner>
          <Card>
            <CardH1>Front-End </CardH1>
            <CardList>React JS</CardList>
            <CardList>Vite</CardList>
            <CardList>TypeScript</CardList>
            <CardList>Bootstrap</CardList>
            <CardList>HTML, CSS</CardList>
            <CardList>EcmaScript Es6</CardList>
            <CardList>Ajax/ JQuery</CardList>
            <CardList>WordPress with Elementor</CardList>
          </Card>
          <Card>
            <CardH1>Back-End </CardH1>
            <CardList>PHP 8</CardList>
            <CardList>ASP MVC Core 5.0 ++</CardList>
            <CardList>ASP WEB API</CardList>
            <CardList>Express JS</CardList>
            <CardList>Node JS</CardList>
          </Card>
          <Card>
            <CardH1>Mobile Development</CardH1>
            <CardList>React Native TS and JS</CardList>
            <CardList>React Native EXPO</CardList>
            <CardList>Android Studio JAVA</CardList>
            <CardList>Android Studio Kotlin</CardList>
            <CardList>Gradle</CardList>
          </Card>
          <Card>
            <CardH1>Web Design</CardH1>
            <CardList>Adobe XD</CardList>
            <CardList>Figma</CardList>
            <CardList>PhotoShop (basic)</CardList>
            <CardList>MockUPs</CardList>
            <CardList>Canvas</CardList>
            <CardList>Filmora</CardList>
            <CardList>Google Fonts</CardList>
          </Card>
          <Card>
            <CardH1>Database</CardH1>
            <CardList>Mysql</CardList>
            <CardList>Sql</CardList>
            <CardList>Store Procedure</CardList>
            <CardList>Microsoft Azure Cloud</CardList>
            <CardList>SQLite</CardList>
            <CardList>Mongo DB</CardList>
          </Card>
          <Card>
            <CardH1>Node Libraries</CardH1>
            <CardList>React Router</CardList>
            <CardList>Hooks</CardList>
            <CardList>Styled Components</CardList>
            <CardList>Material Ui</CardList>
            <CardList>Tailwind</CardList>
            <CardList>Formik and Yup</CardList>
            <CardList>Redux</CardList>
            <CardList>Yarn, NPM, Expo Packages</CardList>
            <CardList>Face and Touch Recognition</CardList>
          </Card>
          <Card>
            <CardH1>API Integration</CardH1>
            <CardList>AXIOS</CardList>
            <CardList>Fetch API</CardList>
            <CardList>Graphl</CardList>
            <CardList>Ajax JSON</CardList>
            <CardList>Postman</CardList>
            <CardList>Insomnia</CardList>
          </Card>
          <Card>
            <CardH1>Operating System</CardH1>
            <CardList>Windows 10 </CardList>
            <CardList>Linux Ubuntu</CardList>
            <CardList>MaC OS</CardList>
          </Card>
          <Card>
            <CardH1>Hosting / Deployment</CardH1>
            <CardList>Hostinger</CardList>
            <CardList>SmartASPNET</CardList>
            <CardList>Netlify</CardList>
            <CardList>Blueocean</CardList>
            <CardList>VPS Live</CardList>
          </Card>
        </CardContiner>
      </Section>
      <Section style={{ backgroundColor: `${styles.dark}` }}>
        <Header style={{ backgroundColor: `${styles.dark}` }}>
          <Box>
            <HeaderTxt>Educational Attainment</HeaderTxt>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b>College Attainment</b>
              </HeaderP>
              <HeaderP>
                Cavite State University - Imus Campus (2019-2023)
              </HeaderP>
              <HeaderP>
                <i>Bachelor of Science in Computer Science</i>
              </HeaderP>
            </div>
          </Box>
          <Box>
            <HeaderHero src={graduation} />
          </Box>
        </Header>
        <CardContiner>
          <PhotoCert
            img={academic2023}
            title="Academic Awardee"
            context="2nd Semester '22- 23' with GWA 1.25 during Senior Level"
          />
          <PhotoCert
            img={academic2022}
            title="Academic Awardee"
            context="2nd Semester '21- 22' with GWA 1.33 during Sophomore Level"
          />
          <PhotoCert
            img={award1}
            title="Thesis Colloquium Awardee"
            context="1st Computer Science Program Thesis Colloquium 2023"
          />
          <PhotoCert
            img={award2}
            title="Thesis Colloquium Best in Presentation"
            context="1st Computer Science Program Thesis Colloquium 2023"
          />
        </CardContiner>
      </Section>
      <Section style={{ backgroundColor: `${styles.dark}` }}>
        <HeaderTxt>Proffesional Trainings</HeaderTxt>
        <Header style={{ backgroundColor: `${styles.light}` }}>
          <Box1>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b>TESDA NC3- JAVA Programming grade</b>
              </HeaderP>
              <HeaderP>TESDA Joysis Tech-Voc Inc.</HeaderP>
              <HeaderP>
                <i>
                  Advance level of programming in Java, With Hands-on training.
                </i>
              </HeaderP>
            </div>
          </Box1>
          <Box1>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b>TESDA LVL II - Web Development Rank 5#</b>
              </HeaderP>
              <HeaderP>TESDA RVN Tech-Voc Inc.</HeaderP>
              <HeaderP>
                <i>
                  Intensive Training from in Web Developing as a Government
                  Scholar
                </i>
              </HeaderP>
            </div>
          </Box1>
          <Box1>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b>Advanced Front-End Development</b>
              </HeaderP>
              <HeaderP>Bayan Academy Foundation</HeaderP>
              <HeaderP>
                <i>Intensive Web Development using React JS</i>
              </HeaderP>
            </div>
          </Box1>
          <Box1>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b> Front-End Development</b>
              </HeaderP>
              <HeaderP>Bayan Academy Foundation</HeaderP>
              <HeaderP>
                <i>Intensive Web Development using HTML, CSS, JS</i>
              </HeaderP>
            </div>
          </Box1>
          <Box1>
            <div>
              <HeaderP style={{ fontSize: "1.5rem" }}>
                <b>Web Development with React Beginners</b>
              </HeaderP>
              <HeaderP>Ground Gurus</HeaderP>
              <HeaderP>
                <i>Beginner Training for React JS</i>
              </HeaderP>
            </div>
          </Box1>
        </Header>
      </Section>
    </Container>
  );
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${styles.dark};
`;

export const Header = styled.div`
  width: 100%;
  background-color: ${styles.dark};
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  padding: 5% 0;
  gap: 16px;
`;
const Box = styled.div`
  height: 550px;
  width: 580px;
`;

const Box1 = styled.div`
  height: auto;
  width: 275px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 4px;
`;
const HeaderTxt = styled.div`
  font-size: 3rem;
  color: ${styles.white};
  font-family: ${styles.black};
`;

const HeaderP = styled.p`
  font-size: 1.1rem;
  color: ${styles.white};
  font-family: ${styles.regular};
`;
const HeaderHero = styled.img`
  height: 450px;
  weight: auto;
  object-fit: contain;
`;

const Section = styled.section`
  height: auto;
  width: 100%;
  background-color: ${styles.backgroundcherry};
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
const CardContiner = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px 10px;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  background-color: ${styles.dark};
  height: 300px;
  width: 290px;
  border-radius: 10px;
  padding: 42px 42px;
`;
const CardH1 = styled.h1`
  text-align: center;
  font-size: ${styles.medium};
  color: ${styles.white};
  font-size: 1.5rem;
`;
const CardList = styled.li`
  font-size: 1rem;
  color: ${styles.white};
  list-style-type: none;
  padding-left: 32px;
  font-family: ${styles.medium};
  margin: 1.2px;
`;
export default AboutMe;
