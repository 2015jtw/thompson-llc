import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

const testimonials = [
  {
    name: "John Doe",
    role: "UN Ambassador",
    content: "Thompson LLC's expertise was instrumental in our successful diplomatic negotiations."
  },
  {
    name: "Jane Smith",
    role: "NGO Director",
    content: "Their international development strategies have significantly improved our project outcomes."
  },
  {
    name: "Alex Johnson",
    role: "Government Advisor",
    content: "The insights provided by Thompson LLC have been invaluable to our foreign policy decisions."
  }
]

export default function SocialProof() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <Carousel className="w-full max-w-xs mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-4">
                  <blockquote className="space-y-2">
                    <p className="text-lg">&ldquo;{testimonial.content}&rdquo;</p>
                    <footer className="text-sm">
                      <cite className="font-medium">{testimonial.name}</cite>
                      <span className="block text-muted-foreground">{testimonial.role}</span>
                    </footer>
                  </blockquote>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

