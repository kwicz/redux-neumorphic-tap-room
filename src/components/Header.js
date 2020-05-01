import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
    color: 'rgb(45,45,45,0.6)'
  },
}));

function Header(){
  const classes = useStyles();

  return (
      <h1 className={classes.root}>neumorphic tap toom</h1>
  );
}

export default Header;