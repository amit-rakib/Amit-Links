import React, { Component } from 'react';

class Like extends Component {
    
    constructor(props){

        super(props);
        this.state = {
          likes: 703,
          updated: false
          
        };
      }
       
      updateLikes = () => {
    
        if(!this.state.updated) {
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes + 1,
              updated: true
            };
          });
    
        } else {
    
          this.setState((prevState, props) => {
            return {
              likes: prevState.likes - 1,
              updated: false
            };
          });
    
        }
      }
    
      render(){
      let classes = "fa fa-heart";
      if(!this.state.updated) classes +="-o";
      
        return(
          <div>
            <i onClick={this.updateLikes} style={{color:"rgba(0,0,0,.7)", cursor:"pointer" }} className={classes}></i>         
            {/* 
               <p style={{color:"rgba(0,0,0,.7)"}}> {this.state.likes} </p>
            */} 
          </div>
        );
      }
    }
 
export default Like;