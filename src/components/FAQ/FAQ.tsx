"use client"

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


export interface FAQItem {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    heading: string;
    description?: string;
    faqs: FAQItem[];
}

export const FAQSection = ({ heading, description, faqs }: FAQSectionProps) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-16 bg-secondary">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="text-center mb-12 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mb-3 sm:mb-4 text-brand">{heading}</h2>
                    {description && (
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground ">{description}</p>
                    )}
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-lg bg-primary overflow-hidden shadow-sm"
                        >
                            <button
                                className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="font-semibold text-base sm:text-lg text-foreground pr-4 sm:pr-8">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-brand flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                    }`}
                            >
                                <div className="px-4 sm:px-6 pb-3 sm:pb-4 text-sm sm:text-base text-muted-foreground">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
