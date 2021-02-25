import React from 'react';
import styles from './Default.module.css';
import cx from 'classnames';

interface DefaultProps extends React.HTMLAttributes<HTMLElement> {
  toolbar?: React.ReactElement;
}

function Default (props: DefaultProps) {
  const { toolbar, children, className } = props;
  return (
    <section className={cx(styles.container, className)}>
      <section>
        {children}
      </section>
      <section>
        {toolbar}
      </section>
    </section>
  )
}

export default React.memo(Default)
