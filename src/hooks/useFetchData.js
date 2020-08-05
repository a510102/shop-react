import { useEffect, useState } from 'react'

export const useFetchData = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.date, loading: true }));
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setState({ data, loading: false })
      })
  }, [url])

  return state
};