import axiosinstance from "../Axios";

export const getSearchTv = async (searchValue: any) => {
  return (
    await axiosinstance.get("/search/tv", {
      params: {
        page: 1,
        query: searchValue,
      },
    })
  ).data;
};
