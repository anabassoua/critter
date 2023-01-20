import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { format } from "date-fns";

const Profile = () => {
  const [user, setUser] = useState({});
  const { profileId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/${profileId}/profile`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setUser(resData);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }

  // console.log(user.profile);
  // console.log(Object.entries(user.profile));
  // console.log(Object.values(user.profile));
  // console.log(Object.keys(user.profile));

  const formattedTime = format(new Date(user.profile.joined), "MMMM dd");

  return (
    <ParentContainer>
      <BannImg>
        <Banner src={user.profile.bannerSrc} />
        <Avatar src={user.profile.avatarSrc} />
        {user.profile.isBeingFollowedByYou ? (
          <Following>Following</Following>
        ) : null}
      </BannImg>

      {/* 2eme div */}
      <InfoContainer>
        <DisplayName>{user.profile.displayName}</DisplayName>
        <HandleContainer>
          <span>@{user.profile.handle}</span>
          {user.profile.isFollowingYou ? (
            <FollowYou>Follows You</FollowYou>
          ) : null}
        </HandleContainer>
        <Bio>{user.profile.bio}</Bio>
        <LocationDiv>
          <Loc>
            <HiOutlineMapPin />
            <span>{user.profile.location}</span>
          </Loc>
          <Time>
            <HiOutlineCalendarDays />
            <span>Joined {formattedTime}</span>
          </Time>
        </LocationDiv>
        <Followers>
          <span>
            <b>{user.profile.numFollowing}</b> Following
          </span>
          <span>
            <b>{user.profile.numFollowers}</b> Followers
          </span>
        </Followers>
      </InfoContainer>

      {/* 3eme div */}
      <Actions>
        <ActionTweet>Tweets</ActionTweet>
        <Action>Media</Action>
        <Action>Likes</Action>
      </Actions>
    </ParentContainer>
  );
};

const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  border-bottom: 1px solid #e1e8ed;
`;

const Banner = styled.img`
  background-position: cover;
  position: relative;
  width: 100%;
`;

const Avatar = styled.img`
  height: 120px;
  position: absolute;
  margin-bottom: 110px;
  border-radius: 50%;
  border: 3px solid #fff;
  left: 340px;
  top: 170px;
`;

const Following = styled.p`
  text-align: center;
  margin-left: 550px;
  margin-top: 20px;
  border: 1px solid;
  background-color: #5e2eff;
  color: #fff;
  border-radius: 20px;
  width: 15%;
  padding: 5px;
`;

const DisplayName = styled.p`
  font-weight: bold;
  margin-left: 15px;
  margin-top: 0;
`;

const HandleContainer = styled.div`
  color: gray;
  font-size: 0.8em;
  margin-left: 15px;
  margin-top: -15px;
`;

const FollowYou = styled.span`
  border-radius: 7px;
  padding: 3px;
  font-size: 12px;
  background-color: #e8e9f0;
  margin-left: 5px;
  padding: 2px 4px;
`;

const Bio = styled.p`
  margin-left: 15px;
  margin-top: 12px;
`;

const LocationDiv = styled.div`
  margin-left: 15px;
  color: #4f515a;
  display: flex;
  gap: 20px;
`;

const Loc = styled.div`
  display: flex;
  gap: 3px;
`;

const Time = styled.div`
  display: flex;
  gap: 3px;
`;

const Followers = styled.div`
  margin-left: 15px;
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const BannImg = styled.div`
  height: 300px;
  /* border-bottom: 1px solid green; */
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;

  align-items: flex-end;
  height: 90px;
`;

const Action = styled.p`
  padding: 15px;
  margin-bottom: 0;
  margin-left: 50px;
  width: 130px;
`;

const ActionTweet = styled.p`
  border-bottom: 4px solid #5e2eff;
  border-radius: 1px;
  margin-bottom: 0;
  padding: 10px 100px;
  margin-left: 0;
`;

const InfoContainer = styled.div`
  /* border-bottom: 1px solid #e1e8ed; */
  /* border-bottom: 1px solid green; */
`;
export default Profile;
