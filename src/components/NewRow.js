import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';

class NewRow extends Component {
  constructor(props) {
    super(props);

    this.headers = this.getHeaders();
    this.lastId = this.getLastId();
  }

  getHeaders() {
    let headers = [];
    this.props.data.forEach(dataItem => {
      let keys = Object.keys(dataItem);
      keys.forEach(key => {
        if (headers.indexOf(key) === -1) {
          headers.push(key);
        }
      });
    });
    return headers;
  }

  drowInputs() {
    let inputs = [];
    this.headers.forEach(element => {
      inputs.push(<div><FormControl>
        <InputLabel htmlFor={element}>{element}</InputLabel>
        <Input
          id={element}
          key={element}
          name={element}
        /></FormControl></div>)
    });
    return inputs;
  }

  drowSubmitButton() {
    return <Button
      color="primary">
      <div onClick={this.createNewRow.bind(this)}>
        Submit
    </div>
    </Button>;
  }

  createNewRow(e) {
    let newRowObject = this.getDataFromTheForm();
    newRowObject = this.addIdToRow(newRowObject);
    let notEmptyValues = this.validateForm(newRowObject);
    if (notEmptyValues) {
      // this.resetFormInputsValue();
      // this.showSuccessMessage();
      this.addRowData(newRowObject);
      // return newRowObject;
    } else {
      console.log(false);
      // return false;
    }
  }

  addRowData(rowData) {
    this.props.addRowToData(rowData);
  }

  getDataFromTheForm() {
    let newRowObject = {};
    let inputs = document.getElementsByTagName('input');
    let inputsList = Array.prototype.slice.call(inputs);
    inputsList.forEach(element => {
      newRowObject[element.id] = element.value;
    });
    return newRowObject;
  }

  getLastId() {
    let lastId = 0;
    this.props.data.forEach(dataItem => {
      (dataItem.id > lastId) ? lastId = dataItem.id : "";
    });
    return lastId;
  }

  addIdToRow(newRow) {
    newRow[this.props.id] = (this.lastId + 1);
    return newRow;
  }

  validateForm(newRowObject) {
    this.clearMessage();
    let isNotEmptyNames = true;

    Object.keys(newRowObject).forEach(function (key) {
      if (!(newRowObject[key])) {
        isNotEmptyNames = false;
        console.log(document.getElementById(key));
        this.showErrorMessage(key);
      }
    });
    return isNotEmptyNames;
  }

  clearMessage() {
    document.getElementById("message").text = "";
    let inputs = document.getElementsByTagName('input');
    let inputsList = Array.prototype.slice.call(inputs);
    inputsList.forEach(element => {
      document.getElementById(element.id).style.borderStyle = 'none';
    });
  }

  // 
  showErrorMessage(key) {
    console.log(1);
    // document.getElementById(key).style.border = "1px solid red";
  }


  render() {
    return (
      <div>
        {this.drowInputs()}
        {this.drowSubmitButton()}
        <div id="message"></div>
      </div>
    );
  }

}

export default NewRow;