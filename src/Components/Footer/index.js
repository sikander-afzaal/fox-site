import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./style.module.scss";
import fLogo from "../../Assets/images/fLogo.svg";
import insta from "../../Assets/icons/insta.svg";
import discord from "../../Assets/icons/discord.svg";
import twitter from "../../Assets/icons/twitter.svg";

const AppFooter = ({ item }) => {
  console.log(item);
  return (
    <div className={styles.footer}>
      <Container>
        <Row className={styles.footerRow}>
          <Col xs={4}>
            <img className={styles.logo} src={fLogo} />
          </Col>
          <Col xs={4}>
            <p>All Right Reserved 2022</p>
          </Col>
          <Col xs={4}>
            <div className={styles.socialIcons}>
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
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default AppFooter;
