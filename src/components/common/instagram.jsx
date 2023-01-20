import React, { Component } from 'react';
import Like from './like';
const Insta = () => {
    return ( 
   <div className="modal-dialog"  role="document">
    
       <div className="modal-content rounded-6 shadow" style={{background:"#81e7d8"}}>
       
           <div className="modal-header border-bottom-0">
           <a onClick={()=> window.open("https://www.instagram.com/amit_rakib/", "_blank")} style={{textDecorationLine: 'none', color:'rgba(0,0,0,.7)', cursor:'pointer'}}>
                 <h5 className="modal-title">Instagram</h5>
           </a>
                <Like></Like>
            </div>
            <a onClick={()=> window.open("https://www.instagram.com/amit_rakib/", "_blank")} style={{textDecorationLine: 'none', color:'rgba(0,0,0,.7)', cursor:'pointer'}}>
                 <div className="modal-body py-0">
                      <p>My Insta profile :)</p>
                 </div>
            </a>
        </div>
       
    </div>
     );
}
 
export default Insta;