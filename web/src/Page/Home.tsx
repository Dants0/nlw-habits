import '../styles/global.css'
import '../lib/dayjs.ts'

import { Header } from '../components/Header'
import { Summary } from '../components/Summary'

export const Home = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='w-full max-w-5xl px-6 flex flex-col gap-16'>
                <Header/>
                <Summary/>
            </div>
        </div>
    )
}
