import type { CSSProperties } from "react";

const CheckCircle = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const ArrowRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

const styles : Record<string, CSSProperties> = {
  page: {
    minHeight: '100vh',
    width: "100%",
    background: 'linear-gradient(to bottom right, #0a0a0a, #18181b)',
    color: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
  header: {
    background: '#18181b',
    borderBottom: '1px solid #27272a',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
  },
  headerContent: {
    margin: '0 auto',
    padding: '1rem 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
  },
  subtitle: {
    fontSize: '0.875rem',
    color: '#a1a1aa',
    margin: 0,
  },
  container: {
    margin: '0 auto',
    padding: '3rem 1.5rem',
  },
  hero: {
    marginBottom: '4rem',
    textAlign: 'center',
  },
  badge: {
    display: 'inline-block',
    padding: '0.25rem 0.75rem',
    background: '#27272a',
    color: '#fafafa',
    fontSize: '0.875rem',
    borderRadius: '0.375rem',
    border: '1px solid #3f3f46',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
    lineHeight: '1.2',
  },
  heroText: {
    fontSize: '1.25rem',
    color: '#a1a1aa',
    maxWidth: '768px',
    margin: '0 auto',
  },
  card: {
    background: '#18181b',
    border: '2px solid #27272a',
    borderRadius: '0.5rem',
    marginBottom: '2rem',
    transition: 'border-color 0.2s',
  },
  cardHover: {
    borderColor: '#3f3f46',
  },
  cardHeader: {
    padding: '1.5rem',
  },
  cardTitle: {
    fontSize: '1.5rem',
    fontWeight: '600',
    margin: '0 0 0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  cardContent: {
    padding: '0 1.5rem 1.5rem 1.5rem',
  },
  text: {
    color: '#d4d4d8',
    lineHeight: '1.6',
    margin: '0 0 1rem 0',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
    marginBottom: '0.75rem',
    color: '#d4d4d8',
  },
  button: {
    padding: '0.75rem 2rem',
    background: '#fff',
    color: '#18181b',
    border: 'none',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  buttonOutline: {
    padding: '0.75rem 2rem',
    background: 'transparent',
    color: '#d4d4d8',
    border: '1px solid #52525b',
    borderRadius: '0.375rem',
    fontSize: '1rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background 0.2s',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1rem',
  },
  grid2: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
  },
  pricingCard: {
    background: '#27272a',
    border: '1px solid #3f3f46',
    borderRadius: '0.5rem',
    padding: '1rem',
  },
  priceAmount: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#fafafa',
    margin: '0.5rem 0',
  },
  separator: {
    height: '1px',
    background: '#27272a',
    margin: '1rem 0',
  },
  cta: {
    background: 'linear-gradient(to right, #27272a, #18181b)',
    borderRadius: '0.75rem',
    padding: '2rem',
    textAlign: 'center',
    border: '2px solid #3f3f46',
    marginTop: '2rem',
  },
  ctaTitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '0 0 1rem 0',
  },
  ctaButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    justifyContent: 'center',
    marginTop: '1.5rem',
  },
  stepNumber: {
    background: '#fff',
    color: '#18181b',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    flexShrink: 0,
  },
};

