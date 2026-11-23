import portrait from "@/assets/nayera-portrait-cropped.jpg.asset.json";
import ebdaaAward from "@/assets/nayera-ebdaa-award.jpg.asset.json";
import digitalCreatorHosting from "@/assets/nayera-digital-creator-hosting.jpg.asset.json";

// Site copy and photo slots. A photo slot without `src` renders as an empty frame
// until a real photo is added.
export type Photo = { src?: string; alt: string; caption: string };

export const person = {
  name: "Nayera Saeed Ahmed",
  first: "Nayera",
  rest: "Saeed Ahmed",
  email: "Nayerasaeed86@gmail.com",
  phone: "+20 103 287 0020",
  phoneHref: "+201032870020",
};

export const nav = [
  { href: "#screen", label: "Screen work" },
  { href: "#about", label: "About" },
  { href: "#achievements", label: "Achievements" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export const heroPhoto: Photo = { src: portrait.url, alt: "Nayera Saeed Ahmed", caption: "Portrait" };

export const screenWork: { photo: Photo; title: string; text: string; tag: string }[] = [
  {
    photo: { alt: "Nayera presenting a TV report", caption: "TV report" },
    title: "TV report",
    text: "A field report produced and presented independently.",
    tag: "Reporting",
  },
  {
    photo: { alt: "Nayera presenting on air", caption: "On-air presenting" },
    title: "On-air presenting",
    text: "Presenting a segment live to camera.",
    tag: "Presenting",
  },
  {
    photo: { alt: "Nayera hosting a cultural evening", caption: "Event hosting" },
    title: "Event hosting",
    text: "Hosting a cultural evening.",
    tag: "Hosting",
  },
  {
    photo: { alt: "Nayera on camera for a brand", caption: "Commercial" },
    title: "Commercial",
    text: "On-camera work for a brand.",
    tag: "Advertising",
  },
];

export const facts = [
  { dt: "Based in", dd: "Cairo, Egypt" },
  { dt: "Language", dd: "Standard Arabic (Fusha)" },
  { dt: "Specialties", dd: "On-air, voice-over, reporting" },
  { dt: "Education", dd: "Cairo University, Dar Al-Uloom" },
];

export const services = [
  { title: "On-air presenting", text: "TV programs, live event coverage, and moderated discussions with a calm, confident presence." },
  { title: "Voice-over", text: "Narration, documentaries, and advertising, delivered with clear pronunciation and warmth." },
  { title: "Field reporting", text: "Stories produced end to end, from research and script to on-camera delivery." },
  { title: "Language editing", text: "Linguistic review of scripts and theater texts, with a focus on correct pronunciation." },
  { title: "Coaching", text: "Voice, elocution, and presenting workshops for students and young performers." },
  { title: "Event hosting", text: "Poetry evenings, cultural events, and graduation ceremonies, with an easy, graceful flow." },
];

export const achievementPhotos: Photo[] = [
  {
    src: ebdaaAward.url,
    alt: "Nayera holding her First Place certificate at the Ebda'a Festival for University Youth",
    caption: "First Place, Best TV Correspondent — Ebda'a 2024–2025",
  },
  {
    src: digitalCreatorHosting.url,
    alt: "Nayera hosting the Digital Creator Initiative event of the Ministry of Youth and Sports",
    caption: "Hosting the Digital Creator Initiative — Ministry of Youth and Sports",
  },
  { alt: "Nayera at work", caption: "At work" },
];

export const awards = [
  { year: "2024 – 2025", title: "First Place, Best TV Correspondent", text: "National level, Ebda'a Competition, Ministry of Youth and Sports, Egypt, Season 13.", feature: true },
  { year: "2022 – 2023", title: "National finalist", text: "Independently produced and presented full TV reports, reaching the final national judging stage in Seasons 11 and 12." },
  { year: "2025", title: "Official delegation", text: "Youth Cultural Exchange Program between the Kingdom of Morocco and the Arab Republic of Egypt." },
  { year: "Dubbing", title: "Third place", text: "Cairo International Festival for the Arab Child, organized by the Egyptian Ministry of Culture." },
  { year: "2023 – 2024", title: "Journalism and hosting", text: "Investigative Journalist and Voice-Over Artist at Dar Al-Hilal, Cairo. Host of the Dar Al-Uloom Faculty Graduation Ceremony." },
];
