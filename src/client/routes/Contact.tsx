import { useState, type FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-12">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <dl className="space-y-4 text-sm text-gray-600">
              <div>
                <dt className="font-medium text-gray-900">Address</dt>
                <dd className="mt-1">
                  229 Tewksbury Ave.
                  <br />
                  Point Richmond, CA 94801 USA
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Phone</dt>
                <dd className="mt-1">
                  <a
                    href="tel:510-307-9943"
                    className="text-teal-700 hover:underline"
                  >
                    510-307-9943
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Alternate</dt>
                <dd className="mt-1">
                  <a
                    href="tel:510-590-1099"
                    className="text-teal-700 hover:underline"
                  >
                    510-590-1099
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Fax</dt>
                <dd className="mt-1">510-232-2823</dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:info@clearwatergroup.com"
                    className="text-teal-700 hover:underline"
                  >
                    info@clearwatergroup.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="font-medium text-gray-900">Office Hours</dt>
                <dd className="mt-1">
                  Monday &ndash; Friday
                  <br />
                  9:00 AM &ndash; 5:00 PM
                </dd>
              </div>
            </dl>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Drop Us a Line
            </h2>

            {submitted ? (
              <div className="rounded-lg border border-teal-200 bg-teal-50 p-8 text-center">
                <p className="text-lg font-semibold text-teal-800">
                  Thank you!
                </p>
                <p className="mt-2 text-sm text-teal-700">
                  We&apos;ve received your message and will get back to you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-900 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none resize-y"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
