import React, {useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faSearch, faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import ModalSearch from "./Components/ModalSearch";

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
        <div>
            {modalSOpen ? <ModalSearch close={closeModal}/> : null}

            <section className="header-wrapper">
                <div className="header__logo">
                    <img src='/img/nike.png' alt={"logo"}/>
                </div>
                <div className="header__button">
                    <button className="fontawesome cartEmoji"><FontAwesomeIcon icon={faShoppingBag}/></button>
                    <button className="fontawesome searchEmoji"
                            onClick={openSModal}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                    <button className="fontawesome tabletEmoji"><FontAwesomeIcon icon={faBars}/></button>
                </div>
            </section>
        </div>
    );
};

export default Header;