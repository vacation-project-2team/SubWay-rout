import styles from "./SubsLiveList.module.css";

function SubsLiveList(p) {
    return(
        <div className={styles.subs_live_list}>
            <div className={styles.subs_live_list_one}>
                <img src={p.subImg}/>
                <span>{p.subName} 행</span>
            </div>
            <span>·</span>
            <div className={styles.subs_live_list_two}>
                <span>{p.subLate} 지연</span>
            </div>
            <span>·</span>
            <div className={styles.subs_live_list_three}>
                <span>{p.subGo} {p.subGoen}</span>
            </div>
        </div>
    )
}

export default SubsLiveList;