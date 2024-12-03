import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image 
              src="/founder-image.jpg" 
              alt="Thompson LLC Founder" 
              width={500} 
              height={500} 
              className="rounded-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <h3 className="text-xl font-semibold mb-2">Dr. Emily Thompson</h3>
            <p className="text-lg mb-4">
              With over 20 years of experience in international relations and diplomacy, Dr. Thompson founded Thompson LLC to provide expert consultancy services to organizations and governments worldwide.
            </p>
            <p className="text-lg">
              Our team of seasoned professionals brings a wealth of knowledge and practical experience to every project, ensuring innovative solutions to global challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

