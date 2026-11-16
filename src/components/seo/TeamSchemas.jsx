// Structured data (schema.org JSON-LD) for the Our Team page: three separate schemas on one page.
//
//   1. OurTeamSchema  - the page itself (CollectionPage) + the full leadership team list (ItemList)
//   2. PersonSchema   - the Founder  (used once for Matthew Spacie)
//   3. PersonSchema   - the CEO      (used once for Jayant Rastogi)
//
// Everything is built from the same data the page already shows (src/data/indiaTeam.js and the
// featuredLeadership list in pages/OurTeam.jsx), so the schema can never drift from what visitors see.
// Only facts that are written on the page are used; nothing is invented.

const SITE = "https://www.magicbus.org";
const PAGE_URL = `${SITE}/our-team`;
const ORG_ID = `${SITE}/#organization`;
const ORG_NAME = "Magic Bus India Foundation";

const slug = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
export const personId = (name) => `${PAGE_URL}#${slug(name)}`;

function JsonLd({ data }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

const orgRef = { "@id": ORG_ID };

/* 1) OUR TEAM: page + organisation + list of people */
export function OurTeamSchema({ founder, ceo, team = [] }) {
  const people = [
    { name: founder.name, jobTitle: founder.role },
    { name: ceo.name, jobTitle: ceo.role },
    ...team.map((m) => ({ name: m.name, jobTitle: m.role })),
  ];

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${PAGE_URL}#webpage`,
        url: PAGE_URL,
        name: "Our Team | Magic Bus India Foundation",
        description:
          "Magic Bus brings together experienced leaders from the corporate and development sectors, working towards empowering adolescents and youth through education, life skills, and livelihood opportunities.",
        about: orgRef,
        mainEntity: { "@id": `${PAGE_URL}#team-list` },
      },
      // The organisation itself is already defined site-wide in index.html (@id below), so it is only referenced here.
      {
        "@type": "ItemList",
        "@id": `${PAGE_URL}#team-list`,
        name: `${ORG_NAME} leadership team`,
        numberOfItems: people.length,
        itemListElement: people.map((p, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Person",
            "@id": personId(p.name),
            name: p.name,
            jobTitle: p.jobTitle,
            worksFor: orgRef,
          },
        })),
      },
    ],
  };

  return <JsonLd data={data} />;
}

/* 2) FOUNDER and 3) CEO: one Person schema each */
export function PersonSchema({ person }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(person.name),
    name: person.name,
    jobTitle: person.role,
    description: (person.fullBio || [person.shortBio]).slice(0, 2).join(" "),
    worksFor: orgRef,
    mainEntityOfPage: PAGE_URL,
    ...(person.image ? { image: `${SITE}${person.image}` } : {}),
    ...(person.awards && person.awards.length ? { award: person.awards } : {}),
  };

  return <JsonLd data={data} />;
}
