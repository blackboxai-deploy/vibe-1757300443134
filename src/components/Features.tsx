import { Card, CardContent } from "@/components/ui/card";

export default function Features() {
  const features = [
    {
      title: "Lightning Fast",
      description: "Built with modern technologies for optimal performance and speed. Experience blazing fast load times and smooth interactions.",
      icon: "⚡"
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data is protected with industry-standard encryption.",
      icon: "🔒"
    },
    {
      title: "Easy to Use",
      description: "Intuitive interface designed for everyone. Get started in minutes with our comprehensive guides and tutorials.",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            We provide everything you need to succeed, with features designed 
            to help you achieve your goals faster and more efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
            Explore All Features
          </div>
        </div>
      </div>
    </section>
  );
}