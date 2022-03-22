import {RootStateOrAny, useDispatch, useSelector, useStore} from "react-redux";
import {decrease, increase, set_diff} from "../modules/counter";
import Counter from "./Counter";

const CounterContainer = () => {
    // useSelector는 리덕스 스토어의 상태를 조회하는 훅
    // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
    const {number, diff} = useSelector((state: RootStateOrAny) => ({
        number: state.counterReducer.number,
        diff: state.counterReducer.diff
    }))

    const dispatch = useDispatch();
    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = () => dispatch(set_diff(diff))
    return (
        <Counter count={number}
                 diff={diff}
                 onIncrease={onIncrease}
                 onDecrease={onDecrease}
                 onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;