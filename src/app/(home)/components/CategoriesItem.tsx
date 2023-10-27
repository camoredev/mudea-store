import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Category } from '@prisma/client'
import { HeadphonesIcon, KeyboardIcon, MonitorIcon, MouseIcon, SpeakerIcon, SquareIcon } from 'lucide-react'

interface CategoriesItemProps {
  category: Category;
}

export default function CategoriesItem({category}: CategoriesItemProps) {
  const categoryIcon = {
    mouses: <MouseIcon size={16}/>,
    keyboards: <KeyboardIcon size={16}/>,
    monitors: <MonitorIcon size={16}/>,
    headphones: <HeadphonesIcon size={16}/>,
    mousepads: <SquareIcon size={16}/>,
    speakers: <SpeakerIcon size={16}/>
  };

  console.log(category);
    
  return (
    <Badge 
      variant='outline' 
      className='flex justify-center items-center gap-2 py-3 px-4 rounded-lg'
    >
      {categoryIcon[category.slug as keyof typeof categoryIcon]}
      <span className='font-bold text-xs'>{category.name}</span>
    </Badge>
  )
}
