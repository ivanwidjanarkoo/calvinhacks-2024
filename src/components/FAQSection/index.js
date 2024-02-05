import React, {useState} from 'react'
import { FaqContainer, Wrap, CardContainer, Dropdown, DataContainer, 
    FaqHeader } from './FaqElement';
import { Data } from './Data'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { IconContext } from 'react-icons';
// import people from '../../image/people.png'

const FaqSection = () => {
    const [clicked, setClicked] = useState(false);

    const toggle = index => {
        if (clicked === index) {
            return setClicked(null);
        }
        setClicked(index);
    }

    return (
        <IconContext.Provider value={{ color: '#8C2131'}}>
            <FaqContainer id="faq">
                <FaqHeader> Frequently Asked Questions</FaqHeader>
                <CardContainer>
                    {Data.map((item, index) => {
                        return (
                            <DataContainer key={index}>
                                <Wrap onClick={() => toggle(index)}>
                                    <p><AiOutlineQuestionCircle  size = '30'/></p>
                                    <h1>{item.question}</h1>
                                    <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                      {!item.hasOwnProperty('link') && !item.hasOwnProperty('linkWord') ?
                                        <p>{item.answer}</p> :
                                        <p>{item.answer} <a href={item.link} target="_blank" rel="noopener noreferrer">{item.linkWord}</a>.</p>
                                      }
                                    </Dropdown>
                                ) : null}
                            </DataContainer>
                        )
                    }
                )}
            </CardContainer>
        </FaqContainer>
        </IconContext.Provider>
    )
}

export default FaqSection;
