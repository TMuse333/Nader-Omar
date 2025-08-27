'use client';

import React, { useState } from "react";

type FileData = { name: string; content: string };
type AnswerMap = Record<string, string | string[]>;

const questions = [
    {
        text: 'Which blog would you like to start with?',
        options: [
            "Why Fall River, Nova Scotia Is Perfect for First-Time Homebuyers in 2025",
            "Lakefront Living in Fall River, NS: Affordable Waterfront Homes to Watch in 2025",
            "Living in Fall River, NS: A 2025 Guide to Schools, Parks, and Community Events",
            "Previous client stories if applicable"
        ]
    },
    {
        text: "Are there any tasks on your computer that you'd like to be automated?",
   },
    {
        text: 'If you had a virtual AI assistant, what would you like the AI to do?'
    },
    {
        text: "What technologies do you work with on a daily basis, perhaps I can connect the app to them?",
    },
    {
        text: "Any other thoughts/requests or concerns that I can help with?"
    }
];

export default function Questionnaire() {
    const [answers, setAnswers] = useState<AnswerMap>({});
    const [files, setFiles] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleAnswerChange = (q: string, value: string) => {
        setAnswers((prev) => ({ ...prev, [q]: value }));
    };

    const handleCheckboxChange = (q: string, option: string, checked: boolean) => {
        setAnswers((prev) => {
            const prevArray = (prev[q] as string[]) || [];
            if (checked) return { ...prev, [q]: [...prevArray, option] };
            else return { ...prev, [q]: prevArray.filter((o) => o !== option) };
        });
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const dropped = Array.from(e.dataTransfer.files);
        setFiles((prev) => [...prev, ...dropped]);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
        }
    };

    const handleSubmit = async () => {
        setLoading(true);
        setMessage("");

        const fileData: FileData[] = await Promise.all(
            files.map(
                (file) =>
                    new Promise<FileData>((resolve, reject) => {
                        const reader = new FileReader();
                        reader.onload = () =>
                            resolve({ name: file.name, content: (reader.result as string).split(",")[1] });
                        reader.onerror = reject;
                        reader.readAsDataURL(file);
                    })
            )
        );

        const res = await fetch("/api/send-questionnaire", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ answers, files: fileData }),
        });

        if (res.ok) setMessage("✅ Questionnaire sent successfully!");
        else setMessage("❌ Failed to send questionnaire.");

        setLoading(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-8 space-y-8 bg-gradient-to-b from-gray-50 to-white rounded-xl shadow-sm">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-gray-800">Questionnaire</h1>
                <p className="mt-2 text-gray-600 text-lg">
                    Help us tailor your experience with these questions about blog posts and potential app features.
                </p>
            </div>

            {questions.map((q) => (
                <div key={q.text} className="space-y-3 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <label className="font-semibold text-gray-700">{q.text}</label>

                    {q.options ? (
                        <div className="flex flex-col gap-2">
                            {q.options.map((option) => (
                                <label key={option} className="inline-flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={(answers[q.text] as string[] | undefined)?.includes(option) || false}
                                        onChange={(e) =>
                                            handleCheckboxChange(q.text, option, e.target.checked)
                                        }
                                        className="h-5 w-5 text-blue-600 rounded focus:ring-blue-300"
                                    />
                                    <span className="text-gray-600">{option}</span>
                                </label>
                            ))}
                        </div>
                    ) : (
                        <input
                            type="text"
                            value={(answers[q.text] as string) || ""}
                            onChange={(e) => handleAnswerChange(q.text, e.target.value)}
                            className="w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-200 bg-gray-50 transition-colors"
                            placeholder="Your answer..."
                        />
                    )}
                </div>
            ))}

            <div className="space-y-3">
                <h3 className="font-semibold text-gray-700">Any files you work with regularly?</h3>
                <p className="text-gray-600">
                    Share any template files or PDFs you frequently fill out manually, and we’ll explore automation options.
                </p>
                <div
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gradient-to-br from-gray-50 to-gray-100 hover:bg-gray-200 transition-colors"
                    onDrop={handleDrop}
                    onDragOver={(e) => e.preventDefault()}
                >
                    <p className="text-gray-700">Drag & Drop files here</p>
                    <p className="text-sm text-gray-500 mt-1">or</p>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        multiple
                        className="mt-2 text-sm text-gray-600"
                    />
                </div>

                <ul className="text-sm text-gray-600 space-y-1">
                    {files.map((file, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <span>📎</span> {file.name}
                        </li>
                    ))}
                </ul>
            </div>

            <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:from-blue-600 hover:to-blue-700 transition-all"
            >
                {loading ? "Sending..." : "Submit Questionnaire"}
            </button>

            {message && (
                <p className={`text-center ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>
                    {message}
                </p>
            )}
        </div>
    );
}