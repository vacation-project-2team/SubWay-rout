import styled from "styled-components";
import styles from './Main.module.css'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {faBullhorn} from '@fortawesome/free-solid-svg-icons'

function Main(p){

    let [UserName,SetUserName] = useState('유저1');

    let [FirstSb,setFirstSb] = useState('남영');
    let [FirstSbimg,setFirstSbimg] = useState('/s1.png');

    let [SecSb,setSecSb] = useState('시청');
    let [SecSbimg,setSecSbimg] = useState('/s1.png');

    let [News,setNews] = useState('ITX-청춘 1호기 운행을 재개합니다.');

    return(
        <div className={styles.Main}>

            <div className={styles.heading}>
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

                </div>
            </div>

        </div>
    )
}

export default Main;