import React from 'react';
import "../../CSS/Complaint.css";

function Dashboard() {
  return (

    <div >
  <div className='compl1'>
        <p style={{color:'white',padding:'15px  20px'}}>Add Complaint </p>
      </div>
 
      <div className='compl2'  >
         <p  className='cp2' >Complaint by *</p>
      </div>

      <div className='compl3'>
         <p className='cp2' >Complaint type *</p>
      </div>

      <div className='compl4'  >
         <p className='cp2' >Phone</p>
      </div>
     
      <div className='compl5' >
         <p className='cp2' >Date</p>
      </div>

      <div className='compl6' >
         <p className='cp2' >Actions Taken *</p>
      </div>
      
      <div className='compl7' >
         <p  className='cp2' >Description</p>
      </div>

      <div className='compl8' >
         <p  className='cp2' >Add File</p>
         <p className='cp3' >PDF,DOC,DOCX,JPG, JPEG,PNG,TXT are allowed</p>
      </div>

      <div className='compl9' >
         <p className='cp4'>Save</p>
      </div>

      <div className='compl10'>
      </div>

      <div className='compl11' >
        <p  style={{color:'white',padding:'15px  20px'}}>Complaint List</p>
      </div>

      <div className='compl12'>
  <table style={{ width: '100%', borderCollapse: 'collapse', borderRadius: '10px' }}>
    <thead>
      <tr style={{ backgroundColor: '#215D4F', color: 'white', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Complaint by</th>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Complaint type</th>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Source</th>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Phone</th>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Date</th>
        <th style={{ padding: '10px', borderBottom: '1px solid black' }}>Action</th>
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

<div className='compl13' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

<div className='compl14'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='compl15'>
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>

      <div className='compl16' >
         <p style={{color:'white', marginLeft:'33px',marginTop:'7px'}}>Select</p>
      </div>
   
 
</div>
  );
};

export default Dashboard;

