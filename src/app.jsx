import React, {useState} from "react";
import "./styles.css";
import Header from "./components/header";
import Note from "./components/note";
import Footer from "./components/footer";
import notesData from "./components/notes";
import Input from "./components/Input component/Input";

export default function App(){

    const [note, setNote] = useState({
        key:0,
        title:"",
        content:""
    })

    const [visibleNote, setVisibleNote] = useState([])

    const handleChange = (event) =>{
        const {value, name} = event.target;
        setNote((preValue)=>{
            return{
                ...preValue,
                [name] : value,
            }
        })    
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        setVisibleNote((preValue)=>{
            return[
                ...preValue, note
            ]
        })
      
    }

    const handleDelete = (indexId) => {
        setVisibleNote((preValue)=>{
            return preValue.filter((value,id)=>{
                return id != indexId
            })
        })
    }


    return(
        <div>
            <Header />
            <Input handleChange={handleChange} handleSubmit={handleSubmit} />
            
            <div>
                {visibleNote.map((e,i) => (
                    <Note 
                    key={i} 
                    index={i}
                    title={e.title} 
                    content={e.content}
                    handleDelete={handleDelete}
                    />))}
            </div>
            
            <Footer />
            
        </div>);
}


