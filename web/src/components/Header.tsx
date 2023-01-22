import * as Dialog from '@radix-ui/react-dialog'
import { Plus, X } from 'phosphor-react'
import logo from '../assets/logo.svg'
import { FormHabit } from './FormHabit'

export function Header() {



    return (
        <div className='w-full max-w-3xl mx-auto flex items-center justify-between'>
            <img src={logo} alt="habits_logo" />

            <Dialog.Root>
                <Dialog.Trigger
                    type='button'
                    className='border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition duration-700 ease-in-out'
                >
                    <Plus size={20} className='text-violet-500' />
                    Novo Hábito
                </Dialog.Trigger>

                <Dialog.Portal>
                    <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0' />
                    <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc'>
                            <X size={24} aria-label="Fechar" className='hover:text-white transition duration-700 ease-in-out' />
                        </Dialog.Close>

                        <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                            Criar Hábito
                        </Dialog.Title>


                        <FormHabit/>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

        </div>
    )
}