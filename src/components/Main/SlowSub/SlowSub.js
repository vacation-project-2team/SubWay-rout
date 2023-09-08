import styels from "./SlowSub.module.css";
function SlowSub(p){
    return(
        <div className={styels.SlowSub}>
            <img src={p.subimg}/>
            <span>{p.subs}</span>
        </div>
    )
}
export default SlowSub;