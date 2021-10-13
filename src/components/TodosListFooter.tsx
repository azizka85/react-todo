/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';

export enum TodosListRange {
  All,
  Active,
  Completed
}

export interface TodosListFooterProps {
  currentRange: TodosListRange,
  itemsLeft: number,
  onSelected(range: TodosListRange): void;
  onClearCompletedTodos(): void;
}

export function TodosListFooter(props: TodosListFooterProps) {
  const theme = useTheme();

  function onClearCompleted() {
    props.onClearCompletedTodos();
  }

  return (
    <li css={{
      listStyle: 'none',
      padding: '0.75rem 1rem',
      fontSize: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: theme.colors.footer
    }}>
      <div>
        {props.itemsLeft} items left
      </div>
      <div css={{
        display: 'flex',      
        alignItems: 'center',  
        '& div+div': {
          marginLeft: '0.5rem'
        }
      }}>
        <div 
          css={{
            cursor: 'pointer',
            border: props.currentRange === TodosListRange.All 
              ? `2px solid ${theme.colors.border}`
              : 'none',
            padding: props.currentRange === TodosListRange.All 
              ? '0.25rem'
              : 'none'
          }}
          onClick={() => props.onSelected(TodosListRange.All)}
        >
          All
        </div>
        <div
          css={{
            cursor: 'pointer',
            border: props.currentRange === TodosListRange.Active 
              ? `2px solid ${theme.colors.border}`
              : 'none',
            padding: props.currentRange === TodosListRange.Active 
              ? '0.25rem'
              : 'none'
          }}
          onClick={() => props.onSelected(TodosListRange.Active)}        
        >
          Active
        </div>
        <div
          css={{
            cursor: 'pointer',
            border: props.currentRange === TodosListRange.Completed 
              ? `2px solid ${theme.colors.border}`
              : 'none',
            padding: props.currentRange === TodosListRange.Completed
              ? '0.25rem'
              : 'none'
          }}
          onClick={() => props.onSelected(TodosListRange.Completed)}
        >
          Completed
        </div>
      </div>
      <div
        css={{
          cursor: 'pointer',
          border: `2px solid ${theme.colors.border}`,
          padding: '0.25rem'
        }}
        onClick={onClearCompleted}
      >
        Clear completed
      </div>
    </li>
  );
}