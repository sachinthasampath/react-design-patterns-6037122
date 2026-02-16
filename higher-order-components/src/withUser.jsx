import { useEffect } from "react";
import { useState } from "react";

export const withUser = (Component, userId) => {

  return (props) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
      setUser({ id: userId, name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] })
    }, [])
    if (!user) {
      return <div>Loading...</div>
    }
    return <Component {...props} user={user} />
  }
}