import styled, { keyframes } from "styled-components";
import { flex_center } from "@/assets/scss/global";

const animationBump = keyframes`
  from,
  42%,
  46%,
  51%,
  55%,
  59%,
  63%,
  67%,
  71%,
  74%,
  78%,
  81%,
  85%,
  88%,
  92%,
  to {
    transform: translate(0,0);
  }

  44% {
    transform: translate(1.33%,6.75%);
  }

  53% {
    transform: translate(-16.67%,-0.54%);
  }

  61% {
    transform: translate(3.66%,-2.46%);
  }

  69% {
    transform: translate(-0.59%,15.27%);
  }

  76% {
    transform: translate(-1.92%,-4.68%);
  }

  83% {
    transform: translate(9.38%,0.96%);
  }

  90% {
    transform: translate(-4.55%,1.98%);
  }
`;

const animationWorm = keyframes`
  from {
    stroke-dashoffset: 10;
  }

  25% {
    stroke-dashoffset: 295;
  }

  to {
    stroke-dashoffset: 1165;
  }
`;

export const Spin = styled.div`
  .pl,
  .pl__worm {
    animation-duration: 3s;
    animation-iteration-count: infinite;
  }

  .pl {
    animation-name: ${animationBump};
    animation-timing-function: linear;
    width: 8em;
    height: 8em;
  }

  .pl__ring {
    stroke: hsla(var(--hue), 10%, 10%, 0.1);
    transition: stroke 0.3s;
  }

  .pl__worm {
    animation-name: ${animationWorm};
    animation-timing-function: cubic-bezier(0.42, 0.17, 0.75, 0.83);
  }
`;
export const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  ${flex_center}
  background-color: RGB(32, 27, 50, 1);
`;
