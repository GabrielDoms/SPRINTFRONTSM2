import {
  HomeContent,
  HomeMetropolisSmogAboutContainer,
  HomeMetropolisSmogAboutText,
  HomeMetropolisSmogAboutTitle,
  HomeMetropolisSmogContainer,
  HomeMetropolisSmogImage,
  HomePresentationContainer,
  HomePresentationDescription,
  HomePresentationTitle,
} from "./styles";

export function Home() {
  return (
    <HomeContent>
      <HomePresentationContainer>
        <HomePresentationTitle>Sobre o que falamos?</HomePresentationTitle>

        <HomePresentationDescription>
          Na luta contra a poluição, cada ação conta. Junte-se a nós em uma
          jornada de descoberta e ação para proteger nosso planeta e nossas
          futuras gerações. &quot;Solving O2&quot; mergulha nas profundezas da
          poluição ambiental, explorando suas causas, consequências e soluções.
        </HomePresentationDescription>
      </HomePresentationContainer>

      <HomeMetropolisSmogContainer>
        <HomeMetropolisSmogImage src="/poluicao.png" alt="Cidade poluída" />

        <HomeMetropolisSmogAboutContainer>
          <HomeMetropolisSmogAboutTitle>
            Como funciona nosso sistema?
          </HomeMetropolisSmogAboutTitle>

          <HomeMetropolisSmogAboutText>
            Na metrópole, a poluição em massa se alastra como uma sombra sobre o
            horizonte urbano. Os carros congestionados expelem fumaça tóxica, as
            indústrias despejam resíduos venenosos e a população luta para
            respirar ar limpo. Nesse cenário crítico, é urgente adotar medidas
            para reduzir a poluição, proteger a saúde pública e garantir um
            futuro sustentável para nossa cidade. Juntos, podemos transformar
            essa paisagem urbana sombria em um lugar mais saudável e habitável
            para todos.
          </HomeMetropolisSmogAboutText>
        </HomeMetropolisSmogAboutContainer>
      </HomeMetropolisSmogContainer>
    </HomeContent>
  );
}
