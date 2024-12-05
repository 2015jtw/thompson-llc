import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Globe, TrendingUp, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Service Title ",
    description: "Service Description",
    icon: Globe,
  },
  {
    title: "Service Title",
    description: "Service Description",
    icon: TrendingUp,
  },
  {
    title: "Service Title",
    description: "Service Description",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Card key={index} className="h-full flex flex-col">
              <CardHeader className="flex-grow">
                <div className="flex flex-col items-start space-y-4">
                  <service.icon className="h-12 w-12 mb-2" />
                  <div>
                    <CardTitle className="mb-2">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
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
