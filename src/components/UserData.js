// import { Card , ListGroup } from "react-bootstrap"
import { useState , useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
 //    gettting items from localStorage 
 const getLocalData= ()=>{
   let item= localStorage.getItem('lists')
   if(item){
       return JSON.parse(localStorage.getItem('lists'))
   }
   else 
   return []
}
const UserData = () => {


   
   const [data , setData]=useState("")
   const[item , setItem]=useState(getLocalData())   // for storing userinput data
   const updateItem=()=>{
       setItem((item)=>{
           return [...item , data]
       })
       setData("")
   }

   const deleteItem=(id)=>{
     
     setItem((items) =>{
         return(
             items.filter((curelement, index)=>{
                 return index !==id;
             })
         )
     })
   }

//    adding items to localStorage 
   useEffect(()=>{
     localStorage.setItem('lists' , JSON.stringify(item))
   },[item])
   

    return (
        <div className='containerdiv '>
            <h1 className="">Todo List : </h1>
            <input type="text" placeholder="enter item name" value={data} onChange={(e)=>setData(e.target.value)} />
            <button className="btn btn-outline-success mx-2" onClick={updateItem}>Add</button>
        <h1>item list</h1>
       <ol>
           {item.map((itemName , index)=>{
              return <List name={itemName} id={index} onset={deleteItem} key={index}/>
           })}
       </ol>
        </div>
    )
}


export default UserData
