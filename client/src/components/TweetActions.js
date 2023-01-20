import { useState } from "react";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiArrowPath } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import styled from "styled-components";

const TweetActions = ({ retweetCount }) => {
  const [isRed, setIsRed] = useState(false);
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setIsRed(!isRed);
    if (isRed) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <Actions>
      <HiOutlineChatBubbleOvalLeft />
      <NumRetweet>
        <HiArrowPath />
        {retweetCount ? <Num>{retweetCount}</Num> : null}
      </NumRetweet>
      <Count>
        <Button>
          <HiOutlineHeart
            onClick={handleClick}
            style={{
              fill: isRed ? "red" : "white",
              color: isRed ? "red" : "inherit",
            }}
          />
        </Button>
        {count ? <Num>{count}</Num> : null}
      </Count>
      <HiOutlineArrowUpTray />
    </Actions>
  );
};

const Actions = styled.div`
  display: flex;
  margin-left: 70px;
  gap: 100px;
`;

const NumRetweet = styled.div`
  display: flex;
  gap: 5px;
`;

const Count = styled.div`
  display: flex;
  gap: 5px;
`;

const Num = styled.span`
  font-size: 14px;
`;

const Button = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`;
export default TweetActions;
