import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styles from './Toolbar.module.css';
import { ReactComponent as AlarmIcon } from './images/alarm.svg';
import { ReactComponent as ClockIcon } from './images/clock.svg';
import { ReactComponent as WorldIcon } from './images/world.svg';
import { ReactComponent as TimerIcon } from './images/timer.svg';
import cx from "classnames";

interface ToolbarProps extends React.HTMLAttributes<HTMLElement> {

}

function Toolbar (props: ToolbarProps) {
  const menuRef = useRef<HTMLUListElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderState, setSliderState] = useState({
    transform: '',
    width: 113
  });

  const handleClick = useCallback((e) => {
    const element: HTMLElement = e.currentTarget;
    const index = Array.prototype.indexOf.call(element?.parentNode?.childNodes, element);
    setCurrentIndex(index);
  }, []);

  useLayoutEffect(() => {
    const element = menuRef.current;
    const slider = sliderRef.current;
    if (!element || !slider) {
      return;
    }

    const childElement = element.childNodes[currentIndex] as HTMLElement;
    const { left, width } = childElement.getBoundingClientRect();

    const { left: AppLeft } = (document.getElementById('root')?.getBoundingClientRect()) || { left: 0 };
    const sliderPadding = parseInt(getStyle(slider, 'padding-left')) | 0;

    setSliderState({
      width: width + sliderPadding * 2,
      transform: `translate(${left - AppLeft - sliderPadding * 2}px, 0)`,
    });

  }, [menuRef, sliderRef, currentIndex]);

  const elements = useMemo(() => ([
    {
      name: 'clock',
      icon: <ClockIcon />
    },
    {
      name: 'world',
      icon: <WorldIcon />
    },
    {
      name: 'alarm',
      icon: <AlarmIcon />
    },
    {
      name: 'timer',
      icon: <TimerIcon />
    }
  ]), []);

  const elementStyle = useMemo(() => ({ width: 100 / elements.length + '%'
}), [elements]);

  return (
    <menu className={styles.container}>
      <ul className={styles.items} ref={menuRef}>
        {
          elements.map((element, index) => (
            <li
              key={index}
              onClick={handleClick}
              className={cx(styles.item, { [styles.active]: index === currentIndex })}
              style={elementStyle}
            >
              {element.icon} <span className={styles.item_name}>{element.name}</span>
            </li>
          ))
        }
      </ul>
      <section
        ref={sliderRef}
        className={styles.slider}
        style={sliderState}
      />
    </menu>
  )
}

function getStyle(oElm: HTMLElement & {currentStyle?: any}, strCssRule: string){
  let strValue = "";
  if(document.defaultView && document.defaultView.getComputedStyle){
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
  }
  else if(oElm.currentStyle){
    strCssRule = strCssRule.replace(/-(\w)/g, function (strMatch, p1){
      return p1.toUpperCase();
    });
    strValue = oElm.currentStyle[strCssRule];
  }
  return strValue;
}

export default React.memo(Toolbar)
