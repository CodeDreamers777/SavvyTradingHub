import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  BarChart2,
  TrendingUp,
  DollarSign,
  Award,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("card-visible");
          }
        });
      },
      { threshold: 0.1 },
    );

    cards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      cards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 overflow-x-hidden">
      {/* Navigation - Updated with better contrast */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-amber-900 backdrop-blur-md border-b border-amber-700/60">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <BarChart2 className="h-8 w-8 text-amber-200" />
            <span className="text-xl font-bold text-amber-50">
              SavvyTradingHub
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              <a
                href="#features"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
              >
                Features
              </a>
              <a
                href="#courses"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors"
              >
                Pricing
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-amber-300 text-amber-200 hover:bg-amber-800"
              >
                Log in
              </Button>
              <Button
                size="sm"
                className="bg-amber-600 text-amber-50 hover:bg-amber-500"
              >
                Sign up
              </Button>
            </div>
          </div>

          <button
            className="md:hidden text-amber-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu - Updated for better contrast */}
        {isMenuOpen && (
          <div className="md:hidden bg-amber-900 border-b border-amber-700/60 py-4">
            <nav className="container mx-auto px-4 flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#courses"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Courses
              </a>
              <a
                href="#testimonials"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-sm font-medium text-amber-200 hover:text-amber-50 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <div className="flex flex-col gap-2 mt-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full bg-transparent border-amber-300 text-amber-200 hover:bg-amber-800"
                >
                  Log in
                </Button>
                <Button
                  size="sm"
                  className="w-full bg-amber-600 text-amber-50 hover:bg-amber-500"
                >
                  Sign up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-amber-700 to-amber-800"
      >
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-300/20 rounded-full filter blur-3xl"></div>
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-100">
                Master Forex Trading with Confidence
              </h1>
              <p className="text-xl text-amber-100 mb-8">
                Join our comprehensive trading school and learn from industry
                experts. Transform your financial future with proven strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="group bg-amber-600 text-amber-50 hover:bg-amber-500"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-amber-300 text-amber-100 hover:bg-amber-700"
                >
                  Watch Demo
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          >
            <div className="aspect-video relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-800/20 to-transparent z-10 pointer-events-none"></div>

              {/* YouTube Video Embed - Replace only the video ID to change the video */}
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/c1fwIaOUZzI"
                  title="Trading Education Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Light effect */}
              <div className="absolute -inset-px bg-gradient-to-tr from-transparent via-amber-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 md:py-32 relative bg-gradient-to-b from-amber-100 to-amber-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Why Choose SavvyTradingHub?
            </h2>
            <p className="text-amber-700 text-lg">
              Our comprehensive approach to forex education sets us apart from
              the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="h-10 w-10 text-white" />,
                title: "Expert Analysis",
                description:
                  "Learn market analysis techniques from seasoned traders with decades of experience.",
                gradient: "from-amber-700 to-amber-600",
                animation: "hover:rotate-2",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-white" />,
                title: "Advanced Charting",
                description:
                  "Master technical analysis with our state-of-the-art charting tools and indicators.",
                gradient: "from-amber-800 to-amber-600",
                animation: "hover:rotate-1 hover:scale-105",
              },
              {
                icon: <DollarSign className="h-10 w-10 text-white" />,
                title: "Risk Management",
                description:
                  "Develop disciplined risk management strategies to protect and grow your capital.",
                gradient: "from-amber-600 to-amber-500",
                animation: "hover:-rotate-1 hover:scale-105",
              },
              {
                icon: <Award className="h-10 w-10 text-white" />,
                title: "Certification",
                description:
                  "Earn industry-recognized certifications to boost your trading credentials.",
                gradient: "from-amber-700 to-amber-600",
                animation: "hover:rotate-2 hover:scale-105",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-white" />,
                title: "Live Trading Sessions",
                description:
                  "Join daily live trading sessions with our expert traders and learn in real-time.",
                gradient: "from-amber-800 to-amber-700",
                animation: "hover:-rotate-2",
              },
              {
                icon: <BarChart2 className="h-10 w-10 text-white" />,
                title: "Community Support",
                description:
                  "Connect with fellow traders in our exclusive community for ongoing support.",
                gradient: "from-amber-700 to-amber-600",
                animation: "hover:rotate-1",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className={`feature-card overflow-hidden border-none shadow-lg opacity-0 transition-all duration-700 transform translate-y-8 group hover:shadow-2xl hover:-translate-y-2 ${feature.animation} hover:animate-pulse`}
                style={{ animationDuration: "2s" }}
              >
                <div className="relative p-6 h-full flex flex-col">
                  {/* Background gradient with animation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90 group-hover:opacity-100 transition-opacity`}
                  ></div>

                  {/* Enhanced dancing background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:12px_12px] group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000"></div>

                  {/* Multiple animated background shapes */}
                  <div className="absolute top-0 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transform-gpu group-hover:scale-150 group-hover:translate-x-4 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform-gpu group-hover:scale-125 group-hover:translate-y-4 transition-all duration-500 delay-150"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 relative">
                      <div
                        className="p-3 rounded-xl bg-white/20 backdrop-blur-md inline-block shadow-lg transform group-hover:rotate-6 group-hover:scale-110 group-hover:animate-bounce transition-all duration-300"
                        style={{ animationDuration: "1.5s" }}
                      >
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:translate-x-2 transition-transform duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/90 flex-grow group-hover:translate-x-1 transition-transform duration-200 delay-100">
                      {feature.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-white/20 group-hover:border-white/40 transition-colors">
                      <Button
                        variant="ghost"
                        className="text-white hover:bg-white/20 p-0 h-auto font-medium group/btn flex items-center gap-1"
                      >
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 group-hover/btn:animate-pulse transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Our Premium Courses
            </h2>
            <p className="text-amber-700 text-lg">
              Comprehensive learning paths designed for traders at every level.
            </p>
          </div>

          <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-amber-100">
              <TabsTrigger
                value="beginner"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-amber-50"
              >
                Beginner
              </TabsTrigger>
              <TabsTrigger
                value="intermediate"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-amber-50"
              >
                Intermediate
              </TabsTrigger>
              <TabsTrigger
                value="advanced"
                className="data-[state=active]:bg-amber-600 data-[state=active]:text-amber-50"
              >
                Advanced
              </TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-4">
              <Card className="overflow-hidden bg-white">
                <div className="aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Beginner Forex Course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Forex Fundamentals
                      </h3>
                      <p className="text-white/80">
                        Master the basics of forex trading with our
                        comprehensive beginner course.
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        8 Weeks
                      </span>
                      <span className="text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                        24 Lessons
                      </span>
                    </div>
                    <span className="text-xl font-bold text-amber-900">
                      $299
                    </span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-500 text-amber-50">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-4">
              <Card className="overflow-hidden bg-white">
                <div className="aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Intermediate Forex Course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Technical Analysis Mastery
                      </h3>
                      <p className="text-white/80">
                        Develop advanced chart reading skills and technical
                        analysis techniques.
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        10 Weeks
                      </span>
                      <span className="text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                        32 Lessons
                      </span>
                    </div>
                    <span className="text-xl font-bold text-amber-900">
                      $499
                    </span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-500 text-amber-50">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4">
              <Card className="overflow-hidden bg-white">
                <div className="aspect-video relative">
                  <img
                    src="https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                    alt="Advanced Forex Course"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Professional Trading Strategies
                      </h3>
                      <p className="text-white/80">
                        Learn institutional-level trading strategies used by
                        professional traders.
                      </p>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                        12 Weeks
                      </span>
                      <span className="text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                        40 Lessons
                      </span>
                    </div>
                    <span className="text-xl font-bold text-amber-900">
                      $799
                    </span>
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-500 text-amber-50">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
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
            {[
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
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="feature-card border-amber-200 bg-white bg-opacity-80 backdrop-blur-sm opacity-0 transition-all duration-700 transform translate-y-8"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-6 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-amber-900">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-amber-700">
                        {testimonial.role}
                      </p>
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

      {/* Pricing Section - Updated to match theme */}
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
            {[
              {
                name: "Basic",
                price: "$49",
                period: "per month",
                description:
                  "Perfect for beginners starting their forex journey",
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
                description:
                  "For traders seeking mastery and personalized guidance",
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
            ].map((plan, index) => (
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
                        <span className="text-sm text-amber-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
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

      {/* CTA Section - Updated to match theme */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-amber-700 mb-8">
              Join thousands of successful traders who have elevated their
              skills with SavvyTradingHub.
            </p>
            <Button
              size="lg"
              className="group bg-amber-600 text-amber-50 hover:bg-amber-500"
            >
              Start Your Journey Today
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer - Updated to match theme */}
      <footer className="bg-amber-100 py-12 border-t border-amber-200/60">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BarChart2 className="h-6 w-6 text-amber-600" />
                <span className="text-lg font-bold text-amber-900">
                  SavvyTradingHub
                </span>
              </div>
              <p className="text-amber-700 text-sm mb-4">
                Empowering traders with knowledge and skills since 2015.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Guides
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Webinars
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Market Analysis
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Economic Calendar
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Partners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Risk Disclosure
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-amber-700 hover:text-amber-900 transition-colors text-sm"
                  >
                    Refund Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-amber-200/60 pt-8 text-center text-sm text-amber-700">
            <p>
              &copy; {new Date().getFullYear()} SavvyTradingHub. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
