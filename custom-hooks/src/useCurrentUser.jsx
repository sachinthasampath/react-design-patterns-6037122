import { useEffect } from "react";

export const useCurrentUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadedUser = { id: '123', name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] }
    setUser(loadedUser);
    setIsLoading(false);
  }, [])


  return { isLoading, user };
}