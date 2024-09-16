import React from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { ShareButton } from "../ShareButton/ShareButton";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="h-full flex-col flex border-b">
        <div className="flex items-center justify-between w-full md:h-16 px-2 sm:px-4 md:px-6 py-4 max-w-7xl mx-auto">
          <h2 className="text-lg font-semibold">Texidia</h2>
          <div className="flex space-x-2 justify-end">
            <Button variant={"outline"}>View Code</Button>
            <ShareButton />
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
