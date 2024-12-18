import './App.css';
import { Router } from './Routers/Router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className='layout'>
      <Router/>
      <ToastContainer/>
    </div>
  );
}

export default App;
