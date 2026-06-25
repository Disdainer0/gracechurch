import { client } from "./client";
import type { Homepage, Ministry, History, Contacts, Support, Media, SiteSettings } from "./types";

export async function getHomepage(): Promise<Homepage | null> {
  return await client.fetch(`*[_type == "homepage"][0]{..., heroVideo{asset->{url}}}`);
}

export async function getMinistries(): Promise<Ministry[]> {
  return await client.fetch(`*[_type == "ministries"] | order(order asc)`);
}

export async function getHistory(): Promise<History | null> {
  return await client.fetch(`*[_type == "history"][0]`);
}

export async function getContacts(): Promise<Contacts | null> {
  return await client.fetch(`*[_type == "contacts"][0]`);
}

export async function getSupport(): Promise<Support | null> {
  return await client.fetch(`*[_type == "support"][0]`);
}

export async function getMedia(): Promise<Media | null> {
  return await client.fetch(`*[_type == "media"][0]`);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return await client.fetch(`*[_type == "siteSettings"][0]`);
}
