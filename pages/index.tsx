import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex m-auto bg-black flex-col items-center justify-between p-24">
    
      <Image src={"/images/codex.png"} className="transition-transform transform hover:scale-105 duration-300 ease-out" width={600} height={400} alt="images"/>
      <h3 className='text-2xl font-extrabold p-8'>Ade Tola</h3>
      
      <p className='w-full max-w-2xl p-9 text-center align-baseline'>
        Hello, <span className="font-extrabold">I'm Tola</span> , a software engineer and a technical writer. You can contact me on Twitter.

        (This is a very simple website for a task- built with NextJs and dynamic routing included, let's gooooo)
      </p>
      <Link href={"/posts"}>
       <p className="text-xl hover:text-red-500">Click here to access my blog</p>
      </Link>
     
    </main>
  )
}
