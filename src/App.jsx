import "./App.css";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import { UseForm } from "./components/UseForm";
import { ReviewForm } from "./components/ReviewForm";
import { Thanks } from "./components/Thanks";

//Hooks
import { useForm } from "./hooks/useForm";
import { Steps } from "./components/Steps";
import { useState } from "react";


const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
}

function App() {
  const [data,setData] = useState(formTemplate)
  const updateFiledHandler = (key,value)=>{
    setData((prev)=>{
      return {...prev,[key]:value}
    })
  }
  const formComponents = [<UseForm data={data} updateFiledHandler={updateFiledHandler}/>, <ReviewForm data={data} updateFiledHandler={updateFiledHandler} />, <Thanks data={data} />];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulario abaixo:</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <span>Voltar</span>
                <GrFormPrevious />
              </button>
            )}

            {!isLastStep ? (
              <button type="submit">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
