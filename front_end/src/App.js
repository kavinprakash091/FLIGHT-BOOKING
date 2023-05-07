import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomeScreen from './screens/HomeScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import BookingScreen from './screens/BookingScreen';

function App() {
  return (
    <div className="App">
      <ToastContainer position="top-right" limit={1} />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/signin" element={<SigninScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/dashboard/:airline" element={<DashboardScreen />} />
        <Route path="/bookings" element={<BookingScreen />} />
      </Routes>
    </div>
  );
}

export default App;
