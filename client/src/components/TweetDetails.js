import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import TweetActions from "./TweetActions";
import Spinner from "./Spinner";
import { spinner3 } from "react-icons-kit/icomoon/spinner3";

const TweetDetails = () => {
  const [singleTweet, setSingleTweet] = useState({});
  const [loading, setLoading] = useState(true);
  const { tweetId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`/api/tweet/${tweetId}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        setSingleTweet(resData);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return (
      <SpinnerContainer>
        <Spinner icon={spinner3} size={35} />
      </SpinnerContainer>
    );
  }

  const formattedTimestamp = format(
    new Date(singleTweet.tweet.sortedTimestamp),
    "h:mm a · MMM dd yyyy"
  );
  return (
    <TweetContainer>
      <Return>
        <Arrow to="/">
          <AiOutlineArrowLeft size={17} />
        </Arrow>
        <h2>Meow</h2>
      </Return>
      <TweetUser>
        <Img src={singleTweet.tweet.author.avatarSrc} />
        <HandleContainer>
          <DisplayName>{singleTweet.tweet.author.displayName}</DisplayName>
          <TweetHandle>@{singleTweet.tweet.author.handle}</TweetHandle>
        </HandleContainer>
      </TweetUser>
      <div>
        <Status>{singleTweet.tweet.status}</Status>
        {singleTweet.tweet.media &&
          singleTweet.tweet.media.map((media) => {
            return <Media key={media.url} src={media.url} />;
          })}
      </div>
      <DateTweet>{formattedTimestamp} · Critter web app</DateTweet>
      <ActionsDiv>
        <TweetActions />
      </ActionsDiv>
    </TweetContainer>
  );
};

const TweetContainer = styled.div`
  padding-bottom: 10px;
  height: auto;
  border-bottom: red;
`;

const Return = styled.div`
  display: flex;
  gap: 15px;
  padding-left: 10px;
  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;
`;

const Arrow = styled(Link)`
  margin-top: 25px;
  color: inherit;
  border: none;
  background: none;
  cursor: pointer;
`;

const TweetUser = styled.div`
  display: flex;
  padding-left: 15px;
  padding-top: 10px;
`;

const Img = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
`;

const DisplayName = styled.span`
  font-weight: bold;
  margin-left: 10px;
`;

const TweetHandle = styled.span`
  margin-left: 13px;
  padding-right: 3px;
  color: gray;
`;

const HandleContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Status = styled.p`
  margin-left: 15px;
`;
const Media = styled.img`
  margin-left: 15px;
  border-radius: 20px;
  height: 400px;
  width: 95%;
`;

const DateTweet = styled.div`
  margin-left: 7px;
  padding: 10px;
  color: gray;
`;

const ActionsDiv = styled.div`
  padding: 20px;
  border-top: 1px solid #e1e8ed;
  border-bottom: 1px solid #e1e8ed;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;

export default TweetDetails;
