import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Jumbotron from './components/jumbotron/Jumbotron';
import Countdown from './components/countdown/Countdown';
import Features from './components/features/Features';
import SignInPage from './components/user/Sign-in';
import RegistrationConfirmation from './components/user/RegistrationConf.jsx';
import Game from './components/game/Game';
import Carousel from './components/carousel/Carousel';
import Characters from './components/characters/Characters';

const App = () => {
  
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/register" element={<SignInPage />} />
        <Route path="/register/confirm" element={<RegistrationConfirmation />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<Game />} />
        <Route path="/characters" element={<Characters />} /> 
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <Countdown />
      <Features />
      <Carousel />

    </>
  );
};

export default App;
