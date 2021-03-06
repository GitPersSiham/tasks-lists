
import React from 'react';

import './App.scss';
import Main from './pages/Main/index';
import SidebarLeft from './pages/SidebarLeft/index';
import SidebarRight from './pages/SidebarRight/index';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      leftOpen: true,
      rightOpen: true,
    }
  }

  toggleSidebar = (event) => {
    let key = `${event.currentTarget.parentNode.id}Open`;
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let leftOpen = this.state.leftOpen ? 'open' : 'closed';
    let rightOpen = this.state.rightOpen ? 'closes' : 'open';

    return (
      <>
  
     <div id="layout">
     <SidebarLeft show={this.toggleSidebar} left={leftOpen}/>
     <Main left={leftOpen} right={rightOpen}/>
     <SidebarRight show={this.toggleSidebar} right={rightOpen}/>
     </div>
    </>
    );
  }
}

export default App;
