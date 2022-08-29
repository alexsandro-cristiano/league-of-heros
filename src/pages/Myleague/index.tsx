import coringaImg from 'assets/images/coringa.png'
import { Emptymodule } from 'components/Emptymodule'
import styles from './Myleague.module.scss'

export function MyLeague() {
  const liga = null
  return (
    <main>
      {liga == '' ? (
        <div>
          <p>true</p>
        </div>
      ) : (
        <Emptymodule
          title="Sua liga ainda não tem nenhum membro!"
          subtitle="Convide algum dos heróis para ela."
        />
      )}
    </main>
  )
}
