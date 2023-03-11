import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import {
  Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo,newLogo, menu, close } from "../assets";

// import './App.css';

// Constants
const TWITTER_HANDLE = '_buildspace';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const [walletAddress, setWalletAddress] = useState(null);

  // Actions
  const checkIfWalletIsConnected = async () => {
    if (window?.solana?.isPhantom) {
      console.log('Phantom wallet found!');
      const response = await window.solana.connect({ onlyIfTrusted: true });
      console.log(
        'Connected with Public Key:',
        response.publicKey.toString()
      );

      /*
       * Set the user's publicKey in state to be used later!
       */
      setWalletAddress(response.publicKey.toString());
    } else {
      alert('Solana object not found! Get a Phantom Wallet 👻');
    }
  };

  const connectWallet = async () => {
    const { solana } = window;

  if (solana) {
    const response = await solana.connect();
    console.log('Connected with Public Key:', response.publicKey.toString());
    setWalletAddress(response.publicKey.toString());
  }
  };

  const renderNotConnectedContainer = () => (
    <li className="nav-item"><Link className="nav-link btn btn-success" onClick={connectWallet} to="/Bhargav">Connect to wallet</Link></li>

  );
  const renderConnectedContainer = () => (
    

    <li className="nav-item"><Link className="nav-link btn btn-dark"  to="/Bhargav">Connected</Link></li>
    
    

  );
  const renderConnectedContainered = () => (
    

    <li className="nav-item"><Link className="nav-link btn btn-outline-success"  to="/Bhargav">Dashboard</Link></li>
    
    

  );

  // UseEffects
  // useEffect(() => {
  //   const onLoad = async () => {
  //     await checkIfWalletIsConnected();
  //   };
  //   window.addEventListener('load', onLoad);
  //   return () => window.removeEventListener('load', onLoad);
  // }, []);


  useEffect(() => {
    const onLoad = async () => {
      await checkIfWalletIsConnected();
    };
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener('load', onLoad);
    return () => window.removeEventListener("scroll", handleScroll);
    return () => window.removeEventListener('load', onLoad);
  }, []);

  return (
    <nav
    style={{backgroundColor: "rgba(21, 16, 48, 1)"}}
      className={`${
        styles.paddingX
        
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "back-ground-apla bg-dark" : "bg-dark"
      }`}

      
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={newLogo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Powered by &nbsp;
            <span className='sm:block hidden'> | Solana</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>

{/* /////////////////////////////////////// */}

        {/* <li className="nav-item"><Link className="nav-link btn btn-success" to="/contact">Launch</Link></li> */}
        <div className={walletAddress ? 'authed-container' : 'container'}>
        <div className="header-container">
          
          {/* Add the condition to show this only if we don't have a wallet address */}
           {!walletAddress && renderNotConnectedContainer()}
          {walletAddress && renderConnectedContainer()}
          {walletAddress && renderConnectedContainered()}
        </div>
        </div>
{/* ///////////////////////////////////// */}


          {/* {navLinks.map((nav) => (
            
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))} */}
        </ul>
{/* 
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
