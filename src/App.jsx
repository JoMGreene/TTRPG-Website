import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer} from './components';
import {Home, Basics, Magic, MagicTree} from './pages';

const App = () => (
  <div className="bg-primary">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basics" element={<Basics />} />
      <Route path="/magic">
        <Route index element={<Magic />} />  {/* TODO: links for disciplines and trees: remove labels, move each discipline link above its 4 tree links, flex wrap the 3 discipline+tree groups, flex wrap trees within each discipline+tree group  */}
        <Route path=":id" element={<MagicTree />} />
      </Route>
    </Routes>
    <Footer />
  </div>
);

export default App;