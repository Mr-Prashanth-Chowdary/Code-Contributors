import Divider from "./Divider";


export default function Nav() {
  return(
    <>
    <div className="flex flex-col gap-3 h-[120px] justify-center leading-5">
      <h1 className="text-5xl">OpenSource Compass</h1>
      <p className="text-[12px] font-mono  tracking-widest">INTELLIGENT PROJECT RECOMMENDATION SYSTEM</p>
    </div>
    <Divider className="my-10"/>
    </>
  )
}
