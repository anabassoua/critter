import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { u1F4A3 } from "react-icons-kit/noto_emoji_regular/u1F4A3";

const ErrorPage = () => {
  return (
    <Container>
      <Icon icon={u1F4A3} size={90} />
      <h2>An unknown error has occured</h2>
      <p>
        Please try refreshing the page or, <Link>contact support</Link> if the
        problem persists.
      </p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
`;
const Link = styled.a`
  color: blue;
  text-decoration: underline;
`;

export default ErrorPage;
