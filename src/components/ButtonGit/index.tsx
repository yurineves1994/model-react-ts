import { IconButtonGit } from './IconButtonGit';
import * as S from './style';

export const ButtonContainer = () => {
  return (
    <S.Container>
      <S.Button>Faça login com seu Github</S.Button>
      <IconButtonGit />
    </S.Container>
  );
};
