import { root } from '@lynx-js/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import './tailwind.css?url';

import App from './App.tsx';
import Home from './Home.tsx';

root.render(
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<App />} index />
      <Route path="/home" element={<Home />} index />
    </Routes>
  </MemoryRouter>,
);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
