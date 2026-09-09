// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-resources-for-cs189-machine-learning-at-ucb",
        
          title: "Resources for CS189: Machine Learning at UCB",
        
        description: "Resources and notes for CS189: Machine Learning",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/cs189/";
          
        },
      },{id: "post-just-a-moment",
        
          title: 'Just a moment... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://indiahikes.com/blog/bottle-bricking-and-life-lessons-from-treks", "_blank");
          
        },
      },{id: "projects-aangan",
          title: 'Aangan',
          description: "Interior design tool for measured Indian rooms and verified products.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aangan/";
            },},{id: "projects-deepground-ai-studio",
          title: 'DeepGround AI Studio',
          description: "Voice front desk for HVAC and plumbing businesses.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/deepground-ai/";
            },},{id: "projects-lego-building-robot",
          title: 'LEGO Building Robot',
          description: "End-to-end robot arm system for detecting, picking, and stacking custom LEGO-style blocks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/lego-building-robot/";
            },},{id: "projects-naia",
          title: 'Naia',
          description: "Foundational language infrastructure for Indian languages.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/naia/";
            },},{id: "projects-neural-holo",
          title: 'Neural-Holo',
          description: "Real-time holographic imaging with depth estimation and computational optics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/neural-holo/";
            },},{id: "projects-restaurantier",
          title: 'Restaurantier',
          description: "Menu-cost and pricing tool for restaurants.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/restaurantier/";
            },},{id: "projects-verilab",
          title: 'Verilab',
          description: "Clinical lab autoverification software that releases normal results and holds exceptions for review.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/verilab/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%72%69%63%68%69%6B.%70%61%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/richik-p", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/richroxs", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/richikpal", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0000-0245-6835", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=ARe0fqQAAAAJ&hl=en", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
