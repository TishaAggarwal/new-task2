import React from 'react';
import "../../CSS/Dashboard.css";

function Dashboard() {
  return (

    <div 
    style={{ width: '80%', display: 'flex', justifyContent: 'space-between', margin: '0 auto' }}>
  <div style={{marginLeft:'-23rem', textAlign: 'center' }}>
    <img className='titl' src={require('../../images/Desktop67/Rectangle.png')} alt="Image 1"  />
    <p className='para1' >Total Course</p>
    <p className="box-number">100</p>
  </div>

  <div >
    <img  className='titl1' src={require('../../images/Desktop67/Rectangle2.png')} alt="Image 2"  />
    <p className='para2' >Total Faculty</p>  
    <p className="box-number1">100</p>
  </div>
  <div >
    <img className='titl2' src={require('../../images/Desktop67/Rectangle3.png')} alt="Image 3"  />
    <p className='para3' >Total Student</p>
    <p className="box-number2">100</p>
  </div>
  <div >
    <img className='titl3' src={require('../../images/Desktop67/Rectangle4.png')} alt="Image 4"  />
    <p className='para4' >Total Parents</p>
    <p className="box-number3">100</p>
  </div>
  <div >
    <img className='titl4' src={require('../../images/Desktop67/Rectangle5.png')} alt="Image 5"  />
    <p className='para5' >Total Staff</p>
    <p className="box-number4">100</p>
  </div>
  <img className='light' src={require('../../images/Desktop67/Light.png')} alt="Light" />

<div >
          <img className='student' src={require('../../images/Desktop67/students.png')} alt="Pie Chart 1"  />
  
          <img className='revenue' src={require('../../images/Desktop67/revenue.png')} alt="Pie Chart 2"  />
          </div>
      
      <img src={require('../../images/Desktop67/notice-b.png')} alt="Rectangle" className='notice' />
      
      
 
    <img src={require('../../images/Desktop67/Calender.png')} alt="Calendar" className='calendar' />
 
    <img src={require('../../images/Desktop67/to-do.png')} alt="To-Do" className='todo' />

 
</div>
  );
};

export default Dashboard;

