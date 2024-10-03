import axiosinstance from "../Axios";

export const getVideoMovie = async (id:any) => {
  return (
    await axiosinstance.get(`/movie/${id}/videos`, {
      params: {
       
      },
    })
  ).data;
};
