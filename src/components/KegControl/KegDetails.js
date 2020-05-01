import React from 'react';
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AttachMoney from '@material-ui/icons/AttachMoney';
import Clear from '@material-ui/icons/Clear';
import Create from '@material-ui/icons/Create';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom:100,
    marginTop:50,
    borderRadius:4,
    width: 300,
    height: "auto",
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
  }
}));

function KegDetails(props) {
  const { keg, onClickingDelete, onClickingOrder } = props;
  const classes = useStyles();
  const iconButtonStyle = {
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",
    margin: 6,
    color: "#e53935"
  }
  const iconButtonStyleDisabled = {
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",
    margin: 6,
    color: "rgb(163,177,198,0.6)"
  }
  let orderButton = <IconButton 
    style={iconButtonStyle} 
    onClick={()=> onClickingOrder(keg.id)}>
      <AttachMoney />
    </IconButton>;
  let pintsRemaing = <Typography variant="body2" color="textSecondary" component="p">
      ${keg.price}.00 PER PINT
    </Typography>
  if (keg.remainingPints === 0) {
    orderButton = <IconButton 
      style={iconButtonStyleDisabled} 
      disabled
      onClick={()=> onClickingOrder(keg.id)}>
        <AttachMoney />
      </IconButton>;
    pintsRemaing = <Typography variant="body2" color="textSecondary" component="p">
    SOLD OUT
  </Typography>;
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader
          title={keg.name}
          subheader={keg.brand}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
           {keg.alcoholContent} ALCOHOL CONTENT
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
           {keg.remainingPints} REMAINING PINTS
          </Typography>
          {pintsRemaing}
        </CardContent>
          {orderButton}
          <IconButton style={iconButtonStyle} onClick={ props.onClickingEdit } aria-label="share">
            <Create />
          </IconButton>
          <IconButton style={iconButtonStyle} onClick={()=> onClickingDelete(keg.id) }aria-label="share">
            <Clear />
          </IconButton>
      </Card>
    </React.Fragment>
  );
};


KegDetails.propTypes = {
  keg: PropTypes.object,
  onClickingOrder: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetails;