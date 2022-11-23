import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import background from '../assets/bck2.jpg'
import seo from '../assets/seo.jpg'
import Footer from '../components/footer/footer'

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
        alt="img"
          src={background}
          // layout="fill"
          objectFit='cover'
        />
      </div>
      <Navbar />
      <div className='divv mb-15'>
        <h1 className='home'>A gang of <br />
          international <br />
          SEO talent
        </h1>
        <br />
        <p>We create great jobs for great people. All thanks to SEO.</p>
      </div>


      <div className='py-60 flex justify-evenly  '>
        <div className='my-10'>
        <h1>Who are we?</h1><br/>
        <h2 className='text-center lg:text-left heading mb-6 h2 '>A lean, mean SEO machine.</h2>
          <p className='lg:max-w-520'>Digitize is an SEO company that creates and ranks websites<br/> in various niches. Why? Because we genuinely love SEO. We are <br/>
          driven by technical curiosity and at this point, a personal <br/>
           vendetta against Google and its ever-changing algorithm. We <br/>
           handpick challenging niches, continuously test new practices, <br/>and have a great time doing so.</p>
           <button  type="button" className="my-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Read More</button>
        </div>
        
          <Image src={seo} alt="img" width="400"></Image>
      </div>

      


      <div className='py-60 flex justify-evenly bg-slate-300 '>
        <div className='my-10'>
        <h1>Optimization
          and SEO mojo,
          baby.</h1>
          <p className='lg:max-w-520'>SEO is literally the only thing we do, so it would be a real shame if<br/> we weren’t able to put our money where our mouth is.<br/> That’s why we have recruited an army of 100 SEO experts.<br/> Together, we research, design, develop,<br/> and manage over 100+ websites. And how do we do that?<br/> Well, that’s a secret, one we’ll be happy to share!</p>
        </div>
        
          <Image alt="img" src={seo} width="220"></Image>
      </div>
      <Footer />
    </>

  )
}
