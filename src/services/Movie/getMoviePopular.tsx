import axiosinstance from "../Axios";

export const getMoviePopular = async (page: any) => {
  return (
    await axiosinstance.get("/movie/popular", {
      params: {
        page: page.toString(),
      },
    })
  ).data;
};
