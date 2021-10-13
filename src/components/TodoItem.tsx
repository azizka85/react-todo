import styled from '@emotion/styled';

export const TodoItem = styled.li(({ theme }) => ({
  listStyle: 'none',
  padding: '1rem 0.5rem',
  borderBottom: '1px solid #dddddd',
  fontSize: '1.25rem',
  display: 'flex',
  alignItems: 'center'
}));
