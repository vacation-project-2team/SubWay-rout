import styled from "styled-components";
import styles from './Main.module.css'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'
import SlowSub from "./SlowSub/SlowSub.js";
import SubsLiveList from "./SubsLiveList/SubsLiveList.js";
import dummy from "../../db/data.json";

function Main(p){

    let [UserName,SetUserName] = useState(dummy.user[0].UserName);

    let [FirstSb,setFirstSb] = useState(dummy.Subway[0].FirstSb);
    let [FirstSbimg,setFirstSbimg] = useState('/s1.png');

    let [SecSb,setSecSb] = useState(dummy.Subway[0].SecSb);
    let [SecSbimg,setSecSbimg] = useState('/s1.png');

    let [News,setNews] = useState(dummy.Subway[1].News);

    let [SubHL,setSubHL] = useState(1);

    const btnStyle = {
        borderBottom: '1px solid black',
    }
    return(
        <div className={styles.Main}>

            <div className={styles.heading}>
                <img src={'/favicon.ico'}/>
                <span><strong>{UserName}</strong> 님 께서</span>
                <span><strong>자주</strong> 이용하시는 구간은</span>
            </div>

            <div className={styles.subway_know}>
                <div className={styles.subway_know_list}>
                    <span>{FirstSb}역</span>
                    <img src={FirstSbimg}/>
                </div>
                
                <FontAwesomeIcon className={styles.arrows} icon={faArrowRight} />

                <div className={styles.subway_know_list}>
                    <span>{SecSb}역</span>
                    <img src={SecSbimg}/>
                </div>
            </div>

            <div className={styles.news}>
                <span>소식</span>

                <div className={styles.news_list}>
                    <FontAwesomeIcon className={styles.speaker} icon={faBullhorn} />
                    <span>{News}</span>
                </div>
            </div>

            <div className={styles.slowsub}>
                <span>오늘의 주요 지연 정보</span>
                <span>30분 이상 지연 된 전동열차만 표기 합니다</span>

                <div className={styles.slowsub_list}>
                    {
                        dummy.LateSub.map((m,i)=>{
                            return(
                                <SlowSub key={i} subs={m} subimg={'/s1.png'}></SlowSub>
                            )
                        })
                    }
                    <button className={styles.slowsub_btn}>+</button>
                </div>
            </div>

            <div className={styles.subs_live}>
                <div className={styles.subs_live_btn}>
                    <button onClick={() => {setSubHL(1)}} style={SubHL==1? btnStyle:null}>상행선</button>
                    <button onClick={() => {setSubHL(2)}} style={SubHL==2? btnStyle:null}>하행선</button>
                </div>

                {SubHL==1? <SubHight></SubHight>:<SubLow></SubLow>}
            </div>

        </div>
    )
}

function SubHight(p){
    return(
        <div>
            {
                dummy.SubsLiveListHight.map((m,i)=>{
                    return(
                        <SubsLiveList key={i} subImg={'/s1.png'} subName={m.subName} subLate={m.subLate} subGo={m.subGo} subGoen={m.subGoen}></SubsLiveList>
                    )
                })
            }
        </div>
    )
}

function SubLow(p){
    return(
        <div>
            {
                dummy.SubsLiveListLow.map((m,i)=>{
                    return(
                        <SubsLiveList key={i} subImg={'/s1.png'} subName={m.subName} subLate={m.subLate} subGo={m.subGo} subGoen={m.subGoen}></SubsLiveList>
                    )
                })
            }
        </div>
    )
}

export default Main;