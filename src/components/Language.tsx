import { Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/MovieSlice";
import { RootState } from "../redux/store";

const Language = () => {
  const dispatch = useDispatch();
  

  const handleChange = (value: string) => {
    dispatch(setLanguage(value));

  };
  const { language } = useSelector((state: RootState) => state.movie);
 
  return (
    <div className="mr-4">
      <Select
        defaultValue={language}
       style={{ width: 70, paddingLeft:1 }}
        onChange={handleChange}
        options={[
          {
            value: "EN",
            label: "EN",
          },
          {
            value: "TR",
            label: "TR",
          },
        ]}
      />
    </div>
  );
};

export default Language;
