import styled from 'styled-components';
import {colors} from "@/styles/colors";

export const LoadingStyle = styled.div`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    filter: url('#goo');
    animation: rotate-move 2s ease-in-out infinite;
  }
  
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: ${colors.white + 80};
  }
  
  .children {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .dot {
    width: 32px;
    max-height: 32px;
    border-radius: 50%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${colors.primary};
  }

  .dot-3 {
    animation: dot-3-move 2s ease infinite, index 6s ease infinite;
  }

  .dot-2 {
    animation: dot-2-move 2s ease infinite, index 6s -4s ease infinite;
  }

  .dot-1 {
    animation: dot-1-move 2s ease infinite, index 6s -2s ease infinite;
  }

  @keyframes dot-3-move {
    20% {
      transform: scale(1);
    }
    45% {
      transform: translateY(-18px) scale(0.75);
    }
    60% {
      transform: translateY(-36px) scale(0.75);
    }
    80% {
      transform: translateY(-36px) scale(0.75);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes dot-2-move {
    20% {
      transform: scale(1);
    }
    45% {
      transform: translate(-16px, 12px) scale(0.75);
    }
    60% {
      transform: translate(-32px, 24px) scale(0.75);
    }
    80% {
      transform: translate(-32px, 24px) scale(0.75);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes dot-1-move {
    20% {
      transform: scale(1);
    }
    45% {
      transform: translate(16px, 12px) scale(0.75);
    }
    60% {
      transform: translate(32px, 24px) scale(0.75);
    }
    80% {
      transform: translate(32px, 24px) scale(0.75);
    }
    100% {
      transform: translateY(0) scale(1);
    }
  }

  @keyframes rotate-move {
    55% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    80% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }

  @keyframes index {
    0%,
    100% {
      z-index: 3;
    }
    33.3% {
      z-index: 2;
    }
    66.6% {
      z-index: 1;
    }
  }
`;
