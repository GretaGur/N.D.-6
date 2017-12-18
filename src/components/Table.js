import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.headers = this.getHeaders();
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

  drawHeaders() {
    let header = [];
    this.headers.forEach((element, index) => {
      header.push(<TableCell key={index}>{element}</TableCell>)
    });
    return header;
  }
  
  drawRow(dataItem) {
    let cell = [];

      this.headers.forEach((key, index) => {
        cell.push(<TableCell key={index}>{dataItem[key] || ""}</TableCell>)
      })

    return cell;
  }

  drawRows(data) {
    let dataTable = [];
    data.forEach(dataItem => {
      dataTable.push(<TableRow key={dataItem.id}>{this.drawRow(dataItem)}</TableRow>);
    });
    return dataTable;
  }

  render() {
    return (
      <div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                {this.drawHeaders()}
              </TableRow>
            </TableHead>
            <TableBody>
              {this.drawRows(this.props.data)}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }

}

export default DataTable;