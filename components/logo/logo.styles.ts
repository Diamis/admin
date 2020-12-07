import styled from 'styled-components';

export const HTMLContainer = styled.a<{}>(() => {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    paddingLeft: '1rem',
    whiteSpace: 'nowrap',
    height: '4rem',
    color: '#2196f3',
    textDecoration: 'none',
  };
});

export const HTMLTitle = styled.span<{}>(() => {
  return {
    fontSize: '1rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginLeft: '0.5rem',
  };
});
