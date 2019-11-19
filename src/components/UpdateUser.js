import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import { Update} from '../action/SignupAction';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Assignment
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const  UpdateForm = (props) =>{
  const change = (event)=> {
    const taget =event.target;
    const name = taget.name;
    const value = taget.type === 'checkbox' ? taget.checked : taget.value;
    //props.props.dispatch({type:ProfileActionTypes.BINDING_USER,data:{name,value}})
  }
  
  const email = props.props.user ? props.props.user.email : '';
  const name = props.props.user ? props.props.user.name : '';
  const mobileNumber = props.props.user ? props.props.user.mobileNumber : ''
  const gender = props.props.user ? props.props.user.gender : '0';
  const dob = props.props.user ? props.props.user.dob : '';
  const emailOtpIn = props.props.user ? props.props.user.emailOtpIn : '';
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Update
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                value={name}
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                onChange={change}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Phone Number"
                name="mobileNumber"
                autoComplete="phone"
                value={mobileNumber}
                onChange={change}
              />
            </Grid>
            <Grid container item xs={12} spacing={2}>
            <Grid item xs={6}>
              <label><strong>Gender:</strong></label>
            </Grid>
            <Grid item xs={6} spacing={2}>
              <label>Male</label>
            <Radio
              checked={gender == "0"}
              onChange={change}
              value="0"
              name="gender"
              inputProps={{ 'aria-label': 'A' }} />
              <label>Female</label>
            <Radio
              checked={gender == "1"}
              onChange={change}
              value="1"
              name="gender"
              inputProps={{ 'aria-label': 'A' }} />
            </Grid>
            </Grid>
            <Grid item xs={12} spacing={2}>
              <TextField
                variant="outlined"
                fullWidth
                label="Dob"
                name="dob"
                value={dob}
                onChange={change}
              />
            </Grid>
            <Grid item xs={12} spacing={2}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email Opt-In"
                name="emailOtpIn"
                onChange={change}
                value={emailOtpIn}
              />
            </Grid>
          </Grid>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>props.props.UpdateUser(props.props.user)}
          >
            Update
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={()=>props.props.history.push('/profile')}
          >
            Back
          </Button>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}

class UserUpdate extends React.Component{
  render() {
		if (!this.props.isAuthenticated || this.props.updated) {
			this.props.history.push('/profile')
		}
		return (
			<div>
				<UpdateForm props={this.props} />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
    isAuthenticated: state.auth.isAuthenticated,
		userId: state.auth.userId,
    user: state.user.currentUser,
    updated:state.user.updated
	}
}

const mapDispatchToProps = dispatch => {
	return {
    Update: users => dispatch(Update(users)),
    'dispatch':dispatch
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserUpdate)