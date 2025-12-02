import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router';
import toast, {Toaster} from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <button className='bg-red-300' onClick={() => toast.success('OHAHAY!')}>Click me</button>
    <BrowserRouter>
      <App />
      <Toaster />
    </BrowserRouter>
  </StrictMode>,
)
