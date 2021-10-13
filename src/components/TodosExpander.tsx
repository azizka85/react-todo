/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { TodoHeaderIcon } from './TodoHeaderIcon';

export interface TodosExpanderProps {
  display: boolean,
  toggleHandler: () => void
}

export function TodosExpander(props: TodosExpanderProps) {
  return (
    <span 
      css={{
        width: '1.5rem',
        height: '1.5rem',
        cursor: 'pointer',
        marginRight: '1rem'
      }}
      onClick={props.toggleHandler}
    >
      {props.display
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
  );
}