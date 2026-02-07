export default function Team() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Our Team</h1>

        {/* Management */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Management
          </h2>
          <div className="mb-8">
            <img
              src="/demo/images/olivia-james-jacobs.jpg"
              alt="Olivia and James Jacobs, co-founders of Clearwater Group"
              className="w-full max-w-md rounded-lg shadow-sm"
            />
            <p className="text-sm text-gray-500 mt-2">
              Olivia and James Jacobs, co-founders
            </p>
          </div>
          <div className="space-y-8">
            {/* Olivia Jacobs */}
            <div className="rounded-lg border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-gray-900">
                Olivia P. Jacobs, C.E.M.
              </h3>
              <p className="text-teal-700 text-sm font-medium mt-1 mb-4">
                Co-founder &amp; President, Principal Environmental Manager
              </p>
              <div className="text-sm text-gray-600 space-y-3 leading-relaxed">
                <p>
                  Olivia P. Jacobs is the co-founder and President and Principal
                  Environmental Manager of the corporation. She has worked at
                  Clearwater since 1990, in environmental due diligence, Phase I
                  Environmental Assessments and oversight of all company work.
                  She is an expert in industrial history research and evaluation.
                </p>
                <p>
                  Ms. Jacobs is a Certified Environmental Manager in Nevada and
                  a California Department of Public Health-certified lead
                  inspector assessor. Ms. Jacobs is a co-founder and the
                  majority owner of the firm. She worked at Waste Water
                  International in the early 1980s on contracts to CH2MHill for
                  smoke testing and evaluating sewer systems for leaks in Los
                  Angeles, Piedmont and other California cities.
                </p>
                <p>
                  She has a bachelor&apos;s degree in The Great Books Program
                  from Saint John&apos;s College in Annapolis, Maryland, a
                  master&apos;s degree in health care administration from Texas
                  Women&apos;s University in Houston, Texas and almost three
                  decades of experience. She is a Thomas J. Watson Fellow; the
                  fellowship project was &ldquo;waste use and biogas&rdquo; in
                  six countries.
                </p>
              </div>
            </div>

            {/* James Jacobs */}
            <div className="rounded-lg border border-gray-200 p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <img
                  src="/demo/images/jim-jacobs.png"
                  alt="James A. Jacobs, Ph.D., Principal Geologist"
                  className="w-32 h-40 object-cover rounded-lg flex-shrink-0"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    James A. Jacobs, Ph.D., P.G., C.H.G., C.P.G., C.Pet.G., FGS
                  </h3>
                  <p className="text-teal-700 text-sm font-medium mt-1">
                    Principal Geologist | ToR QSP/QSD, ToR QISP
                  </p>
                  <p className="text-gray-500 text-xs mt-1 mb-4">
                    <a
                      href="/team/JJ_CV_230219.pdf"
                      className="text-teal-700 hover:underline"
                    >
                      View CV (PDF)
                    </a>
                  </p>
                </div>
              </div>
              <div className="text-sm text-gray-600 space-y-3 leading-relaxed mt-4">
                <p>
                  James A. Jacobs is Principal Geologist for the company and has
                  been with the firm since 1990. He has over 4 decades of
                  environmental and resource geology experience. He is a
                  certified hydrogeologist in California and Washington and a
                  Professional Geologist in California and eight other states.
                </p>
                <p>
                  He has written over 100 technical articles and co-authored five
                  technical books on subjects ranging from MTBE, Chromium
                  [Cr(VI)], acid mine drainage, oil spills and gas leaks, and
                  environmental considerations of hydraulic fracturing. His focus
                  has been related to coastal hydrogeology, sea level rise, and
                  in-situ remediation of soil and groundwater impacted by
                  hydrocarbons, solvents and metals.
                </p>
                <p>
                  Honors include four Fulbright Senior Specialist appointments, a
                  NOAA California Sea Grant Fellowship and California Ocean
                  Protection Council Fellowship. He is a Fellow with the
                  Geological Society of London and the National Ground Water
                  Association. He also served as a U.S. State Department Virtual
                  Fellow, advising on solar energy and sustainability for Cabo
                  Verde.
                </p>
                <p>
                  Led complex remediation projects and taught graduate-level
                  courses in the U.S., India, Israel, Germany, and Jamaica.
                  Served as an expert witness providing court testimony in 23
                  cases involving groundwater contamination, remediation
                  practices, and environmental contracting disputes.
                </p>
                <p>
                  From 2003 to 2026, Dr. Jacobs has been a publicly elected
                  commissioner of a local wastewater treatment plant, with an
                  annual budget of $14 million USD and recent capital improvement
                  projects of $36 million USD, and a director of a community
                  services district (sewage collection, refuse/recycling, and
                  park and recreation services) with an annual budget of $11
                  million USD and recent capital improvement projects of over $19
                  million USD.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Senior Technical Staff */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Senior Technical Staff
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Baker */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Stephen J. Baker, P.G., C.H.G.
              </h3>
              <p className="text-teal-700 text-xs font-medium mt-1 mb-3">
                Senior Geologist
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Has worked in environmental pollution liabilities affecting real
                estate since 1986. In 1987, became a member of a special task
                force for the Federal Home Loan Bank Board, designing due
                diligence standards for the lending industry. Graduated from Ohio
                State University with a degree in geology.
              </p>
            </div>

            {/* Nelson */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">
                Rob Nelson, P.G., C.E.G.
              </h3>
              <p className="text-teal-700 text-xs font-medium mt-1 mb-3">
                Senior Geologist &amp; Project Manager
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                A California Professional Geologist and Certified Engineering
                Geologist with over 40 years of experience in engineering
                geology, environmental assessment and remedial projects. Has
                experience in oil exploration, geotechnical evaluations, and
                water development. Graduated from Humboldt State University with
                a degree in geology.
              </p>
            </div>

            {/* Pope */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Kevin Pope</h3>
              <p className="text-teal-700 text-xs font-medium mt-1 mb-3">
                Senior Field Manager
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Has been designing and implementing field services for over two
                decades. Expert in direct push technology (DPT) sampling for
                soil, groundwater and soil vapor and operates the Clearwater
                Geoprobe sampling rig. Associate&apos;s degree in forestry from
                Lassen College and bachelor&apos;s degree in industrial
                technology from Fresno State.
              </p>
            </div>

            {/* Wilder */}
            <div className="rounded-lg border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900">Arron Wilder</h3>
              <p className="text-teal-700 text-xs font-medium mt-1 mb-3">
                Senior Soil Scientist
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Over two decades of soil assessment and remediation experience.
                Involved with underground storage tank removals, excavation
                projects, bioremediation feasibility studies and Phase I
                Environmental Assessments. Degree in soil science from Humboldt
                State University; completing a master&apos;s degree in soil and
                rangeland resource science.
              </p>
            </div>
          </div>
        </section>

        {/* Support Staff */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Support Staff
          </h2>
          <div className="rounded-lg border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-900">Hermy Tam</h3>
            <p className="text-teal-700 text-xs font-medium mt-1 mb-3">
              Administrative Assistant
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Helps Project Managers expedite the issuing of reports and the
              copy, bind and send operations for reports and letters. Training in
              business management and accounting from Themas Valley University in
              Hong Kong, and health care administration certificate from San
              Francisco City College.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
