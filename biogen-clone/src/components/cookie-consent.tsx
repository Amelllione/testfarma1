"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CookieConsent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showDetails, setShowDetails] = useState(false);

  const handleAccept = () => {
    setIsOpen(false);
    // In a real implementation, you would set cookies here
  };

  const handleReject = () => {
    setIsOpen(false);
    // In a real implementation, you would reject non-essential cookies
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-200">
          <div className="container-biogen py-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h2 className="text-lg font-bold mb-2">Cookies</h2>
                <p className="text-sm text-gray-600 mb-2">
                  This website uses cookies to improve the site and your experience. By continuing to browse the site,
                  you are agreeing to accept our use of cookies. If you require further information and/or do not wish
                  to have cookies placed when using the site, you can modify your browser settings appropriately, or
                  you may visit our{" "}
                  <Link href="/cookies" className="text-[#0077c8] hover:underline">
                    cookies page
                  </Link>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="outline"
                  className="text-gray-700 border-gray-300 hover:bg-gray-100"
                  onClick={() => setShowDetails(!showDetails)}
                >
                  {showDetails ? "Hide details" : "Show details"}
                </Button>
                <Button
                  variant="outline"
                  className="text-gray-700 border-gray-300 hover:bg-gray-100"
                  onClick={handleReject}
                >
                  Reject All
                </Button>
                <Button
                  className="bg-[#0077c8] text-white hover:bg-[#005da0]"
                  onClick={handleAccept}
                >
                  Accept All
                </Button>
              </div>
            </div>

            {/* Cookie Details */}
            {showDetails && (
              <div className="mt-4 border-t pt-4">
                <Tabs defaultValue="necessary">
                  <TabsList className="bg-gray-100">
                    <TabsTrigger value="necessary">Necessary</TabsTrigger>
                    <TabsTrigger value="preferences">Preferences</TabsTrigger>
                    <TabsTrigger value="statistics">Statistics</TabsTrigger>
                    <TabsTrigger value="marketing">Marketing</TabsTrigger>
                  </TabsList>
                  <TabsContent value="necessary" className="pt-4">
                    <p className="text-sm text-gray-600 mb-3">
                      Necessary cookies help make a website usable by enabling basic functions like page navigation and
                      access to secure areas of the website. The website cannot function properly without these cookies.
                    </p>
                    <div className="border rounded p-3 bg-gray-50">
                      <h4 className="font-medium mb-2">Biogen</h4>
                      <div className="text-xs text-gray-600 space-y-2">
                        <p><strong>httpOnly:</strong> Ensures visitor browsing-security by preventing cross-site request forgery.</p>
                        <p><strong>queryString_cookie:</strong> Necessary to optimize the website's search-bar function.</p>
                        <p><strong>renderid:</strong> Used to assign the visitor to a specific server.</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="preferences" className="pt-4">
                    <p className="text-sm text-gray-600">
                      Preference cookies enable a website to remember information that changes the way the website behaves
                      or looks, like your preferred language or the region that you are in.
                    </p>
                  </TabsContent>
                  <TabsContent value="statistics" className="pt-4">
                    <p className="text-sm text-gray-600">
                      Statistic cookies help website owners to understand how visitors interact with websites by
                      collecting and reporting information anonymously.
                    </p>
                  </TabsContent>
                  <TabsContent value="marketing" className="pt-4">
                    <p className="text-sm text-gray-600">
                      Marketing cookies are used to track visitors across websites. The intention is to display ads
                      that are relevant and engaging for the individual user and thereby more valuable for publishers
                      and third party advertisers.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
