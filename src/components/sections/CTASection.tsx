import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-amber-900">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-amber-700 mb-8">
            Join thousands of successful traders who have elevated their skills
            with SavvyTradingHub.
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
  );
}
