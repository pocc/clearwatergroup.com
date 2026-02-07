function Chevron() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

export default function FAQ() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {/* Second Opinions */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                Why Perform Second Opinion Technical Reviews?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 space-y-3 leading-relaxed">
              <p>
                Clearwater Group has provided technical review and second opinion
                on numerous projects and reports. The Clearwater Group Principals
                have served in a peer review capacity for several organizations.
              </p>
              <p>
                James Jacobs served from 2006 to 2011 on the Fulbright Peer
                Review Committee, screening potential Fulbright scholars in
                environmental sciences. From 2005 to 2010, he served on the
                National Screening Committee for the American Institute of
                Professional Geologists for candidates applying for the Certified
                Professional Geologist designation.
              </p>
              <p>
                Since 2005, he has been on the Advisory Board for the Association
                for Environmental Health and Sciences, reviewing abstracts
                submitted for the annual San Diego Soils, Sediments, and Water
                conference. In October 2011, Jacobs was selected by the CalEPA
                to perform a peer review for the University of California related
                to Cr(VI) &mdash; the 2007 PG&amp;E Hinkley, California
                Chromium Background Study Report, the site of the{" "}
                <em>Erin Brockovich</em> movie.
              </p>
              <p>
                Olivia Jacobs has provided technical review and second opinion
                analysis on a variety of environmental projects for public water
                resource reports, as well as for property owners whose land has
                been impacted by petroleum hydrocarbons or chlorinated solvents.
              </p>
            </div>
          </details>

          {/* Forensic Studies */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Are Forensic Studies?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 space-y-3 leading-relaxed">
              <p>
                Clearwater performs forensic studies to evaluate environmental,
                engineering, and construction incidents or events. In a forensic
                study, the incident (a spill, an accident, a catastrophic event)
                is the starting point, and the project looks to put the event in
                context, supported with consultant reports, laboratory data, and
                other normally obtained environmental information.
              </p>
              <p>
                In addition to depositions, regulatory files, interview
                transcripts, and historic photographs and maps, Clearwater also
                uses the physical and chemical characteristics of groundwater,
                surface water, soil, sediments, mineral ores, petroleum
                hydrocarbons and other compounds. These advanced techniques
                incorporate dozens of emerging analytical methods including
                Polymerase Chain Reaction (PCR), compound specific isotope
                chemistry analysis, enzyme activity probes, microbial analysis
                and identification, passive vapor organic compound sorber
                surveys, and historic aerial photographs.
              </p>
            </div>
          </details>

          {/* Cost Allocation */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Questions Are Answered During Cost Allocation Exercises?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 space-y-3 leading-relaxed">
              <p>
                For cost allocation of environmental and engineering cases,
                Clearwater evaluates whether past or future services reflect
                customary, reasonable and necessary tasks for the required scope
                of work. Questions include:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Is the scope of work appropriate, reasonable and necessary for
                  the goals of the project?
                </li>
                <li>
                  Were the same contaminants released and processes performed on
                  a property over time, or were there several distinct
                  contaminants from specific processes?
                </li>
                <li>
                  Were the cleanup costs appropriately divided among responsible
                  parties?
                </li>
                <li>
                  Were all the consulting and contracting companies properly
                  licensed?
                </li>
                <li>
                  Were all workers, operators, competent persons, and field
                  supervisors properly trained?
                </li>
                <li>
                  Are all reports correct and submitted on time to maintain
                  compliance?
                </li>
                <li>
                  Were there possible conflicts of interests, and were those
                  noted and disclosed?
                </li>
                <li>
                  Were contractors and subcontractors appropriately trained for
                  safety and hazmat work (40-hour OSHA, medical surveillance,
                  annual refreshers)?
                </li>
                <li>
                  Were all daily field tasks fully documented in writing, with
                  photographs and logs?
                </li>
                <li>Do time sheets match billing tickets and invoices?</li>
                <li>Was overtime pay paid properly according to state law?</li>
                <li>
                  Do subcontractors have appropriate health and safety
                  paperwork?
                </li>
                <li>
                  Does the timeline of field and office tasks match the invoices?
                </li>
                <li>Were the tasks performed in a professional manner?</li>
                <li>How close were the as-builts to the actual plans?</li>
                <li>Were the change orders justified?</li>
              </ul>
            </div>
          </details>

          {/* Workshops */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Classes and Workshops Are Offered?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 space-y-4 leading-relaxed">
              <ol className="list-decimal pl-5 space-y-3">
                <li>
                  <strong>
                    Cost Allocation of Environmental Remediation and Mitigation
                    Measures
                  </strong>{" "}
                  &mdash; 2-Day Class. Topics include equitable cost allocation
                  of past and future costs for cleanup, environmental valuation,
                  and determination of financial responsibility using forensic
                  evidence.
                </li>
                <li>
                  <strong>
                    Environmental Aspects of Oil Spills and Gas Leaks
                  </strong>{" "}
                  &mdash; 2-Day Class. Based on the McGraw-Hill book,{" "}
                  <em>Oil Spills and Gas Leaks</em>, by Testa and Jacobs, 2014.
                </li>
                <li>
                  <strong>
                    Recycling Oil Field Wastes, Bioremediation, and Soil
                    Recycling
                  </strong>{" "}
                  &mdash; 2-Day Class. Covers cold mix asphalt processing and
                  innovative water treatments. Based on selected chapters from{" "}
                  <em>Acid Mine Drainage, Rock Drainage, and Acid Sulfate Soils</em>{" "}
                  and <em>Oil Spills and Gas Leaks</em>.
                </li>
                <li>
                  <strong>
                    Environmental Aspects of Hydraulic Fracturing Operations
                  </strong>{" "}
                  &mdash; 2-Day Class. Based on the Wiley book on hydraulic
                  fracturing by Jacobs and Testa.
                </li>
                <li>
                  <strong>
                    Mitigation of Acid Mine Drainage During Mining and Land
                    Development
                  </strong>{" "}
                  &mdash; 2-Day Class. Covers restoration of abandoned mine
                  sites and planning for current or future mining areas.
                </li>
                <li>
                  <strong>
                    Environmental Management System (EMS) for Oil and Gas
                  </strong>{" "}
                  &mdash; 5-Day Class. Focuses on software tools, techniques and
                  management systems, including policy development,
                  environmental reviews, waste management, energy efficiency, and
                  pollution control.
                </li>
                <li>
                  <strong>Assessing VOC Migration Pathways</strong> &mdash;
                  2-Day Class. Testing new vapor intrusion site conceptual models
                  and practical VOC sampling methods.
                </li>
                <li>
                  <strong>QSD/QSP Stormwater Training</strong> &mdash; 1-Day
                  Class. Required by the California State Water Resources Control
                  Board, implemented through Trainers of Record (ToR) certified
                  by CASQA.
                </li>
                <li>
                  <strong>QISP Stormwater Industrial Training</strong> &mdash;
                  1-Day Class. Qualified Industrial Stormwater Practitioner
                  certification.
                </li>
              </ol>
            </div>
          </details>

          {/* Graduate Courses */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                Graduate and University Courses Taught
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Clearwater Group Principal Geologist James A. Jacobs designed and
                taught 7 to 20 day duration graduate-level courses at
                universities in Jamaica, India, Germany, and Israel. Courses
                covered topics in environmental geology, hydrogeology, and
                remediation technologies.
              </p>
            </div>
          </details>

          {/* Phase I */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Is a Phase I Environmental Site Assessment?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                A Phase I Environmental Site Assessment (ESA) is a report
                prepared for real estate transactions that identifies potential
                or existing environmental contamination liabilities. It involves
                reviewing historical records, regulatory databases, aerial
                photographs, fire insurance maps, and conducting site
                reconnaissance to evaluate current and past uses of the
                property.
              </p>
            </div>
          </details>

          {/* Phase II */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Is a Phase II Investigation?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                A Phase II Environmental Site Assessment involves collecting
                samples of soil, groundwater, and/or soil vapor to confirm or
                rule out the presence of contamination identified as a potential
                concern in the Phase I assessment. Sampling methods, laboratory
                analysis, and data evaluation determine whether further
                remediation is needed.
              </p>
            </div>
          </details>

          {/* Sewer Air Testing */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Is Sewer Air Testing?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Sewer air testing evaluates the potential for volatile organic
                compounds (VOCs) to migrate through sewer and plumbing systems
                into indoor air. This vapor intrusion pathway assessment is
                critical for understanding contaminant exposure risks in
                buildings near known groundwater contamination plumes.
              </p>
            </div>
          </details>

          {/* Oil & Gas */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Oil &amp; Gas Services Are Offered?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Clearwater provides oil and gas services including lease
                valuation, field assessment, hydraulic fracturing environmental
                considerations, soil and groundwater remediation near production
                facilities, and expert witness testimony for oil and gas related
                litigation.
              </p>
            </div>
          </details>

          {/* Acid Mine Drainage */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Is Acid Mine Drainage?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Acid mine drainage (AMD) occurs when sulfide minerals exposed
                during mining operations react with water and air to produce
                sulfuric acid and dissolved metals. Clearwater provides AMD
                mitigation services including biogeochemical assessment,
                prediction, prevention, and remediation, as well as bioleaching
                for resource recovery from mining wastes.
              </p>
            </div>
          </details>

          {/* Proposition 218 */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Are Proposition 218 Rate Studies?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                Proposition 218, a California constitutional amendment, requires
                that fees for property-related services (such as water, sewer,
                and refuse) not exceed the proportional cost of service.
                Clearwater provides technical analysis and rate study support for
                public agencies managing water, wastewater, and stormwater
                infrastructure.
              </p>
            </div>
          </details>

          {/* Maher Process */}
          <details className="group rounded-lg border border-gray-200">
            <summary className="flex cursor-pointer items-center justify-between p-6">
              <h2 className="font-semibold text-gray-900">
                What Is the Maher Process in San Francisco?
              </h2>
              <Chevron />
            </summary>
            <div className="px-6 pb-6 text-sm text-gray-600 leading-relaxed">
              <p>
                The Maher Process is San Francisco&apos;s regulatory program for
                identifying and mitigating environmental contamination at
                development sites. Named after the Maher Ordinance, it requires
                environmental review of properties in designated areas before
                building permits are issued. Clearwater assists clients in
                navigating the Maher Process, including Phase I and Phase II
                assessments, remediation planning, and regulatory coordination
                with the San Francisco Department of Public Health.
              </p>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
