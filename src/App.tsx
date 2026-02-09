import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Base routing
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/common/ScrollToTop';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const LoanDesk = lazy(() => import('./pages/LoanDesk'));
const Contact = lazy(() => import('./pages/Contact'));
const Enquiry = lazy(() => import('./pages/Enquiry'));
const Legal = lazy(() => import('./pages/Legal'));

// Loading fallback
const PageLoader = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    minHeight: '60vh' 
  }}>
    <div className="loader">Loading...</div>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/loandesk" element={<LoanDesk />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/enquiry/:serviceId" element={<Enquiry />} />
              <Route path="/privacy" element={<Legal type="privacy" />} />
              <Route path="/terms" element={<Legal type="terms" />} />
              <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
