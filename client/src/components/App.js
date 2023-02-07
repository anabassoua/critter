import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import HomeFeed from "./HomeFeed";
import Profile from "./Profile";
import Notifications from "./Notifications";
import Bookmarks from "./Bookmarks";
import TweetDetails from "./TweetDetails";
import { CurrentUserProvider } from "./CurrentUserContext";

function App() {
  return (
    <BrowserRouter>
      <CurrentUserProvider>
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
      </CurrentUserProvider>
    </BrowserRouter>
  );
}

const AppContainer = styled.div`
  display: flex;
`;

const RightContainer = styled.div`
  /* flex: 3; */
  max-width: 55%;
  width: 55%;
  box-sizing: border-box;
  position: relative;
  border-left: 1px solid #e1e8ed;
  border-right: 1px solid #e1e8ed;
  padding: 0;
  height: 100%;
`;

export default App;
