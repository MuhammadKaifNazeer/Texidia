import React from "react";
import { Button } from "@/components/ui/button";
import { Ellipsis } from "lucide-react";

const Navbar: React.FC = () => {
  return (
    <div>
      <div className="hidden h-full flex-col md:flex border-b">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
          <div className="ml-auto flex w-full space-x-2 sm:justify-end">
            <Button variant={"secondary"}>Save</Button>
            <div className="hidden space-x-2 md:flex">
              <Button variant={"secondary"}>View Code</Button>
              <Button variant={"secondary"}>Share</Button>
              <Button variant={"secondary"} size={"icon"}>
                <Ellipsis />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
