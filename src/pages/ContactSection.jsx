import { SectionTitle } from "../components/SectionTitle";
import { ContactCard } from "../components/ContactCard";
import {
    FaGithub,
    FaLinkedinIn,
    FaXTwitter,
} from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
export function ContactSection() {
    return (
        <section
            id="contact"
            className="
        py-12 sm:py-16 lg:py-20
        px-4 sm:px-6 lg:px-8
        scroll-mt-10
      "
        >
            <div className="max-w-6xl mx-auto">

                {/* Section heading */}
                <SectionTitle
                    title="Let’s Connect"
                    subtitle="I'm just one message away"
                />

                {/* Top cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">

                    {/* Reach Out */}
                    <ContactCard title="Reach Out">
                        <p className="text-sm sm:text-base text-gray-700">
                            Email: sjaiharinataraj [@] gmail [dot] com
                            {/* <a
                                href=""
                                className="text-black font-medium hover:underline"
                            >
                                sjaiharinataraj [@] gmail [dot] com
                            </a> */}
                        </p>
                    </ContactCard>

                    {/* Social */}
                    <ContactCard title="Social">
                        {/* Social icons */}
                        <div className="flex items-start gap-4 text-gray-600">
                            <a
                                href="https://github.com/jaiharinataraj"
                                target="_blank"
                                className="flex flex-col items-center gap-1 pt-0.5 hover:text-black transition"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-3xl" />
                            </a>
                            <a
                                href="https://linkedin.com/in/jaiharinataraj/"
                                target="_blank"
                                className="flex flex-col items-center gap-1 hover:text-black transition"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-3xl" />
                                <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                    </span>
                                    Active
                                </span>
                            </a>
                            <a
                                href="https://x.com/jaiharinataraj"
                                target="_blank"
                                className="flex flex-col items-center gap-1 hover:text-black transition"
                                aria-label="X"
                            >
                                <FaXTwitter className="text-3xl" />
                                <span className="flex items-center gap-1 text-[11px] font-medium text-gray-500">
                                    <span className="relative flex h-1.5 w-1.5">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500"></span>
                                    </span>
                                    Active
                                </span>
                            </a>
                            {/* <a
                              href="https://jaiharinataraj.substack.com/"
                              target="_blank"
                              className="flex flex-col items-center gap-1 hover:text-black transition"
                              aria-label="Substack"
                            >
                             <SiSubstack className="text-xl" />
                            </a> */}

                        </div>
                    </ContactCard>


                </div>

                {/* Message form */}
               <ContactCard title="Message">
                    <form
                        action="https://api.web3forms.com/submit"
                        method="POST"
                        className="flex flex-col gap-4"
                    >
                        {/* 🔑 Web3Forms Access Key */}
                        <input
                            type="hidden"
                            name="access_key"
                            value="43f8ee79-e6d0-43b2-a0d9-245a0546b9e1"
                        />

                        <input type="hidden" name="subject" value="New message from DS Portfolio" />
                        {/* Name + Email */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <input
                                type="text" id="name"
                                name="from_name"
                                placeholder="Name"
                                required
                                className="w-full rounded-xl border border-gray-300
                   px-4 py-3 text-sm sm:text-base
                   focus:outline-none focus:border-gray-500"
                            />

                            <input
                                type="email" id="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full rounded-xl border border-gray-300
                   px-4 py-3 text-sm sm:text-base
                   focus:outline-none focus:border-gray-500"
                            />
                        </div>

                        {/* Message */}
                        <textarea
                            name="message" id="message"
                            rows="9"
                            placeholder="Write your message"
                            required
                            className="w-full rounded-xl border border-gray-300
                 px-4 py-3 text-sm sm:text-base resize-y
                 focus:outline-none focus:border-gray-500"
                        />

                        {/* Optional: spam protection */}
                        <input type="checkbox" name="botcheck" className="hidden" />

                        {/* Send button */}
                        <button
                            type="submit"
                            className="w-fit mt-2
                 rounded-2xl
                 bg-black text-white border border-black
                 px-8 py-2.5
                 text-sm cursor-pointer
                 font-semibold shadow-sm backdrop-blur-md
                 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Send
                        </button>
                    </form>
                </ContactCard>
               
            </div>
        </section>
    );
}
