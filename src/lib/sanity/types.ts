import type { SanityImageSource } from "@sanity/image-url";

export interface Ministry {
  _id: string;
  tag: string;
  title: string;
  image: SanityImageSource;
  content: string;
  order: number;
}

export interface Belief {
  title: string;
  content: string[];
}

export interface Homepage {
  _id: string;
  heroTitle: string;
  heroQuote: string;
  heroQuoteReference: string;
  heroVideo?: {
    asset: {
      url: string;
    };
  };
  aboutTitle: string;
  aboutContent: string;
  aboutImage?: SanityImageSource;
  aboutButtonText: string;
  beliefsTitle: string;
  beliefsBackgroundImage?: SanityImageSource;
  beliefs: Belief[];
  servicesTitle: string;
  servicesSubtitle: string;
  servicesDescription?: string;
}

export interface HistorySection {
  title: string;
  paragraphs?: string[];
  list?: string[];
  afterList?: string;
}

export interface History {
  _id: string;
  pageTitle: string;
  backgroundImage: SanityImageSource;
  intro: string;
  sections: HistorySection[];
  presentDayTitle: string;
  presentDayImage: SanityImageSource;
  presentDayContent: string[];
  presentDayMinistries: string[];
}

export interface Contacts {
  _id: string;
  pageTitle: string;
  sundayServiceTime: string;
  weekdayServiceDays: string;
  weekdayServiceTime: string;
  weekdayServiceLabel: string;
  address: string;
  googleMapsUrl: string;
  mapEmbedUrl: string;
}

export interface Support {
  _id: string;
  pageTitle: string;
  introText: string;
  bibleVerse: string;
  donationSectionTitle: string;
  recipientName: string;
  recipientCode: string;
  bankName: string;
  iban: string;
  receiver: string;
  paymentPurpose: string;
  donateButtonText: string;
  donateButtonUrl: string;
}

export interface Media {
  _id: string;
  pageTitle: string;
  pageSubtitle: string;
  youtubeChannelId: string;
}

export interface NavigationItem {
  label: string;
  path: string;
}

export interface SiteSettings {
  _id: string;
  siteName: string;
  siteDescription?: string;
  email: string;
  address: string;
  googleMapsUrl: string;
  facebookUrl: string;
  youtubeUrl: string;
  instagramUrl: string;
  youtubeChannelId: string;
  copyrightText: string;
  footerCredits?: string;
  socialMediaTitle: string;
  navigation: NavigationItem[];
}
