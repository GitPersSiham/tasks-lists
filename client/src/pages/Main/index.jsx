import React, { useState} from "react";
import TextAreaShort from "../../components/ShortDescription";
import TextAreaLong from "../../components/LongDsecription";
import Date from "../../components/Date";



export default function Main(props) {
    
  return (
   
       <div id='main'>
         <div className='header'>
           <h3 className={`
               title
                ${'left-' + props.left}
                ${'right-' + props.right}
                `}>
                      Main header
            </h3>
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

