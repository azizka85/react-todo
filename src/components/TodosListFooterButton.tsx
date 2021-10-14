import styled from "@emotion/styled";

export interface TodosListFooterButtonProps {
  active?: boolean
}

export const TodosListFooterButton = styled.div<TodosListFooterButtonProps>(({ theme, active }) => ({
  cursor: 'pointer',
  border: active 
    ? `2px solid ${theme.colors.border}`
    : 'none',
  padding: active
    ? '0.25rem'
    : 'none'
}));