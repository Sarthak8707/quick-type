import { useRef, useState } from 'react'
//import './App.css'

const  TypingWindow = () => {
  
  const [text, setText] = useState("");
  const started = useRef(false);
  const finished = useRef(false);
  const toShow = useRef(false);
  const wpm = useRef<number>(0);
  const [_, setDone] = useState(false);
  const textRef = useRef("");
  const [timeLeft, setTimeLeft] = useState(60);
  const ghostText = `Type here to start writing. This text will fade as you type and since you are trying to improve your speed there is a lot you can do`;

  const startTimer = () => {
    if(started.current) return;
    started.current = true;

   const tickingRefcurrent = setInterval(() => {
      setTimeLeft(prev => prev-1);
    }, 1000);

    setTimeout(() => {
      finished.current = true;
      toShow.current = true;
      const countWords = (text: string) => {
        return text.trim().split(/\s+/).length;
      };
      wpm.current = countWords(textRef.current);
      clearInterval(tickingRefcurrent);
      setDone(true);

    }, 60000)
  }

  const handleOnChange = (e: any) => {
    if(finished.current) return;
    startTimer();
    setText(e.target.value);
    textRef.current =  e.target.value;

  }
  const handleOnReset = () => {
    started.current = false;
    finished.current = false;
    textRef.current = "";
    setTimeLeft(60);
    setText("")
    toShow.current = false;
    setDone(false);
  }
    
    

  return (
    <>
    {/* <h1 className='text-white'>Check</h1> */}
  <div className=" bg-neutral-900 flex flex-col items-center justify-center text-neutral-100">
    <h2 className="mb-4 text-xl">{timeLeft}</h2>

    <div className="relative w-[400px] h-[160px] font-mono">
      {/* Ghost layer */}
      <div className="absolute inset-0 p-3 text-base leading-6 whitespace-pre-wrap break-words pointer-events-none text-neutral-500">
        <span className="text-transparent">{text}</span>
        <span>{ghostText.slice(text.length)}</span>
      </div>

      {/* Actual textarea */}
      <textarea
        value={text}
        onChange={handleOnChange}
        spellCheck={false}
        className="
          absolute inset-0 z-10
          p-3 w-full h-full
          bg-transparent
          resize-none outline-none
          border border-neutral-700 rounded
          text-neutral-100
          text-base leading-6
        "
      />
    </div>

    {toShow.current && (
      <div className="mt-4 text-lg">
        WPM: {wpm.current.toString()}
      </div>
    )}

    {finished.current && (
      <button
        onClick={handleOnReset}
        className="cursor-pointer mt-6 px-4 py-2 rounded bg-neutral-700 hover:bg-neutral-600 transition"
      >
        Reset
      </button>
    )}
  </div>
</>


  )
}

export default TypingWindow
