import './App.css';

function App() {
  return (
    <div className="container">
     <form>
      <h1>Registration Form</h1>
      <div className='ui divider'></div>
      <div className='ui form'>
        <div className='field'>
          <label>Username</label>
          <input type="text" name='username' placeholder='Username' />
        </div>
      </div>
     </form>
    </div>
  );
}

export default App;
