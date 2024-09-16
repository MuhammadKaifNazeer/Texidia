"use client";

import { useState } from "react";
import { Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ShareButton() {
  const { toast } = useToast();

  const [url, setUrl] = useState<string>("");

  const updateUrl = () => {
    const currentUrl = window.location.href;
    setUrl(currentUrl);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    toast({
      description: "URL Copied",
    });
  };

  return (
    <Dialog onOpenChange={updateUrl}>
      <DialogTrigger asChild>
        <Button variant="default">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Share this link with your friends.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Label htmlFor="link" className="sr-only">
              Link
            </Label>
            <Input id="link" value={url} readOnly />
          </div>
          <Button type="button" size="sm" className="px-3" onClick={handleCopy}>
            <span className="sr-only">Copy</span>
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
