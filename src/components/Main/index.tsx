import * as S from "./styles";

export function Main({
  title = "Boilerplate",
  description = "A template from a project using NextJs"
}) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
}
