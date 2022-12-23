import React from "react";
import "./Thanks.css";
import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
  } from "react-icons/bs";

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>
}

export const Thanks = ({data}) =>{
    return(
        <div className="thanks-container">
            <h2>Falta pouco...</h2>
            <p>A sua opinião é muito importante,em breve você receberá um cupom de 10% desconto</p>
            <p>Para concluir sua avaliação clique no botão de enviar abaixo</p>
            <h3>Aqui está um resumo de sua avaliação:{data.name}</h3>
            <p className="review-data">
                <span>Satisfação com o produto: {emojiData[data.review]} </span>
            </p>
            <p className="review-data">
                <span>Comentário: </span>
                {data.comment}
            </p>
            
        
        
        </div>
    )
}