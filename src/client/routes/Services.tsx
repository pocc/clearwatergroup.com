interface ServiceCard {
  name: string;
  description: string;
}

interface ServiceCategory {
  title: string;
  image?: { src: string; alt: string };
  services: ServiceCard[];
}

const categories: ServiceCategory[] = [
  {
    title: "Expert Consulting Services",
    image: {
      src: "/images/services-research.jpg",
      alt: "Research and investigation — magnifying glass on books",
    },
    services: [
      {
        name: "Second Opinion",
        description:
          "Evaluate progress toward project goals, financial basis for mineral resources, expert opinion reports compliant with Federal Rule 26(a)(2)(B).",
      },
      {
        name: "Verification Sampling",
        description:
          "Groundwater, soil, soil vapor, and indoor air testing using EPA Method TO-17.",
      },
      {
        name: "Litigation Support",
        description:
          "Cost allocation studies, forensic studies for complex cases, standards of practice evaluation.",
      },
      {
        name: "Forensic Studies",
        description:
          "Environmental molecular diagnostics, PCR analysis, compound specific isotope chemistry.",
      },
      {
        name: "Technical Workshops",
        description:
          "QSD/QSP stormwater training, OSHA safety training, and industry-specific courses.",
      },
      {
        name: "Cost Allocation",
        description:
          "Equitable cost allocation of past and future costs for environmental cleanup and remediation claims.",
      },
    ],
  },
  {
    title: "Sewage Spills, Water Issues and USTs/ASTs",
    services: [
      {
        name: "Sewer Spill Assessment",
        description: "Chemical and bacterial detection using PCR analysis.",
      },
      {
        name: "Sewer Air / Vapor Intrusion",
        description: "Vapor intrusion pathway evaluation for sewer systems.",
      },
      {
        name: "Water Supply",
        description:
          "Basin analysis, conjunctive use, and geochemistry assessment.",
      },
      {
        name: "Sewer Mapping / Smoke Tests",
        description:
          "Comprehensive sewer system mapping and smoke testing services.",
      },
      {
        name: "UST and AST Removal",
        description:
          "Magnetic, induction, and ground penetrating radar location methods for underground and aboveground storage tanks.",
      },
      {
        name: "On-Site Water Management",
        description:
          "On-site water management solutions for construction and remediation projects.",
      },
    ],
  },
  {
    title: "Construction, Oil & Gas and Mining Projects",
    image: {
      src: "/images/services-engineering.jpg",
      alt: "Engineering scale ruler on technical drawings",
    },
    services: [
      {
        name: "Oil & Gas",
        description:
          "Lease valuation, field assessment, and hydraulic fracturing considerations.",
      },
      {
        name: "Mining Operations",
        description:
          "Acid mine drainage mitigation, water control, and restoration planning.",
      },
      {
        name: "Erosion Control",
        description:
          "SWPPP plans, worker training, dust control, and hillside restoration.",
      },
      {
        name: "Demolition (Asbestos, Lead, PCBs)",
        description:
          "Pre-demolition surveys and hazardous materials abatement.",
      },
      {
        name: "PFOS, PFAS, PFOAs",
        description:
          "Assessment and remediation of per- and polyfluoroalkyl substances contamination.",
      },
    ],
  },
  {
    title: "Real Estate Transactions and Land Redevelopment",
    image: {
      src: "/images/services-site-map.jpg",
      alt: "Environmental site assessment map showing monitoring well locations and contamination plume",
    },
    services: [
      {
        name: "Phase I Assessments",
        description:
          "Environmental site assessments to identify potential contamination risks during real estate transactions.",
      },
      {
        name: "Phase II Investigations",
        description:
          "Soil, groundwater, and soil vapor sampling to confirm or rule out contamination identified in Phase I.",
      },
      {
        name: "Feasibility Testing",
        description:
          "Evaluate remediation alternatives and determine the most cost-effective cleanup approach.",
      },
      {
        name: "Phase III Remediation",
        description:
          "Active remediation of contaminated soil and groundwater using proven technologies.",
      },
      {
        name: "Phase IV Case Closure",
        description:
          "Regulatory case closure documentation and confirmation sampling.",
      },
      {
        name: "Continuing Obligations",
        description:
          "Ongoing monitoring, reporting, and compliance for sites with residual contamination.",
      },
    ],
  },
];

export default function Services() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Services</h1>
        <p className="text-gray-600 mb-12">
          Expertise in Environmental, Resource, and Sustainability Consulting.
        </p>

        {categories.map((category) => (
          <section key={category.title} className="mb-14">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              {category.title}
            </h2>
            {category.image && (
              <img
                src={category.image.src}
                alt={category.image.alt}
                className="w-full h-48 object-cover rounded-lg mb-6"
              />
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.services.map((service) => (
                <div
                  key={service.name}
                  className="rounded-lg border border-gray-200 p-6 hover:border-teal-200 hover:shadow-sm transition-all"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Credentials */}
        <section className="rounded-lg bg-gray-50 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Credentials &amp; Licensing
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Licensed general engineering contractor in California (CSLB#
            799370). Over 30 years of contracting experience.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
            <li>General Engineering (A)</li>
            <li>Building (B)</li>
            <li>Well Drilling (C-57)</li>
            <li>Hazardous Materials Removal</li>
            <li>Asbestos Abatement</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
