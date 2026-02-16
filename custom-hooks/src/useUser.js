import { useEffect, useState } from "react";

export const useUser = (userId) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadedUser = { id: userId, name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] }
    setUser(loadedUser);
    setIsLoading(false);
  }, [userId])

  return { user, isLoading };
}