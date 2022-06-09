import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
      <div className="footer">
          <section className="footer__top">
              <div className="div">{"여기가 중간"}</div>
              <div className="div">{"여기가 중간"}</div>
              <div className="div">{"여기가 중간"}</div>
              <div className="div">{"여기가 중간"}</div>
          </section>
          <section className="footer__middle">{"여기가 중간"}</section>
          <section className="footer__bottom">{"여기가 아래"}</section>
      </div>
  )
};

export default Footer;
