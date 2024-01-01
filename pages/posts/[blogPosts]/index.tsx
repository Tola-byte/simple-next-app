import { GetStaticProps, GetStaticPaths } from 'next';
import Image from 'next/image';
import { blogPosts } from '@/utils/staticData';
import { BlogInterface } from '@/types';



async function getData() {
   const data = blogPosts
    return data;
}

function ProjectPage(props: {
    specificPostData: BlogInterface,
    hasError: boolean
}) {


    if (props.hasError) {
        return <h1>Error - please try another parameter</h1>
    }



    return (
        <main className="flex bg-black flex-col m-auto items-center justify-between p-5">
            <h3 className='text-2xl font-extrabold p-4'>{ props.specificPostData?.title }</h3>
            <Image src={props.specificPostData?.imgsrc} width={600} height={0} alt={"img"} />
            <p className='w-full p-9'>{ props.specificPostData?.content}</p>
            <br />
            <a href={props.specificPostData?.link}>
                <h4 className='hover:text-red-500'>Read more here </h4>
            </a>
           
        </main>
    )
}

export default ProjectPage;


export const getStaticProps: GetStaticProps = async (blogPosts) => {
    const itemID = blogPosts.params?.blogPosts;
    const data = await getData();
    const foundItem = data.blogs.find((item: BlogInterface) => itemID === item.id);
  
    if (!foundItem) {
        return {
            props: { hasError: true },
        }
    }

    return {
        props: {
            specificPostData: foundItem
        }
    }
}
export const getStaticPaths: GetStaticPaths = async () => {
    const data = await getData();

    const pathsWithParams = data.blogs.map((star: BlogInterface) => ({ params: { blogPosts: star.id } }));

    return {
        paths: pathsWithParams,
        fallback: true,
    };
};
