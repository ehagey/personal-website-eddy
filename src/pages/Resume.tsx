
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Briefcase, GraduationCap, HeartHandshake } from 'lucide-react';

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
              <a href="/Eddy_Hage_Resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </Button>
          </div>

          <div className="space-y-12">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">McGill University</h3>
                  <p className="text-muted-foreground mb-1">Bachelor's Degree, Computer Science and Statistics | Sep 2021 - (Expected May 2026)</p>
                  <p className="text-muted-foreground mb-2">Montreal, QC</p>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">McGill University - Desautels Faculty of Management</h3>
                  <p className="text-muted-foreground mb-1">Minor in Finance</p>
                  <p className="text-muted-foreground mb-2">Montreal, QC</p>
                </div>
                
                <div className="pl-5">
                  <p className="mt-2"><span className="font-semibold">Relevant Coursework:</span> Machine Learning (Theory and Application), Reinforcement Learning, Stochastic Processes, Statistics, Probability, Corporate Finance</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Briefcase className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Experience</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Research Assistant</h3>
                  <p className="text-muted-foreground mb-1">
                    <a href="https://aihealthinstitute.org/" className="text-primary hover:underline">AI Health Institute</a> | January 2025 - Present
                  </p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Developed a robust and rigorous evaluation framework for Large Language Model (LLM) performance in Medical and Clinical settings</li>
                    <li>Implemented a framework to evaluate biases in medical diagnosis through adversarial feature attacks</li>
                    <li>Published our first report evaluating 15 LLMs across 2 comprehensive medical datasets</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
                  <p className="text-muted-foreground mb-1">McGill University | September 2024 - Present</p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Researched and developed AI agents for various applications under the supervision of Professor Maxime Cohen</li>
                    <li>Collaborated with industry partners to develop AI agents that reduced task processing time from days to minutes, achieving 95% accuracy</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Teaching Assistant - Math 262 (Intermediate Calculus)</h3>
                  <p className="text-muted-foreground mb-1">McGill University | May 2024 - June 2024</p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Conducted weekly tutorials to support students in understanding and mastering key multivariable calculus concepts</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Undergraduate Research Assistant</h3>
                  <p className="text-muted-foreground mb-1">McGill University | May 2024 - December 2024</p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Collaborated on a university-funded research initiative, contributing to an industry project under faculty supervision</li>
                    <li>Contributed to the development of a hybrid Retrieval-Augmented Generation (RAG) system</li>
                    <li>Contributed to the creation and optimization of a knowledge structure framework (Ontology) for a domain-specific Large Language Model</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Undergraduate Course Assistant</h3>
                  <p className="text-muted-foreground mb-1">McGill University | Sep 2023 - Dec 2023</p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Acted as an undergraduate course assistant for Math 240 (Discrete Structures) and Math 223 (Linear Algebra)</li>
                    <li>Graded assignment problems within one week of their submission for classes with 500+ students, alongside other course assistants</li>
                    <li>Provided students with detailed and personalized feedback for the solutions to help enhance their learning experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Volunteering */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HeartHandshake className="h-6 w-6 text-primary" />
                <h2 className="heading-md">Volunteering</h2>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-5 relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1"></div>
                  <h3 className="text-xl font-semibold">Director of Insights</h3>
                  <p className="text-muted-foreground mb-1">Pennydrops National Team | Feb 2023 - January 2025</p>
                  <p className="text-muted-foreground mb-3">Montreal, QC</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Collected, managed, and analyzed quantitative and qualitative data from PennyDrops' programs for impact reporting</li>
                    <li>Analyzed current operations, conducted comprehensive market research, and delivered strategic recommendations that optimized curriculum by introducing new lessons and retiring outdated content</li>
                    <li>Helped maintain PennyDrops Anywhere online platform</li>
                    <li>Contributed to financial literacy education initiatives for underserved communities</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <h2 className="heading-md">Additional Information</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'R', 'SQL', 'Java', 'LaTeX', 'Git', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy', 'scikit-learn'].map(skill => (
                      <span key={skill} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-3">Languages</h3>
                  <ul className="space-y-1">
                    <li>English (fluent)</li>
                    <li>Arabic (native)</li>
                    <li>French (basic skills)</li>
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
