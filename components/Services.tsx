import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Globe, TrendingUp, GraduationCap } from "lucide-react";

const services = [
  {
    title: "Foreign Affairs Consulting",
    description:
      "Strategic advice on international relations and policy development. Our expert team provides in-depth analysis and tailored recommendations to navigate complex global landscapes.",
    icon: Globe,
  },
  {
    title: "International Development",
    description:
      "Sustainable development strategies and project management. We design and implement comprehensive programs that drive positive change and foster long-term growth in diverse communities worldwide.",
    icon: TrendingUp,
  },
  {
    title: "Diplomatic Training",
    description:
      "Comprehensive training programs for diplomatic corps and international organizations. Our courses enhance negotiation skills, cultural competence, and strategic thinking for effective global engagement.",
    icon: GraduationCap,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100">
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
