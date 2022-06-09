import React from 'react';
import './ModalPrivacy.css';

const ModalPrivacy = (props) => {
    const {open, close, later, agree} = props;

    const privacyContent = {
        h1: "고객님의 나이키 멤버 정보가 이전됩니다.",
        text: "나이키 멤버인 경우, 로그인 시 고객님의 멤버 정보 및 주문 정보가 미국 Nike, Inc.로 이전하는 것에 대한 제 3자 제공 동의 수집이 진행될 예정입니다. 해당 업데이트는 한국의 나이키 멤버 정보를 나이키 글로벌 시스템에 통합하여 향후 더 나은 서비스를 제공하기 위함입니다.\n" +
            "\n" +
            "국외 이전 및 제 3자 제공 동의 수집 기한은 2022년 8월 31일까지 입니다. 국외 이전 및 제 3자 제공에 동의하지 않는 경우, 고객님의 기존 나이키 멤버 정보가 삭제될 예정입니다.\n" +
            "\n" +
            "아직 나이키 멤버 계정이 없는 경우 새로 생성하시거나 비회원으로도 여전히 나이키 서비스를 이용하실 수 있습니다.\n" +
            "\n" +
            "국외 이전 및 제 3자 제공에 대해 더 알고 싶으신가요? 데이터 및 개인 정보 관련 FAQ를 확인해 보세요.",
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        <div>
                            <button className="close" onClick={close}>
                                X
                            </button>
                        </div>
                        <h1>{privacyContent.h1}</h1>
                    </header>
                    <main>{privacyContent.text
                        .split('\n').map(line => {
                            return (<span>{line}<br/></span>)
                        })}</main>

                    <footer>
                        <div>
                            <input type="checkbox" id="notToday" name="notToday" value="notToday" />
                            <label htmlFor="notToday">오늘 다시 표시 안 함</label>
                        </div>
                        <section>
                            <button className="later" onClick={later}>
                                나중에 확인하기
                            </button>
                            <button className="agree" onClick={agree}>
                                동의하기
                            </button>
                        </section>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default ModalPrivacy;