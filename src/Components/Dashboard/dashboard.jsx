import React from 'react';
import "../../CSS/Dashboard.css";

function Dashboard() {
  return (

    <div 
    style={{ width: '80%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
  <div style={{marginLeft:'-23rem', textAlign: 'center' }}>
    <img className='titl' src={require('../../images/Desktop67/Rectangle.png')} alt="Image 1"  />
    <p className='para1' ><pre>Total Course <br/><br/>100</pre></p>
  </div>

  <div >
    <img  className='titl1' src={require('../../images/Desktop67/Rectangle2.png')} alt="Image 2"  />
    <p className='para2' ><pre>Total Faculty<br/><br/>100</pre></p>
  </div>
  <div >
    <img className='titl1' src={require('../../images/Desktop67/Rectangle3.png')} alt="Image 3"  />
    <p className='para3' ><pre>Total Student<br/><br/>100</pre></p>
  </div>
  <div >
    <img className='titl1' src={require('../../images/Desktop67/Rectangle4.png')} alt="Image 4"  />
    <p className='para3' ><pre>Total Parents <br/><br/>100</pre></p>
  </div>
  <div >
    <img className='titl1' src={require('../../images/Desktop67/Rectangle5.png')} alt="Image 5"  />
    <p className='para3' ><pre>Total Staff<br/><br/>100</pre></p>
  </div>
  <img className='light' src={require('../../images/Desktop67/Light.png')} alt="Light" />

  
  <div >
        <img src={require('../../images/Desktop67/students.png')} alt="piechart" className='piecht1' />
        <img src={require('../../images/Desktop67/revenue.png')} alt="piechart" className='piecht2' />
        </div>

        <h2 className='head-d1'>Student Report</h2>
        <h1 className='head-d2'>Revenue Report</h1>

      <img src={require('../../images/Desktop67/notice-b.png')} alt="Rectangle" className='notice' />
      
      
 
    <img src={require('../../images/Desktop67/Calender.png')} alt="Calendar" className='calendar' />
 
    <img src={require('../../images/Desktop67/to-do.png')} alt="To-Do" className='todo' />

 
</div>
  );
};

export default Dashboard;

