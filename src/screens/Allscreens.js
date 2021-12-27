import React from 'react'
import JsonPlaceholder from './JsonPlaceholder'
import PixabayApiFetch from "./PixabayApiFetch"
//  import img1 from "../assests/images/bg.jpg"
 import "../screens/allScreen.css"
import { Col, Row } from 'react-bootstrap'


const Allscreens = () => {
    return (
        <>
        <Row>
            <Col md={12} className='bg'>
        
          <JsonPlaceholder heading="Json Api Fetch" textCenter="center" textPadding="15px" dataPosition="right" dataPadding="25px" dataMargin="25px" />
          <PixabayApiFetch heading="Pixabay Api Fetch" textCenter="center" textPadding="15px" />  
     
          </Col>
          </Row>
        </>
    )
}

export default Allscreens
