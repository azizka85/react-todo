/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import React, { useState } from "react";
import { TodoItem } from './TodoItem';
import { TodoHeaderIcon } from './TodoHeaderIcon';
import { TodoHeaderInput } from './TodoHeaderInput';

export function Todos() {
  const theme = useTheme();
  const [display, setDisplay] = useState(true);

  function toggleDisplay() {
    setDisplay(!display);
  }

  return (
    <div
      css={{        
        width: 'calc(100% - 2rem)',
        background: theme.colors.background,
        '@media (min-width: 50rem)': {
          width: '40rem'
        },
        boxShadow: `0px 0px 10px ${theme.colors.shadow}`
      }}
    >
      <ul
        css={{
          padding: 0,
          margin: 0
        }}
      >
        <TodoItem>
          <span 
            css={{
              width: '1.5rem',
              height: '1.5rem',
              cursor: 'pointer',
              marginRight: '1rem'
            }}
            onClick={toggleDisplay}
          >
            {display
              ? <TodoHeaderIcon viewBox="0 0 16 16">
                  <path 
                    fillRule="evenodd" 
                    d={`
                        M1.646 4.646a.5.5 0 0 1 .708 0L8 
                        10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 
                        6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z
                    `}
                  />
                </TodoHeaderIcon>
              : <TodoHeaderIcon viewBox="0 0 16 16">
                  <path 
                    fillRule="evenodd" 
                    d={`
                        M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 
                        .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 
                        2.354a.5.5 0 0 1 0-.708z                  
                    `}
                  />
                </TodoHeaderIcon>
            }                       
          </span>
          <TodoHeaderInput placeholder="What needs to be done?" type="text" /> 
        </TodoItem>
        {display &&
          <>
            <TodoItem data-test-id="test1">
              Test #1 (active)
            </TodoItem>
            <TodoItem data-test-id="test2">
              Test #2 (not active)
            </TodoItem>
            <TodoItem data-test-id="test3">
              Test #3 (active)
            </TodoItem>          
          </>        
        }
      </ul>
    </div>
  );
}


