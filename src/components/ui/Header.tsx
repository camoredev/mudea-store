import React from 'react'
import { HomeIcon, ListOrderedIcon, LogInIcon, MenuIcon, PercentIcon, ShoppingCart } from 'lucide-react'
import { Card, CardContent } from './card'
import { Button } from './button'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from './sheet'

export default function header() {
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
            <Button variant='outline' className='mt-8 w-full justify-start gap-2'>
              <LogInIcon/>
              Fazer login
            </Button>
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