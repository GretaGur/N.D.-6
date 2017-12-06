import React, { Component } from 'react';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class DataTable extends Component {
  constructor(props) {
    super(props);

    this.headers = this.getHeaders();
    // this.header = this.drawHeaders();
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
    this.headers.forEach(element => {
      header.push(<TableCell key={element}>{element}</TableCell>)
    });
    return header;
  }
  drawRow(dataItem) {
    let cell = [];

      this.headers.forEach(key => {
        cell.push(<TableCell key={dataItem[key] || ""}>{dataItem[key] || ""}</TableCell>)
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
    // console.log(this.props.data);
    // console.log(this.headers);
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