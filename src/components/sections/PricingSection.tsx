import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      description: "Perfect for beginners starting their forex journey",
      features: [
        "Access to beginner courses",
        "Weekly market analysis",
        "Basic trading tools",
        "Community forum access",
        "Email support",
      ],
      buttonText: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$99",
      period: "per month",
      description: "Comprehensive package for serious traders",
      features: [
        "Access to all courses",
        "Daily market analysis",
        "Advanced trading tools",
        "Live trading sessions",
        "Priority support",
        "1 monthly coaching call",
      ],
      buttonText: "Get Started",
      popular: true,
    },
    {
      name: "Elite",
      price: "$199",
      period: "per month",
      description: "For traders seeking mastery and personalized guidance",
      features: [
        "Everything in Pro plan",
        "One-on-one mentorship",
        "Custom trading plan",
        "Proprietary indicators",
        "24/7 direct support",
        "Weekly coaching calls",
      ],
      buttonText: "Get Started",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-32 bg-amber-50/80">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
            Membership Plans
          </h2>
          <p className="text-amber-700 text-lg">
            Choose the plan that fits your trading journey and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`feature-card relative border-amber-200/50 opacity-0 transition-all duration-700 transform translate-y-8 ${
                plan.popular
                  ? "border-amber-600/60 shadow-lg shadow-amber-500/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-amber-50 px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardContent className="p-6 pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2 text-amber-900">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-amber-800">
                      {plan.price}
                    </span>
                    <span className="text-amber-700"> {plan.period}</span>
                  </div>
                  <p className="text-amber-700 text-sm">{plan.description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-sm text-amber-800">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={
                    plan.popular
                      ? "w-full bg-amber-600 text-amber-50 hover:bg-amber-500"
                      : "w-full bg-transparent border-amber-400 text-amber-800 hover:bg-amber-100"
                  }
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
