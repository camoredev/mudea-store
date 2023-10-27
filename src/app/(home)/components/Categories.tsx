import { prismaClient } from '@/lib/prisma'
import CategoriesItem from './CategoriesItem';

export default async function Categories() {
  const categories = await prismaClient.category.findMany({});

  return (
    <div className='flex justify-center gap-3'>
      {categories.map((category) => (
        <CategoriesItem
          key={category.id}
          category={category}
        />
      ))}    
    </div>
  )
}
