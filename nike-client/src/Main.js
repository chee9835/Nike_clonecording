import React from 'react';
import Contents from './Contents';
import dummyContents from "./data/dummyData";
import './Main.css';

const Main = () => {
    const handleMoveTo = (event) => {
        console.log("클릭!" + event + "로 이동")
    }

    return (
        <React.Fragment>
            <ul className="contents">
                {dummyContents.map((content) => {
                        return (
                            <Contents content={content} handleMoveTo={handleMoveTo}/>
                        )
                    }
                )}
            </ul>
        </React.Fragment>
    )
};

export default Main;