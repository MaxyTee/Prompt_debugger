import { Play, ArrowRight, CheckCircle, Zap, Shield, Star } from "lucide-react";

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-amber-500 to-amber-600"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.3)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        {/* Main Content */}
        <div className="relative bg-black rounded-3xl p-12 border border-amber-500/30 shadow-2xl shadow-amber-500/20">
          {/* Floating Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-400 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-300 rounded-full opacity-30 animate-pulse animation-delay-2000"></div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 font-poppins">
            Start Debugging
            <span className="block bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
              Your Prompts Today
            </span>
          </h2>

          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed font-inter">
            Join thousands of professionals who have already transformed their
            AI prompt workflow with our powerful debugging tools.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="flex items-center gap-3 text-amber-100 justify-center font-inter">
              <Zap className="w-5 h-5 text-amber-300" />
              <span>Free Forever Plan</span>
            </div>
            <div className="flex items-center gap-3 text-amber-100 justify-center font-inter">
              <Shield className="w-5 h-5 text-amber-300" />
              <span>No Credit Card</span>
            </div>
            <div className="flex items-center gap-3 text-amber-100 justify-center font-inter">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>2-Minute Setup</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-8 p-6 bg-amber-500/10 rounded-2xl border border-amber-500/20">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300 mb-1 font-poppins">
                10K+
              </div>
              <div className="text-amber-200 text-xs font-inter">Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300 mb-1 font-poppins">
                4.9/5
              </div>
              <div className="text-amber-200 text-xs font-inter">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-300 mb-1 font-poppins">
                50K+
              </div>
              <div className="text-amber-200 text-xs font-inter">Prompts</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-black bg-gradient-to-r from-amber-300 to-amber-400 rounded-2xl shadow-lg hover:shadow-xl hover:shadow-amber-400/30 transition-all duration-300 hover:scale-105 flex-1 sm:flex-none font-poppins">
              <Play className="w-5 h-5 mr-3" />
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-amber-100 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-2xl hover:border-amber-400/50 hover:bg-amber-500/30 transition-all duration-300 flex-1 sm:flex-none font-inter">
              View Live Demo
            </button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-amber-200 font-inter">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-300" fill="currentColor" />
              <span>Trusted by teams at</span>
            </div>
            <div className="flex gap-4 font-medium">
              <span>OpenAI</span>
              <span className="text-amber-300/50">•</span>
              <span>Google</span>
              <span className="text-amber-300/50">•</span>
              <span>Microsoft</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
