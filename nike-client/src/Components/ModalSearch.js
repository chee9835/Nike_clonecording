import React, {useEffect, useState} from 'react';
import './ModalSearch.css';
import dummySuggestionTerms from "../data/dummySuggestionTerm";
import {faDeleteLeft, faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {getRegExp} from 'korean-regexp';

const deselectedOptions = [
    '에어포스 1',
    '크롭',
    '에어 조던 1',
    '에어 조던 점프맨',
    '조던 23',
    '크롭 탑',
    '드라이 크롭',
    '에어 모어',
    '에어 우븐',
    '에어',
    '드라이 크롭',
    '데이브레이크',
    '조거',
    '드라이 마일러 탱크',
];

const ModalSearch = (props) => {
    const [inputValue, setInputValue] = useState('')
    const [tags, setTags] = useState('');
    const [hasText, setHasText] = useState(false);
    const [options, setOptions] = useState(deselectedOptions);

    const handleInputWord = (e) => {
        setInputValue(e.target.value)
    }

    const removeTags = (indexToRemove) => {
        setTags(tags.filter((el, index) => index !== indexToRemove));
    };

    const addTags = (event) => {
        if (event.target.value !== null && !tags.includes(event.target.value) && window.event.keyCode === 13) {
            setTags([event.target.value, ...tags]);
            event.target.value = '';
        } else {

        }
        if (event.target.value === '') {
            setInputValue('');
        }
    }

    useEffect(() => {
        if (inputValue === '') {
            setHasText(false);
            setOptions(deselectedOptions);
        }
    }, [inputValue]);

    const handleInputChange = (event) => {
        setHasText(true);
        setInputValue(event.target.value);
        setOptions(options.filter((el) => el.includes(event.target.value)));
        console.log(getRegExp(event.target.value));
    };

    const handleDropDownClick = (clickedOption) => {
        setInputValue(clickedOption);
        /**
         * handleDropDownClick 함수는
         * - autocomplete 추천 항목을 클릭할 때 발생되는 click 이벤트 핸들러입니다.
         * - dropdown에 제시된 항목을 눌렀을 때, input값이 해당 항목의 값으로 변경되는 기능을 수행합니다.
         *
         * handleInputChange 함수를 완성하여 아래 기능을 구현합니다.
         *
         * onClick 이벤트 발생 시
         * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
         * 2. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
         */
    };

    const handleDeleteButtonClick = () => {
        setInputValue('');
        setOptions(deselectedOptions);
    };

    return (
        <div className='search__background'>
            <div className='search__wrapper'>
                <section className='search__header'>
                    <div className='search__left'>
                        <button className='search__icon' onClick={props.close}><FontAwesomeIcon icon={faSearch}/>
                        </button>
                        <input
                            type='text'
                            onChange={handleInputChange}
                            value={inputValue}
                            className='search__input'
                            placeholder="검색"
                            onKeyUp={(e) => addTags(e)}/>
                        {inputValue !== ''
                            ? <div className='search__word-delete-button' onClick={handleDeleteButtonClick}>
                                <FontAwesomeIcon icon={faDeleteLeft}/></div>
                            : null}
                    </div>
                    <button className='search__close' onClick={props.close}>X</button>

                </section>
                {tags !== '' ?
                    <section className='suggestionTerm-wrapper'>
                        <div className="suggestionTerm">최근 검색어</div>
                        {<ul className='tags'>
                            {tags.map((tag, index) => (
                                <li key={index} className='tag'>
                                <span
                                    className='tag__title'
                                    onClick={(tag) => handleInputWord(tag)}>{tag}</span>
                                    <span
                                        className='tag__close-icon'
                                        onClick={() => removeTags(index)}>&times;</span>
                                </li>
                            ))}
                        </ul>}
                    </section> : null
                }
                {hasText ?
                    <DropDown className='dropdown' options={options} handleComboBox={handleDropDownClick}/>
                    :
                    <section className='suggestionTerm-wrapper'>
                        <div className="suggestionTerm">추천 검색어</div>
                        {dummySuggestionTerms.map((suggestionTerm) => {
                            return <div>
                                <button className="term" onClick={() => {
                                    console.log(suggestionTerm.moveto)
                                }}>{suggestionTerm.term}</button>
                            </div>;
                        })}
                    </section>}
            </div>
        </div>
    )
}

export default ModalSearch;


export const DropDown = ({options, handleComboBox}) => {
    return (
        <div className='dropdown'>
            {options.map((el, index) => {
                return <div>
                    <button className='term' key={index} onClick={() => handleComboBox(el)}>{el}</button>
                </div>
            })}
        </div>
    );
};