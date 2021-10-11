/** @jsx jsx */
import { Global, jsx } from '@emotion/react';
import React from "react";
import { Header } from './components/Header';
import { Todos } from './components/Todos';

export function App() {
  return (
    <div 
      css={{
        background: [
          'red',
          'linear-gradient(#ffffff, #cccccc)'
        ],
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
            margin: 0
          }
        }}
      />
      <Header />
      <Todos />
    </div>
  );
}
