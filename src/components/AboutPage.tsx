import { ChevronRight, Users, Target, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const AboutUsPage = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bio: "With over 15 years of experience in forex trading, Sarah founded SavvyTradingHub to empower traders worldwide.",
    },
    {
      name: "Michael Chen",
      role: "Chief Trading Strategist",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bio: "Michael's innovative trading strategies have helped thousands of traders achieve consistent profitability.",
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Education",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bio: "Emma's passion for teaching has revolutionized our educational programs, making complex concepts accessible to all.",
    },
    {
      name: "David Ochieng",
      role: "Chief Technology Officer",
      image:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      bio: "David's expertise in fintech has been crucial in developing our cutting-edge trading platforms and tools.",
    },
  ];

  const values = [
    {
      icon: <Users className="h-8 w-8 text-amber-600" />,
      title: "Community",
      description:
        "We foster a supportive community where traders can learn, grow, and succeed together.",
    },
    {
      icon: <Target className="h-8 w-8 text-amber-600" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our educational content to our trading tools.",
    },
    {
      icon: <Award className="h-8 w-8 text-amber-600" />,
      title: "Integrity",
      description:
        "We operate with the highest level of integrity, always putting our clients' interests first.",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-amber-600" />,
      title: "Innovation",
      description:
        "We continuously innovate to provide our traders with cutting-edge strategies and technologies.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-amber-700 to-amber-800">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-amber-400/20 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-amber-300/20 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-amber-100">
              About SavvyTradingHub
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              Empowering traders with knowledge, tools, and community since
              2015.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900 text-center">
              Our Story
            </h2>
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-12">
              <p className="text-amber-800 mb-4 leading-relaxed">
                SavvyTradingHub was born out of a passion for forex trading and
                a desire to empower traders worldwide. Founded in 2015 by Sarah
                Johnson, a veteran trader with over 15 years of experience, our
                journey began with a simple mission: to provide accessible,
                high-quality education and tools to traders of all levels.
              </p>
              <p className="text-amber-800 mb-4 leading-relaxed">
                What started as a small online community quickly grew into a
                comprehensive trading ecosystem. We've since helped thousands of
                traders from over 100 countries develop their skills, implement
                winning strategies, and achieve their financial goals.
              </p>
              <p className="text-amber-800 leading-relaxed">
                Today, SavvyTradingHub stands at the forefront of forex
                education and technology. Our team of expert traders, educators,
                and developers work tirelessly to bring you cutting-edge
                strategies, intuitive platforms, and a supportive community that
                fosters growth and success.
              </p>
            </div>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-900 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-6 text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-amber-300">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-amber-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-amber-600 mb-3">{member.role}</p>
                  <p className="text-amber-700 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-amber-900 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-6 flex items-start space-x-4">
                  <div className="bg-amber-100 rounded-full p-3 group-hover:bg-amber-200 transition-colors duration-300">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-amber-900 mb-2">
                      {value.title}
                    </h3>
                    <p className="text-amber-700">{value.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
              Our Mission
            </h2>
            <Card className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-8 md:p-12 shadow-xl">
              <p className="text-xl md:text-2xl leading-relaxed">
                "To empower traders worldwide with the knowledge, tools, and
                community support they need to navigate the forex markets with
                confidence and achieve lasting success."
              </p>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
            Join Our Community
          </h2>
          <p className="text-xl text-amber-700 mb-8 max-w-2xl mx-auto">
            Ready to take your trading to the next level? Join thousands of
            successful traders who have found their edge with SavvyTradingHub.
          </p>
          <Button
            size="lg"
            className="bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-300"
          >
            Start Your Journey
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
