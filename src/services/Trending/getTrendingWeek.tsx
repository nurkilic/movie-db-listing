import axiosinstance from "../Axios";

export const getTrendingWeek = async (langParam: string) => {
  return (
    await axiosinstance.get("/trending/all/week", {
      params: {
        page: 1,
        language: langParam,
      },
    })
  ).data;
};
