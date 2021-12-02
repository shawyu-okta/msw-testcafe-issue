import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const callApi = async () => {
      const res = await fetch('http://example.com/api/endpoint');
      const resData = await res.json();

      setData(resData);
    };
    
    callApi();
  }, [])

  return (
    <div className="App">
      <table border="1">
        <tbody>
        {Object.entries(data).map(([k, v]) => {
          return (
            <tr key={k}>
              <th>
                {k}
              </th>
              <td>
                {v}
              </td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
