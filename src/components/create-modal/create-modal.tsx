import { useState } from "react"

interface InputProps{
    label:string,
    value:string | number,
    updateValue(value:any):void

}

const Input =({label, value, updateValue} : InputProps) =>{
    return(
        <>
        <label>{label}</label>
        <input value={value} onChange={e=>updateValue(e.target.value)}></input>
        </>

    )
                
}

interface CreateModalProps{

}

export function CreateModal(){

    const [title,setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image,setImage] = useState("");
    return(
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="tille" value={title} updateValue={setTitle}/>
                    <Input label="price" value={price} updateValue={setPrice}/>
                    <Input label="image" value={image} updateValue={setImage}/>
                </form>
            </div>

        </div>
    )
}