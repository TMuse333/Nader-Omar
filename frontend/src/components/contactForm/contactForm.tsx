"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import Image from "next/image";
import { Check, Phone, Mail, MapPin, Send } from "lucide-react";

interface ContactCloserProps {
  imageSrc: string;
  imageAlt: string;
  headline: string;
  paragraph: string;
  ctaText: string;
}

const intentOptions = ["Buy", "Sell", "Both", "Just Exploring"];

const ContactCloser: React.FC<ContactCloserProps> = ({
  imageSrc,
  imageAlt,
  paragraph,
  ctaText,
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    intent: [] as string[],
    timeline: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Nader-Omar-Remax-Nova-61566969102547/",
      icon: FacebookLogo,
      color: "bg-[#1877F2]",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nader_omar_realtor/",
      icon: InstagramLogo,
      gradient: "from-[#833AB4] via-[#FD1D1D] to-[#FCB045]",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/nader-omar-89407733b/",
      icon: LinkedinLogo,
      color: "bg-[#0A66C2]",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleIntentToggle = (option: string) => {
    setFormData((prev) => ({
      ...prev,
      intent: prev.intent.includes(option)
        ? prev.intent.filter((i) => i !== option)
        : [...prev.intent, option],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("https://www.naderomarrealtor.com/api/sendEmail", {
        ...formData,
        intention: formData.intent.join(", "),
      });
      setSuccess("Thanks! I'll be in touch soon.");
      setFormData({ name: "", email: "", phone: "", intent: [], timeline: "", message: "" });
      setError(null);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess(null);
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canSubmit = formData.name && formData.email && formData.phone && formData.intent.length > 0;

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Let&apos;s <span className="text-cyan-600">Connect</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            {paragraph}
          </p>
        </motion.div>

        {/* Main Grid - Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left Column - Agent Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 h-full">
              {/* Agent Card */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/20 shrink-0">
                  <Image src={imageSrc} alt={imageAlt} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Nader Omar</h3>
                  <p className="text-cyan-600 font-medium text-sm">RE/MAX Nova Agent</p>
                  <p className="text-gray-500 text-sm">Fall River Specialist</p>
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:+17823213393"
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
                    <p className="text-gray-900 font-semibold group-hover:text-cyan-600 transition-colors">
                      (782) 321-3393
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:naderomar@remax.ca"
                  className="flex items-center gap-4 p-3 rounded-xl bg-gray-50 hover:bg-cyan-50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="text-gray-900 font-semibold group-hover:text-cyan-600 transition-colors">
                      naderomar@remax.ca
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3 rounded-xl bg-gray-50">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="text-gray-900 font-semibold">Fall River, NS</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-gray-500 mb-3">Connect on social</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ name, href, icon: Icon, gradient, color }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className={`w-10 h-10 flex items-center justify-center rounded-lg ${
                        gradient ? `bg-gradient-to-r ${gradient}` : `${color}`
                      } hover:scale-110 transition-transform`}
                    >
                      <Icon size={20} color="#ffffff" weight="fill" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>

              {/* Name, Email, Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Intent Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  I&apos;m looking to... <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {intentOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleIntentToggle(option)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 font-medium text-sm transition-all ${
                        formData.intent.includes(option)
                          ? "bg-cyan-500 border-cyan-500 text-white"
                          : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300"
                      }`}
                    >
                      {formData.intent.includes(option) && <Check className="w-4 h-4" />}
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Timeline */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Timeline
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  placeholder="e.g., Within 3 months, 6+ months, just exploring"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about what you're looking for, your ideal neighborhood, budget, or any questions you have..."
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!canSubmit || isSubmitting}
                className={`w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-lg transition-all ${
                  canSubmit && !isSubmitting
                    ? "bg-cyan-500 text-white hover:bg-cyan-400 shadow-lg hover:shadow-xl"
                    : "bg-gray-200 text-gray-500 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    {ctaText}
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {error && (
                <p className="text-red-500 mt-4 text-sm text-center">{error}</p>
              )}
              {success && (
                <p className="text-green-600 mt-4 text-sm text-center font-medium">{success}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactCloser;
