import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureModalProps {
  isOpen: boolean;
  onClose: () => void;
  feature: any;
}

export default function FeatureModal({
  isOpen,
  onClose,
  feature,
}: FeatureModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 bg-white border-b border-amber-100 flex justify-between items-center p-4 rounded-t-xl">
          <h3 className="text-xl font-bold text-amber-900">{feature.title}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-amber-100"
          >
            <X className="h-5 w-5 text-amber-700" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="p-6">
          {feature.detailedContent ? (
            <div className="space-y-6">
              <div className="p-4 bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-lg">
                <h4 className="font-semibold text-amber-900 mb-2">Overview</h4>
                <p className="text-amber-800">
                  {feature.detailedContent.overview}
                </p>
              </div>

              {feature.detailedContent.benefits && (
                <div>
                  <h4 className="font-semibold text-amber-900 mb-3">
                    Key Benefits
                  </h4>
                  <ul className="space-y-2">
                    {feature.detailedContent.benefits.map(
                      (benefit: string, index: number) => (
                        <li key={index} className="flex items-start">
                          <span className="inline-flex items-center justify-center rounded-full bg-amber-100 p-1 mr-3">
                            <svg
                              className="h-3.5 w-3.5 text-amber-600"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </span>
                          <span className="text-amber-800">{benefit}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              )}

              {feature.detailedContent.howItWorks && (
                <div>
                  <h4 className="font-semibold text-amber-900 mb-2">
                    How It Works
                  </h4>
                  <p className="text-amber-800">
                    {feature.detailedContent.howItWorks}
                  </p>
                </div>
              )}

              {feature.detailedContent.testimonial && (
                <div className="border-l-4 border-amber-300 pl-4 py-2 italic bg-amber-50/50 rounded-r-lg">
                  <p className="text-amber-800 mb-2">
                    "{feature.detailedContent.testimonial.quote}"
                  </p>
                  <p className="text-amber-700 text-sm font-medium">
                    — {feature.detailedContent.testimonial.author},{" "}
                    {feature.detailedContent.testimonial.role}
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-amber-700">
                Detailed information coming soon.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-amber-100 p-4 flex justify-end">
          <Button
            onClick={onClose}
            className="bg-amber-600 text-amber-50 hover:bg-amber-500 transition-all duration-300"
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
