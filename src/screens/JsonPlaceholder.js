import React, { useEffect, useState } from 'react'
// import React from 'react'
// import { Helmet } from 'react-helmet'
import axios from "axios";

const JsonPlaceholder = (props) => {
    const {heading,textCenter,textPadding,dataPosition,dataPadding,dataMargin}=props;
    const [post, setPost] = useState([])
  useEffect(async()=>{
    try {
      let res= await axios.get("https://jsonplaceholder.typicode.com/photos")
    //   let res= await axios.get("https://pixabay.com/api/?key=24952702-0fb54b5d053c710c62a7c1222")
    //   console.log(res.data.hits, "res");

      setPost(res.data)
    } catch (error) {
      console.log(error);
      
    }
  },[])
    return (
        <>
        <h1 style={{textAlign:textCenter, padding:textPadding}} >{heading}</h1>

                <ul>
                    {/* <table> */}
                   
                {/* <tr style={{border:"1px solid blue"}}>
                    <th style={{padding:"25px"}}>Id</th>
                    <th style={{padding:"25px"}}>Title</th>
                    <th style={{padding:"25px"}}>Body</th>
                  </tr> */}
                
                  {/* </table> */}
        {
          post && post.length>0 && post.map((posts)=>{
            // console.log((posts,"post"));
            // return (<li key={index}>{posts.id} {posts.body}</li>)
            // return (<li key={posts.id}> {posts.body}</li>)
            return (<div className='d-grid' key={posts.id} style={{margin:"10px 10px 5px 10px", listStyle:"none"}} >
                {/* <li className="postsId">{posts.id}</li>
                <li className="postsTitle"> {posts.title} </li>
                <li className="postsBody"> {posts.body} </li> */}
                <table>
                  {/* <tr style={{border:"1px solid blue"}}>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                  </tr> */}
                  <tr>
                    <td style={{textAlign:dataPosition, padding:dataPadding, margin:dataMargin}}>{posts.url}</td>
                    
                  </tr>
                </table>
               </div>)
          })
        }
      </ul>
                
        </>
    )
}

export default JsonPlaceholder
