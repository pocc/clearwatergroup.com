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
          {/* Book 1 */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Environmental Considerations Associated with Hydraulic Fracturing
              Operations
            </h2>
            <p className="text-sm text-teal-700 mt-1">
              Wiley, 2019 &middot; 576 pages
            </p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              By James A. Jacobs and Stephen M. Testa
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The authors include an overview of the historical development of
              hydraulic fracturing and the technology currently employed. The book
              explores the risk, prevention, and mitigation factors associated
              with fracturing, along with legal cases, regulatory issues, and
              data on the cost of recovery. The volume presents audit checklists
              for gathering critical information and documentation to support the
              reliability of current environmental conditions related to fracking
              operations and their community impact.
            </p>
          </div>

          {/* Book 2 */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Oil Spills and Gas Leaks: Environmental Response, Prevention and
              Cost Recovery
            </h2>
            <p className="text-sm text-teal-700 mt-1">
              McGraw-Hill, 2014 &middot; 578 pages
            </p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              By Stephen M. Testa and James A. Jacobs
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Highlights the complex nature of assessment, exposure pathway
              analysis, and sensitive receptor evaluation related to oil spills
              and gas leaks. Covers sampling methods and remediation of petroleum
              hydrocarbons, oil spill and gas leak behavior, environmental impact
              mitigation, engineering techniques, long-term biological and
              environmental effects, and litigation and cost recovery.
            </p>
          </div>

          {/* Book 3 */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils
            </h2>
            <p className="text-sm text-teal-700 mt-1">
              Wiley, 2014 &middot; 520 pages
            </p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              By James A. Jacobs, Jay H. Lehr, and Stephen M. Testa
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Explores the biogeochemistry of acid mine drainage, rock drainage,
              and acid sulfate soils. Describes how to predict, prevent, and
              remediate the environmental impact of acid drainage and the
              oxidation of sulfides, offering sampling and analytical methods.
              Readers will discover new approaches for recovering valuable
              resources from acid mine drainage, including bioleaching. Jacobs
              co-authored 18 of the 36 chapters.
            </p>
          </div>

          {/* Book 4 */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Chromium(VI) Handbook
            </h2>
            <p className="text-sm text-teal-700 mt-1">
              CRC Press, 2004 &middot; 800 pages
            </p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              By Jacques Guertin, James A. Jacobs, and Cynthia P. Avakian
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The broad scope of this book fills the need for a comprehensive
              resource on hexavalent chromium. Features chapters on chromium
              sources, geology and geochemistry, toxicity, treatment,
              remediation, legal issues, and recommendations. Brought to the
              public&apos;s attention in the film{" "}
              <em>Erin Brockovich</em>, hexavalent chromium is a larger problem
              than once thought. Put together by a team of scientists, engineers,
              regulators, and lawyers.
            </p>
          </div>

          {/* Book 5 */}
          <div className="rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900">
              MTBE: Effects on Soil and Groundwater Resources
            </h2>
            <p className="text-sm text-teal-700 mt-1">
              CRC Press, 2001 &middot; 264 pages
            </p>
            <p className="text-sm text-gray-500 mt-1 mb-3">
              By James A. Jacobs, Jacques Guertin, and Christy Herron
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              One of the first books written about MTBE, providing a historic
              view from 2001. Examines MTBE as a technical solution designed to
              reduce air emissions from vehicles, and focuses on health effects
              from contaminated water. Covers physical and chemical properties,
              toxicity, transport and fate in the environment, detection and
              treatment in soil and groundwater, and environmental policy.
            </p>
          </div>
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
