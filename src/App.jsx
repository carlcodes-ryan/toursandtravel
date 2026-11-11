import React, { useState, useEffect, useRef } from 'react';

const TRIPS = [
  {
    id: 'mara',
    name: 'Maasai Mara',
    code: 'MRA',
    len: '3 days · 2 nights',
    tags: ['weekend', 'group'],
    label: ['Weekend', 'Group'],
    blurb: 'Game drives at first light across the open plains, and golden evenings back at camp.',
    img: '/images/maasai_mara.jpg'
  },
  {
    id: 'diani',
    name: 'Diani Beach',
    code: 'UKA',
    len: '4 days · 3 nights',
    tags: ['group'],
    label: ['Group', 'Beach'],
    blurb: 'White sand, warm Indian Ocean water and a group that feels like friends by day two.',
    img: '/images/diani.jpg'
  },
  {
    id: 'amboseli',
    name: 'Amboseli',
    code: 'ASV',
    len: '3 days · 2 nights',
    tags: ['weekend'],
    label: ['Weekend', 'Wildlife'],
    blurb: 'Elephants in the foreground and Kilimanjaro behind them, when the cloud lifts.',
    img: '/images/amboseli.jpg'
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar',
    code: 'ZNZ',
    len: '5 days · 4 nights',
    tags: ['group', 'abroad'],
    label: ['Group', 'Abroad'],
    blurb: 'Stone Town alleys, dhow sails at sunset and slow, spice-scented mornings.',
    img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'laikipia',
    name: 'Laikipia',
    code: 'NYK',
    len: '3 days · 2 nights',
    tags: ['weekend'],
    label: ['Weekend', 'Stargazing'],
    blurb: 'Dark skies, a campfire and nowhere else to be. Bring a jacket.',
    img: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'nakuru',
    name: 'Lake Nakuru & Naivasha',
    code: 'NUU',
    len: '2 days · 1 night',
    tags: ['weekend'],
    label: ['Weekend', 'Flamingos'],
    blurb: 'Pink flamingo shores, rhino sanctuary sightings, and boat safaris on fresh water.',
    img: '/images/lake nakuru.jpg'
  },
  {
    id: 'tsavo',
    name: 'Tsavo National Park',
    code: 'TSV',
    len: '3 days · 2 nights',
    tags: ['weekend', 'group'],
    label: ['Weekend', 'Group'],
    blurb: 'Red dust elephants, vast wilderness, and Mzima Springs hippo pools.',
    img: '/images/tsavo.jpg'
  },
  {
    id: 'samburu',
    name: 'Samburu National Reserve',
    code: 'UAS',
    len: '3 days · 2 nights',
    tags: ['weekend', 'group'],
    label: ['Weekend', 'Special 5'],
    blurb: 'Rugged semi-arid beauty, Ewaso Ng\'iro riverbanks, and unique northern wildlife.',
    img: '/images/samburu.jpg'
  },
  {
    id: 'uganda',
    name: 'Uganda Primate Trek',
    code: 'EBB',
    len: '4 days · 3 nights',
    tags: ['abroad', 'group'],
    label: ['Abroad', 'Gorillas'],
    blurb: 'Misty rainforests of Bwindi, mountain gorilla encounters, and the pearl of Africa.',
    img: '/images/uganda.jpg'
  },
  {
    id: 'custom',
    name: 'Your route',
    code: 'ANY',
    len: 'You decide',
    tags: ['abroad', 'custom'],
    label: ['Custom', 'Anywhere'],
    blurb: 'Dubai, Cape Town, Mauritius or somewhere we have not been yet. Send us your brief.',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80'
  }
];

const CAPS = [
  'Maasai Mara · MRA · Dawn',
  'Diani Beach · UKA · Midday',
  'Amboseli · ASV · Golden hour',
  'Zanzibar · ZNZ · Sunset',
  'Laikipia · NYK · Night'
];

