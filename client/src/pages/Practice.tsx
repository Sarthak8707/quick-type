import { useNavigate, useParams } from "react-router-dom"
import TypingWindow from "../components/TypingWindow"
import axios from "axios"
import { useEffect } from "react"

const Practice = () => {

  // useEffect(() => {
  //   const fetchWords = async () => {
  //     const params = useParams();
  //     const difficulty = params.difficulty;
  //     const response = await axios.get(`http://localhost:3001/words/${difficulty}`)
      
  //   }
  //   fetchWords();
  // }, [])

  const handleClick = async (difficulty: string) => {
    const navigate = useNavigate();
    navigate(`http://localhost:5173/practice/${difficulty}`);
  }

  return (
    <div className="bg-neutral-900 min-h-screen text-center">
      <h2 className="text-2xl text-white p-8">Practice by difficulty</h2>
      <div className="flex gap-2 flex-row items-center justify-center">
        
        <button className=
        "text-white px-3 py-0.5  border border-amber-50 hover:cursor-pointer"
        onClick= {() => handleClick("beginner")} >Beginner</button>

        <button className=
        "text-white border px-3 py-0.5 border-amber-50 hover:cursor-pointer"
        onClick = {() => handleClick("intermediate")} >Intermediate</button>
        
        <button className=
        "text-white border border-amber-50 px-3 py-0.5 hover:cursor-pointer"
        onClick = {() => handleClick("advanced")}>Advanced</button>
      </div>

      <div className="mt-10">
        <TypingWindow ghostText = {"random"} />
        
      </div>


    </div>
  )
}

export default Practice