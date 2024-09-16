"use client";

import React, { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { saveAs } from "file-saver";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const [findText, setFindText] = useState<string>("");
  const [replaceText, setReplaceText] = useState<string>("");

  // Update character and word count
  const characterCount = text.length;
  const wordCount = text
    .trim()
    .split(/\s+/)
    .filter((word) => word).length;

  // Text operations
  const handleCapitalize = () => {
    setText(text.replace(/\b\w/g, (char) => char.toUpperCase()));
  };

  const handleRemoveExtraSpaces = () => {
    setText(text.replace(/\s+/g, " ").trim());
  };

  const handleUppercase = () => {
    setText(text.toUpperCase());
  };

  const handleLowercase = () => {
    setText(text.toLowerCase());
  };

  // Find and replace
  const handleReplace = () => {
    setText(text.replace(findText, replaceText));
  };

  const handleReplaceAll = () => {
    const regex = new RegExp(findText, "g");
    setText(text.replace(regex, replaceText));
  };

  // Export functions
  const exportAsTxt = () => {
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "exported_text.txt");
  };

  // Highlighting find text in the textarea
  // const getHighlightedText = () => {
  //   if (!findText) return text;

  //   const parts = text.split(new RegExp(`(${findText})`, "gi"));
  //   return parts.map((part, index) =>
  //     part.toLowerCase() === findText.toLowerCase() ? (
  //       <mark key={index} style={{ backgroundColor: "yellow" }}>
  //         {part}
  //       </mark>
  //     ) : (
  //       part
  //     ),
  //   );
  // };

  return (
    <>
      <div className="px-2 sm:px-4 md:px-6 py-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-8 lg:col-span-9 rounded-xl h-[50vh] sm:h-full">
            <Textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your text here..."
              className="w-full h-full resize-none"
            />
            {/* <div className="relative top-0 left-0 w-full h-full p-2 pointer-events-none whitespace-pre-wrap overflow-hidden">
              {getHighlightedText()}
            </div> */}
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 space-y-2">
            <div className="w-full flex flex-col">
              <div className="grid gap-3">
                <div className="font-semibold">Details</div>
                <ul className="grid gap-3">
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Characters</span>
                    <span>{characterCount}</span>
                  </li>
                  <li className="flex items-center justify-between">
                    <span className="text-muted-foreground">Words</span>
                    <span>{wordCount}</span>
                  </li>
                </ul>
                <Separator className="my-2" />
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="w-full"
                onClick={handleCapitalize}
              >
                Capitalize
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleRemoveExtraSpaces}
              >
                Remove spaces
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleUppercase}
              >
                Uppercase
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleLowercase}
              >
                Lowercase
              </Button>
            </div>
            <Separator className="my-4" />
            <div className="flex flex-col">
              <div className="space-y-1">
                <div className="font-semibold">Find and Replace</div>
              </div>
              <form
                className="space-y-2 mt-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input
                    type="text"
                    id="find"
                    placeholder="Find"
                    value={findText}
                    onChange={(e) => setFindText(e.target.value)}
                  />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Input
                    type="text"
                    id="replace"
                    placeholder="Replace"
                    value={replaceText}
                    onChange={(e) => setReplaceText(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Button className="w-full" onClick={handleReplace}>
                    Replace
                  </Button>
                  <Button
                    className="w-full"
                    variant="outline"
                    onClick={handleReplaceAll}
                  >
                    Replace All
                  </Button>
                </div>
              </form>
            </div>
            <Separator className="my-4" />
            <div className="w-full flex flex-col">
              <div className="grid gap-3">
                <div className="font-semibold">Export</div>
                <div className="grid gap-2">
                  <Button className="w-full" onClick={exportAsTxt}>
                    Export .txt
                  </Button>
                </div>
                <Separator className="my-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
