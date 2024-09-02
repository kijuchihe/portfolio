'use client';

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  // FaFigma,
  FaNodeJs,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiDjango,
  SiNextdotjs,
  SiAmazonaws,
  SiDocker,
  SiPython,
} from 'react-icons/si';

// about data
const about = {
  title: 'About me',
  description:
    'A dedicated full-stack engineer who always strives for excellence, embraces continuous learning, and aims to make a positive impact on any team.',
  info: [
    { fieldName: 'Name', fieldValue: 'Kingsley Ihemelandu' },
    { fieldName: 'Phone', fieldValue: '+234 903 581 0428' },
    { fieldName: 'Experience', fieldValue: '3+ Years' },
    { fieldName: 'Twitter', fieldValue: 'kijuchihe' },
    { fieldName: 'Nationality', fieldValue: 'Nigerian' },
    { fieldName: 'Email', fieldValue: 'kingiheme2005@gmail.com' },
    { fieldName: 'Freelance', fieldValue: 'Available' },
    { fieldName: 'Languages', fieldValue: 'English' },
  ],
};

// experience data

const experience = {
  icon: '',
  title: 'My experience',
  description: '',
  items: [
    {
      company: 'Afrodevs',
      position: 'Full Stack Engineer',
      duration: '2024 - Present',
    },
    {
      company: 'Simesta AI',
      position: 'Lead Engineer',
      duration: '2024 - Present',
    },
    {
      company: 'Kmavi',
      position: 'Founder',
      duration: '2024 - Present',
    },
    {
      company: 'Octave Inc.',
      position: 'Frontend Developer',
      duration: '2023 - 2023',
    },
    {
      company: 'Eccles IT Ltd.',
      position: 'Full Stack Engineering Intern',
      duration: '2022 - 2022',
    },
  ],
};

// education data

const education = {
  icon: '',
  title: 'My Education',
  description: '',
  items: [
    {
      institution: 'University of Lagos',
      degree: 'BSc. Systems Engineering',
      duration: '2020 - 2027',
    },
  ],
};

const skills = {
  title: 'My skills',
  description: '',
  skillList: [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3 />, name: 'CSS3' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <FaReact />, name: 'ReactJS' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <FaNodeJs />, name: 'NodeJS' },
    { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
    { icon: <SiDjango />, name: 'Django' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
    // { icon: <SiAmazonaws />, name: 'Amazon Web Services' },
    // { icon: <SiDocker />, name: 'Docker' },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const ResumeContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            {/* <TabsTrigger value="education">Education</TabsTrigger> */}
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.institution}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize ">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumeContent;
