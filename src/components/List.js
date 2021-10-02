import React from 'react'

const List = (props) => {
   
    return (
        <div>
         <li className="my-4">{props.name} <button className="btn btn-danger btn-sm btn-position" onClick={()=>props.onset(props.id)}>delete</button></li>
        </div>
    )
}

export default List
