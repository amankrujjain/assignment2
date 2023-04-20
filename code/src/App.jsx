
import { useState } from 'react'
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import FormContextProvider from './FormStore/FormContextProvider'
import UserDetails from './UserDetails'
import ShowData from './ShowData'

function App() {
  const [userDetails, setUserDetails] = useState({})

  return (
    <FormContextProvider.Provider value={{userDetails, setUserDetails}}>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<UserDetails/>}/>
          <Route path='/showdata' element={<ShowData/>}/>
        </Routes>
      </BrowserRouter>
    </FormContextProvider.Provider>
  )
}

export default App
