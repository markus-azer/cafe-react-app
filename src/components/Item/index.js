import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const Item = ({ index, item }) => {
  const classes = useStyles();
  const { photo, type, name } = item;

  return (
    <>
      <CssBaseline />
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          {/* TODO: Use lazy loading */}
          <CardMedia className={classes.cardMedia} image={photo} title="Image title" />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {type}
            </Typography>
            <Typography>{name}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

Item.propTypes = {
  index: PropTypes.string.isRequired,
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
export default Item;
