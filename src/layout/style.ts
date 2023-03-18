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
  margin: 0 auto;
  transition: all 200ms;
  
  @media screen and (max-width: 500px) {
    height: 100vh;
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

export const TasksContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .categories {
    max-height: calc(100% - 64px);
    flex: 0 0 calc(100% - 64px);
    overflow: auto;

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
  }
  
  .create-task {}
  
  .actions {
    flex: 0 0 64px;
    max-height: 64px;
    border-top: 1px solid ${colors.secondary};
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 32px;
  }
`;