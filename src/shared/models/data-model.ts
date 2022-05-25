interface primaryTagsModel {
  type: string;
  subType: string;
  label: string;
  value: string;
}

export interface DataModel {
  id: string;
  url: string;
  urlType: string | null;
  type: string;
  subType: string;
  title: string;
  description: string;
  imageId: string | null;
  overlayType: string | null;
  imageType: string | null;
  startDate: number | Date;
  endDate: number | Date;
  featured: boolean;
  campaign: string | null;
  primaryTags: primaryTagsModel[];
  secondaryTags: null;
  authors: string | null;
  city: string | null;
  country: string | null;
  additionalInformation: (string | number | Date)[];
}
