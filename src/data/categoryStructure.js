import { holidaySeasons, lifestyleTopics, specialDays } from "./topics.js";
import { withBase } from "../utils/blog.js";

const subcategorySets = {
  halloween: [
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["fashion-beauty", "Fashion & Beauty"],
    ["party-ideas", "Party Ideas"],
    ["crafts-diy", "Crafts & DIY"],
  ],
  thanksgiving: [
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["hosting", "Hosting"],
    ["crafts-diy", "Crafts & DIY"],
    ["gifts", "Gifts"],
  ],
  christmas: [
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["gifts", "Gifts"],
    ["hosting", "Hosting"],
    ["crafts-diy", "Crafts & DIY"],
  ],
  easter: [
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["gifts", "Gifts"],
    ["activities", "Activities"],
    ["crafts-diy", "Crafts & DIY"],
  ],
  fall: [
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["fashion-beauty", "Fashion & Beauty"],
    ["activities", "Activities"],
    ["crafts-diy", "Crafts & DIY"],
  ],
  "valentines-day": [
    ["gifts", "Gifts"],
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["activities", "Activities"],
    ["celebration-ideas", "Celebration Ideas"],
  ],
  "mothers-day": [
    ["gifts", "Gifts"],
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["activities", "Activities"],
    ["celebration-ideas", "Celebration Ideas"],
  ],
  "fathers-day": [
    ["gifts", "Gifts"],
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["activities", "Activities"],
    ["celebration-ideas", "Celebration Ideas"],
  ],
  birthday: [
    ["gifts", "Gifts"],
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["activities", "Activities"],
    ["celebration-ideas", "Celebration Ideas"],
  ],
  graduation: [
    ["gifts", "Gifts"],
    ["decor", "Decor"],
    ["food-drinks", "Food & Drinks"],
    ["activities", "Activities"],
    ["celebration-ideas", "Celebration Ideas"],
  ],
  home: [
    ["decor", "Decor"],
    ["organizing", "Organizing"],
    ["diy-projects", "DIY Projects"],
    ["seasonal-living", "Seasonal Living"],
    ["entertaining", "Entertaining"],
  ],
  "food-recipes": [
    ["weeknight-meals", "Weeknight Meals"],
    ["baking", "Baking"],
    ["seasonal-recipes", "Seasonal Recipes"],
    ["drinks", "Drinks"],
    ["hosting", "Hosting"],
  ],
  "fashion-beauty": [
    ["fashion", "Fashion"],
    ["beauty", "Beauty"],
    ["seasonal-style", "Seasonal Style"],
    ["makeup", "Makeup"],
    ["self-care", "Self-Care"],
  ],
  wellness: [
    ["mindfulness", "Mindfulness"],
    ["fitness", "Fitness"],
    ["self-care", "Self-Care"],
    ["sleep", "Sleep"],
    ["healthy-living", "Healthy Living"],
  ],
  entertaining: [
    ["menus", "Menus"],
    ["table-settings", "Table Settings"],
    ["hosting", "Hosting"],
    ["parties", "Parties"],
    ["outdoor-gatherings", "Outdoor Gatherings"],
  ],
};

function withSubcategories(topic) {
  return {
    ...topic,
    subcategories: (subcategorySets[topic.slug] ?? []).map(([slug, name]) => ({
      slug,
      name,
      tagline: `Ideas and inspiration for ${name.toLowerCase()}.`,
      heroImg: topic.heroImg,
    })),
  };
}

export const holidayCategories = holidaySeasons.map(withSubcategories);
export const specialDayCategories = specialDays.map(withSubcategories);
export const lifestyleCategories = lifestyleTopics.map(withSubcategories);

export const categorySections = {
  holidays: {
    label: "Holidays & Seasons",
    href: withBase("/holidays/"),
    categories: holidayCategories,
  },
  specialDays: {
    label: "Special Days",
    href: withBase("/special-days/"),
    categories: specialDayCategories,
  },
  lifestyle: {
    label: "Lifestyle",
    href: withBase("/lifestyle/"),
    categories: lifestyleCategories,
  },
};

export function findCategory(section, slug) {
  return section.categories.find((category) => category.slug === slug);
}
