import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faShoppingBag, faSearch} from "@fortawesome/free-solid-svg-icons";
import './Header.css';

const Header = (props) => {
    return (
        <section className="header__short">
            <div className="header__logo">
                <img src='img/nike.png' alt={"logo"}/>
            </div>
            <div className="header__button">
                <button className="fontawesome cart"><FontAwesomeIcon icon={faShoppingBag}/></button>
                <button className="fontawesome search"
                        onClick={() => props.handleSearch("검색합니다!")}>
                    <FontAwesomeIcon icon={faSearch}/>
                </button>
                <button className="fontawesome tablet"><FontAwesomeIcon icon={faBars}/></button>
            </div>
        </section>
    );
};

export default Header;