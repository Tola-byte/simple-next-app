import { blogPosts, staticData } from "@/utils/staticData";
import Link from "next/link"
import Cards  from "../components/Cards";


const Posts = () => {
    const idAndTitleArray = blogPosts.blogs.map(({ id, title, imgsrc, content, time, author }) => ({ id, title,imgsrc,time,author,content }));
   
    return (
        <main className="flex bg-black flex-col items-center justify-between p-24">
            <h3 className='text-2xl text-white font-extrabold items-start'>Blog Posts</h3>
            <div className="flex flex-wrap max-w-[1200px] justify-center gap-5 p-5">
                {idAndTitleArray.map((item) => (
                    <Link href={`/posts/${item.id}`} key={item.id} >
                        <Cards
                            title={item.title}
                            author={item.author}
                            imgsrc={item.imgsrc}
                            time={item.time}
                        />
                    </Link>
                ))}
            </div>

        </main>
    )
}

export default Posts