import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setCombinedDataEmpty } from "../redux/MovieSlice";

const handleClickHome = () => {
  const dispatch = useDispatch();
  dispatch(setCombinedDataEmpty());
};
const items: MenuProps["items"] = [
  {
    label: (
      <Link to="/" onClick={() => handleClickHome()}>
        Trending
      </Link>
    ),
    key: "0",
  },

  {
    key: "2",
    label: "Movies",

    children: [
      {
        key: "2-1",
        label: <Link to="/movies/popular">Popular</Link>,
      },
      {
        key: "2-2",
        label: <Link to="/movies/now-playing">Now Playing</Link>,
      },
      {
        key: "2-3",
        label: <Link to="/movies/upcoming">Upcoming</Link>,
      },
      {
        key: "2-4",
        label: <Link to="/movies/top-rated">Top Rated</Link>,
      },
    ],
  },
  {
    key: "3",
    label: "Tv Shows",

    children: [
      {
        key: "3-1",
        label: <Link to="/tv/popular">Popular</Link>,
      },
      {
        key: "3-2",
        label: <Link to="/tv/airing-today">Airing Today</Link>,
      },
      {
        key: "3-3",
        label: <Link to="/tv/on-the-air">On The Air</Link>,
      },
      {
        key: "3-4",
        label: <Link to="/tv/top-rated">Top Rated</Link>,
      },
    ],
  },
];
const MenuMobile = () => {
  return (
    <div className="text-white continerdiv">
      <Dropdown
        menu={{ items }}
        overlayStyle={{ color: "white" }}
        className="dropdown"
      >
        <a className="menua" onClick={(e) => e.preventDefault()}>
          <Space className="space">
            <MenuOutlined className="text-white  text-lg menuout" />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default MenuMobile;
