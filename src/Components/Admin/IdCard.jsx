import React from 'react';
import "../../CSS/IdCard.css";

function IdCard() {
  return (

    <div >
      <div className='id1' >
        <p style={{color:'white',padding:'15px  20px'}}>ID Card List </p>
      </div>

      <div className='id2' >
         <p style={{color:'white',marginTop:'5px',padding:'5px'}}> + Create an ID Card </p>
      </div>

      <div className='id3' > 
      <p style={{width:'49px',height:'20px',marginTop:'-40px', fontWeight:'500',fontSize:'16px'}}>Name</p>
      </div>

      <div className='id4'> 
      <p style={{width:'49px',height:'20px',marginTop:'-40px', fontWeight:'500',fontSize:'16px'}}>Role</p>
      </div>

      <div className='id5'>
         <p style={{color:'white', marginLeft:'50px',marginTop:'9px'}}>Action</p>
      </div>

      <div className='id6' >
      </div>
 
</div>
  );
};

export default IdCard;

