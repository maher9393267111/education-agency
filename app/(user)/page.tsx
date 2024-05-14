import { previewData } from 'next/headers';
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';
import PreviewSuspense from '../../components/PreviwSuspense';
import Loading from '../../components/Loading';
import PreviewBlogList from '../../components/PreviewBlogList';
import BlogList from '../../components/BlogList';
import SliderMain from '../../components/slider'


// Revalidate the page every 60 seconds
export const revalidate = 30;
const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const query2 = groq`
  *[_type=='design'] {
    ...,
  
  } | order(_createdAt desc)
`;


const HomePage = async () => {
  if (previewData()) {
    return (
      <PreviewSuspense fallback={<Loading />}>
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  const designs = await client.fetch(query2);
  console.log(designs)
  return <div>

    
    <SliderMain data={designs}/>
     {/* <BlogList posts={posts} /> */}
     
      </div>;
};

export default HomePage;