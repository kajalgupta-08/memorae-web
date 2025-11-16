import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is Memorae and how can it help me?",
      answer: "Memorae is your digital memory assistant that helps you capture, organize, and remember everything important. It transforms scattered thoughts into structured memories through voice notes, text, and smart reminders.",
    },
    {
      question: "What types of reminders and features does Memorae offer?",
      answer: "Memorae offers unlimited automatic reminders, voice-to-text conversion, calendar integration with Google and Outlook, friend reminders, and a centralized control center for all your tasks and notes.",
    },
    {
      question: "Can I set recurring reminders?",
      answer: "Yes! You can set unique or repeating reminders - weekly, monthly, with or without exceptions. Scheduled or spontaneous, Memorae adapts to your needs.",
    },
    {
      question: "Does Memorae spy on me or can I sleep peacefully knowing my data is safe?",
      answer: "Your data is completely safe and private. We use industry-standard encryption and never share your information with third parties. You can sleep peacefully!",
    },
    {
      question: "How does Memorae protect my privacy and data security?",
      answer: "We implement end-to-end encryption, secure cloud storage, and strict privacy policies. Your data belongs to you and only you have access to it.",
    },
    {
      question: "What advantages does Memorae offer compared to other tools?",
      answer: "Unlike traditional productivity tools, Memorae doesn't add complexity - it eliminates it. We integrate everything into one simple chat interface without downloads or multiple apps.",
    },
    {
      question: "Is Memorae available 24/7?",
      answer: "Yes! Memorae is always available whenever you need it, 24 hours a day, 7 days a week.",
    },
    {
      question: "Does Memorae sync with calendars like Google Calendar?",
      answer: "Absolutely! Memorae integrates seamlessly with Google Calendar, Outlook, and other major calendar services to keep everything synchronized.",
    },
    {
      question: "Are there limits to the number of reminders I can set up?",
      answer: "No limits! With our Pro and Supernova plans, you get unlimited reminders so you never have to worry about forgetting anything.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Have questions? We answer them here</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 hover:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
