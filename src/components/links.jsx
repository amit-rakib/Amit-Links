import React, { Component } from 'react';
import Github from './common/github';
import Insta from './common/instagram';
import Port from './common/portfolio';
import Youtube from './common/youtube';
import Header from './common/header';
import Fb from './common/facebook';
import Itch from './common/itch';
import Medium from './common/medium';
import Devto from './common/devto';
import Linkedin from './common/linkedin';
class Links extends Component {
    state = { 
        
      
     } 

 

 
    render() { 
        return (
         <React.Fragment>
             <Header></Header>
             
             <Port></Port>
             <Itch></Itch>
             <Medium></Medium>
             <Github></Github>
             <Devto></Devto>
             <Linkedin></Linkedin>
             <Insta></Insta>
             <Youtube></Youtube>
             <Fb></Fb>

             <a onClick={()=> window.open("https://www.instagram.com/amit_rakib/", "_blank")} style={{textDecorationLine: 'none', color:'#fff', cursor:'pointer'}}>
                 <div className="modal-body py-0 " style={{ textAlign:"center", top:"16px" }}>
                      <h6>@amit_rakib</h6>
                 </div>
            </a>
            
         </React.Fragment>
        );
    }
}
 
export default Links;