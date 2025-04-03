import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Story card component
const StoryCard = ({
  title,
  category,
  description,
  imageSrc,
  href,
}: {
  title: string;
  category: string;
  description: string;
  imageSrc: string;
  href: string;
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:translate-y-[-5px]">
      <div className="relative h-48 md:h-64">
        <Image
          src={imageSrc}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <div className="text-sm text-[#0077c8] font-medium uppercase mb-2">{category}</div>
        <h3 className="text-xl font-bold mb-3 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center text-[#0077c8] font-medium hover:text-[#005da0]"
        >
          Read More <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

const StoriesSection = () => {
  // Sample story data
  const stories = [
    {
      id: 1,
      title: "Biogen Announces New Breakthroughs in Neurological Disease Research",
      category: "Science",
      description: "Latest research findings show promising results in new therapies for neurological conditions, providing hope for patients worldwide.",
      imageSrc: "/images/story-1.jpg",
      href: "/stories/neurological-research",
    },
    {
      id: 2,
      title: "Living with Rare Diseases: Sean's Story",
      category: "Patient Story",
      description: "Sean shares his journey living with a rare disease and how innovative treatments have transformed his life for the better.",
      imageSrc: "/images/story-2.jpg",
      href: "/stories/sean-story",
    },
    {
      id: 3,
      title: "Biogen's Commitment to Environmental Sustainability",
      category: "Responsibility",
      description: "Discover how Biogen is working toward a sustainable future with new initiatives to reduce environmental impact across operations.",
      imageSrc: "/images/story-3.jpg",
      href: "/stories/sustainability",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container-biogen">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="heading-lg mb-2">Featured Stories</h2>
            <p className="text-gray-600 text-lg max-w-2xl">
              Discover the latest news, patient stories, and insights from Biogen.
            </p>
          </div>
          <Button
            className="mt-4 md:mt-0 bg-transparent text-[#0077c8] border border-[#0077c8] hover:bg-[#0077c8] hover:text-white transition-colors"
            asChild
          >
            <Link href="/stories">
              View All Stories <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <StoryCard
              key={story.id}
              title={story.title}
              category={story.category}
              description={story.description}
              imageSrc={story.imageSrc}
              href={story.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
