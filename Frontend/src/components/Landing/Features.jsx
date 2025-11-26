import {
  Search,
  AlertCircle,
  CheckCircle,
  Zap,
  BarChart,
  Copy,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Clarity Check",
      description:
        "Detect ambiguous instructions and vague language that confuse AI models",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Issue Detection",
      description:
        "Identify missing context, bias, redundancy, and formatting problems",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Optimization Suggestions",
      description:
        "Get actionable recommendations to improve prompt effectiveness",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Multiple Versions",
      description:
        "Generate optimized prompts in different styles: basic, detailed, creative, technical",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Severity Analysis",
      description:
        "Priority-based issue ranking with low, medium, and high severity levels",
      color: "from-amber-500 to-amber-600",
    },
    {
      icon: <Copy className="w-6 h-6" />,
      title: "One-Click Export",
      description:
        "Copy optimized prompts or download as TXT/JSON for your projects",
      color: "from-amber-500 to-amber-600",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            Everything You Need to
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              {" "}
              Perfect Your Prompts
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Advanced analysis tools designed specifically for AI prompt
            engineering and optimization
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 hover:border-amber-500/40 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} text-black mb-6`}
              >
                {feature.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-white mb-4 font-poppins">
                {feature.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-inter">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Demo Preview */}
        <div className="mt-20 bg-gradient-to-r from-amber-500/10 to-amber-600/10 rounded-2xl p-8 border border-amber-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 font-poppins">
                See It In Action
              </h3>
              <p className="text-gray-300 mb-6 font-inter">
                Transform vague prompts into clear, effective instructions that
                AI models understand perfectly.
              </p>
              <ul className="space-y-3 text-gray-300 font-inter">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  Detect ambiguity and missing context
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  Get severity-based issue ranking
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  Receive optimized prompt versions
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
              <div className="flex gap-4 mb-4">
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-400 mb-2 font-poppins">
                    Before
                  </div>
                  <div className="text-gray-300 text-sm font-inter bg-amber-500/10 p-3 rounded border border-amber-500/20">
                    "Write about AI"
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-400 mb-2 font-poppins">
                    After
                  </div>
                  <div className="text-gray-300 text-sm font-inter bg-amber-500/10 p-3 rounded border border-amber-500/20">
                    "Write a 500-word beginner-friendly blog post explaining
                    artificial intelligence benefits for small businesses..."
                  </div>
                </div>
              </div>
              <div className="text-center text-sm text-amber-400 font-inter">
                3 issues fixed • 85% clarity improvement
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
