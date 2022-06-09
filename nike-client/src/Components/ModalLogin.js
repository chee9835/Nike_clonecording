import React from 'react';
import './ModalLogin.css';

const ModalLogin = (props) => {
    const {close} = props;
    const state = {
        userid: '',
        password: '',
    };

    function loginRequestHandler() {
    }

    return (
        <div className='background'>
            <section>
                <header>
                    <div>
                        <button className="close" onClick={close}>
                            X
                        </button>
                    </div>
                    <img src='/img/nike.png' alt={"logo"}/>
                    <h1>나이키 로그인</h1>
                </header>
                <div>
                    <input
                        type="text"
                        name="userid"
                        onChange={(e) => state.userid = e}
                        placeholder={'아이디'} />
                    <br/>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => state.password = e}
                        placeholder={'비밀번호'}/>
                </div>
                <section className='login__middle'>
                <div className='login__middle__left'>
                    <input type="checkbox" name="keepLogin" value="keepLogin" checked />
                    <label htmlFor="keepLogin">로그인 유지하기</label>
                </div>
                <button >아이디/비밀번호 찾기</button>
                </section>
                <div className="header__button">
                    <button onClick={close}>로그인</button><br/>
                    <button>카카오계정으로 로그인</button><br/>
                    <button>페이스북으로 로그인</button>
                </div>
                <footer className='login__footer'>
                    {'회원이 아니신가요?'}<button>회원가입</button><br/>
                    <button>비회원 주문 조회</button>
                </footer>
            </section>
        </div>
    );
};

export default ModalLogin;