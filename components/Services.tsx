import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
// import { Globe, TrendingUp, GraduationCap } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "../sanity/lib/client";
import { SERVICES_QUERY } from "../sanity/lib/queries";

// const services = [
//   {
//     title: "Sustainable economic growth planning",
//     description: "Service Description",
//     icon: Globe,
//   },
//   {
//     title: "Smart urban development strategy formulation",
//     description: "Service Description",
//     icon: TrendingUp,
//   },
//   {
//     title: "Sustainable private sector development strategies",
//     description: "Service Description",
//     icon: GraduationCap,
//   },
//   {
//     title: "Linkage with international development agencies and programs",
//     description: "Service Description",
//     icon: Globe,
//   },
//   {
//     title: "Leadership advisory and mentorship",
//     description: "Service Description",
//     icon: TrendingUp,
//   },
//   {
//     title: "Assessments and analyses",
//     description: "Service Description",
//     icon: GraduationCap,
//   },
// ];

export default async function Services() {
  const services = await client.fetch(SERVICES_QUERY);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex flex-col items-start space-y-4">
                  {/* <service.icon className="h-12 w-12 mb-2" /> */}
                  <div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription>
                      <PortableText value={service.body} />
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
