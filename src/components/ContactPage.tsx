"use client";

import type React from "react";
import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, randomly succeed or fail
      setFormStatus(Math.random() > 0.2 ? "success" : "error");
    }, 1500);
  };

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
              Get in Touch
            </h1>
            <p className="text-xl text-amber-100 mb-8">
              We're here to answer your questions and help you succeed in your
              trading journey.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <Card className="shadow-2xl overflow-hidden border-none bg-white relative transition-all duration-300 hover:shadow-amber-200/50">
            {/* Enhanced background gradient accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-500/20 to-amber-300/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-amber-500/20 to-amber-300/20 rounded-full blur-3xl"></div>

            <div className="p-6 md:p-10 relative h-full">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-amber-900">
                Send Us a Message
              </h2>
              <p className="text-amber-700 mb-8 text-lg">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {formStatus === "success" ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fadeIn shadow-md">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-green-800 mb-3">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-700 mb-6 text-lg">
                    Thank you for reaching out. Our team will contact you
                    shortly.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    className="bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : formStatus === "error" ? (
                <div className="bg-red-50 border border-red-200 rounded-xl p-8 text-center animate-fadeIn shadow-md">
                  <AlertCircle className="h-16 w-16 text-red-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-red-800 mb-3">
                    Something Went Wrong
                  </h3>
                  <p className="text-red-700 mb-6 text-lg">
                    We couldn't send your message. Please try again or contact
                    us directly.
                  </p>
                  <Button
                    onClick={() => setFormStatus("idle")}
                    className="bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    Try Again
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-amber-800 mb-1"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-amber-50/50 text-amber-900 placeholder-amber-400 shadow-sm transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-amber-800 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-amber-50/50 text-amber-900 placeholder-amber-400 shadow-sm transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-amber-800 mb-1"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-amber-50/50 text-amber-900 shadow-sm transition-all duration-200 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Ctitle%3Edown-arrow%3C%2Ftitle%3E%3Cg%20fill%3D%22%23d97706%22%3E%3Cpath%20d%3D%22M10.293%2C3.293%2C6%2C7.586%2C1.707%2C3.293A1%2C1%2C0%2C0%2C0%2C.293%2C4.707l5%2C5a1%2C1%2C0%2C0%2C0%2C1.414%2C0l5-5a1%2C1%2C0%2C1%2C0-1.414-1.414Z%22%20fill%3D%22%23d97706%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center] pr-10"
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="partnership">
                        Partnership Opportunity
                      </option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-amber-800 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-amber-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 bg-amber-50/50 text-amber-900 placeholder-amber-400 resize-none shadow-sm transition-all duration-200"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className={`w-full bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-800 hover:to-amber-700 text-white px-6 py-6 h-auto rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 text-lg ${
                        formStatus === "submitting" ? "opacity-80" : ""
                      }`}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <div className="animate-spin h-6 w-6 border-3 border-white border-t-transparent rounded-full"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          <span>Send Message</span>
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Card>

          {/* Right Column - Map and Contact Info */}
          <div className="flex flex-col space-y-8">
            {/* Map Card with Google Maps Embed */}
            <Card className="shadow-2xl overflow-hidden flex-grow border-none transition-all duration-300 hover:shadow-amber-200/50">
              <div className="h-96 bg-amber-200 relative">
                {/* Google Maps Embed - Updated to Nairobi, Kenya */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036273116!2d36.70730832452235!3d-1.3032035386876405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1647291796276!5m2!1sen!2sus"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  style={{ filter: "contrast(1.2) saturate(1.3)" }}
                  title="SavvyTradingHub Location"
                ></iframe>

                {/* Map Overlay Gradient */}
                <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_20px_rgba(0,0,0,0.15)]"></div>
              </div>
            </Card>

            {/* Contact Info Card */}
            <Card className="shadow-2xl overflow-hidden border-none bg-gradient-to-br from-amber-800 to-amber-600 text-white transition-all duration-300 hover:shadow-amber-500/30">
              <div className="p-8 md:p-10 relative">
                {/* Enhanced Background pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[length:14px_14px]"></div>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(251,191,36,0.1)_0%,rgba(251,191,36,0)_50%,rgba(251,191,36,0.1)_100%)]"></div>

                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white/90">
                  Our Office
                </h2>

                <div className="space-y-8">
                  <div className="flex items-start space-x-5">
                    <div className="mt-1 bg-white/20 p-3 rounded-lg shadow-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl text-amber-100">
                        Nairobi Office
                      </h3>
                      <p className="mt-2 text-white/80 leading-relaxed">
                        123 Kenyatta Avenue, Central Business District
                        <br />
                        Nairobi, Kenya
                      </p>
                    </div>
                  </div>

                  <div className="pt-6 mt-2 border-t border-white/30">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg shadow-lg">
                          <Phone className="h-5 w-5" />
                        </div>
                        <span className="text-white/90 hover:text-white transition-colors duration-200">
                          +254 20 123 4567
                        </span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="bg-white/20 p-3 rounded-lg shadow-lg">
                          <Mail className="h-5 w-5" />
                        </div>
                        <span className="text-white/90 hover:text-white transition-colors duration-200">
                          support@savvytrade.com
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 md:col-span-2">
                        <div className="bg-white/20 p-3 rounded-lg shadow-lg">
                          <Clock className="h-5 w-5" />
                        </div>
                        <span className="text-white/90">
                          Mon-Fri: 9AM-5PM EAT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto mt-20 pt-12 border-t border-amber-200">
          <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-amber-900">
            Frequently Asked Questions
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                question: "How quickly can I expect a response?",
                answer:
                  "Our team typically responds to all inquiries within 24 business hours. For urgent matters, please call our support line directly.",
              },
              {
                question: "Do you offer in-person consultations?",
                answer:
                  "Yes, we offer in-person consultations at our Nairobi office. Please schedule an appointment through our contact form or by calling us directly.",
              },
              {
                question: "Can I visit your trading floor?",
                answer:
                  "We offer guided tours of our trading floor for premium members. Contact us to arrange a visit or learn more about our premium membership.",
              },
              {
                question: "Where are your webinars hosted?",
                answer:
                  "Our webinars are hosted on our secure platform. After registration, you'll receive login details to access the live sessions and recordings.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="bg-white border border-amber-200 shadow-lg hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
              >
                <div className="p-6 md:p-8">
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-amber-900 group-hover:text-amber-700 transition-colors duration-200">
                    {faq.question}
                  </h3>
                  <p className="text-amber-700 leading-relaxed">{faq.answer}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Footer CTA */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <p className="text-amber-700 text-lg">
            Still have questions? We're here to help.
          </p>
          <p className="text-amber-900 font-medium mt-2">
            Call us at +254 20 123 4567 or email{" "}
            <span className="text-amber-700 font-semibold">
              support@savvytrade.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
