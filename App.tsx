import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ToastProvider } from './context/ToastContext';
import { ComparisonProvider } from './context/ComparisonContext';
import { ThemeProvider } from './context/ThemeContext';
import { RegionProvider } from './context/RegionContext';
import { Header, Footer } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { ListingPage } from './pages/ListingPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { ExportPage } from './pages/ExportPage';
import { ComparisonBar } from './components/ComparisonBar';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <RegionProvider>
        <ToastProvider>
          <ComparisonProvider>
            <CartProvider>
              <HashRouter>
                <ScrollToTop />
                <div className="flex flex-col min-h-screen font-sans text-gray-900 dark:text-gray-100 bg-gray-100 dark:bg-slate-900 pb-20 md:pb-0 transition-colors duration-300">
                  <Header />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/product/:id" element={<ProductPage />} />
                      <Route path="/cart" element={<CartPage />} />
                      <Route path="/search" element={<ListingPage />} />
                      <Route path="/compare" element={<ComparisonPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/export" element={<ExportPage />} />
                      <Route path="/category/:categoryId" element={<ListingPage />} />
                      {/* Fallback route */}
                      <Route path="*" element={<HomePage />} />
                    </Routes>
                  </main>
                  <ComparisonBar />
                  <Footer />
                </div>
              </HashRouter>
            </CartProvider>
          </ComparisonProvider>
        </ToastProvider>
      </RegionProvider>
    </ThemeProvider>
  );
};

export default App;