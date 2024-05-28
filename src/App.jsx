import { useSelector, useDispatch } from 'react-redux';
import { incrementGood, incrementBad, incrementOk, reset } from './reducers/counterReducer';

export default function App() {
    const dispatch = useDispatch();
    const store = useSelector(state => state);

    const good = () => {
        dispatch(incrementGood());
    }
    const bad = () => {
        dispatch(incrementBad());
    }
    const ok = () => {
        dispatch(incrementOk());
    }
    const zero = () => {
        dispatch(reset());
    }

    return (
        <div>
            <button onClick={good}>good</button>
            <button onClick={ok}>ok</button>
            <button onClick={bad}>bad</button>
            <button onClick={zero}>reset stats</button>
            <div>good {store.good}</div>
            <div>ok {store.ok}</div>
            <div>bad {store.bad}</div>
        </div>
    )
}