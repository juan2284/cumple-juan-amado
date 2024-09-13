import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './layouts/AppLayout';
import PrincipalView from './views/PrincipalView';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path='/' element={<PrincipalView />} index />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}