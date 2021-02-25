import React from 'react';
import styles from './TimeDigital.module.css';

interface TimeDigitalProps extends React.HTMLAttributes<HTMLElement> {

}

function TimeDigital (props: TimeDigitalProps) {
  return (
    <section className={styles.container}>
      <section className={styles.location}>
        Newport Beach, USA  |  PST
      </section>
      <section className={styles.time}>
        <div className={styles.numbers}>
          6:20
        </div>
        <div className={styles.period_container}>
          <div className={styles.period}>PM</div>
        </div>
      </section>
    </section>
  )
}

export default React.memo(TimeDigital)
