import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import background from '../assets/background.jpg'

export default function Home() {

  return (
    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image
          src={background}
          layout="fill"
          objectFit='cover'
        />
      </div>
      <Navbar />
      <div className='divv'>
        <h1 className='home'>A gang of <br />
          international <br />
          SEO talent 
        </h1>
        <br />
        <p>We create great jobs for great people. All thanks to SEO.</p>
      </div>
    </>

  )
}
