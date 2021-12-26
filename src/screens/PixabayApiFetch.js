// import React, { useEffect, useState } from 'react'
// import axios from 'axios'


// const PixabayApiFetch = () => {
//     var ApiKey='24952702-0fb54b5d053c710c62a7c1222';
//     const [post,setPost] =useState([])
//     useEffect(async()=>{
//         try {
//             let res= await axios.get(`https://pixabay.com/api/videos/?key=${ApiKey}`)
//             console.log(res.data.hits, "pixabay");
//             setPost=(res.data.hits)
//         } catch (error) {
//             console.log(error);
//         }
//     },[])
  
  
//     return (
      
//         <>
//         Api
//             <ul>
//                 {
//                     post && post.length>0 && post.map((posts)=>{
//                         return (
                        
//                         <div className='d-grid' key={posts.id} style={{margin:"10px 10px 5px 10px", border:"1px solid red",padding:"5px", listStyle:"none"}} >
//                            <li className="postsTitle"> {posts.title} </li>
                      
                           
                         
                          
                        
//                        </div>)
//                     })
//                 }
//             </ul>
//         </>
//     )
// }

// export default PixabayApiFetch


import React from 'react'
import axios from "axios";
import { useEffect, useState } from 'react'



const PixabayApiFetch = () => {
    var ApiKey='24952702-0fb54b5d053c710c62a7c1222';
    // const[video,setVideo] =useState([])
    const videoType=["all", "film", "animation" ]
    const [selectVideoType,setSelectVideoType]=useState(
        videoType[0]
    )


    const [post, setPost] = useState([])
    useEffect(async()=>{
      try {
        let res= await axios.get(`https://pixabay.com/api/?key=${ApiKey}&video_type=${selectVideoType}`)
      
        console.log(res.data.hits, "pixabay");
  
        setPost(res.data.hits)
      } catch (error) {
        console.log(error);
        
      }
    },[])
      return (
       
          <>
              
                  {/* <CustomTitle title="OurTeam" /> */}
  
                  <ul>
                      {/* <table> */}
                     
                  <tr style={{border:"1px solid blue"}}>
                      <th style={{padding:"25px"}}>Id</th>
                      <th style={{padding:"25px"}}>Title</th>
                      <th style={{padding:"25px"}}>Body</th>
                    </tr>
                  
                    {/* </table> */}
          {
            post && post.length>0 && post.map((posts)=>{
              // console.log((posts,"post"));
              // return (<li key={index}>{posts.id} {posts.body}</li>)
              // return (<li key={posts.id}> {posts.body}</li>)
              return (<div className='d-grid' key={posts.id} style={{margin:"10px 10px 5px 10px", border:"1px solid red",padding:"5px", listStyle:"none"}} >
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
                      <td style={{padding:"15px"}}>{posts.id}</td>
                      <td style={{padding:"15px"}}> {posts.user}</td>
                      {/* <td style={{padding:"15px"}}>{posts.largeImageURL}</td> */}
                      <td >  <img style={{padding:"25px !important"}} src={posts.selectVideoType} alt='' className='w-full justify-self-center align-items-end' /></td>
                    </tr>
                    
                  </table>
                 </div>)
            }) 
          }
        </ul>
                 
                  
          </>


      )
}

export default PixabayApiFetch

