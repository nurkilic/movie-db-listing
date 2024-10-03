import axiosinstance from "../Axios";

export const getSearchMovie = async (searchValue: any) => {
  return (
    await axiosinstance.get("/search/movie", {
      params: {
        page: 1,
        query: searchValue,
       

      },
    })
  ).data;
};
