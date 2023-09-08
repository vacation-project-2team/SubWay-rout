import styled from "styled-components";
import styles from './Main.module.css'
import {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'


function Main(p){

    let [UserName,SetUserName] = useState('유저1');

    let [FirstSb,setFirstSb] = useState('남영');
    let [FirstSbimg,setFirstSbimg] = useState('/s1.png');

    let [SecSb,setSecSb] = useState('시청');
    let [SecSbimg,setSecSbimg] = useState('/s1.png');

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



        </div>
    )
}

export default Main;