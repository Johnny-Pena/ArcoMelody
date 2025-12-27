import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Index from './routes/index.jsx';
import Bio from './routes/bio.jsx';
import Contact from './routes/contact.jsx';
import Lessons from './routes/lessons.jsx';
import SignUp from './routes/signUp.jsx';
import StudioPolicy from './routes/studioPolicy.jsx';
import AnalyticsTracker from './components/AnalyticsTracker.jsx';
import CoreValues from './routes/coreValues.jsx';
// Temporarily disabled for performance optimization
// import MetaPixel from './utils/meta/metaPixel.jsx';
import TestimonialsPage from './routes/testimonialsPage.jsx';
import FirstLessonPage from './routes/firstlesson.jsx';
import ViolinLessons from './routes/violin-lessons.jsx';
import PrivacyPolicy from './routes/privacy-policy.jsx';
import GuitarLessons from './routes/guitar-lessons.jsx';
import OneHourWeeklyPage from './routes/one-hour-weekly.jsx';
import OneHourBiWeeklyPage from './routes/one-hour-biweekly.jsx';
import HalfHourWeeklyPage from './routes/half-hour-weekly.jsx';
import HalfHourBiWeeklyPage from './routes/half-hour-biweekly.jsx';

function App() {
  return (
<Router>
  <div>
  <AnalyticsTracker />
    {/* <MetaPixel /> */}
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/teacher-bios" element={<Bio />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/lessons" element={<Lessons />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/first-lesson" element={<FirstLessonPage />} />
      <Route path="/firstlesson" element={<FirstLessonPage />} />
      <Route path="/studio-policy" element={<StudioPolicy />} />
      <Route path="/core-values" element={<CoreValues />} />
      <Route path="/testimonials" element={<TestimonialsPage />} />
      <Route path="/violin-lessons" element={<ViolinLessons />} />
      <Route path="/guitar-lessons" element={<GuitarLessons />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/one-hour-weekly" element={<OneHourWeeklyPage />} />
      <Route path="/one-hour-biweekly" element={<OneHourBiWeeklyPage />} />
      <Route path="/half-hour-weekly" element={<HalfHourWeeklyPage />} />
      <Route path="/half-hour-biweekly" element={<HalfHourBiWeeklyPage />} />
    </Routes>
    <Footer />
  </div>
</Router>
  );
}

export default App;
