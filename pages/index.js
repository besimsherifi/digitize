import { useRouter } from 'next/router'
import Navbar from './navbar'
import en from '../public/locales/en/en.json'
import al from '../public/locales/al/al.json'
import mk from '../public/locales/mk/mk.json'

export default function Home() {

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : "mk" ? mk : al;

  return (
    <>
      <Navbar />
      {/* <h1>{t.ABOUT}</h1> */}
    </>
  )
}
