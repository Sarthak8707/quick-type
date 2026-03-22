import { useNavigate, useParams } from "react-router-dom"
import TypingWindow from "../components/TypingWindow"
import axios from "axios"
import { useEffect, useState } from "react"

const Practice = () => {

  const params = useParams();
  const difficulty = params.difficulty;
  const navigate = useNavigate();
  const [text, setText] = useState("");

  useEffect(() => {
    const fetchWords = async () => {
     
      const response = await axios.get(`http://localhost:3000/words/${difficulty}`);
      console.log(response.data[0].words);
      setText(response.data[0].words)
      
    }
    fetchWords();
  }, [difficulty])

  const handleClick = async (difficulty: string) => {
    navigate(`/practice/${difficulty}`);
  }

  return (
    <div className="bg-neutral-900 min-h-screen text-center">
      <h2 className="text-2xl text-white p-8">Practice by Difficulty</h2>
      <div className="flex gap-2 flex-row items-center justify-center">
        
        <button className=
        "text-white px-3 py-0.5  border border-amber-50 hover:cursor-pointer"
        onClick= {() => handleClick("easy")} >Beginner</button>

        <button className=
        "text-white border px-3 py-0.5 border-amber-50 hover:cursor-pointer"
        onClick = {() => handleClick("medium")} >Intermediate</button>
        
        <button className=
        "text-white border border-amber-50 px-3 py-0.5 hover:cursor-pointer"
        onClick = {() => handleClick("hard")}>Advanced</button>
      </div>

      <div className="mt-10">
        <TypingWindow ghostText = {text} wordsID= {2} />

      </div>


    </div>
  )
}

export default Practice