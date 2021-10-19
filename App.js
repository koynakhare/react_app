import logo from './logo.svg';
import Blog from './blogcard';
import React, {Component} from 'react';
import Classes from './blogcard.module.css';
import Product from './product';
import Topbar from './topbar';
import Alldetail from './alldetail';
import ProductData from './productdata';

//import { getAllByPlaceholderText } from '@testing-library/dom';
//import Classes from './blogcard.module.css';
//import './APP.css';
class App extends Component{
 state={
   productdata:Alldetail,
  // currentpreview:"https://imgur.com/xSIK4M8.png",
   currentpreviewpos:0,
   currentbuttonpos:0,
   currentpos:0,
   //showheart:true
 }
 oncoloroption=(pos)=>{
   
   this.setState({currentpreviewpos:pos});
 }
 ontimebutton=(pos)=>{
  //  let update=false;
  //  if(pos===1){
  //    update=true;
  //  }
  this.setState({currentpos:pos})
   
}
  render(){
  return(
    <div className={Classes.container}>
    
      <Topbar/>
      
      <div className={Classes.maincontainer}>
        <div className={Classes.product}>
       <Product currentpreview={this.state.productdata.colorOptions[this.state.currentpreviewpos].imageUrl} currentpos={this.state.currentpos} />
        </div>
        <div className={Classes.productdata}>
          <ProductData data={this.state.productdata} oncoloroption={this.oncoloroption} currentpreviewpos={this.state.currentpreviewpos} ontimebutton={this.ontimebutton} currentpos={this.state.currentpos}/>
        </div>
      </div>
      </div>
  );
  }
//   // let first="koyna";
//   // let s="khare";
//   // const getname=(first,s)=>{
//   //   return( <p>{`${first} ${s}`}</p>);
//   // }
// // const blogObj={
// //   title:'blog title 1',
// //   description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo.'

  
// // }
// // const styles={
// //   margin:'20px',
// //   borderRadius:'5px',
// //   backgroundColor:'red'
// // }
// state={
//   showblog:true,
//   arr:
//   [
//     {id:1,title:'blog title',
//   discription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo.',
//   likecount:0
//   },
//     {id:2,title:'blog title',
//     discription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo.',
//   likecount:0},
//     {id:3,title:'blog title',
//     discription:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quo.',
//     likecount:0}
//   ]
// }
//  likees=(pos)=>{
//    const updatedBlogList =this.state.arr;
//     const updatedBlogobj=updatedBlogList[pos];
//    updatedBlogobj.likecount=updatedBlogobj.likecount+1;
//    updatedBlogList.likecount=updatedBlogobj;
//    this.setState({arr:updatedBlogList});
  
// }
 
//   //    /* {/* <div className="App"key={item.id}>
//   //   <div style={styles} >
//   //     <h3>{item.title}</h3>
//   //   <p>{item.discription}</p> 
 
//   //   </div>
//   // {

//   // }
//   //   </div> */
  
  
// // })
 


//     hideall=()=>{
//       let update=!this.state.showblog;
//       this.setState({showblog:update})

//    }
//   render(){
//     console.log(this.state);
     
//  const Blogs=isarr(this.state.arr)?[]:this.state.arr.map((item,pos)=>{
//   console.log(item);
//   return (
    
//    <Blog  key={pos} title="i am" likecount={item.likecount} likees={this.likees} position={pos}/>
//    );
//   })

//  return (
// <div>
// <button onClick={this.hideall}>{this.state.showblog?'hide blog':'show'}</button>
//   {
//    this.state.showblog? Blogs:null
    
//   }

// </div>
//  );
 
// }
}
export default App;
