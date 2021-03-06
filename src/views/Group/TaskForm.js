import React from "react";
import PropTypes from "prop-types";

import moment from "moment";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = () => ({
  container: {
    backgroundColor: "#f2bd1d",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "noWrap",
    alignItems: "center"
  },

  textField: {
    margin: "1rem auto",
    width: "50%",
    backgroundColor: "white",
    borderRadius: "0.2rem",
    fontSize: "2rem"
  },
  h1: {
    margin: "2rem"
  },
  dense: {
    marginTop: 0
  },
  menu: {
    width: 100
  }
});

class TaskForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      assignedTo: 0,
      selected: new Date(),
      startDate: moment(),
      isComplete: false,
      description: ""
    };
    this.handleDate = this.handleDate.bind(this);
  }

  componentDidMount() {
    if (this.props.onChange) {
      this.props.onChange(this.state.selected);
    }
  }

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
  };

  handleDate(date) {
    if (this.props.onChange) {
      this.props.onChange(date);
    }
    this.setState({
      selected: date
    });
  }
  addTaskHandler = e => {
    e.preventDefault();

    this.props.addTask({
      title: this.state.title,
      assignedTo: this.state.assignedTo,
      dueDate: this.state.selected,
      isComplete: false,
      groupId: this.props.groupId,
      description: this.state.description
    });

    this.setState({
      title: "",
      assignedTo: "",
      description: "",
      selected: new Date()
    });
  };
  render() {
    const { classes, members, groupId } = this.props;
    const { title, assignedTo, dueDate, description } = this.state;
    return (
      <form
        className={classes.container}
        noValidate
        autoComplete="on"
        onSubmit={this.addTaskHandler}
      >
        <h1>Add New Task</h1>
        <h2>Assigned To</h2>
        <TextField
          id="dropdown"
          select
          className={classes.textField}
          value={assignedTo}
          name="assignedTo"
          onChange={this.handleChange}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {members.map(m => (
            <MenuItem key={m.userId} value={m.uid}>
              {m.name}
            </MenuItem>
          ))}
        </TextField>
        <h2>Title</h2>
        <TextField
          id="input"
          className={classes.textField}
          value={title}
          name="title"
          onChange={this.handleChange}
          margin="normal"
        />
        <h2>Title</h2>
        <DatePicker
          selected={this.state.selected}
          onChange={this.handleDate}
          dateFormat="yyyy/MM/dd"
        />
        <h2>Details</h2>
        <TextField
          id="input"
          className={classes.textField}
          value={description}
          name="description"
          onChange={this.handleChange}
          margin="normal"
        />
        <button className="button form-submit" type="submit">
          Save
        </button>
      </form>
    );
  }
}

TaskForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TaskForm);
