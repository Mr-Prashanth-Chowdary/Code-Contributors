
export default function Title({title, className}: {title: string, className?: string}) {
  return (
    <>
     <div className={`border-l-[0.20em] border-black pl-[0.6em] text-2xl ${className}`}>
      {title}
    </div>
    </>
  )
}
