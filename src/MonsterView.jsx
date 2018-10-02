import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import Monsters from "./Monsters"

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './reducers/monsters'
import * as utils from './utils'

class MonsterView extends React.Component {
  state = {
    dialogOpen: false
  }
  dialogOpen = () => {
    this.setState({dialogOpen: !this.state.dialogOpen})
  }
  onDialogClose = () => {
    this.setState({dialogOpen: false})
  }
  render() {
    console.log(utils.parse_dice("blabla"))
    console.log(utils.parse_dice("d8+1"))
    console.log(utils.parse_dice("3d17"))
    return (
      <div>
        <Dialog style={{margin: '5px'}} open={this.state.dialogOpen} onClose={this.onDialogClose}>
          <DialogTitle>Add Monster</DialogTitle>
          <Monsters submit={this.onDialogClose} />
        </Dialog>
        <Paper style={{height: "100%"}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Str</TableCell>
                <TableCell>Dex</TableCell>
                <TableCell>Con</TableCell>
                <TableCell>Wiz</TableCell>
                <TableCell>Int</TableCell>
                <TableCell>Cha</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.monsters.map(e => 
                <TableRow key={e.id}>
                  <TableCell>{e.name}</TableCell>
                  <TableCell>{e.notes}</TableCell>
                  <TableCell>{e.stats.str}</TableCell>
                  <TableCell>{e.stats.dex}</TableCell>
                  <TableCell>{e.stats.con}</TableCell>
                  <TableCell>{e.stats.wiz}</TableCell>
                  <TableCell>{e.stats.int}</TableCell>
                  <TableCell>{e.stats.cha}</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Button onClick={this.dialogOpen} variant="fab" color="primary" aria-label="Add" style={{position: "fixed", bottom: "5px", right: "5px"}}>
            <AddIcon />
          </Button>
        </Paper>
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    monsters: state.monsters.monsters
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(actions, dispatch);
}

MonsterView = connect(mapStateToProps, mapDispatchToProps)(MonsterView);

export default MonsterView;

