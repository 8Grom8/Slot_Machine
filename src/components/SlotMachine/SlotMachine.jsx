import React, {createRef, useState, useEffect} from 'react';
import { createUpdateBalance } from '../../store/actions';
import {useDispatch} from 'react-redux';
import { triggerSlotRotation, debuggingSlotRotation } from './functions';
import imgSrc from "../../img/M00_000.jpg";
import imgSrc1 from "../../img/M01_000.jpg";
import imgSrc2 from "../../img/M02_000.jpg";
import imgSrc3 from "../../img/M03_000.jpg";
import imgSrc4 from "../../img/M04_000.jpg";
import imgSrc5 from "../../img/M05_000.jpg";
import imgSrc6 from "../../img/M06_000.jpg";
import imgSrc7 from "../../img/M07_000.jpg";
import imgSrc8 from "../../img/M08_000.jpg";
import imgSrc9 from "../../img/M09_000.jpg";
import imgSrc10 from "../../img/M10_000.jpg";
import imgSrc11 from "../../img/M11_000.jpg";
import imgSrc12 from "../../img/M12_000.jpg";
import './SlotMachine.scss'

const img1 = <img src={imgSrc} width="100" height="100px" alt="" />;
const img2 = <img src={imgSrc1} width="100" height="100px" alt="" />;
const img3 = <img src={imgSrc2} width="100" height="100px" alt="" />;
const img4 = <img src={imgSrc3} width="100" height="100px" alt="" />;
const img5 = <img src={imgSrc4} width="100" height="100px" alt="" />;
const img6 = <img src={imgSrc5} width="100" height="100px" alt="" />;
const img7 = <img src={imgSrc6} width="100" height="100px" alt="" />;
const img8 = <img src={imgSrc7} width="100" height="100px" alt="" />;
const img9 = <img src={imgSrc8} width="100" height="100px" alt="" />;
const img10 = <img src={imgSrc9} width="100" height="100px" alt="" />;
const img11 = <img src={imgSrc10} width="100" height="100px" alt="" />;
const img12 = <img src={imgSrc11} width="100" height="100px" alt="" />;
const img13 = <img src={imgSrc12} width="100" height="100px" alt="" />;

const slotValues = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];
const SlotMachine = ({close}) => {
    const [result, setResult] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [rolling, setRolling] = useState(false)
    const slotRef = [
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef(),
      createRef()
    ];
    const dispatch = useDispatch()
    useEffect(()=>{
        if (!rolling && result[0]===0){
            if (
              result[0] === result[1] &&
              result[0] === result[2] 
             ) {
              const prize = result[0] === 7;
              const spinAction = createUpdateBalance(prize);
              dispatch(spinAction);
            } else if (
              result[0] === result[1] ||
              result[0] === result[2] ||
              result[0] === result[3]
            ) {
              const spinAction = createUpdateBalance(0.5);
              dispatch(spinAction);
            }
        }
    })

    const spinSlot = () => {
        setRolling(true)
        setTimeout(() => setRolling(false), 1000)
        const spinAction = createUpdateBalance(-1)
        dispatch(spinAction)
       const newResult = slotRef.map((slot, i) => {
            const newNumber = triggerSlotRotation(slot.current);
            return newNumber
        });
        setResult(newResult)
    }
    const debugSlot = () => {
        const newResult = slotRef.map((slot, i) => {
                const newNumber = debuggingSlotRotation(slot.current);
                return newNumber
            }
        );
        setResult(newResult)
    }

    const slotElements = result.map((item, idx) =>
        <div className="slot-result-item" key={idx}>
            <section className='slot-result-item-section'>
                <div className="slot-result-item-container" ref={slotRef[idx]}>
                    {slotValues.map((img, i) => (
                        <div key={i}>
                            <span>{img}</span>
                        </div>
                    ))}
                </div>
            </section>
        </div>)

    return (
        <div className="slot-machine">
            <div className="slot-result">
                {slotElements}
            </div>
            <div className="slot-machine-actions">
                <button className='slot-machine-action' onClick={spinSlot}>spin</button>
                <button className='slot-machine-action' onClick={debugSlot}>debugging</button>
                <button className='slot-machine-action' onClick={close}>close</button>
            </div>
        </div>
    );
};

export default SlotMachine;
