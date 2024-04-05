import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableData } from './table/table-data'
import { TableRow } from './table/table-row'
import { ChangeEvent, useState } from 'react'
import { attendees } from '../data/attendees'
//import { formatRelative } from 'date-fns'

export function AttendeeList() {
   //const currentDate = new Date()
   const [searchValue, setSearchValue] = useState<string>('')
   const [page, setPage] = useState<number>(1)

   const totalPages = Math.ceil(attendees.length / 10)


   function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
      setSearchValue(event.target.value)
   }

   function goToNextPage(): void {
      setPage(page + 1)
   }

   function goToPreviousPage(): void {
      setPage(page - 1)
   }

   function goToLastPage(): void {
      setPage(totalPages)
   }

   function goToFirstPage(): void {
      setPage(1)
   }

   return (
      <div className='flex flex-col gap-4'>
         <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participant</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3" >
               <Search className='size-4 text-emerald-300' />
               <input value={searchValue} onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Search participant..." />
            </div>
         </div>

         <Table>
            <thead>
               <TableRow>
                  <TableHeader style={{ width: '48px' }}>
                     <input className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' type="checkbox" name="" id="" />
                  </TableHeader  >
                  <TableHeader>Code</TableHeader  >
                  <TableHeader>Participant</TableHeader  >
                  <TableHeader>Subscription Date</TableHeader  >
                  <TableHeader>Last Check-in</TableHeader  >
                  <TableHeader style={{ width: '64px' }}></TableHeader>
               </TableRow>
            </thead>
            <tbody>
               {
                  attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                     return (
                        <TableRow key={attendee.id}>
                           <TableData >
                              <input className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' type="checkbox" name="" id="" />
                           </TableData>
                           <TableData >{attendee.id}</TableData>
                           <TableData >
                              <div className='flex flex-col gap-1'>
                                 <span className='font-semibold text-white'>{attendee.name}</span>
                                 <span>{attendee.email}</span>
                              </div>
                           </TableData>
                           <TableData >{attendee.createdAt.toLocaleDateString()}</TableData>
                           <TableData >{attendee.checkedInAt.toLocaleDateString()}</TableData>
                           {/* <TableData >{formatRelative(attendee.createdAt, currentDate)}</TableData>
                           <TableData >{formatRelative(attendee.checkedInAt, currentDate)}</TableData> */}
                           <TableData >
                              <IconButton transparent>
                                 <MoreHorizontal className='size-4' />
                              </IconButton>
                           </TableData>
                        </TableRow>
                     )
                  })
               }

            </tbody>
            <tfoot>
               <tr>
                  <TableData colSpan={3}> Showing 10 of {attendees.length} items</TableData>
                  <TableData className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                     <div className='inline-flex items-center gap-8 '>
                        <span>Page {page} of {totalPages}</span>
                        <div className='flex gap-1.5'>
                           <IconButton onClick={goToFirstPage} disabled={page === 1}>
                              <ChevronsLeft className='size-4' />
                           </IconButton>
                           <IconButton onClick={goToPreviousPage}  disabled={page === 1}>
                              <ChevronLeft className='size-4' />
                           </IconButton>
                           <IconButton onClick={goToNextPage}  disabled={page === totalPages}>
                              <ChevronRight className='size-4' />
                           </IconButton>
                           <IconButton onClick={goToLastPage} disabled={page === totalPages}>
                              <ChevronsRight className='size-4' />
                           </IconButton>
                        </div>
                     </div>
                  </TableData>
               </tr>
            </tfoot>
         </Table>
      </div>
   )
}