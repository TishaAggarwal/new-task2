import React from 'react';
import "../../CSS/Aquery.css";

function Dashboard() {
  return (

    <div >
 <div className='q1' > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Date From*</p>
      </div>

      <div className='q2'> 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Date To*</p>
      </div>

      <div className='q3'> 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Source</p>
      </div>

      <div className='q4' > 
      <p style={{marginTop:'-40px', fontWeight:'500',fontSize:'15px'}}>Status</p>
      </div>

      <div className='q5'  >
         <p style={{color:'white', marginLeft:'50px',marginTop:'8px'}}>Save</p>
      </div>

      <div className='q6' >
      </div>

      <div className='q7' >
        <p style={{color:'white',padding:'15px  20px'}}>Query List</p>
      </div>

      <div className='q8'>
  <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '20px' }}>
    <thead>
      <tr style={{ backgroundColor: '#215D4F', color: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <th style={{ padding: '20px', borderBottom: '1px solid #215D4F' }}>Name</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Phone</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Source</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Query date</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* Add your table rows here */}
      {/* Example row */}
      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        
      </tr>

      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        
      </tr>

      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
    
      </tr>

      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
      
      </tr>
    </tbody>
  </table>
</div>  

<div className='q9'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

<div className='q10' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='q11'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='q12' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>
 
</div>
  );
};

export default Dashboard;

