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
    backgroundColor: '#0A0E27',
    borderRight: '1px solid #1E3A8A',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingTop: '32px',
    position: 'relative' as const,
    ...style
  }}>
    {/* Blueprint measurement marks */}
    <div style={{
      position: 'absolute' as const,
      right: 0,
      top: 0,
      bottom: 0,
      width: '1px',
      backgroundImage: 'repeating-linear-gradient(to bottom, #1E3A8A 0px, #1E3A8A 2px, transparent 2px, transparent 20px)',
    }} />
    {children}
  </div>
);

interface SectionFrameProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  pattern?: 'blueprint-grid' | 'technical-dots' | 'diagonal-hatch' | 'cross-hatch' | 'none';
  spotlight?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'dual' | 'none';
  withCornerMarks?: boolean;
  withDimensions?: boolean;
}

const SectionFrame: React.FC<SectionFrameProps> = ({ 
  children, 
  style = {}, 
  pattern = 'none', 
  spotlight = 'none',
  withCornerMarks = false,
  withDimensions = false
}) => {
  const getPatternStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 0.08,
      pointerEvents: 'none' as const,
    };

    switch (pattern) {
      case 'blueprint-grid':
        return {
          ...baseStyle,
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px),
            linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
        };
      case 'technical-dots':
        return {
          ...baseStyle,
          backgroundImage: `
            radial-gradient(circle, rgba(37, 99, 235, 0.3) 0.5px, transparent 0.5px),
            radial-gradient(circle, rgba(37, 99, 235, 0.15) 0.5px, transparent 0.5px)
          `,
          backgroundSize: '20px 20px, 100px 100px',
          backgroundPosition: '0 0, 10px 10px',
        };
      case 'diagonal-hatch':
        return {
          ...baseStyle,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(37, 99, 235, 0.08) 10px,
              rgba(37, 99, 235, 0.08) 11px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 10px,
              rgba(37, 99, 235, 0.08) 10px,
              rgba(37, 99, 235, 0.08) 11px
            )
          `,
        };
      case 'cross-hatch':
        return {
          ...baseStyle,
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 15px,
              rgba(37, 99, 235, 0.06) 15px,
              rgba(37, 99, 235, 0.06) 16px
            ),
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 15px,
              rgba(37, 99, 235, 0.06) 15px,
              rgba(37, 99, 235, 0.06) 16px
            )
          `,
          opacity: 0.12,
        };
      default:
        return {};
    }
  };

  const getSpotlightStyle = (): React.CSSProperties => {
    const baseSpotlight: React.CSSProperties = {
      position: 'absolute' as const,
      pointerEvents: 'none' as const,
      zIndex: 0,
    };

    switch (spotlight) {
      case 'top-left':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 800px 600px at 15% 20%, rgba(37, 99, 235, 0.12), transparent 50%)`,
        };
      case 'top-right':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 800px 600px at 85% 20%, rgba(37, 99, 235, 0.12), transparent 50%)`,
        };
      case 'bottom-left':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 800px 600px at 15% 80%, rgba(37, 99, 235, 0.12), transparent 50%)`,
        };
      case 'bottom-right':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 800px 600px at 85% 80%, rgba(37, 99, 235, 0.12), transparent 50%)`,
        };
      case 'center':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse 900px 700px at 50% 50%, rgba(37, 99, 235, 0.1), transparent 60%)`,
        };
      case 'dual':
        return {
          ...baseSpotlight,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `
            radial-gradient(ellipse 700px 500px at 25% 30%, rgba(37, 99, 235, 0.1), transparent 50%),
            radial-gradient(ellipse 700px 500px at 75% 70%, rgba(37, 99, 235, 0.1), transparent 50%)
          `,
        };
      default:
        return {};
    }
  };

  return (
    <div style={{
      border: '1px solid #1E3A8A',
      backgroundColor: '#0A0E27',
      position: 'relative' as const,
      boxShadow: `
        inset 0 0 0 1px rgba(37, 99, 235, 0.1),
        0 0 20px rgba(37, 99, 235, 0.05)
      `,
      overflow: 'hidden' as const,
      ...style
    }}>
      {/* Corner registration marks */}
      {withCornerMarks && (
        <>
          {/* Top Left */}
          <div style={{
            position: 'absolute' as const,
            top: '16px',
            left: '16px',
            width: '20px',
            height: '20px',
            borderTop: '2px solid #2563EB',
            borderLeft: '2px solid #2563EB',
            opacity: 0.6,
          }}>
            <div style={{
              position: 'absolute' as const,
              top: '-8px',
              left: '-8px',
              width: '4px',
              height: '4px',
              backgroundColor: '#2563EB',
              borderRadius: '50%',
            }} />
          </div>
          
          {/* Top Right */}
          <div style={{
            position: 'absolute' as const,
            top: '16px',
            right: '16px',
            width: '20px',
            height: '20px',
            borderTop: '2px solid #2563EB',
            borderRight: '2px solid #2563EB',
            opacity: 0.6,
          }}>
            <div style={{
              position: 'absolute' as const,
              top: '-8px',
              right: '-8px',
              width: '4px',
              height: '4px',
              backgroundColor: '#2563EB',
              borderRadius: '50%',
            }} />
          </div>
          
          {/* Bottom Left */}
          <div style={{
            position: 'absolute' as const,
            bottom: '16px',
            left: '16px',
            width: '20px',
            height: '20px',
            borderBottom: '2px solid #2563EB',
            borderLeft: '2px solid #2563EB',
            opacity: 0.6,
          }}>
            <div style={{
              position: 'absolute' as const,
              bottom: '-8px',
              left: '-8px',
              width: '4px',
              height: '4px',
              backgroundColor: '#2563EB',
              borderRadius: '50%',
            }} />
          </div>
          
          {/* Bottom Right */}
          <div style={{
            position: 'absolute' as const,
            bottom: '16px',
            right: '16px',
            width: '20px',
            height: '20px',
            borderBottom: '2px solid #2563EB',
            borderRight: '2px solid #2563EB',
            opacity: 0.6,
          }}>
            <div style={{
              position: 'absolute' as const,
              bottom: '-8px',
              right: '-8px',
              width: '4px',
              height: '4px',
              backgroundColor: '#2563EB',
              borderRadius: '50%',
            }} />
          </div>
        </>
      )}
      
      {/* Dimension marks */}
      {withDimensions && (
        <>
          {/* Top dimension line */}
          <div style={{
            position: 'absolute' as const,
            top: '8px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '9px',
            fontFamily: 'monospace',
            color: '#2563EB',
            opacity: 0.5,
          }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#2563EB' }} />
            <span>1400px</span>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#2563EB' }} />
          </div>
          
          {/* Left dimension line */}
          <div style={{
            position: 'absolute' as const,
            left: '8px',
            top: '50%',
            transform: 'translateY(-50%) rotate(-90deg)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '9px',
            fontFamily: 'monospace',
            color: '#2563EB',
            opacity: 0.5,
          }}>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#2563EB' }} />
            <span>AUTO</span>
            <div style={{ width: '30px', height: '1px', backgroundColor: '#2563EB' }} />
          </div>
        </>
      )}
      
      {spotlight !== 'none' && <div style={getSpotlightStyle()} />}
      {pattern !== 'none' && <div style={getPatternStyle()} />}
      <div style={{ position: 'relative' as const, zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

interface ClippedCardProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

const ClippedCard: React.FC<ClippedCardProps> = ({ children, style = {} }) => (
  <div style={{
    backgroundColor: '#0F172A',
    border: '1px solid #1E3A8A',
    position: 'relative' as const,
    padding: '28px',
    boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
    ...style
  }}>
    {/* Technical corner cuts */}
    <div style={{
      position: 'absolute' as const,
      top: 0,
      right: 0,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 12px 12px 0',
      borderColor: 'transparent #0A0E27 transparent transparent',
    }} />
    
    {/* Corner accent marks */}
    <div style={{
      position: 'absolute' as const,
      top: '8px',
      left: '8px',
      width: '8px',
      height: '8px',
      borderTop: '1px solid #2563EB',
      borderLeft: '1px solid #2563EB',
      opacity: 0.4,
    }} />
    <div style={{
      position: 'absolute' as const,
      bottom: '8px',
      right: '8px',
      width: '8px',
      height: '8px',
      borderBottom: '1px solid #2563EB',
      borderRight: '1px solid #2563EB',
      opacity: 0.4,
    }} />
    
    {children}
  </div>
);

interface MetricCardProps {
  number: string;
  label: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ number, label }) => (
  <div style={{
    border: '1px solid #1E3A8A',
    padding: '32px 24px',
    textAlign: 'center' as const,
    backgroundColor: '#0A0E27',
    position: 'relative' as const,
    boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
  }}>
    {/* Blueprint crosshair */}
    <div style={{
      position: 'absolute' as const,
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%',
      pointerEvents: 'none' as const,
    }}>
      <div style={{
        position: 'absolute' as const,
        top: '50%',
        left: 0,
        right: 0,
        height: '1px',
        backgroundImage: 'linear-gradient(to right, transparent, rgba(37, 99, 235, 0.1) 50%, transparent)',
      }} />
      <div style={{
        position: 'absolute' as const,
        left: '50%',
        top: 0,
        bottom: 0,
        width: '1px',
        backgroundImage: 'linear-gradient(to bottom, transparent, rgba(37, 99, 235, 0.1) 50%, transparent)',
      }} />
    </div>
    
    <div style={{
      fontSize: '48px',
      fontWeight: '700',
      color: '#2563EB',
      marginBottom: '8px',
      fontFamily: 'monospace',
      letterSpacing: '-0.02em',
      position: 'relative' as const,
      zIndex: 1,
    }}>
      {number}
    </div>
    <div style={{
      fontSize: '12px',
      color: '#60A5FA',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.1em',
      fontWeight: '600',
      position: 'relative' as const,
      zIndex: 1,
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
    backgroundColor: primary ? '#1E3A8A' : 'transparent',
    border: `1px solid ${primary ? '#2563EB' : '#1E3A8A'}`,
    color: primary ? '#60A5FA' : '#93C5FD',
    padding: '14px 32px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.05em',
    transition: 'all 0.15s ease',
    position: 'relative' as const,
    overflow: 'hidden' as const,
    fontFamily: 'monospace',
    boxShadow: primary ? 'inset 0 0 0 1px rgba(37, 99, 235, 0.3), 0 0 10px rgba(37, 99, 235, 0.2)' : 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
    ...style
  }}>
    {/* Technical corner cuts */}
    <div style={{
      position: 'absolute' as const,
      top: 0,
      right: 0,
      width: 0,
      height: 0,
      borderStyle: 'solid',
      borderWidth: '0 6px 6px 0',
      borderColor: `transparent ${primary ? '#0A0E27' : '#0A0E27'} transparent transparent`,
    }} />
    
    {children}
  </button>
);

export default function LastRiftLabs() {
  // ============================================================================
  // STYLES
  // ============================================================================

  const styles = {
    page: {
      backgroundColor: '#020617',
      color: '#93C5FD',
      fontFamily: '"IBM Plex Mono", "Courier New", monospace',
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
        linear-gradient(to right, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(37, 99, 235, 0.03) 1px, transparent 1px),
        linear-gradient(to right, rgba(37, 99, 235, 0.01) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(37, 99, 235, 0.01) 1px, transparent 1px)
      `,
      backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px',
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
      fontSize: '10px',
      color: '#2563EB',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.2em',
      fontWeight: '700',
      fontFamily: 'monospace',
      padding: '4px 8px',
      border: '1px solid #1E3A8A',
      display: 'inline-block',
      backgroundColor: 'rgba(30, 58, 138, 0.1)',
    },
    sectionIndex: {
      fontSize: '14px',
      color: '#1E3A8A',
      fontWeight: '700',
      fontFamily: 'monospace',
      writingMode: 'vertical-rl' as const,
      transform: 'rotate(180deg)',
      padding: '8px 4px',
      border: '1px solid #1E3A8A',
      backgroundColor: 'rgba(30, 58, 138, 0.1)',
    },
    h1: {
      fontSize: '64px',
      fontWeight: '700',
      lineHeight: 1.1,
      margin: '0 0 24px 0',
      color: '#60A5FA',
      letterSpacing: '-0.02em',
      fontFamily: 'monospace',
      textTransform: 'uppercase' as const,
    },
    h2: {
      fontSize: '42px',
      fontWeight: '700',
      lineHeight: 1.2,
      margin: '0 0 16px 0',
      color: '#60A5FA',
      letterSpacing: '-0.01em',
      fontFamily: 'monospace',
      textTransform: 'uppercase' as const,
    },
    h3: {
      fontSize: '18px',
      fontWeight: '600',
      margin: '0 0 12px 0',
      color: '#93C5FD',
      letterSpacing: '0.05em',
      fontFamily: 'monospace',
      textTransform: 'uppercase' as const,
    },
    body: {
      fontSize: '15px',
      lineHeight: 1.6,
      color: '#64748B',
      margin: '0',
      fontFamily: 'monospace',
    },
    bodyLarge: {
      fontSize: '18px',
      lineHeight: 1.55,
      color: '#93C5FD',
      margin: '0',
      fontFamily: 'monospace',
    },
  };

  // ============================================================================
  // RENDER
  // ============================================================================

  return (
    <div style={styles.page}>
      <div style={styles.backgroundGrid} />
      
      {/* Blueprint title block - top left */}
      <div style={{
        position: 'fixed' as const,
        top: '20px',
        left: '20px',
        zIndex: 1000,
        border: '1px solid #1E3A8A',
        backgroundColor: 'rgba(10, 14, 39, 0.95)',
        padding: '12px 16px',
        fontSize: '10px',
        fontFamily: 'monospace',
        color: '#2563EB',
        letterSpacing: '0.1em',
      }}>
        <div>PROJECT: LAST_RIFT_LABS</div>
        <div style={{ opacity: 0.6, marginTop: '4px' }}>REV: 2026.02.17</div>
        <div style={{ opacity: 0.6, marginTop: '4px' }}>SCALE: 1:1</div>
      </div>
      
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
                  MAIN
                </div>
              </Rail>
              
              <SectionFrame 
                style={{ flex: 1, margin: '40px 40px 40px 0', display: 'flex' }} 
                pattern="blueprint-grid" 
                spotlight="top-left"
                withCornerMarks={true}
                withDimensions={true}
              >
                <Rail>
                  <div style={styles.sectionIndex}>00</div>
                </Rail>
                
                <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', padding: '80px' }}>
                    <div>
                      <div style={{ ...styles.sectionLabel, marginBottom: '20px' }}>
                        FORTNITE_CREATOR_HUB
                      </div>
                      <h1 style={styles.h1}>
                        LAST RIFT LABS
                      </h1>
                      <p style={{ ...styles.bodyLarge, marginBottom: '20px', maxWidth: '540px' }}>
                        Helping Fortnite creators turn unfinished ideas into finished, playable games. A builder led UEFN studio + community for creators who want clarity, momentum, and real progress.
                      </p>
                      <p style={{ ...styles.body, marginBottom: '32px', maxWidth: '540px', fontSize: '13px' }}>
                        [BUILDERS_ONLY] Not spectators. Not theory. Real projects, real support.
                      </p>
                      <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
                        <Button primary>BOOK_FREE_CALL</Button>
                      </div>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '1px solid #1E3A8A',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      minHeight: '400px',
                      position: 'relative' as const,
                      overflow: 'hidden' as const,
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2)',
                    }}>
                      {/* Video frame border decoration */}
                      <div style={{
                        position: 'absolute' as const,
                        top: '12px',
                        left: '12px',
                        right: '12px',
                        bottom: '12px',
                        border: '1px solid #1E3A8A',
                        pointerEvents: 'none' as const,
                        zIndex: 10,
                      }} />
                      
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="technical-dots" 
                spotlight="center"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_01</div>
                    <h2 style={styles.h2}>COMMUNITY FIRST</h2>
                    <p style={{ ...styles.bodyLarge, maxWidth: '800px' }}>
                      Last Rift Labs is a Fortnite‑focused UGC studio and creator hub. We help UEFN creators move from stuck to playable to published through:
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    <ClippedCard>
                      <h3 style={styles.h3}>EDUCATION</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Real-world workflows and systems</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>SUPPORT</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Direct help with your projects</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>SYSTEMS</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Structure and process</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>DEVELOPMENT</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>We build with you</p>
                    </ClippedCard>
                  </div>

                  <div style={{
                    borderTop: '1px solid #1E3A8A',
                    paddingTop: '32px',
                  }}>
                    <p style={{ ...styles.body, textAlign: 'center' as const }}>
                      [NOTE] We actively build and release our own games. Then use what we learn to help other creators finish theirs.
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="diagonal-hatch" 
                spotlight="bottom-right"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_02</div>
                    <h2 style={styles.h2}>PROBLEM ANALYSIS</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }}>
                    <div>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px' }}>FAILURE_POINTS:</h3>
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
                            padding: '10px 0 10px 24px',
                            position: 'relative' as const,
                            fontSize: '15px',
                            borderLeft: '2px solid #1E3A8A',
                            marginBottom: '8px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '2px solid #1E3A8A',
                      padding: '32px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2), 0 0 20px rgba(37, 99, 235, 0.1)',
                    }}>
                      <p style={{ ...styles.bodyLarge, textAlign: 'center' as const, margin: 0 }}>
                        [SOLUTION]<br/>
                        We turn confusion into clarity and ideas into finished projects.
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="blueprint-grid" 
                spotlight="top-right"
                withCornerMarks={true}
                withDimensions={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_03</div>
                    <h2 style={styles.h2}>FREE ACCESS</h2>
                    <p style={styles.bodyLarge}>
                      [SHARED_INFRASTRUCTURE] Built for builders.
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '48px' }}>
                    <ClippedCard>
                      <h3 style={styles.h3}>WORKSHOPS</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Real projects, real problems</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>TUTORIALS</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Verse, systems, production</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>DISCORD</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>Async dev support</p>
                    </ClippedCard>
                    
                    <ClippedCard>
                      <h3 style={styles.h3}>CONSULT</h3>
                      <p style={{ ...styles.body, fontSize: '13px' }}>30-minute builder review</p>
                    </ClippedCard>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                    <Button>JOIN_DISCORD</Button>
                    <Button>WATCH_TUTORIALS</Button>
                    <Button primary>BOOK_FREE_CALL</Button>
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="cross-hatch" 
                spotlight="dual"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_04</div>
                    <h2 style={styles.h2}>FREE CONSULT</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '1px solid #1E3A8A',
                      padding: '32px',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px' }}>INPUT:</h3>
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
                            borderLeft: '1px solid #1E3A8A',
                          }}>
                            <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '1px solid #1E3A8A',
                      padding: '32px',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '14px' }}>OUTPUT:</h3>
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
                            borderLeft: '1px solid #1E3A8A',
                          }}>
                            <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>→</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div style={{
                    borderTop: '1px solid #1E3A8A',
                    marginTop: '48px',
                    paddingTop: '32px',
                    textAlign: 'center' as const,
                  }}>
                    <p style={{ ...styles.body, marginBottom: '24px' }}>
                      [NO_STRINGS_ATTACHED] Even if you never work with us again.
                    </p>
                    <Button primary>BOOK_YOUR_FREE_CALL</Button>
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="technical-dots" 
                spotlight="bottom-left"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_05</div>
                    <h2 style={styles.h2}>PAID SERVICES</h2>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
                    {/* Builder Support */}
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '2px solid #1E3A8A',
                      padding: '40px',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2)',
                    }}>
                      <div style={{
                        display: 'inline-block',
                        backgroundColor: '#1E3A8A',
                        color: '#60A5FA',
                        padding: '4px 12px',
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        marginBottom: '16px',
                      }}>
                        TIER_A
                      </div>
                      <h3 style={{ ...styles.h3, fontSize: '24px', marginBottom: '8px' }}>BUILDER SUPPORT</h3>
                      <p style={{ ...styles.body, marginBottom: '32px', fontSize: '13px' }}>
                        For creators who want momentum and structure.
                      </p>
                      
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '9px' }}>OUTCOMES</div>
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
                              borderLeft: '1px solid #1E3A8A',
                            }}>
                              <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '9px' }}>INCLUDES</div>
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
                              borderLeft: '1px solid #1E3A8A',
                            }}>
                              <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>→</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Embedded Partnership */}
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '2px solid #1E3A8A',
                      padding: '40px',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2)',
                    }}>
                      <div style={{
                        display: 'inline-block',
                        backgroundColor: '#1E3A8A',
                        color: '#60A5FA',
                        padding: '4px 12px',
                        fontSize: '10px',
                        fontWeight: '700',
                        letterSpacing: '0.1em',
                        marginBottom: '16px',
                      }}>
                        TIER_B
                      </div>
                      <h3 style={{ ...styles.h3, fontSize: '24px', marginBottom: '8px' }}>EMBEDDED</h3>
                      <p style={{ ...styles.body, marginBottom: '32px', fontSize: '13px' }}>
                        For teams that want execution power.
                      </p>
                      
                      <div style={{ marginBottom: '24px' }}>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '9px' }}>OUTCOMES</div>
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
                              borderLeft: '1px solid #1E3A8A',
                            }}>
                              <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>✓</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <div style={{ ...styles.sectionLabel, marginBottom: '12px', fontSize: '9px' }}>INCLUDES</div>
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
                              borderLeft: '1px solid #1E3A8A',
                            }}>
                              <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>→</span>
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="blueprint-grid" 
                spotlight="center"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_06</div>
                    <h2 style={styles.h2}>PIPELINE</h2>
                  </div>
                  
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    {[
                      { title: 'ASSESS', desc: 'Review your live project' },
                      { title: 'UNDERSTAND', desc: 'Identify blockers' },
                      { title: 'BUILD', desc: 'Choose a support path' },
                      { title: 'PUBLISH', desc: 'Push updates live' },
                      { title: 'IMPROVE', desc: 'Iterate with confidence' },
                    ].map((step, i, arr) => (
                      <React.Fragment key={i}>
                        <div style={{
                          flex: 1,
                          backgroundColor: '#0F172A',
                          border: '1px solid #1E3A8A',
                          padding: '32px 24px',
                          position: 'relative' as const,
                          boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
                        }}>
                          {/* Step number badge */}
                          <div style={{
                            position: 'absolute' as const,
                            top: '12px',
                            right: '12px',
                            width: '24px',
                            height: '24px',
                            border: '1px solid #2563EB',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '10px',
                            color: '#2563EB',
                            fontFamily: 'monospace',
                          }}>
                            {i + 1}
                          </div>
                          
                          <h3 style={{ ...styles.h3, marginBottom: '8px', color: '#2563EB', fontSize: '16px' }}>{step.title}</h3>
                          <p style={{ ...styles.body, fontSize: '13px' }}>{step.desc}</p>
                        </div>
                        {i < arr.length - 1 && (
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#2563EB',
                            fontSize: '20px',
                            alignSelf: 'center',
                            position: 'relative' as const,
                            top: '-20px',
                          }}>
                            →
                          </div>
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="diagonal-hatch" 
                spotlight="top-left"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_07</div>
                    <h2 style={styles.h2}>3D ASSETS</h2>
                    <p style={styles.bodyLarge}>
                      [PRODUCTION_READY] Asset support.
                    </p>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
                    <div>
                      <h3 style={{ ...styles.h3, marginBottom: '24px' }}>SERVICES:</h3>
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
                            borderLeft: '2px solid #1E3A8A',
                            marginBottom: '8px',
                          }}>
                            <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>■</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{
                      backgroundColor: '#0F172A',
                      border: '2px solid #1E3A8A',
                      padding: '32px',
                      boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2)',
                    }}>
                      <h3 style={{ ...styles.h3, marginBottom: '24px' }}>PRICING:</h3>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          paddingBottom: '12px',
                          borderBottom: '1px solid #1E3A8A',
                        }}>
                          <span style={styles.body}>Simple models</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#2563EB' }}>$50–150</span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                          paddingBottom: '12px',
                          borderBottom: '1px solid #1E3A8A',
                        }}>
                          <span style={styles.body}>Complex models</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#2563EB' }}>$150+</span>
                        </div>
                        <div style={{ 
                          display: 'flex', 
                          justifyContent: 'space-between', 
                          alignItems: 'center',
                        }}>
                          <span style={styles.body}>Model sets</span>
                          <span style={{ ...styles.body, fontFamily: 'monospace', color: '#2563EB' }}>CONTACT</span>
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="cross-hatch" 
                spotlight="bottom-right"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '56px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_08</div>
                    <h2 style={styles.h2}>PROOF</h2>
                    <p style={styles.bodyLarge}>
                      [5_YEARS_ACTIVE] 12+ projects released.
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
                          backgroundColor: '#0F172A',
                          border: '1px solid #1E3A8A',
                          aspectRatio: '16/9',
                          overflow: 'hidden' as const,
                          position: 'relative' as const,
                          boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.1)',
                        }}
                      >
                        <img 
                          src={src} 
                          alt={`Project ${i + 1}`}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover' as const,
                            opacity: 0.6,
                            filter: 'grayscale(100%) brightness(0.8) contrast(1.2)',
                          }}
                        />
                        <div style={{
                          position: 'absolute' as const,
                          bottom: '12px',
                          left: '12px',
                          fontSize: '10px',
                          color: '#2563EB',
                          fontFamily: 'monospace',
                          letterSpacing: '0.1em',
                          backgroundColor: 'rgba(10, 14, 39, 0.9)',
                          padding: '4px 8px',
                          border: '1px solid #1E3A8A',
                        }}>
                          PROJECT_{(i + 1).toString().padStart(2, '0')}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div style={{
                    borderTop: '2px solid #1E3A8A',
                    paddingTop: '48px',
                  }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                      <MetricCard number="12+" label="PROJECTS" />
                      <MetricCard number="5" label="YEARS" />
                      <MetricCard number="100%" label="BUILDERS" />
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="technical-dots" 
                spotlight="top-right"
                withCornerMarks={true}
              >
                <div style={{ padding: '80px' }}>
                  <div style={{ marginBottom: '48px' }}>
                    <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_09</div>
                    <h2 style={styles.h2}>VALUES</h2>
                  </div>
                  
                  <div style={{
                    backgroundColor: '#0F172A',
                    border: '2px solid #1E3A8A',
                    padding: '48px',
                    boxShadow: 'inset 0 0 0 1px rgba(37, 99, 235, 0.2)',
                  }}>
                    <h3 style={{ ...styles.h3, marginBottom: '24px', fontSize: '16px' }}>MISSION:</h3>
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                      {[
                        'Strengthen the UEFN ecosystem',
                        'Share real production knowledge',
                        'Grow creators, not gatekeep systems',
                        'Build infrastructure that the community can use',
                      ].map((item, i) => (
                        <li key={i} style={{
                          ...styles.body,
                          padding: '10px 0 10px 24px',
                          position: 'relative' as const,
                          fontSize: '15px',
                          borderLeft: '2px solid #1E3A8A',
                          marginBottom: '8px',
                        }}>
                          <span style={{ position: 'absolute' as const, left: '8px', color: '#2563EB' }}>→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    
                    <div style={{
                      borderTop: '2px solid #1E3A8A',
                      paddingTop: '24px',
                    }}>
                      <p style={{ ...styles.bodyLarge, textAlign: 'center' as const, margin: 0, color: '#2563EB' }}>
                        [PRINCIPLE] We grow by helping others build.
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
              
              <SectionFrame 
                style={{ flex: 1, margin: '0 40px 0 0' }} 
                pattern="blueprint-grid" 
                spotlight="dual"
                withCornerMarks={true}
                withDimensions={true}
              >
                <div style={{ padding: '80px', textAlign: 'center' as const }}>
                  <div style={{ ...styles.sectionLabel, marginBottom: '16px' }}>SECTION_10</div>
                  <h2 style={{ ...styles.h2, fontSize: '52px', marginBottom: '24px' }}>START</h2>
                  <p style={{ ...styles.bodyLarge, marginBottom: '48px', maxWidth: '600px', margin: '0 auto 48px auto' }}>
                    [INIT] Join the community, book a call, or watch our tutorials. No matter where you start, we're here to help you finish.
                  </p>
                  <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button primary>BOOK_FREE_CALL</Button>
                    <Button>JOIN_DISCORD</Button>
                    <Button>WATCH_TUTORIALS</Button>
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