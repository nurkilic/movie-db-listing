import axiosinstance from "../Axios";

export const getMovieUpComing = async (page: any) => {
 
  return (
    await axiosinstance.get("/movie/upcoming", {
      params: {
        page: page.toString(),
      },
    })
  ).data;
};
