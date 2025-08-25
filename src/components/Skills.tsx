import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  Palette,
  Server,
  GitBranch
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: 'from-emerald-500 to-green-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'Express.js', level: 88 },
        { name: 'GraphQL', level: 80 },
      ]
    },
    {
      icon: Database,
      title: 'Database',
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'Prisma', level: 88 },
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'AWS', level: 82 },
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  ];

  const tools = [
    'Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Jest', 
    'Cypress', 'Webpack', 'Vite', 'ESLint', 'Prettier', 'Storybook'
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-400 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            I'm proficient in a wide range of technologies and tools that help me build scalable, 
            efficient, and user-friendly applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/90 text-sm font-medium">{skill.name}</span>
                      <span className="text-white/70 text-xs">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-white/10"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/5 backdrop-blur-sm border-white/10">
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center space-x-2">
              <GitBranch className="h-5 w-5" />
              <span>Tools & Technologies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-white/10 text-white border-white/20 hover:bg-white/20 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;