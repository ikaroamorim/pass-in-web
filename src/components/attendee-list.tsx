import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'
import { IconButton } from './icon-button'
import { Table } from './table/table'
import { TableHeader } from './table/table-header'
import { TableData } from './table/table-data'
import { TableRow } from './table/table-row'
import { ChangeEvent, useEffect, useState } from 'react'

interface IAttendee {
   id: string
   name: string
   email: string
   checkedInAt: string | null
   createdAt: string
}

export function AttendeeList() {
   const [attendees, setAttendees] = useState<IAttendee[]>([])
   const [total, setTotal] = useState<number>(0)
   const [searchValue, setSearchValue] = useState<string>(()=>{
      const url = new URL(window.location.toString())

      if( url.searchParams.has('query')){
         return url.searchParams.get('query')??''
      }else{
         return ''
      }

   })
   const [page, setPage] = useState<number>(()=>{
      const url = new URL(window.location.toString())

      if( url.searchParams.has('pageIndex')){
         return Number(url.searchParams.get('pageIndex'))
      }else{
         return 1
      }
   })
   

   const totalPages = Math.ceil(total / 10)

   useEffect(() => {
      const url = new URL('http://localhost:3333/events/9e9bd979-9d10-4915-b339-3786b1634f33/attendees')

      url.searchParams.set('pageIndex', String(page - 1))

      if (searchValue.length > 0) {
         url.searchParams.set('query', searchValue)
      }

      fetch(url)
         .then(response => response.json())
         .then(data => {
            console.log(data)
            setAttendees(data.attendees)
            setTotal(data.total)
         })
   }, [page, searchValue])

   function setCurrentSearch(search: string){
      const url = new URL(window.location.toString())

      url.searchParams.set('query', search)

      window.history.pushState({}, '', url)
      setSearchValue(search)
   }

   function setCurrentPage(page: number) {
      const url = new URL(window.location.toString())

      url.searchParams.set('pageIndex', String(page))

      window.history.pushState({}, '', url)
      setPage(page)
   }


   function onSearchInputChange(event: ChangeEvent<HTMLInputElement>) {
      setCurrentSearch(event.target.value)
      setCurrentPage(1)
   }

   function goToNextPage(): void {
      setCurrentPage(page + 1)
   }

   function goToPreviousPage(): void {
      setCurrentPage(page - 1)
   }

   function goToLastPage(): void {
      setCurrentPage(totalPages)
   }

   function goToFirstPage(): void {
      setCurrentPage(1)
   }

   return (
      <div className='flex flex-col gap-4'>
         <div className="flex gap-3 items-center">
            <h1 className="text-2xl font-bold">Participant</h1>
            <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3" >
               <Search className='size-4 text-emerald-300' />
               <input value={searchValue} onChange={onSearchInputChange} className="bg-transparent flex-1 outline-none h-auto border-0 p-0 text-sm focus:ring-0" placeholder="Search participant..." />
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
                  attendees.map((attendee) => {
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
                           <TableData >{(new Date(attendee.createdAt)).toLocaleDateString()}</TableData>
                           <TableData >{
                              !attendee.checkedInAt
                                 ? <span className='text-zinc-400'>No ckeck-in yet</span>
                                 : (new Date(attendee.checkedInAt)).toLocaleDateString()}
                           </TableData>
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
                  <TableData colSpan={3}> Showing {attendees.length} of {total} items</TableData>
                  <TableData className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                     <div className='inline-flex items-center gap-8 '>
                        <span>Page {page} of {totalPages}</span>
                        <div className='flex gap-1.5'>
                           <IconButton onClick={goToFirstPage} disabled={page === 1}>
                              <ChevronsLeft className='size-4' />
                           </IconButton>
                           <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                              <ChevronLeft className='size-4' />
                           </IconButton>
                           <IconButton onClick={goToNextPage} disabled={page === totalPages}>
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