import { ButtonContainer } from '../ButtonGit';
import { Logo } from './Logo';
import * as S from './styles';

export const Header = () => {
  return (
    <S.TagHeader>
      <Logo />
      <ButtonContainer />
    </S.TagHeader>
  );
};
