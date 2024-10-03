import axiosinstance from "../Axios";


export const getTVShowsPopular=async()=>{

return (await axiosinstance.get("/tv/popular",{
    params:{
        page:1
    }
})).data


}