import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Brain, Microscope, FlaskConical, Heart } from "lucide-react";

const FeatureCard = ({
  title,
  description,
  icon,
  linkText,
  linkHref
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkText: string;
  linkHref: string;
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 transition-transform hover:translate-y-[-5px]">
      <div className="text-[#0077c8] mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link
        href={linkHref}
        className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
      >
        {linkText} <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-[#f5f5f5]">
      <div className="container-biogen">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6">Our Focus Areas</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            We are pioneering innovative medicines for complex and devastating diseases,
            focusing on areas of significant unmet medical need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            title="Neurology"
            description="Dedicated to advancing treatments for neurological conditions including multiple sclerosis and Alzheimer's disease."
            icon={<Brain className="h-12 w-12" />}
            linkText="Learn More"
            linkHref="/science/neurology"
          />

          <FeatureCard
            title="Specialized Immunology"
            description="Developing innovative therapies to address immune-mediated diseases with high unmet medical needs."
            icon={<Microscope className="h-12 w-12" />}
            linkText="Learn More"
            linkHref="/science/immunology"
          />

          <FeatureCard
            title="Rare Diseases"
            description="Focusing on treatments for rare genetic disorders that can cause severe disability and greatly impact quality of life."
            icon={<FlaskConical className="h-12 w-12" />}
            linkText="Learn More"
            linkHref="/science/rare-diseases"
          />

          <FeatureCard
            title="Patient Support"
            description="Providing comprehensive resources and support for patients and caregivers navigating complex diseases."
            icon={<Heart className="h-12 w-12" />}
            linkText="Learn More"
            linkHref="/patients"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
