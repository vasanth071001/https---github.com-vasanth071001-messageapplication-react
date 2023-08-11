
import { Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Nav from './Nav';
import Chat from './Chat';
import Head from './Head';
import Missing from './Missing';

function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Head />
        <Nav />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
            {/* ... other routes ... */}
          </Routes>
        </div>
      </div>
      {/* <video autoPlay muted loop className="video-background">
        <source src={vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div> Add the overlay */}
      <Footer />
    </div>
  );
}



export default App;
