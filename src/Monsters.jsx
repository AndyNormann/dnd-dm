import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './reducers/monsters'


class Monsters extends React.Component {
  state = {
    name: "",
    stats: {
      str: 0,
      dex: 0,
      con: 0,
      wiz: 0,
      int: 0,
      cha: 0
    },
    notes: ""
  }
  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({[name]: value});
  }
  handleStatsChange = event => {
    const value = +event.target.value;
    const name = event.target.name;
    this.setState({...this.state, stats: {...this.state.stats, [name]: value}});
  }
  render() {
    return (
      <div>
        <form style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          margin: '5px'
        }}
        onSubmit={e => {
          e.preventDefault();
          this.props.addMonster(this.state);
          this.props.submit()
        }}
      >
        <Field
          name="name"
          label="Name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <Field
          name="notes"
          label="Notes"
          multiline
          value={this.state.notes}
          onChange={this.handleChange}
        />
        <div style={{display: 'flex'}}>
          {Object.keys(this.state.stats).map(e => {
            return (
              <Field 
                key={e}
                name={e}
                label={e}
                value={this.state.stats[e]}
                onChange={this.handleStatsChange}
              />
            )
          })}
        </div>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
    )
  }
}

const Field = props => 
  <TextField 
    style={{
      margin: '5px 0 5px 0'
    }}
    variant="outlined"
    {...props}
  />

const mapStateToProps = (state: any) => {
  return {
    monsters: state.monsters.monsters
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actions, dispatch);
}

Monsters = connect(mapStateToProps, mapDispatchToProps)(Monsters);

export default Monsters;

