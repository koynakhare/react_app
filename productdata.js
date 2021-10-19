import React from 'react';
import Classes from './productdata.module.css';
const productdata=(props)=>{
    console.log(props.data);
    const coloroption=props.data.colorOptions.map((item,pos)=>{
      const classarr=[Classes.red];
      if(pos===props.currentpreviewpos){
        classarr.push(Classes.SelectedProductImage);
      }
return(
  <img key={pos} className={classarr.join(' ')} src={item.imageUrl} alt={item.styleName} onClick={()=>props.oncoloroption(pos)}/>
);
    })
    const buttonop=props.data.featureList.map((item,pos)=>{
      const buttonarr=[Classes.time];
      if(pos===props.currentpos){
        buttonarr.push(Classes.selectbutton);
      }
     
      return(
        <button onClick={()=>props.ontimebutton(pos)} key={pos} className={buttonarr.join(' ')}>{item} </button>
      );
    })
    return(
        
    <div className={Classes.productdata}>
          <h1 className={Classes.producttitle}>{props.data.title}</h1>
          <p>{props.data.description}</p>
          <h3 className={Classes.selectcolor}>Select color</h3>
          <div>
            {coloroption}
           
          </div>
          <h3 className={Classes.features}>Feature</h3>
          <div>
            {buttonop}
            {/* <button className={[Classes.time,Classes.selectedbutton].join(' ')}>Time</button>
            <button className={Classes.heart}>heart beat</button> */}
          </div>
          <button className={Classes.buy}>Buy Now</button>
       </div>
      
      
    );
}
export default productdata;
