import {NavBar, Slide} from './components';

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className='px-6 py-2'>
      <NavBar />
    </div>
    <div className='px-6 py-2'>
      <Slide />
    </div>
  </div>
);

export default App;