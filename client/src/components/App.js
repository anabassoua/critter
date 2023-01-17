import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <RightContainer>
          <Routes>
            <Route path="/" element={<HomeFeed />} />
            <Route path="/:profileId" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/tweet/:tweetId" element={<TweetDetails />} />
            <Route path="/bookmarks" element={<Bookmarks />} />
          </Routes>
        </RightContainer>
      </AppContainer>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  flex: 3;
  /* border-left: 1px solid gray; */
`;

export default App;
