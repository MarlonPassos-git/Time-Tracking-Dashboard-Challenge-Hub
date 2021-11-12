import { CardStatus } from '../../components/CardStatus';
import { CardUser } from '../../components/CardUser';
import './style.scss'

export function App() {
  return (
    <main>
        <CardUser />
        <CardStatus />  
    </main>
  );
}