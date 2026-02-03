"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Star,
  Users,
  TrendingUp,
  Heart,
  Shield,
  MessageCircle,
  Home
} from "lucide-react";

const AboutPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const credentialsRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const storyInView = useInView(storyRef, { once: true, amount: 0.3 });
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.2 });
  const credentialsInView = useInView(credentialsRef, { once: true, amount: 0.3 });

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Your goals and concerns always come first. I listen before I advise, and I'm here to support you every step of the way."
    },
    {
      icon: TrendingUp,
      title: "Data-Driven Decisions",
      description: "I combine local market knowledge with data analytics to help you make informed decisions — no guesswork, just smart choices."
    },
    {
      icon: MessageCircle,
      title: "Clear Communication",
      description: "Real estate can be complex. I break down every step in plain language and keep you updated throughout the process."
    },
    {
      icon: Shield,
      title: "Honest & Transparent",
      description: "I believe in building trust through honesty. You'll always get my straightforward opinion, even if it's not what you want to hear."
    }
  ];

  const credentials = [
    { label: "Years Experience", value: "15+", icon: Star },
    { label: "Languages", value: "3", icon: MessageCircle },
    { label: "Google Rating", value: "5★", icon: Star },
    { label: "RE/MAX Nova", value: "Agent", icon: Home }
  ];

  return (
    <main className="w-screen bg-[#0f0f0f] overflow-x-hidden">
      <Navbar excludedLink="About" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[70vh] flex items-center pt-24 pb-16"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]" />

        <div className="relative z-10 max-w-[1200px] mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                About Me
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Meet <span className="gradient-text-accent">Nader Omar</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your dedicated real estate partner in Fall River, Waverley, and Wellington, Nova Scotia.
              </p>

              {/* Quick facts */}
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>Fall River, NS</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Users className="w-4 h-4 text-cyan-400" />
                  <span>RE/MAX Nova</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#contact">
                  <button className="bg-cyan-500 text-white font-semibold px-6 py-3 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg flex items-center gap-2 group">
                    Get in Touch
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <a href="tel:+17823213393">
                  <button className="bg-white/10 text-white font-semibold px-6 py-3 rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2">
                    <Phone size={18} />
                    (782) 321-3393
                  </button>
                </a>
              </div>
            </motion.div>

            {/* Right: Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={heroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/30 to-cyan-600/10 rounded-3xl blur-2xl" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-cyan-500/20 rounded-full blur-xl" />

                {/* Main image */}
                <div className="relative w-[300px] h-[400px] md:w-[350px] md:h-[450px] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10">
                  <Image
                    src="/nader-82.jpg"
                    alt="Nader Omar - Fall River Real Estate Agent"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>

                {/* Floating credential badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-2xl p-4"
                >
                  <Image
                    src="/remax-nova-flag.webp"
                    alt="RE/MAX Nova"
                    width={80}
                    height={40}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        ref={storyRef}
        className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]"
      >
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              My Story
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why I Do What I Do
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={storyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              I was born and raised in Egypt, where I first developed a love for connecting with people from all walks of life. I went on to study tourism in Montreal, spent a year working in Dubai, and eventually made my way to Halifax in 2015 — where I found the community I&apos;d been looking for.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              With a Bachelor&apos;s degree in tourism and over 15 years of experience in customer service, I learned that the key to any great experience is <strong className="text-white">listening first</strong>. That&apos;s the foundation of how I work in real estate — I don&apos;t guess, I analyze. Every recommendation I make is backed by market data, comparable sales, and a deep understanding of the local landscape.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I chose Fall River for my own family — my wife and our two boys — because of the lakes, the trails, and the genuine warmth of the community. When I&apos;m not helping clients, you&apos;ll find me exploring the trails, riding my motorcycle, or out on my 4-wheeler. I also own rental properties in both Nova Scotia and Egypt, so I understand real estate from every angle.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Being fluent in English, French, and Arabic gives me a unique edge — I connect with a wider range of clients, bring cultural sensitivity to every transaction, and ensure nothing gets lost in translation during one of life&apos;s biggest decisions. Whether you&apos;re buying your first home or making your next investment, I&apos;m here to make the process clear, confident, and personal.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        ref={valuesRef}
        className="py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={valuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              My Approach
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How I Work With Clients
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These are the principles that guide every interaction and transaction.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/30 transition-colors">
                    <value.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Credentials Section */}
      <motion.section
        ref={credentialsRef}
        className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              Credentials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Experience You Can Trust
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-cyan-500/10 via-cyan-500/5 to-cyan-500/10 rounded-2xl border border-white/10 py-8 px-4"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {credentials.map((cred, index) => (
                <div key={index} className="flex flex-col items-center text-center px-4 py-4">
                  <cred.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <span className="text-3xl md:text-4xl font-bold text-white">{cred.value}</span>
                  <p className="mt-1 text-gray-400 text-sm">{cred.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages highlight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-gray-400 mb-4">I communicate fluently in</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                🇬🇧 English
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                🇫🇷 Français
              </span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                🇸🇦 العربية
              </span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-[#0f0f0f]">
        <div className="max-w-[800px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 rounded-2xl p-8 md:p-12 border border-cyan-500/20 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
              Whether you&apos;re buying your first home or looking for your next investment, I&apos;m here to help make it happen.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href="tel:+17823213393" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                <Phone className="w-5 h-5" />
                <span className="font-medium">(782) 321-3393</span>
              </a>
              <a href="mailto:naderomar@remax.ca" className="flex items-center gap-2 text-white hover:text-cyan-400 transition-colors">
                <Mail className="w-5 h-5" />
                <span className="font-medium">naderomar@remax.ca</span>
              </a>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/free-market-evaluation">
                <button className="bg-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg flex items-center gap-2 group">
                  Get Free Market Evaluation
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/buy-home-fall-river">
                <button className="bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20">
                  View My Process
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;
