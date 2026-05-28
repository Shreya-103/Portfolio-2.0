import './contactform.module';
const ContactSection = () => {
  return (
    <section className="bg-[#f8fafc] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 rounded-3xl overflow-hidden border border-gray-200 shadow-2xl bg-white">

        {/* Left Side */}
        <div className="relative p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-gray-200 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100">

          {/* Soft Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.12),transparent_70%)]"></div>

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

          <div className="relative z-10">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get in touch
            </h2>

            <p className="text-gray-600 leading-8 max-w-md mb-12">
              Proin volutpat consequat porttitor cras nullam gravida at.
              Orci molestie a eu arcu. Sed ut tincidunt integer elementum
              id sem. Arcu sed malesuada et magna.
            </p>

            <div className="space-y-8 text-gray-700">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">🏢</div>
                <div>
                  <p>545 Mavis Island</p>
                  <p>Chicago, IL 99191</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="text-2xl">📞</div>
                <p>+1 (555) 234-5678</p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-2xl">✉️</div>
                <p>hello@example.com</p>
              </div>

            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-10 md:p-16 bg-white">
          <form className="space-y-8">

            {/* Name Fields */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  First name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Last name
                </label>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Phone number
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-800 mb-2">
                Message
              </label>
              <textarea
                rows="5"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-900 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
              ></textarea>
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
              >
                Send message
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;