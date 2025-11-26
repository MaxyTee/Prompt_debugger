import { Star, Quote, Zap, Users, Target, TrendingUp } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "AI Content Strategist",
      company: "TechCorp",
      image: "👩‍💻",
      content:
        "Prompt Debugger transformed how we create AI prompts. We cut revision time by 60% and get much better results from GPT-4.",
      rating: 5,
      improvement: "85%",
    },
    {
      name: "Marcus Rodriguez",
      role: "Prompt Engineer",
      company: "AI Startup",
      image: "👨‍💼",
      content:
        "The clarity analysis caught issues we didn't even know existed. Our prompt success rate improved dramatically across all models.",
      rating: 5,
      improvement: "92%",
    },
    {
      name: "Alex Thompson",
      role: "Content Manager",
      company: "Marketing Agency",
      image: "🧑‍🚀",
      content:
        "As a non-technical user, this tool helped me understand why some prompts fail and how to fix them. Absolute game changer!",
      rating: 5,
      improvement: "78%",
    },
  ];

  const stats = [
    {
      icon: <Zap className="w-6 h-6" />,
      number: "10K+",
      label: "Prompts Analyzed",
      description: "Across various AI models and use cases",
    },
    {
      icon: <Users className="w-6 h-6" />,
      number: "500+",
      label: "Active Users",
      description: "From startups to enterprise teams",
    },
    {
      icon: <Target className="w-6 h-6" />,
      number: "94%",
      label: "Success Rate",
      description: "Improved prompt effectiveness",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      number: "4.9/5",
      label: "User Rating",
      description: "Based on user feedback",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 mb-6">
            <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
            <span className="text-sm font-medium text-amber-300 font-inter">
              Loved by Professionals
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Trusted by
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              AI Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Join thousands of professionals who have transformed their AI prompt
            workflow with our debugging tools
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
              </div>
              <div className="text-2xl font-bold text-amber-400 mb-1 font-poppins">
                {stat.number}
              </div>
              <div className="text-white font-semibold mb-2 font-poppins">
                {stat.label}
              </div>
              <div className="text-gray-400 text-sm font-inter">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group hover:scale-105"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors duration-300" />

              {/* Improvement Badge */}
              <div className="absolute top-6 left-6 px-3 py-1 bg-amber-500/20 rounded-full border border-amber-500/30">
                <span className="text-amber-300 text-sm font-semibold font-poppins">
                  +{testimonial.improvement}
                </span>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6 mt-8">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic font-inter relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-black text-xl font-bold">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-white font-poppins">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-400 text-sm font-inter">
                    {testimonial.role}
                  </div>
                  <div className="text-amber-400 text-sm font-inter">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-amber-500/0 via-amber-500/20 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional Testimonial Features */}
        <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                Why Professionals Choose Us
              </h3>
              <p className="text-gray-300 mb-6 font-inter">
                Our users report significant improvements in their AI prompt
                effectiveness and workflow efficiency.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time prompt analysis and suggestions",
                  "Multi-model compatibility testing",
                  "Enterprise-grade security and privacy",
                  "Continuous learning and updates",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300 font-inter">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2.3s", label: "Avg. Analysis" },
                { value: "99.9%", label: "Uptime" },
                { value: "50+", label: "Checks" },
                { value: "24/7", label: "Support" },
              ].map((metric, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-black/50 rounded-xl border border-amber-500/20"
                >
                  <div className="text-2xl font-bold text-amber-400 mb-1 font-poppins">
                    {metric.value}
                  </div>
                  <div className="text-gray-400 text-sm font-inter">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20">
            <div className="text-left">
              <h4 className="text-white font-semibold mb-2 font-poppins">
                Ready to improve your prompts?
              </h4>
              <p className="text-gray-300 text-sm font-inter">
                Join professionals who are already getting better results
              </p>
            </div>
            <button className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 font-poppins whitespace-nowrap">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
