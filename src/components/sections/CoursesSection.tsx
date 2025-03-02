import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CoursesSection() {
  return (
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
                  loading="lazy"
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
                      Master the basics of forex trading with our comprehensive
                      beginner course.
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
                  <span className="text-xl font-bold text-amber-900">$299</span>
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
                  loading="lazy"
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
                  <span className="text-xl font-bold text-amber-900">$499</span>
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
                  loading="lazy"
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
                  <span className="text-xl font-bold text-amber-900">$799</span>
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
  );
}
