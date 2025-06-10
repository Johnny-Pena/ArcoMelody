import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Index from './routes/index.jsx';
import Bio from './routes/bio.jsx';
import Contact from './routes/contact.jsx';
import Lessons from './routes/lessons.jsx';
import SignUp from './routes/signUp.jsx';
import StudioPolicy from './routes/studioPolicy.jsx';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import CoreValues from './routes/coreValues.jsx';
import MeetAndGreet from './routes/meetandgreet.jsx';
import MetaPixel from './ultils/meta/metaPixel.jsx';

function App() {
  return (
<Router>
  <div>
  <AnalyticsTracker />
    <MetaPixel />
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/bio" element={<Bio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/meetandgreet" element={<MeetAndGreet />} />
      <Route path="/studio-policy" element={<StudioPolicy />} />
      <Route path="/core-values" element={<CoreValues />} />
    </Routes>
    <Footer />
  </div>
</Router>
  );
}

export default App;
