import React from 'react';
import Button from 'material-ui/Button';
import { withRouter } from 'react-router-dom'

function logout() {
  localStorage.removeItem('userName');
}
const style = {margin:"10px"};

const Menu = ({history}) => {
  return <nav>
    <Button style={style} onClick={() => history.push('/homepage')} color="primary">
      Home
    </Button>
    <Button style={style} onClick={() => history.push('/newrowpage')} color="primary">
      New Row
    </Button>
    <Button style={style} onClick={logout} href="/" color="primary">
      Logout
    </Button>
  </nav>
};

export default withRouter(Menu);