export interface TechnicalPlatformGuide {
  platformName: string;
  creator: string;
  bestFor: string;
  pros: string[];
  cons: string[];
  stepByStepGuide: {
    stepNumber: number;
    title: string;
    instructions: string;
    codeOrSnippet?: string;
  }[];
}

export const TECHNICAL_GUIDES = {
  recommendation: {
    recommendedTool: "TimelineJS (Northwestern University Knight Lab)",
    alternativeTool: "Tiki-Toki (Webalon)",
    verdict: "TimelineJS is strongly recommended for this college submission over Tiki-Toki.",
    detailedRationale: [
      "1. Robust BCE/BC Date Handling: Indian art history spans over 10,000 years (Mesolithic, Harappan, and Mauryan epochs). TimelineJS natively accepts negative astronomical years (e.g. -8000, -2500, -250) in its spreadsheet template without distorting time scale or requiring custom math workarounds.",
      "2. Built-in Academic Attribution Fields: Every slide in TimelineJS has dedicated, standardized 'Media Credit' and 'Media Caption' fields, allowing full provenance and copyright citations to remain visible at all times, which directly satisfies academic evaluation rubrics.",
      "3. Open-Source Google Sheets Integration: Data is stored in a clean Google Sheet CSV, separating raw research content from layout. This ensures that professors can verify raw research data, and students can update text without breaking CSS styling.",
      "4. Zero-Cost, Ad-Free & Mobile Responsive: Unlike Tiki-Toki’s free tier which caps timeline entries at 200 and restricts custom CSS behind paid subscriptions, TimelineJS is 100% free, ad-free, open-source (Knight Lab), and renders fluidly on desktop and mobile browsers.",
      "5. Minimalist Museum Aesthetic: TimelineJS emphasizes typographic restraint and high-contrast photographic curation, avoiding the flashy 3D neon skeuomorphism that academic evaluators often mark down as distracting."
    ]
  },

  timelineJS: {
    platformName: "TimelineJS",
    creator: "Knight Lab, Northwestern University",
    bestFor: "Academic research, digital storytelling, museum chronologies, classroom grading",
    spreadsheetTemplateUrl: "https://timeline.knightlab.com/#make",
    csvColumns: [
      "Year", "Month", "Day", "Time", "End Year", "End Month", "End Day", "End Time",
      "Display Date", "Headline", "Text", "Media", "Media Credit", "Media Caption", "Media Thumbnail", "Type", "Group", "Background"
    ],
    sampleCsvData: `Year,Month,Day,Time,End Year,End Month,End Day,End Time,Display Date,Headline,Text,Media,Media Credit,Media Caption,Media Thumbnail,Type,Group,Background
-8000,,,,,,"c. 8,000–5,000 BCE","The Great Boar (Animal Procession)","Mesolithic rock painting on quartzite ceiling depicting a colossal, supernatural boar with an oversized snout charging while diminutive human figures flee. Represents primal linear vitality and hunter-gatherer reverence for wildlife fauna.","https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Bhimbetka_rock_painting_1.jpg/800px-Bhimbetka_rock_painting_1.jpg","Archaeological Survey of India / UNESCO","Bhimbetka Rock Shelters, Madhya Pradesh",,"title","Prehistoric & Indus",#1c1917
-2300,,,,,,"c. 2500–1900 BCE","The Dancing Girl of Mohenjo-daro","A 10.5 cm bronze statuette cast via lost-wax (cire-perdue) technique. Portrays a young girl with 25 bangles on her left arm in an assertive tribhanga stance, proving advanced Bronze Age metallurgy.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Dancing_Girl_of_Mohenjo-daro.jpg/800px-Dancing_Girl_of_Mohenjo-daro.jpg","National Museum, New Delhi","Lost-wax cast bronze, National Museum, New Delhi",,,"Prehistoric & Indus",#292524
-2000,,,,,,"c. 2000–1900 BCE","Priest-King of Mohenjo-daro","Carved steatite bust of a contemplative dignitary wearing a fillet headband and a trefoil-patterned shawl draped over the left shoulder, illustrating elite Harappan lapidary stone sculpture.","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Priest_King_Mohenjo-daro.jpg/800px-Priest_King_Mohenjo-daro.jpg","National Museum of Pakistan","Steatite bust, 17.5 cm, Mohenjo-daro",,,"Prehistoric & Indus",#1c1917
-250,,,,,,"c. 250 BCE","Lion Capital of Ashoka at Sarnath","Monolithic Chunar sandstone capital with four Asiatic lions seated back-to-back atop an abacus with the 24-spoke Dharmachakra. The national emblem of the Republic of India.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Lion_Capital_of_Ashoka.jpg/800px-Lion_Capital_of_Ashoka.jpg","Archaeological Survey of India (ASI)","Polished sandstone, Sarnath Archaeological Museum",,,"Mauryan & Classical",#292524
-150,,,,,,"c. 2nd–1st c. BCE","The Didarganj Yakshi (Chauri Bearer)","Monumental lifesize sandstone sculpture with brilliant mirror-like Mauryan polish, depicting a female flywhisk-bearer embodying the classical Indian aesthetic of auspicious feminine fertility (stri-rupa).","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Didarganj_Yakshi_Patna_Museum.jpg/800px-Didarganj_Yakshi_Patna_Museum.jpg","Bihar Museum, Patna","Polished sandstone, Bihar Museum, Patna",,,"Mauryan & Classical",#1c1917
200,,,,,,"c. 2nd–3rd c. CE","Standing Buddha of Gandhara","Dark grey schist sculpture synthesizing Greco-Roman toga drapery with Buddhist spiritual lakshanas (ushnisha, urna, elongated lobes), demonstrating Silk Road cultural syncretism under Kushan rule.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Standing_Buddha_Gandhara_century_1-2.jpg/800px-Standing_Buddha_Gandhara_century_1-2.jpg","National Museum, New Delhi","Grey schist, Gandhara School, National Museum New Delhi",,,"Mauryan & Classical",#292524
475,,,,,,"c. 5th c. CE","Seated Teaching Buddha of Sarnath","Classical Gupta masterpiece showing the Buddha turning the Wheel of Dharma (Dharmachakra Pravartana Mudra). Features clinging foldless wet drapery and an intricately carved floral halo.","https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Buddha_in_Sarnath_Museum_%28archeological_museum%29.jpg/800px-Buddha_in_Sarnath_Museum_%28archeological_museum%29.jpg","Sarnath Archaeological Museum (ASI)","Chunar sandstone, Sarnath Museum",,,"Mauryan & Classical",#1c1917
478,,,,,,"c. 477–480 CE","Bodhisattva Padmapani (Ajanta Cave 1)","Sublime tempera cave mural of the Bodhisattva of Infinite Compassion holding a blue lotus in tribhanga posture. Masterpiece of classical Indian line (rekha) and mineral chiaroscuro modeling.","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Ajanta_Padmapani.jpg/800px-Ajanta_Padmapani.jpg","Archaeological Survey of India / UNESCO","Cave 1, Ajanta Caves, Maharashtra",,,"Classical Murals & Temples",#292524
765,,,,,,"c. 756–773 CE","Kailashanatha Monolithic Temple (Cave 16), Ellora","World’s largest monolithic rock-cut structure, carved vertically top-down out of a single basalt mountain under Rashtrakuta King Krishna I, removing over 200,000 tonnes of solid rock.","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Kailash_Temple_Ellora.jpg/800px-Kailash_Temple_Ellora.jpg","Archaeological Survey of India / UNESCO","Monolithic rock-cut basalt, Ellora Caves",,,"Classical Murals & Temples",#1c1917
975,,,,,,"c. 10th–11th c. CE","Shiva as Nataraja (Chola Bronze)","Lost-wax cast bronze depicting Lord Shiva performing the ecstatic Ananda Tandava inside a cosmic halo of fire (tiruvasi), reconciling dynamic motion with tranquil yogic serenity.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Chola_bronze_Nataraja.jpg/800px-Chola_bronze_Nataraja.jpg","Government Museum, Chennai","Lost-wax bronze, Government Museum Chennai",,,"Classical Murals & Temples",#292524
1592,,,,,,"c. 1590–1595 CE","Akbar Inspects Construction of Fatehpur Sikri","Mughal miniature from the Akbarnama composed by Basawan and painted by Chatar. Features high bird’s-eye perspective, individual psychological portraits, and jewel pigments on wasli paper.","https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Basawan._Akbar_inspects_the_building_of_Fatehpur_Sikri%2C_Akbarnama.jpg/800px-Basawan._Akbar_inspects_the_building_of_Fatehpur_Sikri%2C_Akbarnama.jpg","Victoria and Albert Museum, London","Opaque watercolor and gold on wasli paper",,,"Medieval & Courtly Arts",#1c1917
1750,,,,,,"c. 1750 CE","Radha of Kishangarh (Bani Thani)","Exquisite Rajput miniature by Nihal Chand depicting singer-poetess Bani Thani as Radha, with arched bow brows, lotus eyes, and sheer gold-edged odhani veil. Known as India's Mona Lisa.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Radha_%28Bani_Thani%29.jpg/800px-Radha_%28Bani_Thani%29.jpg","National Museum, New Delhi","Gouache and gold on wasli paper",,,"Medieval & Courtly Arts",#292524
1905,,,,,,"1905 CE","Bharat Mata (Mother India)","Nationalist visual icon by Abanindranath Tagore during the Swadeshi movement, portraying a four-armed ascetic maiden bearing food, cloth, learning, and spiritual prayer.","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Abanindranath_Tagore_-_Bharat_Mata.jpg/800px-Abanindranath_Tagore_-_Bharat_Mata.jpg","Victoria Memorial Hall, Kolkata","Watercolor wash on paper, Victoria Memorial Hall",,,"Modernism & Contemporary",#1c1917
1935,,,,,,"1935 CE","Three Girls / Three Pujarins","Modernist masterpiece by Amrita Sher-Gil synthesizing French post-impressionist color planes with the earthy, melancholy grace of rural Indian women. Designated a National Art Treasure.","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Amrita_Sher-Gil_-_Three_Girls.jpg/800px-Amrita_Sher-Gil_-_Three_Girls.jpg","National Gallery of Modern Art (NGMA)","Oil on canvas, NGMA New Delhi",,,"Modernism & Contemporary",#292524
1983,,,,,,"1983 CE","Saurashtra / The Bindu Cosmos","Monumental acrylic canvas by S.H. Raza synthesizing Parisian geometric color-field modernism with ancient Indian metaphysical concepts of Shunya, Prana, and the cosmic Bindu seed.","https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Abstract_geometric_composition_representing_Bindu_concept.jpg/800px-Abstract_geometric_composition_representing_Bindu_concept.jpg","Raza Foundation / NGMA New Delhi","Acrylic on canvas, 200 x 200 cm",,,"Modernism & Contemporary",#1c1917`,
    steps: [
      {
        stepNumber: 1,
        title: "Clone Knight Lab Official Google Sheet Template",
        instructions: "Navigate to timeline.knightlab.com and click 'Get the Spreadsheet Template'. Click 'Make a copy' to store it in your personal Google Drive."
      },
      {
        stepNumber: 2,
        title: "Enter BCE/CE Astronomical Dates & Content",
        instructions: "Paste the pre-formatted 15 artifact entries. For BCE dates, use negative integers in column A (e.g. -8000 for Bhimbetka, -2500 for Dancing Girl, -250 for Ashoka Lion Capital). Use Column I ('Display Date') for human-readable dates like 'c. 2500–1900 BCE'."
      },
      {
        stepNumber: 3,
        title: "Embed High-Resolution Media & Academic Citations",
        instructions: "Paste direct image URLs into Column L ('Media'). In Column M ('Media Credit'), paste the institutional source (e.g. 'National Museum, New Delhi'). In Column N ('Media Caption'), paste the medium and location."
      },
      {
        stepNumber: 4,
        title: "Publish Google Sheet to Web",
        instructions: "In Google Sheets, go to File > Share > Publish to web. Choose 'Entire Document' and 'Web page', then click 'Publish'. Copy the published link."
      },
      {
        stepNumber: 5,
        title: "Generate Interactive Embed URL & Test",
        instructions: "Return to the TimelineJS generator, paste your Google Sheet URL into Step 3, choose font pairings (e.g., 'Playfair / Plus Jakarta' or 'Cinzel'), and generate your interactive iframe link."
      }
    ]
  },

  tikiToki: {
    platformName: "Tiki-Toki",
    creator: "Webalon Ltd.",
    bestFor: "3D perspective timelines, multimedia timelines with nested categories",
    steps: [
      {
        stepNumber: 1,
        title: "Account Setup & Global Timeline Config",
        instructions: "Create a free account on tiki-toki.com. Create a new timeline titled 'Kāla-Krama: Indian Art History'. Set 'Timeline Date Range' from 01/01/10000 BC to 31/12/2026 AD."
      },
      {
        stepNumber: 2,
        title: "Configure Visual Design & Indian Art Palette",
        instructions: "Under Settings > Background, select a dark gallery hex code (#1c1917). Set Accent color to Ochre Bronze (#c2410c). Under Font choices, set Heading to Serif."
      },
      {
        stepNumber: 3,
        title: "Create Multi-Color Categories",
        instructions: "Under 'Categories', add 5 distinct color-coded tracks: 'Prehistoric & Indus' (Terracotta Red #b91c1c), 'Mauryan & Classical' (Sandstone Buff #d97706), 'Medieval & Temple' (Bronze Green #047857), 'Mughal & Rajput' (Lapis Blue #1d4ed8), and 'Modernism' (Charcoal Gold #854d0e)."
      },
      {
        stepNumber: 4,
        title: "Add Artifact Story Cards with Media",
        instructions: "Click 'Create Story'. Enter the title, select category, input the start date (ensure 'BC' toggle is enabled for ancient items). Under the 'Media' tab, add high-resolution image links with museum credits."
      },
      {
        stepNumber: 5,
        title: "Toggle 3D View Mode",
        instructions: "Click the '3D' icon in the lower bottom controller bar. Adjust camera pitch and flythrough speed to preview how the cards glide into view."
      }
    ]
  }
};
