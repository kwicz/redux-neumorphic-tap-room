import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 20,
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop:50,
    marginBottom:100,
    borderRadius:4,
      /* Basic styling and alignment */
    /* For Neumorphism Effect */
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
      /* For Neumorphism Effect */
  },
  textField: {
    width: "auto",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),

  },
}));


function ReusableForm(props) {
  const classes = useStyles();
  const buttonStyle = {
    backgroundColor: "#E0E5EC",
    boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)",
    margin: 20
  }

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardHeader title={props.buttonText}>
        </CardHeader>
        <form onSubmit= {props.formSubmissionHandler}>
          <TextField
            type='text'
            name='name'
            label='Beer Name'
            id="standard-full-width"
            style={{ margin: 8 }}
            fullWidth
          />
          <TextField
            type='text'
            name='brand'
            label='Brand'
            id="standard-full-width"
            style={{ margin: 8 }}
            fullWidth
          />
          <TextField
            type='text'
            name='description'
            label='Description'
            id="standard-full-width"
            style={{ margin: 8 }}
            fullWidth
          />
          <TextField
            id='margin-none' 
            className={classes.textField}
            type='text'
            name='alcoholContent'
            label='Alcohol Content'/>
          <TextField
            id='margin-none' 
            className={classes.textField}
            type='number'
            name='price'
            label='Price'/>
          <br />
          <Button 
            style={buttonStyle}
            type="submit">{props.buttonText}
          </Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;