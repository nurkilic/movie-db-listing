import axiosinstance from "../Axios";

export const getVideoTv = async (id: any) => {
  return (
    await axiosinstance.get(`/tv/${id}/videos`, {
      params: {
        
      },
    })
  ).data;
};
