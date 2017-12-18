import React, { Component } from 'react';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl } from 'material-ui/Form';
import Button from 'material-ui/Button';


const style = {margin:"10px"};

class NewRow extends Component {

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
    this.getHeaders().forEach((element, index) => {
      inputs.push(<div key={index}><FormControl>
        <InputLabel htmlFor={element}>{element}</InputLabel>
        <Input
          id={element}
          name={element}
        /></FormControl></div>)
    });
    return inputs;
  }

  createNewRow(e) {
    let newRowObject = this.getDataFromTheForm();
    newRowObject = this.addIdToRow(newRowObject);
    let notEmptyValues = this.validateForm(newRowObject);
    if (notEmptyValues) {
      this.resetFormInputsValue();
      this.showSuccessMessage();
      this.addRowData(newRowObject);
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
      (dataItem.id > lastId) ? lastId = dataItem.id : lastId = 0;
    });
    return lastId;
  }

  addIdToRow(newRow) {
    newRow[this.props.id] = (this.getLastId() + 1);
    return newRow;
  }

  validateForm(newRowObject) {
    this.clearMessage();
    let isNotEmptyNames = true;

    Object.keys(newRowObject).forEach(function (key) {
      if (!(newRowObject[key])) {
        isNotEmptyNames = false;
        this.showErrorMessage(key);
      }
    }, this);
    return isNotEmptyNames;
  }

  clearMessage() {
    document.getElementById("message").innerHTML = "";
    let inputs = document.getElementsByTagName('input');
    let inputsList = Array.prototype.slice.call(inputs);
    inputsList.forEach(element => {
      document.getElementById(element.id).style.background = 'none';
    });
  }

  resetFormInputsValue() {
    let inputs = document.getElementsByTagName('input');
    let inputsList = Array.prototype.slice.call(inputs);
    inputsList.forEach(element => {
      document.getElementById(element.id).value = '';
    });
  }

  showErrorMessage(key) {
    document.getElementById(key).style.background = "rgba(204, 0, 0, 0.2)";
  }

  showSuccessMessage() {
    document.getElementById("message").innerHTML = "Row is added";
  }


  render() {
    return (
      <div>
        {this.drowInputs()}
        <Button color="primary" style={style}>
          <div onClick={this.createNewRow.bind(this)}>
            Submit
          </div>
        </Button>
        <div id="message"></div>
      </div>
    );
  }

}

export default NewRow;