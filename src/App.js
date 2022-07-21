import {Routes, Route, BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import Ex1 from './components/Ex1'
import Ex2 from './components/Ex2'
import Ex3 from './components/Ex3'
import Ex4 from './components/Ex4'
import Ex5 from './components/Ex5'
import Ex6 from './components/Ex6'
import Ex7 from './components/Ex7'
import PostSingleItem from './components/screens/PostSingleItem';
import Pnf from './components/Pnf'
import Menu from './components/Menu'

//createContext : to create provider (data create )
//useContext: to read the data (data always receive by consumers)


function App(props) {
  return (
      <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={'/'} element={<Ex1 />}></Route>
        <Route path={'/posts'} element={<Ex1 />} ></Route>
        <Route path={'/users'} element={<Ex2 />}></Route>
        <Route path={'/postspagi'} element={<Ex3 itemsPerPage={10} />}/>
        <Route path={'/comments'} element={<Ex4 itemsPerPage={10} />}/>
        <Route path={'/albums'} element={<Ex5 itemsPerPage={10} />}/>
        <Route path={'/photos'} element={<Ex6 itemsPerPage={10} />}/>
        <Route path={'/todos'} element={<Ex7 itemsPerPage={10} />}/>
        <Route path={'/singlepost/:id'} element={<PostSingleItem />}/>
        <Route path={'/*'} element={<Pnf/>}></Route>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
