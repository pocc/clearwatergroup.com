import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("https://formsubmit.co/ajax/oj@clearwatergroup.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _subject: `Contact form: ${data.name}`, _replyto: data.email }),
      });
      const result = ((await res.json()) as { success: string });
      if (result.success !== "true") throw new Error("Failed to send");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="mt-1">
                  <a
                    href="mailto:oj@clearwatergroup.com"
                    className="text-teal-700 hover:underline"
                  >
                    oj@clearwatergroup.com
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

            {status === "sent" ? (
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
                {status === "error" && (
                  <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    Something went wrong. Please try calling us at{" "}
                    <a
                      href="tel:510-307-9943"
                      className="font-semibold underline"
                    >
                      510-307-9943
                    </a>{" "}
                    or emailing{" "}
                    <a
                      href="mailto:oj@clearwatergroup.com"
                      className="font-semibold underline"
                    >
                      oj@clearwatergroup.com
                    </a>
                    .
                  </div>
                )}
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
                    disabled={status === "sending"}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none disabled:opacity-50"
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
                    disabled={status === "sending"}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none disabled:opacity-50"
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
                    disabled={status === "sending"}
                    className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 focus:outline-none resize-y disabled:opacity-50"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="rounded-md bg-teal-700 px-6 py-2.5 text-sm font-semibold text-white hover:bg-teal-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
