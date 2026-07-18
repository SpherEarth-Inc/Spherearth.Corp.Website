import type {
  AcronymValue,
  CareerBenefit,
  WhyChooseReason,
} from "@/types/content";

export const homeContent = {
  hero: {
    title: "SpherEarth Inc. / SphèreTerre Inc.",
    slides: [
      {
        image: "/images/service-heroes/football-academy.webp",
        description:
          "SpherEarth Football Academy — premium youth football development, built in Toronto and designed for the world.",
        ctaLabel: "Visit Football Academy",
        ctaHref: "https://football.spherearth.ca",
      },
      {
        image: "/images/home-hero-1.webp",
        description:
          "We provide holistic solutions across multiple sectors.",
        ctaLabel: "Learn More About Us",
        ctaHref: "/about-us",
      },
      {
        image: "/images/home-hero-2.webp",
        description:
          "Explore our services and join us in shaping a better future. We offer a comprehensive range of services designed to drive sustainable growth, operational efficiency, and community impact.",
        ctaLabel: "Explore Our Services",
        ctaHref: "/services",
      },
    ],
  },
  welcome: {
    eyebrow: "Welcome to",
    title: "SpherEarth Inc. / SphèreTerre Inc.",
    description:
      "Welcome to SpherEarth Inc. / SphèreTerre Inc., where sustainability meets innovation. We're a Canadian-based Private Corporation dedicated to providing holistic solutions across multiple sectors. Explore our services and join us in shaping a better future.",
  },
  landAcknowledgment: {
    title: "Land Acknowledgment",
    image: "/images/acknowlegdment.webp",
    paragraphs: [
      "SpherEarth Inc. / SphèreTerre Inc. acknowledges the ancestral lands of Indigenous peoples across Ontario, recognizing 46 treaties and agreements. We thank First Nations, Métis, and Inuit communities for their enduring stewardship. Our Toronto office sits on Mississaugas of the Credit, Michi Saagig, Anishnabeg territory, historically home to Chippewa, Haudenosaunee, and Wendat peoples. We commit to understanding this land's history, respecting inherent and treaty rights, and collaborating with Indigenous communities as colleagues, learners, and allies.",
      "By acknowledging these territories, we move towards reconciliation and a more inclusive future.",
    ],
  },
  corporateResponsibility: {
    title: "Corporate Responsibility",
    description:
      "At SpherEarth Inc. | SphèreTerre Inc., corporate responsibility is at the heart of everything we do. We are dedicated to operating with integrity, fostering inclusivity, and creating positive impacts for our stakeholders, communities, and the environment.",
  },
};

export const aboutContent = {
  title: "About Us",
  heroImage: "/images/about-hero-1.webp",
  corporateOverview: {
    eyebrow: "Corporate Overview",
    image: "/images/acknowlegdment.webp",
    paragraphs: [
      "SpherEarth Inc. / SphèreTerre Inc. is a Private Corporation duly registered and incorporated with Corporations Canada and in the Province of Ontario, with operations in the City of Toronto, in the Province of Ontario, Canada. At SpherEarth Inc. / SphèreTerre Inc., our Corporate Mantra is \"... scaling sustainable synergies ...\" \"Scaling\" – because we believe in \"Growth\". \"Sustainable\" – a pointer to our core values better detailed in our Corporate Responsibility Commitment, Statements and Policies. \"Synergies\" – because we believe in healthy collaborations, co-operation and partnership as against unhealthy competitive practises. Most human and societal problems and challenges stem from an absence of positive Synergies. At SpherEarth Inc. / SphèreTerre Inc. we know and we believe we can make the Earth a better place for all.",
      "Our bilingual name, SpherEarth Inc. / SphèreTerre Inc., embodies our dedication to inclusivity, cultural diversity, and environmental sustainability. By uniting 'SpherEarth' – symbolizing global interconnectedness – with 'SphèreTerre' – paying tribute to Canada's French heritage – we bridge cultural divides and foster eco friendly practices, reflecting our commitment to a harmonious and sustainable future.",
    ],
  },
  identity: [
    { label: "Corporate Mantra / Tagline", content: "Scaling Sustainable Synergies" },
    {
      label: "Mission Statement",
      content:
        "To scale sustainable synergies across multiple sectors by harnessing innovation, collaboration, and ethical practices, while delivering impactful solutions that empower businesses, communities, and the environment.",
    },
    {
      label: "Vision Statement",
      content:
        "To be a global leader in creating scalable, sustainable solutions that transform industries, improve lives, and contribute to a thriving, equitable, and eco-conscious future for all.",
    },
  ],
  values: {
    eyebrow: "Our Core Values",
    image: "/images/core-values.webp",
    intro:
      "At SpherEarth Inc. | SphèreTerre Inc., our values are reflected through the SPHEREARTH acronym, guiding our commitment to sustainability, inclusivity, and excellence.",
  },
  team: {
    title: "Our Team",
    image: "/images/csr-sample.webp",
    paragraphs: [
      "SpherEarth Inc. | SphèreTerre Inc. is led by a group of experienced professionals with diverse expertise across various industries. Our leadership team embodies our core values of sustainability, inclusivity, and innovation.",
      "The leadership team is passionate about driving our mission forward and creating a company culture that values innovation, inclusivity, and responsible growth. Together, we are committed to scaling sustainable solutions and empowering individuals, businesses, and communities for a brighter future.",
      "By living these SPHEREARTH values, we foster a culture of excellence, inclusivity, and sustainability, guiding our journey to make a lasting, positive impact. Explore career opportunities.",
    ],
  },
  acronymValues: [
    { letter: "S", title: "Sustainability", description: "We prioritize eco-friendly practices, minimizing our environmental impact." },
    { letter: "P", title: "People-Centered", description: "We empower employees, clients, and communities through respect, inclusivity, and collaboration." },
    { letter: "H", title: "Honesty", description: "We maintain high standards of honesty and transparency." },
    { letter: "E", title: "Excellence", description: "We strive for excellence in services and operations." },
    { letter: "R", title: "Respect", description: "We value diverse perspectives and treat all individuals with dignity." },
    { letter: "E", title: "Empowerment", description: "We provide tools and resources for growth." },
    { letter: "A", title: "Accountability", description: "We deliver on commitments and remain responsible." },
    { letter: "R", title: "Resilience", description: "We adapt to challenges and push forward." },
    { letter: "T", title: "Transformation", description: "We drive positive change." },
    { letter: "H", title: "Holistic Approach", description: "We integrate diverse perspectives and sustainable practices." },
  ] satisfies AcronymValue[],
};

