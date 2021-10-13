import styled from "@emotion/styled";

export const Header = styled.div(({ theme }) => ({
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
}));
