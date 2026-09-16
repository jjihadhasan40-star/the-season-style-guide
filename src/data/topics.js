// src/data/topics.js
// Central content store for every category + topic page.
// Edit copy/images here â€” the page templates read from this file.

const allHolidaySeasons = [
  {
    slug: "halloween",
    name: "Halloween",
    tagline: "Spooky, stylish, and full of atmosphere",
    heroImg: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Halloween is the season's most theatrical holiday â€” equal parts eerie and elegant. From flickering porch lanterns to a candlelit dessert table, here's how to make it feel curated rather than costume-store chaotic.",
    sections: [
      {
        heading: "Decor Ideas",
        items: [
          { title: "A Spooky Welcome: Front Porch Ideas That Wow", img: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=600&q=80", desc: "Lanterns, carved pumpkins, and layered lighting for a porch that photographs beautifully after dark." },
          { title: "Moody Mantels for October", img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=600&q=80", desc: "Dried florals, black candles, and warm neutrals â€” Halloween decor that still feels like home." },
          { title: "Tablescapes with a Gothic Edge", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Deep burgundy linens and taper candles set a dinner-party tone, not a haunted house one." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A Modern Charcuterie 'Boo-rd'", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Dark grapes, spiced nuts, and a few playful shapes â€” festive without being novelty." },
          { title: "Roasted Pumpkin Soup, Two Ways", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80", desc: "A silky base recipe with a savory and a spiced-sweet variation for guests to choose." },
          { title: "Black Velvet Cupcakes", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "A cocoa-forward cake with a deep-purple buttercream â€” no food coloring overload required." },
        ],
      },
      {
        heading: "Costumes & Style",
        items: [
          { title: "Elevated Costume Ideas for Adults", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "Editorial-inspired looks you can build from pieces already in your closet." },
          { title: "Coordinated Family Costume Themes", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80", desc: "Palette-matched, not matching-matching â€” a softer way to do a group costume." },
          { title: "Halloween Makeup Without the Mess", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "Three looks that use products already in your everyday makeup bag." },
        ],
      },
    ],
  },
  {
    slug: "thanksgiving",
    name: "Thanksgiving",
    tagline: "A gathering worth setting the table for",
    heroImg: "https://images.unsplash.com/photo-1631310383178-ca2dc06444ee?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Thanksgiving is the year's biggest table â€” this is how to plan the menu, the seating, and the centerpiece without losing the week to it.",
    sections: [
      {
        heading: "Tablescapes & Decor",
        items: [
          { title: "A Modern Thanksgiving Table, From Start to Finish", img: "https://images.unsplash.com/photo-1631310383178-ca2dc06444ee?auto=format&fit=crop&w=600&q=80", desc: "Linen, stoneware, and a low centerpiece so guests can actually see each other." },
          { title: "Budget-Friendly Centerpieces", img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=600&q=80", desc: "Grocery-store flowers and foraged branches, arranged like they weren't." },
          { title: "Place Cards Worth Keeping", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Simple calligraphy ideas that double as a small keepsake." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "The Make-Ahead Thanksgiving Timeline", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "What to cook three days, one day, and two hours out." },
          { title: "A Brined Turkey That Actually Stays Juicy", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "The dry-brine method professional kitchens rely on." },
          { title: "Five Sides That Aren't Just Casserole", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80", desc: "Fresh, bright dishes to balance a heavy table." },
        ],
      },
    ],
  },
  {
    slug: "christmas",
    name: "Christmas",
    tagline: "The most decorated season of the year",
    heroImg: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=1600&q=80",
    intro:
      "From the tree to the gift table, Christmas is where the whole home gets dressed up. Here's our edit of what's worth doing well.",
    sections: [
      {
        heading: "Decor & Tree Styling",
        items: [
          { title: "The Ultimate Christmas Gift Guide", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "Thoughtful presents organized by who's hardest to shop for." },
          { title: "A Tree That Doesn't Look Like Everyone Else's", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80", desc: "Layering technique, ornament scale, and ribbon placement, explained." },
          { title: "Mantel & Staircase Garland, Done Right", img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=600&q=80", desc: "Fresh greenery that lasts the whole season without shedding everywhere." },
        ],
      },
      {
        heading: "Food & Entertaining",
        items: [
          { title: "A Christmas Eve Menu for Six", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "A relaxed, mostly make-ahead dinner that doesn't compete with the big day." },
          { title: "Cookie Exchange Essentials", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "Three recipes that travel well and always disappear first." },
          { title: "A Hot Cocoa Bar Worth Building", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Toppings, mix-ins, and mugs for a cozy self-serve station." },
        ],
      },
    ],
  },
  {
    slug: "easter",
    name: "Easter",
    tagline: "Soft colors, spring light, and a full table",
    heroImg: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Easter marks the first real gathering of spring â€” pastel without being precious, and a menu built around what's fresh.",
    sections: [
      {
        heading: "Decor & Table Styling",
        items: [
          { title: "Easter Eggs, Naturally Dyed", img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80", desc: "Onion skins, beets, and turmeric for soft, unexpected hues." },
          { title: "A Spring Tablescape in Neutrals", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Ranunculus, linen, and pale ceramics â€” pastel without the sugar-coating." },
          { title: "An Easter Basket Worth Reusing", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Woven baskets styled to double as home decor after the holiday." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A Spring Brunch Menu", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Asparagus, citrus, and a showstopping bake that serves a crowd." },
          { title: "The Perfect Deviled Egg, Upgraded", img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80", desc: "Three flavor variations on the classic Easter appetizer." },
        ],
      },
    ],
  },
  {
    slug: "valentines-day",
    name: "Valentine's Day",
    tagline: "Romance, done with restraint",
    heroImg: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Valentine's Day doesn't need to be red hearts and roses â€” a candlelit table and a thoughtful menu do most of the work.",
    sections: [
      {
        heading: "Decor & Setting the Mood",
        items: [
          { title: "A Candlelit Table for Two", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Low florals and taper candles so conversation stays the focus." },
          { title: "Thoughtful Gifts That Aren't Chocolate", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Ideas organized by how long you've been together." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A Three-Course Dinner at Home", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Restaurant-style plating with a manageable prep timeline." },
          { title: "Dessert for Two, No Leftovers", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "Small-batch recipes so you're not eating cake all week." },
        ],
      },
    ],
  },
  {
    slug: "fall",
    name: "Fall",
    tagline: "Sweater weather, styled",
    heroImg: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Fall is a mood as much as a season â€” warm textures, early sunsets, and a home that feels like it's ready for them.",
    sections: [
      {
        heading: "Home & Decor",
        items: [
          { title: "Cozy Fall Living Room Ideas", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Layered textiles and warm lighting for the season's first cold nights." },
          { title: "A Fall Wreath That Lasts All Season", img: "https://images.unsplash.com/photo-1668300566192-85e76c99c0b7?auto=format&fit=crop&w=600&q=80", desc: "Dried, not fresh â€” a wreath that still looks good in November." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "Soups to Make on Repeat", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Three one-pot recipes for the first chilly week of the year." },
          { title: "Apple Recipes Beyond the Pie", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80", desc: "Savory and sweet ways to use a fall apple-picking haul." },
        ],
      },
    ],
  },
  {
    slug: "winter",
    name: "Winter",
    tagline: "Slow mornings and warm light",
    heroImg: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Winter is the season for staying in well â€” warm textures, low light, and food that makes the whole house smell good.",
    sections: [
      {
        heading: "Home & Comfort",
        items: [
          { title: "Layering a Bed for Winter", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "The right order for sheets, blankets, and a duvet that actually keeps you warm." },
          { title: "Making a Small Space Feel Cozy", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "Lighting and texture tricks for apartments without a fireplace." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A Winter Braise for Sunday Dinner", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Low and slow â€” mostly hands-off once it's in the oven." },
          { title: "Warm Drinks Beyond Hot Cocoa", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "Spiced ciders and mocktails for a crowd." },
        ],
      },
    ],
  },
  {
    slug: "spring",
    name: "Spring",
    tagline: "Fresh starts, lighter rooms",
    heroImg: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Spring is a reset â€” for the home, the wardrobe, and the weekend menu. Here's where we'd start.",
    sections: [
      {
        heading: "Home & Decor",
        items: [
          { title: "A Room-by-Room Spring Refresh", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Small swaps that make a home feel lighter without a full redecorate." },
          { title: "Bringing Fresh Flowers Into Every Room", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Budget-friendly arranging tips using grocery-store stems." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "First-of-the-Season Produce Recipes", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "What to cook the moment asparagus and peas show up at the market." },
        ],
      },
    ],
  },
  {
    slug: "summer",
    name: "Summer",
    tagline: "Long days, easy entertaining",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Summer is for outdoor tables, cold drinks, and menus that don't require the oven. Here's our warm-weather edit.",
    sections: [
      {
        heading: "Entertaining & Decor",
        items: [
          { title: "Setting an Outdoor Table That Works", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Weather-proof linens, citronella that doesn't smell like citronella, and lighting for after dark." },
          { title: "A Backyard Movie Night, Elevated", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "Blankets, snacks, and a setup that takes twenty minutes." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A No-Cook Summer Dinner", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "A full menu that never turns the oven on." },
          { title: "Frozen Drinks Worth the Blender Cleanup", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Three warm-weather cocktails and their mocktail versions." },
        ],
      },
    ],
  },
];

export const holidaySeasons = allHolidaySeasons.filter((topic) =>
  ["halloween", "thanksgiving", "christmas", "easter", "fall"].includes(topic.slug),
);
export const legacyHolidaySeasons = allHolidaySeasons.filter((topic) =>
  ["winter", "spring", "summer"].includes(topic.slug),
);

const allSpecialDays = [
  {
    slug: "mothers-day",
    name: "Mother's Day",
    tagline: "A day built around her, not the brunch reservation",
    heroImg: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Mother's Day rewards a little planning â€” here's how to make it feel personal, whether you're hosting brunch or sending something thoughtful from afar.",
    sections: [
      {
        heading: "Gift Ideas",
        items: [
          { title: "Gifts for the Mom Who Says She Doesn't Need Anything", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Thoughtful picks organized by what she actually spends her time on." },
          { title: "A Flower Arrangement That Lasts Longer", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "What to ask for at the florist so the bouquet holds up past day three." },
        ],
      },
      {
        heading: "Hosting Ideas",
        items: [
          { title: "A Mother's Day Brunch Menu", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Mostly make-ahead dishes so no one's in the kitchen all morning." },
        ],
      },
    ],
  },
  {
    slug: "fathers-day",
    name: "Father's Day",
    tagline: "Low-key, high-thought",
    heroImg: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Father's Day tends to be simpler by design â€” a good meal, a good gift, and not much fuss. Here's what we'd actually give and cook.",
    sections: [
      {
        heading: "Gift Ideas",
        items: [
          { title: "Gifts That Aren't a Tie", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "Ideas grouped by the dad who grills, the dad who reads, and the dad who has everything." },
        ],
      },
      {
        heading: "Food & Grilling",
        items: [
          { title: "A Father's Day Cookout Menu", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "A full backyard spread, including two sides that hold up outdoors." },
        ],
      },
    ],
  },
  {
    slug: "graduation",
    name: "Graduation",
    tagline: "Celebrating a milestone, well",
    heroImg: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Graduation season moves fast â€” here's how to put together a celebration and a gift that actually feels worthy of the moment.",
    sections: [
      {
        heading: "Party Ideas",
        items: [
          { title: "A Graduation Party That Isn't a Kids' Party", img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80", desc: "Grown-up decor and a menu that works for mixed-age guests." },
        ],
      },
      {
        heading: "Gift Ideas",
        items: [
          { title: "Gifts for the Next Chapter", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "Practical, meaningful picks for someone starting a new job or new city." },
        ],
      },
    ],
  },
  {
    slug: "baby-shower",
    name: "Baby Shower",
    tagline: "Sweet, not saccharine",
    heroImg: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1600&q=80",
    intro:
      "A baby shower can be soft and celebratory without tipping into overly cute â€” here's our take on doing it with a little more style.",
    sections: [
      {
        heading: "Decor & Hosting",
        items: [
          { title: "A Baby Shower Theme That Isn't Pastel Balloons", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80", desc: "Neutral palettes and simple florals for a shower that photographs well." },
        ],
      },
      {
        heading: "Gift Ideas",
        items: [
          { title: "Baby Gifts New Parents Actually Use", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Beyond the registry basics â€” a few thoughtful extras." },
        ],
      },
    ],
  },
];

const birthday = {
  slug: "birthday",
  name: "Birthday",
  tagline: "Thoughtful ways to celebrate another year",
  heroImg: "https://images.unsplash.com/photo-1513151233558-d860cade8176?auto=format&fit=crop&w=1600&q=80",
  intro: "From intimate dinners to full-room celebrations, ideas for making birthdays feel personal and memorable.",
  sections: [],
};

export const specialDays = [
  allHolidaySeasons.find((topic) => topic.slug === "valentines-day"),
  ...allSpecialDays.filter((topic) => ["mothers-day", "fathers-day", "graduation"].includes(topic.slug)),
  birthday,
];
export const legacySpecialDays = allSpecialDays.filter((topic) => topic.slug === "baby-shower");

const allLifestyleTopics = [
  {
    slug: "home",
    name: "Home",
    tagline: "A well-lived-in, well-styled home",
    heroImg: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Home is where the seasons show up first â€” small, seasonal changes that keep a space feeling current without a renovation.",
    sections: [
      {
        heading: "Featured Ideas",
        items: [
          { title: "A Living Room Refresh for Under $200", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Where to spend and where to skip when updating a room on a budget." },
          { title: "Organizing the Entryway Everyone Uses", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "A system that actually survives a family of four." },
        ],
      },
    ],
  },
  {
    slug: "fashion",
    name: "Fashion",
    tagline: "Dressing for the season, on repeat",
    heroImg: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Seasonal style doesn't have to mean a new wardrobe â€” a few key pieces do most of the work.",
    sections: [
      {
        heading: "Featured Ideas",
        items: [
          { title: "The Ten Pieces Worth Owning This Season", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "A capsule approach to dressing for the next few months." },
          { title: "How to Layer Without Looking Bulky", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "Fabric and proportion tips for cold-weather dressing." },
        ],
      },
    ],
  },
  {
    slug: "food",
    name: "Food",
    tagline: "What we're cooking, right now",
    heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Seasonal cooking, weeknight staples, and the occasional showstopper â€” this is the food we keep coming back to.",
    sections: [
      {
        heading: "Featured Recipes",
        items: [
          { title: "Five Weeknight Dinners on Repeat", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Fast, reliable recipes for busy weeks." },
          { title: "A Seasonal Produce Guide", img: "https://images.unsplash.com/photo-1631310383178-ca2dc06444ee?auto=format&fit=crop&w=600&q=80", desc: "What's actually in season right now, and what to do with it." },
        ],
      },
    ],
  },
  {
    slug: "beauty",
    name: "Beauty",
    tagline: "Simple routines, seasonal shifts",
    heroImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80",
    intro:
      "A beauty routine that adapts with the seasons, without turning into a twelve-step ritual.",
    sections: [
      {
        heading: "Featured Ideas",
        items: [
          { title: "Adjusting Your Skincare for Colder Weather", img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80", desc: "What to add, and what to pause, as the air gets drier." },
          { title: "A Five-Minute Everyday Makeup Routine", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "Fewer products, better placement." },
        ],
      },
    ],
  },
];

const foodAndRecipes = {
  ...allLifestyleTopics.find((topic) => topic.slug === "food"),
  slug: "food-recipes",
  name: "Food & Recipes",
};
const fashionAndBeauty = {
  ...allLifestyleTopics.find((topic) => topic.slug === "fashion"),
  slug: "fashion-beauty",
  name: "Fashion & Beauty",
};
const wellness = {
  slug: "wellness",
  name: "Wellness",
  tagline: "Small rituals for feeling well",
  heroImg: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1600&q=80",
  intro: "Practical ideas for restorative routines, mindful habits, and a more balanced everyday.",
  sections: [],
};
const entertaining = {
  slug: "entertaining",
  name: "Entertaining",
  tagline: "Gathering well, without the fuss",
  heroImg: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80",
  intro: "Menus, settings, and hosting ideas for making time together feel easy and considered.",
  sections: [],
};

export const lifestyleTopics = [
  allLifestyleTopics.find((topic) => topic.slug === "home"),
  foodAndRecipes,
  fashionAndBeauty,
  wellness,
  entertaining,
];
export const legacyLifestyleTopics = allLifestyleTopics.filter((topic) =>
  ["fashion", "food", "beauty"].includes(topic.slug),
);