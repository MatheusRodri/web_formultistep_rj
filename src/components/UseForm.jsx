import React from "react";

export const UseForm = () =>{
    return(
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" required/>

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" required/>

                
            </div>
        </div>
    )
}