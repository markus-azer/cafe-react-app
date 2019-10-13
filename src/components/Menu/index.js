import React, { useState, useEffect, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import firebase from '../../firebase';
import Item from '../Item';

const AddItem = React.lazy(() => import('../AddItem'));

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('items')
      .onSnapshot(snapshot => {
        const fetchedItems = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));

        setItems(fetchedItems);
      });

    return () => unsubscribe();
  }, []);

  const addItem = ({ type, name, price, photo }) => {
    firebase
      .firestore()
      .collection('items')
      .add({ type, name, price, photo });
  };

  const deleteItem = id => {
    firebase
      .firestore()
      .collection('items')
      .doc(id)
      .delete();
  };

  const editItem = (id, { type, name, price, photo }) => {
    firebase
      .firestore()
      .collection('items')
      .doc(id)
      .update({ type, name, price, photo });
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
            <Item
              key={item.id}
              index={item.id}
              item={item}
              deleteItem={deleteItem}
              editItem={editItem}
            />
          ))}
        </Grid>
      </Container>
      <Suspense fallback={<CircularProgress />}>
        <AddItem open={addItemModal} toggleModal={toggleAddItemModal} addItem={addItem} />
      </Suspense>
    </>
  );
};

export default Nav;
