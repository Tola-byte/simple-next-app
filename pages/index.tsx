import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex m-auto bg-black flex-col items-center justify-between p-8">
    
      <Image src={"/images/codex.png"} className="transition-transform transform hover:scale-105 duration-300 ease-out" width={400} height={400} alt="images"/>
      <h3 className='text-2xl font-extrabold p-8'>Ade Tola</h3>
      
      <p className='w-full px-4 md:px-0 mx-auto py-9 text-base md:text-lg lg:text-xl'>
        Hello, <span className="font-extrabold">I&apos;m Tola</span>, a software engineer and a technical writer. You can contact me on Twitter.
        (This is a very simple website for a task - built with Next.js and dynamic routing included, let&apos;s gooooo)
      </p>
      <Link href={"/posts"}>
        <p className="text-base md:text-xl lg:text-2xl text-center md:text-left hover:text-red-500">
          Click here to access my blog
        </p>
      </Link>


     
    </main>
  )
}
