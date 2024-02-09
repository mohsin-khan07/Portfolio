export default function ProjectDetails() {
  return (
    <div>
      <Name />
      <Overview />
      <KeyFeatures />
    </div>
  );
}

function Name() {
  return <div></div>;
}

function Overview() {
  return (
    <div className="flex flex-col gap-5 px-48 pb-8 pt-20">
      <div className="text-3xl font-bold uppercase">Overview</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry standard Lorem Ipsum is simply dummy text of the
        printing and typesetting industry. Lorem Ipsum has been the industry
        standard
      </p>
    </div>
  );
}

function KeyFeatures() {
  return (
    <div className="flex flex-col gap-10 px-48 pb-16 pt-8">
      <div className="text-3xl font-bold uppercase">Key Features:</div>
      <Feature />
      <Feature />
      <Feature />
      <Feature />
    </div>
  );
}

function Feature() {
  return (
    <div className="flex flex-col gap-5">
      <div className="text-2xl font-semibold">Responsive Design</div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard
      </p>
    </div>
  );
}
