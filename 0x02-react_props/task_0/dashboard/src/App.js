import './App.css';
import Header from './header/header';
import Footer from './footer/footer';
import Login from './Login/login';
import Notifications from './Notifications';

function App() {
  return (
    <>
      <Notifications />
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App;
