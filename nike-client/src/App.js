import React, {useState} from 'react';
import './App.css';

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ModalPrivacy from "./Components/ModalPrivacy";
import Loading from "./Components/Loading";
import ModalLogin from "./Components/ModalLogin";


function App() {
    const [modalPOpen, setModalPOpen] = useState(true);
    const [loading, setLoading] = useState(false);
    const [modalLOpen, setModalLOpen] = useState(false);

    const closeModal = () => {
        setModalPOpen(false);
        setModalLOpen(false);
    };

    const handleAgree = () => {
        setLoading(true);
        setTimeout(() => {console.log("로그인 페이지로 이동"); setLoading(false); setModalPOpen(false);setModalLOpen(true);}, 2000);
    }

    return (
        <div className="App">
            <div>
                <ModalPrivacy open={modalPOpen} close={closeModal} agree={handleAgree}/>
                {loading ? <Loading /> : null}
                {modalLOpen ? <ModalLogin close={closeModal}/> : null}
            </div>
            <Header />
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;
