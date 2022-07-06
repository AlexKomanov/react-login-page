import { useState } from 'react';
import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();
  const [isSubmit, setIsSubmit] = useState(false);
  const [username, setUsername] = useState('');
 

  const onSubmit = (data) => {
    setIsSubmit(true);
    setUsername(data.username);
  }

  return (
    <div className="container">
      {isSubmit? 
      <div className='ui message success'>User '{username}' was logged in</div> : 
      <div className='ui message warning'>Welcome, please Login</div>}
     <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration Form</h1>
      <div className='ui divider'></div>
      <div className='ui form'>
        <div className='field'>
          <label>Username</label>
          <input type="text" {...register('username', {required: "Username is required"})} placeholder='Username' />
        </div>
        <p name='username-error'>{errors.username?.message}</p>
        <div className='field'>
          <label>Password</label>
          <input type="password" {...register('password', {required: "Password is requiredd", minLength: {value: 4, message: "Password should be at least with 4 characters"}})} placeholder='Password' />
        </div>
        <p name='password-error'>{errors.password?.message}</p>
        <div className='field'>
          <label>Email</label>
          <input type="email" {...register('email', {required: "Email is required"})} placeholder='Email' />
        </div>
        <p name='email-error'>{errors.email?.message}</p>
        <button className='fluid ui button blue'>Submit</button>
      </div>
     </form>
    </div>
  );
}

export default App;
