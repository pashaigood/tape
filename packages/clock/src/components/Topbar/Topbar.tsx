import React from 'react';
import AddButton from "./AddButton";
import { ReactComponent as SettingsIcon } from './images/settings.svg';
import styles from './Topbar.module.css';

interface TopbarProps extends React.HTMLAttributes<HTMLElement> {

}

function Topbar (props: TopbarProps) {
  return (
    <section className={styles.container}>
      <SettingsIcon />
      <AddButton />
    </section>
  )
}

export default React.memo(Topbar)
