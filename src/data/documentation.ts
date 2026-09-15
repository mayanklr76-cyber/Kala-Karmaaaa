export const PROJECT_DOCUMENTATION = {
  title: "Kāla-Krama: The Living Canvas — An Interactive Chronology of Indian Art History",
  courseOutcome: "CO1: Analyze, contextualize, and visually communicate the historical evolution of art forms through interactive digital humanities media.",
  academicLevel: "Undergraduate / Postgraduate College Submission (Fine Arts / History / Visual Studies)",
  
  introduction: `Indian art history spans over ten millennia, presenting a rich tapestry of continuity, adaptation, and philosophical contemplation. Rather than a static sequence of dynastic relics, Indian artistic traditions embody an evolving worldview wherein the metaphysical and the sensory continually interlace. From the visceral hunting expressions etched upon the quartzite overhangs of Mesolithic Bhimbetka to the mathematical metallurgy of the Indus Valley, the profound classical quietude of Gupta Sarnath, the dynamic cosmic rhythm of Chola bronzes, and the anti-colonial resurgence of modernism, Indian art demonstrates a persistent capacity to synthesize diverse influences while preserving its core aesthetic tenets. 

This digital humanities project, titled "Kāla-Krama" (The Flow of Time), reconstructs this chronological journey into an immersive, pedagogical timeline. By curating 15 seminal artifacts spanning ancient, medieval, early modern, colonial, and contemporary movements, the project contextualizes each work within its precise sociopolitical, material, and religious landscape. In doing so, it bridges historical scholarship with modern digital curation, transforming abstract art history into an accessible, tactile visual dialogue.`,

  aim: "To conceptualize, research, and construct an academically rigorous, interactive digital timeline exhibition that maps the chronological and conceptual evolution of Indian art history across 10,000 years through curated virtual artifact replicas, curatorial analyses, and interactive digital humanities tools.",

  objectives: [
    "To curate a representative, balanced selection of 15 pivotal artifacts bridging prehistoric rock art, proto-historic urbanism, monumental classical sculpture, rock-cut architecture, medieval courtly manuscripts, and 20th-century anti-colonial and post-independence modernism.",
    "To document each artifact comprehensively across 16 rigorous academic parameters including material provenance, exact/approximate chronologies, stylistic visual characteristics, socioeconomic contexts, and art-historical significance.",
    "To deploy interactive educational mechanisms—such as temporal era navigation, multi-axial filtering (by period, medium, and geographical region), high-resolution artifact inspection, and comparative preservation analyses.",
    "To provide complete, standardized technical blueprints for digital implementation on open-source timeline engines (TimelineJS and Tiki-Toki) ensuring seamless academic reproducibility.",
    "To synthesize authoritative scholarship from premier institutions including the Archaeological Survey of India (ASI), the National Museum, New Delhi, UNESCO, and foundational art historians."
  ],

  methodology: [
    "1. Curatorial Selection & Canon Review: Analyzed foundational texts by Ananda Coomaraswamy, Stella Kramrisch, Percy Brown, and B.N. Goswamy to identify epoch-defining works representing regional diversity and varied artistic mediums (monolithic stone, lost-wax bronze casting, mineral cave tempera, gouache on wasli, and modernist oil on canvas).",
    "2. Primary Source & Museum Archival Grounding: Verified accession numbers, material compositions, findspots, and current curatorial repositories against official catalogues from the National Museum (New Delhi), Bihar Museum (Patna), Sarnath Archaeological Museum, Victoria and Albert Museum (London), and the Archaeological Survey of India.",
    "3. Chronological Normalization: Established a dual-system dating framework utilizing standardized BCE/CE astronomical notations to bridge millennia-spanning prehistory with modern calendar dates.",
    "4. Digital Humanities UI/UX Architecture: Designed a clean, distraction-free digital museum exhibition interface prioritizing typographic legibility (using classical serif display paired with clean sans-serif body type), WCAG AA color contrast, and multi-perspective inspection modules.",
    "5. Comparative Visual Analysis: Formulated comparative pairings (such as wall weathering vs. digital color restoration in Ajanta, and profile coiffure analysis in Mohenjo-daro) to cultivate critical observation skills in students."
  ],

  timelineSynopsis: [
    { period: "Prehistoric & Mesolithic (c. 8000–5000 BCE)", focus: "Primal linear vitality, totemic reverence, and mineral haematite techniques at Bhimbetka." },
    { period: "Bronze Age Urbanism (c. 2500–1900 BCE)", focus: "Technological sophistication in lost-wax bronze casting (Dancing Girl) and contemplative stone carving (Priest-King) in the Indus Valley." },
    { period: "Mauryan & Early Monumental (c. 3rd–1st c. BCE)", focus: "Imperial stonecraft, reflective Mauryan polish, and early Buddhist ethical governance (Sarnath Lion Capital) transitioning to full-round feminine sculpture (Didarganj Yakshi)." },
    { period: "Classical & Gupta Renaissance (c. 2nd–5th c. CE)", focus: "Synthesis of Greco-Roman realism with Indian spirituality in Gandhara, culminating in the sublime classical canon of Sarnath Buddha and the compassionate murals of Ajanta Cave 1." },
    { period: "Medieval Monumental & Cast Metal (c. 8th–11th c. CE)", focus: "The cosmic ambition of top-down monolithic rock architecture at Ellora Kailashanatha, and the philosophical poise of Chola bronze Nataraja." },
    { period: "Sultanate & Imperial Mughal (c. late 16th c. CE)", focus: "Dynamic narrative realism, cooperative atelier production, and jewel-toned miniature wasli techniques in the Akbarnama." },
    { period: "Rajput & Pahari Courtly Traditions (c. 18th c. CE)", focus: "Poetic lyricism, Bhakti devotional fervor, and exaggerated feminine beauty in Kishangarh's Bani Thani." },
    { period: "Colonial Resurgence & Early Modernism (c. 1905–1935 CE)", focus: "The nationalist spiritual wash revival of Abanindranath Tagore’s Bharat Mata and the pioneering post-impressionist feminist realism of Amrita Sher-Gil." },
    { period: "Post-Independence Abstraction (c. 1980s CE)", focus: "The geometric cosmological synthesis of indigenous metaphysical concepts (the Bindu) and modern chromatic abstraction by S.H. Raza." }
  ],

  interactiveDesignConcept: `The user interface is modeled upon modern digital museum exhibitions (such as the British Museum Collections Online, Google Arts & Culture, and the Rijksmuseum Studio). It avoids distracting neon clichés or gratuitous pseudo-ornamentation, relying instead upon a warm gallery dark-canvas scheme (#1c1917 to #292524) accented with subtle ochre and bronze highlights derived from natural mineral pigments (haematite red, raw sienna, and lapis lazuli).

Key architectural components include:
1. Chronological Scrubber & Time-Slice Navigation: Enables horizontal panning across ten millennia with instant period jump anchors.
2. 16-Field Interactive Dossier Modal: Clicking any artifact opens an exhaustive academic dossier containing high-resolution zoomable imagery, material dimensions, findspots, museum accession numbers, bulleted visual characteristics, historical contexts, and full bibliographic citations.
3. Multi-Axial Filtering System: Permits instantaneous filtering by historical era, material medium (stone, bronze, mural, manuscript, canvas), and geographic zone of origin.
4. Curatorial Comparison Engine: Allows side-by-side comparative analysis of structural details, historical weathering, and cross-cultural stylistic influences.
5. Direct Academic Export: Facilitates instant one-click markdown and formatted citation generation for student coursework portfolios.`,

  educationalValue: `This interactive timeline addresses multiple Cognitive Objectives in higher education:
1. Chronological Fluency: Deconstructs the misconception that Indian art is unchanging by visually displaying rapid shifts in scale, medium, and ideological intent over time.
2. Material Culture Awareness: Educates students on technical manufacturing processes—from the cire-perdue lost-wax method and rock-shelter haematite chemistry to medieval wasli preparation and Japanese wash layering.
3. De-colonizing the Art History Canon: Situates modern Indian masters (Tagore, Sher-Gil, Raza) alongside ancient masterworks, illustrating continuous aesthetic sovereignty and dialogue rather than passive Western mimicry.
4. Digital Humanities Literacy: Demonstrates how historical research can be effectively organized, curated, and disseminated via modern web frameworks and structured metadata.`,

  conclusion: `The "Kāla-Krama" interactive timeline establishes that the story of Indian art is not a disconnected catalogue of ornamental relics, but an unbroken, ten-thousand-year intellectual quest to give tangible form to the intangible. By orchestrating a deliberate trajectory from the primeval rock ceilings of Bhimbetka through the classical symmetry of Sarnath to the metaphysical geometry of Raza's modern Bindu, the project illustrates how Indian aesthetics continuously renewed itself in response to changing sociopolitical and material environments. As a digital humanities educational tool, it equips college students and researchers with an engaging, rigorous, and visually coherent platform that elevates art historical pedagogy into a living, tactile experience.`,

  bibliography: [
    {
      author: "Archaeological Survey of India (ASI)",
      year: "2011",
      title: "World Heritage Sites in India: Sarnath, Ajanta, Ellora, and Bhimbetka Monographs",
      publication: "Director General, ASI, Ministry of Culture, Government of India, New Delhi."
    },
    {
      author: "Beach, Milo Cleveland",
      year: "1992",
      title: "Mughal and Rajput Painting (The New Cambridge History of India, Vol. I:3)",
      publication: "Cambridge: Cambridge University Press. ISBN: 978-0521400275."
    },
    {
      author: "Brown, Percy",
      year: "1959",
      title: "Indian Architecture (Buddhist and Hindu Periods)",
      publication: "Bombay: D.B. Taraporevala Sons & Co."
    },
    {
      author: "Coomaraswamy, Ananda K.",
      year: "1918",
      title: "The Dance of Siva: Fourteen Indian Essays",
      publication: "New York: The Sunwise Turn / New Delhi: Munshiram Manoharlal."
    },
    {
      author: "Coomaraswamy, Ananda K.",
      year: "1927",
      title: "History of Indian and Indonesian Art",
      publication: "London: Edward Goldston / New York: Dover Publications."
    },
    {
      author: "Dalmia, Yashodhara",
      year: "2006",
      title: "Amrita Sher-Gil: A Life",
      publication: "New Delhi: Penguin Viking. ISBN: 978-0670058730."
    },
    {
      author: "Goswamy, B. N. & Fischer, Eberhard",
      year: "1992",
      title: "Pahari Masters: Court Painters of Northern India",
      publication: "Zurich: Artibus Asiae Publishers."
    },
    {
      author: "Guha-Thakurta, Tapati",
      year: "1992",
      title: "The Making of a New 'Indian' Art: Artists, Aesthetics and Nationalism in Bengal, c. 1850–1920",
      publication: "Cambridge: Cambridge University Press. ISBN: 978-0521392471."
    },
    {
      author: "Kapur, Geeta",
      year: "2000",
      title: "When Was Modernism: Essays on Contemporary Cultural Practice in India",
      publication: "New Delhi: Tulika Books. ISBN: 978-8185229140."
    },
    {
      author: "Kenoyer, Jonathan Mark",
      year: "1998",
      title: "Ancient Cities of the Indus Valley Civilization",
      publication: "Karachi & New York: Oxford University Press and American Institute of Pakistan Studies."
    },
    {
      author: "Kramrisch, Stella",
      year: "1933",
      title: "Indian Sculpture",
      publication: "Calcutta: YMCA Publishing House / Oxford University Press."
    },
    {
      author: "Marshall, Sir John (Ed.)",
      year: "1931",
      title: "Mohenjo-daro and the Indus Civilization (3 Volumes)",
      publication: "London: Arthur Probsthain for the Government of India."
    },
    {
      author: "Mitter, Partha",
      year: "1994",
      title: "Art and Nationalism in Colonial India, 1850–1922: Occidental Orientations",
      publication: "Cambridge: Cambridge University Press. ISBN: 978-0521443548."
    },
    {
      author: "National Museum, New Delhi",
      year: "2014",
      title: "Masterpieces of the National Museum Collection: A Descriptive Catalogue",
      publication: "New Delhi: National Museum Publications."
    },
    {
      author: "Ray, Nihar Ranjan",
      year: "1975",
      title: "Maurya and Post-Maurya Art: A Study in Social Perspectives",
      publication: "New Delhi: Indian Council of Historical Research."
    },
    {
      author: "Sivaramamurti, C.",
      year: "1963",
      title: "South Indian Bronzes",
      publication: "New Delhi: Lalit Kala Akademi."
    },
    {
      author: "Spink, Walter M.",
      year: "2005",
      title: "Ajanta: History and Development (Volume 1 to 6)",
      publication: "Leiden & Boston: Brill Academic Publishers."
    },
    {
      author: "Thapar, Romila",
      year: "1961",
      title: "Aśoka and the Decline of the Mauryas",
      publication: "Oxford: Oxford University Press."
    },
    {
      author: "UNESCO World Heritage Centre",
      year: "2023",
      title: "State of Conservation Reports: Rock Shelters of Bhimbetka, Ajanta Caves, Ellora Caves",
      publication: "Paris: UNESCO WHC Archive."
    },
    {
      author: "Wakankar, Vishnu Shridhar & Brooks, Robert R. R.",
      year: "1976",
      title: "Stone Age Painting in India",
      publication: "Bombay: D.B. Taraporevala Sons & Co."
    }
  ],

  imageCredits: [
    { artifact: "Bhimbetka Cave Painting (The Boar)", institution: "Archaeological Survey of India / UNESCO", license: "Wikimedia Commons CC BY-SA 3.0" },
    { artifact: "Dancing Girl of Mohenjo-daro", institution: "National Museum, New Delhi", license: "ASI Archive / CC BY-SA 4.0" },
    { artifact: "Priest-King of Mohenjo-daro", institution: "National Museum of Pakistan, Karachi", license: "J.M. Kenoyer / Harappa.com Expedition Archive" },
    { artifact: "Lion Capital of Ashoka at Sarnath", institution: "Sarnath Archaeological Museum (ASI)", license: "Wikimedia Commons CC BY-SA 4.0" },
    { artifact: "Didarganj Yakshi (Chauri Bearer)", institution: "Bihar Museum, Patna", license: "Archaeological Survey of India / Public Domain" },
    { artifact: "Standing Buddha of Gandhara", institution: "National Museum, New Delhi / Lahore Museum", license: "Wikimedia Commons CC BY-SA 4.0" },
    { artifact: "Seated Teaching Buddha of Sarnath", institution: "Sarnath Archaeological Museum (ASI)", license: "Wikimedia Commons CC BY-SA 3.0" },
    { artifact: "Bodhisattva Padmapani (Ajanta Cave 1)", institution: "Archaeological Survey of India / UNESCO", license: "Public Domain / CC BY-SA 4.0" },
    { artifact: "Kailashanatha Temple, Ellora", institution: "Archaeological Survey of India / UNESCO", license: "Wikimedia Commons CC BY-SA 4.0" },
    { artifact: "Chola Bronze Nataraja", institution: "Government Museum, Chennai / National Museum New Delhi", license: "National Museum Photo Archive / CC BY-SA 4.0" },
    { artifact: "Akbar Inspects Building of Fatehpur Sikri", institution: "Victoria and Albert Museum, London", license: "V&A Collections / Public Domain" },
    { artifact: "Radha of Kishangarh (Bani Thani)", institution: "National Museum, New Delhi", license: "National Museum Archive / Public Domain" },
    { artifact: "Bharat Mata by Abanindranath Tagore", institution: "Victoria Memorial Hall, Kolkata", license: "Rabindra Bharati Society / Public Domain" },
    { artifact: "Three Girls / Three Pujarins by Amrita Sher-Gil", institution: "National Gallery of Modern Art (NGMA), New Delhi", license: "National Art Treasure of India / Academic Fair Use" },
    { artifact: "Saurashtra / The Bindu by S.H. Raza", institution: "Raza Foundation / NGMA New Delhi", license: "Fair Academic Educational Representation" }
  ]
};
