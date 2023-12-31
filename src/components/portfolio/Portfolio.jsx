import { useRef } from "react";
// import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Section from "../section/Section";

const items = [
  {
    id: 1,
    title: "Guitar Lessons Page",
    link: "https://guitar-lessons-page.vercel.app",
    img: "/project1.png",
    desc: "Crafted an immersive guitar lessons site using React, focusing on delivering an exceptional UI/UX experience for users seeking to learn guitar. The site emphasizes a visually appealing interface while offering intuitive navigation and engaging content.",
  },
  {
    id: 2,
    title: "MERN Social Media App",
    link: "https://mern-social-media-frontend1.vercel.app",
    img: "/project2.png",
    desc: "Created a dynamic social media platform leveraging the MERN stack, delivering a seamless user experience with secure authentication, personalized profiles, real-time updates, and interactive post features. The platform enables users to connect, share content, and engage with others effortlessly.",
  },
  {
    id: 3,
    title: "Django Combination",
    link: "https://django-combinator.onrender.com",
    img: "/project3.png",
    desc: "Developed a dynamic web application using Django and Python, specialized in generating combinations of numbers and words. Leveraging Bootstrap, the site boasts a polished and responsive interface, showcasing a seamless blend of functionality and design for users to explore various combinations effortlessly.",
  },
  {
    id: 4,
    title: "HTML Netflix Clone",
    link: "https://html-netflix-landing-page.vercel.app",
    img: "/project4.png",
    desc: "Recreated the Netflix landing page with HTML, CSS, and JavaScript, showcasing an impressive replica while introducing enhanced functionalities like tab switching. The project prioritized a captivating UI/UX design, demonstrating skills in front-end development and interaction design.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const mdy = useTransform(scrollYProgress, [0, 1], [-500, 500]);
  return (
    <Section>
      <div className="w-full h-full p-3 overflow-hidden ">
        <div className="max-w-[1366px] w-full h-full mx-auto flex items-center justify-center gap-20 md:gap-12 flex-col md:flex-row">
          <div className="flex-1 w-full h-1/2 max-h-[300px]" ref={ref}>
            <img
              src={item.img}
              alt=""
              className="object-contain w-full h-full lg:object-cover"
            />
          </div>

          <motion.div
            className="flex flex-col items-center flex-1 p-2 text-center md:p-0 gap-7 transform-none md:transform-cpu "
            style={{ y: screen.width > 768 && mdy }}
          >
            <h2 className="text-3xl md:text-5xl">{item.title}</h2>
            <p className="text-sm text-gray-500 md:text-xl">{item.desc}</p>
            <a
              href={item.link}
              className="bg-orange-500 border-none rounded-md p-3 w-[200px] cursor-pointer"
            >
              See Demo
            </a>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

const Portfolio = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return (
    <div className="relative" ref={ref}>
      <div className="sticky top-0 left-0 w-full pt-12 text-4xl font-bold text-center text-orange-500 md:text-5xl lg:text-6xl ">
        <h1>Featured Works</h1>
        <motion.div
          style={{ scaleX }}
          className="h-[10px] bg-white"
        ></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
