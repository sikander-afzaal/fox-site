import React from "react";
import styles from "./style.module.scss";
import util3 from "../../Assets/images/util.svg";
import util2 from "../../Assets/images/Cute_Fox_final.png";
// import fox3d from "../../Assets/fox3d/Cute_Fox.glb"
import util from "../../Assets/images/pikachu.png";
// import util from "../../Assets/images/util.svg";
import { Col, Row } from "react-bootstrap";
import classNames from "classnames";
import home from "../../Assets/content.json";
import icon1 from "../../Assets/icons/membership.png";
import icon2 from "../../Assets/icons/discord.png";
import icon3 from "../../Assets/icons/royalties.png";
import icon4 from "../../Assets/icons/gift.png";
import icon5 from "../../Assets/icons/airdrop.png";
import icon6 from "../../Assets/icons/staking.png";
import icon7 from "../../Assets/icons/merchandise.png";
import icon8 from "../../Assets/icons/bid.png";
import icon9 from "../../Assets/icons/voting-box.png";
import icon10 from "../../Assets/icons/home.png";

export const NFTCard = ({ img, title, id, margin }) => {
  return (
    <div className={styles.nftCard} style={{ margin }}>
      <div className={styles.content}>
        <img src={img} />
        <p>{title}</p>
        <p>{id}</p>
      </div>
    </div>
  );
};
export const UtilityCard = ({ className }) => {
  return (
    <Row className={classNames(styles.utilCard, className)}>
      <Col xs={12} md={10} xl={8} className={styles.content}>
        <p>
          <span>Membership card:</span>
          Access to events/parties that will be arranged in Europe.
        </p>
        <p>
          <span>Private discord channel:</span>
          Access to the private discord where Diverse crypto content creators,
          entrepreneurs, and e-commerce experts will be part of. We believe that
          knowledge and networking is crucial and can bring many benefits to the
          community.
        </p>
        <p>
          <span>Sales royalties:</span>20% of the sales royalties made from
          secondary markets will be distributed among holders.
        </p>
        <p>
          <span>Hold reward system:</span>
          The longer you hold a Kitsune NFT, the more your rewards will be.
        </p>
        <p>
          <span>Airdrops:</span>
          Holders are eligible for different NFT & token airdrops
        </p>
        <p>
          <span>Merch store:</span>
          Holders will have access to exclusive merch with limited-edition
          sweatshirts, tees, and more. Holders will be able to customize their
          Kitsune NFT on the clothing pieces.
        </p>
        <p>
          <span>Voting rights:</span> Holders will have voting rights to decide
          the future of GKC from 2023 onwards.
        </p>
      </Col>
    </Row>
  );
};

export const UtilityCardNew = () => {
  const {
    home: {
      utilityCard: {
        title1,
        title2,
        title3,
        title4,
        title5,
        title6,
        title7,
        title8,
        title9,
        desc1,
        desc2,
        desc3,
        desc4,
        desc5,
        desc6,
        desc7,
        desc8,
        desc9,
      },
    },
  } = home;
  return (
    <>
      {/* <p className="title">Utility</p>
          <p className="desc">
            GKC focuses on utility to provide holders with member exclusive
            benefits.
          </p> */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className={styles.utilCardNew}
      >
        {/* <model-viewer
   src={fox3d}
        alt="dragon"
        // auto-rotate
        // camera-controls
      ></model-viewer> */}
        {/* <model-3d background-color="#000000" src={fox3d}></model-3d> */}
        {/* <img src={util} alt="util" /> */}
        <div className={styles.content}>
          <div className={styles.body}>
            <div className={styles.utilCard}>
              <img src={icon1} alt="test" />
              <h2>{title1}:</h2>
              <p>{desc1}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon2} alt="test" />
              <h2>{title2}:</h2>
              <p>{desc2}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon3} alt="test" />
              <h2>{title3}:</h2>
              <p>{desc3}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon4} alt="test" />
              <h2>{title4}:</h2>
              <p>{desc4}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon5} alt="test" />
              <h2>{title5}:</h2>
              <p>{desc5}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon6} alt="test" />
              <h2>{title6}:</h2>
              <p>{desc6}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon7} alt="test" />
              <h2>{title7}:</h2>
              <p>{desc7}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon8} alt="test" />
              <h2>{title8}:</h2>
              <p>{desc8}</p>
            </div>
            <div className={styles.utilCard}>
              <img src={icon9} alt="test" />
              <h2>{title9}:</h2>
              <p>{desc9}</p>
            </div>
            <div className={styles.lastDiv}>
              <h3>Golden benefit</h3>
              <img src={icon10} alt="test" />
              <p>
                <span className={styles.unqieText}>
                  Fraction ownership of real estate:{" "}
                </span>
                Unlocked after series 1 & 2 are sold out.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
