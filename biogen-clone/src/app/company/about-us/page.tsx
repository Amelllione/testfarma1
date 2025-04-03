import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const AboutUsPage = () => {
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
              /{" "}
              <Link href="/company" className="text-gray-500 hover:text-[#0077c8]">
                Company
              </Link>{" "}
              / <span className="text-[#0077c8]">About Us</span>
            </div>
            <h1 className="heading-lg mb-5">About Biogen</h1>
            <p className="text-lg max-w-2xl">
              Founded in 1978, Biogen is one of the world's first global biotechnology companies and is a pioneer in neuroscience.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-biogen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-md mb-6">Our Mission</h2>
              <p className="text-gray-700 mb-6">
                At Biogen, we are pioneering innovative medicines to address complex and devastating diseases. We remain steadfast in our commitment to advance humanity through science, delivering meaningful therapies to patients with neurological and neurodegenerative diseases.
              </p>
              <p className="text-gray-700">
                Our focus includes treatments for multiple sclerosis, spinal muscular atrophy, Alzheimer's disease, and many other conditions with significant unmet needs.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/hero-biotech-lab.jpg"
                alt="Biogen scientists in laboratory"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container-biogen">
          <h2 className="heading-md text-center mb-12">Company Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Global Presence</h3>
              <p className="text-gray-700 mb-6">
                Headquartered in Cambridge, Massachusetts, Biogen has a global footprint with operations in more than 30 countries worldwide.
              </p>
              <Link
                href="/company/locations"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Our Locations <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Research & Development</h3>
              <p className="text-gray-700 mb-6">
                Our R&D efforts focus on neuroscience, specialized immunology, and rare diseases, with a robust pipeline of potential therapies.
              </p>
              <Link
                href="/science/research"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Explore Our Science <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Corporate Responsibility</h3>
              <p className="text-gray-700 mb-6">
                Biogen is committed to advancing environmental sustainability, diversity and inclusion, and improving access to our therapies.
              </p>
              <Link
                href="/responsibility/esg"
                className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
              >
                Our Commitments <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-16">
        <div className="container-biogen">
          <h2 className="heading-md text-center mb-6">Our History</h2>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            For over 40 years, Biogen has led innovative scientific research with the goal of defeating devastating neurological diseases.
          </p>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-[#0077c8]">1978</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Foundation</h3>
                <p className="text-gray-700">
                  Biogen was founded in Geneva by several notable scientists including Nobel Prize winners Walter Gilbert and Phillip Sharp.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-[#0077c8]">1985</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">First Approved Product</h3>
                <p className="text-gray-700">
                  Biogen's first product, interferon-alpha, was approved for the treatment of leukemia and genital warts.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-[#0077c8]">2003</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Focus on Neuroscience</h3>
                <p className="text-gray-700">
                  Biogen shifted its focus to neuroscience research, particularly in the area of multiple sclerosis.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <div className="text-2xl font-bold text-[#0077c8]">Present</div>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">Innovation Continues</h3>
                <p className="text-gray-700">
                  Today, Biogen continues to pioneer research in neuroscience and expand into new therapeutic areas with a focus on transformative therapies.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/company/history"
              className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
            >
              View Full History <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
