import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io', 'shadcn/ui'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'CSS3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive social media management dashboard with analytics, post scheduling, and multi-platform integration.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Express.js', 'MongoDB', 'JWT', 'Material-UI'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'An online learning platform with course creation, progress tracking, and interactive quizzes for educational institutions.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Python', 'Django', 'PostgreSQL', 'AWS S3'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    },
    {
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracking application with portfolio management, price alerts, and detailed market analysis.',
      image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Redux', 'CoinGecko API', 'Chart.js', 'Firebase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience 
            in building modern web applications.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 overflow-hidden group hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-emerald-500 text-white">Featured</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-white/80">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-white/10 text-white border-white/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-emerald-600 hover:bg-emerald-700"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Eye className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-white/30 text-white hover:bg-white/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white text-lg">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-white/80 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary" 
                        className="bg-white/10 text-white border-white/20 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge 
                        variant="secondary" 
                        className="bg-white/10 text-white border-white/20 text-xs"
                      >
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 flex-1"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-white/30 text-white hover:bg-white/10 flex-1"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;