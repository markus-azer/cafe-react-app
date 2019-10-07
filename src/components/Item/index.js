import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop: '30',
  },
  cardContent: {
    flexGrow: 1,
  },
  typeLabel: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: 'gray',
  },
  priceLabel: {
    color: 'gray',
    paddingTop: '10px',
    padding: '5px',
  },
  label: {
    fontWeight: 'bold',
    fontSize: '150%',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
}));

const Item = ({ index, item }) => {
  const classes = useStyles();
  const { photo, type, name, price } = item;

  return (
    <>
      <CssBaseline />
      <Grid item key={index} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          {/* TODO: Use lazy loading */}
          <CardMedia className={classes.cardMedia} image={photo} title="Image title" />
          <CardContent className={classes.cardContent}>
            <div className={classes.container}>
              <div style={{ gridColumnEnd: 'span 8' }}>
                <Typography className={classes.typeLabel}> {type} </Typography>
                <Typography className={classes.label}> {name} </Typography>
              </div>
              <div style={{ gridColumnEnd: 'span 4' }}>
                <Typography className={classes.priceLabel} align="right">
                  ${price}
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

Item.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    photo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};
export default Item;
