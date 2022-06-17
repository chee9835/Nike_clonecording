import React, {useState} from 'react';
import './ModalLogin.css';

const ModalLogin = (props) => {
    const {close} = props;

    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }


    const [keepLogin, setKeepLogin] = useState(true);

    function keepLoginHandler() {
        setKeepLogin(!keepLogin);
    }

    const [idAlarm, setIdAlarm] = useState(false);
    const [passwordAlarm, setPasswordAlarm] = useState(false);

    function onClickLogin() {
        if (inputId === '') {
            setIdAlarm(true);
        } else {
            setIdAlarm(false);
        }
        if (inputPw === '') {
            setPasswordAlarm(true);
        } else {
            setPasswordAlarm(false);
        }

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
                        className='loginIdInput'
                        type="text"
                        name="userid"
                        onChange={handleInputId}
                        placeholder={'아이디'}/>
                    {idAlarm ? <div className="hide">필수 입력 항목입니다.</div> : null}
                    <br/>
                    <input
                        className='loginPasswordInput'
                        type="password"
                        name="password"
                        onChange={handleInputPw}
                        placeholder={'비밀번호'}/>
                    {passwordAlarm ? <div className="hide">필수 입력 항목입니다.</div> : null}
                </div>
                <section className='login__middle'>
                    <div className='login__middle__left'>
                        <input
                            type="checkbox"
                            name="keepLogin"
                            value="keepLogin"
                            checked={keepLogin}
                            onClick={keepLoginHandler}/>
                        <button className="keepLogin">로그인 유지하기</button>
                    </div>
                    <button className='login__middle__right'>아이디/비밀번호 찾기</button>
                </section>
                <div className="login__button">
                    <button className="localLogin" onClick={onClickLogin}>로그인</button>
                    <br/>
                    <button className="kakaoLogin">카카오계정으로 로그인</button>
                    <br/>
                    <button className="facebookLogin">페이스북으로 로그인</button>
                </div>
                <footer className='login__footer'>
                    <text>{'회원이 아니신가요? '}</text>
                    <button>회원가입</button>
                    <br/>
                    <button>비회원 주문 조회</button>
                </footer>
            </section>
        </div>
    );
};

export default ModalLogin;