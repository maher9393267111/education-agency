import { previewData } from 'next/headers';
import initTranslations from "../../i18n";
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import PreviewSuspense from '../../../components/PreviwSuspense';
import Loading from '../../../components/Loading';
import PreviewBlogList from '../../../components/PreviewBlogList';
import BlogList from '../../../components/BlogList';
import SliderMain from '../../../components/slider'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../components/ui/accordion"
import Header from '../../../components/Header';
import TranslaionProvider from '../../../components/TranslationProvider'
import LanguageChangerOLD from '../../../components/languageChanger';



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

const i18nNamespaces = ["home", "common"];

const HomePage = async ({ params: { locale } }) => {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

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

<TranslaionProvider 
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >


 
<LanguageChangerOLD/>

{locale}


<Header/>
    
{/* <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=''>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion> */}




    <SliderMain data={designs}/>
     {/* <BlogList posts={posts} /> */}
     

     </TranslaionProvider>
      </div>

    
};

export default HomePage;