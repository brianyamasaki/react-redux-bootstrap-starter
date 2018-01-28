import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Grid, Row, Button } from 'react-bootstrap';

const Home = props => (
  <Grid>
    <Row>
    <h1 className="text-center">Home</h1>
    <p>Welcome home!</p>
    <div className="text-center">
      <Button onClick={() => props.changePage()}>Go to about page via redux</Button>
    </div>
    </Row>
  </Grid>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null, 
  mapDispatchToProps
)(Home)