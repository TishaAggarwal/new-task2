import React from 'react';
import "../../CSS/Visitor.css";

function Dashboard() {
  return (

    <div >
   <div className='v1'>
        <p className='pv' >Visitor Book </p>
      </div>
 
      <div className='v2' >
         <p className='pv1' >Purpose *</p>
      </div>

      <div className='v3'  >
         <p className='pv1' >Name*</p>
      </div>

      <div className='v4'>
         <p className='pv1' >Phone*</p>
      </div>
     
      <div className='v5'  >
         <p className='pv1'  >ID*</p>
      </div>

      <div className='v6'>
         <p  className='pv6' >No of Person *</p>
      </div>
      
      <div className='v7' >
         <p className='pv1' >Date</p>
      </div>

      <div className='v8' >
         <p className='pv1' >In Time*</p>
      </div>
     
      <div className='v9'>
         <p  className='pv1' >Out Time*</p>
      </div>

      <div className='v10' >
         <p  className='pv1' >Add File</p>
         <p  className='pv2' >PDF,DOC,DOCX,JPG, JPEG,PNG,TXT are allowed</p>
      </div>

      <div className='v11'>
         <p  className='pv3' >SaveVisitor</p>
      </div>

      <div className='v12'  >
      </div>

      <div className='v13'>
        <p className='pv4' >Visitor List</p>
      </div>

      <div className='v14'>
  <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '20px' }}>
    <thead>
      <tr style={{ backgroundColor: '#215D4F', color: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <th style={{ padding: '20px', borderBottom: '1px solid #215D4F' }}>Purpose</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>name</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Phone</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>No of Person</th>
        <th style={{ padding: '10px', borderBottom: '1px solid #215D4F' }}>Date</th>
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
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
      </tr>

      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
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
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
      </tr>

      <tr style={{ backgroundColor: 'white', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '30px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
        <td style={{ borderBottom: '1px solid #215D4F', padding: '10px' }}></td>
      </tr>
    </tbody>
  </table>
</div>  

<div className='v15' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

<div className='v16'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='v17'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='v18' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='v19' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>
   
 
</div>
  );
};

export default Dashboard;

