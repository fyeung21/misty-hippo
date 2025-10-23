import { Heart } from "lucide-react";

export default function FavesButton() {
  return (
    <button>
      <Heart className="hover:fill-pink-400 hover:stroke-pink-400" />
    </button>
  );
}