export const whyChooseContent = {
  title: "Why Choose Us?",
  heroImage: "/images/why-choose-us-hero.webp",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., we stand out for our unwavering commitment to sustainability, innovation, and collaboration. Here's why choosing us is the best choice for your business or organization:",
  reasons: [
    {
      title: "Scaling Sustainable Synergies",
      description:
        "If you synergize with us, you get to enjoy our specialty in providing scalable solutions that prioritize long-term environmental sustainability. Our approach not only addresses current needs but also ensures a better future for generations to come.",
    },
    {
      title: "Expertise Across Multiple Sectors",
      description:
        "With a diverse range of services—from Environmental Services and Logistics to Project Finance Facilitation and Recruitment—we offer comprehensive, adaptable solutions that meet the unique needs of every client. No challenge is too big, and no sector is beyond our reach.",
    },
    {
      title: "People-Centered Approach",
      description:
        "We place a strong emphasis on people—our clients, employees, and communities. By fostering an inclusive, collaborative, and empowering environment, we ensure that all stakeholders thrive. Our team is passionate about driving positive change and providing exceptional service.",
    },
    {
      title: "Commitment to Integrity and Transparency",
      description:
        "We operate with honesty and integrity, ensuring that every relationship is built on trust and mutual respect. Our transparent approach means that you can rely on us to deliver what we promise, every time.",
    },
    {
      title: "Holistic and Ethical Practices",
      description:
        "Our commitment to ethical business practices, diversity, equity, and inclusion is embedded in everything we do. We believe in a holistic approach that considers the wider impact of our actions, benefiting both the environment and society at large.",
    },
    {
      title: "Proven Track Record of Excellence",
      description:
        "Our dedication to excellence is reflected in the quality of our services and the satisfaction of our clients. We continuously strive for innovation and improvement to deliver the highest standards of service.",
    },
    {
      title: "Community Engagement and Corporate Responsibility",
      description:
        "We don't just do business; we make a positive impact. From \"sweat equity\" volunteer initiatives to supporting local communities and charitable causes, we believe in giving back and contributing to societal well-being.",
    },
  ] satisfies WhyChooseReason[],
  closing:
    "By choosing SpherEarth Inc. | SphèreTerre Inc., you're choosing a partner who is committed to delivering impactful, sustainable, and people-centered solutions with integrity and a focus on long-term success. Let's scale sustainable synergies together and make a meaningful difference.",
};

