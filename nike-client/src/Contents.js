import React from 'react';
import './Contents.css';

const Contents = (props) => {

    return (
        <li className="content" key={props.content.id}>
            <picture className="content__image"
                     onClick={() => props.handleMoveTo(props.content.moveto)}>
                <source media="(max-width: 799px)" srcSet={props.content.mobileImage}/>
                <source media="(min-width: 800px)" srcSet={props.content.image}/>
                <img src={props.content.image} alt={props.content.id}/>
            </picture>
            <section>
                <div className="content__title">
                    <h1>{props.content.title}</h1>
                </div>
                <div className="content__text">
                    <div>{props.content.text
                        .split('\n').map(line => {
                            return (<span>{line}<br/></span>)
                        })}</div>
                </div>
            </section>
            <div className="content__moveto"
                 onClick={() => props.handleMoveTo(props.content.moveto)}>
                <button className="content__movetoButton">{"구매하기"}</button>
            </div>
        </li>
    );
};

export default Contents;
