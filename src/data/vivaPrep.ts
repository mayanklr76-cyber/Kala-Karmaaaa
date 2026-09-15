import { VivaQuestion, ProfessorQuestion } from '../types';

export const VIVA_PREP_DATA = {
  elevatorPitch1Min: `Good morning, esteemed examiners. My project, titled "Kāla-Krama: The Living Canvas," is an interactive digital timeline and museum exhibition tracing the ten-thousand-year evolution of Indian art history. Rather than presenting a disjointed list of historical monuments, I have structured a curated narrative of 15 pivotal artifacts spanning prehistoric Mesolithic rock art at Bhimbetka, the Bronze Age metallurgical mastery of the Indus Valley Dancing Girl, classical Buddhist sculpture and Ajanta murals, monolithic rock-cut architecture at Ellora, medieval Chola cast bronzes, Mughal and Rajput courtly miniatures, and the anti-colonial modernism of Abanindranath Tagore, Amrita Sher-Gil, and S.H. Raza. 

Every entry is thoroughly documented across 16 rigorous academic parameters including verified museum accession numbers, exact material compositions, visual formal analyses, and socio-religious contexts. Built as an interactive web platform with multi-axial filtering, high-resolution visual inspection, and comparative preservation analyses, this project bridges traditional art history scholarship with digital humanities tools, transforming abstract history into an engaging, accessible educational tool.`,

  artifactRationale2Min: `When selecting the 15 artifacts for this timeline, I resisted the temptation to merely compile famous landmarks. Instead, my curatorial rationale was governed by three strict academic criteria:

First, Chronological Continuity and Milestones: I wanted to showcase how Indian art evolved continuously without artificial historical gaps. We begin around 8,000 BCE at Bhimbetka with hunter-gatherer parietal painting, move to urban Bronze Age metallurgy around 2300 BCE with the Mohenjo-daro Dancing Girl, advance to imperial statecraft under Ashoka in the 3rd century BCE, transition to the classical spiritual perfection of the Gupta 5th century, expand into medieval temple architecture and cosmic bronze sculpture from the 8th to 11th centuries, explore royal court ateliers in the 16th to 18th centuries, and culminate in 20th-century anti-colonial and post-independence modernism.

Second, Material and Technological Diversity: Indian art cannot be understood through stone alone. The selection deliberately encompasses seven distinct artistic mediums: mineral pigments bound with plant sap on cave quartzite, lost-wax bronze casting (cire-perdue), monolithic rock quarrying from living basalt, mirror-polished sandstone, mineral tempera on cave plaster, jewel-pigments and gold leaf on layered wasli rag paper, and modern oil and acrylic on canvas.

Third, Philosophical Evolution and Decolonization: The timeline maps the transformation of aesthetic consciousness. It illustrates how early totemic awe transitioned into proto-urban secular confidence, then into devotional Buddhist and Hindu Bhakti canons (such as the Navarasas and the Shanta Rasa of the Sarnath Buddha), into the synthesis of Persian-Indian courtly narrative under Akbar, and finally into modern resistance against colonial academic realism through the Bengal School and Amrita Sher-Gil. By tracing this lineage directly into S.H. Raza’s Bindu, the project proves that Indian modernism was not a passive derivative of Western art, but a sovereign reclamation of indigenous metaphysical geometry.`,

  vivaQuestions: [
    {
      id: 1,
      category: 'Methodology' as const,
      question: "Why did you choose an interactive digital timeline format instead of a standard written essay or static presentation?",
      answer: "A static paper flattens time and isolates artworks from one another. An interactive timeline allows viewers to actively scrub across millennia, immediately perceiving evolutionary leaps—such as how the lost-wax metallurgical technique of the Harappan Dancing Girl in 2300 BCE re-emerged with greater theological sophistication in the Chola Nataraja in 1000 CE. Interactive filtering by medium and geography enables comparative inquiry that traditional formats cannot replicate.",
      keyPoints: ["Visualizes continuity across millennia", "Enables multi-axial filtering", "Enhances student engagement"]
    },
    {
      id: 2,
      category: 'Art Theory' as const,
      question: "What is the 'Mauryan Polish', and what is its artistic and technological significance on the Sarnath Lion Capital?",
      answer: "Mauryan polish is an extraordinary burnishing technique applied to fine-grained Chunar sandstone during the 3rd century BCE under Emperor Ashoka. It imparts a mirror-like, glassy glaze to the stone surface that has resisted weathering for over 2,200 years. Art historians debate whether it was an indigenous metallurgical-lapidary innovation or influenced by Achaemenid Persian stonemasons; nevertheless, its application on the Sarnath capital transformed coarse rock into a radiant imperial monument proclaiming universal Dhamma.",
      keyPoints: ["Mirror-like glassy sandstone finish", "3rd c. BCE imperial Ashokan patronage", "Survives over 22 centuries"]
    },
    {
      id: 3,
      category: 'Chronology' as const,
      question: "How does the Gandhara Buddha differ fundamentally from the contemporaneous Mathura Buddha?",
      answer: "While both developed around the 1st–2nd century CE under the Kushan Empire, Gandhara sculpture (carved in dark grey schist) synthesized Greco-Roman classical realism with Buddhist iconography—seen in naturalistic heavy drapery folds (himation), Apollo-like facial symmetry, and wavy hair. In contrast, the Mathura school (carved in red-spotted Sikri sandstone) was deeply rooted in indigenous Yaksha prototypes—featuring swelling flesh, taut clinging diaphanous drapery, open friendly eyes, and overt vitality.",
      keyPoints: ["Schist stone vs. spotted red sandstone", "Greco-Roman drapery vs. indigenous Yaksha flesh", "Silk Road syncretism vs. Gangetic tradition"]
    },
    {
      id: 4,
      category: 'Art Theory' as const,
      question: "Explain the iconographic significance of the dwarf under Nataraja's foot.",
      answer: "The dwarf is Apasmara Purusha (or Muyalaka in Tamil), who personifies spiritual ignorance, illusion (maya), forgetfulness, and the ego. Shiva does not kill the dwarf, because ignorance is an eternal component of the cosmic cycle; instead, Shiva plants his right foot firmly upon him to subdue and control ignorance, while his lifted left foot offers the devotee grace and liberation (anugraha and moksha).",
      keyPoints: ["Apasmara represents ignorance and ego", "Subdued, not killed, as part of cosmic balance", "Lifted foot points to spiritual salvation"]
    },
    {
      id: 5,
      category: 'Curatorial' as const,
      question: "Why is the Didarganj Yakshi often considered a transitional sculpture in Indian art history?",
      answer: "The Didarganj Yakshi displays the glassy, mirror-like polish characteristic of the imperial Mauryan period, yet its anatomical full-round volumetrics, heavy beaded ornaments, and sensuous contrapposto lean toward the post-Mauryan Shunga aesthetic (2nd–1st c. BCE). It marks the historic milestone where Indian sculpture moved completely away from architectural bas-relief to freestanding, life-size three-dimensional monumental statuary in the round.",
      keyPoints: ["Combines Mauryan polish with Shunga voluptuousness", "True sculpture-in-the-round", "Epitomizes the classical female ideal (stri-rupa)"]
    },
    {
      id: 6,
      category: 'Methodology' as const,
      question: "How did you ensure historical and academic accuracy across dates marked as 'approximate'?",
      answer: "In ancient art history—especially prehistoric rock art and Indus artifacts—radiocarbon and stratigraphical dates carry standard statistical margins of error. Rather than inventing artificial exactness, I explicitly marked dates as approximate (e.g., c. 2500–1900 BCE for Harappan items) following the peer-reviewed consensus of the Archaeological Survey of India (ASI) and international museum catalogues. For historical eras with royal inscriptions (like Ashoka’s edicts or the Rashtrakuta copper plates), exact regnal dates were cited.",
      keyPoints: ["Transparent use of 'circa' notations", "Corroborated with ASI and National Museum records", "Distinguishes stratigraphy from epigraphic dates"]
    },
    {
      id: 7,
      category: 'Art Theory' as const,
      question: "What makes the construction of the Kailashanatha Temple at Ellora an engineering and artistic marvel?",
      answer: "Unlike standard structural architecture constructed bottom-up with mortar and bricks, Kailashanatha (Cave 16) was excavated top-down out of a single living basalt volcanic mountain. Rashtrakuta artisans excavated over 200,000 tonnes of solid rock to quarry an open-air courtyard and carve a full multi-storey Dravidian temple with freestanding pillars, monolithic elephants, and interior mandapas without a single joint or seam. Any structural mistake in carving would have been permanent and fatal to the design.",
      keyPoints: ["Top-down monolithic vertical excavation", "Over 200,000 tonnes of basalt quarried", "No masonry, joints, or scaffolding"]
    },
    {
      id: 8,
      category: 'Art Theory' as const,
      question: "How did Mughal miniature painting under Akbar differ from traditional Persian miniatures?",
      answer: "Persian miniatures (such as the Safavid school) emphasized flat, lyrical decorative patterning, pastel colors, and high poetic detachment. Under Akbar's directive, the Mughal atelier synthesized Persian delicacy with indigenous Indian emotional warmth, dynamic diagonal energy, and European elements like foreshortening and atmospheric depth. As seen in the Akbarnama, Akbar favored crowd scenes, psychological portraiture of working laborers, and historical reportage rather than pure romantic fables.",
      keyPoints: ["Dynamic kinetic action vs. Persian static lyricism", "Individualized human portraits and common laborers", "Integration of European perspective and Indian jewel tones"]
    },
    {
      id: 9,
      category: 'Curatorial' as const,
      question: "What was the ideological intent behind Abanindranath Tagore’s 'Bharat Mata' (1905)?",
      answer: "Abanindranath painted Bharat Mata during the 1905 Swadeshi movement to visually protest Lord Curzon's Partition of Bengal. He intentionally rejected Western academic oil painting, which he viewed as colonial and materialistic, inventing instead a delicate watercolor wash technique inspired by Japanese masters. By depicting Mother India not as a militant goddess with weapons, but as an ascetic young sadhvi bearing food (paddy), clothing (homespun), education (Vedas), and spiritual peace (beads), he gave nationalist resistance a peaceful, self-reliant cultural identity.",
      keyPoints: ["Swadeshi response to 1905 Bengal Partition", "Japanese watercolor wash rejecting British academic oils", "Four arms holding symbols of national self-reliance"]
    },
    {
      id: 10,
      category: 'Chronology' as const,
      question: "What does S.H. Raza’s 'Bindu' represent in the context of post-independence Indian modernism?",
      answer: "Raza's Bindu represents the sovereign synthesis of international modernist abstraction with ancient Indian metaphysics. As a founding member of the Progressive Artists' Group (1947), Raza mastered Parisian color-field painting, but felt an emotional and spiritual void until he returned to Indian philosophy in the late 1970s. The black Bindu (the dot) is simultaneously the primordial nucleus of cosmic creation, the point of absolute concentration, the void (Shunya), and the source of all color and form in the universe.",
      keyPoints: ["Synthesis of French abstraction with Indian Upanishadic thought", "Bindu as the primordial seed of energy and meditation", "Overcoming post-colonial aesthetic dependency"]
    }
  ],

  professorQuestions: [
    {
      id: 1,
      question: "Can we genuinely categorize the Dancing Girl of Mohenjo-daro as a 'dancer', or is that a colonial misnomer?",
      deepDiveExplanation: "Sir John Marshall coined the term 'Dancing Girl' in 1931 based on her jaunty hand-on-hip stance and contrapposto bend. However, modern feminist and post-colonial art historians (such as Possehl and Kenoyer) caution that there are no inscriptions confirming her profession. She could be an adolescent initiate, a ritual practitioner, or simply a young woman representing an elite social class displaying body ornamentation customs.",
      sampleAnswer: "While Sir John Marshall popularized the title 'Dancing Girl' based on her dynamic tribhanga-like poise, contemporary scholarship acknowledges that this is an interpretive convention rather than an archaeological fact. There are no texts to prove her profession. More accurately, she represents an exceptional lost-wax bronze portrait of a self-assured young woman wearing ethnic ornaments (arm-length shell bangles and cowrie pendant), reflecting Harappan secular aesthetics, metallurgy, and body adornment rather than confirmed dance rituals."
    },
    {
      id: 2,
      question: "Explain the relationship between the 'Six Limbs of Indian Painting' (Shadanga) and the Ajanta murals.",
      deepDiveExplanation: "The Citrasutra of the Vishnudharmottara Purana and later commentaries identify the Shadanga: Rupa-bheda (knowledge of forms), Pramanam (proportion/perspective), Bhava (expression/sentiment), Lavanya-yojanam (grace/charm), Sadrisyam (likeness/truth), and Varnika-bhanga (artistic use of color/brushwork). Ajanta's Padmapani is the living embodiment of all six principles.",
      sampleAnswer: "The Bodhisattva Padmapani in Cave 1 perfectly manifests the classical Shadanga canons: Pramanam is demonstrated in the idealized mathematical proportions of the elongated body; Bhava is evident in the downward, introspective gaze radiating karuna (compassion); Lavanya-yojanam appears in the fluid curvature of the tribhanga posture; and Varnika-bhanga is mastered through subtle mineral chiaroscuro where darker red-brown contour lines give three-dimensional volume to the flat rock face."
    },
    {
      id: 3,
      question: "How did the Kishangarh school of painting transform traditional Rajasthani miniature aesthetics into a distinct poetic sub-genre?",
      deepDiveExplanation: "Under the collaborative alchemy of king-poet Raja Savant Singh (Nagari Das) and master painter Nihal Chand, Kishangarh moved away from the stocky, heavy figures of Mewar or the formal courtliness of Mughal miniatures to invent a hyper-stylized facial canon: arched bow-brows, serpentine tresses, and sweeping lotus eyes.",
      sampleAnswer: "Kishangarh painting under Nihal Chand elevated painting into visual poetry. Driven by King Savant Singh's intense devotion to the Pushtimarg Vaishnava cult and his love for the court singer Bani Thani, Nihal Chand synthesized human romantic longing (Sringara rasa) with divine ecstasy. He created an entirely novel anatomical canon—elongated eyes swooping up to the temples, razor-sharp jawlines, and transparent gold-leaf odhani veils—that transformed portraiture into transcendent spiritual allegory."
    },
    {
      id: 4,
      question: "What differentiated Amrita Sher-Gil’s approach to Indian subjects from European Orientalist painters who traveled to India?",
      deepDiveExplanation: "European Orientalists painted India as an exotic, decorative, romantic spectacle with snake charmers, marble palaces, and tiger hunts. Sher-Gil, possessing both European modern painterly training (Paris Salon) and an Indian heritage, rejected exoticism to paint the quiet melancholy, dignity, and silent resignation of rural Indian people.",
      sampleAnswer: "European Orientalists treated India as an exotic, ornamental spectacle for colonial curiosity. Amrita Sher-Gil rejected this superficiality. Trained in Paris under Lucien Simon, she brought post-impressionist structural rigor (reminiscent of Gauguin and Cézanne) to the unglamorized interior lives of everyday Indians. In 'Three Girls' (1935), there are no palace backdrops; instead, she captures the somber silence, heavy eyes, and poignant social vulnerability of Indian women with profound empathetic solidarity."
    },
    {
      id: 5,
      question: "Why was the 1947 Progressive Artists’ Group (PAG) significant, and how does Raza's later work demonstrate the group’s ultimate trajectory?",
      deepDiveExplanation: "Founded in Bombay by Souza, Husain, Raza, Gade, Bakre, and Ara in the year of Indian independence, the PAG sought to break free from both British academic naturalism and the sentimental revivalism of the Bengal School, embracing bold internationalist freedom. Raza's later transition to the Bindu demonstrates how the group's journey evolved from Western expressionism back to rooted indigenous metaphysics.",
      sampleAnswer: "The Progressive Artists' Group was historic because they rejected both the stale academic naturalism of colonial art schools and the historicist nostalgia of the Bengal School, demanding total creative autonomy for post-independence India. Raza’s evolution mirrors the larger philosophical triumph of Indian modernism: after mastering Western abstraction in Paris, he realized that true artistic sovereignty required engaging with India’s deepest philosophical foundations, resulting in the cosmic geometric language of the Bindu."
    }
  ]
};
