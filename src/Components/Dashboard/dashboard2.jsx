import React from 'react';
import "../../CSS/dashboard2.css";

function Dashboard() {
  return (

    <div >
       <div  className='div80'>
        <div style={{ textAlign: 'center' }}>
          <img src={require('../../images/Desktop67/Rectangle.png')} alt="Image 1" className='img1'/>
          <p className='p-img1'><pre>Total Course <br/><br/>100</pre></p>
        </div>
        <div>
          <img src={require('../../images/Desktop67/Rectangle2.png')} alt="Image 2" className='img2' />
          <p className='p-img2'><pre>Total Faculty<br/><br/>100</pre></p>
        </div>
        <div >
          <img src={require('../../images/Desktop67/Rectangle3.png')} alt="Image 3" className='img2' />
          <p className='p-img3'><pre>Total Student<br/><br/>100</pre></p>
        </div>
        <div >
          <img src={require('../../images/Desktop67/Rectangle4.png')} alt="Image 4" className='img2' />
          <p className='p-img3'><pre>Total Parents <br/><br/>100</pre></p>
        </div>
        <div >
          <img src={require('../../images/Desktop67/Rectangle5.png')} alt="Image 5" className='img2' />
          <p className='p-img3'><pre>Total Staff<br/><br/>100</pre></p>
        </div>

      </div>

      <div >
        <img src={require('../../images/Desktop67/Group 545.png')} alt="piechart" className='piechart1' />
        <img src={require('../../images/Desktop67/Group 546.png')} alt="piechart" className='piechart2' />
        </div>

        <h3 style={{marginLeft:'400px', marginTop:'-300px'}}>Revenue Report</h3>
        <h3 style={{marginLeft:'950px', marginTop:'-20px'}}>Course Overview</h3>

        <img src={require('../../images/Desktop67/Group 547.png')} alt="list" className='list1'/>
    <img src={require('../../images/Desktop67/Light.png')} alt="list" className='list2'/>
      

</div>
  );
};

export default Dashboard;

