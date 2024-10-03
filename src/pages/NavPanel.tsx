import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import SearchBar from "../components/SearchBar";
import MoviesPopular from "./MoviesPopular";
import iconNavMovie from "../../public/icon-nav-movies.svg";
import iconTv from "../../public/icon-nav-tv-series.svg";
import iconHome from "../../public/icon-nav-home.svg";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import TVShows from "../components/TVShows";
import Trending from "./Trending";
import MoviesNowPlaying from "./MoviesNowPlaying";
import MoviesUpComing from "./MoviesUpComing";
import MoviesTopRated from "./MoviesTopRated";
import TVShowsAiringToday from "./TVShowsAiringToday";
import TVShowsOnTheAir from "./TVShowsOnTheAir";
import TVShowsPopular from "./TVShowsPopular";
import TVShowsTopRated from "./TVShowsTopRated";
import { useDispatch, useSelector } from "react-redux";
import { setClickedSearch, setCombinedDataEmpty } from "../redux/MovieSlice";
import MovieDetail from "./MovieDetail";
import TvDetail from "./TvDetail";
import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import MenuMobile from "../components/MenuMobile";
import Language from "../components/Language";

import { RootState } from "../redux/store";

const { Header, Content, Sider } = Layout;

const iconNavMovie2 = (
  <img
    src={iconNavMovie}
    alt="Movies Icon"
    style={{ minWidth: 20, height: 20 }}
    className="navimg"
  />
);
const iconTv2 = (
  <img
    src={iconTv}
    alt="Movies Icon"
    style={{ minWidth: 20, height: 20 }}
    className="navimg"
  />
);
const iconHome2 = (
  <img
    src={iconHome}
    alt="Movies Icon"
    style={{ minWidth: 20, height: 20 }}
    className="navimg"
  />
);

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const handleClickHome = () => {
  const dispatch = useDispatch();
  dispatch(setCombinedDataEmpty());
  dispatch(setCombinedDataEmpty());
};
const items: MenuItem[] = [
  getItem(
    <Link to="/" onClick={() => handleClickHome()}>
      TRENDİNG
    </Link>,
    "1",
    iconHome2
  ),

  getItem("MOVIES", "sub1", iconNavMovie2, [
    getItem(<Link to="/movies/popular">Popular</Link>, "2"),
    getItem(<Link to="/movies/now-playing">Now Playing</Link>, "3"),
    getItem(<Link to="/movies/upcoming">Upcoming</Link>, "4"),
    getItem(<Link to="/movies/top-rated">Top Rated</Link>, "5"),
  ]),
  getItem("TV SHOWS", "sub2", iconTv2, [
    getItem(<Link to="/tv/popular">Popular</Link>, "6"),
    getItem(<Link to="/tv/airing-today">Airing Today</Link>, "7"),
    getItem(<Link to="/tv/on-the-air">On The Air</Link>, "8"),
    getItem(<Link to="/tv/top-rated">Top Rated</Link>, "9"),
  ]),
];

const NavPanel: React.FC = () => {
  const location = useLocation();
  const isDetailPage = location.pathname.includes("detail");
  const isTrendingPage = location.pathname == "/";
  const { clickedSearch } = useSelector((state: RootState) => state.movie);
  const dispatch = useDispatch();

  const [collapsed, setCollapsed] = useState(false);
  

  return (
    <Layout
      style={{
        minHeight: !isDetailPage ? "100vh" : "calc(100vh - 48px)",
        borderRadius: 30,
      }}
    >
      <div className="max-lg:hidden">
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{
            background: "#161d2f",
            paddingTop: 8,
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            //   defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
            style={{ background: "#161d2f" }}
          />
        </Sider>
      </div>
      <Layout>
        <Header
          style={{
            padding: 0,
            // display: !isDetailPage ? "block" : "none"

            background: "#10141e",
            paddingLeft: ` ${25 + (!collapsed ? 202 : 82)}px`,
          }}
          className={`headerpage 
            //  ${isDetailPage ? "lg:hidden" : ""} 
             `}
        >
          <div style={{ display: isTrendingPage ? "block" : "none" }}>
            <div className="flex justify-between max-lg:hidden">
              {" "}
              <SearchBar />
              <Language />
            </div>
          </div>

          <div className="flex lg:hidden justify-between items-center mt-3 cursor-pointer ">
            <div className="ml-3 flex justify-between items-center ">
              {" "}
              <MenuMobile></MenuMobile>
            </div>
            {!clickedSearch ? (
              <SearchOutlined
                style={{ display: isTrendingPage ? "block" : "none" }}
                className="text-white text-2xl mr-4 "
                onClick={() => dispatch(setClickedSearch(!clickedSearch))}
              />
            ) : (
              <CloseOutlined
                style={{ display: isTrendingPage ? "block" : "none" }}
                className="text-white text-2xl mr-4 "
                onClick={() => dispatch(setClickedSearch(!clickedSearch))}
              />
            )}
            <div className={` ${!isDetailPage && "hidden "} scale-90 `}>
              {" "}
              <Language />
            </div>
          </div>
        </Header>
        <div className="lg:hidden bg-[#10141e]">
          {clickedSearch && <SearchBar />}
        </div>
        <Content style={{ color: "white", background: "#10141e" }}>
          <div
            style={{
              padding: !isDetailPage ? 15 : 0,
              minHeight: 360,
              background: "#10141e",
              paddingLeft: isDetailPage
                ? `${collapsed ? 82 : 202}px`
                : `${25 + (collapsed ? 82 : 202)}px`,
            }}
            className="max-lg:p-0 content"
          >
            <Routes>
              <Route path="/" element={<Trending />} />

              <Route path="/movies/popular" element={<MoviesPopular />} />
              <Route
                path="/movies/now-playing"
                element={<MoviesNowPlaying />}
              />
              <Route path="/movies/upcoming" element={<MoviesUpComing />} />
              <Route path="/movies/top-rated" element={<MoviesTopRated />} />

              <Route path="/tvseries" element={<TVShows />} />
              <Route path="/tv/airing-today" element={<TVShowsAiringToday />} />
              <Route path="/tv/on-the-air" element={<TVShowsOnTheAir />} />
              <Route path="/tv/popular" element={<TVShowsPopular />} />
              <Route path="/tv/top-rated" element={<TVShowsTopRated />} />
              <Route path="/movie-detail/:id" element={<MovieDetail />} />
              <Route path="/tv-detail/:id" element={<TvDetail />} />
            </Routes>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavPanel;
