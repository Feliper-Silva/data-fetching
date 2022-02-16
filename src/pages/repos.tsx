import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

export type Repositories = {
  full_name: string;
  description: string;
  html_url: string;
}

export function Repos() {
  const { data, isFetching } = useQuery<Repositories[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/feliper-silva/repos')
    return response.data
  }, {
    staleTime: 1000 * 60,
  });

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(repo => {
        return (
          <li key={repo.full_name}>
            <Link to="/repo">{repo.full_name}</Link>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}


