import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

function KegList(props){
  const classes = useStyles();

  return (
    <React.Fragment  >
      <Grid className={classes.root} container spacing={2}>
        {props.kegList.map((keg) =>
          <Grid item item xs={6} sm={4} md={3} lg={2}>
            <Keg 
              whenKegClicked = { props.onKegSelection }
              onClickingOrder = { props.onClickingOrder }
              name={keg.name}
              brand={keg.brand}
              description={keg.description}
              alcoholContent={keg.alcoholContent}
              price={keg.price}
              remainingPints={keg.remainingPints}
              id={keg.id}
              key={keg.id}/>
          </Grid>
        )}
      </Grid>
    </React.Fragment>
  );
}

KegList.propTypes = {
  keglist: PropTypes.array,
  onKegSelection: PropTypes.func,
  onClickingOrder: PropTypes.func
};

export default KegList;