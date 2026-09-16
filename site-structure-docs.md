# The Season & Style Guide — Site Structure Documentation

This document contains every file created to connect the full Astro site
(navigation, category pages, topic pages, breadcrumbs) to the existing,
untouched homepage.

**Homepage rule:** `src/pages/index.astro` was NOT modified. Everything
below is new.

---

## File Map

```
src/
  utils/
    images.js
  data/
    topics.js
  components/
    Header.astro
    Footer.astro
    Breadcrumbs.astro
    CategoryIndex.astro
    TopicDetail.astro
  layouts/
    SiteLayout.astro
  pages/
    index.astro                       (existing homepage — untouched)
    about/
      index.astro
    holidays-seasons/
      index.astro
      [slug].astro                    (generates 9 routes)
    special-days/
      index.astro
      [slug].astro                    (generates 4 routes)
    lifestyle/
      index.astro
      [slug].astro                    (generates 4 routes)
```

### Routes generated

| Route | Source file |
|---|---|
| `/` | `src/pages/index.astro` (existing) |
| `/holidays-seasons/` | `src/pages/holidays-seasons/index.astro` |
| `/holidays-seasons/halloween/` | `[slug].astro` |
| `/holidays-seasons/thanksgiving/` | `[slug].astro` |
| `/holidays-seasons/christmas/` | `[slug].astro` |
| `/holidays-seasons/easter/` | `[slug].astro` |
| `/holidays-seasons/valentines-day/` | `[slug].astro` |
| `/holidays-seasons/fall/` | `[slug].astro` |
| `/holidays-seasons/winter/` | `[slug].astro` |
| `/holidays-seasons/spring/` | `[slug].astro` |
| `/holidays-seasons/summer/` | `[slug].astro` |
| `/special-days/` | `src/pages/special-days/index.astro` |
| `/special-days/mothers-day/` | `[slug].astro` |
| `/special-days/fathers-day/` | `[slug].astro` |
| `/special-days/graduation/` | `[slug].astro` |
| `/special-days/baby-shower/` | `[slug].astro` |
| `/lifestyle/` | `src/pages/lifestyle/index.astro` |
| `/lifestyle/home/` | `[slug].astro` |
| `/lifestyle/fashion/` | `[slug].astro` |
| `/lifestyle/food/` | `[slug].astro` |
| `/lifestyle/beauty/` | `[slug].astro` |
| `/about/` | `src/pages/about/index.astro` |

Astro's `getStaticPaths()` in each `[slug].astro` file generates real,
separate static pages at build time (e.g. `/holidays-seasons/halloween/index.html`).
This is standard Astro file-based routing — just parameterized so the 17
child pages share one template + one data file instead of 17 near-identical
files, avoiding duplicated CSS/markup.

---

## Setup Instructions

1. Create every folder/file listed in the File Map above inside your
   existing project at `C:\Users\Office\Desktop\green-group`.
2. Copy each code block below into the matching file path exactly as named.
3. Do not edit `src/pages/index.astro` — it stays as your finished homepage.
4. Run your usual dev command (e.g. `npm run dev`) and check:
   - `/` loads the homepage
   - clicking each header nav link goes to the right section page
   - each category card on a section page opens its child topic page
   - the breadcrumb on a topic page (`Home → Section → Topic`) links back correctly
5. No new dependencies are required. `package.json` does not need to change.

---

## `src/utils/images.js`

```js
// src/utils/images.js
// Shared image-fallback helper so a broken remote photo never shows a broken-image icon.

export const fallbackImg = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3ead9"/><stop offset="1" stop-color="#c9a24b"/></linearGradient></defs><rect width="100%" height="100%" fill="url(#g)"/></svg>'
)}`;

export const onImgError = `this.onerror=null;this.src='${fallbackImg}'`;
```

---

## `src/data/topics.js`

```js
// src/data/topics.js
// Central content store for every category + topic page.
// Edit copy/images here — the page templates read from this file.

