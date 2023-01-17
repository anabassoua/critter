import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <RightContainer>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<h1>profile</h1>} />
            <Route path="/notifications" element={<h1>notifications</h1>} />
            <Route path="/bookmarks" element={<h1>bookmarks</h1>} />
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
  border-left: 1px solid green;
`;

export default App;
