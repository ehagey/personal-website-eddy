
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';

const Resume = () => {
  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <section className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h1 className="heading-lg mb-2">Resume</h1>
              <p className="text-muted-foreground">
                My professional background and experience
              </p>
            </div>
            <Button className="flex items-center" asChild>
              <a href="#" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Work Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Work Experience</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Director, AI Health Institute</h3>
                  <p className="text-muted-foreground mb-2">2023 - Present</p>
                  <p className="mb-4">
                    Leading research initiatives focused on the evaluation and performance assessment of large language models in healthcare.
                    Developing frameworks to ensure AI tools deliver accurate, reliable, and clinically relevant outputs.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Established evaluation protocols for healthcare LLMs</li>
                    <li>Published research on AI accuracy in clinical settings</li>
                    <li>Collaborated with healthcare organizations to implement AI solutions</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Senior AI Researcher</h3>
                  <p className="text-muted-foreground mb-2">2020 - 2023</p>
                  <p className="mb-4">
                    Conducted research on machine learning applications in healthcare settings. Focused on developing
                    algorithms to assist with clinical decision-making and improving patient outcomes.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Education</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Ph.D. in Computer Science</h3>
                  <p className="text-muted-foreground mb-2">Stanford University, 2015 - 2019</p>
                  <p>Specialization in Artificial Intelligence and Machine Learning. Thesis on "Machine Learning Applications in Clinical Decision Support Systems."</p>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">M.S. in Computer Science</h3>
                  <p className="text-muted-foreground mb-2">MIT, 2013 - 2015</p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Skills & Certifications</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Machine Learning', 'Python', 'TensorFlow', 'PyTorch', 'Natural Language Processing', 'Data Analysis', 'Healthcare Informatics'].map(skill => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Certifications</h3>
                  <ul className="space-y-2">
                    <li>Certified Healthcare AI Professional (CHAIP)</li>
                    <li>AWS Machine Learning Specialty</li>
                    <li>Google Professional Machine Learning Engineer</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Resume;
