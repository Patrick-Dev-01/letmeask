import useAuth from '../hooks/useAuth';
import { useHistory } from 'react-router-dom';

import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss';
import Button from '../components/Button';

export default function Home(){
    const history = useHistory()
    const { user, signInWithGoogle } = useAuth()

    async function handleCreateRoom(){
       if(!user){
           await signInWithGoogle()
       }

       else{
           history.push('/rooms/new')
       }
    }

    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button onClick={handleCreateRoom} type="button" className="create-room">
                        <img src={googleIconImg} alt="Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form action="">
                        <input 
                            type="text" 
                            placeholder="digite o código da sala"
                        />
                        <Button type="submit">
                            
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}