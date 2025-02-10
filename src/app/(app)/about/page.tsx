import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdownContent = `
## **About AI Debates**

### **Our Mission**  
At **AI Debates**, we are building a platform that allows users to compare answers from a variety of AI models—**without the usual number-driven bias**. While many existing platforms rely on abstract benchmarks and statistics, we focus on **real-life scenarios and practical applications** to highlight the strengths and weaknesses of each AI model.

### **Our Vision**  
If AI Debates gains traction, our goal is to become **the #1 reference platform for AI model evaluation**, used by industry leaders like **OpenAI, Meta, and other AI giants**. By providing **transparent and meaningful comparisons**, we hope to contribute to the development of better and more reliable AI systems.

### **Why AI Debates?**  
We've all seen **AI performance charts** claiming one model is better than another. However, when it comes to **real-world use cases**, these numbers don't always reflect reality. AI Debates was created because:
- **Performance benchmarks don't always translate to practical results.**
- **Each model has unique strengths that go beyond raw scores.**
- **Users need a side-by-side comparison that focuses on actual responses rather than statistics.**

### **How It Works**  
Our platform provides a **clean and structured interface** where users can:
1. **Compare multiple AI models** side by side on the same question.  
2. **See if web search was enabled** for each response.  
3. **Analyze AI reasoning and biases** across different models.  

This allows users to **form their own conclusions** rather than relying on abstract scores.
`;

export default function AboutPage() {
    return (
        <div
            className='max-w-content mx-auto text-pretty px-4 sm:px-6 pt-20 sm:pt-28 pb-16'
        >
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="prose prose-blue max-w-none text-text text-base sm:text-lg"
                components={{
                    h1: ({ node, ...props }) => (
                        <h1 className="text-2xl sm:text-3xl font-bold mt-4 sm:mt-8 mb-3 sm:mb-5" {...props} />
                    ),
                    h2: ({ node, ...props }) => (
                        <h2 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-7 mb-2 sm:mb-4" {...props} />
                    ),
                    h3: ({ node, ...props }) => (
                        <h3 className="text-lg sm:text-xl font-bold mt-3 sm:mt-6 mb-2 sm:mb-3" {...props} />
                    ),
                    p: ({ node, ...props }) => (
                        <p className="text-base sm:text-lg mb-4 sm:mb-6" {...props} />
                    ),
                    ul: ({ node, ...props }) => (
                        <ul className="list-disc pl-6 sm:pl-8 mb-4 sm:mb-6" {...props} />
                    ),
                    ol: ({ node, ...props }) => (
                        <ol className="list-decimal pl-6 sm:pl-8 mb-4 sm:mb-6" {...props} />
                    ),
                    li: ({ node, ...props }) => (
                        <li className="mb-2 sm:mb-3" {...props} />
                    ),
                    hr: ({ node, ...props }) => (
                        <hr className="my-4 sm:my-8 border-border" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                        <blockquote className="border-l-4 border-primary pl-4 sm:pl-6 my-4 sm:my-6 text-placeholder" {...props} />
                    ),
                    code: ({ node, ...props }: any) => {
                        const { inline } = props;
                        return inline ? (
                            <code
                                className="bg-primary/10 px-1 sm:px-2 py-0.5 sm:py-1 rounded text-primary font-mono text-sm sm:text-base"
                                {...props}
                            />
                        ) : (
                            <code
                                className="block bg-primary/10 p-3 sm:p-5 rounded-lg text-text font-mono text-sm sm:text-base my-4 sm:my-6"
                                {...props}
                            />
                        );
                    },
                    strong: ({ node, ...props }) => (
                        <strong className="text-text dark:font-bold dark:shadow" {...props} />
                    ),
                }}
            >
                {markdownContent}
            </ReactMarkdown>
        </div>
    );
}