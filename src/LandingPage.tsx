"use client";

import { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  BarChart2,
  TrendingUp,
  DollarSign,
  Award,
  Play,
  Star,
  Check,
  Facebook,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, useScroll, useTransform } from "framer-motion";
import FeatureModal from "./components/modals/FeatureModal";

// Define the feature data with detailed content
const features = [
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: "Expert Analysis",
    description:
      "Learn market analysis techniques from seasoned traders with decades of experience.",
    gradient: "from-amber-700 to-amber-600",
    animation: "hover:rotate-2",
    detailedContent: {
      overview:
        "Our Expert Analysis feature provides advanced market insights from professional traders with over 20 years of combined experience in forex markets across all major currency pairs.",
      benefits: [
        "Learn to identify key market patterns and trends",
        "Understand fundamental analysis and economic indicators",
        "Develop a systematic approach to market analysis",
        "Receive weekly expert analysis reports on major pairs",
      ],
      howItWorks:
        "Our expert traders break down complex market scenarios into easy-to-understand lessons. You'll have access to daily market briefs, weekly analysis sessions, and monthly strategy reviews to continuously sharpen your analytical skills.",
      testimonial: {
        quote:
          "The expert analysis sessions completely changed how I view the market. I can now spot opportunities I would have missed before.",
        author: "Sarah Johnson",
        role: "Full-time Forex Trader",
      },
    },
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-white" />,
    title: "Advanced Charting",
    description:
      "Master technical analysis with our state-of-the-art charting tools and indicators.",
    gradient: "from-amber-800 to-amber-600",
    animation: "hover:rotate-1 hover:scale-105",
    detailedContent: {
      overview:
        "Our Advanced Charting tools give you professional-grade technical analysis capabilities with customizable indicators, multi-timeframe analysis, and pattern recognition technology.",
      benefits: [
        "Access to over 100+ technical indicators and oscillators",
        "Custom indicator builder for personalized analysis",
        "Multiple chart layouts and saving capabilities",
        "Pattern recognition and alert systems",
      ],
      howItWorks:
        "Our platform integrates with leading charting providers while adding proprietary indicators developed by our team. Interactive tutorials guide you through setting up your charts and interpreting various signals.",
      testimonial: {
        quote:
          "The custom indicators available through SavvyTradingHub gave me an edge I couldn't find anywhere else. Now I can spot reversals before they happen.",
        author: "Michael Chen",
        role: "Institutional Trader",
      },
    },
  },
  {
    icon: <DollarSign className="h-10 w-10 text-white" />,
    title: "Risk Management",
    description:
      "Develop disciplined risk management strategies to protect and grow your capital.",
    gradient: "from-amber-600 to-amber-500",
    animation: "hover:-rotate-1 hover:scale-105",
    detailedContent: {
      overview:
        "Our Risk Management module teaches you how to preserve capital while maximizing returns through proven risk control techniques used by professional traders.",
      benefits: [
        "Learn position sizing and risk-to-reward calculations",
        "Develop a personalized risk management plan",
        "Master stop-loss and take-profit strategies",
        "Understand portfolio diversification principles",
      ],
      howItWorks:
        "Through interactive simulations and real-world case studies, you'll learn how to apply risk management principles to your trading. Our risk calculator tools help you determine optimal position sizes based on your account size and risk tolerance.",
      testimonial: {
        quote:
          "The risk management strategies I learned saved my account during market volatility. I now trade with confidence knowing my risk is always controlled.",
        author: "David Williams",
        role: "Swing Trader",
      },
    },
  },
  {
    icon: <Award className="h-10 w-10 text-white" />,
    title: "Certification",
    description:
      "Earn industry-recognized certifications to boost your trading credentials.",
    gradient: "from-amber-700 to-amber-600",
    animation: "hover:rotate-2 hover:scale-105",
    detailedContent: {
      overview:
        "Our certification program provides you with recognized credentials that demonstrate your trading knowledge and skills to potential employers or clients.",
      benefits: [
        "Industry-recognized trading certifications",
        "Comprehensive assessment of trading knowledge",
        "Digital badges for your resume and online profiles",
        "Access to exclusive certified trader community",
      ],
      howItWorks:
        "Complete our structured curriculum and pass the final assessment to earn your certification. Our certifications are recognized by trading firms and financial institutions worldwide.",
      testimonial: {
        quote:
          "My SavvyTradingHub certification helped me land a position at a proprietary trading firm. The comprehensive curriculum prepared me perfectly for the role.",
        author: "Jennifer Lee",
        role: "Professional Trader",
      },
    },
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-white" />,
    title: "Live Trading Sessions",
    description:
      "Join daily live trading sessions with our expert traders and learn in real-time.",
    gradient: "from-amber-800 to-amber-700",
    animation: "hover:-rotate-2",
    detailedContent: {
      overview:
        "Experience real-time trading alongside professional traders who explain their analysis, entry and exit decisions, and risk management in live market conditions.",
      benefits: [
        "Daily live trading sessions across different time zones",
        "Real-time market analysis and trade execution",
        "Interactive Q&A with professional traders",
        "Recording library of past sessions for review",
      ],
      howItWorks:
        "Join our scheduled live sessions via our secure platform. Watch as our traders analyze the markets, identify opportunities, and execute trades while explaining their thought process every step of the way.",
      testimonial: {
        quote:
          "The live trading sessions were a game-changer for me. Seeing how professionals handle real market conditions taught me more than any book or course ever could.",
        author: "Robert Thompson",
        role: "Day Trader",
      },
    },
  },
  {
    icon: <BarChart2 className="h-10 w-10 text-white" />,
    title: "Community Support",
    description:
      "Connect with fellow traders in our exclusive community for ongoing support.",
    gradient: "from-amber-700 to-amber-600",
    animation: "hover:rotate-1",
    detailedContent: {
      overview:
        "Our trading community brings together traders of all levels to share ideas, strategies, and support each other on their trading journey.",
      benefits: [
        "24/7 community chat rooms for different markets",
        "Weekly community trading challenges with prizes",
        "Peer review of trading plans and strategies",
        "Networking opportunities with professional traders",
      ],
      howItWorks:
        "Access our private community platform where you can join discussion forums, participate in trading challenges, and connect with traders who share your interests and goals.",
      testimonial: {
        quote:
          "The SavvyTradingHub community has become my trading family. The support and accountability have kept me consistent and helped me through the tough periods every trader faces.",
        author: "Amanda Garcia",
        role: "Forex Trader",
      },
    },
  },
];

