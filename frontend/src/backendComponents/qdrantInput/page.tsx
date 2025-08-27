'use client';
import { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import { useGeneralContext } from '@/context/context';
import { AnimatePresence, motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

export default function InternalBot() {
  const [type, setType] = useState<'blog' | 'stat' | 'story'>('blog');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [tags, setTags] = useState('');
  const [source, setSource] = useState('manual');
  const [status, setStatus] = useState('');

  const [blogMode, setBlogMode] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showHelp, setShowHelp] = useState(false);

  const { selectedBlog } = useGeneralContext();

  // 👇 Build extended questions array with the extra "anything else?" question
  const extendedQuestions = useMemo(() => {
    if (!selectedBlog) return [];
    return [...selectedBlog.questions, "Anything else you'd like to add?"];
  }, [selectedBlog]);

  useEffect(() => {
    if (selectedBlog) {
      setBlogMode(true);
      setTags(selectedBlog.tags.join(', '));
      setCurrentQuestionIndex(0);
      setAnswers([]);
    } else {
      setBlogMode(false);
    }
  }, [selectedBlog]);

  useEffect(() => {
    if (blogMode && selectedBlog) {
      setTitle(selectedBlog.title);
    }
  }, [blogMode, selectedBlog]);

  const handleSubmit = async () => {
    if (!title || !text) {
      setStatus('Please fill all required fields.');
      return;
    }
    setStatus('Uploading...');
    try {
      const entries = blogMode ? answers.concat(text) : [text];
      const res = await axios.post('/api/send-to-qdrant', {
        type,
        title,
        entries,
        tags: tags.split(',').map((t) => t.trim()).filter(Boolean),
        source,
      });
      if (res.data.success) {
        setStatus('✅ Uploaded successfully!');
        setTitle('');
        setText('');
        setTags('');
        setAnswers([]);
        setBlogMode(false);
      } else {
        setStatus('❌ Upload failed.');
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Upload failed.');
    }
  };

  const handleNextQuestion = () => {
    if (text.trim()) {
      setAnswers((prev) => [...prev, text]);
      setText('');
      if (currentQuestionIndex < extendedQuestions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      }
    } else {
      setStatus('Please answer the question before continuing.');
    }
  };

  return (
    <div className="relative max-w-xl mx-auto p-6 bg-white rounded-lg shadow text-black">
      {/* Help button in top right */}
      <button
        onClick={() => setShowHelp(true)}
        className="absolute top-4 right-4 text-gray-600 hover:text-black transition"
      >
        <HelpCircle size={22} />
      </button>

      <h1 className="text-xl font-bold mb-4">Internal Blog / Stat / Story Uploader</h1>

      {!blogMode && (
        <p className="mb-6">
          This is where you can insert stories, facts, statistics or anything else you think would be
          useful in a blog post. Simply type in what you want and put some meta data around it to help
          the AI understand it.
        </p>
      )}

      {blogMode && selectedBlog && (
        <div className="mb-6">
          <h2 className="font-bold text-2xl mb-2">Blog Topic: {selectedBlog.title}</h2>
          <p className="mb-4">{selectedBlog.description}</p>

          <button
            onClick={() => setBlogMode(false)}
            className="mb-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
          >
            Exit Blog Mode
          </button>

          <div className="p-3 border rounded-md bg-gray-50">
            <p className="font-semibold mb-2">
              Question {currentQuestionIndex + 1} of {extendedQuestions.length}:
            </p>
            <p className="mb-3">{extendedQuestions[currentQuestionIndex]}</p>
          </div>
        </div>
      )}

      {/* Inputs */}
      <label className="block mb-2 font-medium">
        Type:
        <select
          value={type}
          onChange={(e) => setType(e.target.value as 'blog' | 'stat' | 'story')}
          className="ml-2 border p-1 rounded"
        >
          <option value="blog">Blog</option>
          <option value="stat">Stat</option>
          <option value="story">Story</option>
        </select>
      </label>

      <label className="block mb-2 font-medium">
        Title:
        <input
        placeholder={"What kind of data is this (answer to a question, client story ect.)"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </label>

      <label className="block mb-2 font-medium text-black">
        <textarea
          value={text}
          placeholder="write your answer here"
          onChange={(e) => setText(e.target.value)}
          className="w-full border p-2 h-40 rounded"
        />
      </label>

      <label className="block mb-2 font-medium text-black">
        Tags (comma separated):
        <input
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          className="w-full border p-2 rounded text-black"
        />
      </label>

      <label className="block mb-4 font-medium">
        Source:
        <input
          value={source}
          onChange={(e) => setSource(e.target.value)}
          className="w-full border p-2 rounded"
        />
      </label>

      {/* Buttons */}
      {blogMode && selectedBlog ? (
        currentQuestionIndex < extendedQuestions.length - 1 ? (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Next Question
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            Upload Blog
          </button>
        )
      ) : (
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Upload
        </button>
      )}

      {status && <p className="mt-4">{status}</p>}

      {/* Help Modal */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center"
            >
              <h2 className="text-lg font-bold mb-4">Sending data to the ai</h2>
              <p className="mb-4 text-gray-700">
               This here is meant to give data to an ai model that
               has been instructed to make blog posts. Your personal
               input (non ai generated) is important to add unique insights
               for the blog posts, which in results in more viewers.
              </p>
              <button
                onClick={() => setShowHelp(false)}
                className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Got it
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
