// src/utils/blog.js
// Shared helpers for the blog/editorial system.

/**
 * Turns a category name from frontmatter (e.g. "Holidays & Seasons") into a
 * clean, SEO-friendly URL slug (e.g. "holidays-seasons").
 */
export function categorySlug(category) {
  return category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Sorts posts newest-first by publication date. Does not mutate the input. */
export function sortByDateDesc(posts) {
  return [...posts].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/**
 * Chronological (oldest-first) order, used to compute stable previous/next
 * article links that don't reshuffle as new posts are published.
 */
export function sortByDateAsc(posts) {
  return [...posts].sort((a, b) => a.data.date.valueOf() - b.data.date.valueOf());
}

/**
 * Orders posts for a "latest" rail: featured posts first (newest featured
 * first), then the remaining posts in normal chronological order, exactly as
 * requested — featured articles get priority without breaking the normal
 * newest-first ordering of everything else.
 */
export function sortForLatest(posts) {
  const sorted = sortByDateDesc(posts);
  const featured = sorted.filter((p) => p.data.featured);
  const rest = sorted.filter((p) => !p.data.featured);
  return [...featured, ...rest];
}

/**
 * Returns up to `limit` related posts for `current`, preferring posts in the
 * same category, then backfilling with the most recent other posts. Never
 * includes the current article itself.
 */
export function getRelatedPosts(current, allPosts, limit = 3) {
  const others = allPosts.filter((p) => p.id !== current.id);
  const sameCategory = sortByDateDesc(
    others.filter((p) => categorySlug(p.data.category) === categorySlug(current.data.category)),
  );
  const rest = sortByDateDesc(others.filter((p) => !sameCategory.includes(p)));
  return [...sameCategory, ...rest].slice(0, limit);
}

/** Builds the canonical article URL for a post (e.g. "/blog/my-post/"). */
export function postHref(post) {
  return `/blog/${post.id}/`;
}

/** Builds the canonical category URL used by the site's main category pages. */
export function categoryHref(category) {
  const slug = categorySlug(category);
  const mainCategoryPaths = {
    "holidays-seasons": "/holidays/",
    holidays: "/holidays/",
    "special-days": "/special-days/",
    lifestyle: "/lifestyle/",
    halloween: "/holidays/halloween/",
    thanksgiving: "/holidays/thanksgiving/",
    christmas: "/holidays/christmas/",
    easter: "/holidays/easter/",
    "valentines-day": "/special-days/valentines-day/",
    fall: "/holidays/fall/",
    winter: "/holidays-seasons/winter/",
    spring: "/holidays-seasons/spring/",
    summer: "/holidays-seasons/summer/",
    "mothers-day": "/special-days/mothers-day/",
    "fathers-day": "/special-days/fathers-day/",
    birthday: "/special-days/birthday/",
    graduation: "/special-days/graduation/",
    home: "/lifestyle/home/",
    food: "/lifestyle/food-recipes/",
    fashion: "/lifestyle/fashion-beauty/",
    beauty: "/lifestyle/fashion-beauty/",
    "food-recipes": "/lifestyle/food-recipes/",
    "fashion-beauty": "/lifestyle/fashion-beauty/",
    wellness: "/lifestyle/wellness/",
    entertaining: "/lifestyle/entertaining/",
  };
  return mainCategoryPaths[slug] ?? `/category/${slug}/`;
}

/** Builds the canonical subcategory URL for a categorized article. */
export function subcategoryHref(category, subcategory) {
  return `${categoryHref(category).replace(/\/$/, "")}/${categorySlug(subcategory)}/`;
}

/** Returns posts whose frontmatter category matches the given category name. */
export function postsInCategory(posts, category) {
  const targetSlug = categorySlug(category);
  return posts.filter((post) => categorySlug(post.data.category) === targetSlug);
}

/** Returns posts assigned to both a main category and a subcategory. */
export function postsInSubcategory(posts, category, subcategory) {
  const categorySlugValue = categorySlug(category);
  const subcategorySlugValue = categorySlug(subcategory);
  return posts.filter(
    (post) =>
      categorySlug(post.data.category) === categorySlugValue &&
      post.data.subcategory &&
      categorySlug(post.data.subcategory) === subcategorySlugValue,
  );
}

/**
 * Builds { slug, name } for every distinct category present in the given
 * posts, in first-seen order. Used to generate /category/[category]/ routes
 * automatically — add a new category to a post's frontmatter and its page
 * appears with no code changes.
 */
export function collectCategories(posts) {
  const map = new Map();
  for (const post of posts) {
    const slug = categorySlug(post.data.category);
    if (!map.has(slug)) map.set(slug, post.data.category);
  }
  return [...map.entries()].map(([slug, name]) => ({ slug, name }));
}
