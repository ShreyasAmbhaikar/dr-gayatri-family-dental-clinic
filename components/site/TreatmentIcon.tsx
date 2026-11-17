import React from "react";
import {
  Activity,
  Award,
  Baby,
  Bone,
  Crown,
  Droplets,
  Gem,
  HeartPulse,
  Layers,
  Microscope,
  Scissors,
  ShieldPlus,
  Siren,
  Smile,
  Snowflake,
  Sparkles,
  Stethoscope,
  Sun,
  Wind,
  Wrench,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { ToothIcon } from "@/components/ui/icons";
import type { IconKey } from "@/lib/treatments/summary";

const ICONS: Record<Exclude<IconKey, "tooth">, LucideIcon> = {
  Wrench,
  Activity,
  Smile,
  Baby,
  Droplets,
  Scissors,
  Bone,
  Sun,
  Crown,
  Layers,
  Siren,
  Award,
  ShieldPlus,
  HeartPulse,
  Gem,
  Sparkles,
  Stethoscope,
  Microscope,
  Wind,
  Snowflake,
  Zap,
};

export default function TreatmentIcon({ icon, className = "", strokeWidth = 1.6 }: { icon: IconKey; className?: string; strokeWidth?: number }) {
  if (icon === "tooth") return <ToothIcon className={className} />;
  const Icon = ICONS[icon];
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden="true" />;
}
