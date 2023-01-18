import { useState, useEffect } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { IoRepeatSharp } from "react-icons/io5";

const HomeFeed = () => {
  const [allTweets, setAllTweets] = useState([]);

  useEffect(() => {
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((resData) => {
        console.log("resData", resData);
        setAllTweets(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!allTweets.tweetsById) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>Home</h1>
      {allTweets.tweetIds.map((id) => {
        const tweet = allTweets.tweetsById[id];
        const formattedTimestamp = format(new Date(tweet.timestamp), "MMM dd");

        return (
          <TweetContainer key={tweet.id}>
            <div>
              {tweet.retweetFrom && (
                <>
                  <Retweets>
                    <IoRepeatSharp size={20} />
                    {tweet.retweetFrom.displayName} Remeowed
                  </Retweets>
                </>
              )}
            </div>
            <TweetUser>
              <Img src={tweet.author.avatarSrc} />
              <DisplayName>{tweet.author.displayName}</DisplayName>
              <TweetHandle>@{tweet.author.handle}</TweetHandle>
              <span> ·</span>
              <DateTweet>{formattedTimestamp}th</DateTweet>
            </TweetUser>
            <Tweets>
              <TweetStatus>{tweet.status}</TweetStatus>
              {tweet.media &&
                tweet.media.map((media) => {
                  return <TweetImg src={media.url} />;
                })}
            </Tweets>
          </TweetContainer>
        );
      })}
    </>
  );
};

const TweetContainer = styled.div`
  padding: 25px;
  border-bottom: 1px solid #e1e8ed;
`;

const Retweets = styled.span`
  display: flex;
  gap: 5px;
  margin-left: 50px;
  margin-bottom: 5px;
  color: gray;
`;

const TweetUser = styled.div`
  display: flex;
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
  margin-left: 3px;
  padding-right: 3px;
`;

const DateTweet = styled.span`
  margin-left: 5px;
`;

const TweetImg = styled.img`
  margin-left: 70px;
  height: 300px;
  width: 500px;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const TweetStatus = styled.span`
  margin-left: 70px;
  margin-top: -40px;
`;

const Tweets = styled.div`
  display: flex;
  flex-direction: column;
`;
export default HomeFeed;
