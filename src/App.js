import { useForm } from 'react-hook-form';
import './App.css';

const App = () => {

  const {register, handleSubmit, errors} = useForm();
  return (
    <div className="container">
     <form>
      <h1>Registration Form</h1>
      <div className='ui divider'></div>
      <div className='ui form'>
        <div className='field'>
          <label>Username</label>
          <input type="text" {...register('username', {required: true})} placeholder='Username' />
        </div>
        <div className='field'>
          <label>Password</label>
          <input type="password" {...register('password', {required: true})} placeholder='Password' />
        </div>
        <div className='field'>
          <label>Email</label>
          <input type="email" {...register('email', {required: true})} placeholder='Email' />
        </div>
        <button className='fluid ui button blue'>Submit</button>
      </div>
     </form>
    </div>
  );
}

export default App;
