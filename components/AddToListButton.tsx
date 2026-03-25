"use client";

import { useTransition } from "react";
import { Plus, Check } from "lucide-react";
import toast from "react-hot-toast";
import { addToMyList, getMyList } from "@/lib/actions/mylistActions";
import { Button } from "@/components/ui/button";

export default function AddToListButton({
  movieId,
  mediaType = "movies",
  children,
}: {
  movieId: number;
  mediaType?: "movies" | "series";
  children?: React.ReactNode;
}) {
  const [isPending, startTransition] = useTransition();
  const handleAddToList = () => {
    startTransition(async () => {
      const movieIdCheck = await getMyList();
      if (movieIdCheck.find((item) => item.movieId === movieId)) {
        toast.error("Already in your list");
        return;
      }
      try {
        const result = await addToMyList(movieId, mediaType);
        if (result?.error) {
          toast.error(result.error);
        } else {
          toast.success("Added to My List!");
        }
      } catch (error) {
        toast.error("Failed to add to My List");
      }
    });
  };

  return (
    <Button
      onClick={handleAddToList}
      disabled={isPending}
      title="Add to My List"
      className="cursor-pointer flex items-center space-x-3 bg-white/5 border border-white/20 hover:border-white hover:bg-white/10 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-md text-sm md:text-base font-semibold tracking-wide"
    >
      {isPending ? (
        <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
      ) : (
        <Plus className="w-6 h-6" />
      )}
      {children}
    </Button>
  );
}
