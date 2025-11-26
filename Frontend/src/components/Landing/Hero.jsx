import { Play, ArrowRight, Zap, Code } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center  justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black pt-40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-amber-600/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-amber-400/10 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 mb-8">
          <Zap className="w-4 h-4 text-amber-400" />
          <span className="text-sm font-medium text-amber-300 font-inter">
            AI Prompt Analysis Tool
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins">
          Prompt
          <span className="block bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Debugger
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
          Analyze, troubleshoot, and optimize your AI prompts instantly. Get
          clarity and better results from AI models.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-105 font-poppins">
            <Play className="w-5 h-5 mr-3" />
            Start Debugging Free
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl hover:border-amber-500/50 transition-all duration-300 font-inter">
            <Code className="w-5 h-5 mr-3" />
            View Live Demo
          </button>
        </div>

        {/* Preview Image */}
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-amber-500/20 p-8">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div className="text-gray-400 text-sm ml-2 font-mono">
                prompt_debugger.js
              </div>
            </div>
            <div className="text-amber-300 font-mono text-sm">
              <div className="mb-2">
                <span className="text-blue-400">const</span>{" "}
                <span className="text-amber-300">prompt</span> ={" "}
                <span className="text-green-400">
                  "Write a blog post about AI"
                </span>
                ;
              </div>
              <div>
                <span className="text-blue-400">const</span>{" "}
                <span className="text-amber-300">debuggedPrompt</span> ={" "}
                <span className="text-purple-400">analyzePrompt</span>(prompt);
              </div>
              <div className="text-amber-500/70 mt-2 font-inter">
                // 🚀 Issues found: 3 | ✅ Optimized prompt ready
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto mt-12">
          {[
            { number: "99.9%", label: "Accuracy" },
            { number: "2.3s", label: "Avg Analysis" },
            { number: "50+", label: "Checks" },
            { number: "10K+", label: "Prompts" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-amber-400 mb-2 font-poppins">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm font-inter">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
