import React from 'react';
import styles from './AddButton.module.css';
import { ReactComponent as PlusIcon } from './images/plus.svg';

interface AddButtonProps extends React.HTMLAttributes<HTMLElement> {

}

function AddButton (props: AddButtonProps) {
  return (
    <section className={styles.container}>
      <PlusIcon />
    </section>
  )
}

export default React.memo(AddButton)
