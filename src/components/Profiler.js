import React, { Component } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid  from '@material-ui/core/Grid'
import Button  from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import { GetUsers } from '../action/SignupAction';
import { connect } from 'react-redux'S



const UserProfile = props => {
	const email = props.props.user ? props.props.user.email : '';
	const name = props.props.user ? props.props.user.name : '';
	const phoneNumber = props.props.user ? props.props.user.phoneNumber : ''
  const gender = props.props.user ? props.props.user.gender : '';
  const dob = props.props.user ? props.props.user.dob : '';
  const emailOtpIn = props.props.user ? props.props.user.emailOptIn : '';
  const update = () =>{
    props.props.history.push("/update");
  }

	return (
            <React.Fragment>
            <CssBaseline />
            <Container >
              <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '80vh', paddingTop:'10vh',paddingLeft:'43vh'}} >
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={12}>
                 <h1 className="label-login">Profile</h1>
                </Grid>
              </Grid>
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Name:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{name}</strong></label>
                </Grid>
              </Grid>
      
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Email:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{email}</strong></label>
                </Grid>
              </Grid>
      
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Phone number:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{phoneNumber}</strong></label>
                </Grid>
              </Grid>
      
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Gender:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{gender === 0 ? "Nam" : "Nữ"}</strong></label>
                </Grid>
              </Grid>
      
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Dob:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{dob}</strong></label>
                </Grid>
              </Grid>
      
      
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={6}>
                  <label><strong>Email Opt-In:</strong></label>
                </Grid>
                <Grid item xs={6}>
                  <label><strong>{emailOtpIn}</strong></label>
                </Grid>
              </Grid>
              <Grid container item xs={8} spacing={3}>
                <Grid item xs={12}>
                  <Button variant="contained" color="primary" className="login-btn"  onClick={update}>Update</Button>
                </Grid>
              </Grid>
              </Typography>
            </Container>
          </React.Fragment>
	)
}

class User extends Component {
	componentDidMount() {
		this.props.GetUsers()
	}
	render() {
    debugger
    if (!this.props.isAuthenticated) {
			this.props.history.push('/')
		}
		return (
				<UserProfile props={this.props} />
		);
	}
}

const mapStateToProps = state => {
	return {
		isAuthenticated: state.login.isAuthenticated,
    email: state.login.email,
    userId : state.login.id,
    token:state.login.token,
    user : state.login.user
	
	}
}

const mapDispatchToProps = dispatch => {
	return {
		GetUsers: () => dispatch(GetUsers())
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(User)