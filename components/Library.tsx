"use client";

import { ListMusic, Plus } from "lucide-react";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";
import useUploadModal from "@/hooks/useUploadModal";
import { Song } from "@/types/types";
import MediaItem from "./MediaItem";

interface LibraryProps {
  songs: Song[];
}

const Library = ({ songs }: LibraryProps) => {
  const authModal = useAuthModal();
  const uploadModal = useUploadModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    // TODO: Check for Subscription
    return uploadModal.onOpen();
  };

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 pt-4">
        <div className="inline-flex items-center gap-x-2">
          <ListMusic className="text-neutral-400" size={26} />
          <p className="text-neutral-400 font-medium">Your Library</p>
        </div>

        <Plus
          onClick={onClick}
          size={20}
          className="text-neutral-400 cursor-pointer hover:text-white transition"
        />
      </div>

      <div className="flex flex-col gap-y-2 mt-4 px-3">
        {songs.map((song) => (
          <MediaItem key={song.id} onClick={() => {}} data={song} />
        ))}
      </div>
    </div>
  );
};

export default Library;
