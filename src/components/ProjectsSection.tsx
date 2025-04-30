
import { ArrowUpRight, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl: string;
  linkedinUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Health Institute",
    description: "Advancing rigorous evaluation and performance assessment of large language models (LLMs) to ensure they deliver accurate, reliable, and clinically relevant outputs that improve patient care and support clinicians.",
    tags: ["Healthcare", "AI", "Research", "LLMs"],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    liveUrl: "https://aihealthinstitute.org/",
    linkedinUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7311005835336306689/",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Analytics Platform",
    description: "A platform for analyzing healthcare data to improve patient outcomes and clinical decision-making.",
    tags: ["React", "TypeScript", "Data Analytics", "Healthcare"],
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "AI Ethics Framework",
    description: "A comprehensive framework for ensuring ethical use of AI in healthcare settings.",
    tags: ["AI Ethics", "Research", "Healthcare"],
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
];

const ProjectsSection = () => {
  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        {featuredProject && (
          <div className="mb-16">
            <h3 className="text-xl font-medium mb-6 border-l-4 border-primary pl-3">Featured Project</h3>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover object-center"
                    style={{ maxHeight: '400px' }}
                  />
                </div>
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <h4 className="heading-md mb-2">{featuredProject.title}</h4>
                    <p className="text-gray-700 mb-6">{featuredProject.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-start gap-4">
                    {featuredProject.githubUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    <Button size="sm" asChild>
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Site
                        <ArrowUpRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    {featuredProject.linkedinUrl && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={featuredProject.linkedinUrl} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="mr-2 h-4 w-4" />
                          LinkedIn Announcement
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularProjects.map((project, index) => (
            <Card key={project.id} className="overflow-hidden group h-full flex flex-col">
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <Badge key={tag} variant="outline">{tag}</Badge>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between mt-auto">
                {project.githubUrl && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    Live Demo
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
