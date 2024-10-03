import axiosinstance from "../Axios"


export const getMovieDetail=async(movieid:any,langParam:string)=>{

return (
    await axiosinstance.get(`/movie/${movieid}`,{
        params:{
            language:langParam
        }
    })
).data

}