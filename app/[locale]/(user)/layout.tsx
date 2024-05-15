import '../../../styles/globals.css';
import Banner from '../../../components/Banner';
import Header from '../../../components/Header';
import LanguageChangerOLD from '../../../components/languageChanger';
import TranslationsProvider from '../../../components/TranslationProvider';
import initTranslations from '../../i18n';
import i18nConfig from '../../../i18nConfig';
const i18nNamespaces = ["home", "common"];

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}



export default async function RootLayout({ children, params: { locale } }
) {

  const { t, resources } = await initTranslations(locale, i18nNamespaces);


  return (
    <html>
                  <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
                />
                <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
            </head>


      <body className='font-inter max-w-7xl mx-auto'>

 
      <TranslationsProvider
        resources={resources}
        locale={locale}
        namespaces={i18nNamespaces}
      >


 
<LanguageChangerOLD/>


        {/* <LanguageChangerOLD/> */}
        {/* <Header /> */}
        <Banner />

        <>{children}</>


     </TranslationsProvider>



      </body>
      
    </html>
  )
}
