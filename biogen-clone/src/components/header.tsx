"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Search, Menu, X } from "lucide-react";

const Header = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-biogen py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="https://ext.same-assets.com/3893086323/330619687.svg"
                alt="Biogen Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Company */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#0077c8]">Company</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">About Us</h3>
                          <ul className="space-y-2">
                            <li>
                              <Link href="/company/about-us" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Overview
                              </Link>
                            </li>
                            <li>
                              <Link href="/company/leadership" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Leadership
                              </Link>
                            </li>
                            <li>
                              <Link href="/company/history" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                History
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Image
                            src="https://ext.same-assets.com/3893086323/3685558822.jpeg"
                            alt="Company"
                            width={200}
                            height={150}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Science & Innovation */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#0077c8]">Science & Innovation</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">Research Areas</h3>
                          <ul className="space-y-2">
                            <li>
                              <Link href="/science/neurology" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Neurology
                              </Link>
                            </li>
                            <li>
                              <Link href="/science/immunology" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Specialized Immunology
                              </Link>
                            </li>
                            <li>
                              <Link href="/science/rare-diseases" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Rare Diseases
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Image
                            src="https://ext.same-assets.com/3893086323/990439348.jpeg"
                            alt="Science"
                            width={200}
                            height={150}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Responsibility */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#0077c8]">Responsibility</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">Our Commitments</h3>
                          <ul className="space-y-2">
                            <li>
                              <Link href="/responsibility/esg" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                ESG
                              </Link>
                            </li>
                            <li>
                              <Link href="/responsibility/access" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Access to Treatment
                              </Link>
                            </li>
                            <li>
                              <Link href="/responsibility/community" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Community Engagement
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Image
                            src="https://ext.same-assets.com/3893086323/2357346684.jpeg"
                            alt="Responsibility"
                            width={200}
                            height={150}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Careers */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-700 hover:text-[#0077c8]">Careers</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 md:w-[400px] lg:w-[600px]">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <h3 className="mb-2 text-lg font-semibold">Join Our Team</h3>
                          <ul className="space-y-2">
                            <li>
                              <Link href="/careers/open-positions" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Open Positions
                              </Link>
                            </li>
                            <li>
                              <Link href="/careers/culture" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Our Culture
                              </Link>
                            </li>
                            <li>
                              <Link href="/careers/benefits" className="text-sm text-gray-700 hover:text-[#0077c8]">
                                Benefits
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <Image
                            src="https://ext.same-assets.com/3893086323/924037294.jpeg"
                            alt="Careers"
                            width={200}
                            height={150}
                            className="rounded-md"
                          />
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {/* Stories */}
                <NavigationMenuItem>
                  <Link href="/stories" legacyBehavior passHref>
                    <NavigationMenuLink className="text-gray-700 hover:text-[#0077c8] px-4 py-2">
                      Stories
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-[#0077c8]"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="h-5 w-5" />
            </button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="py-4">
                  <div className="flex items-center justify-between mb-6">
                    <Image
                      src="https://ext.same-assets.com/3893086323/330619687.svg"
                      alt="Biogen Logo"
                      width={100}
                      height={32}
                      className="h-8 w-auto"
                    />
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  <nav className="space-y-4">
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-lg mb-2">Company</h3>
                      <ul className="space-y-2 pl-4">
                        <li><Link href="/company/about-us" className="text-gray-700 hover:text-[#0077c8]">Overview</Link></li>
                        <li><Link href="/company/leadership" className="text-gray-700 hover:text-[#0077c8]">Leadership</Link></li>
                        <li><Link href="/company/history" className="text-gray-700 hover:text-[#0077c8]">History</Link></li>
                      </ul>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-lg mb-2">Science & Innovation</h3>
                      <ul className="space-y-2 pl-4">
                        <li><Link href="/science/neurology" className="text-gray-700 hover:text-[#0077c8]">Neurology</Link></li>
                        <li><Link href="/science/immunology" className="text-gray-700 hover:text-[#0077c8]">Specialized Immunology</Link></li>
                        <li><Link href="/science/rare-diseases" className="text-gray-700 hover:text-[#0077c8]">Rare Diseases</Link></li>
                      </ul>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-lg mb-2">Responsibility</h3>
                      <ul className="space-y-2 pl-4">
                        <li><Link href="/responsibility/esg" className="text-gray-700 hover:text-[#0077c8]">ESG</Link></li>
                        <li><Link href="/responsibility/access" className="text-gray-700 hover:text-[#0077c8]">Access to Treatment</Link></li>
                        <li><Link href="/responsibility/community" className="text-gray-700 hover:text-[#0077c8]">Community Engagement</Link></li>
                      </ul>
                    </div>
                    <div className="border-b pb-3">
                      <h3 className="font-medium text-lg mb-2">Careers</h3>
                      <ul className="space-y-2 pl-4">
                        <li><Link href="/careers/open-positions" className="text-gray-700 hover:text-[#0077c8]">Open Positions</Link></li>
                        <li><Link href="/careers/culture" className="text-gray-700 hover:text-[#0077c8]">Our Culture</Link></li>
                        <li><Link href="/careers/benefits" className="text-gray-700 hover:text-[#0077c8]">Benefits</Link></li>
                      </ul>
                    </div>
                    <div>
                      <Link href="/stories" className="font-medium text-lg text-gray-700 hover:text-[#0077c8]">
                        Stories
                      </Link>
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute inset-0 bg-white p-4 z-50">
          <div className="container-biogen">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-medium">Search</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Biogen.com..."
                className="w-full border border-gray-300 rounded-md p-3 pl-10"
              />
              <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
