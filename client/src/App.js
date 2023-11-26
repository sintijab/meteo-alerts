import { useState } from 'react';
import './App.css';

function App() {
  const [warnings, setWarnings] = useState([]);

  const handleSubmit = async (e) => {
     // Prevent the browser from reloading the page
     e.preventDefault();
    const body = new URLSearchParams({
      'address': e.target.address.value,
    });
    try {
      const alarms = await fetch('http://127.0.0.1:8000/address_lookup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body
      }).then(async (res) => await res.json())
      setWarnings(alarms.warnings);
    } catch(e) {
      console.log(e);
    }
  }

  const formatDate = (date) => new Date(date).toLocaleDateString();
  
  return (
    <div className="App">
      <header className="App-header">
      <form method="post" onSubmit={handleSubmit}>
        <input name="address" />
        <button type="submit">Search</button>
    </form>
      </header>
      {warnings.map(warning => {
        return (
          <>
          <p>{`${formatDate(warning.startDate)} - ${formatDate(warning.endDate)}`}</p>
          <h2>{warning.headline['en']}</h2>
          <h2>{warning.description['en']}</h2>
          </>
        )
      })}
    </div>
  );
}

export default App;
