import React, {useState} from 'react';
import ModalSearch from "./Components/ModalSearch";
import styled from 'styled-components'
import {SiCoursera, SiJordan} from "react-icons/si";
import {BsBag, BsHeart} from "react-icons/bs";
import {RiSearch2Line} from "react-icons/ri";
import {FaBars} from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfdfd;
  position: sticky;
  top: 0;

  .header-top-wrapper {
    top: 0;
    width: 100%;
    display: none;
    justify-content: space-between;
    background-color: #f3f3f3;
  }

  .brandLogo-wrapper {
    display: flex;
    margin: 10px;
  }

  .brandLogo {
    padding: 10px;
  }

  .cs-wrapper {
    display: flex;
    padding: 10px 30px 10px 10px;
  }

  .header-middle-wrapper {
    display: flex;
    flex-direction: row;
    font-size: 2em;
    justify-content: space-between;
    width: 95%;
    min-width: 200px;
  }

  .header-logo {
    size: 1cm;
    margin: 15px;
    text-align: justify;
  }

  .icon {
    all: unset;
    box-sizing: border-box;
    cursor: pointer;
    padding-right: 20px;
  }

  .header-middle-wrapper-web {
    display: none;
    flex-direction: row;
    align-items: center;
    padding-right: 20px;
    width: 100%;
    justify-content: space-between;
  }

  .menu {
    padding-right: 20px;
  }

  .menu-special-event {
    color: #fd6d09;
  }

  @media screen and (min-width: 900px) {
    .header-middle-wrapper {
      display: none;
    }

    .header-top-wrapper {
      display: unset;
      display: flex;
    }

    .header-middle-wrapper-web {
      display: unset;
      display: flex;
    }

    .input-wrapper {
      min-width: 300px;
      width: 100%;
      display: flex;
    }
  }

`


const Header = () => {
    const [modalSOpen, setModalSOpen] = useState(false);

    const openSModal = () => {
        console.log("클릭!")
        setModalSOpen(true);
    };

    const closeModal = () => {
        setModalSOpen(false);
    };

    return (
        <Container>
            {modalSOpen ? <ModalSearch close={closeModal}/> : null}
            <section className="header-top-wrapper">
                <div className='brandLogo-wrapper'>
                    <SiJordan className='brandLogo' />
                    <SiCoursera className='brandLogo' />
                </div>
                <div className='cs-wrapper'>
                    고객센터 | 멤버 가입 | 로그인
                </div>
            </section>
            <section className="header-middle-wrapper">
                <div className="header-logo">
                    <img src='/img/nike.png' alt={"logo"}/>
                </div>
                <div className="header-icon">
                    <BsBag className="icon cartEmoji"/>
                    <RiSearch2Line className="icon searchEmoji" onClick={openSModal}/>
                    <FaBars className="fontawesome tabletEmoji"/>
                </div>
            </section>
            <section className="header-middle-wrapper-web">
                <div className="header-logo">
                    <img src='/img/nike.png' alt={"logo"}/>
                </div>
                <div className="header-menu">
                    <span className='menu'>New Releases</span>
                    <span className='menu'>Men</span>
                    <span className='menu'>Women</span>
                    <span className='menu'>Kids</span>
                    <span className='menu'>Sale</span>
                    <span className='menu-special-event'>Re, Play 프로젝트</span>
                </div>
                <div className="header-icon">
                    <RiSearch2Line className="icon searchEmoji" size='35px' onClick={openSModal}/>
                    <BsHeart className="icon" size='33px'/>
                    <BsBag className="icon cartEmoji" size='33px'/>
                </div>
            </section>
        </Container>
    );
};

export default Header;