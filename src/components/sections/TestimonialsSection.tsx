import { Card, CardContent } from "@/components/ui/card";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Full-time Trader",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote:
        "SavvyTradingHub completely changed my approach to trading. The structured curriculum and expert mentorship helped me become consistently profitable.",
    },
    {
      name: "Michael Chen",
      role: "Part-time Trader",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote:
        "As someone with a full-time job, I needed a flexible learning solution. SavvyTradingHub's on-demand courses and weekend live sessions were perfect for my schedule.",
    },
    {
      name: "Emma Rodriguez",
      role: "Financial Analyst",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      quote:
        "The technical analysis course helped me develop skills that I now use daily in my career as a financial analyst. The instructors are true experts in their field.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 md:py-32 relative bg-gradient-to-b from-amber-100 to-amber-50"
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-amber-400/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
            Success Stories
          </h2>
          <p className="text-amber-700 text-lg">
            Hear from our students who have transformed their trading journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="feature-card border-amber-200 bg-white bg-opacity-80 backdrop-blur-sm opacity-0 transition-all duration-700 transform translate-y-8"
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      loading="lazy"
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-amber-700">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-amber-800 flex-grow">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-amber-500 fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
