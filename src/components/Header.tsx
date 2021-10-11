/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from "react";

export function Header() {
  return (
    <div
      css={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontFamily: 'sans-serif',
        fontSize: '2rem',
        color: '#dddddd',
        fontWeight: 'lighter',        
        '@media (min-width: 25rem)': {
          fontSize: '3rem'
        },
        '@media (min-width: 50rem)': {
          fontSize: '4rem'
        }
      }}
    >
      todos
    </div>
  );
}
