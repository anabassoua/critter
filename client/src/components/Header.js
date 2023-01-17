import { ReactComponent as Logo } from "./images_logo/logo.svg";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import { FiBookmark } from "react-icons/fi";

const Header = () => {
  return (
    <Container>
      <Logo />
      <HomeIcon to="/">
        <AiOutlineHome size={35} />
        <ToHome>Home</ToHome>
      </HomeIcon>
      <ProfileIcon to="/profile">
        <BiUser size={35} />
        <ToProfile>Profile</ToProfile>
      </ProfileIcon>
      <NotificationIcon to="/notifications">
        <FiBell size={35} />
        <ToNotifications>Notifications</ToNotifications>
      </NotificationIcon>
      <BookmarksIcon to="/bookmarks">
        <FiBookmark size={35} />
        <ToBookmarks>Bookmarks</ToBookmarks>
      </BookmarksIcon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-top: 30px;
  width: 290px;
`;
const HomeIcon = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 22px;
  padding-left: 12px;
  margin-top: 17px;

  &.active {
    color: #5d2afa;
  }

  &:hover {
    background-color: #ede8fe;

    width: 60%;
    border-radius: 20px;
    color: #5d2afa;
  }
`;
const ToHome = styled.span`
  font-weight: bolder;
`;

const ProfileIcon = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 22px;
  padding-left: 12px;
  margin-top: 17px;

  &.active {
    color: #5d2afa;
  }

  &:hover {
    background-color: #ede8fe;
    width: 60%;
    border-radius: 20px;
    color: #5d2afa;
  }
`;
const ToProfile = styled.span`
  font-weight: bolder;
`;

const ToNotifications = styled.span`
  font-weight: bolder;
`;
const NotificationIcon = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 22px;
  padding-left: 12px;
  margin-top: 17px;

  &.active {
    color: #5d2afa;
  }

  &:hover {
    background-color: #ede8fe;
    width: 90%;
    border-radius: 20px;
    color: #5d2afa;
  }
`;

const ToBookmarks = styled.span`
  font-weight: bolder;
`;
const BookmarksIcon = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 22px;
  padding-left: 12px;
  margin-top: 17px;

  &.active {
    color: #5d2afa;
  }

  &:hover {
    background-color: #ede8fe;
    width: 80%;
    border-radius: 20px;
    color: #5d2afa;
  }
`;

export default Header;
