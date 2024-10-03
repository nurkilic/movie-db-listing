import axiosinstance from "../Axios";


export const getTvShowsAiringToday=async()=>{

return (await axiosinstance.get("/tv/airing_today",{
    params:{
        page:1
    }
})).data


}