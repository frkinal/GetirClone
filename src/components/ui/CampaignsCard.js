import React from "react";

export default function CampaignsCard({ campaigns: { id, image } }) {
  return (
    <a href="#" className="text-center p-4">
      <img src={image} className="rounded-lg border-gray-200" />
    </a>
  );
}
