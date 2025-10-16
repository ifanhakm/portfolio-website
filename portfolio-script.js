const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
        if (navLists.classList.contains("nav-active")) {
            navLists.classList.remove("nav-active");
            burger.classList.remove("toggle-burger");
        } else {
            navLists.classList.add("nav-active");
            burger.classList.add("toggle-burger");
        }
    });
};

// Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// Particles.js Configuration and Initialization
document.addEventListener('DOMContentLoaded', function() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            "particles": {
                "number": {
                    "value": 80,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#7e74f1"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#000000"
                    },
                    "polygon": {
                        "nb_sides": 5
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#7e74f1",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 3,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "push": {
                        "particles_nb": 4
                    }
                }
            },
            "retina_detect": true
        });
    }

    // Typing Effect
    const typedTextSpan = document.querySelector(".typed-text");
    const cursorSpan = document.querySelector(".cursor");

    if (typedTextSpan && cursorSpan) {
        const textArray = ["AI/ML Engineer", "Data Scientist", "Computer Vision Engineer", "Gen AI Engineer"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        // Start the typing effect on load
        if (textArray.length) setTimeout(type, newTextDelay + 250);
    }

    // Scroll to top button
    const scrollToTopBtn = document.createElement("div");
    scrollToTopBtn.className = "scroll-to-top";
    scrollToTopBtn.innerHTML = '<i class="fas fa-chevron-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    window.addEventListener("scroll", () => {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add("active");
        } else {
            scrollToTopBtn.classList.remove("active");
        }
    });

    // Add stars to the background
    function createStars(id, count, size, speed) {
        const stars = document.getElementById(id);
        const width = window.innerWidth;
        const height = window.innerHeight;
        
        for (let i = 0; i < count; i++) {
            const star = document.createElement('div');
            star.style.position = 'absolute';
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            star.style.backgroundColor = '#ffffff';
            star.style.borderRadius = '50%';
            star.style.top = Math.random() * height + 'px';
            star.style.left = Math.random() * width + 'px';
            star.style.animation = `twinkle ${speed}s infinite alternate`;
            star.style.opacity = Math.random();
            stars.appendChild(star);
        }
    }

    createStars('stars', 150, 1, 3);
    createStars('stars2', 75, 2, 5);
    createStars('stars3', 25, 3, 7);

    // Add CSS for twinkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes twinkle {
            0% { opacity: 0.3; }
            100% { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Animate elements on scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.service, .portfolio, .education, .contact-item');
        
        elements.forEach(element => {
            const position = element.getBoundingClientRect();
            
            // If element is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                element.style.animation = `fadeIn 0.6s ease forwards`;
            }
        });
    };

    // Initial check
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Initialize navigation slide
    navSlide();
});

