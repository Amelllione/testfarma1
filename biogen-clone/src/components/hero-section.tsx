import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-biotech-lab.jpg"
          alt="Biogen - Pioneering Science for Complex Diseases"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-[0.85]"
        />
      </div>

      {/* Content Container */}
      <div className="container-biogen relative z-10 h-full flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            Pioneering Science <br className="hidden md:block" />
            for Complex Diseases
          </h1>
          <p className="text-white text-lg md:text-xl mb-8 max-w-xl">
            We are pioneering innovative medicines to address complex and devastating diseases. Our focus is on areas of significant unmet medical need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              className="bg-[#0077c8] text-white hover:bg-[#005da0] px-8 py-6 rounded-md flex items-center text-base"
              asChild
            >
              <Link href="/science/research">
                Explore Our Science <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-[#0077c8] px-8 py-6 rounded-md flex items-center text-base"
              asChild
            >
              <Link href="/company/about-us">
                About Biogen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/20 to-transparent z-[5]" />
    </section>
  );
};

export default HeroSection;
