import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import App from "./components/App";
import { AppRegistry } from "react-native";

const WebApp = () => (
  <Container>
    <GlobalStyles />
    <App />
  </Container>
);

const GlobalStyles = createGlobalStyle`
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

AppRegistry.registerComponent("App", () => WebApp);

export default WebApp;
