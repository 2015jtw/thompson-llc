import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";

const testimonials = [
  {
    name: "John Doe",
    role: "UN Ambassador",
    content:
      "Thompson LLC's expertise was instrumental in our successful diplomatic negotiations.",
  },
  {
    name: "Jane Smith",
    role: "NGO Director",
    content:
      "Their international development strategies have significantly improved our project outcomes.",
  },
  {
    name: "Alex Johnson",
    role: "Government Advisor",
    content:
      "The insights provided by Thompson LLC have been invaluable to our foreign policy decisions.",
  },
];

export default function SocialProof() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Clients Say
        </h2>
        <Carousel className="w-full max-w-sm mx-auto">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="h-[400px]">
                <div className="p-4 flex flex-col items-center justify-center h-full">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarImage
                      src={`https://i.pravatar.cc/150?u=${testimonial.name}`}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <blockquote className="space-y-2 text-center">
                    <p className="text-lg">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <footer className="text-sm">
                      <cite className="font-medium">{testimonial.name}</cite>
                      <span className="block text-muted-foreground">
                        {testimonial.role}
                      </span>
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
  );
}
