"use server";

import { scrapeAmazonProduct } from "../scraper";

// server actions
export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);

    if (!scrapedProduct) return;

    // connect to database to keep track of the records
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
