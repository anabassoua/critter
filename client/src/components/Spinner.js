import styled, { keyframes } from "styled-components";
import { Icon } from "react-icons-kit";

const spin = keyframes`
from {
    transform: rotate(0deg)
}
to {
    transform: rotate(360deg)
}
`;

const Spinning = styled(Icon)`
  animation: ${spin} 2s linear infinite;
  color: gray;
`;

const Spinner = ({ icon, size }) => {
  return <Spinning icon={icon} size={size} />;
};

export default Spinner;
