import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import HomePage from './HomePage';
import NewRowPage from './NewRowPage';
import Login from './Login';
import Data from '../data/data';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      data: Data.data,
      dataTableRowId: "id",
    };
    this.getUsername = this.getUsername.bind(this);
    this.addRowToData = this.addRowToData.bind(this);
    console.log(this.state.data);
  }

  getUsername(name) {
    this.setState({ userName: name });
  }
  addRowToData(newRowObject) {
    // this.setState({ data: [...this.state.data, newRowObject] },  this.updatingItem);
    this.setState({ data: [...this.state.data, newRowObject] }, () => {
      this.forceUpdate();
      console.log(this.state.data);
    });
    

    // let arrayvar = this.state.data.slice();
    // arrayvar.push(newRowObject);
    // console.log(arrayvar);
    // this.setState({ data: arrayvar });
    // console.log(this.state.data);
  }
  authenticate() {
    const userName = localStorage.getItem('userName');
    (userName) ? this.getUsername(userName) : "";
  }
  componentWillMount() {
    this.authenticate();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => (<Login getUsername={this.getUsername} />)} />
          <DefaultLayout userName={this.state.userName}>
            <Route exact path="/homepage" render={() => (<HomePage data={this.state.data} />)} />
            <Route exact path="/newrowpage" render={() => (<div>{this.state.data.length}<NewRowPage data={this.state.data} dataTableRowId={this.state.dataTableRowId} addRowToData={this.addRowToData} /></div>)} />
          </DefaultLayout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
