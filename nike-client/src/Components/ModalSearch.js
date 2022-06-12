import React, {useState, useEffect} from 'react';
import './ModalSearch.css';
import dummySuggestionTerms from "../data/dummySuggestionTerm";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

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
    const {close} = props;

    const [inputValue, setInputValue] = useState('')
    const handleInputWord = (e) => {
        setInputValue(e.target.value)
    }

    const [tags, setTags] = useState('');
    const removeTags = (indexToRemove) => {
        setTags(tags.filter((el, index) => index !== indexToRemove));
    };

    const addTags = (event) => {
        if (event.target.value !== null && !tags.includes(event.target.value) && window.event.keyCode === 13) {
            setTags([event.target.value, ...tags]);
            event.target.value = '';
        }
    }

    const [hasText, setHasText] = useState(false);
    const [options, setOptions] = useState(deselectedOptions);

    // useEffect를 아래와 같이 활용할 수도 있습니다.
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
        /**
         * handleInputChange 함수는
         * - input값 변경 시 발생되는 change 이벤트 핸들러입니다.
         * - input값과 상태를 연결시킬 수 있게 controlled component로 만들 수 있고
         * - autocomplete 추천 항목이 dropdown으로 시시각각 변화되어 보여질 수 있도록 상태를 변경합니다.
         *
         * handleInputChange 함수를 완성하여 아래 3가지 기능을 구현합니다.
         *
         * onChange 이벤트 발생 시
         * 1. input값 상태인 inputValue가 적절하게 변경되어야 합니다.
         * 2. input값 유무 상태인 hasText가 적절하게 변경되어야 합니다.
         * 3. autocomplete 추천 항목인 options의 상태가 적절하게 변경되어야 합니다.
         * Tip : options의 상태에 따라 dropdown으로 보여지는 항목이 달라집니다.
         */
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
        /**
         * handleDeleteButtonClick 함수는
         * - input의 오른쪽에 있는 X버튼 클릭 시 발생되는 click 이벤트 핸들러입니다.
         * - 함수 작성을 완료하여 input값을 한 번에 삭제하는 기능을 구현합니다.
         *
         * handleDeleteButtonClick 함수를 완성하여 아래 기능을 구현합니다.
         *
         * onClick 이벤트 발생 시
         * 1. input값 상태인 inputValue가 빈 문자열이 되어야 합니다.
         */
    };

    return (
        <div className='search__background'>
            <section className='search__header'>
                <div className='search__left'>
                    <button className='search__search' onClick={close}><FontAwesomeIcon icon={faSearch}/></button>
                    <input
                        type='text'
                        onChange={handleInputChange}
                        value={inputValue}
                        className='search__input'
                        placeholder="검색"
                        // onChange={handleInputWord}
                        onKeyUp={(e) => addTags(e)}/>
                    <div className='delete-button' onClick={handleDeleteButtonClick}>&times;</div>
                </div>
                <button className='search__close' onClick={close}>X</button>
                {hasText ? <DropDown options={options} handleComboBox={handleDropDownClick}/> : ''}
            </section>
            {tags !== '' ?
                <section className='suggestionTerm'>
                    <div className="suggestion">최근 검색어</div>
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
            <section className='suggestionTerm'>
                <div className="suggestion">추천 검색어</div>
                {dummySuggestionTerms.map((suggestionTerm) => {
                    return <div>
                        <button className="term" onClick={() => {
                            console.log(suggestionTerm.moveto)
                        }}>{suggestionTerm.term}</button>
                    </div>;
                })}
            </section>
        </div>
    )
}

export default ModalSearch;

export const DropDown = ({ options, handleComboBox }) => {
    return (
        <section className='dropdown'>
            {options.map((el,index) => {
                return <li key={index} onClick={()=>handleComboBox(el)}>{el}</li>
            })}
        </section>
    );
};