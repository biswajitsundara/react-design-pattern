import {useState} from 'react';

const Content = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Body</h1>
      <button onClick={()=>setCount(count+1)}>Click {count}</button>
    </>
  );
};

export default Content;
