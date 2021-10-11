/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from "react";
import { TodoItem } from './TodoItem';

export function Todos() {
  return (
    <div
      css={{        
        width: 'calc(100% - 2rem)',
        background: '#ffffff',
        '@media (min-width: 50rem)': {
          width: '40rem'
        }
      }}
    >
      <ul>
        <TodoItem title="Test" active />
        <TodoItem title="Test" active={false} />
        <TodoItem title="Test" active />
      </ul>
    </div>
  );
}


