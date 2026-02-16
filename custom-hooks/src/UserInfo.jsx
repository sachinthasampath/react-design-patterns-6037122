import { useCallback } from 'react';
import inLayout from './inLayout';
import { useDataSource } from './useDataSource';

const getUser = async userId => {
  console.log("Fetching user with id ", userId);
  const loadedUser = { id: userId, name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] }
  return loadedUser;
}

export const UserInfo = inLayout(({ userId }) => {
  const loadUserWithId = useCallback(() => getUser(userId), [userId]);
  const { data: user, isLoading } = useDataSource(loadUserWithId, null)

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h3>{user.name}</h3>
      <p>Age: {user.age} years</p>
      <p>Hair Color: {user.hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {user.hobbies.map(hobby => <li key={hobby}>{hobby}</li>)}
      </ul>
    </>
  );
})