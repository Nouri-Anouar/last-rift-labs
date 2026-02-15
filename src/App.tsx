import React from 'react';

// ============================================================================
// REUSABLE COMPONENTS - Defined outside to prevent recreation on each render
// ============================================================================

interface RailProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const Rail: React.FC<RailProps> = ({ children, style = {} }) => (
  <div style={{
    width: '80px',
    backgroundColor: '#0D1117',
    borderRight: '1px solid #1F2937',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '32px',
    ...style
  }}>
    {children}
  </div>
);

interface SectionFrameProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const SectionFrame: React.FC<SectionFrameProps> = ({ children, style = {} }) => (
  <div style={{
    border: '1px solid #1F2937',
    backgroundColor: '#0D1117',
    position: 'relative' as const,
    boxShadow: 'inset 0 0 0 1px rgba(255, 255, 255, 0.02)',
    ...style
  }}>
    {children}
  </div>
);

interface ClippedCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ClippedCard: React.FC<ClippedCardProps> = ({ children, style = {} }) => (
  <div style={{
    backgroundColor: '#161B22',
    border: '1px solid #30363D',
    clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%)',
    padding: '28px',
    position: 'relative' as const,
    ...style
  }}>
    {children}
  </div>
);

interface MetricCardProps {
  number: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ number, label }) => (
  <div style={{
    border: '1px solid #30363D',
    padding: '32px 24px',
    textAlign: 'center' as const,
    backgroundColor: '#0D1117',
  }}>
    <div style={{
      fontSize: '48px',
      fontWeight: '700',
      color: '#FFFFFF',
      marginBottom: '8px',
      fontFamily: 'monospace',
      letterSpacing: '-0.02em',
    }}>
      {number}
    </div>
    <div style={{
      fontSize: '12px',
      color: '#8B949E',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
      fontWeight: '600',
    }}>
      {label}
    </div>
  </div>
);

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ children, primary = false, style = {} }) => (
  <button style={{
    backgroundColor: primary ? '#0F62FE' : 'transparent',
    border: `1px solid ${primary ? '#0F62FE' : '#30363D'}`,
    color: '#FFFFFF',
    padding: '14px 32px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.15s ease',
    clipPath: 'polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 0 100%)',
    ...style
  }}>
    {children}
  </button>
);

