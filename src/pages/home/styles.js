import styled from "styled-components"

export const HomeContent = styled.section`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  row-gap: 2rem;
`

export const HomePresentationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  row-gap: 1rem;
`

export const HomePresentationTitle = styled.h1`
  font-size: 3rem;
  font-weight: 600;
  color: #000000;
`

export const HomePresentationDescription = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  color: #262626;
`

export const HomeMetropolisSmogContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const HomeMetropolisSmogImage = styled.img`
  height: 46rem;

  max-width: 24rem;

  border-radius: 0.25rem;

  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const HomeMetropolisSmogAboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  justify-content: center;

  height: 46rem;

  width: calc(100% - 28rem);

  row-gap: 1.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

export const HomeMetropolisSmogAboutText = styled.span`
  font-size: 1.5rem;
  font-weight: 500;

  color: #262626;
`

export const HomeMetropolisSmogAboutTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;

  color: #000000;
`