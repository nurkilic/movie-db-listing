import { Pagination, PaginationProps } from "antd";
import { useEffect } from "react";
import { setPage } from "../redux/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

const PaginationPage = () => {
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.movie.currentPage
  );

  useEffect(() => {
    dispatch(setPage(1));
  }, []);
  

  const onChange: PaginationProps["onChange"] = (page) => {
    dispatch(setPage(page));
    window.scrollTo(0, 0);
   
  };

  return (
    <div className="m-4 max-lg:scale-[.80]">
      <Pagination
        align="center"
        total={50}
        current={currentPage}
        onChange={onChange}
      />
    </div>
  );
};

export default PaginationPage;
