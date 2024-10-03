import axiosinstance from "../Axios";

export const getTVShowsOnTheAir = async () => {
  return (
    await axiosinstance.get("tv/on_the_air", {
      params: {
        page: 1,
      },
    })
  ).data;
};
