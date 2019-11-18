import React, { Component } from 'react';
//import './SignupStyle.css';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles(theme => ({
	'@global': {
		body: {
			backgroundColor: theme.palette.common.white
		}
	},
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}))

const SignupForm = props => {
	const classes = useStyles()
  const [values, setValues] = React.useState({
		email:"",
    dob: "",
    emailOtpIn: "",
    gender: "0",
    id: 0,
    mobileNumber: "",
    name: "",
    password: ""
	})
	var { registerMember } = props.props

	function handleChange(e) {
		e.persist()
		setValues(oldValues => ({
			...oldValues,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value
		}))
  }
  const handleSubmit = e => {
		e.preventDefault()
    registerMember(values)
  }
      return (
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Register
            </Typography>
            <form
              onSubmit={handleSubmit}
              className={classes.form}
              noValidate
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete='fname'
                    name='fullName'
                    variant='outlined'
                    required
                    fullWidth
                    id='fullName'
                    label='Full Name'
                    autoFocus
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    variant='outlined'
                    required
                    fullWidth
                    name='contactNumber'
                    label='Contact Number'
                    id='contactNumber'
                    autoComplete='contactNumber'
                    onChange={handleChange}
                  />
                </Grid>
              
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='primary'
                className={classes.submit}
              >
                Register
              </Button>
              <Grid container justify='flex-end'>
                <Grid item>
                  <Link href='/' variant='body2'>
                    Already have an account ? Login
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
          <Box mt={8}>
        <Copyright />
      </Box>
        </Container>
      )
    }
        // return(
        //   <div id="login-box">
          
        //   <div class="left">
        //     <h1>Sign up</h1>
            
        //     <input type="text" name="username" placeholder="Username"  />
        //     <input type="text" name="email" placeholder="E-mail" />
        //     <input type="password" name="password" placeholder="Password" />
        //     <input type="text" name="mobilenumber" placeholder="+84" />
        //     <input type="radio" name="Gender" value="Nam" checked/>
        //     <label for="Nam">Nam</label>
        //     <input type="radio" name="Gender" value="Nu"/>
        //     <label for="Nu">Nu</label>
        //     <input type="datetime-local" name="DateOfBirth" value="local"/>
        //     <input type="text" name="Email Opt-In" placeholder="Email Opt-In" />
        //     <Link to={'/signin'} exact variant="body2">
        //     <input type="submit" name="signup_submit" value="Sign me up" />
        //     </Link>
        //   </div>
          
        //   <div class="right">
        //     <span class="loginwith">Sign in with<br />social network</span>
            
        //     <button class="social-signin facebook">Log in with facebook</button>
        //     <button class="social-signin twitter">Log in with Twitter</button>
        //     <button class="social-signin google">Log in with Google+</button>
        //   </div>
        //   <div class="or">OR</div>
        // </div>
        // );
  class Register extends Component {
          render() {
            return (
              <div>
                <SignupForm props={this.props} />
              </div>
            )
          }
        }
        
        const mapDispatchToProps = dispatch => {
          return {
            Register: users => dispatch(Register(users))
          }
        }
        
        export default connect(
          null,
          mapDispatchToProps
        )(Register)
           


