import { Routes, Route } from 'react-router-dom';
import { NavBar, Footer} from './components';
import {Home, Basics, Magic, Species, SpecSpecies, Combat, SpecCombat, MagicDisc} from './pages';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ContentTemplate from './components/ContentTemplate';
import Introduction from './pages/Introduction';

const firebaseConfig = {
  apiKey: "AIzaSyCyciG9gfO-TSOzPZsv4Bl98BhJTeE3IgM",
  authDomain: "ttrpg-site.firebaseapp.com",
  projectId: "ttrpg-site",
  storageBucket: "ttrpg-site.appspot.com",
  messagingSenderId: "666572433097",
  appId: "1:666572433097:web:b6008aefd4348ba9a08f18",
  measurementId: "G-G9Q4ZPD0ZR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const App = () => (
  <div className="bg-primary">
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="intro" element={<Introduction />} />
      <Route path="basics" element={<Basics />} />
      <Route path="magic">
        <Route index element={<Magic />} /> 
        <Route path="world" >
          <Route index element={<ContentTemplate link="Magicworld" mainColor='teal' />} />
          <Route path=":id" element={<MagicDisc />} />
        </Route>
        <Route path="body" >
          <Route index element={<ContentTemplate link="Magicbody" mainColor='teal' />} />
          <Route path=":id" element={<MagicDisc />} />
        </Route>
        <Route path="soul" >
          <Route index element={<ContentTemplate link="Magicsoul" mainColor='teal' />} />
          <Route path=":id" element={<MagicDisc />} />
        </Route>
      </Route>
      <Route path="species">
        <Route index element={ <Species />} />
        <Route path=":id" element={<SpecSpecies />} />  
      </Route> 
      <Route path='combat'>
        <Route index element={<Combat />} />
        <Route path=":id" element={<SpecCombat />} />
      </Route>
    </Routes>
    <Footer />
  </div>
);

export default App;