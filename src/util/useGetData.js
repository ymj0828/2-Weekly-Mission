import useAsync from "./useAsync";

const useGetData = (url) => {
  const { loading, error, data } = useAsync(url);
  if (loading || error || !data) {
    // 로딩 중 ui
    return;
  }
  return data;
};

export default useGetData;
