import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
    {
        question: "Why the name 'onnoff'?",
        answer: "Because the team liked it. Any specific reason? Nope. It's just a cool name."
    },
    {
        question: "How do we handle requests at 3 AM?",
        answer: "Honestly? We don't. Developers might not sleep at night, but we like to pretend work-life balance matters. So, we'll get back to you in the morning—fresh, caffeinated, and ready to crush it. But don't worry, we've got systems in place to ensure your business never sleeps (even if we do)."
    },
    {
        question: "Do we offer any unusual services?",
        answer: "Generally we build websites, do branding, handle social media but if required we even help you pick the perfect gift for your partner. Just don't ask us to setup VS Code for C++ because we are great at digital, but real life handyman skills, we might have to watch a 12 min youtube tutorial."
    },
    {
        question: "What's the best way to contact us?",
        answer: "Carrier pigeon is our preferred method, but email works too."
    },
    {
        question: "What's our place of work?",
        answer: "You won't believe it, but one of us coded a website in a metro, and another designed a logo while sitting on a water tank. We're basically everywhere—but our meeting place is in Delhi."
    },
    {
        question: 'What is the difference between web developmet and web designing?',
        answer: 'Web design refers to the design of the website that is displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. Web development is the building and maintenance of websites; it is the work that happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.',
        hidden: true,
    },
    {
        question: 'Will web development be replaced by AI?',
        answer: 'AI is a powerful tool that can help automate repetitive tasks, but it will not replace web development. AI can help web developers by automating tasks like testing and debugging, but it cannot replace the creative and problem-solving skills that web developers bring to the table.',
        hidden: true
    },
    {
        question: "web development jobs",
        answer: "Web development jobs are in high demand, with many companies looking to hire skilled web developers. Web developers can work in a variety of industries, including tech, finance, healthcare, and more. Some common web development jobs include front-end developer, back-end developer, full-stack developer, and web designer.",
        hidden: true
    },
    {
        question: "creative agency near me",
        answer: "If you're looking for a creative agency near you, you're in the right place. We're a creative agency based in Delhi, India, but we work with clients from all over the world. We specialize in web design, branding, and digital marketing, and we'd love to help you with your next project.",
        hidden: true
    },  
    {
        question: "creative agency delhi",
        answer: "We're a creative agency based in Delhi, India, specializing in web design, branding, and digital marketing. We work with clients from all over the world to create beautiful, functional websites and engaging digital experiences. If you're looking for a creative agency in Delhi, look no further.",
        hidden: true
    },
    {
        question: "web development salary",
        answer: "Web development salaries vary depending on factors like experience, location, and the size of the company. According to Glassdoor, the average web developer salary in India is around ₹4,00,000 per year, but this can vary significantly based on your skills and experience.",
        hidden: true
    },
    {
        question: "web development internship",
        answer: "Web development internships are a great way to gain hands-on experience in the field and build your skills. Many companies offer web development internships to students and recent graduates looking to break into the industry. Internships can be paid or unpaid and can last anywhere from a few weeks to a few months.",
        hidden: true
    },
    {
        question: "web development projects",
        answer: "Web development projects can vary widely in scope and complexity. Some common web development projects include building a website from scratch, redesigning an existing website, creating a web application, or adding new features to an existing site. Web developers use a variety of tools and technologies to complete these projects, including HTML, CSS, JavaScript, and more.",
        hidden: true
    },

    // Add more FAQs...
]

export default function FAQAccordion() {
    return (
        <div className="space-y-4 h-auto mb-20 max-w-7xl mx-auto relative px-4 lg:px-0">
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-black font-montserrat'>And Here Comes The Common Doubts?
                {/* <span className='text-sm font-normal'>(Related and Unrelated with onnoff at the same time)</span> */}
            </h1>
            <p></p>
            {/* {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))} */}
            {faqs
                .filter(faq => !faq.hidden) // Filter out hidden FAQs
                .map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}

            {/* Hidden FAQs for SEO */}
            <div style={{ display: 'none' }} aria-hidden="true">
                {faqs
                    .filter(faq => faq.hidden) // Filter only hidden FAQs
                    .map((faq, index) => (
                        <div key={index}>
                            <h3>{faq.question}</h3>
                            <p>{faq.answer}</p>
                        </div>
                    ))}
            </div>
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
                transition={{ type: 'spring', stiffness: 100 }}
                className="overflow-hidden"
            >
                <p className="pb-4 font-poppins text-gray-800">{answer}</p>
            </motion.div>
        </motion.div>
    )
}