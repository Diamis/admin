import styled from 'styled-components';

export const HTMLTitle = styled.h1(() => {
  return {};
});

export const HTMLContent = styled.div(() => {
  return {
    backgroundColor: 'white',
    borderRadius: 6,
    padding: '2rem',
    width: '100%',
    maxWidth: 420,
    marginLeft: 'auto',
    marginRight: 'auto',
  };
});

export default styled.div(() => {
  return {
    display: 'flex',
    minHeight: '100vh',
    alignItems: 'center',
    justifyContent: 'center',
  };
});
