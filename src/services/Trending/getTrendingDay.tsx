import axiosinstance from "../Axios";

export const getTrendingDay = async (langParam:string) => {
  return (
    await axiosinstance.get("/trending/all/day", {
      params: {
        page: 1,
        language:langParam
      },
    })
  ).data;
};
