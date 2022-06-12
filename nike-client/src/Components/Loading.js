import React from 'react';
// import {Background, LoadingText} from './Styles.js';
import './Loading.css'

function Loading() {
    return (
        // <Background>
        //     <LoadingText>처리 중입니다.</LoadingText>
        //     <img src='/img/spinner.gif' alt="로딩중" width="5%" />
        // </Background>
        <div className='background'>
            <section>
                <img src='/img/spinner.gif' alt="로딩중" width="15%" />
                <div className='loadingText'>처리 중입니다.</div>
            </section>
        </div>
    );
}

export default Loading;

