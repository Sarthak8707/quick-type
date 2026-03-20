import { useRef, useState } from 'react'
import axios from "axios";
import { jwtDecode } from 'jwt-decode';


type TypingWindowProps = {
  ghostText: string
}

const TypingWindow = ({ ghostText }: TypingWindowProps) => {
  const [text, setText] = useState("")
  const started = useRef(false)
  const finished = useRef(false)
  const toShow = useRef(false)
  const wpm = useRef<number>(0)
  const [, setDone] = useState(false)
  const textRef = useRef("")
  const [timeLeft, setTimeLeft] = useState(60)

  const textareaRef = useRef<HTMLTextAreaElement | null>(null)
  const ghostRef = useRef<HTMLTextAreaElement | null>(null)

  const startTimer = () => {
    if (started.current) return
    started.current = true

    const ticking = setInterval(() => {
      setTimeLeft(prev => prev - 1)
    }, 1000)

    setTimeout(() => {
      finished.current = true
      toShow.current = true

      const countWords = (t: string) =>
        t.trim().length === 0 ? 0 : t.trim().split(/\s+/).length

      wpm.current = countWords(textRef.current)

      clearInterval(ticking)
      setDone(true)
    }, 60000)
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (finished.current) return
    startTimer()
    setText(e.target.value)
    textRef.current = e.target.value
  }

  const handleScroll = () => {
    if (ghostRef.current && textareaRef.current) {
      ghostRef.current.scrollTop = textareaRef.current.scrollTop
    }
  }

  const handleOnReset = () => {
    started.current = false
    finished.current = false
    textRef.current = ""
    setTimeLeft(60)
    setText("")
    toShow.current = false
    setDone(false)
  }

  const handleOnSubmit = (wpm:number, accuracy: number, wordsID: number) => {

    // {userID, wordsID, wpm, accuracy}
    let userID;
    const token = localStorage.getItem("token");
    if(token){
      const decoded: any = jwtDecode(token);
       userID = decoded.userID;
    }

    const data = axios.post(`http://localhost:3000/sessions/users/`, {
      userID, wpm, wordsID: 999, accuracy
    });

    console.log(data);
  }

  return (
    <div className="flex flex-col items-center justify-center text-neutral-100">
      <h2 className="mb-4 text-xl">{timeLeft}</h2>

      <div className="relative w-[400px] h-[160px]">
        
        {/* ✅ Ghost */}
        <textarea
          ref={ghostRef}
          value={ghostText}
          readOnly
          className="
            absolute inset-0
            p-3 w-full h-full
            resize-none outline-none
            font-mono text-base
            leading-[24px]
            tracking-normal
            border border-neutral-700 rounded
            text-neutral-500
            bg-transparent
            overflow-hidden
            pointer-events-none
          "
        /> 

        {/* ✅ Actual */}
        <textarea
          ref={textareaRef}
          value={text}
          onChange={handleOnChange}
          onScroll={handleScroll}
          spellCheck={false}
          className="
            absolute inset-0 z-10
            p-3 w-full h-full
            bg-transparent
            resize-none outline-none
            border border-neutral-700 rounded
            text-neutral-100
            font-mono text-base
            leading-[24px]
            tracking-normal
            overflow-auto
          "
          style={{
            lineHeight: "24px",
          }}
        />
      </div>

      {toShow.current && (
        <div className="mt-4 text-lg">
          WPM: {wpm.current}
        </div>
      )}

      {finished.current && (
        <div className='flex flex-row gap-5'>
          <button
          onClick={handleOnReset}
          className="cursor-pointer mt-6 h-10 w-30 rounded bg-neutral-700 hover:bg-neutral-600 transition"
        >
          Reset
        </button>
        <button
          onClick={() => {}}
          className="cursor-pointer mt-6 h-10 w-30 rounded bg-neutral-700 hover:bg-neutral-600 transition"
        >
          Save Score
        </button>
        </div>
      )}
    </div>
  )
}

export default TypingWindow