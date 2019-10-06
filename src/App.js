import React from 'react';
import Container from '@material-ui/core/Container';
import Nav from './components/Nav';
import Menu from './components/Menu';

const App = () => {
  return (
    <>
      <Nav />
      <Container>
        <Menu />
      </Container>
    </>
  );
};

export default App;
