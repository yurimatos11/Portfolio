import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/header';
import Footer from './components/footer';

const App = () => (
  <>
    <Header />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <Footer />
    <GlobalStyles />
  </>
  
);

export default App;
