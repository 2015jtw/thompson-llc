import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import {
  Globe,
  Handshake,
  Leaf,
  Building,
  ChartLine,
  User,
} from "lucide-react";
import { PortableText } from "@portabletext/react";
import { client } from "../../sanity/lib/client";
import { SERVICES_QUERY } from "../../sanity/lib/queries";
import { SERVICES_QUERYResult } from "@/sanity.types";

const icon_map = {
  handshake: Handshake,
  leaf: Leaf,
  building: Building,
  user: User,
  "chart-line": ChartLine,
  globe: Globe,
};

export default async function Services() {
  const services: SERVICES_QUERYResult = await client.fetch(SERVICES_QUERY);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon ? icon_map[service.icon] : null;
            return (
              <Card key={index} className="h-full flex flex-col">
                <CardHeader className="flex-grow">
                  <div className="flex flex-col items-start space-y-4">
                    {Icon && <Icon className="h-12 w-12 mb-2" />}
                    <div>
                      <CardTitle className="mb-2">{service.title}</CardTitle>
                      <CardDescription>
                        {service.body && <PortableText value={service.body} />}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
