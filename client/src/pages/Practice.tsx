

const Practice = () => {

  const handleClick = (val: string) => {

  }

  return (
    <div className="bg-neutral-900 min-h-screen text-center">
      <h2 className="text-2xl text-white p-8">Practice by difficulty</h2>
      <div className="flex gap-2 flex-row items-center justify-center">
        <button className=
        "text-white px-3 py-0.5  border border-amber-50 hover:cursor-pointer"
        onClick= {handleClick("beginner")} >Beginner</button>
        <button className="text-white border px-3 py-0.5 border-amber-50 hover:cursor-pointer">Intermediate</button>
        <button className="text-white border border-amber-50 px-3 py-0.5 hover:cursor-pointer">Advanced</button>
      </div>
    </div>
  )
}

export default Practice