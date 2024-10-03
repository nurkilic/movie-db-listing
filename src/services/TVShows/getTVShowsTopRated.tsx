import axiosinstance from "../Axios";

export const getTVShowsTopRated = async () => {
  return (
    await axiosinstance.get("/tv/top_rated", {
      params: {
        page: 1,
      },
    })
  ).data;
};
