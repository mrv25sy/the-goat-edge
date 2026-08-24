# The GOAT Edge

Build a professional, modern one-page marketing website for "THE GOAT" — a financial markets education program under GO AI Academy (forex, gold, crypto, and investing education with AI-assisted tools and mentorship).
Tech & structure
React + Tailwind CSS
Single page with anchor-linked sections, sticky navbar
Fully responsive (mobile, tablet, desktop) — test all breakpoints
Font: Inter for all text (headings and body)
Color base: deep navy/black background with a purple accent (brand color), plus a neutral light section (off-white, not pure white) to break up the dark sections
Smooth scroll on nav links
Do NOT do (important — avoid these generic AI-site patterns)
No harsh purple/blue gradient hero backgrounds
No blurred radial "orb" or nebula-style background blobs
No glassmorphism / frosted-glass cards
No sparkle (✨) icons or emoji used as bullet icons
No fake testimonials — do not invent quotes or reviewer names
No placeholder "screenshot coming soon" boxes — leave clear image placeholder slots I will fill in instead
No skipped legal pages — include real Terms of Service and Privacy Policy placeholder pages linked from the footer
Keep drop shadows subtle (thin borders preferred over heavy soft shadows)
Navbar
Logo (left) + "THE GOAT" wordmark, nav links: Home · Programs · Pricing · About · Contact, sticky on scroll, mobile hamburger menu.
1. Hero section
Headline: "Learn financial markets. Trade with a system. Grow with a community." Subheadline: "The Goat is GO AI's flagship program — AI-powered education, expert-led recommendations, and hands-on support to help you build real skills in forex, crypto, gold, and investing." CTA button: "Explore the program" (scrolls to Programs section) Include an embedded YouTube video prominently in or directly below the hero: https://www.youtube.com/watch?v=gtYga7cxV30 (founder introducing the project — this is a real trust asset, keep it visible, not hidden below the fold)
2. What you get (feature list section)
Section heading: "What you get" Display as a clean grid (not more than 4 per row) with icon + short label, using a simple icon set (Lucide is fine) — one icon style throughout:
A complete education system built on AI-powered learning tools
A weekly follow-up system with 10 calls to keep you on track
An AI assistant you can ask anything, trained on our team's expertise
15+ specialists supporting you with market recommendations
Multiple income-generating tracks across different investment fields
A community space to connect with other members
A personal mentor following your progress day to day
Daily support from a dedicated team
3. About section
Heading: "About GO AI" Body: "GO AI is one of the leading educational academies in the Arab world, with a presence in 22 Arab countries and 50+ countries worldwide. Our team includes 15+ Arab experts and instructors working across 6+ languages, and we host 20+ conferences globally each year." Include image placeholder slots for the real event/conference photos (I will supply these — leave a photo grid layout ready).
4. Programs section
Heading: "Our programs" Layout: card grid, one card per program, consistent card style (icon/image + title + short description), NOT all identical filler length — keep each description natural:
Education "We teach financial markets from the ground up to a professional level, led by 6+ Arab instructors with 9+ years of experience each."
Market recommendations "Our 15+ specialists each run a dedicated channel in their area of focus: forex, metals, stock indices, investment opportunities, crypto, and oil."
Go Hunter — gold system "An AI-driven system that generates ready technical signals with a single click, helping you spot opportunities in the gold market."
Go Maestro — forex system "An AI-driven system built to surface ready technical signals in real time, helping you identify opportunities across the forex market."
Crypto system "An AI-driven system that scans the crypto market and delivers ready technical signals with a single click."
Investment system "Investment knowledge is one of the most valuable skills of this era. Our AI reviews the market daily to surface strong investment opportunities, with a daily update on your portfolio — no extra effort required on your side."
GO OS — AI assistant "GO OS is an AI system trained on our team's expertise and approach. Ask it anything related to the field and get accurate, grounded answers back."
5. Follow-up & support section
Heading: "Follow-up & support" Body: "We built a real-time support system so you're never stuck: ask a question and get a response in under 10 minutes, backed by regular follow-up calls to keep you moving forward."
6. Community section
Heading: "Join the community" Body: "Join a community of thousands of members from around the world. Build real connections with people from different countries, all working toward the same goal." Image placeholder slot for a community/event photo.
7. Pricing section
Heading: "Choose your plan" Build as a 3-column comparison table (not 3 separate long-text cards). Same feature rows across all columns, use ✓ / — (not ✗) to mark inclusion, consistent row height and spacing across all 3 columns. Middle-tier pricing note: highlight "Complete" as the recommended plan with a badge and a slightly elevated/bordered card.
FeatureConnect ($349.99 / 30 days)Create ($999.99 / 60 days)Complete ($1699.99 / 90 days) — Most PopularMarket fundamentals course✓✓✓Forex market access✓✓✓Crypto market access✓✓✓E-commerce course✓✓✓24/7 AI support bot✓✓✓Recommendation channels3710Technical analysis course✓✓✓Trading mastery plan—✓✓Timing analysis—✓✓Investment plan—✓✓Weekly follow-up calls—✓✓Full trading + investment strategy suite——✓Financial literacy course——✓Priority follow-up support——✓
Each column has a clear CTA button at the bottom ("Get started"), same button style/size across all three.
8. Footer
Quick links: Home · Programs · Pricing · About · Contact
Legal links: Terms of Service · Privacy Policy (create placeholder pages with standard boilerplate structure, I'll fill in final legal text separately)
Contact placeholder: email + social icons (Instagram primary)
Cookie notice bar: "We use cookies to ensure a smooth browsing experience. By continuing, you agree to our use of cookies." with a dismiss button
© 2026 GO AI. All rights reserved.
Forms
Add a simple contact/lead form (name, email, message) in the Contact area. For now just build the form UI with proper validation (required fields, email format check) — no backend submission logic yet, that will be wired to n8n separately.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/6986dabc-b9b4-4341-bd30-25b3e0447b2e).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
