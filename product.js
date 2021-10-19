import React from 'react';
import Classes from './product.module.css';
const product=(props)=>{
  const currenthour=new Date().getHours()>9?new Date().getHours():'0'+new Date().getHours();
   const currentmin =new Date().getMinutes()>9?new Date().getMinutes():'0'+new Date().getMinutes();
    return(
        
        <div className={Classes.product}>
        <img src={props.currentpreview}alt=""/>
        {
          props.currentpos==1? <div className={Classes.heartbeat}>
        
          
        <i className="fas fa-heart"></i>
          <p>
            78
          </p></div>:<div className={Classes.dateinw}>
          <p>
            {
              `${currenthour}:${currentmin}`
            }
          </p>
        </div>
        }
</div>
        
        
    );
}
export default product;