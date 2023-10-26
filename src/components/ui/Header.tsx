'use client'

import React from 'react'
import { HomeIcon, ListOrderedIcon, LogInIcon, LogOutIcon, MenuIcon, PercentIcon, ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'
import { signIn, signOut,  useSession } from 'next-auth/react'

//  criar um arquivo index para fazer exportação unica de component
import { Card, CardContent } from './card'
import { Button } from './button'
import { Avatar } from './avatar'
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Separator } from './separator'

export default function Header() {
  
  const {status, data} = useSession()


  async function handleLoginCLick() {
    await signIn()
  }

  async function handleLogOutCLick() {
    await signOut()
  }

  return (
    <Card className='flex justify-between p-[1.87rem]'>
      <CardContent className='flex justify-between items-center w-full'>

        <Sheet>
          <SheetTrigger>
            <Button size='icon' variant='outline'>
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <SheetHeader className='flex text-center text-lg font-semibold'>
              Menu
            </SheetHeader>
            {status === 'authenticated' &&
            <div className='flex gap-2 justify-center items-center mt-4'>
              <Avatar>
                <AvatarFallback>
                  user
                </AvatarFallback>
                <AvatarImage src={`${data?.user?.image }`}/>
              </Avatar>
              <div  className='flex flex-col gap-1'>
                <p>{data?.user?.name }</p>
                <span className='text-sm opacity-75'>Boas compras!!!</span>
              </div>
              <Button onClick={ handleLogOutCLick } variant='outline' className='flex ml-16 h-full justify-center items-center gap-2'>
                <LogOutIcon/>
                Sair
              </Button>  
            </div>
            }

            <Separator className='my-4'/>
            {status === 'unauthenticated' &&
            <Button onClick={ handleLoginCLick } variant='outline' className='mt-8 w-full justify-start gap-2'>
              <LogInIcon/>
              Fazer login
            </Button>            
            }
            
            <div className=' flex flex-col mt-4 gap-1'>
            <Button variant='ghost' className='w-full justify-start gap-2'>
                <HomeIcon size={16}/>
                Inicio
              </Button>
              <Button variant='ghost' className='w-full justify-start gap-2'>
                <PercentIcon size={16}/>
                Ofertas
              </Button>
              <Button variant='ghost' className='w-full justify-start gap-2'>
                <ListOrderedIcon size={16}/>
                Catalogo
              </Button>
            </div>
          </SheetContent>
        </Sheet>

        <h1 className='font-bold text-lg'><span className='uppercase text-primary'>Mudea</span> Store</h1>

        <Button size='icon' variant='outline'>
          <ShoppingCart />
        </Button>
      </CardContent>
    </Card>
  )
}