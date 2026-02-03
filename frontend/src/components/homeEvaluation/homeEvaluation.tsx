"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import nader from "../../../public/nader.jpg";
import Image from "next/image";
import Link from "next/link";
import { Phone, Send, Home, MapPin } from "lucide-react";

const HomeEvaluation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const fields = [
    { name: "firstName", type: "text", placeholder: "First Name", required: true },
    { name: "lastName", type: "text", placeholder: "Last Name", required: false },
    { name: "email", type: "email", placeholder: "Email Address", required: true },
    { name: "telephone", type: "text", placeholder: "Phone Number", required: true },
    {
      name: "bestTime",
      type: "select",
      placeholder: "Best time to call",
      label: "Preferred Contact Time",
      options: ["Select time...", "Anytime", "Morning", "Afternoon", "Evening"],
      required: false,
    },
    { name: "address1", type: "text", placeholder: "Property Address", required: true },
    { name: "city", type: "text", placeholder: "City", required: true },
    { name: "province", type: "text", placeholder: "Province", required: true },
    { name: "postalCode", type: "text", placeholder: "Postal Code", required: true },
    {
      name: "homeType",
      type: "select",
      placeholder: "Type of home",
      label: "Property Type",
      options: ["Select type...", "Single Family Home", "Condo", "Townhouse", "Duplex", "Other"],
      required: false,
    },
  ];

  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce(
      (acc, f) => ({
        ...acc,
        [f.name]: f.type === "select" && f.options ? f.options[0] : "",
      }),
      {}
    )
  );
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.post("/api/sendEvaluation", formData);
      setSuccess("Request submitted! I'll be in touch soon.");
      setFormData(
        fields.reduce(
          (acc, f) => ({
            ...acc,
            [f.name]: f.type === "select" && f.options ? f.options[0] : "",
          }),
          {}
        )
      );
      setError(null);
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setSuccess(null);
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canSubmit =
    formData.firstName && formData.email && formData.telephone && formData.address1 && formData.city;

  return (
    <motion.section
      id="home-evaluation"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full min-h-screen pt-24 pb-16 px-4"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-cyan-500/10 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
            Thinking of Selling?
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Free <span className="gradient-text-accent">Market Evaluation</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Find out what your home is really worth with a personalized, data-driven assessment.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Agent Card */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 mb-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shrink-0">
                  <Image src={nader} alt="Nader Omar" fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Nader Omar</h3>
                  <p className="text-cyan-400 font-medium text-sm">RE/MAX Nova Agent</p>
                  <p className="text-gray-400 text-sm">Fall River Specialist</p>
                </div>
              </div>

              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
                <p>
                  I know it&apos;s impossible to provide a reliable and honest market evaluation over the
                  phone or internet — that&apos;s why I don&apos;t.
                </p>
                <p>
                  Fair and honest evaluations take time, research, and a close look at your home. When
                  you contact me, you&apos;ll receive accurate information based on recent market activity{" "}
                  <em>and</em> your home&apos;s unique characteristics.
                </p>
              </div>
            </div>

            {/* Contact Options */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Prefer to talk directly?</h3>
              <a
                href="tel:+17823213393"
                className="flex items-center gap-4 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-cyan-500 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    (782) 321-3393
                  </p>
                  <p className="text-gray-400 text-sm">Call or text anytime</p>
                </div>
              </a>
            </div>

            {/* Features */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <Home className="w-6 h-6 text-cyan-400 mb-2" />
                <p className="text-white font-medium text-sm">In-Person Visit</p>
                <p className="text-gray-500 text-xs">I&apos;ll tour your home personally</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <MapPin className="w-6 h-6 text-cyan-400 mb-2" />
                <p className="text-white font-medium text-sm">Local Expertise</p>
                <p className="text-gray-500 text-xs">Fall River market specialist</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">Request Your Free Evaluation</h3>
              <p className="text-gray-500 text-sm mb-6">
                Fill out the form below and I&apos;ll contact you to arrange a visit.
              </p>

              {/* Personal Info Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Your first name"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Your last name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Contact Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
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
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="(000) 000-0000"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Best Time */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Best Time to Contact
                </label>
                <select
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                >
                  {fields
                    .find((f) => f.name === "bestTime")
                    ?.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>

              {/* Property Address */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Property Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  placeholder="Street address of property to evaluate"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                />
              </div>

              {/* City, Province, Postal */}
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="City"
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Province</label>
                  <input
                    type="text"
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    placeholder="NS"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Postal</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="B2T"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Property Type */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Property Type</label>
                <select
                  name="homeType"
                  value={formData.homeType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-gray-50 text-gray-900 focus:outline-none focus:border-cyan-500 focus:bg-white transition-all"
                >
                  {fields
                    .find((f) => f.name === "homeType")
                    ?.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                </select>
              </div>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 mb-4">
                By submitting, I agree to be contacted by Nader Omar via call, email, and text. Reply
                &apos;stop&apos; to opt out.{" "}
                <Link href="/privacy" className="text-cyan-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>

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
                  "Submitting..."
                ) : (
                  <>
                    Request Evaluation
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {error && <p className="text-red-500 mt-4 text-sm text-center">{error}</p>}
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

export default HomeEvaluation;
