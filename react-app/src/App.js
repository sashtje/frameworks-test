import {useCallback, useEffect, useRef, useState} from "react";

export const App = () => {
  const data = useRef([]);
  const [value, setValue] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      data.current = await response.json();

      setUsers(data.current);
    }

    fetchData();
  }, []);

  const handleChange = useCallback((e) => {
    const inputData = e.target.value;
    setValue(inputData);

    setUsers(data.current.filter(user => user.name.toLowerCase().includes(inputData.toLowerCase())));
  }, []);

  return (
    <>
      <input type="text" value={value} onChange={handleChange} />

      <ul>
        {
          users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  );
};
