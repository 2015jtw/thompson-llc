import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <div className="rounded-full overflow-hidden w-72 h-72">
              <Image
                src="/images/carrie-bio-pic.jpg"
                alt="Dr. Emily Thompson"
                width={256}
                height={256}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">
              Carrie Thompson
            </h3>
            <p className="text-md mb-4">
              Thompson Environmental Consulting, LLC is an advisory service
              focused on guiding national and municipal leaders to develop low
              carbon economic and urban development strategies, with the private
              sector as a key driver of change. It is our goal to assist you in
              developing a set of policies and plans that best steer your
              countries, communities and businesses toward a more sustainable
              and prosperous future.{" "}
            </p>
            <p className="text-md mb-4">
              Thompson Environmental Consulting, LLC, founded in 2022, is a
              specialized advisory firm that supports international and
              municipal development that increasingly reduces greenhouse gas
              emissions and moves countries and cities closer to a circular
              economy approach in their solid waste management systems. Our
              principal, Carrie Thompson, served for over three decades as a
              senior leader in international development with an environmental
              focus, as well as on citizen advisory commissions and boards of
              organizations aimed at addressing global climate change, energy
              efficiency and natural resource protection.
            </p>
            <p className="text-md">
              Thompson Environmental Consulting, LLC maintains a network of
              subject matter experts across a wide spectrum of domains related
              to international development and environmental protection, as well
              as private sector development. We strive to provide appropriate
              recommendations for resources that may be required to better
              prepare your country, community or business, regardless of the
              current environment, to pursue a more sustainable economic growth
              trajectory for your citizens and clientele. Please feel free to
              reach out for a preliminary consultation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
