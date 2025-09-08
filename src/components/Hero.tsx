"use client";

import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Build Something
          <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Amazing Today
          </span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
          Transform your ideas into reality with our powerful tools and expert guidance. 
          Join thousands of creators who trust us to bring their vision to life.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-transparent border-2 border-white text-white px-8 py-3 text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            Get Started Free
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-2 border-blue-200 text-blue-100 px-6 py-3 text-lg font-medium hover:bg-blue-200 hover:text-blue-800 transition-all duration-300"
          >
            Learn More
          </Button>
        </div>
        
        <div className="mt-12 text-blue-200 text-sm">
          <p>Trusted by 10,000+ creators worldwide</p>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-300 opacity-10 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-300 opacity-20 rounded-full blur-lg"></div>
    </section>
  );
}