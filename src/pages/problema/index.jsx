import { HomeContent, HomeMetropolisSmogAboutContainer, HomeMetropolisSmogContainer, HomeMetropolisSmogImage } from "../home/styles";
import {
  ProblemContent,
  ProblemTitle,
  ProblemDescription,
  ProblemImage,
} from "./styles";

export function Problem() {
  return (
    <HomeContent>

    <HomeMetropolisSmogContainer>
      <HomeMetropolisSmogImage  src="/tratamento-depurador-gases-industriais.jpg" alt="Cidade poluída" />

      <HomeMetropolisSmogAboutContainer>
      <ProblemTitle>Problema</ProblemTitle>
      <ProblemDescription>
        Poluição em SP: No mês de maio de 2022, a poluição do ar na cidade de
        São Paulo ficou 4 vezes acima do recomendado pela Organização Mundial da
        Saúde (OMS) nas últimas duas décadas. Nenhuma estação de monitoramento
        da qualidade do ar atendeu aos limites, as análises foram feitas pela
        Companhia Ambiental do Estado de São Paulo. <br /> <br /> Quando acima
        do recomendado, a poluição pode trazer diversos riscos para a saúde da
        sociedade, entre eles, podemos citar: rinite alérgica, olhos secos,
        nariz entupido, perca de volume de água (pela respiração para umidificar
        o ar pela narina), menos água no sangue (ou seja, maior risco de
        desenvolver um coágulo ou trombo), infarto, AVC, parto prematuro, câncer
        de pulmão, etc. <br /> <br /> Igual citado anteriormente, a medição da
        qualidade do ar é feita pela CETESB; a mesma emite boletins diários
        sobre essas análises, entretanto, esses dados são divulgados no próprio
        site, porém possuem difícil entendimento e grande parte da população não
        tem conhecimento dele.
      </ProblemDescription>
      </HomeMetropolisSmogAboutContainer>
    </HomeMetropolisSmogContainer>
  </HomeContent>
    
  );
}
