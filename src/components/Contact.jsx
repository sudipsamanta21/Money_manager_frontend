import { Mail, Phone, MapPin } from "lucide-react";
import {useState} from "react";

const Contact = () =>{
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>{
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contact" className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Get in touch
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Questions about your account, billing, or a partnership idea? Send us a
            message and our team will get back to you within a day.
          </p>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-100 grid place-items-center">
                <Mail size={17} className="text-violet-600" />
              </div>
              <span className="text-sm text-gray-700">support@moneymanager.app</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-100 grid place-items-center">
                <Phone size={17} className="text-violet-600" />
              </div>
              <span className="text-sm text-gray-700">+91 8944842261</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-100 grid place-items-center">
                <MapPin size={17} className="text-violet-600" />
              </div>
              <span className="text-sm text-gray-700">Medinipur, West Bengal, India</span>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col gap-4"
        >
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={4}
              placeholder="How can we help?"
              className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
            />
          </div>
          <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white rounded-lg px-5 py-3 text-sm font-semibold transition-colors"
          >
            Send Message
          </button>
          {sent && (
            <p className="text-xs text-emerald-700 font-medium">
              Thanks — your message has been sent.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
export default Contact;