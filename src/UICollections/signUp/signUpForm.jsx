import {Link} from 'react-router-dom'
import './../../media/css/signUp.css'

function SignUpForm({inputName,inputEmail, inputPassword, handleSubmit}) {

  return (
    <>
        <div className='container'> 
            <h2 className='heading'>Sign-Up</h2>
            <form action="" className='signUpForm' onSubmit= {handleSubmit}>
                <div className='inputContainer'>
                    <label htmlFor="name" className='text'>Name</label>
                    <input type="name" className='userInput' placeholder='Enter Name'  name= "name" onChange={inputName} />
                </div>
                <div className='inputContainer'>
                    <label htmlFor="email" className='text'>E-mail</label>
                    <input type="email" className='userInput' placeholder='Enter E-mail' name= "email" onChange={inputEmail}/>
                </div>
                <div className='inputContainer'>
                    <label htmlFor="password" className='text'>Password</label>
                    <input type="password" className='userInput' placeholder='Enter Password' name= "password" onChange={inputPassword}/>
                </div>
                <button className='signUpButton'>Sign Up</button>
            </form>
            <span className='existingUser'>Already have an account?</span>
            <Link className='loginLink' to="/">Log-In</Link>
        </div>
        <div id='userCreated'></div>
    </>
  )
}

export default SignUpForm