import { useFecth } from './Hooks/useFetch'

type Repositories = {
  full_name: string;
  description: string;
}

function App() {
  const { data: repositories, isfetching, error } = useFecth<Repositories[]>('/users/feliper-silva/repos')
  return (
    <ul>
      {error}
      {isfetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App;
