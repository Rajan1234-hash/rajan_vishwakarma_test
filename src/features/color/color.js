import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setcolor,
  
} from './setcolor';
import styles from '../counter/Counter.module.css';

export function Color() {
  const count = useSelector(setcolor);
  const dispatch = useDispatch();
  const [color, setColor] = useState('red');

  const initialcolor = color;

  return (
    <div>
      <div className={styles.row}>
      {/* <span className={styles.value}>{count}</span> */}
        <p style={{color:initialcolor}} onClick={() => dispatch(setcolor())}>add color here..</p>
      </div>
    </div>
  );
}
