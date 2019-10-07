import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Item from '../Item';
import AddItem from '../AddItem';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: '30px',
  },
  title: {
    margin: theme.spacing(1),
    marginRight: 'auto',
  },
  button: {
    margin: theme.spacing(1),
    marginLeft: 'auto',
    textTransform: 'none',
  },
  cardGrid: {
    paddingBottom: theme.spacing(8),
  },
}));

const Nav = () => {
  const classes = useStyles();

  const [addItemModal, setAddItemModal] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
    {
      id: 2,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
    {
      id: 3,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
    {
      id: 4,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
    {
      id: 5,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
    {
      id: 6,
      type: 'Main Course',
      name: 'Pizza Margherita',
      price: '5',
      photo: 'https://source.unsplash.com/random',
    },
  ]);

  const addItem = ({ type, name, price, photo }) => {
    const newItems = [...items, { id: items.length + 1, type, name, price, photo }];
    setItems(newItems);
  };

  const toggleAddItemModal = () => {
    setAddItemModal(!addItemModal);
  };
  return (
    <>
      <CssBaseline />
      <Toolbar className={classes.header}>
        <Typography variant="h5" noWrap className={classes.title}>
          Menu
        </Typography>
        <Button
          variant="contained"
          size="large"
          color="primary"
          className={classes.button}
          onClick={toggleAddItemModal}
        >
          Add menu item
        </Button>
      </Toolbar>
      <Container className={classes.cardGrid}>
        <Grid container spacing={4}>
          {items.map(item => (
            <Item key={item.id} index={item.id} item={item} />
          ))}
        </Grid>
      </Container>
      <AddItem open={addItemModal} toggleModal={toggleAddItemModal} addItem={addItem} />
    </>
  );
};

export default Nav;
