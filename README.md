# Exploring the world of Agentic AI for the future of project management

As a practitioner of AI, I'm intrigued enough (using GitHub Copilot, Microsoft Copilot, ChatGPT & many more) and started envisioning the HUGE business transformation opportunities with Agentic AI. My talk series is designed around Agentic AI. Exploring the futuer of PMs in the world of Agentic AI. 

**Title of the presenatation:** Come let’s discuss with me on my talk on this topic “How Agentic AI is Redefining the Future of Project Management”. 

**Presenter:** Ravi Kaushal Prasad, Sr. Technical Project Manager, GitHub | Directory of Academic Initiatives, Puget Sound PMI

**Total Slides:** 14

## About This Talk Series

Session around this topic revolves around four key aspects. It starts from AI fundamentals to Agentic AI and areas it is impacting project management.  
(1) AI fundamentals refresher,
(2) What is agentic AI? Difference between "AI Agent" and "Agentic AI",
(3) Societal & Industry impact of "Agentic AI", and
(4) ways it has started impacting project management and other industries & industry functions.

In addition to above four key areas, on-deman demo session could be planned to create agents using GitHub Copilot or Microsoft Copilot. I've also been exploring https://n8n.io/ Agentic AI product. Disclaimer: This talk series are my own agentic AI explorations, not an endorsement of any particular product or services.


## Quick Start
1. Open 'index.html' in a browser to start the presetation
2. Navigate using arrow keys, spacebar, or swipe gestures on mobile
3. Edit 'config.js' to customize presentore information

## What's Included

```
Agentic PM/
├── index.html              # Welcome/landing page
├── slide1.html            # Slide 1: The Daily Standup
├── slide2.html            # Slide 2
├── slide3.html            # Slide 3
├── slide4.html            # Slide 4
├── slide5.html            # Slide 5
├── slide6.html            # Slide 6
├── slide7.html            # Slide 7: From "AI Tool" to "AI Teammate"
├── slide8.html            # Slide 8
├── slide9.html            # Slide 9
├── slide10.html           # Slide 10
├── slide11.html           # Slide 11
├── slide12.html           # Slide 12
├── slide13.html           # Slide 13
├── slide14.html           # Slide 14
├── slide-template.html    # Template for creating new slides
├── config.js              # Presentation configuration
├── navbar.js              # Navigation bar component
├── navigation.js          # Slide navigation logic
├── styles.css             # All styling
├── images/                # Place your images here
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
├── index.html              # Welcome/landing page
├── slide1.html            # Slide 1: Why Agentic AI matters?
├── slide2.html            # Slide 2: Agentic AI by 2030
├── slide3.html            # Slide 3: AI Fundamentals
├── slide4.html            # Slide 4: Brief History of AI
├── slide5.html            # Slide 5: Responsible AI
├── slide6.html            # Slide 6: AI by Industry & Function
├── slide7.html            # Slide 7: Generative AI vs Agentic AI
├── slide8.html            # Slide 8: AI Agent vs Agentic AI
├── slide9.html            # Slide 9: What is an AI Agent?
├── slide10.html           # Slide 10:Agentic AI Capabilities
├── slide11.html           # Slide 11:AgentVerse
├── slide12.html           # Slide 12:Agentic AI: Use Cases
├── slide13.html           # Slide 13:Key Impacts of Agentic AI
├── slide14.html           # Slide 14:Demo 
├── slide15.html           # Slide 14:So, what's next? 
├── slide16.html           # Slide 14:Thank you!
├── slide-template.html    # Template for creating new slides
├── config.js              # Presentation configuration
├── navbar.js              # Navigation bar component
├── navigation.js          # Slide navigation logic
├── styles.css             # All styling
├── images/                # Place your images here
└── README.md              # This file
```
