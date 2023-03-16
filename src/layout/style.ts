import styled from "styled-components";
import {colors} from "@/styles/colors";

export const LayoutContainer = styled.div`
  position: relative;
  width: 500px;
  max-width: 100%;
  height: calc(100vh - 128px);
  overflow: auto;
  padding: 48px 32px 24px;
  background: ${colors.white};
  box-shadow: 0 0 30px rgba(29, 40, 58, 0.15);

  &::-webkit-scrollbar {
    border-radius: 4px;
    width: 4px;
    background: ${colors.stroke};
  }
  &::-webkit-scrollbar-track {
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: ${colors.secondary};
  }
  
  &:before {
    content: ' ';
    position: absolute;
    width: 100%;
    border-radius: 30%;
    height: 30px;
    background: ${colors.primary};
    top: -10px;
    left: 0;
  }
`;