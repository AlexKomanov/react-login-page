import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {

  const {register, handleSubmit, formState: {errors}} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div className="container">
     <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Registration Form</h1>
      <div className='ui divider'></div>
      <div className='ui form'>
        <div className='field'>
          <label>Username</label>
          <input type="text" {...register('username', {required: "Username is required"})} placeholder='Username' />
        </div>
        <p>{errors.username?.message}</p>
        <div className='field'>
          <label>Password</label>
          <input type="password" {...register('password', {required: "Password is requiredd"})} placeholder='Password' />
        </div>
        <p>{errors.password?.message}</p>
        <div className='field'>
          <label>Email</label>
          <input type="email" {...register('email', {required: "Email is required"})} placeholder='Email' />
        </div>
        <p>{errors.email?.message}</p>
        <button className='fluid ui button blue'>Submit</button>
      </div>
     </form>
    </div>
  );
}

export default App;
