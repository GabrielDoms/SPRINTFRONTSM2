import styled from "styled-components"

export const ProblemContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  row-gap: 2rem;
`

export const ProblemImage = styled.img`
  width: 100%;

  object-fit: cover;

  border-radius: 0.25rem;
`

export const ProblemTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;

  color: #000000;
`

export const ProblemDescription = styled.p`
  color: #262626;

  font-size: 1.5rem;
  font-weight: 600;
`