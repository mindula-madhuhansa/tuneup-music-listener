"use client";

import { LoaderCircle } from "lucide-react";

import Box from "@/components/Box";

const Loading = () => {
  return (
    <Box className="h-full flex items-center justify-center">
      <LoaderCircle className="animate-spin" color="#3D3AA8" size={40} />
    </Box>
  );
};

export default Loading;
