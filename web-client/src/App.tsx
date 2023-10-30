import './App.css'
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  function callApi() {
    fetch("http://localhost:3000/feed")
      .then(res => console.log(res))
      // .then(res => {
      //   setData(res);
      //   console.log(data);
      // })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    callApi();
    return () => {
      console.log("Unmounting...");
    }
  }, []);

  return (
    <>
      <div>
        <p>Olá Mundo!</p>
        {/* <div>{data}</div> */}
      </div>
    </>
  )
}

export default App
