import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../../lib/sanity.client';
import urlFor from '../../../../../lib/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../../components/RichTextComponents';
 import { Post } from '../../../../../typings';

type Props = {
  params: {
    slug: string;
  };
};




export const revalidate = 30; // revalidate this page every 30 seconds


// Static Site Generation
export async function generateStaticParams(){
  const query = groq`
      *[_type == "post"]
      {
          slug
      }
  `;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map(slug => slug?.slug.current)

  return slugRoutes?.map(slug => ({
      slug
  }))
}







const PostSingle = async ({ params: { slug } }: Props) => {
  const query = groq`
    //all the post data and also slug field (on studio) matches
    *[_type=='post' && slug.current == $slug][0]
    {
        ...,      // all the fields
        author->, //author reference with {}
        categories[]-> // categories reference with []
    }
    `;

  // "Post" type ni "typings.d.ts"-d bga uchras automataar duudagdana.
  const post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28'>
      <section className='space-y-2 border border-[#f7ab0a] text-white'>
        <div className='relative min-h-56 flex flex-col nmd:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-xs p-10'>
            <Image
              className='object-cover object-center mx-auto'
              src={urlFor(post?.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-[#f7ab0a] w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'> {post.title}</h1>

                <p>
                  {/* December 16, 2022 */}
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              {/* Avatar */}
              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={40}
                  width={40}
                />

                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div>
              <h2 className='italic pt-10'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>



<div>
       {/* BLOG BODY */}
       <PortableText
                value={post.body}
                components={RichTextComponents}
            />
</div>


    </article>
  );
};

export default PostSingle;