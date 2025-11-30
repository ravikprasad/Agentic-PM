// Presentation Configuration
// Edit these values to customize presenter information across all slides

const presentationConfig = {
    presenter: {
        name: "<a href='https://www.linkedin.com/in/ravikaushalprasad/' target='_blank' style='color: inherit; text-decoration: none; border-bottom: 1px solid var(--accent); transition: all 0.2s ease;'>Ravi Prasad</a>",
        title: "Sr. Technical Project Manager",
        company: "GitHub"
    },
    event: {
        name: "How Agentic AI is Redefining the Future of Project Management",
        date: "Dec 02, 2025",
        totalSlides: 16
    },
    // Hidden slides configuration
    // Add slide numbers to this array to hide them from navigation
    // Example: [1, 5, 10] will hide slides 1, 5, and 10
    hiddenSlides: []
};

// Make config available globally
if (typeof window !== 'undefined') {
    window.presentationConfig = presentationConfig;
}
