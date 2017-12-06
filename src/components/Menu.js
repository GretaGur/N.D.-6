import React from 'react';
import Button from 'material-ui/Button';

function logout() {
  localStorage.removeItem('userName');
}

const Menu = () => {

  return <nav>
    <Button href="/homepage" color="primary">
      Home
    </Button>
    <Button href="/newrowpage" color="primary">
      New Row
    </Button>
    <Button onClick={logout} href="/" color="primary">
      Logout
    </Button>
  </nav>
};

export default Menu;