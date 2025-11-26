import { Star, Quote } from "lucide-react";

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
    },
    {
      name: "Marcus Rodriguez",
      role: "Prompt Engineer",
      company: "AI Startup",
      image: "👨‍💼",
      content:
        "The clarity analysis caught issues we didn't even know existed. Our prompt success rate improved dramatically.",
      rating: 5,
    },
    {
      name: "Alex Thompson",
      role: "Content Manager",
      company: "Marketing Agency",
      image: "🧑‍🚀",
      content:
        "As a non-technical user, this tool helped me understand why some prompts fail and how to fix them. Game changer!",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Trusted by
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Professionals
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Join thousands of professionals who have transformed their AI prompt
            workflow
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-500/20 group-hover:text-amber-500/40 transition-colors" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-amber-400"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic font-inter">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center text-black text-xl">
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
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-amber-500/20">
          {[
            { number: "500+", label: "Active Users" },
            { number: "4.8/5", label: "Average Rating" },
            { number: "10K+", label: "Prompts Debugged" },
            { number: "94%", label: "Success Rate" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-gray-400 font-inter">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