export default function App() {
  // Filter & Search bar state
  const [filter, setFilter] = useState('all');
  const [selectedTo, setSelectedTo] = useState('any');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [travellers, setTravellers] = useState(2);
  const [pulsingTripId, setPulsingTripId] = useState(null);

  // Hero Reel state
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(15);
  const [isPlaying, setIsPlaying] = useState(true);
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  // Preloaded inquiry message for WhatsApp
  const defaultInquiryMessage = "Hi Janel Tours and Travels, I'd like to enquire about planning a trip with you. Please share your available itineraries, dates and pricing. Thank you!";

  // Auto-play and loop synchronization
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) {
      vid.muted = true;
      vid.play().catch(() => {
        // Autoplay policy fallback
      });
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsPlaying(false);
      if (vid) vid.pause();
      return;
    }

    let isVisible = true;
    let animId;
    let lastNow = performance.now();

    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (vid) {
        if (isVisible && isPlaying) {
          vid.play().catch(() => {});
        } else {
          vid.pause();
        }
      }
    }, { threshold: 0.1 });

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    const handleLoadedMetadata = () => {
      if (vid && vid.duration && !isNaN(vid.duration)) {
        setDuration(vid.duration);
      }
    };

    if (vid) {
      vid.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    const tick = (now) => {
      const dt = Math.min(0.1, (now - lastNow) / 1000);
      lastNow = now;

      if (isPlaying && isVisible) {
        if (vid && !vid.paused && vid.currentTime) {
          setTime(vid.currentTime);
        } else {
          setTime((prev) => (prev + dt) % (duration || 15));
        }
      }
      animId = requestAnimationFrame(tick);
    };

    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      if (vid) {
        vid.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, [isPlaying, duration]);

  // Play / Pause loop toggle
  const togglePlay = () => {
    const nextState = !isPlaying;
    setIsPlaying(nextState);
    const vid = videoRef.current;
    if (vid) {
      if (nextState) {
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    }
  };

  // Filtered trips
  const filteredTrips = TRIPS.filter(
    (t) => filter === 'all' || t.tags.includes(filter)
  );

  // Stepper handlers
  const handleTravellerChange = (delta) => {
    setTravellers((prev) => Math.max(1, Math.min(60, prev + delta)));
  };

  // Find Trips CTA
  const handleFindTrips = () => {
    setFilter(selectedStyle);
    const tripsEl = document.getElementById('trips');
    if (tripsEl) {
      tripsEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (selectedTo !== 'any') {
      setPulsingTripId(selectedTo);
      setTimeout(() => {
        setPulsingTripId(null);
      }, 2600);
    }
  };

  // Plan This Trip click -> directly launches WhatsApp with preloaded trip inquiry
  const handlePlanTrip = (trip) => {
    const msg = `Hi Janel Tours and Travels, I would like to enquire about the ${trip.name} (${trip.len}) package. Please send me itinerary details and pricing. Thank you!`;
    const url = `https://api.whatsapp.com/send/?phone=254753632184&text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Active scene index & caption calculation
  const totalDuration = duration || 15;
  const progressRatio = Math.max(0, Math.min(1, time / totalDuration));
  const sceneIdx = Math.min(CAPS.length - 1, Math.floor(progressRatio * CAPS.length));
  const currentCaption = CAPS[sceneIdx];

  // Format seconds into 00:SS
  const currentSec = Math.floor(time);
  const totalSec = Math.floor(totalDuration);
  const timeFormatted = `00:${String(currentSec).padStart(2, '0')} / 00:${String(totalSec).padStart(2, '0')}`;

  return (
    <div className="departure-terminal">
      {/* =====================================================================
          HERO SECTION (#top)
          ===================================================================== */}
      <header className="hero" id="top" ref={heroRef}>
        {/* Compressed, optimized, hardware-accelerated video that plays on repeat */}
        <div className="hero-media-wrap">
          <video
            ref={videoRef}
            id="vid"
            poster="/videos/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="hero-video"
            aria-hidden="true"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source src="/videos/hero-720p.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Film grain and contrast scrim overlays */}
        <div className="grain" aria-hidden="true" />
        <div className="scrim" aria-hidden="true" />

        <div className="wrap hero-in">
          {/* Top Navigation */}
          <nav aria-label="Main Navigation">
            <a className="brand" href="#top" aria-label="Janel Tours and Travels home">
              <img
                src="/images/Logo.jpg"
                alt="Janel Tours Logo"
                className="brand-avatar"
              />
              <span>Janel Tours</span>
            </a>
            <div className="navlinks">
              <a href="#trips">Trips</a>
              <a href="#ways">Ways to travel</a>
              <a href="#how">How it works</a>
              <a className="btn" href="#plan">Plan my trip</a>
            </div>
          </nav>

          {/* Hero Main Copy & Boarding-Pass Bar */}
          <div className="hero-main">
            <span className="eyebrow mono">
              <i aria-hidden="true" />
              Nairobi · NBO · Departures from your city
            </span>
            <h1>
              Leave Nairobi on Friday. Land somewhere <em>unreal.</em>
            </h1>
            <p className="lede">
              Group trips, custom vacation packages and weekend getaways from Nairobi to the world. You choose the place. We handle the rest.
            </p>

            {/* Boarding-Pass Search Bar */}
            <form
              className="pass"
              id="pass"
              onSubmit={(e) => {
                e.preventDefault();
                handleFindTrips();
              }}
              aria-label="Find a trip"
            >
              <div>
                <label className="mono" htmlFor="pFrom">From</label>
                <div className="val" id="pFrom">NBO</div>
              </div>

              <div>
                <label className="mono" htmlFor="pTo">To</label>
                <select
                  id="pTo"
                  value={selectedTo}
                  onChange={(e) => setSelectedTo(e.target.value)}
                  aria-label="Select destination"
                >
                  <option value="any">Anywhere</option>
                  {TRIPS.map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.id === 'custom' ? 'Somewhere else' : t.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="mono" htmlFor="pStyle">Style</label>
                <select
                  id="pStyle"
                  value={selectedStyle}
                  onChange={(e) => setSelectedStyle(e.target.value)}
                  aria-label="Select trip style"
                >
                  <option value="all">Any</option>
                  <option value="weekend">Weekend getaway</option>
                  <option value="group">Group trip</option>
                  <option value="abroad">Abroad</option>
                </select>
              </div>

              <div>
                <label className="mono" id="pTravLbl">Travellers</label>
                <div className="stepper">
                  <button
                    type="button"
                    id="pMinus"
                    aria-label="Decrease traveller count"
                    onClick={() => handleTravellerChange(-1)}
                  >
                    −
                  </button>
                  <b id="pN" aria-live="polite" aria-labelledby="pTravLbl">
                    {travellers}
                  </b>
                  <button
                    type="button"
                    id="pPlus"
                    aria-label="Increase traveller count"
                    onClick={() => handleTravellerChange(1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <button
                  className="btn"
                  id="pGo"
                  type="button"
                  onClick={handleFindTrips}
                >
                  Find trips
                </button>
              </div>
            </form>
          </div>

          {/* Bottom HUD */}
          <div className="hud">
            <div className="hud-left">
              <div className="cap mono">
                <span className="rec">
                  <i aria-hidden="true" /> Loop
                </span>
                <span id="capName">{currentCaption}</span>
                <span className="t" id="capTime">{timeFormatted}</span>
              </div>
              <div className="segs" aria-hidden="true">
                {CAPS.map((_, i) => {
                  const segWidth = 1 / CAPS.length;
                  const segStart = i * segWidth;
                  const segEnd = (i + 1) * segWidth;
                  let segProgress = 0;
                  if (progressRatio >= segEnd) {
                    segProgress = 100;
                  } else if (progressRatio > segStart) {
                    segProgress = ((progressRatio - segStart) / segWidth) * 100;
                  }
                  return (
                    <div className="seg" key={i}>
                      <b style={{ width: `${Math.max(0, Math.min(100, segProgress))}%` }} />
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              className="playbtn"
              id="playBtn"
              type="button"
              aria-pressed={isPlaying ? 'true' : 'false'}
              onClick={togglePlay}
            >
              {isPlaying ? 'Pause loop' : 'Play loop'}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* =====================================================================
            TRIPS SECTION (#trips)
            ===================================================================== */}
        <section id="trips">
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker mono">Now boarding</span>
                <h2>Where are we going next?</h2>
              </div>
              <p>
                Pick a trip, or tell us your own route. Every itinerary can be reshaped around your dates, your budget and your people.
              </p>
            </div>

            {/* Filter Chips (Accessible with aria-pressed) */}
            <div className="chips" id="chips" role="group" aria-label="Filter trips by category">
              <button
                className="chip"
                data-f="all"
                aria-pressed={filter === 'all' ? 'true' : 'false'}
                onClick={() => setFilter('all')}
              >
                All trips
              </button>
              <button
                className="chip"
                data-f="weekend"
                aria-pressed={filter === 'weekend' ? 'true' : 'false'}
                onClick={() => setFilter('weekend')}
              >
                Weekend getaways
              </button>
              <button
                className="chip"
                data-f="group"
                aria-pressed={filter === 'group' ? 'true' : 'false'}
                onClick={() => setFilter('group')}
              >
                Group trips
              </button>
              <button
                className="chip"
                data-f="abroad"
                aria-pressed={filter === 'abroad' ? 'true' : 'false'}
                onClick={() => setFilter('abroad')}
              >
                Abroad
              </button>
            </div>

            {/* Trip Cards Grid with Empty State Fallback */}
            <div className="grid" id="grid">
              {filteredTrips.length > 0 ? (
                filteredTrips.map((trip) => {
                  const isPulsing = pulsingTripId === trip.id;
                  return (
                    <article
                      key={trip.id}
                      className={`ticket ${isPulsing ? 'pulse' : ''}`}
                      id={`trip-${trip.id}`}
                    >
                      <div className="art-wrap">
                        <img
                          className="art"
                          src={trip.img}
                          alt={trip.name}
                          width="640"
                          height="400"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <div className="body">
                        <div className="route">
                          <span>NBO</span>
                          <span className="line" />
                          <span>{trip.code}</span>
                        </div>
                        <h3>{trip.name}</h3>
                        <p>{trip.blurb}</p>
                        <div className="perf" />
                        <div className="meta">
                          <div className="tags mono">
                            {trip.label.map((lbl) => (
                              <span key={lbl}>{lbl}</span>
                            ))}
                          </div>
                          <span className="mono" style={{ color: 'var(--muted)' }}>
                            {trip.len}
                          </span>
                        </div>
                        <div>
                          <button
                            className="linkbtn"
                            data-plan={trip.id}
                            type="button"
                            onClick={() => handlePlanTrip(trip)}
                          >
                            Plan this trip
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })
              ) : (
                <div className="empty-state">
                  <p>No trips match this filter right now.</p>
                  <button className="btn" type="button" onClick={() => setFilter('all')}>
                    View all trips
                  </button>
                </div>
              )}
            </div>

            <p className="note">
              Sample itineraries shown to give a feel for each trip. Dates and prices are confirmed when you enquire.
            </p>
          </div>
        </section>

        {/* =====================================================================
            WAYS TO TRAVEL (#ways)
            ===================================================================== */}
        <section id="ways" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker mono">Three ways to go</span>
                <h2>However you like to travel.</h2>
              </div>
            </div>
            <div className="ways">
              <article className="way">
                <span className="mono">Fixed departure</span>
                <h3>Group trips</h3>
                <p>
                  Travel with a crowd that wants the same adventure. Set itinerary, shared costs, new friends.
                </p>
                <ul>
                  <li>Planned route and stops</li>
                  <li>Shared transport and stays</li>
                  <li>Easy to join solo</li>
                </ul>
              </article>

              <article className="way hot">
                <span className="mono">Friday to Sunday</span>
                <h3>Weekend getaways</h3>
                <p>
                  Short, sharp escapes that fit around work. Leave after the week, be back for Monday.
                </p>
                <ul>
                  <li>Two to three days</li>
                  <li>Close enough to do on a whim</li>
                  <li>Booked well before the long queue</li>
                </ul>
              </article>

              <article className="way">
                <span className="mono">Built around you</span>
                <h3>Custom packages</h3>
                <p>
                  Honeymoon, family reunion, team offsite or a solo reset. Tell us the brief and we build the trip.
                </p>
                <ul>
                  <li>Your dates and budget</li>
                  <li>Flights, stays and activities</li>
                  <li>Anywhere in the world</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* =====================================================================
            HOW IT WORKS (#how)
            ===================================================================== */}
        <section id="how" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="sec-head">
              <div>
                <span className="kicker mono">Flight status</span>
                <h2>From idea to takeoff.</h2>
              </div>
              <p>
                Four steps. You never have to chase a hotel, a transfer or a booking reference.
              </p>
            </div>
            <div className="flow">
              <div className="stop">
                <i aria-hidden="true" />
                <div>
                  <h3>Enquire</h3>
                  <p>Tell us where, when and who is coming.</p>
                </div>
              </div>
              <div className="stop">
                <i aria-hidden="true" />
                <div>
                  <h3>Get your plan</h3>
                  <p>We send an itinerary with a clear price.</p>
                </div>
              </div>
              <div className="stop">
                <i aria-hidden="true" />
                <div>
                  <h3>Confirm</h3>
                  <p>Secure your seat and we book everything.</p>
                </div>
              </div>
              <div className="stop">
                <i aria-hidden="true" />
                <div>
                  <h3>Travel</h3>
                  <p>Show up. Enjoy. We are on call the whole way.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================================
            CHECK-IN ENQUIRY (#plan) — WhatsApp Direct Booking
            ===================================================================== */}
        <section id="plan" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <div className="plan">
              <div>
                <span className="kicker mono" style={{ color: 'var(--accent)' }}>
                  Check in
                </span>
                <h2>Tell us where you want to be.</h2>
                <p className="lead">
                  Skip the long forms. Reach us directly on WhatsApp to get your customized itinerary, open dates, and instant pricing within minutes.
                </p>
                <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--muted)' }}>
                    📞 Prefer a call? <a href="tel:+254753632184" style={{ color: 'var(--accent)', fontWeight: 600 }}>0753 632 184</a>
                  </p>
                  <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--muted)' }}>
                    📸 Instagram: <a href="https://instagram.com/janeltours" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>@janeltours</a>
                  </p>
                </div>
              </div>

              {/* WhatsApp Button with Preloaded Inquiry Message */}
              <div className="whatsapp-inquiry-box">
                <div className="whatsapp-preview">
                  <span className="mono" style={{ color: 'var(--muted)', fontSize: '0.72rem' }}>
                    Preloaded WhatsApp Message:
                  </span>
                  <p className="msg">
                    "{defaultInquiryMessage}"
                  </p>
                </div>

                <a
                  className="whatsapp-btn"
                  href={`https://api.whatsapp.com/send/?phone=254753632184&text=${encodeURIComponent(defaultInquiryMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp (+254 753 632 184)"
                >
                  <svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.01-1.24-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.49-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.3"/>
                  </svg>
                  <span>Chat on WhatsApp (+254 753 632 184)</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =====================================================================
          FOOTER (footer)
          ===================================================================== */}
      <footer>
        <div className="wrap foot">
          <div>
            <a
              className="brand"
              href="#top"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '1.5rem'
              }}
              aria-label="Janel Tours and Travels home"
            >
              <img
                src="/images/Logo.jpg"
                alt="Janel Tours Logo"
                className="brand-avatar"
                style={{ width: '40px', height: '40px' }}
              />
              <span>Janel Tours and Travels</span>
            </a>
            <p>
              Group trips, customised vacation packages and weekend getaways from Nairobi to the world.
            </p>
            <p style={{ marginTop: '10px', color: 'var(--muted)', fontSize: '0.92rem' }}>
              📍 Nairobi, Kenya
            </p>
          </div>

          <div>
            <span className="mono" style={{ color: 'var(--muted)' }}>
              Connect & Book
            </span>
            <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a
                className="ig"
                href="https://api.whatsapp.com/send/?phone=254753632184&text=Hello%20Janel%20Tours"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp: +254 753 632 184
              </a>
              <a
                href="tel:+254753632184"
                style={{ color: 'var(--fg)', fontWeight: 600, textDecoration: 'none', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}
              >
                Call: 0753 632 184
              </a>
              <a
                className="ig"
                href="https://instagram.com/janeltours"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram: @janeltours
              </a>
            </div>
            <p style={{ marginTop: '18px', fontSize: '0.85rem', color: 'var(--muted)' }}>
              © {new Date().getFullYear()} Janel Tours and Travels. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
