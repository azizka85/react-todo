import styled from "@emotion/styled";

export const TodoHeaderInput = styled.input(({ theme }) => ({
  fontSize: '1.5rem',
  color: theme.colors.active,
  border: 'none',
  outline: 'none',
  fontWeight: 'lighter',
  '::placeholder': {
    color: theme.colors.inactive
  }
}));
