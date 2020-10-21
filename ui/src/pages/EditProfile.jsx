// Editar o profile de uma mulher maravilhosa

import React,{useEffect} from 'react';
import { useForm } from "react-hook-form";

const EditProfile = () => {
    const { register, handleSubmit, errors, setValue } = useForm();

    const url = `http://localhost:5555/maravilhosas/${window.location.pathname.split('/')[2]}`

    useEffect(()=>{
       fetch(url)
           .then(res => res.json())
           .then((res) => {
               setValue("name", res.name)
               setValue("photo",res.photo)
               setValue("subtitle",res.subtitle)
               setValue("about",res.about)
               setValue("phrase",res.phrase)
               setValue("history1",res.history[0])
               setValue("history2",res.history[1])
               setValue("history3",res.history[2])
               setValue("history4",res.history[3])
               setValue("addedBy",res.addedBy)
            })
    },[url, setValue])

    const onSubmit = (data,e) => {
        const {name, photo, subtitle, about, phrase, history1, history2, history3, history4, addedBy} = data
        const body = {
            name,
            photo,
            subtitle,
            about, 
            phrase,
            history: [history1],
            addedBy
        }

        if(history2) {
            body.history.push(history2)
        }
        if(history3) {
            body.history.push(history3)
        }
        if(history4) {
            body.history.push(history4)
        }

        editar(body).then(data => {e.target.reset()})
    };

    async function editar(body) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        };
        let data = await fetch(url, requestOptions);
        return data;
    }

       
    return (
        <div id="edit-profile">
        <form className="edit-form" onSubmit={handleSubmit(onSubmit)}>
            <label>Nome</label>
            <input autoFocus={true} name="name" ref={register({ required: true })}/>
            {errors.name && (<p className="error">Campo obrigatório</p>)}
            
            <label>Foto(url)</label>
            <input name="photo" ref={register({ required: true })}/>
            {errors.photo && (<p className="error">Campo obrigatório</p>)}

            <label>Subtítulo</label>
            <input name="subtitle" ref={register({ required: true })}/>
            {errors.subtitle && (<p className="error">Campo obrigatório</p>)}

            <label>Breve resumo sobre</label>
            <input name="about" ref={register({ required: true })}/>
            {errors.about && (<p className="error">Campo obrigatório</p>)}

            <label>Citação</label>
            <input name="phrase" ref={register({ required: true })}/>
            {errors.phrase && (<p className="error">Campo obrigatório</p>)}

            <label>Histórico</label>
            <textarea name="history1" rows="5" ref={register({ required: true })}/>
            {errors.history1 && (<p className="error">Campo obrigatório, pelo menos 1 parágrafo deve ser preenchido</p>)}

            <textarea name="history2" rows="5" ref={register({ required: false })}/>
            <textarea name="history3" rows="5" ref={register({ required: false })}/>
            <textarea name="history4" rows="5" ref={register({ required: false })}/>

            <label>Autora</label>
            <input name="addedBy" ref={register({ required: true })}/>
            {errors.addedBy && (<p className="error">Campo obrigatório</p>)}


            <button className="btn btn_roxo btn_center">Confirmar alteração</button>
      </form>
      </div>
    )
}
export default EditProfile;