export default function LastRiftLabs() {
  // ============================================================================
  // STYLES
  // ============================================================================

  const styles = {
    page: {
      backgroundColor: '#010409',
      color: '#C9D1D9',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
      minHeight: '100vh',
      position: 'relative' as const,
      overflow: 'hidden' as const,
    },
    backgroundGrid: {
      position: 'fixed' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(to right, rgba(139, 148, 158, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(139, 148, 158, 0.02) 1px, transparent 1px)
      `,
      backgroundSize: '20px 20px',
      pointerEvents: 'none' as const,
      zIndex: 0,
    },
    content: {
      position: 'relative' as const,
      zIndex: 1,
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },
    sectionLabel: {
      fontSize: '11px',
      color: '#0F62FE',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.15em',
      fontWeight: '700',
      fontFamily: 'monospace',
    },
    sectionIndex: {
      fontSize: '14px',
      color: '#30363D',
      fontWeight: '700',
      fontFamily: 'monospace',
      writingMode: 'vertical-rl' as const,
      transform: 'rotate(180deg)',
    },
    h1: {
      fontSize: '64px',
      fontWeight: '700',
      lineHeight: 1.1,
      margin: '0 0 24px 0',
      color: '#FFFFFF',
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '42px',
      fontWeight: '700',
      lineHeight: 1.2,
      margin: '0 0 16px 0',
      color: '#FFFFFF',
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 12px 0',
      color: '#FFFFFF',
      letterSpacing: '-0.01em',
    },
    body: {
      fontSize: '15px',
      lineHeight: 1.6,
      color: '#8B949E',
      margin: '0',
    },
    bodyLarge: {
      fontSize: '18px',
      lineHeight: 1.55,
      color: '#C9D1D9',
      margin: '0',
    },
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div style={styles.page}>
      <div style={styles.backgroundGrid} />
      <div style={styles.content}>

        {/* HERO SECTION */}
        <div style={{ padding: '0', margin: '0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex', minHeight: '100vh' }}>
              <Rail>
                <div style={{
                  ...styles.sectionLabel,
                  writingMode: 'vertical-rl' as const,
                  transform: 'rotate(180deg)',
                  letterSpacing: '0.2em',
                }}>
                  LAST RIFT LABS
                </div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '40px 40px 40px 0', display: 'flex' }}>
                <Rail>
                  <div style={styles.sectionIndex}>00</div>
                </Rail>
                
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', padding: '80px' }}>
                    <div>
                      <div style={{ ...styles.sectionLabel, marginBottom: '20px' }}>
                        A FORTNITE CREATOR HUB
                      </div>
                      <h1 style={styles.h1}>
                        Last Rift Labs
                      </h1>
                      <p style={{ ...styles.bodyLarge, marginBottom: '20px', maxWidth: '540px' }}>
                        Helping Fortnite creators turn unfinished ideas into finished, playable games. A builder led UEFN studio + community for creators who want clarity, momentum, and real progress.
                      </p>
                      <p style={{ ...styles.body, marginBottom: '32px', maxWidth: '540px', fontSize: '13px', color: '#6E7681' }}>
                        Built for Builders. Not spectators. Not theory. Real projects, real support.
                      </p>
                      <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
                        <Button primary>BOOK FREE CALL</Button>
                      </div>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '400px',
                      position: 'relative' as const,
                      overflow: 'hidden' as const,
                    }}>
                      <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/Wf4RGt3zCM8"
                        title="Fortnite UEFN Gameplay"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        style={{
                          position: 'absolute' as const,
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* WHAT THIS IS */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>01</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>WHAT THIS IS</div>
                    <h2 style={styles.h2}>Community First</h2>
                    <p style={{ ...styles.bodyLarge, maxWidth: '800px' }}>
                      Last Rift Labs is a Fortnite‑focused UGC studio and creator hub. We help UEFN creators move from stuck to playable to published through:
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    <ClippedCard>
                      <h3 style={styles.h3}>Practical Education</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Real-world workflows and systems</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>Hands-On Support</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Direct help with your projects</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>Production Systems</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Structure and process</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>Embedded Development</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>We build with you</p>
                    </ClippedCard>
                  </div>

                  <div style={{
                    borderTop: '1px solid #30363D',
                    paddingTop: '32px',
                  }}>
                    <p style={{ ...styles.body, textAlign: 'center' as const }}>
                      We actively build and release our own games. Then use what we learn to help other creators finish theirs.
                    </p>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* THE PROBLEM */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>02</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>THE PROBLEM WE SOLVE</div>
                    <h2 style={styles.h2}>Most creators don't fail because of talent</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
                    <div>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px', color: '#8B949E' }}>THEY STALL BECAUSE OF:</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'No clear path',
                          'Too many systems',
                          'No structure',
                          'Scope chaos',
                          'Technical blockers',
                          'No production process',
                        ].map((item, i) => (
                          <li key={i} style={{
                            ...styles.body,
                            padding: '10px 0 10px 20px',
                            position: 'relative' as const,
                            fontSize: '15px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <p style={{ ...styles.bodyLarge, textAlign: 'center' as const, margin: 0 }}>
                        We help turn confusion into clarity and ideas into finished projects.
                      </p>
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* FREE COMMUNITY & RESOURCES */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>03</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>FREE ACCESS</div>
                    <h2 style={styles.h2}>Community & Resources</h2>
                    <p style={styles.bodyLarge}>
                      This is a shared infrastructure built for builders.
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    <ClippedCard>
                      <h3 style={styles.h3}>Weekly Workshops</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Real projects, real problems</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>YouTube Tutorials</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Verse, systems, production</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>Open Discord</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Async dev support</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>Free Consultation</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>30-minute builder review</p>
                    </ClippedCard>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <Button>JOIN DISCORD</Button>
                    <Button>WATCH TUTORIALS</Button>
                    <Button primary>BOOK FREE CALL</Button>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* FREE CONSULT */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>04</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>NO COMMITMENT</div>
                    <h2 style={styles.h2}>Free 30-Minute Builder Consult</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '32px',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px', color: '#8B949E' }}>WE:</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'Review your real project',
                          'Identify actual blockers',
                          'Clarify whats slowing you down',
                          'Map realistic next steps',
                        ].map((item, i) => (
                          <li key={i} style={{
                            ...styles.body,
                            padding: '8px 0 8px 20px',
                            position: 'relative' as const,
                            fontSize: '14px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '32px',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px', color: '#8B949E' }}>YOU LEAVE WITH:</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'Clear priorities',
                          'Reduced scope confusion',
                          'A practical action plan',
                          'Direction you can execute',
                        ].map((item, i) => (
                          <li key={i} style={{
                            ...styles.body,
                            padding: '8px 0 8px 20px',
                            position: 'relative' as const,
                            fontSize: '14px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div style={{
                    borderTop: '1px solid #30363D',
                    marginTop: '48px',
                    paddingTop: '32px',
                    textAlign: 'center' as const,
                  }}>
                    <p style={{ ...styles.body, marginBottom: '24px' }}>
                      Even if you never work with us again.
                    </p>
                    <Button primary>BOOK YOUR FREE CALL</Button>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* HOW WE HELP */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>05</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>PAID SERVICES</div>
                    <h2 style={styles.h2}>How We Help</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    {/* Builder Support */}
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '40px',
                    }}>
                      <h3 style={{ ...styles.h3, fontSize: '24px', marginBottom: '8px' }}>Builder Support</h3>
                      <p style={{ ...styles.body, marginBottom: '32px', fontSize: '13px' }}>
                        For creators who want momentum and structure.
                      </p>
                      
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '10px' }}>OUTCOMES</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            'Faster progress',
                            'Cleaner systems',
                            'Fewer blockers',
                            'Better iteration flow',
                          ].map((item, i) => (
                            <li key={i} style={{
                              ...styles.body,
                              padding: '6px 0 6px 20px',
                              position: 'relative' as const,
                              fontSize: '13px',
                            }}>
                              <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '10px' }}>INCLUDES</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            'Project reviews',
                            'Verse & system audits',
                            'Production planning',
                            'Async support',
                          ].map((item, i) => (
                            <li key={i} style={{
                              ...styles.body,
                              padding: '6px 0 6px 20px',
                              position: 'relative' as const,
                              fontSize: '13px',
                            }}>
                              <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Embedded Partnership */}
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '40px',
                    }}>
                      <h3 style={{ ...styles.h3, fontSize: '24px', marginBottom: '8px' }}>Embedded Partnership</h3>
                      <p style={{ ...styles.body, marginBottom: '32px', fontSize: '13px' }}>
                        For teams that want execution power.
                      </p>
                      
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '10px' }}>OUTCOMES</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            'Features shipped',
                            'Reduced technical debt',
                            'Better performance',
                            'Stronger production systems',
                          ].map((item, i) => (
                            <li key={i} style={{
                              ...styles.body,
                              padding: '6px 0 6px 20px',
                              position: 'relative' as const,
                              fontSize: '13px',
                            }}>
                              <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '10px' }}>INCLUDES</div>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                          {[
                            'Direct code contributions',
                            'System & feature development',
                            'Refactors & optimization',
                            'Milestone support',
                          ].map((item, i) => (
                            <li key={i} style={{
                              ...styles.body,
                              padding: '6px 0 6px 20px',
                              position: 'relative' as const,
                              fontSize: '13px',
                            }}>
                              <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* PIPELINE */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>06</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>OUR PROCESS</div>
                    <h2 style={styles.h2}>Pipeline</h2>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {[
                      { title: 'Assess', desc: 'Review your live project' },
                      { title: 'Understand', desc: 'Identify blockers' },
                      { title: 'Build', desc: 'Choose a support path' },
                      { title: 'Publish', desc: 'Push updates live' },
                      { title: 'Improve', desc: 'Improve speed, quality, and confidence' },
                    ].map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <div style={{
                          flex: 1,
                          backgroundColor: '#161B22',
                          border: '1px solid #30363D',
                          padding: '32px 24px',
                        }}>
                          <h3 style={{ ...styles.h3, marginBottom: '8px', color: '#0F62FE' }}>{step.title}</h3>
                          <p style={{ ...styles.body, fontSize: '13px' }}>{step.desc}</p>
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{
                            width: '24px',
                            height: '1px',
                            backgroundColor: '#30363D',
                            alignSelf: 'center',
                            position: 'relative' as const,
                            top: '-20px',
                          }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* 3D ART & ASSET SUPPORT */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>07</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>PRODUCTION ASSETS</div>
                    <h2 style={styles.h2}>3D Art & Asset Support</h2>
                    <p style={styles.bodyLarge}>
                      Need Production‑ready assets?
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                    <div>
                      <h3 style={{ ...styles.h3, marginBottom: '24px' }}>We provide:</h3>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'Vetted 3D artists',
                          'Style matched assets',
                          'Production-ready delivery',
                          'Quality control',
                        ].map((item, i) => (
                          <li key={i} style={{
                            ...styles.body,
                            padding: '10px 0 10px 20px',
                            position: 'relative' as const,
                            fontSize: '15px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#161B22',
                      border: '1px solid #30363D',
                      padding: '32px',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px' }}>Pricing:</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={styles.body}>Simple models</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#C9D1D9' }}>$50–150</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#30363D' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={styles.body}>Complex models</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#C9D1D9' }}>$150+</span>
                        </div>
                        <div style={{ height: '1px', backgroundColor: '#30363D' }} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <span style={styles.body}>Model sets</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#C9D1D9' }}>CONTACT_US</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* PROOF & CREDIBILITY */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>08</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>PROOF & CREDIBILITY</div>
                    <h2 style={styles.h2}>From Idea to Playable</h2>
                    <p style={styles.bodyLarge}>
                      Five years ago, we were just building ideas. Now we've released over 12 projects. We want to help you get from idea to playable.
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    {[
                      'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=600&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=400&fit=crop',
                      'https://images.unsplash.com/photo-1556438064-2d7646166914?w=600&h=400&fit=crop'
                    ].map((src, i) => (
                      <div 
                        key={i}
                        style={{
                          backgroundColor: '#161B22',
                          border: '1px solid #30363D',
                          aspectRatio: '16/9',
                          overflow: 'hidden' as const,
                          position: 'relative' as const,
                        }}
                      >
                        <img 
                          src={src} 
                          alt={`Project ${i + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover' as const,
                            opacity: 0.7,
                          }}
                        />
                        <div style={{
                          position: 'absolute' as const,
                          bottom: '12px',
                          left: '12px',
                          fontSize: '11px',
                          color: '#FFFFFF',
                          fontFamily: 'monospace',
                          letterSpacing: '0.1em',
                          backgroundColor: 'rgba(1, 4, 9, 0.8)',
                          padding: '4px 8px',
                          border: '1px solid #30363D',
                        }}>
                          PROJECT_{(i + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    borderTop: '1px solid #30363D',
                    paddingTop: '48px',
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                      <MetricCard number="12+" label="Projects Released" />
                      <MetricCard number="5" label="Years Building" />
                      <MetricCard number="100%" label="Builder Focused" />
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* COMMUNITY FIRST PHILOSOPHY */}
        <div style={{ padding: '0 0 80px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>09</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>OUR VALUES</div>
                    <h2 style={styles.h2}>Community First</h2>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#161B22',
                    border: '1px solid #30363D',
                    padding: '48px',
                  }}>
                    <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '16px' }}>We exist to:</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                      {[
                        'Strengthen the UEFN ecosystem',
                        'Share real production knowledge',
                        'Grow creators, not gatekeep systems',
                        'Build infrastructure that the community can use',
                      ].map((item, i) => (
                        <li key={i} style={{
                          ...styles.body,
                          padding: '10px 0 10px 20px',
                          position: 'relative' as const,
                          fontSize: '15px',
                        }}>
                          <span style={{ position: 'absolute' as const, left: 0, color: '#0F62FE' }}>▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div style={{
                      borderTop: '1px solid #30363D',
                      paddingTop: '24px',
                    }}>
                      <p style={{ ...styles.bodyLarge, textAlign: 'center' as const, margin: 0 }}>
                        We grow by helping others build.
                      </p>
                    </div>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

        {/* FINAL CTA */}
        <div style={{ padding: '0 0 120px 0' }}>
          <div style={styles.container}>
            <div style={{ display: 'flex' }}>
              <Rail style={{ height: 'auto' }}>
                <div style={styles.sectionIndex}>10</div>
              </Rail>
              
              <SectionFrame style={{ flex: 1, margin: '0 40px 0 0' }}>
                <div style={{ padding: '80px', textAlign: 'center' as const }}>
                  <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>START HERE</div>
                  <h2 style={{ ...styles.h2, fontSize: '52px', marginBottom: '24px' }}>Build something real.</h2>
                  <p style={{ ...styles.bodyLarge, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
                    Join the community, book a call, or watch our tutorials. No matter where you start, we're here to help you finish.
                  </p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <Button primary>BOOK FREE BUILDER CALL</Button>
                    <Button>JOIN THE DISCORD</Button>
                    <Button>WATCH TUTORIALS</Button>
                  </div>
                </div>
              </SectionFrame>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}