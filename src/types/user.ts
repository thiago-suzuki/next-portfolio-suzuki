import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export type SocialMediasUser = {
    icon: ReactNode
    url: string
}

export type MetadatasUser = {
    quantity: number
    description: string
}

export type TechnologiesUser = {
    icon: StaticImageData;
    description: string;
}

export type ProjectsUser = {
  title: string;
  image: StaticImageData;
  description: Record<string, string>;
  deploy: string | null;
  source: string;
};