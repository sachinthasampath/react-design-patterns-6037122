import { useState } from 'react'
import { UserInfo } from './UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserInfo userId="123" />
    </>
  )
}

export default App