// Course data
const courses = [
  {
    id: "beginner",
    title: "Forex Fundamentals",
    description:
      "Master the basics of forex trading with our comprehensive beginner course.",
    image:
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "8 Weeks",
    lessons: "24 Lessons",
    price: "$299",
  },
  {
    id: "intermediate",
    title: "Technical Analysis Mastery",
    description:
      "Develop advanced chart reading skills and technical analysis techniques.",
    image:
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "10 Weeks",
    lessons: "32 Lessons",
    price: "$499",
  },
  {
    id: "advanced",
    title: "Professional Trading Strategies",
    description:
      "Learn institutional-level trading strategies used by professional traders.",
    image:
      "https://images.unsplash.com/photo-1642543348745-03b1219733d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    duration: "12 Weeks",
    lessons: "40 Lessons",
    price: "$799",
  },
];

// Testimonial data
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

// Pricing plans data
const pricingPlans = [
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

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  const openModal = (feature: any) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  // Add scroll lock when modal is open
  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [modalOpen]);

  // Initialize animation after component mount
  useEffect(() => {
    // Intersection observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    // Target all elements that should animate on scroll
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="overflow-x-hidden">
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
                  className="group bg-amber-600 text-amber-50 hover:bg-amber-500 transition-all duration-300"
                >
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-amber-300 text-amber-100 hover:bg-amber-700 transition-all duration-300"
                >
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
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

              {/* YouTube Video Embed */}
              <div className="w-full h-full">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dRagYLrYAJU?si=WcjCqZKOsWlOXvNP"
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
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium rounded-full bg-amber-100 text-amber-800">
              Our Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Why Choose SavvyTradingHub?
            </h2>
            <p className="text-amber-700 text-lg">
              Our comprehensive approach to forex education sets us apart from
              the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="animate-on-scroll feature-card overflow-hidden border-none shadow-lg opacity-0 transition-all duration-700 transform translate-y-8 group hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="relative p-6 h-full flex flex-col">
                  {/* Background gradient with animation */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>

                  {/* Enhanced dancing background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:12px_12px] group-hover:scale-150 group-hover:rotate-12 transition-all duration-1000"></div>

                  {/* Multiple animated background shapes */}
                  <div className="absolute top-0 -right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl transform-gpu group-hover:scale-150 group-hover:translate-x-4 transition-all duration-700"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-xl transform-gpu group-hover:scale-125 group-hover:translate-y-4 transition-all duration-500 delay-150"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 relative">
                      <div
                        className={`p-3 rounded-xl bg-white/20 backdrop-blur-md inline-block shadow-lg transform transition-all duration-300 ${feature.animation}`}
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
                        onClick={() => openModal(feature)}
                      >
                        <span>Learn more</span>
                        <ChevronRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Feature Modal */}
        <FeatureModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          feature={selectedFeature}
        />
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 md:py-32 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium rounded-full bg-amber-100 text-amber-800">
              Education
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Our Premium Courses
            </h2>
            <p className="text-amber-700 text-lg">
              Comprehensive learning paths designed for traders at every level.
            </p>
          </div>

          <Tabs defaultValue="beginner" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-amber-100">
              {courses.map((course) => (
                <TabsTrigger
                  key={course.id}
                  value={course.id}
                  className="data-[state=active]:bg-amber-600 data-[state=active]:text-amber-50 transition-all duration-300"
                >
                  {course.id.charAt(0).toUpperCase() + course.id.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {courses.map((course) => (
              <TabsContent
                key={course.id}
                value={course.id}
                className="space-y-4"
              >
                <Card className="overflow-hidden bg-white shadow-md transition-all duration-300">
                  <div className="aspect-video relative">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={`${course.title} Course`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {course.title}
                        </h3>
                        <p className="text-white/80">{course.description}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                          {course.duration}
                        </span>
                        <span className="text-sm bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                          {course.lessons}
                        </span>
                      </div>
                      <span className="text-xl font-bold text-amber-900">
                        {course.price}
                      </span>
                    </div>
                    <Button className="w-full bg-amber-600 hover:bg-amber-500 text-amber-50 transition-all duration-300">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
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
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium rounded-full bg-amber-100 text-amber-800">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Success Stories
            </h2>
            <p className="text-amber-700 text-lg">
              Hear from our students who have transformed their trading journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="animate-on-scroll border-amber-200 bg-white bg-opacity-80 backdrop-blur-sm opacity-0 transition-all duration-700 transform translate-y-8 hover:shadow-lg hover:-translate-y-1"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-200">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
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
                  <p className="text-amber-800 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-4 flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 text-amber-500 fill-amber-500"
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-amber-50/80">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <span className="inline-block px-4 py-1.5 mb-3 text-sm font-medium rounded-full bg-amber-100 text-amber-800">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">
              Membership Plans
            </h2>
            <p className="text-amber-700 text-lg">
              Choose the plan that fits your trading journey and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`animate-on-scroll relative border-amber-200/50 opacity-0 transition-all duration-700 transform translate-y-8 ${
                  plan.popular
                    ? "border-amber-600/60 shadow-lg shadow-amber-500/10"
                    : ""
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                        <Check className="w-4 h-4 text-amber-600 mr-3 flex-shrink-0" />
                        <span className="text-sm text-amber-800">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className={`w-full transition-all duration-300 ${
                      plan.popular
                        ? "bg-amber-600 text-amber-50 hover:bg-amber-500"
                        : "bg-transparent border-amber-400 text-amber-800 hover:bg-amber-100"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-on-scroll opacity-0 transition-all duration-700 translate-y-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl text-amber-700 mb-8">
              Join thousands of successful traders who have elevated their
              skills with SavvyTradingHub.
            </p>
            <Button
              size="lg"
              className="group bg-amber-600 text-amber-50 hover:bg-amber-500 transition-all duration-300"
            >
              Start Your Journey Today
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-amber-600 hover:text-amber-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Resources</h3>
              <ul className="space-y-2">
                {[
                  "Blog",
                  "Guides",
                  "Webinars",
                  "Market Analysis",
                  "Economic Calendar",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-amber-700 hover:text-amber-900 transition-colors text-sm hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Company</h3>
              <ul className="space-y-2">
                {["About Us", "Careers", "Press", "Partners", "Contact"].map(
                  (item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-amber-700 hover:text-amber-900 transition-colors text-sm hover:underline"
                      >
                        {item}
                      </a>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-amber-900">Legal</h3>
              <ul className="space-y-2">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookie Policy",
                  "Risk Disclosure",
                  "Refund Policy",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-amber-700 hover:text-amber-900 transition-colors text-sm hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
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
    </main>
  );
}