// Portfolio data - easily expandable
const portfolioData = [
  {
    id: 1,
    title: "NeuroClassify v0 (Brain Tumor Classification)",
    image: "./img/project1.png",
    tags: ["Computer Vision", "TensorFlow", "Python", "Deep Learning"],
    "description": "Developed an end-to-end deep learning model to classify brain tumors from MRI images, achieving an impressive 98% accuracy. This project, part of my independent study at Stechoq Academy, involved data preprocessing, image augmentation, and utilizing the EfficientNetB0 architecture with transfer learning techniques.",
    category: "cv",
    link: "https://github.com/ifanhakm/NeuroClassify_modeltraining"
  },
  {
    id: 2,
    title: "Neural Network from Scratch",
    image: "./img/project2.png",
    tags: ["Neural Network", "NumPy", "Python", "Scratch"],
    description: "Developed a functional neural network from the ground up using only Python and NumPy. This project focused on implementing the core mechanics of deep learning, including forward propagation, backpropagation, and gradient descent, without relying on high-level frameworks.",
    category: "cv",
    link: "https://github.com/ifanhakm/neuralnetwork_fromscratch"
  },
  {
    id: 3,
    title: "Marketing Campaign Analysis",
    image: "./img/project3.png",
    tags: ["Machine Learning", "Scikit-learn", "Python", "Classification"],
    description: "Engineered a predictive model to analyze a marketing campaign dataset. This project involved both clustering (K-Means, DBScan) and classification (Random Forest) to predict customer behavior, achieving a final accuracy of 94% after applying PCA and hyperparameter tuning with GridSearchCV.",
    category: "ml",
    link: "https://github.com/ifanhakm/marketcampaign_cluster-classify"
  },
  {
    id: 4,
    title: "Heart Disease Prediction",
    image: "./img/project4.png",
    tags: ["Classification", "Scikit-learn", "Python", "Healthcare"],
    description: "Built a machine learning model to predict the presence of heart disease based on a clinical dataset. This project involved a complete data science workflow, from exploratory data analysis (EDA) and feature engineering to training and evaluating various classification models with Scikit-learn.",
    category: "ml",
    link: "https://github.com/ifanhakm/heartdisease_prediction"
  },
  {
    id: 5,
    title: "DVD Rental's Customer Segmentation Analysis",
    image: "./img/project5.png",
    tags: ["Data Analytics", "Python", "K-Means", "Seaborn"],
    description: "Performed customer segmentation on a DVD rental dataset to identify distinct user groups. This project focused on Exploratory Data Analysis (EDA) and implementing the K-Means clustering model. The model's performance was validated using the Silhouette Score, successfully identifying four primary customer clusters.",
    "category": "ml",
    link: "https://github.com/ifanhakm/dvdrental_analytics"
  },
  {
    id: 6,
    title: "StyloMate (Hackathon Finalist)",
    image: "./img/project6.png",
    tags: ["Project Management", "Business Model", "UI/UX Design", "Generative AI"],
    description: "Led a team as a Project Manager during the Hackvidia Hackathon by Arkavidia 9.0 ITB, successfully becoming a Top 8 finalist. We designed 'StyloMate,' an AI-based application concept for sustainable fashion, inferencing Generative AI model (OOTDiffusion & VitonHD) for Virtual Try-On and Digital Wardrobe Management, complete with a full business model.",
    category: "genai",
    link: "https://github.com/codename-error/stylomate-diffusion"
  },
  {
    id: 7,
    title: "Pricing Strategist at Pristinz Solutions",
    image: "./img/project7.png",
    tags: ["Business Analysis", "Market Research", "Strategy"],
    description: "Developed a comprehensive value-based pricing strategy for an innovative solar window product at Pristinz Solutions. This project involved segmenting the market, analyzing customer needs, and creating a tailored pricing model supported by ROI simulations to enhance product adoption and profitability.",
    category: "business",
    link: "https://www.linkedin.com/posts/ifanhakim_personalgrowth-techtobusiness-pricing-activity-7354427957395795968-njrt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD7QH34BuGhuW9jfzQaWCdsw4N3HdnOdY64"
  },
  {
    id: 8,
    title: "Finote (Backend System)",
    image: "./img/project8.png",
    tags: ["Backend", "FastAPI", "Python", "API"],
    description: "Developed the core backend infrastructure for Finote, a personal finance application, using the high-performance FastAPI framework. Engineered RESTful API endpoints to manage all core functionalities, including user authentication, transaction processing, and data management, creating a robust and scalable foundation for the app.",
    category: "software",
    link: "https://github.com/ifanhakm/backend_finote"
  },
  {
    id: 9,
    title: "Sentiment Analysis on Roblox Reviews",
    image: "./img/project9.png",
    tags: ["Sentiment Analysis", "NLP", "Python", "Scikit-learn"],
    description: "Conducted sentiment analysis on Roblox reviews from the Google Play Store to classify user feedback. This project involved text preprocessing and training multiple machine learning models, including Random Forest, Logistic Regression, and SVM, to achieve high accuracy in sentiment prediction.",
    category: "nlp",
    link: "https://github.com/ifanhakm/sentimentanalysis_roblox-playstore"
  },
  {
    id: 10,
    title: "Sentiment Analysis on 'Pacu Jalur' Memes",
    image: "./img/project10.png",
    tags: ["Sentiment Analysis", "NLP", "Hugging Face", "Data Crawling"],
    description: "Performed sentiment analysis on the 'Pacu Jalur' meme trend on platform X (Twitter). This project involved crawling relevant data and then using a pre-trained Indonesian sentiment analysis model from Hugging Face (w11wo/indonesian-roberta-base-sentiment-classifier) for automated data labeling through model inference, without a training phase.",
    category: "nlp",
    link: "https://github.com/ifanhakm/sentimentlabeling_pacujalur"
  },
  {
    id: 11,
    title: "Air Quality Dashboard",
    image: "./img/project11.png",
    tags: ["Data Analytics", "Python", "Streamlit", "Visualization"],
    description: "Developed an interactive dashboard to analyze and visualize air quality data from various stations in China. This end-to-end data analysis project involved data wrangling, EDA, and deploying a user-friendly dashboard with Streamlit to communicate insights for potential environmental policy decisions.",
    category: "ml",
    link: "https://github.com/ifanhakm/airquality-dashboard"
  },
  {
    id: 12,
    title: "Personal Portfolio Website",
    image: "./img/project12.png",
    tags: ["HTML", "CSS", "JavaScript"],
    description: "Developed a fully responsive personal portfolio website from scratch. This project focused on creating a clean user interface, seamless navigation, and dynamic content rendering using vanilla HTML, CSS, and JavaScript to showcase my skills and projects effectively.",
    category: "software",
    link: "s.id/portfolio-ifanhakim"
  }
];

