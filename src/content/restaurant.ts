import { Restaurant } from "@/types";

export const restaurant: Restaurant = {
  id: "restaurant-delicious-foods-wah",
  legalOrDisplayName: "Delicious Foods Wah Cantt",
  shortName: "Delicious Foods",
  description: { en: "Whatever you're craving, we've got it." },
  phone: {
    display: "0321-8807790",
    e164: "+923218807790",
    whatsappEnabled: false, // disabled until confirmed
  },
  primaryLocationId: "location-wah-cantt",
  hoursId: "hours-main",
  orderChannels: [
    { type: "phone", value: "+923218807790", enabled: true, label: "Call to order" }
  ],
  socialProfileIds: ["social-facebook"],
  logo: {
    src: "/logo.png", // Will use text logo for now if image isn't available
    alt: { en: "Delicious Foods Logo" },
    width: 200,
    height: 200,
    placeholder: true,
  },
  verification: { status: "verified", source: "printed-menu" }
};
