"use client";

import { useTransition } from "react";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { removeFromMyList } from "@/lib/actions/mylistActions";
import { Button } from "@/components/ui/button";

export default function RemoveFromListButton({ movieId }: { movieId: number }) {
  const [isPending, startTransition] = useTransition();

  const handleRemove = (e: React.MouseEvent) => {
    e.preventDefault(); // crucial to stop Link navigation
    e.stopPropagation();

    startTransition(async () => {
      try {
        const result = await removeFromMyList(movieId);
        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success("Removed from My List");
        }
      } catch (error) {
        toast.error("Failed to remove item");
      }
    });
  };

  return (
    <Button
      onClick={handleRemove}
      disabled={isPending}
      title="Remove from List"
      variant="ghost"
      className="absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center bg-black/50 hover:bg-black/80 hover:scale-110 focus:scale-110 border border-white/10 text-white/80 hover:text-white transition-all duration-300 z-50 p-0 opacity-0 group-hover:opacity-100"
    >
      {isPending ? (
        <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
      ) : (
        <X className="w-5 h-5" />
      )}
    </Button>
  );
}
