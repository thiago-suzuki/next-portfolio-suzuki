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

export type EnterprisesUser = {
    nameEnterprise: string;
    imageEnterprise: StaticImageData;
    linkEnterprise: string;
    positions: PositionsEnterpriseUser[];
}

export type PositionsEnterpriseUser = {
    namePosition: Record<string, string>;
    timeAtPosition: Record<string, string>;
    actualPosition: boolean;
}

export type ParagraphsAboutUser = {
    one: Record<string, string>;
    two: Record<string, string>;
    three: Record<string, string>;
}