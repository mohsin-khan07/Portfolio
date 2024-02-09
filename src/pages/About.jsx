export default function About() {
  return (
    <div>
      <AboutMe />
      <Skills />
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex items-center gap-24 px-48 py-28">
      <div className="flex flex-col justify-start gap-8">
        <div className="text-5xl font-semibold leading-[62px] text-grey8">
          Building cool stuff on the blockchains
        </div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard Lorem Ipsum is
          simply dummy text of the printing and typesetting industry.
        </p>
      </div>
      <div className="w-3/4">
        <img src="picture.png" alt="mohsin khan"></img>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex items-center justify-center gap-8 py-16">
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/github.svg" />
      <IconBox imgSrc="./icons/x.svg" />
    </div>
  );
}

function IconBox({ imgSrc }) {
  return (
    <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-grey2 bg-grey1">
      <img className="h-10" src={imgSrc} alt="icon"></img>
    </div>
  );
}
