/** @format */

import React, { useEffect, useState } from 'react';
import EmojiData from './emoji.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([] as any);

  useEffect(() => {
    const newData = EmojiData.filter((emoji: any) =>
      emoji.title.toLowerCase().includes(search.toLowerCase())
    );
    setData(newData);
  }, [search]);

  // const iconStyle = {
  //   iconColor: 'MediumSpringGreen',
  // };
  return (
    <div>
      <center>
        <h1 className='text-warning mt-5 mb-3'>
          Emoji Search App <FontAwesomeIcon icon={faSmile} />
        </h1>
        <div className='container w-50'>
          <input
            type='text'
            name='search'
            className='form-control mb-3'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </center>
      {data.map((emoji: any) => (
        <div className='container w-100'>
          <div className='card'>
            <div
              className='card-body'
              onClick={() => {
                navigator.clipboard.writeText(emoji.symbol);
              }}
            >
              {emoji.symbol} {emoji.title}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
