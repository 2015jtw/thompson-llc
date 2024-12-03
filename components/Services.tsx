import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Globe, TrendingUp, GraduationCap, ShieldAlert } from 'lucide-react'

const services = [
  {
    title: "Foreign Affairs Consulting",
    description: "Strategic advice on international relations and policy development.",
    icon: Globe
  },
  {
    title: "International Development",
    description: "Sustainable development strategies and project management.",
    icon: TrendingUp
  },
  {
    title: "Diplomatic Training",
    description: "Comprehensive training programs for diplomatic corps and international organizations.",
    icon: GraduationCap
  },
  {
    title: "Crisis Management",
    description: "Expert guidance on navigating international crises and conflicts.",
    icon: ShieldAlert
  }
]

export default function Services() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex flex-col items-center text-center">
                  <service.icon className="h-8 w-8 mb-2" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

