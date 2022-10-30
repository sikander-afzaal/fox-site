import React from "react";
import AppNavBar from "../../Components/NavBar";
import styles from "./style.module.scss";
import logoR from "../../Assets/icons/logoR.svg";
import logo from "../../Assets/icons/logo.svg";
import twitter from "../../Assets/icons/twitter.svg";
import discord from "../../Assets/icons/discord.svg";
import insta from "../../Assets/icons/insta.svg";
import { Col, Container, Row, Accordion } from "react-bootstrap";
import { NFTCard, UtilityCard } from "../../Components/Cards";
import nft from "../../Assets/images/nft.svg";
import FAQ from "../../Components/Faqs";
import TeamCard from "../../Components/Team";
import RoadMap from "../../Components/RoadMap";
import AppFooter from "../../Components/Footer";
import classNames from "classnames";

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

const faqData = [
  {
    id: "0",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "1",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "2",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "3",
    title:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const teamData = [
  {
    title: "Solid",
    desc: "Founder of GKC",
    img: logoR,
  },
  {
    title: "Liquid",
    desc: "Co-founder of GKC & Artist",
    img: logo,
  },
];

const roadMapData = [
  {
    title: "THE START",
    desc1: "Team building",
    desc2: "Website",
    desc3: "Generating 10,000 Baby Kitsunes",
    desc4: "Launch of Series 1: The Kitsunes",
    desc5: "Holder roles on discord & private discord channel going live",
    desc6: "Partner up with non-profit organizations",
  },
  {
    title: "THE START",
    desc1: "Introducing the Membership Card",
    desc2: "Member exclusive Merch store goes live, introducing customized and limited-edition hoodies, tees, and more.",
    desc3: "Native ERC-20 token release & airdrop to holders",
    desc4: "Launch of Series 2: The Mutant Kitsunes",
  },
  {
    title: "THE START",
    desc1: "Token staking pool",
    desc2: "NFT airdrop to holders",
    desc3: "First event/party will be arranged in Amsterdam",
  },
];

const Landing = () => {
  return (
    <div className={styles.landing}>
        <div className={styles.tlShadow} />
      <AppNavBar />
      <Container>
        <div className={styles.bannerSec} />
      </Container>
      <div className={styles.header}>
        <Container>
          <div className={styles.content}>
            <p className={styles.title}>   
              Welcome to the
              <br />
              <span>
                Golden Kitsune Club <img className={styles.logo} src={logoR} />
              </span>
            </p>
            <p className="desc">
            GKC is a community-based PFP project. A set of 10,000 Kitsune NFTs, which are one-of-a-kind digital collectibles that live on the Ethereum blockchain. Your Kitsune entitles you to exclusive perks.{" "}
            </p>
            <div className={styles.icons}>
              <img src={twitter} alt="twitter" />
              <img src={discord} alt="discord" />
              <img src={insta} alt="insta" />
            </div>
          </div>
        </Container>
        <div className={styles.shadow}/>
      </div>
      <Container>
        <div className={styles.missionSec}>
          <p className={classNames(styles.title, "title")}>Mission</p>
          <p className={classNames(styles.desc, "desc")}>
            There are many different global social issues in the world such as
            racism, gender inequality, poverty and many more. Our mission is to
            spread awareness about these social issues in the world which are
            displayed in different traits implemented in our Kitsune NFTs. Our
            goal is to donate a percentage of the sales to a few different
            non-profit organizations that support solving these global social
            issues.
          </p>
          <Row className={styles.row}>
            {data.map((item) => (
              <NFTCard
                margin="1rem 0"
                title={item.title}
                id={item.id}
                img={item.img}
              />
            ))}
          </Row>
        </div>
        <div className={styles.nftDtlSec}>
          <p className="title">GKC NFTs specifications</p>
          <p className="desc">
            Each Kitsune is unique, scripted from over 150 traits, including
            fur, headwear, clothing, and more. Some Kitsunes are rarer than
            others, refer to the rarity chart for the full overview.
          </p>
          <p className="desc">
            All our NFTs are stored as ERC-721 tokens on the Ethereum
            blockchain.
          </p>
          <div className={styles.utilSec}>
            <UtilityCard />
            <div className={styles.utilShadow} />
          </div>
        </div>
        <div className={styles.roadMapSec}>
          <p className="title">Roadmap</p>
          <div className={styles.mapContent}>
            {roadMapData.map((item) => (
              <RoadMap {...item} />
            ))}
          </div>
        </div>
        <div className={styles.teamSec}>
          <p className="title">Team</p>
          <Row className={styles.teamRow}>
            {teamData.map((item) => (
              <TeamCard
                margin="2rem 0"
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </Row>
        </div>
        <div className={styles.faqSec}>
          <p className="title">FAQ’s</p>
          <div className={styles.accordion}>
            <Accordion defaultActiveKey="0">
              {faqData.map((item) => (
                <FAQ
                  margin="4rem 0"
                  title={item.title}
                  desc={item.desc}
                  id={item.id}
                />
              ))}
            </Accordion>
          </div>
        </div>
        <AppFooter />
      </Container>
    </div>
  );
};

export default Landing;
