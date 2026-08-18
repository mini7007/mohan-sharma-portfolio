import { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Navigation } from './components/navigation/Navigation';
import { SkipLink } from './components/common/SkipLink';
import { HomePage } from './pages/HomePage';
import { routes } from './lib/routes';

const CaseStudyPage = lazy(() => import('./pages/CaseStudyPage').then((module) => ({ default: module.CaseStudyPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

export function App() {
  const location = useLocation();

  return (
    <>
      <SkipLink href="#main-content">Skip to content</SkipLink>
      <Navigation />
      <AnimatePresence mode="wait">
        <Suspense fallback={null}>
          <Routes location={location} key={location.pathname}>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.workDetail} element={<CaseStudyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}
