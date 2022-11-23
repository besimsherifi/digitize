import Image from 'next/image'
import logo from '../../assets/digtransparent.png'
import { useRouter } from 'next/router'
import en from '../../public/locales/en/en.json'
import al from '../../public/locales/al/al.json'
import mk from '../../public/locales/mk/mk.json'
import Link from 'next/link'

export default function Navbar() {

  const router = useRouter();
  const { locale } = router;
  let t;
  if (locale === "en") {
    t = en
  } else if (locale === "mk") {
    t = mk
  } else {
    t = al
  }

  let filteredLocales = router.locales.filter(name => !name.includes(router.locale)).map(filteredName => filteredName);




  return (
    <>
      <nav className=" px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto" bis_skin_checked="1">
          <a className="flex items-center">
            <Image src={logo} width="120" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Digitize</span> */}
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default" bis_skin_checked="1">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
              <li>
                <p className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" onClick={() => router.push('/')}>{t.HOME}</p>
              </li>
              <li>
                <p className="block py-2 pr-4 pl-3 text-white-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=> router.push('/about')}>{t.ABOUT}</p>
              </li>
              <li>
                <p className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=> router.push('/services')}>{t.SERVICES}</p>
              </li>
              <li>
                <p className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" onClick={()=> router.push('/contact')}>{t.CONTACT}</p>
              </li>
              <li>
                <ul>
                  <div className='delang'>{locale}
                    {filteredLocales.map((locale) => (
                      <li key={locale}>
                        <Link href={router.asPath} locale={locale}>
                          <span className='show-on-hover'>{locale}</span>
                        </Link>
                      </li>
                    ))}
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  )
}