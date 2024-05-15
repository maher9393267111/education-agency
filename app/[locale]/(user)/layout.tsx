import '../../../styles/globals.css';
import Banner from '../../../components/Banner';
import Header from '../../../components/Header';
import LanguageChangerOLD from '../../../components/languageChanger';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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

 
        {/* <LanguageChangerOLD/> */}
        {/* <Header /> */}
        <Banner />

        <>{children}</>


     



      </body>
      
    </html>
  )
}