export const holidaySeasons = [
  {
    slug: "halloween",
    name: "Halloween",
    tagline: "Spooky, stylish, and full of atmosphere",
    heroImg: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Halloween is the season's most theatrical holiday — equal parts eerie and elegant. From flickering porch lanterns to a candlelit dessert table, here's how to make it feel curated rather than costume-store chaotic.",
    sections: [
      {
        heading: "Decor Ideas",
        items: [
          { title: "A Spooky Welcome: Front Porch Ideas That Wow", img: "https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=600&q=80", desc: "Lanterns, carved pumpkins, and layered lighting for a porch that photographs beautifully after dark." },
          { title: "Moody Mantels for October", img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891?auto=format&fit=crop&w=600&q=80", desc: "Dried florals, black candles, and warm neutrals — Halloween decor that still feels like home." },
          { title: "Tablescapes with a Gothic Edge", img: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&w=600&q=80", desc: "Deep burgundy linens and taper candles set a dinner-party tone, not a haunted house one." },
        ],
      },
      {
        heading: "Food & Recipes",
        items: [
          { title: "A Modern Charcuterie 'Boo-rd'", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Dark grapes, spiced nuts, and a few playful shapes — festive without being novelty." },
          { title: "Roasted Pumpkin Soup, Two Ways", img: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?auto=format&fit=crop&w=600&q=80", desc: "A silky base recipe with a savory and a spiced-sweet variation for guests to choose." },
          { title: "Black Velvet Cupcakes", img: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=600&q=80", desc: "A cocoa-forward cake with a deep-purple buttercream — no food coloring overload required." },
        ],
      },
      {
        heading: "Costumes & Style",
        items: [
          { title: "Elevated Costume Ideas for Adults", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80", desc: "Editorial-inspired looks you can build from pieces already in your closet." },
          { title: "Coordinated Family Costume Themes", img: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=600&q=80", desc: "Palette-matched, not matching-matching — a softer way to do a group costume." },
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
      "Thanksgiving is the year's biggest table — this is how to plan the menu, the seating, and the centerpiece without losing the week to it.",
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
      "Easter marks the first real gathering of spring — pastel without being precious, and a menu built around what's fresh.",
    sections: [
      {
        heading: "Decor & Table Styling",
        items: [
          { title: "Easter Eggs, Naturally Dyed", img: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&w=600&q=80", desc: "Onion skins, beets, and turmeric for soft, unexpected hues." },
          { title: "A Spring Tablescape in Neutrals", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Ranunculus, linen, and pale ceramics — pastel without the sugar-coating." },
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
      "Valentine's Day doesn't need to be red hearts and roses — a candlelit table and a thoughtful menu do most of the work.",
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
      "Fall is a mood as much as a season — warm textures, early sunsets, and a home that feels like it's ready for them.",
    sections: [
      {
        heading: "Home & Decor",
        items: [
          { title: "Cozy Fall Living Room Ideas", img: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=600&q=80", desc: "Layered textiles and warm lighting for the season's first cold nights." },
          { title: "A Fall Wreath That Lasts All Season", img: "https://images.unsplash.com/photo-1668300566192-85e76c99c0b7?auto=format&fit=crop&w=600&q=80", desc: "Dried, not fresh — a wreath that still looks good in November." },
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
      "Winter is the season for staying in well — warm textures, low light, and food that makes the whole house smell good.",
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
          { title: "A Winter Braise for Sunday Dinner", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=600&q=80", desc: "Low and slow — mostly hands-off once it's in the oven." },
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
      "Spring is a reset — for the home, the wardrobe, and the weekend menu. Here's where we'd start.",
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

export const specialDays = [
  {
    slug: "mothers-day",
    name: "Mother's Day",
    tagline: "A day built around her, not the brunch reservation",
    heroImg: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Mother's Day rewards a little planning — here's how to make it feel personal, whether you're hosting brunch or sending something thoughtful from afar.",
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
      "Father's Day tends to be simpler by design — a good meal, a good gift, and not much fuss. Here's what we'd actually give and cook.",
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
      "Graduation season moves fast — here's how to put together a celebration and a gift that actually feels worthy of the moment.",
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
      "A baby shower can be soft and celebratory without tipping into overly cute — here's our take on doing it with a little more style.",
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
          { title: "Baby Gifts New Parents Actually Use", img: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=600&q=80", desc: "Beyond the registry basics — a few thoughtful extras." },
        ],
      },
    ],
  },
];

export const lifestyleTopics = [
  {
    slug: "home",
    name: "Home",
    tagline: "A well-lived-in, well-styled home",
    heroImg: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80",
    intro:
      "Home is where the seasons show up first — small, seasonal changes that keep a space feeling current without a renovation.",
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
      "Seasonal style doesn't have to mean a new wardrobe — a few key pieces do most of the work.",
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
      "Seasonal cooking, weeknight staples, and the occasional showstopper — this is the food we keep coming back to.",
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
```

---

## `src/components/Header.astro`

```astro
---
// src/components/Header.astro
export interface Props {
  active?: "home" | "holidays" | "special" | "lifestyle" | "about";
}
const { active = "" } = Astro.props;

const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "holidays", label: "Holidays & Seasons", href: "/holidays-seasons/" },
  { key: "special", label: "Special Days", href: "/special-days/" },
  { key: "lifestyle", label: "Lifestyle", href: "/lifestyle/" },
  { key: "about", label: "About", href: "/about/" },
];
---

<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="/">
      <svg class="brand-mark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C12 2 6 7 6 13C6 17.4183 8.68629 20 12 20C15.3137 20 18 17.4183 18 13C18 7 12 2 12 2Z" stroke="currentColor" stroke-width="1.3"/>
        <path d="M12 20V10" stroke="currentColor" stroke-width="1.3"/>
      </svg>
      <span>The Season &amp; Style Guide</span>
    </a>
    <nav class="main-nav" aria-label="Primary">
      <ul>
        {nav.map((item) => (
          <li>
            <a href={item.href} class={item.key === active ? "active" : ""}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
    <button class="icon-btn" aria-label="Search">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.6"/>
        <path d="M21 21L16.65 16.65" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    </button>
  </div>
</header>

<style>
  .site-header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 1.6rem 0 0;
  }
  .header-inner {
    max-width: var(--container);
    margin: 0 auto;
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  }
  .brand {
    display: flex;
    align-items: center;
    gap: 0.55rem;
    color: #fff;
    font-family: var(--font-serif);
    font-size: 1.08rem;
    letter-spacing: 0.02em;
    white-space: nowrap;
  }
  .brand-mark { flex-shrink: 0; }
  .main-nav ul { display: flex; gap: 2.2rem; }
  .main-nav a {
    color: rgba(255, 255, 255, 0.88);
    font-size: 0.92rem;
    font-weight: 500;
    padding-bottom: 0.35rem;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s ease, color 0.2s ease;
  }
  .main-nav a:hover, .main-nav a.active {
    color: #fff;
    border-color: rgba(255, 255, 255, 0.85);
  }
  .icon-btn {
    background: none;
    border: none;
    color: #fff;
    cursor: pointer;
    padding: 0.3rem;
    display: flex;
  }
  @media (max-width: 860px) {
    .main-nav { display: none; }
  }
</style>
```

---

## `src/components/Footer.astro`

```astro
---
// src/components/Footer.astro
---
<footer class="site-footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <a class="brand brand-light" href="/">
        <svg class="brand-mark" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C12 2 6 7 6 13C6 17.4183 8.68629 20 12 20C15.3137 20 18 17.4183 18 13C18 7 12 2 12 2Z" stroke="currentColor" stroke-width="1.3"/>
          <path d="M12 20V10" stroke="currentColor" stroke-width="1.3"/>
        </svg>
        <span>The Season &amp; Style Guide</span>
      </a>
      <p>
        We're here to help you celebrate the seasons, special moments with
        style, creativity and a little extra joy.
      </p>
      <a class="text-link text-link-light" href="/about/">Learn More &rarr;</a>
    </div>

    <nav class="footer-nav" aria-label="Footer">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/holidays-seasons/">Holidays &amp; Seasons</a></li>
        <li><a href="/special-days/">Special Days</a></li>
        <li><a href="/lifestyle/">Lifestyle</a></li>
      </ul>
    </nav>

    <nav class="footer-nav" aria-label="Legal">
      <ul>
        <li><a href="/about/">About</a></li>
        <li><a href="/about/">Contact</a></li>
        <li><a href="/about/">Privacy Policy</a></li>
        <li><a href="/about/">Affiliate Disclosure</a></li>
      </ul>
    </nav>
  </div>
  <p class="footer-bottom">&copy; 2026 The Season &amp; Style Guide. All rights reserved.</p>
</footer>

<style>
  .site-footer {
    background: linear-gradient(150deg, #2c2440 0%, #4a3a4f 45%, #a6785a 100%);
    color: rgba(255, 255, 255, 0.85);
    padding: 4rem 2rem 1.6rem;
  }
  .footer-inner {
    max-width: var(--container);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.6fr 1fr 1fr;
    gap: 2.5rem;
    padding-bottom: 2.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.14);
  }
  .brand-light { margin-bottom: 1rem; }
  .footer-brand p {
    font-size: 0.9rem;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.72);
    max-width: 34ch;
    margin: 0 0 1rem;
  }
  .footer-nav ul { display: flex; flex-direction: column; gap: 0.75rem; }
  .footer-nav a { font-size: 0.9rem; color: rgba(255, 255, 255, 0.78); }
  .footer-nav a:hover { color: #fff; }
  .footer-bottom {
    max-width: var(--container);
    margin: 1.6rem auto 0;
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.6);
  }
  @media (max-width: 860px) {
    .footer-inner { grid-template-columns: 1fr 1fr; }
    .footer-brand { grid-column: span 2; }
  }
  @media (max-width: 640px) {
    .footer-inner { grid-template-columns: 1fr; }
    .footer-brand { grid-column: span 1; }
  }
</style>
```

---

## `src/components/Breadcrumbs.astro`

```astro
---
// src/components/Breadcrumbs.astro
// Props: trail = [{ label, href }], last item renders as plain text (current page)
export interface Crumb { label: string; href?: string; }
export interface Props { trail: Crumb[]; }
const { trail } = Astro.props;
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    {trail.map((crumb, i) => (
      <li>
        {i > 0 && <span class="sep" aria-hidden="true">&rarr;</span>}
        {crumb.href && i !== trail.length - 1 ? (
          <a href={crumb.href}>{crumb.label}</a>
        ) : (
          <span aria-current="page">{crumb.label}</span>
        )}
      </li>
    ))}
  </ol>
</nav>

<style>
  .breadcrumbs ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    font-size: 0.85rem;
  }
  .breadcrumbs li { display: flex; align-items: center; gap: 0.5rem; }
  .breadcrumbs a { color: var(--ink-soft); font-weight: 500; }
  .breadcrumbs a:hover { color: var(--burnt-orange-deep); }
  .breadcrumbs span[aria-current] { color: var(--ink); font-weight: 600; }
  .breadcrumbs .sep { color: var(--ink-soft); opacity: 0.5; }
</style>
```

---

## `src/layouts/SiteLayout.astro`

```astro
---
// src/layouts/SiteLayout.astro
// Shared shell (fonts, tokens, header, footer) for every page except the homepage,
// which stays fully self-contained and untouched.
import Header from "../components/Header.astro";
import Footer from "../components/Footer.astro";

export interface Props {
  title: string;
  description?: string;
  active?: "home" | "holidays" | "special" | "lifestyle" | "about";
}
const {
  title,
  description = "A premium editorial destination for holidays, seasons, special days, and everyday lifestyle inspiration.",
  active = "",
} = Astro.props;
---

<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{title} — The Season & Style Guide</title>
    <meta name="description" content={description} />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,500&family=Inter:wght@300;400;500;600&display=swap"
      rel="stylesheet"
    />
  </head>
  <body>
    <Header active={active} />
    <slot />
    <Footer />

    <style is:global>
      :root {
        --ivory: #faf6ee;
        --ivory-deep: #f3ead9;
        --ink: #2a2320;
        --ink-soft: #5a4f47;
        --burnt-orange: #c1622d;
        --burnt-orange-deep: #a24d20;
        --brown: #5c4632;
        --gold: #c9a24b;
        --cream-card: #ffffff;
        --shadow-soft: 0 20px 40px -24px rgba(42, 23, 8, 0.35);
        --radius-lg: 28px;
        --radius-md: 18px;
        --font-serif: "Playfair Display", "Times New Roman", serif;
        --font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        --container: 1240px;
      }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        font-family: var(--font-sans);
        color: var(--ink);
        background: var(--ivory);
        -webkit-font-smoothing: antialiased;
      }
      img { max-width: 100%; display: block; }
      a { color: inherit; text-decoration: none; }
      ul { list-style: none; margin: 0; padding: 0; }
      h1, h2, h3 { font-family: var(--font-serif); font-weight: 600; margin: 0; color: var(--ink); }
      :focus-visible { outline: 2px solid var(--burnt-orange); outline-offset: 3px; }

      .kicker {
        font-family: var(--font-sans);
        font-size: 0.78rem;
        letter-spacing: 0.14em;
        color: var(--burnt-orange-deep);
        margin: 0 0 0.4rem;
        font-weight: 600;
      }
      .text-link { font-weight: 600; font-size: 0.9rem; color: var(--burnt-orange-deep); }
      .text-link-light { color: #fff; }
      .btn {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.95rem 1.9rem;
        border-radius: 999px;
        font-size: 0.95rem;
        font-weight: 600;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
      }
      .btn-primary { background: var(--ivory); color: var(--brown); }
      .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px -12px rgba(0, 0, 0, 0.45); }

      /* Page shell used by every inner page */
      .page-hero {
        position: relative;
        min-height: 420px;
        display: flex;
        align-items: flex-end;
        overflow: hidden;
        background: #1c1410;
      }
      .page-hero-media { position: absolute; inset: 0; }
      .page-hero-media img { width: 100%; height: 100%; object-fit: cover; }
      .page-hero-scrim {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(20,12,8,0.55) 0%, rgba(20,12,8,0.75) 100%);
      }
      .page-hero-content {
        position: relative;
        z-index: 2;
        max-width: var(--container);
        margin: 0 auto;
        width: 100%;
        padding: 9rem 2rem 3rem;
      }
      .page-hero-content .kicker { color: rgba(255,255,255,0.75); }
      .page-hero-content h1 { color: #fff; font-size: clamp(2rem, 4vw, 3rem); margin-bottom: 0.6rem; }
      .page-hero-content p { color: rgba(255,255,255,0.85); max-width: 60ch; line-height: 1.6; margin: 0; }
      .page-hero-content :global(.breadcrumbs a) { color: rgba(255,255,255,0.75); }
      .page-hero-content :global(.breadcrumbs span[aria-current]) { color: #fff; }
      .page-hero-content :global(.breadcrumbs .sep) { color: rgba(255,255,255,0.5); }
      .page-hero-content :global(.breadcrumbs) { margin-bottom: 1.2rem; }

      .section { max-width: var(--container); margin: 0 auto; padding: 4.5rem 2rem; }
      .section-tint { max-width: none; background: var(--ivory-deep); padding-left: 0; padding-right: 0; }
      .section-tint > * { max-width: var(--container); margin-left: auto; margin-right: auto; padding-left: 2rem; padding-right: 2rem; }
      .section-head { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 2.6rem; gap: 1rem; }
      .section-head h2 { font-size: clamp(1.7rem, 2.6vw, 2.3rem); }
      .view-all { font-size: 0.88rem; font-weight: 600; color: var(--burnt-orange-deep); white-space: nowrap; }
      .intro-copy { max-width: 68ch; font-size: 1.05rem; line-height: 1.7; color: var(--ink-soft); margin: 0 0 3rem; }

      /* Category index grid (holidays-seasons/, special-days/, lifestyle/) */
      .index-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1.6rem;
      }
      .index-card {
        background: var(--cream-card);
        border-radius: var(--radius-md);
        overflow: hidden;
        box-shadow: 0 18px 36px -26px rgba(42, 23, 8, 0.3);
        display: flex;
        flex-direction: column;
      }
      .index-card-media { aspect-ratio: 4 / 3; overflow: hidden; background: var(--ivory-deep); }
      .index-card-media img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s ease; }
      .index-card:hover .index-card-media img { transform: scale(1.05); }
      .index-card-body { padding: 1.3rem 1.4rem 1.6rem; display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
      .index-card-body h3 { font-size: 1.1rem; }
      .index-card-body p { font-size: 0.9rem; color: var(--ink-soft); line-height: 1.5; margin: 0; }
      .index-card-link { margin-top: auto; padding-top: 0.6rem; font-size: 0.85rem; font-weight: 600; color: var(--burnt-orange-deep); }

      /* Topic detail content grid (used inside TopicDetail sections) */
      .topic-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.6rem; }
      .topic-card {
        background: var(--cream-card);
        border-radius: var(--radius-md);
        overflow: hidden;
        box-shadow: 0 14px 30px -24px rgba(42, 23, 8, 0.32);
      }
      .topic-card-media { aspect-ratio: 4 / 3; overflow: hidden; background: var(--ivory-deep); }
      .topic-card-media img { width: 100%; height: 100%; object-fit: cover; }
      .topic-card-body { padding: 1.1rem 1.2rem 1.3rem; }
      .topic-card-body h3 { font-size: 1rem; margin-bottom: 0.35rem; line-height: 1.35; }
      .topic-card-body p { font-size: 0.86rem; color: var(--ink-soft); line-height: 1.55; margin: 0; }

      .related-list { display: flex; flex-wrap: wrap; gap: 0.7rem; }
      .related-pill {
        display: inline-flex;
        padding: 0.55rem 1.1rem;
        border-radius: 999px;
        background: var(--ivory-deep);
        font-size: 0.86rem;
        font-weight: 600;
        color: var(--ink);
        border: 1px solid var(--border-soft, rgba(42,35,32,0.1));
      }
      .related-pill:hover { background: var(--burnt-orange); color: #fff; }

      @media (max-width: 1080px) {
        .index-grid, .topic-grid { grid-template-columns: repeat(2, 1fr); }
      }
      @media (max-width: 640px) {
        .section { padding: 3.2rem 1.4rem; }
        .section-tint > * { padding-left: 1.4rem; padding-right: 1.4rem; }
        .index-grid, .topic-grid { grid-template-columns: 1fr; }
        .section-head { flex-direction: column; align-items: flex-start; gap: 0.6rem; }
        .page-hero-content { padding: 7.5rem 1.4rem 2.4rem; }
      }
    </style>
  </body>
</html>
```

---

## `src/components/CategoryIndex.astro`

```astro
---
// src/components/CategoryIndex.astro
// Renders a section landing page (Holidays & Seasons, Special Days, Lifestyle)
import { onImgError } from "../utils/images.js";

export interface Item { slug: string; name: string; tagline: string; heroImg: string; }
export interface Props {
  kicker: string;
  heading: string;
  intro: string;
  heroImg: string;
  basePath: string; // e.g. "/holidays-seasons/"
  items: Item[];
  breadcrumbLabel: string;
}
const { kicker, heading, intro, heroImg, basePath, items, breadcrumbLabel } = Astro.props;
---

<section class="page-hero">
  <div class="page-hero-media" aria-hidden="true">
    <img src={heroImg} alt="" onerror={onImgError} />
    <div class="page-hero-scrim"></div>
  </div>
  <div class="page-hero-content">
    <p class="kicker">{kicker}</p>
    <h1>{heading}</h1>
  </div>
</section>

<main>
  <section class="section">
    <p class="intro-copy">{intro}</p>
    <div class="index-grid">
      {items.map((item) => (
        <a class="index-card" href={`${basePath}${item.slug}/`}>
          <span class="index-card-media">
            <img src={item.heroImg} alt={item.name} loading="lazy" onerror={onImgError} />
          </span>
          <span class="index-card-body">
            <h3>{item.name}</h3>
            <p>{item.tagline}</p>
            <span class="index-card-link">Explore {item.name} &rarr;</span>
          </span>
        </a>
      ))}
    </div>
  </section>
</main>
```

---

## `src/components/TopicDetail.astro`

```astro
---
// src/components/TopicDetail.astro
// Renders an individual topic page (e.g. /holidays-seasons/halloween/)
import Breadcrumbs from "./Breadcrumbs.astro";
import { onImgError } from "../utils/images.js";

export interface Topic {
  slug: string;
  name: string;
  tagline: string;
  heroImg: string;
  intro: string;
  sections: { heading: string; items: { title: string; img: string; desc: string }[] }[];
}
export interface Props {
  topic: Topic;
  sectionLabel: string; // e.g. "Holidays & Seasons"
  sectionHref: string;  // e.g. "/holidays-seasons/"
  related: { slug: string; name: string }[]; // other topics in the same section
  basePath: string; // e.g. "/holidays-seasons/"
}
const { topic, sectionLabel, sectionHref, related, basePath } = Astro.props;

const trail = [
  { label: "Home", href: "/" },
  { label: sectionLabel, href: sectionHref },
  { label: topic.name },
];
---

<section class="page-hero">
  <div class="page-hero-media" aria-hidden="true">
    <img src={topic.heroImg} alt="" onerror={onImgError} />
    <div class="page-hero-scrim"></div>
  </div>
  <div class="page-hero-content">
    <Breadcrumbs trail={trail} />
    <p class="kicker">{sectionLabel}</p>
    <h1>{topic.name}</h1>
    <p>{topic.tagline}</p>
  </div>
</section>

<main>
  <section class="section">
    <p class="intro-copy">{topic.intro}</p>

    {topic.sections.map((block) => (
      <div style="margin-bottom: 3.5rem;">
        <div class="section-head">
          <div>
            <h2>{block.heading}</h2>
          </div>
        </div>
        <div class="topic-grid">
          {block.items.map((item) => (
            <article class="topic-card">
              <span class="topic-card-media">
                <img src={item.img} alt={item.title} loading="lazy" onerror={onImgError} />
              </span>
              <div class="topic-card-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    ))}

    {related.length > 0 && (
      <div>
        <div class="section-head">
          <div><h2>Related in {sectionLabel}</h2></div>
          <a class="view-all" href={sectionHref}>View All &rarr;</a>
        </div>
        <div class="related-list">
          {related.map((r) => (
            <a class="related-pill" href={`${basePath}${r.slug}/`}>{r.name}</a>
          ))}
        </div>
      </div>
    )}
  </section>
</main>
```

---

## `src/pages/holidays-seasons/index.astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import CategoryIndex from "../../components/CategoryIndex.astro";
import { holidaySeasons } from "../../data/topics.js";
---
<SiteLayout title="Holidays & Seasons" active="holidays">
  <CategoryIndex
    kicker="Explore"
    heading="Holidays & Seasons"
    intro="From the first pumpkin on the porch to the last string of holiday lights, this is your year-round guide to celebrating well — decor, food, and style for every holiday and season."
    heroImg="https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&w=1600&q=80"
    basePath="/holidays-seasons/"
    breadcrumbLabel="Holidays & Seasons"
    items={holidaySeasons}
  />
</SiteLayout>
```

## `src/pages/holidays-seasons/[slug].astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import TopicDetail from "../../components/TopicDetail.astro";
import { holidaySeasons } from "../../data/topics.js";

export function getStaticPaths() {
  return holidaySeasons.map((topic) => ({
    params: { slug: topic.slug },
    props: { topic },
  }));
}

const { topic } = Astro.props;
const related = holidaySeasons.filter((t) => t.slug !== topic.slug).slice(0, 6);
---
<SiteLayout title={topic.name} description={topic.tagline} active="holidays">
  <TopicDetail
    topic={topic}
    sectionLabel="Holidays & Seasons"
    sectionHref="/holidays-seasons/"
    basePath="/holidays-seasons/"
    related={related}
  />
</SiteLayout>
```

---

## `src/pages/special-days/index.astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import CategoryIndex from "../../components/CategoryIndex.astro";
import { specialDays } from "../../data/topics.js";
---
<SiteLayout title="Special Days" active="special">
  <CategoryIndex
    kicker="Celebrate"
    heading="Special Days"
    intro="The milestones and everyday celebrations worth marking well — gift guides, hosting ideas, and thoughtful ways to show up for the people you love."
    heroImg="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1600&q=80"
    basePath="/special-days/"
    breadcrumbLabel="Special Days"
    items={specialDays}
  />
</SiteLayout>
```

## `src/pages/special-days/[slug].astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import TopicDetail from "../../components/TopicDetail.astro";
import { specialDays } from "../../data/topics.js";

export function getStaticPaths() {
  return specialDays.map((topic) => ({
    params: { slug: topic.slug },
    props: { topic },
  }));
}

const { topic } = Astro.props;
const related = specialDays.filter((t) => t.slug !== topic.slug);
---
<SiteLayout title={topic.name} description={topic.tagline} active="special">
  <TopicDetail
    topic={topic}
    sectionLabel="Special Days"
    sectionHref="/special-days/"
    basePath="/special-days/"
    related={related}
  />
</SiteLayout>
```

---

## `src/pages/lifestyle/index.astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import CategoryIndex from "../../components/CategoryIndex.astro";
import { lifestyleTopics } from "../../data/topics.js";
---
<SiteLayout title="Lifestyle" active="lifestyle">
  <CategoryIndex
    kicker="Living Well"
    heading="Lifestyle"
    intro="Home, fashion, food, and beauty — for a more inspired everyday, whatever the season."
    heroImg="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80"
    basePath="/lifestyle/"
    breadcrumbLabel="Lifestyle"
    items={lifestyleTopics}
  />
</SiteLayout>
```

## `src/pages/lifestyle/[slug].astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import TopicDetail from "../../components/TopicDetail.astro";
import { lifestyleTopics } from "../../data/topics.js";

export function getStaticPaths() {
  return lifestyleTopics.map((topic) => ({
    params: { slug: topic.slug },
    props: { topic },
  }));
}

const { topic } = Astro.props;
const related = lifestyleTopics.filter((t) => t.slug !== topic.slug);
---
<SiteLayout title={topic.name} description={topic.tagline} active="lifestyle">
  <TopicDetail
    topic={topic}
    sectionLabel="Lifestyle"
    sectionHref="/lifestyle/"
    basePath="/lifestyle/"
    related={related}
  />
</SiteLayout>
```

---

## `src/pages/about/index.astro`

```astro
---
import SiteLayout from "../../layouts/SiteLayout.astro";
import { onImgError } from "../../utils/images.js";
---
<SiteLayout title="About" active="about">
  <section class="page-hero">
    <div class="page-hero-media" aria-hidden="true">
      <img
        src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=1600&q=80"
        alt=""
        onerror={onImgError}
      />
      <div class="page-hero-scrim"></div>
    </div>
    <div class="page-hero-content">
      <p class="kicker">About Us</p>
      <h1>The Season &amp; Style Guide</h1>
      <p>A premium destination for holidays, seasons, and the everyday moments worth celebrating well.</p>
    </div>
  </section>

  <main>
    <section class="section" style="max-width: 780px;">
      <p class="intro-copy">
        The Season &amp; Style Guide is a US-focused editorial home for the
        way people actually live through the year — from the first porch
        pumpkin in October to the last backyard dinner in September. We
        cover holidays, seasons, and life's special moments with the same
        care a magazine would give any of them: real ideas, real recipes,
        and design that doesn't feel disposable.
      </p>
      <p class="intro-copy">
        Whether you're planning a holiday table, a milestone celebration,
        or simply refreshing a room for the season ahead, our goal is the
        same — thoughtful, well-styled inspiration you'll actually use.
      </p>
      <a class="btn btn-primary" href="/holidays-seasons/" style="background: var(--burnt-orange); color: #fff;">
        Start Exploring
      </a>
    </section>
  </main>
</SiteLayout>
```

---

## Verification Checklist

- [ ] `src/pages/index.astro` unchanged (homepage design intact)
- [ ] `/holidays-seasons/`, `/special-days/`, `/lifestyle/`, `/about/` all load
- [ ] Header nav links work identically on every page
- [ ] Each Holidays & Seasons card links to its own `/holidays-seasons/<slug>/` page
- [ ] Each Special Days card links to its own `/special-days/<slug>/` page
- [ ] Each Lifestyle card links to its own `/lifestyle/<slug>/` page
- [ ] Breadcrumb on every topic page reads `Home → Section → Topic` and each link works
- [ ] Footer appears identically on every page
- [ ] No new npm packages were required; `package.json` is unchanged
