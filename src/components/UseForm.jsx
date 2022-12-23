import React from "react";

export const UseForm = ({data,updateFiledHandler}) =>{
    return(
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome" value={data.name || ""} onChange={(e)=>updateFiledHandler("name",e.target.value)} required/>

                <label htmlFor="email">Email </label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" value={data.email || ""} onChange={(e)=>updateFiledHandler("email",e.target.value)}required/>

                
            </div>
        </div>
    )
}