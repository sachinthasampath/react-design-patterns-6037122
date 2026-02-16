import { printProps } from './printProps'
import { UserInfo } from './UserInfo'
import { withUser } from './withUser'


const UserInfoWrapped = printProps(UserInfo)
const UserInfoWithUser = withUser(printProps(UserInfo, 1));

function App() {


  return (
    <>
      <UserInfoWrapped a={1} user={{ name: 'John Doe', age: 30, hairColor: 'brown', hobbies: ['reading', 'writing'] }} />
      <UserInfoWithUser />
    </>
  )
}

export default App
