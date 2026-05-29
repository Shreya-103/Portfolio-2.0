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

          <div className="relative z-10 p-2">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get in touch
            </h2>

            <p className="text-gray-600 leading-8 max-w-md mb-12">
             Have a project in mind, or internships, freelance work or any other opportunity,
              Feel free to reach out. Let's connect.
            </p>

            <div className="space-y-8 text-gray-700">

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="text-2xl">🔗</div>
                <div>
                  <p> Github Account:-  <a href="https://github.com/Shreya-103"> Shreya-103</a></p>
                  <p>📍 India</p>
                </div>
              </div>


              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="text-2xl">✉️</div>
                <a href='mailto:shreyaalpha1@gmail.com'>send mail to Shreya</a>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;