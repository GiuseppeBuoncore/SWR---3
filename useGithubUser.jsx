import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

function useGithubUser(username) {
  if (!username) {
    return {
      data: null,
      error: null,
      loading: false,
      onFetchUser: () => {} 
    };
  }

  const { data, error, mutate } = useSWR(`https://api.github.com/users/${username}`, fetcher);

  return {
    data,
    error,
    loading: !data && !error,
    onFetchUser: mutate,
  };
}

export default useGithubUser;
