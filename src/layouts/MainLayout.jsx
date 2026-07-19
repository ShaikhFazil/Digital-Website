import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import { useLenis } from '../hooks/useLenis';

/** App shell: smooth scroll, navbar, routed content, footer. */
const MainLayout = () => {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only z-50 rounded-md bg-ember-500 px-4 py-2 font-semibold text-ink-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
