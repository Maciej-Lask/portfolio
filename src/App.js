import { Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout/MainLayout';

import Home from './components/pages/Home/HomePage';
import NotFound from './components/pages/NotFound/NotFoundPage';

import ContactPage from './components/pages/ButtonsPage/ContactPage';

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainLayout>
  );
};

export default App;
