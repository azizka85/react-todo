import styled from "@emotion/styled";

export const TodosContainer = styled.div(({ theme }) => ({        
  width: 'calc(100% - 2rem)',
  background: theme.colors.background,
  '@media (min-width: 50rem)': {
    width: '40rem'
  },
  boxShadow: `0px 0px 10px ${theme.colors.shadow}`
}));