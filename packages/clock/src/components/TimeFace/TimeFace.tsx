import React from 'react';
import styles from './TimeFace.module.css';
import { ReactComponent as SunIcon } from './images/sun.svg';

interface TimeFaceProps extends React.HTMLAttributes<HTMLElement> {

}

function TimeFace (props: TimeFaceProps) {
  return (
    <section className={styles.container}>

      <section className={styles.face_container}>
        <div className={styles.face_shadow} />
        <div className={styles.face_shadow_2} />
        <div className={styles.face} />
        <div className={styles.hands}>
          <div className={styles.hour_hand} style={{ transform: getTransform(45)}} />
          <div className={styles.minute_hand} style={{ transform: getTransform(180)}}  />
          <div className={styles.second_hand} style={{ transform: getTransform(274)}}  />
          <svg className={styles.hands_center} width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="13" cy="13" r="12" fill="white" stroke="#ECEFF5"/>
            <circle cx="13" cy="13" r="5" fill="#ECEFF5"/>
          </svg>
        </div>
      </section>
      <section className={styles.period}>
        <SunIcon />
      </section>
    </section>
  )
}

function getTransform (deg: number) {
  return `translate(-50%, 0) rotate(${deg + 180}deg)`
}

export default React.memo(TimeFace)
