'use client';

import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useMessages } from '@/lib/i18n/useMessages';

interface AboutProps {
    content: string;
    title?: string;
}

export default function About({ content, title }: AboutProps) {
    const messages = useMessages();
    const resolvedTitle = title !== undefined && title !== null ? title : messages.home.about;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
            {resolvedTitle && <h2 className="text-2xl font-serif font-bold text-primary mb-4">{resolvedTitle}</h2>}
            <div className="text-neutral-700 dark:text-neutral-600 leading-relaxed">
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw]}
                    skipHtml={false}
                    components={{
                        h1: ({ children }) => <h1 className="text-3xl font-serif font-bold text-primary mt-8 mb-4">{children}</h1>,
                        h2: ({ children }) => <h2 className="text-2xl font-serif font-bold text-primary mt-8 mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-2">{children}</h2>,
                        h3: ({ children }) => <h3 className="text-xl font-semibold text-primary mt-6 mb-3">{children}</h3>,
                        p: ({ children }) => <p className="mb-4 last:mb-0">{children}</p>,
                        ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-1 ml-4">{children}</ul>,
                        ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-1 ml-4">{children}</ol>,
                        li: ({ children }) => <li className="mb-1">{children}</li>,
                        a: ({ ...props }) => (
                            <a
                                {...props}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-accent font-medium transition-all duration-200 rounded hover:bg-accent/10 hover:shadow-sm"
                            />
                        ),
                        blockquote: ({ children }) => (
                            <blockquote className="border-l-4 border-accent/50 pl-4 italic my-4 text-neutral-600 dark:text-neutral-500">
                                {children}
                            </blockquote>
                        ),
                        strong: ({ children }) => <strong className="font-semibold text-primary">{children}</strong>,
                        em: ({ children }) => <em className="italic text-neutral-600 dark:text-neutral-500">{children}</em>,
                        table: ({ children }) => <table className="w-full border-collapse mb-4 text-sm">{children}</table>,
                        thead: ({ children }) => <thead className="bg-neutral-100 dark:bg-neutral-800">{children}</thead>,
                        th: ({ children }) => <th className="border border-neutral-200 dark:border-neutral-700 px-3 py-2 text-left font-semibold text-primary">{children}</th>,
                        td: ({ children }) => <td className="border border-neutral-200 dark:border-neutral-700 px-3 py-2">{children}</td>,
                        div: ({ className, children, ...props }) => {
                            // 处理卡片布局
                            if (className?.includes('cards-container')) {
                                return (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                                        {children}
                                    </div>
                                );
                            }
                            if (className?.includes('academic-card') || className?.includes('personal-card')) {
                                return (
                                    <div className="bg-white dark:bg-neutral-800 rounded-lg border border-neutral-200 dark:border-neutral-700 p-6 shadow-sm hover:shadow-md transition-all duration-200">
                                        {children}
                                    </div>
                                );
                            }
                            return <div className={className} {...props}>{children}</div>;
                        },
                    }}
                >
                    {content}
                </ReactMarkdown>
            </div>
        </motion.section>
    );
}
