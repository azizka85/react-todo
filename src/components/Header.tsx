/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React from "react";

export function Header() {
  const theme = useTheme();

  return (
    <div
      css={{
        marginTop: '2rem',
        marginBottom: '1rem',
        fontSize: '2rem',
        color: theme.colors.header,
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
