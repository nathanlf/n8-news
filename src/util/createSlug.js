import * as Slugify from "slugify";

export const createSlug = (text) => Slugify(text, { lower: true });
