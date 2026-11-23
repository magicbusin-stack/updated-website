# Magic Bus website: backlink strategy

A backlink is a link from another website to ours. Search engines treat links from trusted, relevant sites as a vote of confidence. This plan is built only from things the website already has (partners, reports, news, certifications), so nothing here needs to be invented. Items marked **[check]** need a decision or a fact confirmed by the team first.

## 1. Ground rules
- Links must be earned or asked for honestly. No bought links, link farms or comment spam; they can get the whole site penalised.
- Always link to the **exact page** that fits (for example the Livelihood Programme page, not just the home page). Use the web addresses exactly as in `public/sitemap.xml`, with `https://www.magicbus.org`.
- Anchor text (the clickable words) should be natural: "Magic Bus India Foundation", "Magic Bus livelihood programme", "Magic Bus annual report". Avoid repeating one keyword-stuffed phrase.
- Keep a simple tracking sheet (see section 8) so the same site is never contacted twice.

## 2. Quick wins: links we are probably entitled to already
These are people who already work with Magic Bus, so asking is easy.

| Who | Where they list us | Page we want them to link to |
| --- | --- | --- |
| Corporate partners (CSR) | Their CSR / sustainability page, annual report web page, press releases | `/corporate-partners` or the specific programme page they fund |
| Foundation and institution partners | "Our grantees / partners" page | `/foundation-partners` |
| Government partners | Programme pages, MoUs published online | `/government-partnership-programme` |
| Knowledge partners | "Research partners / collaborations" page | `/knowledge-partners` |
| Employment partners | "Hiring partners / CSR hiring" page | `/employment-partners` and `/connect-with-work` |

Action: for each partner already shown on the site, check whether they link back. If they mention Magic Bus but do not link, send a short, friendly request with the exact page address to use.

## 3. Directories and listings (free, credible)
Create or verify an accurate profile (same name, address and website link everywhere). **[check]** The footer still shows placeholder address, phone and email; fix those first so every profile uses the same real details.
- NGO and charity registries and rating platforms (for example NGOs listed on India's NGO Darpan portal, GuideStar India, GiveIndia-type platforms) **[check which ones Magic Bus already has profiles on]**
- Google Business Profile for the head office (and regional offices if they are public-facing)
- Wikipedia / Wikidata: only if an entry exists or can be supported by independent sources; never write our own promotional article
- LinkedIn, Facebook, Instagram, X, YouTube: make sure each profile's "website" field links to the site. **[check]** The footer social links are generic and should point to the real Magic Bus accounts.

Once the real social profile addresses are confirmed, add them to the `sameAs` list in the organisation data in `index.html` so search engines connect them.

## 4. Content that earns links by itself
The site already publishes material other people want to cite. Make each one easy to link to and tell people it exists.
- **Reports**: Annual Reports, Impact Reports, FLFPR report (women in the workforce), Gender Journey report. Journalists, researchers and policy writers link to original data. Pitch each new report with a one-paragraph summary and the direct page link.
- **Programme evidence pages**: Livelihood, Youth Skilling, Digital Skilling, Entrepreneurship, FutureX, Government Partnerships. Offer these as references to education, skilling and development-sector blogs.
- **Blogs, News, Podcasts, Events**: publish regularly; share each piece with the partner or person featured, who will often link or share it.
- **Gallery and stories**: real photos and stories from programmes are shareable. Only use content with the right consents.

## 5. PR and media
- Send press notes for milestones, reports, awards and partnerships to education, CSR and development-sector media. Ask that the online article link to the relevant page.
- Offer expert comment (youth employability, life skills, adolescent development, women's workforce participation) to journalists. Name a spokesperson per topic.
- When Magic Bus is mentioned online without a link, send a polite note asking them to add one. Setting up a free alert for the name "Magic Bus India Foundation" makes these easy to find.

## 6. Education and sector sites
- University and college career/CSR pages, skilling and livelihood networks, sports-for-development and youth-development coalitions: ask to be listed as a resource or member.
- Guest articles on sector blogs and newsletters (CSR, education, skilling, gender and work). One useful article with a single relevant link back is better than many thin ones.
- Certification and recognition bodies already listed on `/certifications`: confirm each of them links to the Magic Bus entry on their site where they publish one.

## 7. Employer-brand links
- `/work-with-us` and `/our-culture`: submit to employer-review and job sites such as Great Place to Work (the badge is already on the site) and to NGO job boards, each linking to the careers page.

## 8. Tracking and review
Keep one spreadsheet with: site, contact, page we asked them to link to, date asked, status (asked / agreed / live / declined), link address, anchor text.
- Monthly: check which links went live and which pages gained them.
- Quarterly: look at Google Search Console "Links" report (once the site is verified there), keep the best-performing content types, and drop what brought nothing.
- Disavow only genuinely spammy links, and only after seeing a pattern; most odd links can be ignored.

## 9. What not to do
- Do not buy links or join link-exchange schemes.
- Do not mass-email generic requests.
- Do not publish the same article on many sites.
- Do not claim awards, numbers or partnerships in outreach that are not already confirmed on the site.

## 10. Technical items that support all of the above (done in the site now)
- Every page has its own canonical address, title, description and social sharing image, so shared links look right.
- `sitemap.xml` and `robots.txt` are generated at each build, so new pages are discovered.
- Structured data (organisation, web page, breadcrumbs) helps search engines identify who we are.
- "Explore more" links and footer links connect related pages so link value flows to important programme pages.
- Old `.php` addresses from the previous site redirect permanently (301) to the new pages, so existing links are not lost.
