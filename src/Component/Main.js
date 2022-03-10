import {React, useState} from 'react';

import { IoMdClose} from "react-icons/io";


function Main(){

const[inputItem,SetinputItem] = useState('');
const[Items,SetItem] = useState([]);
const eventHandler = (event)=>{
	SetinputItem(event.target.value);
};



const addItem = (event)=>{

if (inputItem === "") {
	alert("Enter input");
} else{
SetItem([...Items, { name : inputItem, key : Date.now() } ]);
SetinputItem('');

}
};


const itemDeleted = (key) => {
SetItem(Items.filter((Item) => {return(Item.key !== key)  })
	);
};


return(
<>
<div className="mainDiv">
	<div className="centerDiv">
		<h1>To Do List</h1>
		<input type = "text" placeholder = "Enter your list" onChange={eventHandler} value={inputItem}  />
		<button onClick={addItem}> + </button>

		{Items.map((Item) =>{

			return (
			<>
<ul>
			<div className = "todoList" >
				
			<li>{Item.name} </li>

			<IoMdClose color="red" onClick ={() =>itemDeleted(Item.key)}/>
			
			</div>
			</ul>
			</>

		)})}
	</div>
</div>
</>
)
}

export default Main;