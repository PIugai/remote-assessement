import { useContext } from "react";
import { CountContext } from "../../App";
import './counter.scss';

const Counter = () => {
    const counter = useContext(CountContext);
    return (
        <div className="counter">
            <h2 className="counter__title">{counter.count}</h2>
            <input
                className="counter__button counter__button--inc"
                type="button"
                value="+"
                onClick={() => counter.dispatch({ type: 'INCREMENT' })}
            />
            <input
                className="counter__button counter__button--dec"
                type="button"
                value="-"
                onClick={() => counter.dispatch({ type: 'DECREMENT' })}
            />
        </div>
    );
}

export default Counter;