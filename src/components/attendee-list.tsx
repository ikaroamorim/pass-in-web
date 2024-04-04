import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableData } from './table/table-data'
import { TableRow } from './table/table-row'

export function AttendeeList() {
   return (
      <div className='flex flex-col gap-4'>
         <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participant</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3" >
               <Search className='size-4 text-emerald-300' />
               <input className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm" placeholder="Search participant..." />
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
                  //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                  Array.from({ length: 10 }).map((_, index) => {
                     return (
                        <TableRow key={index}>
                           <TableData >
                              <input className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' type="checkbox" name="" id="" />
                           </TableData>
                           <TableData >123456</TableData>
                           <TableData >
                              <div className='flex flex-col gap-1'>
                                 <span className='font-semibold text-white'>Ikaro Amorim</span>
                                 <span>ikaro.amorim@gmail.com</span>
                              </div>
                           </TableData>
                           <TableData > 7 days ago</TableData>
                           <TableData >3 days ago</TableData>
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
                  <TableData colSpan={3}> Showing 10 of 228 items</TableData>
                  <TableData className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                     <div className='inline-flex items-center gap-8 '>
                        <span>Page 1 of 23</span>
                        <div className='flex gap-1.5'>
                           <IconButton>
                              <ChevronsLeft className='size-4' />
                           </IconButton>
                           <IconButton>
                              <ChevronLeft className='size-4' />
                           </IconButton>
                           <IconButton>
                              <ChevronRight className='size-4' />
                           </IconButton>
                           <IconButton>
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