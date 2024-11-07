import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

function CategorySearch() {
  return (
    <div className='mb-10 flex items-center flex-col gap-2'>
        <h2 className='font-bold text-4xl tracking-wide'>
            Search <span className='text-primary'>Doctors</span>
        </h2>
        <h2 className='text-gray-500 text-xl font-bold'>Search your doctors and book Appointment in clicks</h2>

        <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search your doctor" />
        <Button type="submit">
            <Search className='h-4' /> Search
        </Button>
    </div>

    </div>
  )
}

export default CategorySearch