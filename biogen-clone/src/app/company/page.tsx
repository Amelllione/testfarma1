import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CompanyPage = () => {
  return (
    <div>
      {/* Page Header */}
      <div className="bg-[#f5f5f5] py-14 md:py-20">
        <div className="container-biogen">
          <div className="flex flex-col items-start">
            <div className="mb-4 text-sm">
              <Link href="/" className="text-gray-500 hover:text-[#0077c8]">
                Home
              </Link>{" "}
              / <span className="text-[#0077c8]">Company</span>
            </div>
            <h1 className="heading-lg mb-5">Company</h1>
            <p className="text-lg max-w-2xl">
              Learn more about Biogen, our leadership, history, and commitment to innovation in biotechnology.
            </p>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16">
        <div className="container-biogen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-biotech-lab.jpg"
                alt="Biogen research lab"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="heading-md mb-6">About Biogen</h2>
              <p className="text-gray-700 mb-6">
                Biogen is a leading global biotechnology company founded in 1978. We are pioneers in neuroscience, delivering innovative therapies to patients worldwide with neurological and neurodegenerative diseases.
              </p>
              <p className="text-gray-700 mb-8">
                Our focus includes treatments for multiple sclerosis, spinal muscular atrophy, Alzheimer's disease, and many other conditions with significant unmet needs.
              </p>
              <Button
                className="bg-[#0077c8] text-white hover:bg-[#005da0]"
                asChild
              >
                <Link href="/company/about-us">
                  Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-biogen">
          <h2 className="heading-md text-center mb-12">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Leadership</h3>
              <p className="text-gray-700 mb-6">
                Meet our executive leadership team guiding Biogen's mission to advance therapies for treating devastating diseases.
              </p>
              <Link
                href="/company/leadership"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Our Leadership Team <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">History & Milestones</h3>
              <p className="text-gray-700 mb-6">
                Explore Biogen's rich history of innovation and key milestones that have shaped our company since our founding in 1978.
              </p>
              <Link
                href="/company/history"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Our History <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Global Locations</h3>
              <p className="text-gray-700 mb-6">
                Biogen operates globally with offices, manufacturing facilities, and research centers around the world.
              </p>
              <Link
                href="/company/locations"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Our Locations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container-biogen">
          <div className="flex flex-col md:flex-row md:items-center justify-between bg-[#0077c8] text-white rounded-lg p-8 md:p-12">
            <div className="mb-6 md:mb-0 md:mr-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact Us</h2>
              <p className="max-w-xl">
                Have questions about Biogen or our therapies? Our team is here to help. Get in touch with us for more information.
              </p>
            </div>
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-[#0077c8] px-8 py-6 rounded-md flex items-center justify-center text-base"
              asChild
            >
              <Link href="/company/contact">
                Contact Biogen <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CompanyPage;
