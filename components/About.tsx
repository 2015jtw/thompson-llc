import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden w-64 h-64">
              <Image
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Dr. Emily Thompson"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4">Dr. Emily Thompson</h3>
            <p className="text-lg mb-4">
              With over 20 years of experience in international relations and
              diplomacy, Dr. Thompson founded Thompson LLC to provide expert
              consultancy services to organizations and governments worldwide.
            </p>
            <p className="text-lg">
              Our team of seasoned professionals brings a wealth of knowledge
              and practical experience to every project, ensuring innovative
              solutions to global challenges.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
