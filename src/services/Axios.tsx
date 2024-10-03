import axios from "axios";

const axiosinstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzM2IwY2UxNWYyOTE3Njg1NWMyODEyYzRjNTg5ZDY0MyIsIm5iZiI6MTcyNjMxODEwNC45OTIzNzcsInN1YiI6IjY2ZGQ4YzVlMTgyMTE0ZWQ2NDNhYjdhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.okmeMckXq_EjrTXICYyHdtRyJofBI3cmfSa-1ktVB_Y",
  },
  params: {
   
    region: "TR",
   
   
  },
});

export default axiosinstance;
