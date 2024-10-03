import axiosinstance from "../Axios"

export const getTvDetail=async(tvid:any,langParam:string)=>{

return (
    await axiosinstance.get(`/tv/${tvid}`,{
        params:{
            language:langParam
        }
    })
).data

}