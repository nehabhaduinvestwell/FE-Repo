import {Link} from 'react-router-dom'
import '/home/nehabhadu/LoginPage/frontend/src/media/css/login.css'

function LoginForm({inputEmail, inputPassword, handleSubmit}) {

  return (
    <>
        <div className='container'>
            <h2 className='heading'>Sign-In</h2>
            <form action="" className='loginForm' onSubmit= {handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="email" className='text'>E-mail</label>
                    <input type="email" className='userInput' placeholder='Enter E-mail' name= "email" onChange={inputEmail} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="password" className='text'>Password</label>
                    <input type="password" className='userInput' placeholder='Enter Password' name= "password" onChange={inputPassword}/>
                </div>
                <button className='loginButton' type="submit">Log In</button>
                <span className='newUser'>New user?</span>
                <Link className='signUpLink' to="/signUp">Sign-Up</Link>      
            </form>
        </div>
    </>
  )
}

export default LoginForm