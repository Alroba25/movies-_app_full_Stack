"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
export const addToMyList = async (
  movieId: number,
  mediaType: string = "movie",
) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { error: "Not authenticated" };
    }

    await prisma.myList.create({
      data: {
        userId,
        movieId,
        mediaType,
      },
    });
    revalidatePath("/myList");
    return { success: true };
  } catch (error: any) {
    if (error.code === "P2002") {
      return { error: "Already in your list" };
    }
    return { error: "Failed to add to list" };
  }
};

export const removeFromMyList = async (movieId: number) => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { error: "Not authenticated" };
    }

    await prisma.myList.deleteMany({
      where: {
        userId,
        movieId,
      },
    });
    revalidatePath("/myList");
    return { success: true };
  } catch (error) {
    return { error: "Failed to remove from list" };
  }
};

export const getMyList = async () => {
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Not authenticated");
  }

  const myList = await prisma.myList.findMany({
    where: {
      userId,
    },
  });

  return myList;
};
// not use now
export const removeAllFromList = async () => {
  try {
    const { userId } = await auth();
    if (!userId) {
      return { error: "Not authenticated" };
    }

    await prisma.myList.deleteMany({
      where: {
        userId,
      },
    });
    revalidatePath("/myList");
    return { success: true };
  } catch (error) {
    return { error: "Failed to remove from list" };
  }
};
