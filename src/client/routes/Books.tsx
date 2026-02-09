const books = [
  {
    title:
      "Environmental Considerations Associated with Hydraulic Fracturing Operations",
    publisher: "Wiley, 2019",
    pages: 576,
    authors: "James A. Jacobs and Stephen M. Testa",
    image: "/demo/images/book-hydraulic-fracturing.jpg",
    description:
      "The authors include an overview of the historical development of hydraulic fracturing and the technology currently employed. The book explores the risk, prevention, and mitigation factors associated with fracturing, along with legal cases, regulatory issues, and data on the cost of recovery. The volume presents audit checklists for gathering critical information and documentation to support the reliability of current environmental conditions related to fracking operations and their community impact.",
  },
  {
    title:
      "Oil Spills and Gas Leaks: Environmental Response, Prevention and Cost Recovery",
    publisher: "McGraw-Hill, 2014",
    pages: 578,
    authors: "Stephen M. Testa and James A. Jacobs",
    image: "/demo/images/book-oil-spills.jpg",
    description:
      "Highlights the complex nature of assessment, exposure pathway analysis, and sensitive receptor evaluation related to oil spills and gas leaks. Covers sampling methods and remediation of petroleum hydrocarbons, oil spill and gas leak behavior, environmental impact mitigation, engineering techniques, long-term biological and environmental effects, and litigation and cost recovery.",
  },
  {
    title: "Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils",
    publisher: "Wiley, 2014",
    pages: 520,
    authors: "James A. Jacobs, Jay H. Lehr, and Stephen M. Testa",
    image: "/demo/images/book-acid-mine-drainage.jpg",
    description:
      "Explores the biogeochemistry of acid mine drainage, rock drainage, and acid sulfate soils. Describes how to predict, prevent, and remediate the environmental impact of acid drainage and the oxidation of sulfides, offering sampling and analytical methods. Readers will discover new approaches for recovering valuable resources from acid mine drainage, including bioleaching. Jacobs co-authored 18 of the 36 chapters.",
  },
  {
    title: "Chromium(VI) Handbook",
    publisher: "CRC Press, 2004",
    pages: 800,
    authors: "Jacques Guertin, James A. Jacobs, and Cynthia P. Avakian",
    image: "/demo/images/book-chromium.jpg",
    description:
      "The broad scope of this book fills the need for a comprehensive resource on hexavalent chromium. Features chapters on chromium sources, geology and geochemistry, toxicity, treatment, remediation, legal issues, and recommendations. Brought to the public's attention in the film Erin Brockovich, hexavalent chromium is a larger problem than once thought. Put together by a team of scientists, engineers, regulators, and lawyers.",
  },
  {
    title: "MTBE: Effects on Soil and Groundwater Resources",
    publisher: "CRC Press, 2001",
    pages: 264,
    authors: "James A. Jacobs, Jacques Guertin, and Christy Herron",
    image: "/demo/images/book-mtbe.jpg",
    description:
      "One of the first books written about MTBE, providing a historic view from 2001. Examines MTBE as a technical solution designed to reduce air emissions from vehicles, and focuses on health effects from contaminated water. Covers physical and chemical properties, toxicity, transport and fate in the environment, detection and treatment in soil and groundwater, and environmental policy.",
  },
];

export default function Books() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Books by Clearwater Principal
        </h1>
        <p className="text-gray-600 mb-12">
          Clearwater Group Principal Geologist James A. Jacobs served as project
          manager, designer, co-editor and co-author of the following technical
          books.
        </p>

        <div className="space-y-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="rounded-lg border border-gray-200 p-6 flex flex-col sm:flex-row gap-6 hover:border-teal-200 hover:shadow-sm transition-all"
            >
              <img
                src={book.image}
                alt={`${book.title} book cover`}
                className="w-28 h-36 object-cover rounded shadow flex-shrink-0"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-900">
                  {book.title}
                </h2>
                <p className="text-sm text-teal-700 mt-1">
                  {book.publisher} &middot; {book.pages} pages
                </p>
                <p className="text-sm text-gray-500 mt-1 mb-3">
                  By {book.authors}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {book.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Research Focus */}
        <section className="mt-12 rounded-lg bg-gray-50 p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Research Focus Areas
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Books and articles reflect a focus on exposure pathway analysis,
            sensitive receptors, contaminants in the environment, and the
            assessment and remediation of volatile toxins. The research relates
            to evaluating potentially toxic vapors migrating through
            sewer/plumbing systems into indoor air. Many of the volatile
            contaminants include petroleum hydrocarbons (crude oil, gasoline,
            methane, BTEX, MTBE) and chlorinated solvents (PCE, TCE, and DCA).
          </p>
        </section>
      </div>
    </div>
  );
}
