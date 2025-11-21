import './App.css'
import './Sobre.css'
import { useState, useEffect } from 'react'

function Sobre(){
        const [text, setText] = useState('')
        const toRotate = ['Seja muito bem vindo, ao meu portifolho!', 'Como posso te ajudar hoje?']
        const [loop, setLoop] = useState(0)
        const [isDeleting, setIsDeleting] = useState(false)
        const period = 100
        const [delta, setDelta] = useState(100)
        
        useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return ()=> {clearInterval(ticker)}
        
        }, [text])
        
        const toType = () => {
        
        let i = loop % toRotate.length
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)
        
        setText(updatedText);
        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true)
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false)
            setDelta(period)
            setLoop(loop+1)
        }
        }
        
    
    return(
        
        
        <>

        <h1>
            {text} <br />
            Meu nome é Felipe Alcantra e sou Desenvolvedor Front-End
        </h1>
        
        </>
    )
}

export default Sobre