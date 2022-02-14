import { Route, Routes, Switch } from 'react-router-dom';

import Allmeetup from './routes/Allmeetup';
import Newmeetup from './routes/Newmeetup';
import Favoritemeetup from './routes/Favoritemeetup';
import Layout from './components/layout/layout';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Allmeetup />} /> 
          <Route path='/new' element={<Newmeetup />} />
          <Route path='/favorite' element={<Favoritemeetup />} />
        </Routes>
      </Layout>  
    </div>

  );
}

export default App;
