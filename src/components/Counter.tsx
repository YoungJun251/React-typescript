
interface ICounter {
    count : number,
    diff : number,
    onIncrease : any,
    onDecrease : any,
    onSetDiff : any
}

const Counter = ({count,diff, onIncrease,onDecrease, onSetDiff} : ICounter) : JSX.Element => {
    const onChange = (e:any) => {
        onSetDiff(parseInt(e.target.value, 10))
    }

    return(
        <div className="counter_container">
            <h1>{count}</h1>
            <div>
                <input type="number" value={diff} min="1" onChange={onChange}/>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    )
}

export default Counter;