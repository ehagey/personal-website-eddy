
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
  }
];

const ProjectsSection = () => {
  // Since we've moved the featured project to AboutSection, we'll only show regular projects here
  // If there are no regular projects, we'll show a placeholder message
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-padding">
      <div className="container max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4">Projects</h2>
          <p className="subtitle mx-auto">A selection of my work and contributions</p>
        </div>
        
        {regularProjects.length > 0 ? (
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
        ) : (
          <div className="text-center py-12 text-gray-500">
            <p>More projects coming soon!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
