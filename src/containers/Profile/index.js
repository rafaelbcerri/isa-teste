import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from '../../componentes/Card';
import { formatCurrency } from '../../util';

function Profile() {
  const [ user, setUser ] = useState();

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then(({ data }) => setUser(data))
  }, [])

  const handleClick = () => {
    alert('Hello')
  }

  if (!user) {
    return <h1>Loading...</h1>
  }

  return (
    <>
      <h1>Hello</h1>
      <Card
        title={user.name}
        text={user.email}
        onClick={handleClick}
      />
      <p>Banana price: {formatCurrency(2.50)}</p>
    </>
  )
}

export default Profile;