export const careersContent = {
  title: "Careers",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., we believe that our employees are our greatest asset. We are always looking for passionate, driven individuals who are eager to contribute to our mission of creating sustainable, impactful solutions across diverse industries. If you're looking to make a difference and grow with a dynamic, forward thinking company, we want to hear from you.",
  jobOpenings:
    "Explore our Services and if you feel you have what it takes, reach out to us for a Job Opportunity in the Service Sector your expertise fits in to. Currently, we are actively hiring across various departments, and we are committed to fostering a diverse and inclusive work environment.",
  whyJoin:
    "At SpherEarth Inc. | SphèreTerre Inc., we foster a supportive and inclusive work culture where innovation and collaboration thrive. Our employees are empowered to achieve their personal and professional goals, and we offer a range of benefits to support their well-being.",
  benefits: [
    {
      title: "Comprehensive Benefits",
      description:
        "Health, dental, and vision coverage, retirement savings plans, and paid time off.",
    },
    {
      title: "Employee Development",
      description:
        "Ongoing training, career development opportunities, and mentorship programs.",
    },
    {
      title: "Work-Life Balance",
      description: "Flexible working hours and remote work options.",
    },
    {
      title: "Inclusive Environment",
      description:
        "A commitment to diversity, equity, and inclusion in all aspects of our work.",
    },
  ] satisfies CareerBenefit[],
  applicationPortal:
    "Ready to take the next step in your career? Apply online directly through our application form. We offer bilingual support to ensure a seamless application process for all candidates.",
};

export const contactContent = {
  title: "Contact Us",
  heroImage: "/images/contact-hero.webp",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., we value open communication and are committed to providing the best support and services to our clients, partners, and stakeholders. Whether you have questions, need assistance, or are looking to collaborate, we're here to help.",
  locationLines: [
    "First Canadian Place,",
    "100 King Street West,",
    "Suite 5600,",
    "Toronto, ON.",
    "M5X 1C9.",
  ],
  mapQuery: "First Canadian Place, 100 King Street West, Toronto, ON M5X 1C9",
  formTitle: "Get in Touch",
  formIntro: "Please complete the form below, and our team will respond promptly.",
};

export const translateContent = {
  title: "Translate",
  heroImage: "/images/translate-hero.webp",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., we are committed to providing accessible services to our diverse community. To assist you, our website can be translated into multiple languages using the Google Translate tool. Should you prefer additional language support, please feel free to contact us directly for assistance.",
  disclaimer:
    "Please note that SpherEarth Inc. | SphèreTerre Inc. does not assume responsibility for the accuracy of translations provided by the Google Translate tool. Since Google Translate is an automated service, errors or inconsistencies may occur. We encourage you to reach out to us for clarification or further assistance.",
};

export const blogContent = {
  title: "News & Events",
  heroImage: "/images/blog-hero.webp",
  emptyMessage: "No posts yet. Check back soon for the latest news and events from SpherEarth Inc.",
};

export const servicesIndexContent = {
  title: "Our Services",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., we offer a comprehensive range of services designed to drive sustainable growth, operational efficiency, and community impact. From environmental services and logistics to project finance facilitation and recruitment solutions, our expertise spans multiple sectors, each tailored to meet the unique needs of our clients. By blending innovation with practical execution, we provide end-to-end solutions that empower businesses and foster positive change. Our commitment to excellence and sustainability ensures that every service we offer contributes to a cleaner, more connected, and prosperous future.",
};

export const corporateResponsibilityIndexContent = {
  title: "Corporate Responsibility",
  intro:
    "At SpherEarth Inc. | SphèreTerre Inc., corporate responsibility is at the heart of everything we do. We are dedicated to operating with integrity, fostering inclusivity, and creating positive impacts for our stakeholders, communities, and the environment.",
  pillarsIntro: "Our commitment is reflected across five key areas:",
  keyAreas: [
    "Sustainability Commitment – Driving innovation and responsibility for a sustainable future.",
    "Environmental, Social, and Governance (ESG) Commitment – Upholding transparency, ethical practices, and long-term value creation.",
    "Diversity, Equity, and Inclusion (DEI) Statement – Building an inclusive workplace that values every individual.",
    "Equal Employment Opportunity (EEO) Policy – Ensuring fairness and opportunity for all employees.",
    "Corporate Social Responsibility (CSR) Commitment – Giving back through community engagement and impactful initiatives.",
  ],
  closing:
    "Together, these pillars reflect our dedication to making a meaningful difference while fostering growth, equity, and sustainability. Explore how we bring these commitments to life in our daily operations and long-term strategies.",
};

export const inquiryTypes = [
  "General Inquiry",
  "Service Request",
  "Collaboration Opportunity",
  "Career Inquiry",
  "Other (Please Specify)",
] as const;

export const serviceSectors = [
  "Environmental Services",
  "Logistics",
  "Project Finance Facilitation",
  "Media & Publishing, Brand",
  "SpherEarth Fest",
  "Food & Agriculture",
  "Recruitment & Staff Outsourcing",
  "Project Management & General Consultancy",
] as const;
