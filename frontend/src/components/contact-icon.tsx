export function ContactIcon({kind}:{kind:string}) {
 const paths:Record<string,React.ReactNode> = {
 email:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></>,
 phone:<path d="M7 3H4a1 1 0 0 0-1 1c0 9.4 7.6 17 17 17a1 1 0 0 0 1-1v-3l-5-2-2 2a14 14 0 0 1-7-7l2-2-2-5Z"/>,
 location:<><path d="M20 10c0 6-8 11-8 11S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
 hours:<><circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 3"/></>,
 whatsapp:<><path d="M20.5 11.7a8.5 8.5 0 0 1-12.8 7.4L3 21l1.6-4.8A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="m8 7 2 3-1 1c.8 1.5 2 2.7 3.5 3.5l1-1 3 1.5c-1 4-8.8-.5-9-5.5 0-1 .5-2 1.5-2.5Z"/></>,
 };
 return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[kind]}</svg>;
}