export default function App() {
  return (
    <div style={styles.page}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div>
            <h1 style={styles.title}>Last Rift Labs</h1>
            <p style={styles.subtitle}>UEFN & UGC Development Studio + Community</p>
          </div>
          <button style={styles.button}>Book Free Consultation</button>
        </div>
      </header>

      <div style={styles.container}>
        {/* Hero */}
        <section style={styles.hero}>
          <span style={styles.badge}>Built for Builders, Not Spectators</span>
          <h2 style={styles.heroTitle}>
            We help UEFN creators ship games,<br />not just build prototypes
          </h2>
          <p style={styles.heroText}>
            Education, consulting, and hands-on support for Fortnite creators stuck on shipping.
          </p>
        </section>

        {/* Who We Are */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Who We Are</h3>
          </div>
          <div style={styles.cardContent}>
            <p style={styles.text}>
              Last Rift Labs is a UEFN-focused studio and community platform. We actively build and ship Fortnite UGC games while supporting other creators through education, consulting, and embedded development.
            </p>
            <p style={{...styles.text, fontWeight: '500'}}>
              Our mission: raise the quality and velocity of UEFN development by removing blockers, simplifying complexity, and sharing production-ready systems — not surface-level advice.
            </p>
          </div>
        </div>

        {/* Who This Is For */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Who This Is For</h3>
          </div>
          <div style={styles.cardContent}>
            <p style={{...styles.text, fontWeight: '500'}}>Creators who:</p>
            <ul style={styles.list}>
              {[
                "Don't know where to start but want to get started!",
                'Have a playable UEFN project, but can\'t get it to "ship quality"',
                "Are blocked by Verse, systems design, or architecture",
                "Struggle with scope, iteration speed, or live updates",
                "Need structure, not motivation",
                "Want your content featured on our platforms",
                "Looking for assets or concept art"
              ].map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={{color: '#71717a', marginTop: '2px'}}><CheckCircle /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div style={{background: '#27272a', border: '1px solid #3f3f46', borderRadius: '0.5rem', padding: '1rem', marginTop: '1.5rem'}}>
              <p style={{color: '#e4e4e7', fontWeight: '500', margin: 0}}>
                Not a fit if: you're looking for hype or generic tutorials.
              </p>
            </div>
          </div>
        </div>

        {/* Free Resources */}
        <div style={{...styles.card, borderColor: '#3f3f46'}}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Free Resources</h3>
            <p style={{fontSize: '0.875rem', color: '#a1a1aa', margin: '0.5rem 0 0 0'}}>
              This isn't content for views — it's shared infrastructure, patterns, and workflows you can actually ship with.
            </p>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.grid}>
              {[
                { title: "Weekly Live Workshops", desc: "Real problems, real projects" },
                { title: "YouTube Tutorials", desc: "Verse, systems, production patterns" },
                { title: "Open Discord", desc: "Async dev support" },
                { title: "Free 30-Minute 1:1", desc: "Builder consultation" }
              ].map((resource, idx) => (
                <div key={idx} style={styles.pricingCard}>
                  <h4 style={{fontWeight: '600', color: '#fff', margin: '0 0 0.25rem 0'}}>{resource.title}</h4>
                  <p style={{fontSize: '0.875rem', color: '#a1a1aa', margin: 0}}>{resource.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Consultation */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Free 30-Minute Builder Consult</h3>
            <p style={{fontSize: '1rem', color: '#a1a1aa', margin: '0.5rem 0 0 0'}}>
              Not a sales call. A working session.
            </p>
          </div>
          <div style={styles.cardContent}>
            <div style={styles.grid2}>
              <div>
                <h4 style={{fontWeight: '600', color: '#fff', marginBottom: '0.75rem'}}>We:</h4>
                <ul style={styles.list}>
                  {["Review your actual project", "Identify real blockers", "Map fast, realistic paths forward"].map((item, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <span style={{color: '#71717a', marginTop: '2px'}}><ArrowRight /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 style={{fontWeight: '600', color: '#fff', marginBottom: '0.75rem'}}>You leave with:</h4>
                <ul style={styles.list}>
                  {["Clear priorities", "Reduced scope confusion", "A practical next-step plan"].map((item, idx) => (
                    <li key={idx} style={styles.listItem}>
                      <span style={{color: '#71717a', marginTop: '2px'}}><CheckCircle /></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p style={{fontSize: '0.875rem', color: '#a1a1aa', marginTop: '1rem', fontStyle: 'italic'}}>
              Even if you never work with us again.
            </p>
          </div>
        </div>

        {/* Paid Tiers */}
        <div style={{marginBottom: '2rem'}}>
          <h3 style={{fontSize: '1.5rem', fontWeight: 'bold', color: '#fff', marginBottom: '1.5rem'}}>Paid Consulting & Partnerships</h3>
          <div style={styles.grid2}>
            {/* Tier 1 */}
            <div style={styles.card}>
              <div style={styles.cardHeader}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <h4 style={{fontSize: '1.25rem', fontWeight: '600', color: '#fff', margin: 0}}>Tier 1</h4>
                  <span style={{...styles.badge, margin: 0}}>$100–$500/mo</span>
                </div>
                <p style={{fontSize: '1rem', color: '#a1a1aa', margin: '0.5rem 0'}}>Bi-Weekly Consulting</p>
                <p style={{color: '#d4d4d8', margin: '0.5rem 0 0 0'}}>
                  For teams that want to move faster and break fewer things.
                </p>
              </div>
              <div style={styles.cardContent}>
                <div>
                  <h5 style={{fontWeight: '600', color: '#fff', marginBottom: '0.5rem'}}>Outcomes:</h5>
                  <ul style={{...styles.list, fontSize: '0.875rem', marginBottom: '1rem'}}>
                    <li style={{marginBottom: '0.25rem'}}>• Faster feature shipping</li>
                    <li style={{marginBottom: '0.25rem'}}>• Cleaner Verse architecture</li>
                    <li style={{marginBottom: '0.25rem'}}>• Fewer blockers</li>
                    <li style={{marginBottom: '0.25rem'}}>• Better iteration flow</li>
                  </ul>
                </div>
                <div style={styles.separator}></div>
                <div>
                  <h5 style={{fontWeight: '600', color: '#fff', marginBottom: '0.5rem'}}>Includes:</h5>
                  <ul style={{...styles.list, fontSize: '0.875rem'}}>
                    <li style={{marginBottom: '0.25rem'}}>• Bi-weekly live reviews</li>
                    <li style={{marginBottom: '0.25rem'}}>• Verse & system audits</li>
                    <li style={{marginBottom: '0.25rem'}}>• Production guidance</li>
                    <li style={{marginBottom: '0.25rem'}}>• Async Discord support</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tier 2 */}
            <div style={{...styles.card, borderColor: '#3f3f46'}}>
              <div style={styles.cardHeader}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem'}}>
                  <h4 style={{fontSize: '1.25rem', fontWeight: '600', color: '#fff', margin: 0}}>Tier 2</h4>
                  <span style={{...styles.badge, background: '#fff', color: '#18181b', margin: 0}}>$1K–$4K/mo</span>
                </div>
                <p style={{fontSize: '1rem', color: '#a1a1aa', margin: '0.5rem 0'}}>Embedded Partnership</p>
                <p style={{color: '#d4d4d8', margin: '0.5rem 0 0 0'}}>
                  We become part of your team.
                </p>
              </div>
              <div style={styles.cardContent}>
                <div>
                  <h5 style={{fontWeight: '600', color: '#fff', marginBottom: '0.5rem'}}>Outcomes:</h5>
                  <ul style={{...styles.list, fontSize: '0.875rem', marginBottom: '1rem'}}>
                    <li style={{marginBottom: '0.25rem'}}>• Features shipped faster</li>
                    <li style={{marginBottom: '0.25rem'}}>• Reduced technical debt</li>
                    <li style={{marginBottom: '0.25rem'}}>• Better performance & stability</li>
                    <li style={{marginBottom: '0.25rem'}}>• Stronger production discipline</li>
                  </ul>
                </div>
                <div style={styles.separator}></div>
                <div>
                  <h5 style={{fontWeight: '600', color: '#fff', marginBottom: '0.5rem'}}>Includes:</h5>
                  <ul style={{...styles.list, fontSize: '0.875rem'}}>
                    <li style={{marginBottom: '0.25rem'}}>• Direct code contributions</li>
                    <li style={{marginBottom: '0.25rem'}}>• System & feature development</li>
                    <li style={{marginBottom: '0.25rem'}}>• Refactors & optimization</li>
                    <li style={{marginBottom: '0.25rem'}}>• Deadline & milestone support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Our Pipeline</h3>
          </div>
          <div style={styles.cardContent}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
              {[
                { title: "Discover", desc: "Review your live project, not a pitch deck" },
                { title: "Diagnose", desc: "Identify Verse issues, system risks, scope traps" },
                { title: "Support", desc: "Consulting or embedded execution" },
                { title: "Ship", desc: "Help you push updates live" },
                { title: "Grow", desc: "Improve speed, quality, and confidence over time" }
              ].map((step, idx) => (
                <div key={idx} style={{display: 'flex', alignItems: 'flex-start', gap: '1rem'}}>
                  <div style={styles.stepNumber}>{idx + 1}</div>
                  <div>
                    <h4 style={{fontWeight: '600', color: '#fff', margin: '0 0 0.25rem 0'}}>{step.title}</h4>
                    <p style={{fontSize: '0.875rem', color: '#a1a1aa', margin: 0}}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3D Art */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>3D Art and Asset Sourcing</h3>
            <p style={{fontSize: '0.875rem', color: '#a1a1aa', margin: '0.5rem 0 0 0'}}>Need custom UEFN-ready assets?</p>
          </div>
          <div style={styles.cardContent}>
            <div style={{...styles.grid, marginBottom: '1.5rem'}}>
              <div style={styles.pricingCard}>
                <h4 style={{fontWeight: '600', color: '#fff', margin: '0 0 0.25rem 0'}}>Simple Models</h4>
                <p style={styles.priceAmount}>$50–$200</p>
                <p style={{fontSize: '0.75rem', color: '#a1a1aa', margin: 0}}>per asset</p>
              </div>
              <div style={styles.pricingCard}>
                <h4 style={{fontWeight: '600', color: '#fff', margin: '0 0 0.25rem 0'}}>Complex Models</h4>
                <p style={styles.priceAmount}>$150–$400</p>
                <p style={{fontSize: '0.75rem', color: '#a1a1aa', margin: 0}}>per asset</p>
              </div>
              <div style={styles.pricingCard}>
                <h4 style={{fontWeight: '600', color: '#fff', margin: '0 0 0.25rem 0'}}>Model Sets</h4>
                <p style={styles.priceAmount}>Custom</p>
                <p style={{fontSize: '0.75rem', color: '#a1a1aa', margin: 0}}>scope-based</p>
              </div>
            </div>
            <span style={styles.badge}>Concept Art Prices Coming Soon</span>
            <div style={{marginTop: '1rem'}}>
              <p style={{fontWeight: '600', color: '#fff', margin: '0 0 0.5rem 0'}}>We provide:</p>
              <ul style={{...styles.list, fontSize: '0.875rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.5rem'}}>
                <li>• Vetted 3D artists</li>
                <li>• Style-matched assets</li>
                <li>• Production-ready delivery</li>
                <li>• Quality control</li>
              </ul>
              <p style={{fontSize: '0.875rem', color: '#a1a1aa', marginTop: '1rem'}}>
                We manage the process and retain a 20–30% service margin.
              </p>
            </div>
          </div>
        </div>

        {/* Community */}
        <div style={{...styles.card, borderColor: '#3f3f46'}}>
          <div style={styles.cardHeader}>
            <h3 style={styles.cardTitle}>Community First</h3>
            <p style={{fontSize: '1rem', color: '#a1a1aa', margin: '0.5rem 0 0 0'}}>
              We're not here to extract value — we're here to build it.
            </p>
          </div>
          <div style={styles.cardContent}>
            <p style={styles.text}>Last Rift Labs exists to:</p>
            <ul style={styles.list}>
              {[
                "Strengthen the UEFN ecosystem",
                "Share real production knowledge",
                "Grow creators, not gatekeep systems",
                "Build infrastructure the community can use"
              ].map((item, idx) => (
                <li key={idx} style={styles.listItem}>
                  <span style={{color: '#71717a', marginTop: '2px'}}><CheckCircle /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p style={{...styles.text, fontWeight: '500', fontStyle: 'italic'}}>
              This is grassroots, builder-led, and community-driven. We grow by helping others ship.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div style={styles.cta}>
          <h3 style={styles.ctaTitle}>Get Started</h3>
          <p style={{fontSize: '1.125rem', color: '#d4d4d8', margin: '0 0 1.5rem 0'}}>
            Build something real. Ship something real.
          </p>
          <div style={styles.ctaButtons}>
            <button style={styles.button}>Book Free Consultation</button>
            <button style={styles.buttonOutline}>Join the Discord</button>
            <button style={styles.buttonOutline}>Watch Tutorials</button>
          </div>
        </div>

        {/* Footer */}
        <div style={{marginTop: '2rem', textAlign: 'center'}}>
          <p style={{fontSize: '0.875rem', color: '#71717a'}}>
            Past work examples, case studies, metrics, and testimonials coming soon.
          </p>
        </div>
      </div>
    </div>
  );
}