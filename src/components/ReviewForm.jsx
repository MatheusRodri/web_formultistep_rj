import React from "react";
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

import "./ReviewForm.css";

export const ReviewForm = ({data,updateFiledHandler}) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        
        <label className="radio-container">
          <input type="radio" value="unsatisfied" name="review" checked={data.review === "unsatisfied"} onChange={(e)=>updateFiledHandler("review",e.target.value)} required />
          <BsFillEmojiFrownFill />
          <p>insatisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="neutral" name="review" checked={data.review === "neutral"} onChange={(e)=>updateFiledHandler("review",e.target.value)} required />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="Satisfied" name="review" checked={data.review === "Satisfied"} onChange={(e)=>updateFiledHandler("review",e.target.value)} required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className="radio-container">
          <input type="radio" value="very_satisfied" name="review"  checked={data.review === "very_satisfied"} onChange={(e)=>updateFiledHandler("review",e.target.value)} required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>

      </div>
        <div className="form-control">
            <label htmlFor="comment">Comentário:</label>
            <textarea name="comment" id="comment" placeholder="Conte sua experiencia com o produto..." value={data.comment || ""} onChange={(e)=>updateFiledHandler("comment",e.target.value)}></textarea>
        </div> 
    </div>
  );
};
