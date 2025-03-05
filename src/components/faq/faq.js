import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What is the difference between web developmet and web designing?',
    answer: 'Web design refers to the design of the website that is displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web development is the building and maintenance of websites; it is the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.'
  },
  {
    question: 'Will web development be replaced by AI?',
    answer: 'AI is a powerful tool that can help automate repetitive tasks, but it will not replace web development. AI can help web developers by automating tasks like testing and debugging, but it cannot replace the creative and problem-solving skills that web developers bring to the table.'
  },
  
  // Add more FAQs...
]

export default function FAQAccordion() {
  return (
    <div className="space-y-4 h-screen max-w-7xl mx-auto relative px-4 md:px-0">
        <h1 className='text-4xl font-bold font-montserrat'>And Here Comes The Common Doubts?<span className='text-sm font-normal'>(Related and Unrelated with onnoff at the same time)</span></h1>
        <p></p>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      className="border-b-2 border-neutral-700 "
      initial={false}
      animate={{ backgroundColor: isOpen ? 'transparent' : "transparent" }}
    >
      <button
        className="w-full text-left py-4 flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-montserrat font-medium">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </button>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ type: 'spring', stiffness: 600 }}
        className="overflow-hidden"
      >
        <p className="pb-4 font-poppins text-gray-800">{answer}</p>
      </motion.div>
    </motion.div>
  )
}