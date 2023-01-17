interface HabitProps{
    completed: number
}

const Habits = (props:HabitProps) => {
  return (
    <div className="bg-slate-600 w-8 h-8 text-white rounded-lg text-center flex items-center justify-center">{props.completed}</div>
  )
}

export default Habits