
const Child = (props) => {
    return (
        <div className="container_counter" >
            <h3 >{props.num}</h3>
            <div className="container_btn">
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-primary"} onClick={props.increase}>+</button>
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-primary"} disabled={props.num == 0 ? true : false} onClick={props.reset}>Reset</button>
                <button className={props.num == 0 ? "btn btn-danger" : "btn btn-primary"} onClick={props.decrease}>-</button>
            </div>
        </div>
    )
}
export default Child