import React from "react";
import AppNavBar from "../../Components/NavBar";
import styles from "./style.module.scss";
import logoR from "../../Assets/icons/logoR.svg";
import volfBg from "../../Assets/images/volfBg.svg";
import blcBg from "../../Assets/images/blcBg.svg";
import orgBg from "../../Assets/images/orgBg.svg";
import whtBg from "../../Assets/images/whtBg.svg";
import yelBg from "../../Assets/images/yelBg.svg";
import demoNFT from "../../Assets/images/dummyNFT.png";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { NFTCard, UtilityCard, UtilityCardNew } from "../../Components/Cards";
import nft from "../../Assets/images/nft.svg";
import FAQ from "../../Components/Faqs";
import TeamCard from "../../Components/Team";
import RoadMap from "../../Components/RoadMap";
import AppFooter from "../../Components/Footer";
import classNames from "classnames";
import home from "../../Assets/content.json";
console.log(" dasts ", home.home.title);
const data = [
  {
    img: nft,
    title: "Male Angry Ninja Fox",
    id: "#29450",
  },
  {
    img: nft,
    title: "Male Angry Ninja Fox",
    id: "#29450",
  },
  {
    img: nft,
    title: "Male Angry Ninja Fox",
    id: "#29450",
  },
  {
    img: nft,
    title: "Male Angry Ninja Fox",
    id: "#29450",
  },
];

const Home = () => {
  const {
    home: {
      header: { title, title2, desc },
      mission: { missionTitle, missionDesc, nftTitle, nftDesc, nftDesc2 },
      utility: { utilityTitle, utilityDesc },
      roadMap,
      team,
      teamTitle,
      faqTitle,
      faq,
    },
  } = home;
  return (
    <div className={styles.home}>
      <div className={styles.tlShadow} />
      <AppNavBar />
      <Container>
        <div className={styles.bannerSec} />
      </Container>
      <div className={styles.header}>
        <Container>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className={styles.content}
          >
            <div className="social-icons">
              {/* <a href="https://discord.gg/jmuuch5vQs"> */}
              <a href="#">
                {/* <img src={twitter} height="30px" style={{ marginTop: 6 }} /> */}
                <span class="icon-discordY"></span>
              </a>
              <a href="https://twitter.com/GoldenKitsuneC">
                {/* <img src={discord} height="30px" style={{ marginTop: 6 }} /> */}
                <span class="icon-twitterY"></span>
              </a>
              <a href="https://www.instagram.com/goldenkitsuneclub">
                {/* <img src={insta} style={{ marginTop: 3 }} /> */}
                <span class="icon-instaY"></span>
              </a>
            </div>
            <p className={styles.title}>
              {title}
              <br />
              {title2}
            </p>
            <p className="desc">{desc}</p>
          </div>
        </Container>
        <div className={styles.borderImgBox}>
          <img src={blcBg} alt="blc" className={styles.bgImg} />
        </div>
      </div>
      <div id="mission" className={styles.missonSec}>
        <Container className={styles.content}>
          <p data-aos="fade-right" data-aos-duration="1500" className="title">
            {missionTitle}
          </p>
          <p data-aos="fade-left" data-aos-duration="1500" className="desc">
            {missionDesc}
          </p>
          <p
            data-aos="fade-right"
            data-aos-duration="1500"
            className={classNames(styles.title, "title")}
          >
            {nftTitle}
          </p>
          <p data-aos="fade-left" data-aos-duration="1500" className="desc">
            {nftDesc}
          </p>
          <p data-aos="fade-left" data-aos-duration="1500" className="desc">
            {nftDesc2}
          </p>

          <div className={styles.NFTDemo}>
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className={styles.nftbox}
            >
              <img src={demoNFT} />
              {/* <p></p> */}
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
              className={styles.nftbox}
            >
              <img src={demoNFT} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1500"
              className={styles.nftbox}
            >
              <img src={demoNFT} />
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1500"
              className={styles.nftbox}
            >
              <img src={demoNFT} />
            </div>
          </div>

          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className={classNames(styles.title, "title")}
          >
            {utilityTitle}
          </p>
          <p data-aos="fade-right" data-aos-duration="1500" className="desc">
            {utilityDesc}
          </p>

          {/* <UtilityCard className={styles.util} /> */}
          <div id="utility">
            <UtilityCardNew />
            <p className="smalltext">
              Please note that these benefits are not guaranteed & subject to
              change.
            </p>
          </div>
          {/* <div className={styles.utilSec}>
            <UtilityCard />
            <div className={styles.utilShadow} />
          </div> */}
        </Container>
        <div className={styles.borderImgBox}>
          <img src={orgBg} alt="org" className={styles.bgImg} />
        </div>
      </div>
      <div id="roadmap" className={styles.roadMapSec}>
        <div className={styles.leftCurve}></div>
        <div className={styles.rightCurve}></div>
        <p
          data-aos="fade-left"
          data-aos-duration="1500"
          className={classNames(styles.title, "title")}
        >
          Roadmap
        </p>
        <Container className={styles.content}>
          {/* <p   data-aos="fade-right"  data-aos-duration="1500" className={styles.subTitle}>"Please note that the roadmap is subject to change"</p> */}
          <Row className={styles.map}>
            {/* <div className={styles.line}></div> */}
            {roadMap.map((item, index) => (
              <RoadMap {...item} indexValue={index} />
            ))}
          </Row>
        </Container>
      </div>
      <div className={styles.teamSec}>
        <img src={volfBg} alt="bg" className={styles.roadMapBg} />
        <Container id="team" className={styles.content}>
          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className="title"
            style={{ color: "#fff" }}
          >
            {teamTitle}
          </p>
          <Row className={styles.teamRow}>
            {team.map((item, index) => (
              <Col xs={6} sm={6} md={5} xl={4} className={styles.grid}>
                <TeamCard
                  indexValue={index}
                  title={item.title}
                  desc={item.desc}
                  img={item.img}
                />
              </Col>
            ))}
          </Row>
        </Container>
        <div className={styles.borderImgBox}>
          <img src={yelBg} alt="bg" className={styles.teamBg} />
        </div>
      </div>
      <div id="faq" className={styles.faqSec}>
        <Container className={styles.content}>
          <p
            data-aos="fade-left"
            data-aos-duration="1500"
            className={classNames(styles.title, "title")}
          >
            {faqTitle}
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className={styles.accordion}
          >
            <Accordion defaultActiveKey="0">
              {faq.map((item) => (
                <FAQ title={item.title} desc={item.desc} id={item.id} />
              ))}
            </Accordion>
          </div>
        </Container>
        <div className={styles.borderImgBox}>
          <img src={whtBg} alt="bg" className={styles.faqBg} />
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Home;
