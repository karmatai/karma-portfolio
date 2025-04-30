import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Portfolio() {
  useEffect(() => {
    document.title = "Karma Tashi | Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <section className="h-screen flex flex-col justify-center items-center text-center p-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Karma Tashi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-xl md:text-2xl max-w-xl"
        >
          Developer • Designer • Builder of Creative Tools
        </motion.p>
        <div className="mt-6 flex gap-4">
          <a href="mailto:karmatai6089@gmail.com">
            <Mail className="w-6 h-6" />
          </a>
          <a href="https://github.com/karmatai" target="_blank">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/karma-tashi-1b0b2a17b" target="_blank">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>
        <div className="mt-6">
          <a href="#projects">
            <Button className="mr-4">View Projects</Button>
          </a>
          <a href="/karma-tashi-cv.pdf" download>
            <Button variant="outline">Download CV</Button>
          </a>
        </div>
      </section>

      <section className="p-6 md:p-12 bg-zinc-900" id="skills">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
          <li>C++</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Java</li>
          <li>Kotlin</li>
          <li>React</li>
          <li>Django</li>
          <li>Firebase</li>
        </ul>
      </section>

      <section className="p-6 md:p-12" id="projects">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
        <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold">Drangtsang</h3>
                <a href="https://github.com/karmatai/drangtsang" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-white hover:text-gray-300" />
                </a>
              </div>
              <p className="text-sm">Community-based Tibetan music lyric database built with React, Firebase & MUI.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Sherabling LMS</h3>
              <a href="https://github.com/karmatai/drangtsang" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-white hover:text-gray-300" />
              </a>
              <p className="text-sm">Library Management System with React, Django REST API and MySQL backend.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">Shaeja</h3>
              <a href="https://github.com/karmatai/Shaeja" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-white hover:text-gray-300" />
              </a>
              <p className="text-sm">Voice-activated Tibetan prayer search site using Monlam AI API and voice recognition.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">AI Crop Analysis</h3>
              <a href="https://github.com/karmatai/Crop༧" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 text-white hover:text-gray-300" />
              </a><p className="text-sm">AI system for real-time crop quality analysis using computer vision and transfer learning.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="p-6 md:p-12 bg-zinc-900">
        <h2 className="text-3xl font-semibold mb-4">Certificates</h2>
        <ul className="list-disc list-inside text-sm">
          <li>100 Days of Code – Python Bootcamp (Udemy)</li>
          <li>Foundations: Data, Data Everywhere (Coursera)</li>
          <li>Ask Questions to Make Data-Driven Decisions (Coursera)</li>
        </ul>
      </section>

      <section className="p-6 md:p-12">
        <h2 className="text-3xl font-semibold mb-4">Education</h2>
        <ul className="text-sm space-y-2">
          <li><strong>Lovely Professional University</strong> — B.Tech CSE, CGPA: 5.8 (2022–2026)</li>
          <li>TCV School Selakui — 12th: 81% (2020–2022), 10th: 84% (2016–2020)</li>
        </ul>
      </section>

      <footer className="text-center p-6 text-xs text-zinc-400">
        © {new Date().getFullYear()} Karma Tashi. Built with React & Tailwind. Hosted on Netlify.
      </footer>
    </div>
  );
}