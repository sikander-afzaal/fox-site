import { React, useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../../Assets/icons/completeLogo.svg";
import insta from "../../Assets/icons/instaY.svg";
import discord from "../../Assets/icons/discordY.svg";
import twitter from "../../Assets/icons/twitterY.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const AppNavBar = () => {
  const [dropdownIcon, setDropdownIcon] = useState(faBars);
  const [currentAccount, setCurrentAccount] = useState(null);

  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make Sure you have Metamask Installed");
      return;
    } else {
      console.log("Wallet Exists! Ready to go!");
    }

    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please install Metamask!");
    }

    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! Address: ", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, [])

  return (
    <div className="container app-header">
      <Navbar collapseOnSelect expand="lg">
        <div className="logo-div">
          <img src={logo} />
        </div>
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
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <div className="img-div">
            <img src={logo} />
            {/* <p>GKC</p> */}
          </div>
          <Nav className="sm-menu">
            <Nav.Link href="#mission">Misson</Nav.Link>
            <Nav.Link href="#utility">Utility</Nav.Link>
            <Nav.Link href="#roadmap">Roadmap</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
            <div className="nav-social-icons">
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
          </Nav>
        </Navbar.Collapse>
        <Nav className="menu-dropdown">
          <Nav.Link
            className="header-bttn"
            href="#"
            onClick={connectWalletHandler}
          >
            Connect Wallet
          </Nav.Link>
          <NavDropdown
            onToggle={(event) =>
              event == false ? setDropdownIcon(faBars) : setDropdownIcon(faX)
            }
            title={<FontAwesomeIcon icon={dropdownIcon} />}
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item href="#mission">Misson</NavDropdown.Item>
            <NavDropdown.Item href="#utility">
            Utility
            </NavDropdown.Item>
            <NavDropdown.Item href="#roadmap">Roadmap</NavDropdown.Item>
            <NavDropdown.Item href="#team">Team</NavDropdown.Item>
            <NavDropdown.Item href="#faq">
            FAQ
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </div>
  );
};

export default AppNavBar;
