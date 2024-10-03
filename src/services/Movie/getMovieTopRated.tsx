import axiosinstance from "../Axios";

export const getMovieTopRated = async (page: any) => {
  return (
    await axiosinstance.get("/movie/top_rated", {
      params: {
        page: page.toString(),
      },
    })
  ).data;
};
