import Card from './components/card'
import './components/card/style.css'
import Title from './components/title';
import './components/title/style.css'
import './App.css'
import Navbar from './components/navbar';

const App : React.FC = () => {
  

  return (
    <>
    <header className="header">
      <Title />
      <Navbar />
    </header>

    <div className="album">

      <Card imagem="https://pbs.twimg.com/media/EhecA2RX0AM8waE.png"
      nome ="Joao Frango"
      idade = {20} />


      <Card imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpQheE08EsiKHmTqYtfAJc-l7cDuhvo-z7OQ&usqp=CAU"
        nome= "ET"
        idade = {999} />

      
      <Card imagem="data:image/jpeg;base64,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"
      nome="Bob Esponja"
      idade = {28} />

      </div>
      
    </>
  );
};

export default App
