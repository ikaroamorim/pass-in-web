import { ComponentProps } from "react";

interface INavLinkProps extends ComponentProps<'a'> {
   children: string;
}

export function NavLink(props: INavLinkProps) {
   return <a {...props} className='font-medium text-sm text-zinc-400' />
}