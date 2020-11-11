import React from 'react'

export default function SidebarRight(props) {
  return (
   
      
      <div id='right' className={props.right} >
              <div className='icon'
                   onClick={props.show} >
                   &equiv;
              </div>
              <div className={`sidebar ${props.right}`} >
                  <div className='header'>
                    <h3 className='title'>
                      Right header
                    </h3>
                  </div>
                  <div className='content'>
                      <h3>Right content</h3><br/>
                      <p>
                        Mauris velit turpis, scelerisque at velit sed, porta varius tellus. Donec mollis faucibus arcu id luctus. Etiam sit amet sem orci. Integer accumsan enim id sem aliquam sollicitudin. Etiam sit amet lorem risus. Aliquam pellentesque vestibulum hendrerit. Pellentesque dui mauris, volutpat vel sapien vitae, iaculis venenatis odio. Donec vel metus et purus ullamcorper consequat. Mauris at ullamcorper quam, sed vehicula felis. Vestibulum fringilla, lacus sit amet finibus imperdiet, tellus massa pretium urna, non lacinia dui nibh ut enim. Nullam vestibulum bibendum purus convallis vehicula. Morbi tempor a ipsum mattis pellentesque. Nulla non libero vel enim accumsan luctus.
                      </p>
                  </div>
              </div>
          </div>

  )
}
