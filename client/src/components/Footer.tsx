import React, { ReactElement } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    footer: {
      bottom: 0,
      right: 0,
      left: 0,
      textAlign: 'center',
      position: 'fixed',
      fontSize: '0.8rem',
    },
    link: {
      textDecoration: "none"
    }
  })
)

export default function Footer(): ReactElement {
  const classes = useStyles();

  return (<div className={classes.footer}>
    Dystematic / Code challenge - {" "}
    <a className={classes.link} href="https://dearruda.me">Ricardo de Arruda</a>
  </div>)
}