import React, { ReactElement } from 'react'
import Container from '@material-ui/core/Container';
import { useQuery, gql } from '@apollo/client';
import Table from './Table'
import Footer from './Footer'
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';

const securitiesQuery = gql`
  query Securities {
    Securities {
      ticker
      securityName
      sector
      country
      trend
    }
  }
`;

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      padding: '2%',
      minHeight: '10em'
    },
    loading: {
      display: 'flex',
      paddingTop: '15em',
      justifyContent: 'center'
    }
  })
)

export default function App(): ReactElement {
  const classes = useStyles();
  const { loading, data } = useQuery(securitiesQuery);

  return (
    <Container maxWidth='lg' className={classes.root}>
      {loading ? (
        <div className={classes.loading}>
          <CircularProgress size={90} />
        </div>
      ) : (data && <Table data={data.Securities} />)}
      <Footer/>
    </Container>
  )
}