import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [sortType,setSortType]=useState('asc');

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);

  const changetheSortType=useCallback(()=>{
    if(sortType==='asc'){
          setSortType('desc')
    }else{
      setSortType('asc')
    }
  },[sortType])

  return (
    <div className="app">
      <DemoList title={listTitle} items={listItems} sortFormat={sortType}/>
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button onClick={changetheSortType}>Change to {sortType==='asc'?'desc':'asc'}</Button>
    </div>
  );
}

export default App;