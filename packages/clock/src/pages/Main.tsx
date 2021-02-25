import React from 'react';
import Default from '../layouts/Default';
import Toolbar from '../components/Toolbar';
import TimeDigital from '../components/TimeDigital';
import Topbar from "../components/Topbar";
import TimeFace from "../components/TimeFace";
import styles from './Main.module.css';
import Locations from "../components/Locations";

interface MainProps extends React.HTMLAttributes<HTMLElement> {

}

function Main (props: MainProps) {
  return (
    <Default
      toolbar={<Toolbar />}
    >
      <Topbar />
      <section
        className={styles.container}
      >
        <TimeDigital />
        <TimeFace />
        <Locations />
      </section>
    </Default>
  )
}

export default React.memo(Main)
