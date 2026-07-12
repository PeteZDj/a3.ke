import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthModal } from './components/AuthModal';
import { ScrollToTop } from './components/ScrollToTop';
import Home from './pages/Home';
import Films from './pages/Films';
import Series from './pages/Series';
import FilmDetail from './pages/FilmDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Commercial from './pages/Commercial';
import Sport from './pages/Sport';
import AiFilms from './pages/AiFilms';
import Animation from './pages/Animation';
import People from './pages/People';
import PersonDetail from './pages/PersonDetail';
import RateCard from './pages/RateCard';
import ServiceDetail from './pages/ServiceDetail';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function NotFound() {
  return (
    <div className="empty" style={{ paddingTop: 'calc(var(--nav-h) + 120px)', paddingBottom: 120 }}>
      <h3>Page not found</h3>
      <p style={{ marginBottom: 20 }}>The reel ran out. Let’s get you back to the good stuff.</p>
      <Link className="btn btn-gold" to="/">Back to home</Link>
    </div>
  );
}

export default function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main key={location.pathname} className="route-fade">
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/films" element={<Films />} />
          <Route path="/series" element={<Series />} />
          <Route path="/film/:slug" element={<FilmDetail />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/ai-films" element={<AiFilms />} />
          <Route path="/animation" element={<Animation />} />
          <Route path="/people" element={<People />} />
          <Route path="/person/:slug" element={<PersonDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/rates" element={<RateCard />} />
          <Route path="/rates/:slug" element={<ServiceDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <AuthModal />
    </>
  );
}
