// Ducks 패턴을 따룰땐 액션의 이름에 접두사를 넣는다.
// ✅ 다른 모듈과 액션 이름이 중복되는 것을 방지 할 수 있다.
const SET_DIFF = 'counter/SET_DIFF';
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/* 액션함수 생성 */
export const set_diff = (diff : number) => {
    return {
        type: SET_DIFF,
        diff: diff
    }
}

// 💡 객체 리터럴을 반환하는 경우에는 ()로 감싸준다
export const increase = () => ({type : INCREASE})
export const decrease = () => ({type: DECREASE})

const initialState = {
    number: 0,
    diff:1
}

const countReducer = (state = initialState, action : any) => {
    switch (action.type){
        case SET_DIFF:
            return {
                ...state,
                diff: action.diff
            }
        case INCREASE:
            return{
                ...state,
                number: state.number + state.diff
            }
        case DECREASE:
            return({
                ...state,
                number: state.number - state.diff
            })
        default:
            return state
    }
}

const counter = ():JSX.Element => {
    return(<div>

    </div>)
}

export default counter