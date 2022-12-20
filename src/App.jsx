import './App.css';
import { GrFormNext,GrFormPrevious} from 'react-icons/gr';

function App() {

  return (
    <div className='app'>
      <div className='header'>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulario abaixo:</p>
      </div>
      <div className='form-container'>
        <p>etapas</p> 
        <form>
          <div className="inputs-container">
            
          </div>
          <div className="actions">
            <button type='button'>
                <span>Voltar</span>
                <GrFormPrevious/>
            </button>
            <button type='submit'>
              <span>Avançar</span>
              <GrFormNext/>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
