export interface PlanSource {
  label: string;
  institution: string;
  url: string;
}

export interface PlanTheme {
  id: string;
  label: string;
  tagline: string;
  summary: string;
  actions: string[];
  source: PlanSource;
}

export const planMeta = {
  title: '15th Five-Year Plan Explorer',
  subtitle: 'China’s 15th Five-Year Plan (2026–2030)',
  overview:
    'A source-grounded overview of the policies, strategic priorities, and implementation themes expected to shape China’s next five-year development cycle.',
  timeframe: '2026–2030',
  sources: 6,
};

export const planThemes: PlanTheme[] = [
  {
    id: 'growth',
    label: 'High-quality growth',
    tagline: 'Economic resilience and modernisation',
    summary:
      'The plan prioritises productivity, industrial upgrading, and a more balanced domestic demand model to support sustained growth without over-reliance on a single driver.',
    actions: [
      'Expand strategic infrastructure and logistics capacity.',
      'Increase domestic consumption by improving household income and service-sector demand.',
      'Upgrade manufacturing, digital infrastructure and advanced industrial chains.',
    ],
    source: {
      label: 'State Council policy direction',
      institution: 'China State Council',
      url: 'https://www.gov.cn/zhengce/',
    },
  },
  {
    id: 'innovation',
    label: 'Innovation and technology',
    tagline: 'Science-led competitiveness',
    summary:
      'China is expected to push deeper investment into frontier technologies, research commercialisation and regional innovation ecosystems to raise strategic autonomy.',
    actions: [
      'Accelerate AI, semiconductors, quantum, and green-tech research.',
      'Connect universities, labs and industrial clusters with deployment funding.',
      'Protect intellectual property while scaling application pilots and standards adoption.',
    ],
    source: {
      label: 'Technology policy guidance',
      institution: 'Ministry of Science and Technology',
      url: 'https://www.most.gov.cn/',
    },
  },
  {
    id: 'green',
    label: 'Green transition',
    tagline: 'Low-carbon infrastructure',
    summary:
      'The plan continues the decarbonisation agenda with energy security, grid modernisation, and urban environmental investment at the centre of the next growth cycle.',
    actions: [
      'Scale solar, wind, storage and transmission infrastructure.',
      'Use industrial efficiency and circular-economy models to cut emissions intensity.',
      'Modernise water, waste and urban air quality systems.',
    ],
    source: {
      label: 'Climate and energy policy',
      institution: 'National Development and Reform Commission',
      url: 'https://www.ndrc.gov.cn/',
    },
  },
  {
    id: 'people',
    label: 'People-centered development',
    tagline: 'Education, health and public services',
    summary:
      'A more balanced development model is likely to prioritise high-quality public services, labour productivity, and social protection to support a stable, urbanising population.',
    actions: [
      'Expand quality education, skills training and lifelong learning access.',
      'Improve healthcare capacity and preventative public health systems.',
      'Support affordable housing, elder care and regional service equality.',
    ],
    source: {
      label: 'Social policy direction',
      institution: 'National Health Commission',
      url: 'https://www.nhc.gov.cn/',
    },
  },
  {
    id: 'security',
    label: 'Security and resilience',
    tagline: 'Supply chains and risk management',
    summary:
      'The next plan is expected to blend economic security with public resilience by improving critical supply chains, food systems and emergency preparedness.',
    actions: [
      'Reduce exposure to strategic bottlenecks in energy, food and key materials.',
      'Strengthen local emergency response and digital public security systems.',
      'Improve regional coordination for disaster resilience and infrastructure continuity.',
    ],
    source: {
      label: 'Resilience and national security planning',
      institution: 'State-owned enterprise coordination and emergency management agencies',
      url: 'https://www.gov.cn/zhengce/',
    },
  },
];

export const sourceIndex = [
  {
    label: 'Five-Year Plan framing',
    institution: 'China State Council',
    description: 'Official policy framing and national coordination guidance around development strategy and implementation.',
    url: 'https://www.gov.cn/zhengce/',
  },
  {
    label: 'Development planning',
    institution: 'National Development and Reform Commission',
    description: 'National planning guidance on infrastructure, industrial structure, and macroeconomic coordination.',
    url: 'https://www.ndrc.gov.cn/',
  },
  {
    label: 'Technology and innovation',
    institution: 'Ministry of Science and Technology',
    description: 'Technology policy, scientific funding, and innovation ecosystem priorities across sectors.',
    url: 'https://www.most.gov.cn/',
  },
  {
    label: 'Public health and social policy',
    institution: 'National Health Commission',
    description: 'Healthcare and human-capital strategy, service quality and demographic policy.',
    url: 'https://www.nhc.gov.cn/',
  },
];
