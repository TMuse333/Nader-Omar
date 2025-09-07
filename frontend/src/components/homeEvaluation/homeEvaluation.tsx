import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
  useInView,
  Variants,
} from "framer-motion";
import axios from "axios";
import nader from '../../../public/nader.jpg';
import Image from "next/image";

const COLORS_TOP = ["#3B82F6", "#60A5FA", "#93C5FD", "#BFDBFE"];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.6 + i * 0.2, ease: "easeOut" },
  }),
};

const HomeEvaluation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const color = useMotionValue(COLORS_TOP[0]);
  const border = useMotionTemplate`2px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 8px 32px ${color}`;

  // Hardcoded fields inside the component
  const fields = [
    {
      name: "firstName",
      type: "text",
      placeholder: "First Name",
      required: true,
    },
    {
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
      required: false,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email Address",
      required: true,
    },
    {
      name: "telephone",
      type: "text",
      placeholder: "Telephone",
      required: false,
    },
    {
      name: "bestTime",
      type: "select",
      placeholder: "Best time to call",
      label: "Preferred Contact Time",
      options: ["Select an option", "Anytime", "Morning", "Afternoon", "Evening"],
      required: false,
    },
    {
      name: "country",
      type: "select",
      placeholder: "Country",
      label: "Country of Residence",
      options: ["Canada", "United States", "Other"],
      required: false,
    },
    {
      name: "address1",
      type: "text",
      placeholder: "Address Line 1",
      required: true,
    },
    {
      name: "address2",
      type: "text",
      placeholder: "Address Line 2",
      required: false,
    },
    {
      name: "city",
      type: "text",
      placeholder: "City",
      required: true,
    },
    {
      name: "province",
      type: "text",
      placeholder: "Province",
      required: true,
    },
    {
      name: "postalCode",
      type: "text",
      placeholder: "Postal Code",
      required: true,
    },
    {
      name: "homeType",
      type: "select",
      placeholder: "Type of home",
      label: "Type of Property",
      options: ["Select an option", "Single Family Home", "Condo", "Townhouse", "Duplex", "Other"],
      required: false,
    },
  ];

  const [formData, setFormData] = useState<Record<string, string>>(
    fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === "select" && f.options ? f.options[0] : "" }), {})
  );
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/sendEvaluation", formData);
      setSuccess("Form submitted successfully!");
      setFormData(fields.reduce((acc, f) => ({ ...acc, [f.name]: f.type === "select" && f.options ? f.options[0] : "" }), {}));
      setError(null);
    } catch (error) {
      setError("Failed to submit form. Please try again.");
      setSuccess(null);
      console.log(error);
    }
  };

  return (
    <motion.section
      id="home-evaluation"
      ref={sectionRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative w-full max-w-5xl mx-auto my-12 px-4 py-16 text-gray-900 overflow-hidden rounded-xl bg-gradient-to-br from-blue-100 to-white"
    >
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 mb-8
        md:mt-[-4rem]">
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-24 w-24 md:h-48 md:w-48 rounded-full overflow-hidden border-4 border-blue-200 shadow-xl mb-6"
              style={{ boxShadow: boxShadow.get() }}
            >
              <Image 
                height={1300}
                width={600}
                src={nader} alt="Nader Omar" className="h-full w-full object-cover" />
            </motion.div>
            <motion.h2
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-semibold bg-gradient-to-br from-gray-900 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              Free Market Evaluation
            </motion.h2>
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg max-w-2xl leading-relaxed text-gray-700 mb-8 whitespace-pre-line"
            >
              We know it&apos;s impossible to provide a reliable and honest market evaluation over the phone or internet, that&apos;s why we don&apos;t.
              {"\n\n"}
              Fair and honest market evaluations take time, research and a close look at your home. When you contact me for a free evaluation, you can be sure you will receive accurate information based not only on recent market activity in your area, but on your home and it&apos;s unique characteristics.
              {"\n\n"}
              You can contact me by email or phone&nbsp; 
              <span className="font-bold">
                (782)-321-3393
              </span> or complete the following form and we&apos;ll contact you to arrange the free evaluation of your home.
            </motion.p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-1/2 flex flex-col justify-center items-center"
          >
            <p className="font-semibold mt-[-3rem] mb-4 sm:text-lg">
              Complete the form below to request your free home evaluation
            </p>
            {fields.map((field, index) => (
              <motion.div
                key={field.name}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={staggerItem}
                custom={index}
                className="w-full mb-4"
              >
                {field.type === "select" && field.label && (
                  <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
                )}
                {field.type === "select" ? (
                  <select
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
                    className="border-2 border-blue-200 w-full p-3 rounded-lg bg-blue-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    required={field.required}
                  >
                    {field.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] || ""}
                    onChange={handleChange as React.ChangeEventHandler<HTMLInputElement>}
                    className="border-2 border-blue-200 w-full p-3 rounded-lg bg-blue-50/50 text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-600"
                    required={field.required}
                    placeholder={field.placeholder}
                  />
                )}
              </motion.div>
            ))}
            {error && (
              <motion.p
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="text-red-600 mb-4"
              >
                {error}
              </motion.p>
            )}
            {success && (
              <motion.p
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={fadeInUp}
                className="text-green-600 mb-4"
              >
                {success}
              </motion.p>
            )}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              transition={{ delay: 0.4 + fields.length * 0.1 }}
              className="relative z-20"
            >
              <motion.button
                type="submit"
                style={{ border: border.get(), boxShadow: boxShadow.get() }}
                whileHover={{ scale: 1.05, backgroundColor: "#bfdbfe" }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center gap-2 rounded-full bg-blue-200 px-8 py-4 text-lg font-semibold text-gray-900 transition-colors z-20"
              >
                SUBMIT
                <motion.span
                  className="inline-block"
                  transition={{ duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-0" />
    </motion.section>
  );
};

export default HomeEvaluation;