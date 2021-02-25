import React from 'react';
import styles from './Locations.module.css';

interface LocationsProps extends React.HTMLAttributes<HTMLElement> {

}

function Locations (props: LocationsProps) {
  return (
    <section className={styles.container}>
        <Location
          name={'New York, USA'}
          timezone={'+3 HRS  |  EST'}
          image={<img src={require('./images/NYC.svg').default} width={40} height={72} alt={'location'} />}
        />
        <Location
          name={'Sydney, AU'}
          timezone={'+19 HRS  |  AEST'}
          image={<img src={require('./images/Sydney.svg').default} width={56} height={47} alt={'location'} />}
        />
    </section>
  )
}

interface LocationProps extends React.HTMLAttributes<HTMLElement> {
  name: React.ReactNode;
  timezone: React.ReactNode;
  image: React.ReactNode;
}

function Location (props: LocationProps) {
  return (
    <section className={styles.location}>
      <h3 className={styles.header}>{props.name}</h3>
      <section className={styles.timezone}>{props.timezone}</section>
      <section className={styles.time_container}>
        <section className={styles.image_container}>
          {props.image}
        </section>
        <section className={styles.time}>
          <div className={styles.time_digital}>9:20</div>
          <div className={styles.time_timezone}>PM</div>
        </section>
      </section>
    </section>
  )
}

export default React.memo(Locations)
