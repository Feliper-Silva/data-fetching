import { useEffect, useState } from 'react'
import axios from 'axios'

type Repositories = {
  full_name: string;
  description: string;
}

function App() {

  const [repositories, setRepositories] = useState<Repositories[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/feliper-silva/repos').then(response => {
      setRepositories(response.data)
    })
  }, [])
  return (
    <ul>
      {repositories.map(repos => {
        return (
          <li key={repos.full_name}>
            <strong>{repos.full_name}</strong>
            <p>{repos.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App;