// Portfolio functionality
function initPortfolio() {
    const portfolioContainer = document.getElementById('portfolio-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const loadMoreBtn = document.getElementById('load-more');
    
    let currentFilter = 'all';
    let visibleProjects = 4; // Number of projects to show initially
    
    // Render portfolio items
    function renderPortfolio(filter = 'all', limit = visibleProjects) {
        portfolioContainer.innerHTML = '';
        
        const filteredProjects = filter === 'all' 
            ? portfolioData 
            : portfolioData.filter(project => project.category === filter);
        
        const projectsToShow = filteredProjects.slice(0, limit);
        
        projectsToShow.forEach(project => {
            const portfolioItem = document.createElement('div');
            portfolioItem.classList.add('portfolio');
            portfolioItem.setAttribute('data-category', project.category);
            
            portfolioItem.innerHTML = `
                <div class="portfolio-cover">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="portfolio-overlay">
                        <a href="${project.link}" class="portfolio-link">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="portfolio-info">
                    <div class="portfolio-title">
                        <h4>${project.title}</h4>
                    </div>
                    <div class="portfolio-tags">
                        ${project.tags.map(tag => `<div>${tag}</div>`).join('')}
                    </div>
                    <p>${project.description}</p>
                </div>
            `;
            
            portfolioContainer.appendChild(portfolioItem);
        });
        
        // Show/hide load more button
        if (loadMoreBtn) {
            if (filteredProjects.length <= limit) {
                loadMoreBtn.style.display = 'none';
            } else {
                loadMoreBtn.style.display = 'block';
            }
        }
    }
    
    // Filter button event listeners
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            currentFilter = button.getAttribute('data-filter');
            visibleProjects = 4; // Reset to initial limit when filter changes
            renderPortfolio(currentFilter, visibleProjects);
        });
    });
    
    // Load more functionality
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleProjects += 4; // Load  more projects
            renderPortfolio(currentFilter, visibleProjects);
        });
    }
    
    // Initial render
    renderPortfolio();
}       

// Initialize portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize portfolio
    initPortfolio();
    
    const form = document.querySelector('.contact-form');

    async function handleSubmit(event) {
        event.preventDefault();
        const submitBtn = form.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Show loading state
        submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
        submitBtn.disabled = true;

        const data = new FormData(event.target);
        fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert("Thank you for your message! I will get back to you soon.");
                form.reset();
            } else {
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form.");
                    }
                })
            }
        }).catch(error => {
            alert("Oops! There was a problem submitting your form.");
        }).finally(() => {
            // Restore button state
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    }

    if (form) {
        form.addEventListener("submit", handleSubmit);
    }

});
