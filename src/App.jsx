
import {Routes,Route} from 'react-router-dom';

import Home from './component/component/Home';
import Jobs from './component/component/Jobs';
import Login from './component/component/Login';
import NotFound from './component/component/NotFound';

const App=()=>

<Routes>


    <Route path='/' element={<Home/>}></Route>
    
    <Route path='/Jobs' element={<Jobs/>}></Route>

    <Route path='/Login' element={<Login/>}></Route>

     <Route path='/*' element={<NotFound/>}></Route>

    

</Routes>

           


export default App