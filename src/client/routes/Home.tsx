import { Link } from "react-router";

const stats = [
  { label: "Years Experience", value: "35+" },
  { label: "Projects Completed", value: "1,000+" },
  { label: "Technical Books", value: "5" },
  { label: "States Licensed", value: "9" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-slate-800 text-white py-20 overflow-hidden">
        <img
          src="/demo/images/hero-golden-gate.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="inline-block rounded-full bg-teal-700 px-4 py-1 text-xs font-medium uppercase tracking-wider mb-6">
            Since 1990
          </span>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Clearwater Group
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Expertise in Environmental, Resource, and Sustainability Consulting.
          </p>
          <Link
            to="/contact"
            className="mt-8 inline-block rounded-md bg-teal-700 px-8 py-3 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-gray-200">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
            {stats.map((stat) => (
              <div key={stat.label} className="py-6 text-center">
                <p className="text-2xl font-bold text-teal-700">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg border border-gray-200 p-6 hover:border-teal-200 hover:shadow-sm transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Site-Specific Challenges
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Every engineering and environmental project has site-specific
                challenges to identify. Understanding the unique conditions of
                each site is the foundation of effective environmental
                consulting.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 hover:border-teal-200 hover:shadow-sm transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Expert Assessment
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert consulting requires accurate project assessment and
                understanding of underlying risks. Our team brings decades of
                experience and specialized credentials to every engagement.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 p-6 hover:border-teal-200 hover:shadow-sm transition-all">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Cooperative Outcomes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Successful outcomes require technical understanding and
                cooperation among all stakeholders. We work collaboratively with
                clients, regulators, and communities to achieve lasting results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Image */}
      <section className="py-0">
        <img
          src="/demo/images/nature-canoe.jpg"
          alt="Pristine lake surrounded by forest — representing environmental stewardship"
          className="w-full h-64 md:h-80 object-cover"
        />
      </section>

      {/* CTA Banner */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Ready to discuss your project?
          </h2>
          <p className="mt-3 text-gray-600">
            Call us at{" "}
            <a
              href="tel:510-307-9943"
              className="text-teal-700 font-semibold hover:underline"
            >
              510-307-9943
            </a>{" "}
            or{" "}
            <Link
              to="/contact"
              className="text-teal-700 font-semibold hover:underline"
            >
              send us a message
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
