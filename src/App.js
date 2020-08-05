import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState('');

  // Realiza el fetch a la api de github según el keyword especificado
  const fetchData = () => {
    const url = `https://api.github.com/search/repositories?q=${keyword}`;
    fetch(url)
    .then(response => response.json())
    .then(responseData => {
      setData(responseData.items);
    });
  }

  // Maneja el evento del click, cambiando el keyword.
  const handleChange = (e) => {
    setKeyword(e.target.value);
  }

  // Así es como muestra los datos
  const tableRows = data.map((item, index) =>
    <tr key={index}><td>{item.full_name}</td>
    <td><a href={item.html_url}>{item.html_url}</a></td></tr>
  );

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <button onClick={fetchData} value={keyword} >fetch</button>
      <table><tbody>{tableRows}</tbody></table>
    </div>
  );
}

export default App;
