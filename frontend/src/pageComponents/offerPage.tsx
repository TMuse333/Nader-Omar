"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import {
  Globe,
  FileText,
  Bot,
  Brain,
  ArrowRight,
  Calendar,
  Mail,
  Search,
  Database,
  Target,
  Zap,
  TrendingUp,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

const OfferPage = () => {
  const heroRef = useRef<HTMLElement>(null);
  const contextRef = useRef<HTMLElement>(null);
  const systemRef = useRef<HTMLElement>(null);
  const howItWorksRef = useRef<HTMLElement>(null);
  const knowledgeBankRef = useRef<HTMLElement>(null);
  const chatbotRef = useRef<HTMLElement>(null);
  const includedRef = useRef<HTMLElement>(null);
  const growthRef = useRef<HTMLElement>(null);
  const afterRef = useRef<HTMLElement>(null);
  const pricingRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLElement>(null);

  const heroInView = useInView(heroRef, { once: true, amount: 0.3 });
  const contextInView = useInView(contextRef, { once: true, amount: 0.3 });
  const systemInView = useInView(systemRef, { once: true, amount: 0.2 });
  const howItWorksInView = useInView(howItWorksRef, { once: true, amount: 0.2 });
  const knowledgeBankInView = useInView(knowledgeBankRef, { once: true, amount: 0.3 });
  const chatbotInView = useInView(chatbotRef, { once: true, amount: 0.3 });
  const includedInView = useInView(includedRef, { once: true, amount: 0.2 });
  const growthInView = useInView(growthRef, { once: true, amount: 0.3 });
  const afterInView = useInView(afterRef, { once: true, amount: 0.2 });
  const pricingInView = useInView(pricingRef, { once: true, amount: 0.3 });
  const ctaInView = useInView(ctaRef, { once: true, amount: 0.3 });

  // Form state
  const [wantsRedesign, setWantsRedesign] = useState(true);
  const [wantsAboutPage, setWantsAboutPage] = useState(true);
  const [wantsChatbot, setWantsChatbot] = useState(true);
  const [clientsAsk, setClientsAsk] = useState("");
  const [siteMissing, setSiteMissing] = useState("");
  const [whatMakesDifferent, setWhatMakesDifferent] = useState("");
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      await axios.post("/api/send-offer-response", {
        wantsRedesign,
        wantsAboutPage,
        wantsChatbot,
        clientsAsk,
        siteMissing,
        whatMakesDifferent,
      });
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  const steps = [
    {
      num: "1",
      icon: Globe,
      title: "Visitor Lands on Your Site",
      description:
        "Someone searches for a home in Fall River and finds your website — redesigned, fast, and professional.",
    },
    {
      num: "2",
      icon: Bot,
      title: "AI Engages Instantly",
      description:
        "Your chatbot greets them, answers their questions about listings, and sounds like you — because it learned from you.",
    },
    {
      num: "3",
      icon: Target,
      title: "Gathers Intel",
      description:
        "The AI captures their name, what they're looking for, their timeline, and their contact info — all in a natural conversation.",
    },
    {
      num: "4",
      icon: Mail,
      title: "Lead Ready for You",
      description:
        "You wake up to a qualified lead with full context. No missed calls, no lost opportunities.",
    },
  ];

  return (
    <main className="w-screen bg-[#0f0f0f] overflow-x-hidden">
      <Navbar excludedLink="Offer" />

      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative min-h-[60vh] flex items-center pt-24 pb-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#1a1a1a]" />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent" />

        <div className="relative z-10 max-w-[900px] mx-auto px-4 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
              A Personal Invitation
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              An Offer For You,{" "}
              <span className="gradient-text-accent">Nader</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-[650px] mx-auto">
              I&apos;ve learned how to do lead generation better — and I want to
              help you take advantage of it.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Context Section */}
      <motion.section
        ref={contextRef}
        className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]"
      >
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contextInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10 space-y-6"
          >
            <p className="text-gray-300 text-lg leading-relaxed">
              You were one of my first clients. When I built your original
              website, I was just getting started — and you took a chance on me.
              You already paid for work before this system even existed, and I
              haven&apos;t forgotten that.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Since then, I&apos;ve built a full lead generation system called{" "}
              <span className="text-white font-semibold">Agent Intel</span> — it
              combines a redesigned website, an AI chatbot trained on your
              knowledge, and an SEO content engine into one system that works
              together to capture leads 24/7.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              You&apos;ve actually already created your account in the system.
              You have a foot in the door — this offer is about activating
              everything and getting it working for you, at pricing that reflects
              what you mean to me as a client.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* The System Overview */}
      <motion.section
        ref={systemRef}
        className="py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={systemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              One System, Not Separate Products
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              The{" "}
              <span className="gradient-text-accent">Agent Intel</span>{" "}
              System
            </h2>
            <p className="text-gray-400 text-lg max-w-[650px] mx-auto">
              Everything is powered by one central knowledge bank — a database
              of your expertise, your listings, your personality. The chatbot,
              the website, and the SEO engine all draw from it.
            </p>
          </motion.div>

          {/* Knowledge Bank at center */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={systemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-500/15 to-purple-500/10 rounded-2xl p-6 border border-cyan-500/20 text-center mb-6"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <Database className="w-6 h-6 text-cyan-400" />
              <p className="text-white font-bold text-lg">Your Knowledge Bank</p>
            </div>
            <p className="text-gray-400 text-sm max-w-[500px] mx-auto">
              Your listings, your process, your FAQs, your personality — stored
              and searchable. This is what makes everything personal instead of
              generic.
            </p>
          </motion.div>

          {/* Three tools powered by it */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={systemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center"
            >
              <Bot className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">AI Chatbot</p>
              <p className="text-gray-500 text-sm">Captures & qualifies leads</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={systemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center"
            >
              <Globe className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">Redesigned Website</p>
              <p className="text-gray-500 text-sm">Your homebase for leads</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={systemInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10 text-center"
            >
              <Search className="w-6 h-6 text-cyan-400 mx-auto mb-3" />
              <p className="text-white font-semibold mb-1">SEO Generator</p>
              <p className="text-gray-500 text-sm">Drives traffic to your site</p>
            </motion.div>
          </div>

          {/* See the full system link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={systemInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-8"
          >
            <a
              href="https://agent-intel.focusflowsoftware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
            >
              See the full Agent Intel system
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.section>

      {/* How It Works */}
      <motion.section
        ref={howItWorksRef}
        className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              How It Works
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              From Visitor to Lead — Automatically
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-sm">
                      {step.num}
                    </div>
                    <step.icon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 text-gray-600">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Summary checks */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={howItWorksInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {["Works 24/7", "Sounds like you", "Your knowledge bank"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300 text-sm font-medium">
                    {item}
                  </span>
                </div>
              )
            )}
          </motion.div>
        </div>
      </motion.section>

      {/* Knowledge Bank Deep Dive */}
      <motion.section
        ref={knowledgeBankRef}
        className="py-20 bg-[#0f0f0f]"
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={knowledgeBankInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              The Differentiator
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              A Lead System That Actually{" "}
              <span className="gradient-text-accent">Sounds Like You</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-[600px] mx-auto">
              Most AI chatbots give generic answers. Yours won&apos;t — because
              it&apos;s powered by a knowledge bank built from everything that
              makes your business unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={knowledgeBankInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Leads Get Answers Instantly
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                No waiting for a callback. Your AI answers listing questions,
                explains your process, and books showings — immediately.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={knowledgeBankInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Sounds Like You, Not a Robot
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                The knowledge bank stores your tone, your stories, your
                expertise. Every response feels like it came from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={knowledgeBankInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">
                Gathers Intel 24/7
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                Every conversation captures what the lead wants, their timeline,
                their budget — so you walk into the call already prepared.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Chatbot Visual */}
      <motion.section
        ref={chatbotRef}
        className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]"
      >
        <div className="max-w-[1000px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={chatbotInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                See It In Action
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                This Is What Your Visitors{" "}
                <span className="gradient-text-accent">Experience</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                When a potential buyer visits your site at 11 PM with questions
                about a listing, the chatbot answers accurately, captures their
                info, and follows up — all while sounding like you wrote every
                word.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                No missed leads. No &quot;I&apos;ll get back to you tomorrow.&quot;
                Just a conversation that feels personal — because it is.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={chatbotInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[350px]">
                <div className="absolute -inset-4 bg-gradient-to-br from-cyan-500/20 to-cyan-600/5 rounded-3xl blur-2xl" />
                <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <Brain className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">
                        Nader&apos;s AI Assistant
                      </p>
                      <p className="text-green-400 text-xs">Online</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3 max-w-[85%]">
                      <p className="text-gray-300 text-sm">
                        Hi! I&apos;m Nader&apos;s assistant. What can I help you
                        with today?
                      </p>
                    </div>
                    <div className="bg-cyan-500/20 rounded-xl rounded-tr-none p-3 max-w-[85%] ml-auto">
                      <p className="text-gray-200 text-sm">
                        Is 47 Maple Drive still available?
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-xl rounded-tl-none p-3 max-w-[85%]">
                      <p className="text-gray-300 text-sm">
                        Great question! That listing is still active. It&apos;s a
                        3-bed, 2-bath on a quiet cul-de-sac. Want me to book a
                        showing with Nader?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Growth Section */}
      <motion.section
        ref={growthRef}
        className="py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              It Gets Smarter Over Time
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Month 6 Looks Nothing Like Day 1
            </h2>
            <p className="text-gray-400 text-lg max-w-[600px] mx-auto">
              The longer the system runs, the more it learns. Every conversation,
              every new listing, every piece of feedback makes it sharper.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={growthInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <Database className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-white font-semibold mb-2">Knowledge Compounds</p>
                <p className="text-gray-400 text-sm">
                  Every listing you add, every FAQ you answer — the knowledge
                  bank grows and the AI gets more accurate.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-white font-semibold mb-2">SEO Builds Up</p>
                <p className="text-gray-400 text-sm">
                  Blog posts accumulate. After a few months, you have dozens of
                  pages ranking and driving organic traffic to your site.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-cyan-400" />
                </div>
                <p className="text-white font-semibold mb-2">You Shape It</p>
                <p className="text-gray-400 text-sm">
                  As an early adopter, you get direct input on what features get
                  built. This system evolves based on your feedback.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* What's Included — Pricing Breakdown */}
      <motion.section
        ref={includedRef}
        className="py-20 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f]"
      >
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={includedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              What&apos;s Included
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              The Breakdown
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={includedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <Globe className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                Website Redesign
              </h3>
              <p className="text-cyan-400 font-semibold text-lg mb-3">$200</p>
              <p className="text-gray-400 leading-relaxed">
                A complete refresh of your current site — modern design, faster
                load times, mobile-optimized, and built to convert visitors into
                leads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={includedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">New Page</h3>
              <p className="text-cyan-400 font-semibold text-lg mb-3">$200</p>
              <p className="text-gray-400 leading-relaxed">
                An additional page tailored to your needs — whether it&apos;s a
                neighbourhood guide, a landing page, or a new service offering.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={includedInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-4 group-hover:bg-cyan-500/30 transition-colors">
                <Bot className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">
                AI Chatbot System
              </h3>
              <p className="text-cyan-400 font-semibold text-lg mb-3">$100</p>
              <p className="text-gray-400 leading-relaxed">
                A custom AI assistant trained on your knowledge, live on your
                site for 2 months. It answers questions, captures leads, and
                sounds like you.
              </p>
            </motion.div>
          </div>

          {/* SEO Generator — Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={includedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-6 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-dashed border-white/10 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30">
              <p className="text-cyan-400 text-xs font-semibold">Coming Soon</p>
            </div>
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Search className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  SEO Content Generator
                </h3>
                <p className="text-cyan-400 font-semibold text-lg mb-3">
                  $50/mo — early development pricing
                </p>
                <p className="text-gray-400 leading-relaxed">
                  4 SEO-optimized blog posts per month — neighbourhood guides,
                  listing descriptions, and market content tailored to your area.
                  This is still being built, so you&apos;d get first access at
                  early pricing. Pricing may adjust over time depending on costs
                  and effectiveness.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* After 2 Months Section */}
      <motion.section
        ref={afterRef}
        className="py-20 bg-[#0f0f0f]"
      >
        <div className="max-w-[900px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={afterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
              After 2 Months
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Keep the Chatbot Running
            </h3>
            <p className="text-gray-400 text-lg max-w-[600px] mx-auto">
              New clients pay{" "}
              <span className="text-white font-semibold">$200/month</span>.
              Because you&apos;re an early supporter who already invested before
              the system existed, you get it at half price.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={afterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                Monthly
              </p>
              <p className="text-3xl font-bold text-white mb-1">
                $100
                <span className="text-lg text-gray-400 font-normal">/mo</span>
              </p>
              <p className="text-gray-500 text-sm line-through mb-3">$200/mo</p>
              <p className="text-gray-400 text-sm">Cancel anytime</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={afterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 text-center relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyan-500 text-white text-xs font-semibold">
                Best Value
              </div>
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                6 Months
              </p>
              <p className="text-3xl font-bold text-white mb-1">$500</p>
              <p className="text-cyan-400 text-sm font-medium mb-3">
                ~$83/mo — save $100
              </p>
              <p className="text-gray-400 text-sm">One-time payment</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={afterInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
            >
              <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">
                12 Months
              </p>
              <p className="text-3xl font-bold text-white mb-1">$900</p>
              <p className="text-cyan-400 text-sm font-medium mb-3">
                $75/mo — save $300
              </p>
              <p className="text-gray-400 text-sm">One-time payment</p>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={afterInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-500 text-center mt-8 text-sm"
          >
            One closed deal covers years of this. As an early adopter, you also
            get direct input on new features as they&apos;re built.
          </motion.p>
        </div>
      </motion.section>

      {/* Pricing Summary Section */}
      <motion.section
        ref={pricingRef}
        className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a]"
      >
        <div className="max-w-[700px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 rounded-2xl p-8 md:p-12 border border-cyan-500/20 text-center"
          >
            <div className="inline-block px-4 py-1 rounded-full bg-cyan-500/20 border border-cyan-500/30 mb-6">
              <p className="text-cyan-400 font-semibold text-sm">
                Early Supporter Pricing
              </p>
            </div>
            <div className="mb-4">
              <span className="text-gray-500 text-2xl line-through mr-3">
                $1,000+
              </span>
              <span className="text-5xl md:text-6xl font-bold text-white">
                $500
              </span>
            </div>
            <p className="text-gray-400 text-lg">
              Website redesign + new page + AI chatbot (2 months) — all in.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Combined Response Form */}
      <motion.section
        ref={ctaRef}
        className="py-20 bg-[#1a1a1a]"
      >
        <div className="max-w-[800px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Next Steps
            </h2>
            <p className="text-gray-400 text-lg max-w-[550px] mx-auto">
              Let me know what you want and answer a few quick questions — I&apos;ll
              take it from there.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
          >
            {formStatus === "success" ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Got it!</h3>
                <p className="text-gray-400 text-lg max-w-[400px] mx-auto">
                  Thanks Nader — I&apos;ll review your answers and follow up soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Decisions */}
                <div className="space-y-5">
                  <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                    What do you want?
                  </p>

                  {/* Redesign toggle */}
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div
                      className={`w-12 h-7 rounded-full relative transition-colors ${
                        wantsRedesign ? "bg-cyan-500" : "bg-white/10"
                      }`}
                      onClick={() => setWantsRedesign(!wantsRedesign)}
                    >
                      <div
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                          wantsRedesign ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Website Redesign</p>
                      <p className="text-gray-500 text-sm">
                        Modern, fast, built to convert visitors into leads
                      </p>
                    </div>
                  </label>

                  {/* About page toggle */}
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div
                      className={`w-12 h-7 rounded-full relative transition-colors ${
                        wantsAboutPage ? "bg-cyan-500" : "bg-white/10"
                      }`}
                      onClick={() => setWantsAboutPage(!wantsAboutPage)}
                    >
                      <div
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                          wantsAboutPage ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">
                        New About Page{" "}
                        <a
                          href="/about"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 text-sm font-normal underline underline-offset-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          (preview it)
                        </a>
                      </p>
                      <p className="text-gray-500 text-sm">
                        A dedicated page that tells your story
                      </p>
                    </div>
                  </label>

                  {/* Chatbot toggle */}
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div
                      className={`w-12 h-7 rounded-full relative transition-colors ${
                        wantsChatbot ? "bg-cyan-500" : "bg-white/10"
                      }`}
                      onClick={() => setWantsChatbot(!wantsChatbot)}
                    >
                      <div
                        className={`absolute top-0.5 w-6 h-6 rounded-full bg-white shadow transition-transform ${
                          wantsChatbot ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">AI Chatbot</p>
                      <p className="text-gray-500 text-sm">
                        You already have an account — this activates it on your site
                      </p>
                    </div>
                  </label>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10" />

                {/* Feedback questions */}
                <div className="space-y-6">
                  <p className="text-cyan-400 font-semibold uppercase tracking-wider text-sm">
                    A few questions to shape the build
                  </p>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      What&apos;s the first thing your clients usually ask you?
                    </label>
                    <textarea
                      value={clientsAsk}
                      onChange={(e) => setClientsAsk(e.target.value)}
                      placeholder="e.g. What's available in Fall River right now?"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      What do you wish your website did better right now?
                    </label>
                    <textarea
                      value={siteMissing}
                      onChange={(e) => setSiteMissing(e.target.value)}
                      placeholder="e.g. I wish it showed my listings better, or had more personal info"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      What sets you apart from other agents?
                    </label>
                    <textarea
                      value={whatMakesDifferent}
                      onChange={(e) => setWhatMakesDifferent(e.target.value)}
                      placeholder="e.g. I speak 3 languages, I know Fall River like the back of my hand"
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:border-cyan-500/50 focus:outline-none transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit + Call */}
                <div className="flex flex-wrap gap-4 pt-2">
                  <motion.button
                    type="submit"
                    disabled={formStatus === "sending"}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="bg-cyan-500 text-white font-semibold px-8 py-4 rounded-full hover:bg-cyan-400 transition-all duration-300 shadow-lg flex items-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Mail size={18} />
                    {formStatus === "sending" ? "Sending..." : "Send My Answers"}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </motion.button>
                  <a
                    href="https://calendly.com/thomaslmusial/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
                    >
                      <Calendar size={18} />
                      Or Talk It Through on a Call
                    </motion.button>
                  </a>
                </div>

                {formStatus === "error" && (
                  <p className="text-red-400 text-sm">
                    Something went wrong — try again or just email me at
                    thomaslmusial@gmail.com
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
};

export default OfferPage;
