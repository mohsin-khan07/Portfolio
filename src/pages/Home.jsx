import ProjectsSection from "../ui/ProjectsSection";
import SocialIcons from "../ui/SocialIcons";

export default function Home() {
  return (
    <div>
      <Hero />
      <Images />
      <ProjectsSection />
      <ProjectsSection />
    </div>
  );
}

function Hero() {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20 text-center">
      <div className="flex flex-col text-6xl font-bold leading-[70px] text-grey8">
        <span>Hi, I’m Mohsin</span>
        <span>
          A <span className="text-highlight">Blockchain</span> Developer
        </span>
      </div>
      <p className="w-1/2">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard
      </p>
      <SocialIcons />
    </div>
  );
}

function Images() {
  return (
    <div className="flex items-center justify-center gap-3 overflow-hidden py-16">
      <img src="image1.png"></img>
      <img src="image2.png"></img>
      <img src="image3.png"></img>
      <img src="image4.png"></img>
      <img src="image5.png"></img>
      <img src="image6.png"></img>
    </div>
  );
}
