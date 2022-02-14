import React, { useState ,useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {ProductListSelected,TotalItemselected} from "../action/index.js";
import axios from "axios";


function Productpage(props){
    const myState = useSelector((state) => state);
    const dispatch = useDispatch();
    const [productlist,setproductlist]=useState([])
    const [TotalItem,setTotalitem]=useState([])
    const [totalprice,setTotalPrice]=useState("")

    useEffect(() => {

        // console.log("mystate",myState?.TotalItemSelected)
        axios.get('https://fakestoreapi.com/products')
        .then(function (response) {
            if(response.status==200){
                console.log(" response product list",response.data);
                setproductlist(response.data)
                dispatch(ProductListSelected(response.data))
            }
          // handle success
         
        })

    }, [])

    
   
    const setitems=(item)=>{
       
        setTotalitem([...TotalItem,item])
        dispatch(TotalItemselected([...TotalItem,item]))
        

    }
    return (
        <div className="row my-5">
           <div className="col-md-1 col-12">

           </div>
           <div className="col-md-8 col-12">
               <div className="row">
                   {
                       productlist.length>0?
                   
                        productlist.map((item,index)=>{
                       return(
                        <div className="col-12 my-2" key={item.title} onClick={(e)=>{setitems(item)}}>
                           <div className="p-3 border">
                               <div className="row">
                                   <div className="col-md-2 col-12">
                                   <img src= {item.image} alt={"no image"} width="100" height="100" />
                               
                                   </div>
                                   <div className="col-9">
                                    <div style={{fontWeight:"500"}}>{item.title}</div>
                                    <div className="font-weight-bold" style={{fontWeight:"bold"}}>{item.price}</div>
                                    <div className="font-weight-light" style={{fontWeight:"200"}}>{item.description}</div>
                                    
                                   </div>
                                   <div className="col-1">
                                   <span className="btn-primary p-2 rounded float-end" style={{cursor:"pointer"}}>Add</span>
                          
                                   </div>
                               </div>
                                </div>
                           
                        </div>
                       )
                   }):"data is loading..."}
                   
               </div>
           </div>
           <div className="col-md-3 col-12">
               <div>My Cart</div>
               {
                   myState?.TotalItemSelected.map((item,index)=>{
                       return(
                           <div className="border p-2 rounded">
                               <div className="row">
                                   <div className="col-md-10">
                                   <div style={{fontSize:"10px"}}>{item.title}</div>
                                   </div>
                                   <div className="col-md-2">
                                   <div className="" style={{fontSize:"10px",fontWeight:"bold"}}>{item.price}</div>
                                   </div>
                               </div>
                            
                           </div>
                       
                       )
                   })
               }
               <div>Total:{totalprice}</div>
               <div className="text-center btn-primary mt-4"><span>Checkout</span></div>
           </div>
        </div>
    )
}

export default Productpage;
