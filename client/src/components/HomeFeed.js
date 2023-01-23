import { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { format } from "date-fns";
import { HiArrowPath } from "react-icons/hi2";
import TweetActions from "./TweetActions";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import Spinner from "./Spinner";
import { spinner3 } from "react-icons-kit/icomoon/spinner3";

const HomeFeed = () => {
  const [allTweets, setAllTweets] = useState([]);
  const [error, setError] = useState(false);
  const [tweetLoading, setTweetLoading] = useState(true);
  const [reload, setReload] = useState(false);
  const { currentUser } = useContext(CurrentUserContext);

  const postTweet = (event) => {
    event.preventDefault();
    const tweetText = document.getElementById("tweetText").value;
    const tweet = { status: tweetText };

    fetch("/api/tweet", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tweet),
    })
      .then((res) => {
        if (res.status === 200) {
          setReload(!reload);
          console.log("res", res);
          return res.json();
        }
      })
      .then((resData) => {
        console.log("postTweet data", resData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("usefectr running");
    setTweetLoading(true);
    fetch("/api/me/home-feed")
      .then((res) => res.json())
      .then((resData) => {
        console.log("resData", resData);
        setAllTweets(resData);
        setTweetLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [reload]);

  if (!currentUser) {
    return (
      <SpinnerContainer>
        <Spinner icon={spinner3} size={35} />
      </SpinnerContainer>
    );
  }

  if (error) {
    return <div>an error occurs</div>;
  }

  return (
    <>
      <Header>Home</Header>
      <div>
        <Textarea id="tweetText" placeholder="What's Happening ?"></Textarea>
        <CurrentUserAvatar src={currentUser && currentUser.profile.avatarSrc} />
        <Button onClick={postTweet}>Meow</Button>
      </div>
      {tweetLoading ? (
        <SpinnerContainer>
          <Spinner icon={spinner3} size={35} />
        </SpinnerContainer>
      ) : (
        <>
          {allTweets.tweetIds.map((id) => {
            const tweet = allTweets.tweetsById[id];
            const formattedTimestamp = format(
              new Date(tweet.timestamp),
              "MMM dd"
            );

            let retweetCount = 0;
            if (tweet.retweetFrom) {
              retweetCount++;
            }

            return (
              <TweetContainer key={tweet.id}>
                <div>
                  {tweet.retweetFrom && (
                    <>
                      <Retweets>
                        <HiArrowPath size={20} />
                        {tweet.retweetFrom.displayName} Remeowed
                      </Retweets>
                    </>
                  )}
                </div>
                <TweetUser>
                  <Img src={tweet.author.avatarSrc} />
                  <DisplayName to={`/${tweet.author.handle}`}>
                    {tweet.author.displayName}
                  </DisplayName>
                  <TweetHandle>@{tweet.author.handle}</TweetHandle>
                  <span> ·</span>
                  <DateTweet>{formattedTimestamp}th</DateTweet>
                </TweetUser>
                <Tweets to={`/tweet/${tweet.id}`}>
                  <TweetStatus>{tweet.status}</TweetStatus>
                  {tweet.media &&
                    tweet.media.map((media) => {
                      return <TweetImg key={media.url} src={media.url} />;
                    })}
                </Tweets>
                <TweetActions retweetCount={retweetCount} />
              </TweetContainer>
            );
          })}
        </>
      )}
    </>
  );
};
const Header = styled.h1`
  margin-left: 15px;
`;

const Textarea = styled.textarea`
  padding-left: 70px;
  padding-top: 30px;
  box-sizing: border-box;
  position: relative;
  border-top: 1px solid #e1e8ed;
  border-bottom: 10px solid #e1e8ed;
  border-left: none;
  border-right: none;
  width: 100%;
  height: 200px;
  resize: none;
  &:focus {
    outline: 0;
  }
  ::placeholder {
    color: lightgrey;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 290px;
  top: 230px;
  border-radius: 50px;
  background-color: #5e2eff;
  color: #fff;
  padding: 10px 20px;
  border-style: none;
  cursor: pointer;
`;

const TweetContainer = styled.div`
  padding: 25px;
  border-bottom: 1px solid #e1e8ed;
  /* border-left: 1px solid #e1e8ed;
  border-right: 1px solid #e1e8ed;
  border-top: 1px solid #e1e8ed; */
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

const DisplayName = styled(Link)`
  font-weight: bold;
  margin-left: 10px;
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
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

const Tweets = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

const CurrentUserAvatar = styled.img`
  height: 50px;
  left: 320px;
  top: 100px;
  border-radius: 50%;
  position: absolute;
`;

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
`;
export default HomeFeed;
