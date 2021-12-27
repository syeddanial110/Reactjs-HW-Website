import React from 'react'
import { useEffect, useState } from 'react';
const Home = () => {
    const [todo,setTodo] =useState("")

  // useEffect(()=>{
  //   const storedData = localStorage.getItems("keys" , todo)
  //   storedData ? setTodo(todo) : [];
  //   },[])

  //   useEffect(()=>{

  //     window.localStorage.setItems("key" , todo)
      
  //     }, [])



  // const list=""
  
  // not working code

  // var data=[];
//   function mySubmit() {
//     //getting values from textboxes
    
//     //check all fields are fill properly    
//     if (todo !== '' ) {
//         const todoList = {
//             todo
//         };
//         //if previous data set add new into it
//         data.push(todoList);
//         //json stringify convert all data into string and set data on Local storage with value pair
//         localStorage.setItem('MyUserData', JSON.stringify(data));

//         //clear text boxes
//         // document.getElementById("name").value = '';
//         // document.getElementById("age").value = '';
//         // document.getElementById("address").value = '';
//         // todo="";
//         //after adding new data on localstorage render table for updated data
//         data = [];
//         getAllLocalStorage()

//     } else {
//         alert('Fill All text boxes');
//     }

//   //   function getAllLocalStorage() {

//   //     var tbody = document.querySelector('tbody');
//   //     tbody.innerHTML = '';
//   //     //getting data from localStorage from key
//   //     var mydata = localStorage.getItem('MyUserData');
//   //     //convert string form data into its original data types
//   //     var x = JSON.parse(mydata);
//   //     //if data found this if condition work if not or else works
//   //     if (x != null) {

//   //         //adding/pushing previous data in global data array 
//   //         for (var i = 0; i < x.length; i++) {
//   //             data.push(x[i]);
//   //         }

//   //         //loop through on array and render table data row wise seperately using string back tack & string interpolation 
//   //         x.map((item) => {
//   //             tbody.innerHTML += `
//   //     <tr>
//   //         <td>${item.setTodo}</td>
         
//   //     </tr>
//   // `;
//   //         });
//   //     } else {
//   //         tbody.innerHTML = '0 result found';
//   //     }
//   // }


// }

// function mySubmit(){
//    setTodo(todo)
// }

  return (
    <>
  

      {/* Todo List */}   
      
      {/* <div className="mb-3 w-50 p-5">
        <label  className="form-label">Enter To do</label>
        <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter what do you want" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
        <div className="mt-3 col-auto">
           <button type="submit" className="btn btn-primary mb-3" onClick={(e)=>{e.preventDefault(); console.log({todo});
           ;
           }} >Click to Add</button>
         </div>
      </div>

      <table>
        <tr > 
          <td className='p-5'>{todo}</td>
        </tr>
        <tbody></tbody>
      </table>
     */}

     <form>
     <div className="mb-3">
          <label  className="form-label">First Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={todo} onChange={(e)=>{setTodo(e.target.value)}} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={(e)=>{e.preventDefault(); console.log({todo})} }> Submit </button>
     </form>
    





    </>
  );
}

export default Home
