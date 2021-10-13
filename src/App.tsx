/** @jsx jsx */
import { Global, jsx, ThemeProvider } from '@emotion/react';
import React from "react";
import { Header } from './components/Header';
import { Todos } from './components/Todos';

const theme = {
  colors: {
    primary: '#b3d7ff',
    header: '#dddddd',
    border: '#dddddd',
    footer: '#f9f9f9',
    active: '#777777',
    inactive: '#bbbbbb',
    shadow: '#dddddd',
    background: '#ffffff'    
  },
  backgroundGradient: {
    begin: '#ffffff',
    end: '#dddddd'
  }
};

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <div 
        css={{
          background: `linear-gradient(${theme.backgroundGradient.begin}, ${theme.backgroundGradient.end})`,
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        }}
      >
        <Global 
          styles={{
            'html, body, #root': {
              width: '100%',
              height: '100%',
              margin: 0,
              fontFamily: "'Roboto', sans-serif"
            }
          }}
        />
        <Header>todos</Header>
        <Todos />
      </div>
    </ThemeProvider>
  );
}
