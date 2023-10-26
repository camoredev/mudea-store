import React from 'react'
import { MenuIcon, ShoppingCart } from 'lucide-react'
import { Card, CardContent } from './card'
import { Button } from './button'

export default function header() {
  return (
    <Card className='flex justify-between p-[1.87rem]'>
      <CardContent className='flex justify-between items-center w-full'>
        <Button size='icon' variant='outline'>
          <MenuIcon />
        </Button>

        <h1 className='font-bold text-lg'><span className='uppercase text-primary'>Mudea</span> Store</h1>

        <Button size='icon' variant='outline'>
          <ShoppingCart />
        </Button>
      </CardContent>
    </Card>
  )
}