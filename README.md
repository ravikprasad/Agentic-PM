# Exploring the world of Agentic AI for the future of project management

As a practitioner of AI, I'm intrigued enough (using GitHub Copilot, Microsoft Copilot, ChatGPT & many more) and started envisioning the HUGE business transformation opportunities with Agentic AI. My talk series is designed around Agentic AI. Exploring the futuer of PMs in the world of Agentic AI. 

**Title of the presenatation:** Come let’s discuss with me on my talk on this topic “How Agentic AI is Redefining the Future of Project Management”. 

**Presenter:** Ravi Kaushal Prasad, Sr. Technical Project Manager, GitHub | Directory of Academic Initiatives, Puget Sound PMI

**Total Slides:** 17

## 📚 Documentation

- **[EPIC_ANALYSIS_SUMMARY.md](EPIC_ANALYSIS_SUMMARY.md)** - Executive summary of the application analysis
- **[EPICS.md](EPICS.md)** - Detailed documentation of all developed epics and features
- **[ROADMAP.md](ROADMAP.md)** - Future enhancements and potential new epics to improve the application

## About This Talk Series

Session around this topic revolves around four key aspects. It starts from AI fundamentals to Agentic AI and areas it is impacting project management.  
(1) AI fundamentals refresher,
(2) What is agentic AI? Difference between "AI Agent" and "Agentic AI",
(3) Societal & Industry impact of "Agentic AI", and
(4) ways it has started impacting project management and other industries & industry functions.

In addition to above four key areas, on-deman demo session could be planned to create agents using GitHub Copilot or Microsoft Copilot. I've also been exploring https://n8n.io/ Agentic AI product. Disclaimer: This talk series are my own agentic AI explorations, not an endorsement of any particular product or services.


## Quick Start
1. Open [homepage.html](homepage.html), then select **Start Presentation**
2. Navigate using arrow keys, spacebar, or swipe gestures on mobile
3. Edit 'config.js' to customize presentore information

### Portfolio homepage

The main landing page is [homepage.html](homepage.html). The site root and
legacy [index.html](index.html) URLs redirect there, preserving query strings and
section anchors when JavaScript is enabled. Presentation home links return
directly to the homepage.
It uses GitHub's Mona Sans variable font from GitHub's asset CDN, with system
sans-serif fallbacks, dark surfaces, and a navy-to-purple hero background.
The introduction, about, highlights, and contact sections contain résumé-based
copy that can be edited directly in the HTML. Presenter details and the first work
entry use [config.js](config.js); update work labels and destinations together.
Homepage styles are self-contained and do not change the presentation slides.
The final hero line rotates through four phrases every three seconds. Edit the
`hero-phrase` spans and their screen-reader summary together. Both animations
pause while hovered with a mouse or focused with the keyboard, and a tap toggles
pause/resume on touch screens. Reduced-motion preferences show all four phrases
without animation.
The core competencies banner above About scrolls continuously in a seamless
40-second loop. Edit its six list items in the HTML; the second visual copy is
created automatically. It becomes a static, wrapping list when reduced motion
is preferred.
The About section links to [the PDF résumé](Ravi-Kaushal-Prasad-Resume.pdf).
Replace that file with an updated PDF using the same filename to keep the link current.

## What's Included

```
Agentic PM/
├── index.html              # Redirect to the main homepage
├── homepage.html           # Main landing page
├── slide1.html            # Slide 1: Agenda
├── slide2.html            # Slide 2: Why it matters?
├── slide3.html            # Slide 3: Agentic AI by 2030
├── slide4.html            # Slide 4: Brief History of AI
├── slide5.html            # Slide 5: AI Fundamentals
├── slide5 copy.html       # Alternative version with solution diagram
├── slide6.html            # Slide 6: Responsible AI
├── slide7.html            # Slide 7: AI by Industry & Function
├── slide8.html            # Slide 8: Generative AI vs Agentic AI
├── slide9.html            # Slide 9: AI Agent vs Agentic AI
├── slide10.html           # Slide 10: What is an AI Agent?
├── slide11.html           # Slide 11: Agentic AI Capabilities
├── slide12.html           # Slide 12: AgentVerse: A MultiAgent Simulation
├── slide13.html           # Slide 13: Key Impacts of Agentic AI
├── slide14.html           # Slide 14: Agentic AI: Use Cases
├── slide15.html           # Slide 15: Demo 
├── slide16.html           # Slide 16: So, what's next? 
├── slide17.html           # Slide 17: Thank you!
├── slide-template.html    # Template for creating new slides
├── config.js              # Presentation configuration
├── navbar.js              # Navigation bar component
├── navigation.js          # Slide navigation logic
├── styles.css             # All styling
├── images/                # Place your images here
├── EPICS.md               # Developed epics documentation
├── ROADMAP.md             # Future enhancement roadmap
└── README.md              # This file
```

## Configuration

Edit `config.js` to customize:

```javascript
const presentationConfig = {
    presenter: {
        name: "Ravi Prasad",
        title: "Tech PM",
        company: "GitHub"
    },
    event: {
        name: "How Agentic AI is Redefining the Future of Project Management"
",
        date: "Dec 03, 2025",
        totalSlides: 14
    },
    hiddenSlides: []  // None
};
```

## Creating New Slides

1. Copy `slide-template.html` → `slide2.html` (or slideX.html)
2. Replace placeholder content in the slide-content section
3. Update `[SLIDE_NUMBER]` and `[TOTAL_SLIDES]` in the slide indicator
4. Update `totalSlides` in `config.js`

### Example Content Components

