import React, {useEffect} from 'react';
import Main from './components/Main';
import Header from './components/Header';
import {useDispatch} from "react-redux"
import {getPosts} from './actions/posts'
const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
dispatch(getPosts())
  },[dispatch])
    return (
        <div className="App">
      <Header/>
      <Main />
    </div>
  );
}
export default App;