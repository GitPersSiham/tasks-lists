import React from "react";
import TextAreaShort from "../../components/ShortDescription";
import TextAreaLong from "../../components/LongDsecription";
import Date from "../../components/Date";
import {AiOutlinePoweroff  } from 'react-icons/ai';



export default function Main(props) {
    
  return (
   
       <div id='main'>
         <div className='header'>
         <a href="http://localhost:5050/logout"><h3 className="title"><AiOutlinePoweroff /></h3></a>
         </div>
         <div className='content'>
            <h3>Main content</h3><br/>
             <div className="todoapp stack-large">
          </div>
            <TextAreaShort/>
            <TextAreaLong />
            <Date />
          </div>
         </div>
    
       );
       }

