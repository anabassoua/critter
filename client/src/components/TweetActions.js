import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { HiArrowPath } from "react-icons/hi2";
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineArrowUpTray } from "react-icons/hi2";
import styled from "styled-components";

const TweetActions = () => {
  return (
    <Actions>
      <HiOutlineChatBubbleOvalLeft />
      <HiArrowPath />
      <HiOutlineHeart />
      <HiOutlineArrowUpTray />
    </Actions>
  );
};

const Actions = styled.div`
  display: flex;
  margin-left: 70px;
  gap: 100px;
`;

export default TweetActions;
