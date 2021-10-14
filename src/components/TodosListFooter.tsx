/** @jsx jsx */
import { jsx, useTheme } from '@emotion/react';
import { TodosListFooterButton } from './TodosListFooterButton'

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
        <TodosListFooterButton
          active={props.currentRange === TodosListRange.All}
          onClick={() => props.onSelected(TodosListRange.All)}
        >
          All
        </TodosListFooterButton>
        <TodosListFooterButton
          active={props.currentRange === TodosListRange.Active}
          onClick={() => props.onSelected(TodosListRange.Active)}        
        >
          Active
        </TodosListFooterButton>
        <TodosListFooterButton
          active={props.currentRange === TodosListRange.Completed}
          onClick={() => props.onSelected(TodosListRange.Completed)}
        >
          Completed
        </TodosListFooterButton>
      </div>
      <TodosListFooterButton
        active={true}
        onClick={onClearCompleted}
      >
        Clear completed
      </TodosListFooterButton>
    </li>
  );
}