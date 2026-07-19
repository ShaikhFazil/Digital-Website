import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';

// Route-level code splitting: each page ships as its own chunk.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Industries = lazy(() => import('./pages/Industries'));
const CaseStudies = lazy(() => import('./pages/CaseStudies'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

/** Minimal branded loader shown while a route chunk downloads. */
const RouteFallback = () => (
  <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading page">
    <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-ember-400" />
  </div>
);

const App = () => {
  const location = useLocation();

  return (
    <Suspense fallback={<RouteFallback />}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="industries" element={<Industries />} />
            <Route path="case-studies" element={<CaseStudies />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="contact" element={<Contact />} />
            <Route path="careers" element={<Careers />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </Suspense>
  );
};

export default App;
