import React, { Component } from 'react';
import Like from './like';

const Medium = () => {
    return ( 
   <div className="modal-dialog"  role="document">
    
       <div className="modal-content rounded-6 shadow" style={{background:"#81e7d8"}}>
       
           <div className="modal-header border-bottom-0">
           <a onClick={()=> window.open("https://medium.com/@mr.ahr.es6", "_blank")} style={{textDecorationLine: 'none', color:'rgba(0,0,0,.7)', cursor:'pointer'}}>
                 <h5 className="modal-title">Medium</h5>
           </a>
                <Like></Like>
            </div>
            <a onClick={()=> window.open("https://medium.com/@mr.ahr.es6", "_blank")} style={{textDecorationLine: 'none', color:'rgba(0,0,0,.7)', cursor:'pointer'}}>
                 <div className="modal-body py-0">
                      <p>My blog on Medium</p>
                 </div>
            </a>
        </div>
       
    </div>
     );
}
 
export default Medium;