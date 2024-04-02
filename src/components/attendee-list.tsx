import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'

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

         <div className='border border-white/10 rounded-lg'>
            <table className='w-full '>
               <thead>
                  <tr className='border-b border-white/10 hover:bg-white/5'>
                     <th style={{ width: '48px' }} className='py-3 px-4 text-sm font-semibold text-left'>
                        <input className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' type="checkbox" name="" id="" />
                     </th>
                     <th className='py-3 px-4 text-sm font-semibold text-left'>
                        Code
                     </th>
                     <th className='py-3 px-4 text-sm font-semibold text-left'>
                        Participant
                     </th>
                     <th className='py-3 px-4 text-sm font-semibold text-left'>
                        Subscription Date
                     </th>
                     <th className='py-3 px-4 text-sm font-semibold text-left'>
                        Last Check-in
                     </th>
                     <th style={{ width: '64px' }}></th>
                  </tr>
               </thead>
               <tbody>
                  {
                     //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(() => {
                     Array.from({ length: 10 }).map((_, index) => {
                        return (
                           <tr key={index} className='border-b border-white/10 hover:bg-white/5'>
                              <td className='py-3 px-4 text-sm text-zinc-300'>
                                 <input className='size-4 bg-black/20 rounded border border-white/10 checked:bg-orange-400' type="checkbox" name="" id="" />
                              </td>
                              <td className='py-3 px-4 text-sm text-zinc-300'>123456</td>
                              <td className='py-3 px-4 text-sm text-zinc-300'>
                                 <div className='flex flex-col gap-1'>
                                    <span className='font-semibold text-white'>Ikaro Amorim</span>
                                    <span>ikaro.amorim@gmail.com</span>
                                 </div>
                              </td>
                              <td className='py-3 px-4 text-sm text-zinc-300'> 7 days ago</td>
                              <td className='py-3 px-4 text-sm text-zinc-300'>3 days ago</td>
                              <td className='py-3 px-4 text-sm text-zinc-300'>
                                 <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                                    <MoreHorizontal className='size-4' />
                                 </button>
                              </td>
                           </tr>
                        )
                     })
                  }

               </tbody>
               <tfoot>
                  <tr>
                     <td className='py-3 px-4 text-sm text-zinc-300' colSpan={3}>
                        Showing 10 of 228 items
                     </td>
                     <td className='py-3 px-4 text-sm text-zinc-300 text-right' colSpan={3}>
                        <div className='inline-flex items-center gap-8 '>
                           <span>Page 1 of 23</span>
                           <div className='flex gap-1.5'>
                              <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                 <ChevronsLeft className='size-4' />
                              </button>
                              <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                 <ChevronLeft className='size-4' />
                              </button>
                              <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                 <ChevronRight className='size-4' />
                              </button>
                              <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                 <ChevronsRight className='size-4' />
                              </button>
                           </div>
                        </div>
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>
      </div>
   )
}