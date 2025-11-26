import { useState } from "react";
import {
  Edit,
  Search,
  CheckCircle,
  Copy,
  Play,
  ChevronRight,
  ChevronLeft,
  FileEdit,
  ChartColumn,
  Rocket,
} from "lucide-react";

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      step: "01",
      title: "Write Your Prompt",
      description:
        "Start with your initial prompt in our intuitive editor. Paste from any source or use our templates.",
      icon: <Edit className="w-8 h-8" />,
      features: ["Syntax highlighting", "Auto-save", "Template library"],
      image: <FileEdit className="text-amber-500" size={40} />,
      color: "from-amber-500 to-amber-600",
    },
    {
      step: "02",
      title: "Analyze & Debug",
      description:
        "Our AI engine performs 50+ checks in real-time to identify issues and optimization opportunities.",
      icon: <Search className="w-8 h-8" />,
      features: ["Real-time analysis", "50+ checks", "Severity ranking"],
      image: <Search className="text-amber-500" size={40} />,
      color: "from-amber-500 to-amber-600",
    },
    {
      step: "03",
      title: "Review Results",
      description:
        "Get detailed insights with actionable suggestions and before/after comparisons.",
      icon: <CheckCircle className="w-8 h-8" />,
      features: ["Issue breakdown", "Actionable tips", "Comparison view"],
      image: <ChartColumn className="text-amber-500" size={40} />,
      color: "from-amber-500 to-amber-600",
    },
    {
      step: "04",
      title: "Get Optimized Prompts",
      description:
        "Choose from multiple improved versions and export in your preferred format.",
      icon: <Copy className="w-8 h-8" />,
      features: ["Multiple versions", "One-click copy", "Export options"],
      image: <Rocket className="text-amber-500" size={40} />,
      color: "from-amber-500 to-amber-600",
    },
  ];

  const nextStep = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
  };

  const prevStep = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
  };

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins">
            How Prompt Debugger
            <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-inter">
            Simple, fast, and effective - transform your prompts in minutes
          </p>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Step Content */}
          <div className="space-y-8">
            {/* Step Indicator */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeStep === index
                        ? "bg-amber-500/20 border border-amber-500/30 text-amber-400"
                        : "bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-amber-500/30"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeStep === index
                          ? "bg-amber-500 text-black"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span className="font-semibold font-poppins">
                      {step.step}
                    </span>
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-2">
                <button
                  onClick={prevStep}
                  className="p-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-400" />
                </button>
                <button
                  onClick={nextStep}
                  className="p-2 bg-gray-800 rounded-lg border border-gray-700 hover:border-amber-500/50 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>

            {/* Active Step Content */}
            <div className="space-y-6">
              <div className="flex items-center gap-4 mb-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-black`}
                >
                  {steps[activeStep].icon}
                </div>
                <div>
                  <div className="text-amber-400 text-sm font-semibold font-poppins">
                    Step {steps[activeStep].step}
                  </div>
                  <h3 className="text-2xl font-bold text-white font-poppins">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-gray-300 text-lg leading-relaxed font-inter">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3">
                {steps[activeStep].features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-amber-400 font-inter"
                  >
                    <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* Progress Bar */}
              <div className="pt-6">
                <div className="flex justify-between text-sm text-gray-400 mb-2 font-inter">
                  <span>Progress</span>
                  <span>
                    {activeStep + 1} of {steps.length}
                  </span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-amber-500 to-amber-600 h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${((activeStep + 1) / steps.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="relative">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-amber-500/20">
              <div className="text-6xl flex items-center justify-center text-center mb-6">
                {steps[activeStep].image}
              </div>
              <div className="bg-gray-900 rounded-xl p-6 border border-gray-700">
                <div className="text-amber-400 font-mono text-sm">
                  {activeStep === 0 && (
                    <>
                      <div className="text-green-400">
                        // Type or paste your prompt
                      </div>
                      <div className="mt-2 text-gray-300">
                        const prompt = "Write a blog post about AI...";
                      </div>
                    </>
                  )}
                  {activeStep === 1 && (
                    <>
                      <div className="text-blue-400">
                        // Analyzing prompt...
                      </div>
                      <div className="mt-2 text-amber-400">
                        ✓ Clarity check: 85%
                      </div>
                      <div className="text-amber-400">
                        ✓ Context analysis: Complete
                      </div>
                      <div className="text-red-400">
                        ⚠ Ambiguity detected: 2 issues
                      </div>
                    </>
                  )}
                  {activeStep === 2 && (
                    <>
                      <div className="text-green-400">// Results ready</div>
                      <div className="mt-2 text-gray-300">
                        Issues found: <span className="text-amber-400">3</span>
                      </div>
                      <div className="text-gray-300">
                        Improvement:{" "}
                        <span className="text-green-400">+65%</span>
                      </div>
                      <div className="text-gray-300">
                        Time saved:{" "}
                        <span className="text-blue-400">~2 hours</span>
                      </div>
                    </>
                  )}
                  {activeStep === 3 && (
                    <>
                      <div className="text-green-400">
                        // Optimized prompt ready
                      </div>
                      <div className="mt-2 text-gray-300">
                        const optimizedPrompt = `Write a comprehensive 800-word
                        blog post...`;
                      </div>
                      <div className="text-amber-400 mt-2">
                        📋 Click to copy | 💾 Export as JSON
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center text-black text-sm font-bold">
              {steps[activeStep].step}
            </div>
          </div>
        </div>

        {/* Quick Start CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-amber-500/10 rounded-2xl p-6 border border-amber-500/20">
            <div className="text-left">
              <h4 className="text-white font-semibold mb-2 font-poppins">
                Ready to get started?
              </h4>
              <p className="text-amber-200 text-sm font-inter">
                Join thousands of professionals improving their AI prompts
              </p>
            </div>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300 hover:scale-105 font-poppins whitespace-nowrap">
              <Play className="w-5 h-5" />
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
