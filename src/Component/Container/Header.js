import * as React from 'react';
import { useSelector } from 'react-redux'; 
import '../../App.css'
import BasicTabs from './Tabs'
export const Header = () => {
  const task = useSelector((state)=> state);
    return (
      <>{(task.header)&& (
        <>
        <div className={task.color} id="header">
          <div className={task.position}>
             <img src={require('../../img/tigeen_computing_logo.png')} />
          </div>
        </div>
        </>
        )}
        <BasicTabs />
      </>        
      );
}
