import axiosinstance from "../Axios";

export const getMovieNowPlaying = async (page: any) => {
  return (
    await axiosinstance.get("/movie/now_playing", {
      params: {
        page: page.toString(),
      },
    })
  ).data;
};
