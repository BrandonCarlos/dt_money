import { } from '../../App';
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles';

interface HeaderProps {
  //Já que este componente vai receber uma FUNÇÃO vamos começar com "on"
  onOpenNewTransactionModal: () => void;//função, e não retorna NADA
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {



  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
      </button>


      </Content>
    </Container>

  )
}