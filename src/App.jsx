import React, {Component} from 'react';
import Monsters from './Monsters';
import MonsterView from './MonsterView';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from "@material-ui/core/TextField";

class App extends Component {
  state = {
    tabIndex: 0
  }

  handleChange = (event, value) => {
    this.setState({tabIndex: value});
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <AppBar position="static">
          <Tabs value={this.state.tabIndex} onChange={this.handleChange}>
            <Tab label="Monsters" />
          </Tabs>
        </AppBar>
        <div style={{height: "100%"}}>
          {this.state.tabIndex === 0 && <MonsterView />}
        </div>
      </div>
    );
  }
}

export default App;
