import axios from 'axios'
import { ProductInfo } from './ProductInfo'
import { ResourceLoader } from './ResourceLoader'
import { UserInfo } from './UserInfo'
import { UserLoader } from './UserLoader'
import { DataLoader } from './DataLoader'
import { CurrentUserLoader } from './CurrentUserLoader'

const getServerData = url => async () => {
  const response = await axios.get(url);
  return response.data;
}

function App() {

  return (
    <>
      <CurrentUserLoader>
        <UserInfo />
      </CurrentUserLoader>
      <UserLoader id="123">
        <UserInfo />
      </UserLoader>
      <ResourceLoader resourceUrl="/api/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <ResourceLoader resourceUrl="/api/products/123" resourceName="product">
        <ProductInfo />
      </ResourceLoader>
      <DataLoader getData={getServerData('/api/users/123')} resourceName="user">
        <UserInfo />
      </DataLoader>
    </>
  )
}

export default App
