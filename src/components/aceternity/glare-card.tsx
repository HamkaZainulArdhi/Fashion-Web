import { GlareCard } from "@/components/UI/glare-card";

export function Glare({ imageSrc }: { imageSrc: string }) {
  return (
    <GlareCard className="flex flex-col bg-blue-00  items-center h-full w-full justify-center p-2">
      <img src={imageSrc} alt="Glare Image" className=" h-full w-full rounded-lg" />
    </GlareCard>
  );7
}
