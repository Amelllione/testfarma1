import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Join Biogen in pioneering science"
          fill
          style={{ objectFit: "cover" }}
          className="brightness-[0.4]"
        />
      </div>

      {/* Content */}
      <div className="container-biogen relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Join Our Mission to Pioneer Science for Humanity
          </h2>
          <p className="text-white text-lg md:text-xl mb-10 opacity-90">
            Whether you're a patient seeking support, a healthcare professional, or looking to join our team,
            discover how Biogen is pioneering treatments and making a difference in patients' lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-[#0077c8] text-white hover:bg-[#005da0] px-8 py-6 rounded-md flex items-center justify-center text-base"
              asChild
            >
              <Link href="/careers">
                Join Our Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-[#0077c8] px-8 py-6 rounded-md flex items-center justify-center text-base"
              asChild
            >
              <Link href="/patients">
                Patient Resources <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
