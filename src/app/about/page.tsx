import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

const About = () => {
  return (
    <div className="flex justify-center items-center h-[56vh] text-5xl">
      About Page
    </div>
  );
};

export default About;
