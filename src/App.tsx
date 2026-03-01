/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import RedeemCodes from './pages/RedeemCodes';
import Updates from './pages/Updates';
import Characters from './pages/Characters';
import Events from './pages/Events';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="codes" element={<RedeemCodes />} />
          <Route path="updates" element={<Updates />} />
          <Route path="characters" element={<Characters />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<div className="p-20 text-center text-white font-display text-4xl">404 - Page Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
