import { generateRangeDates } from "../utils/generateRangeBetweenDates"
import { HabitsDays } from "./HabitsDays"

const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

const summaryDates = generateRangeDates()

const minimumDatesSize = 18*7
const amountOfDays = minimumDatesSize - summaryDates.length

console.log(summaryDates)

export function Summary() {
    return (
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {weekDays.map((week, i) => {
                    return (
                        <div key={`${week}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
                            {week}
                        </div>
                    )
                })}
            </div>


            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summaryDates.map(date => {
                    return (
                    <HabitsDays
                    key={date.toString()} 
                    amount={5} 
                    completed={Math.round(Math.random() * 2)} 
                    />
                    )
                })}

                {amountOfDays > 0 && Array.from({length: amountOfDays}).map((_, i) => {
                    return (
                        <div 
                        key={i}
                        className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg opacity-40 cursor-not-allowed"></div>
                    )
                })}
            </div>
        </div>
    )
}