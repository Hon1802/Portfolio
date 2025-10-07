import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

const About = () => {
  const highlights = [
    { icon: Calendar, label: '1+ Years', description: 'Experience' },
    { icon: Award, label: '5+ Projects', description: 'Completed' },
    { icon: MapPin, label: 'Remote / Full-Time', description: 'Available' },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  I'm a passionate full-stack developer with over 1 years of experience creating digital solutions 
                  that bridge the gap between design and functionality. I specialize in modern web technologies 
                  and love turning complex problems into simple, beautiful designs.
                </p>
                <p className="text-white/80 leading-relaxed mb-6">
                  My journey began with a curiosity about how things work on the web, and it has evolved into 
                  a career focused on creating exceptional user experiences and robust backend systems. I believe 
                  in writing clean, maintainable code and staying up-to-date with the latest industry trends.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                    Problem Solver
                  </Badge>
                  <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                    Team Player
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                    Continuous Learner
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6">
              {highlights.map((item, index) => (
                <Card 
                  key={index} 
                  className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="p-3 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{item.label}</h3>
                      <p className="text-white/70">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Education & Certifications</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">Computer Science Degree</p>
                      <p className="text-white/70 text-sm">University of Technology</p>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-white/80">
                      2018
                    </Badge>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-white font-medium">AWS Certified Developer</p>
                      <p className="text-white/70 text-sm">Amazon Web Services</p>
                    </div>
                    <Badge variant="outline" className="border-white/30 text-white/80">
                      2022
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;