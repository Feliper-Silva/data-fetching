import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
  baseURL: 'https://api.github.com'
})

export function useFecth<T = unknown>(url: string, options?: AxiosRequestConfig) {
  const [data, setData] = useState<T | null>(null);
  const [isfetching, setIsFetching] = useState(true);
  const [error, SetError] = useState<Error | null>(null)

  useEffect(() => {
    api.get(url, options).then(response => {
      setData(response.data)
    }).catch((err) => {
      SetError(err)
    })
      .finally(() => {
        setIsFetching(false)
      })
  }, [])

  return { data, error, isfetching }
}