**Simple Title:**
```html
<h1>Your Title</h1>
<h3 class="subtitle">Your Subtitle</h3>
```

**Icon with Title:**
```html
<i class="bi bi-rocket-takeoff github-icon" style="color: var(--accent);"></i>
<h2>Your Title</h2>
```

**Content with List:**
```html
<div class="content-section">
    <p class="intro-text">Introduction text</p>
    <div class="content-list">
        <ul>
            <li>Point 1</li>
            <li>Point 2</li>
            <li>Point 3</li>
        </ul>
    </div>
</div>
```

**Cards (2-3 columns):**
```html
<div class="theme-cards">
    <div class="theme-card">
        <i class="bi bi-cpu"></i>
        <h3>Title</h3>
        <p>Description</p>
    </div>
    <div class="theme-card">
        <i class="bi bi-shield-check"></i>
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

## Navigation

- **Desktop:** 
  - Arrow keys (← →)
  - Spacebar (next)
  - Click left/right 50% of screen
- **Mobile:** 
  - Swipe left/right
  - Tap left/right 25% of screen
 
## Features

✅ Fully responsive (mobile, tablet, desktop)  
✅ Keyboard & touch navigation  
✅ PowerPoint-like click navigation  
✅ Hide specific slides  
✅ Config-driven content  
✅ Bootstrap 5 & Icons included  
✅ Dark theme optimized  

## Bootstrap Icons

Browse icons at: https://icons.getbootstrap.com/

Common icons:
- `bi-rocket-takeoff` - Launch
- `bi-cpu` - Technology
- `bi-shield-check` - Security
- `bi-building` - Enterprise
- `bi-graph-up` - Growth
- `bi-code-slash` - Code
- `bi-lightning` - Fast
- `bi-people` - Team

## Tips

- Keep slide content concise and visual
- Use high-contrast colors for readability
- Test on mobile devices
- Place images in the `images/` folder
- Update `totalSlides` in config when adding slides
- Use hidden slides for optional content

## Customization

All colors and styles are in `styles.css` with CSS variables:

```css
:root {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #c9d1d9;
    --text-secondary: #8b949e;
    --accent: #39d98a;
    --accent-hover: #2ea472;
    --border-color: #30363d;
}
```

## Browser Support

Modern browsers recommended:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

---

**Ready to present!** Just edit `config.js` and start customizing your slides.

# Presentation File Structure

Here is an overview of the project files:

```
├── index.html              # Redirect to the main homepage
├── homepage.html           # Main landing page
├── slide1.html            # Slide 1: Agenda
├── slide2.html            # Slide 2: Why it matters?
├── slide3.html            # Slide 3: Agentic AI by 2030
├── slide4.html            # Slide 4: Brief History of AI
├── slide5.html            # Slide 5: AI Fundamentals
├── slide5 copy.html       # Alternative version with solution diagram
├── slide6.html            # Slide 6: Responsible AI
├── slide7.html            # Slide 7: AI by Industry & Function
├── slide8.html            # Slide 8: Generative AI vs Agentic AI
├── slide9.html            # Slide 9: AI Agent vs Agentic AI
├── slide10.html           # Slide 10: What is an AI Agent?
├── slide11.html           # Slide 11: Agentic AI Capabilities
├── slide12.html           # Slide 12: AgentVerse: A MultiAgent Simulation
├── slide13.html           # Slide 13: Key Impacts of Agentic AI
├── slide14.html           # Slide 14: Agentic AI: Use Cases
├── slide15.html           # Slide 15: Demo 
├── slide16.html           # Slide 16: So, what's next? 
├── slide17.html           # Slide 17: Thank you!
├── slide-template.html    # Template for creating new slides
├── config.js              # Presentation configuration
├── navbar.js              # Navigation bar component
├── navigation.js          # Slide navigation logic
├── styles.css             # All styling
├── images/                # Place your images here
├── EPICS.md               # Developed epics documentation
├── ROADMAP.md             # Future enhancement roadmap
└── README.md              # This file
```

## 🎯 Project Epics

This presentation application is built on **7 core epics** (detailed in [EPICS.md](EPICS.md)):

1. ✅ **Core Presentation Infrastructure** - Web-based slide system
2. ✅ **Navigation & User Interaction** - Multi-device navigation
3. ✅ **Content Presentation Framework** - Reusable components
4. ✅ **Agentic AI Educational Content** - Comprehensive AI education
5. ✅ **Presenter Branding & Configuration** - Easy customization
6. ✅ **Visual Design & Theming** - Professional dark theme
7. ✅ **Developer Experience & Documentation** - Clear guides

## 🚀 Future Enhancements

The [ROADMAP.md](ROADMAP.md) outlines **13 potential new epics** to further enhance the application:

### High Priority
- 🎮 **Interactive Demo Integration** - Live AI demonstrations
- 📝 **Speaker Notes & Presenter Mode** - Professional delivery tools
- ♿ **Accessibility Enhancements** - WCAG 2.1 AA compliance

### Medium Priority
- 📊 **Analytics & Audience Engagement** - Track presentation effectiveness
- 🌍 **Multi-Language Support** - Global accessibility
- 👥 **Collaborative Features** - Team presentation building
- 📤 **Content Export & Sharing** - PDF, PPTX export
- 📱 **Offline Mode & PWA** - Work anywhere

### Additional Features
- 🔍 **Search & Discovery**
- ✨ **Slide Animations & Transitions**
- 🤖 **AI-Powered Content Suggestions**
- 🎨 **Template Marketplace**
- 🎥 **Video Recording & Replay**
