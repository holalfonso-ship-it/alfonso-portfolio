import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { ViteReactSSG } from "vite-react-ssg";
import { Helmet, HelmetProvider } from "react-helmet-async";
import * as React from "react";
import { useRef, useState, useEffect, createContext, useContext } from "react";
import { Link, useParams, useLocation, BrowserRouter, Routes, Route } from "react-router-dom";
import { Download, ChevronDown, Zap, Palette, Layers, Code, Briefcase, BarChart, LineChart, Globe, Award, ChevronLeft, ChevronRight, MessageSquare, Linkedin, Instagram, SendIcon, Mail, Phone, MapPin, ArrowRight, ExternalLink, X, ZoomIn, ArrowLeft, Home, Clock, Users, CheckCheck, Workflow, Share, Component, FileCode, LayoutDashboard, Smartphone, PieChart, AreaChart, Search, Presentation, TrendingUp, BarChart3, Lightbulb, RefreshCw, Moon, Sun, FileText, Menu, User, ArrowUp, Eye, Loader2, Trash2, CheckCircle, Upload, Image, ChevronsUpDown, GraduationCap, Languages, Trophy } from "lucide-react";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Slot } from "@radix-ui/react-slot";
import { createClient } from "@supabase/supabase-js";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { toast as toast$1 } from "sonner";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
import useEmblaCarousel from "embla-carousel-react";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import * as ToastPrimitives from "@radix-ui/react-toast";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";
const Hero = () => {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);
  const handleScrollClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  const handleDownloadCV = () => {
    window.open(
      "https://gefsvwcyxxgyfaandyjp.supabase.co/storage/v1/object/public/cv_files/cv-1754558816430.pdf",
      "_blank"
    );
  };
  return /* @__PURE__ */ jsxs("section", { id: "home", ref: heroRef, className: "min-h-screen flex flex-col justify-center items-center px-6 md:px-12 py-32 relative overflow-hidden pt-20 md:pt-32", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(52,152,219,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(52,152,219,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-60" }),
    /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl" }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl w-full mx-auto z-10", children: /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col items-start", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm md:text-base font-medium tracking-wider mb-2 md:mb-6 inline-flex items-center py-1 px-4 rounded-full bg-primary/10 text-primary backdrop-blur-sm animate-fade-in", children: "Design Ops Specialist" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row mb-8 md:mb-16 w-full", children: [
        /* @__PURE__ */ jsxs("div", { className: "w-full md:w-3/4", children: [
          /* @__PURE__ */ jsxs("h1", { className: "text-6xl md:text-8xl xl:text-9xl font-display font-bold leading-tight md:leading-none tracking-tighter mb-6 md:mb-8", children: [
            /* @__PURE__ */ jsx("span", { className: "block text-2xl md:text-3xl tracking-widest text-muted-foreground mb-2 opacity-0 animate-slide-up animation-delay-200 font-bold", children: "Hi, I am Alfonso" }),
            /* @__PURE__ */ jsx("span", { className: "block opacity-0 animate-slide-up animation-delay-500", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mx-0 px-[10px]", children: "DesignOps Lead" }) }),
            /* @__PURE__ */ jsxs("span", { className: "block opacity-0 animate-slide-up animation-delay-700", children: [
              "& Senior ",
              /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Product" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "block opacity-0 animate-slide-up animation-delay-900", children: /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Designer" }) })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-slide-up animation-delay-1000", children: "Optimizing design operations and scaling systems to accelerate product delivery by 30%" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex md:w-1/4 items-end justify-end opacity-0 animate-fade-in animation-delay-1200", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-3 text-right", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Barcelona" }),
            /* @__PURE__ */ jsx("div", { className: "w-16 h-[1px] bg-muted-foreground/30" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Design Systems" }),
            /* @__PURE__ */ jsx("div", { className: "w-12 h-[1px] bg-muted-foreground/30" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-end gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-xs uppercase tracking-widest text-muted-foreground", children: "Product design" }),
            /* @__PURE__ */ jsx("div", { className: "w-8 h-[1px] bg-muted-foreground/30" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-start gap-6 md:gap-12 mt-4 md:mt-0 w-full", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: handleDownloadCV,
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95 relative overflow-hidden group opacity-0 animate-slide-up animation-delay-1200",
            children: [
              /* @__PURE__ */ jsx("span", { className: "absolute inset-0 w-full h-full bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" }),
              /* @__PURE__ */ jsxs("span", { className: "relative flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5" }),
                "Download my CV"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "text-muted-foreground flex flex-col gap-1 opacity-0 animate-slide-up animation-delay-1400", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Specialized in" }),
          /* @__PURE__ */ jsx("p", { className: "text-base", children: "DesignOps · Design System Governance · Product Design" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "absolute bottom-12 left-0 right-0 flex justify-center opacity-0 animate-fade-in animation-delay-2000", children: /* @__PURE__ */ jsx("button", { onClick: handleScrollClick, className: "p-2 text-muted-foreground animate-float", "aria-label": "Scroll down", children: /* @__PURE__ */ jsx(ChevronDown, { size: 24 }) }) })
  ] });
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge({ className, variant, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: cn(badgeVariants({ variant }), className), ...props });
}
const AnimatedText = ({
  text,
  className,
  once = false,
  delay = 0,
  threshold = 0.5
}) => {
  const textRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-text-reveal");
            }, delay);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            entry.target.classList.remove("animate-text-reveal");
          }
        });
      },
      { threshold }
    );
    const currentRef = textRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, delay, threshold]);
  return /* @__PURE__ */ jsx(
    "span",
    {
      ref: textRef,
      className: cn(
        "inline-block opacity-0 overflow-hidden pb-1",
        // Added pb-1 for extra space below text
        className
      ),
      children: text
    }
  );
};
const aiCleanerHero = "/assets/hero-aicleaner-CCavbvc4.png";
const mobilesImg = "/assets/2nd-aicleaner-CeSfeVtW.png";
const metricsImg = "/assets/3rd-aicleaner-BSj5mhiH.png";
const goalImg = "/assets/4to-aicleaner-DyvvtgfX.png";
const uiKitImg = "/assets/designsistem-aicleaner-h1-b1Y6_.png";
const useScrollReveal$1 = (threshold = 0.12) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return {
    ref,
    className: `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
  };
};
const SectionLabel$1 = ({ text }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
  /* @__PURE__ */ jsx("span", { className: "inline-block w-6 h-px bg-muted-foreground/40" }),
  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: text })
] });
const FullImage$1 = ({
  src,
  alt,
  caption,
  priority = false
}) => {
  const reveal = useScrollReveal$1(0.05);
  return /* @__PURE__ */ jsxs("div", { ref: reveal.ref, className: `my-14 md:my-20 ${reveal.className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden rounded-xl", style: { aspectRatio: "16/9" }, children: /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        loading: priority ? "eager" : "lazy",
        className: "w-full h-full object-cover object-center"
      }
    ) }),
    caption && /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground pl-4 border-l border-border/40 leading-relaxed max-w-2xl", children: caption })
  ] });
};
const FeaturedCaseStudy = () => {
  const tags = ["DesignOps", "AI Integration", "Team Leadership"];
  const actionMilestones = [
    {
      num: "01",
      title: "Data-Driven Insights",
      description: "Leveraged Amplitude for cohort analysis, identifying friction points that led to a 15% increase in user retention."
    },
    {
      num: "02",
      title: "AI-Powered Prototyping",
      description: "Integrated Figma AI and Gemini Copilots to reduce high-fidelity prototyping time by 40%."
    },
    {
      num: "03",
      title: "Cross-Functional Leadership",
      description: "Led a cross-functional team of 6 designers using Synthetic Users for rapid market validation before development."
    }
  ];
  const results = [
    {
      value: "+2.5GB",
      label: "Storage recovered per user",
      description: "Average gain per session after onboarding — up from 340MB with the previous manual flow."
    },
    {
      value: "4.5",
      label: "App Store rating",
      description: "Sustained across US and China markets, reaching Top 100 in the Utilities category."
    },
    {
      value: "+30%",
      label: "Delivery speed",
      description: "Faster design-to-dev cycles achieved through the AI-assisted DesignOps workflow."
    },
    {
      value: "+25%",
      label: "Team velocity",
      description: "Increase in sprint output, combined with a 20% improvement in stakeholder satisfaction scores."
    }
  ];
  const headerReveal = useScrollReveal$1(0.05);
  const situation = useScrollReveal$1();
  const task = useScrollReveal$1();
  const action = useScrollReveal$1();
  const actionItems = [useScrollReveal$1(), useScrollReveal$1(), useScrollReveal$1()];
  const impact = useScrollReveal$1();
  const m0 = useScrollReveal$1();
  const m1 = useScrollReveal$1();
  const m2 = useScrollReveal$1();
  const m3 = useScrollReveal$1();
  const metricsReveal = [m0, m1, m2, m3];
  const techStack = useScrollReveal$1();
  const cellBorder = [
    "border-b border-r border-border/20 pb-10 pr-8 md:pr-14",
    "border-b border-border/20 pb-10 pl-8 md:pl-14",
    "pt-10 border-r border-border/20 pr-8 md:pr-14",
    "pt-10 pl-8 md:pl-14"
  ];
  return /* @__PURE__ */ jsxs("section", { id: "case-study", className: "py-28 md:py-36 bg-background", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        ref: headerReveal.ref,
        className: `px-6 md:px-12 max-w-7xl mx-auto mb-14 md:mb-20 ${headerReveal.className}`,
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit inline-block mb-6", children: "Featured Case Study" }),
          /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6", children: /* @__PURE__ */ jsx(
            AnimatedText,
            {
              text: "AI Cleaner: Redefining Inbox Hygiene with AI",
              className: "inline-block",
              once: true
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-8", children: tags.map((tag) => /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              className: "text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary",
              children: tag
            },
            tag
          )) }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-border/30", children: [
            { label: "Role", value: "Lead Product Designer" },
            { label: "Scope", value: "iOS App · Global" },
            { label: "Tools", value: "Figma AI · Amplitude · Synthetic Users" },
            { label: "Year", value: "2024" }
          ].map(({ label, value }) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-1", children: label }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: value })
          ] }, label)) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "w-full px-0 md:px-6 lg:px-12 max-w-7xl mx-auto mb-0", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "relative w-full overflow-hidden rounded-none md:rounded-2xl",
        style: { aspectRatio: "16/9" },
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: aiCleanerHero,
              alt: "AI Cleaner — main app interface overview",
              loading: "eager",
              className: "w-full h-full object-cover object-center"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto pt-16 md:pt-24 pb-4 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed", children: [
      "We live in an era of",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "digital obesity" }),
      ". Our iPhones have become cluttered archives of duplicate memories, forgotten screenshots, and endless junk — draining both storage and mental clarity."
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
      FullImage$1,
      {
        src: mobilesImg,
        alt: "AI Cleaner across three key screens: Smart Scan, Storage Breakdown, one-tap Clean",
        caption: "Final UI across the three core screens — Smart Scan, Storage Breakdown, and one-tap Clean. The full flow was reduced from 7 steps to 2.",
        priority: true
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: situation.ref,
        className: `py-16 md:py-24 border-t border-border/20 ${situation.className}`,
        children: [
          /* @__PURE__ */ jsx(SectionLabel$1, { text: "The Problem" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "Digital Anxiety & Decision Fatigue" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
                "Users suffered from",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Digital Anxiety" }),
                " — the constant stress of full-storage notifications — compounded by",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Decision Fatigue" }),
                " when manually sorting thousands of files."
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
                "As Lead Product Designer, I identified these psychological barriers as the core UX problem, shifting our strategy from a simple utility to a",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "cognitive-relief tool" }),
                "."
              ] })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
      FullImage$1,
      {
        src: metricsImg,
        alt: "Amplitude dashboard showing cohort behaviour and drop-off points",
        caption: "Amplitude cohort analysis — the permissions screen had a 67% drop-off rate. Redesigning this single step recovered the majority of lost activations."
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: task.ref,
        className: `py-16 md:py-24 border-t border-border/20 ${task.className}`,
        children: [
          /* @__PURE__ */ jsx(SectionLabel$1, { text: "The Goal" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "Cultural UX Adaptation for Global Scale" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
                "My mission was to scale the Design System while leading expansion into the",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Chinese market" }),
                " — a challenge that demanded",
                " ",
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Cultural UX Adaptation" }),
                ", not just translation."
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: "This meant rethinking information density, color semantics, trust signals, and payment flows to align with local conventions — WeChat, Alipay, and Chinese App Store guidelines." })
            ] })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
      FullImage$1,
      {
        src: goalImg,
        alt: "Western vs Chinese market UI variants side by side",
        caption: "Western vs. China variant — same core system, adapted trust signals, denser information layout, and localised payment entry points for WeChat Pay and Alipay."
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: action.ref,
        className: `py-16 md:py-24 border-t border-border/20 ${action.className}`,
        children: [
          /* @__PURE__ */ jsx(SectionLabel$1, { text: "Action" }),
          /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight mb-16 max-w-xl", children: "Merging DesignOps, AI & Data Intelligence" }),
          /* @__PURE__ */ jsx("div", { className: "divide-y divide-border/20", children: actionMilestones.map((milestone, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              ref: actionItems[index].ref,
              className: `grid grid-cols-1 md:grid-cols-[64px_2fr_5fr] gap-4 md:gap-12 items-start py-10 ${actionItems[index].className}`,
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold text-muted-foreground/30 leading-none pt-1", children: milestone.num }),
                /* @__PURE__ */ jsx("h4", { className: "text-xl md:text-2xl font-display font-semibold tracking-tight", children: milestone.title }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: milestone.description })
              ]
            },
            index
          )) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(
      FullImage$1,
      {
        src: uiKitImg,
        alt: "AI Cleaner design system — full component library overview",
        caption: "AI Cleaner Design System — 120+ components covering both market variants, built in Figma with Auto Layout and tokenised variables for light and dark mode."
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: impact.ref,
        className: `py-16 md:py-24 border-t border-border/20 ${impact.className}`,
        children: [
          /* @__PURE__ */ jsx(SectionLabel$1, { text: "Impact" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start mb-16", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "Delivering Measurable Business & User Value" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: "From activation rates to App Store rankings, every key metric moved in the right direction — validated across two markets with significantly different user behaviours and expectations." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 border-t border-border/20", children: results.map((result, index) => /* @__PURE__ */ jsxs(
            "div",
            {
              ref: metricsReveal[index].ref,
              className: `flex flex-col gap-3 ${cellBorder[index]} ${metricsReveal[index].className}`,
              children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "font-display font-black leading-none text-foreground",
                    style: { fontSize: "clamp(3.2rem, 6vw, 5rem)" },
                    children: result.value
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground tracking-tight", children: result.label }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs", children: result.description })
              ]
            },
            index
          )) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs(
      "div",
      {
        ref: techStack.ref,
        className: `py-16 md:py-24 border-t border-border/20 ${techStack.className}`,
        children: [
          /* @__PURE__ */ jsx(SectionLabel$1, { text: "Tech Stack & Skills" }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
            {
              title: "Product Strategy",
              pills: [
                "Growth Loops",
                "Data-Informed Design (Amplitude)",
                "Market Expansion (APAC/China)"
              ]
            },
            {
              title: "AI & DesignOps",
              pills: [
                "Figma AI",
                "Gemini Copilots",
                "Synthetic Users",
                "Automated Prototyping"
              ]
            },
            {
              title: "UX/UI Research",
              pills: [
                "Cohort Analysis",
                "Cross-cultural UX",
                "A/B Testing",
                "Design Systems Scaling"
              ]
            },
            {
              title: "Tools",
              pills: ["Figma", "Amplitude", "Jira", "Slack", "Notion"]
            }
          ].map((category) => /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4", children: category.title }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.pills.map((pill) => /* @__PURE__ */ jsx(
              "span",
              {
                className: "px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30",
                children: pill
              },
              pill
            )) })
          ] }, category.title)) })
        ]
      }
    ) })
  ] });
};
const heroImg = "/assets/1er-wanup-CCftO5G9.png";
const screen2Img = "/assets/2nd-wanup-DCLge0eD.png";
const screen3Img = "/assets/3rd-wanup-Hhn_q87N.png";
const screen4Img = "/assets/4to-wanup-Dl7Olrg6.png";
const screen5Img = "/assets/5to-wanup-B2ThkH2l.png";
const useScrollReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return {
    ref,
    className: `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`
  };
};
const SectionLabel = ({ text }) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-5", children: [
  /* @__PURE__ */ jsx("span", { className: "inline-block w-6 h-px bg-muted-foreground/40" }),
  /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: text })
] });
const FullImage = ({ src, alt, caption, priority = false }) => {
  const reveal = useScrollReveal(0.05);
  return /* @__PURE__ */ jsxs("div", { ref: reveal.ref, className: `my-14 md:my-20 ${reveal.className}`, children: [
    /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden rounded-xl bg-secondary/40", style: { aspectRatio: "16/9" }, children: src ? /* @__PURE__ */ jsx("img", { src, alt, loading: priority ? "eager" : "lazy", className: "w-full h-full object-cover object-center" }) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex flex-col items-center justify-center gap-3", children: /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[0.1em] uppercase text-muted-foreground/40", children: alt }) }) }),
    caption && /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground pl-4 border-l border-border/40 leading-relaxed max-w-2xl", children: caption })
  ] });
};
const WanupCaseStudy = () => {
  const tags = ["B2C Product Design", "Booking Experience", "Design System"];
  const actionMilestones = [
    { num: "01", title: "User Research & Booking Audit", description: "Conducted a full audit of the existing booking funnel with session recordings and heatmaps. Identified 4 critical drop-off points between hotel search and checkout confirmation." },
    { num: "02", title: "Modular Design System", description: "Built a scalable component library covering hotel cards, availability selectors, checkout forms, and the loyalty dashboard — enabling the team to ship new features 35% faster." },
    { num: "03", title: "Loyalty & Retention Layer", description: "Designed the Cash Rewards and Member Get Member flows from scratch, creating a retention loop that increased repeat bookings and drove organic referral growth within the first quarter post-launch." }
  ];
  const results = [
    { value: "+42%", label: "Checkout completion rate", description: "Funnel conversion improved after simplifying the availability selection step and reducing form fields by 30%." },
    { value: "28%", label: "Booking abandonment", description: "Drop-off rate at the hotel detail page reduced by surfacing availability and pricing earlier in the flow." },
    { value: "+3.1×", label: "Repeat booking rate", description: "Users enrolled in Cash Rewards returned to book again at 3× the rate of non-enrolled users within 90 days." },
    { value: "4.7", label: "User satisfaction score", description: "Post-booking NPS improved significantly after redesigning the confirmation flow and booking detail screens." }
  ];
  const headerReveal = useScrollReveal(0.05);
  const situation = useScrollReveal();
  const task = useScrollReveal();
  const action = useScrollReveal();
  const a0 = useScrollReveal();
  const a1 = useScrollReveal();
  const a2 = useScrollReveal();
  const actionItems = [a0, a1, a2];
  const impact = useScrollReveal();
  const m0 = useScrollReveal();
  const m1 = useScrollReveal();
  const m2 = useScrollReveal();
  const m3 = useScrollReveal();
  const metricsReveal = [m0, m1, m2, m3];
  const techStack = useScrollReveal();
  const cellBorder = [
    "border-b border-r border-border/20 pb-10 pr-8 md:pr-14",
    "border-b border-border/20 pb-10 pl-8 md:pl-14",
    "pt-10 border-r border-border/20 pr-8 md:pr-14",
    "pt-10 pl-8 md:pl-14"
  ];
  return /* @__PURE__ */ jsxs("section", { id: "case-study-wanup", className: "py-28 md:py-36 bg-background", children: [
    /* @__PURE__ */ jsxs("div", { ref: headerReveal.ref, className: `px-6 md:px-12 max-w-7xl mx-auto mb-14 md:mb-20 ${headerReveal.className}`, children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tracking-wider py-1 px-4 rounded-full bg-primary/10 text-primary w-fit inline-block mb-6", children: "Case Study · B2C" }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight max-w-4xl leading-[1.05] mb-6", children: /* @__PURE__ */ jsx(AnimatedText, { text: "Wanup: Redesigning the Hotel Booking Experience", className: "inline-block", once: true }) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 mb-8", children: tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-sm px-4 py-1.5 bg-secondary/80 hover:bg-secondary", children: tag }, tag)) }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-x-10 gap-y-4 pt-6 border-t border-border/30", children: [{ label: "Role", value: "Lead Product Designer" }, { label: "Scope", value: "Web · Desktop & Mobile" }, { label: "Tools", value: "Figma · Hotjar · Notion" }, { label: "Year", value: "2024" }].map(({ label, value }) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "text-[11px] tracking-[0.1em] uppercase text-muted-foreground mb-1", children: label }),
        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-foreground", children: value })
      ] }, label)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "w-full px-0 md:px-6 lg:px-12 max-w-7xl mx-auto mb-0", children: /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden rounded-none md:rounded-2xl bg-secondary/40", style: { aspectRatio: "16/9" }, children: [
      /* @__PURE__ */ jsx("img", { src: heroImg, alt: "Wanup hero", className: "w-full h-full object-cover object-center" }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto pt-16 md:pt-24 pb-4 text-center", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed", children: [
      "Booking a hotel should feel effortless. Instead, most platforms bury availability behind multiple clicks, overwhelm users with options, and lose them at checkout.",
      " ",
      /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Wanup" }),
      " set out to fix that — and add a loyalty layer that actually makes users come back."
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(FullImage, { src: screen2Img, alt: "Hotel detail page — availability, rooms and booking widget", caption: "The redesigned hotel detail page — availability, room options, and the booking CTA are all visible above the fold, eliminating the need to scroll before deciding." }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { ref: situation.ref, className: `py-16 md:py-24 border-t border-border/20 ${situation.className}`, children: [
      /* @__PURE__ */ jsx(SectionLabel, { text: "The Problem" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "A Broken Funnel & Zero Retention" }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
            "The original platform had a ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "61% abandonment rate" }),
            " at the hotel detail page — users couldn't find availability without navigating through three separate screens, and the checkout process had 11 form steps with no progress indicator."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
            "Beyond acquisition, there was ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "no retention strategy" }),
            ": no loyalty programme, no saved favourites, no post-booking engagement. Every user was effectively a first-time user, regardless of how many times they had booked before."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(FullImage, { src: screen3Img, alt: "Checkout flow — streamlined form and progress indicator", caption: "Checkout redesign — 11 steps collapsed into 3 stages with a persistent progress indicator. Form fields reduced from 18 to 11 by removing non-essential data collection." }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { ref: task.ref, className: `py-16 md:py-24 border-t border-border/20 ${task.className}`, children: [
      /* @__PURE__ */ jsx(SectionLabel, { text: "The Goal" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "Convert Better. Keep Users Longer." }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
            "The brief had two distinct goals: first, reduce friction in the booking funnel to improve conversion — specifically targeting the hotel detail page and checkout completion rate. Second, design a ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "loyalty and retention system" }),
            " that gave users a reason to return to Wanup instead of switching to a competitor for their next stay."
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: [
            "Both goals required a ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "scalable Design System" }),
            " — the existing UI had no shared components, making every new screen a from-scratch effort that slowed the team and created visual inconsistency across the product."
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(FullImage, { src: screen4Img, alt: "Cash Rewards and Member Get Member loyalty dashboard", caption: "Cash Rewards dashboard and Member Get Member flow — users earn credit on every booking and unlock referral bonuses, creating a flywheel that drives both retention and organic acquisition." }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { ref: action.ref, className: `py-16 md:py-24 border-t border-border/20 ${action.className}`, children: [
      /* @__PURE__ */ jsx(SectionLabel, { text: "Action" }),
      /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight mb-16 max-w-xl", children: "Funnel First, Loyalty Second, System Always" }),
      /* @__PURE__ */ jsx("div", { className: "divide-y divide-border/20", children: actionMilestones.map((milestone, index) => /* @__PURE__ */ jsxs("div", { ref: actionItems[index].ref, className: `grid grid-cols-1 md:grid-cols-[64px_2fr_5fr] gap-4 md:gap-12 items-start py-10 ${actionItems[index].className}`, children: [
        /* @__PURE__ */ jsx("span", { className: "font-display text-2xl font-bold text-muted-foreground/30 leading-none pt-1", children: milestone.num }),
        /* @__PURE__ */ jsx("h4", { className: "text-xl md:text-2xl font-display font-semibold tracking-tight", children: milestone.title }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg leading-relaxed", children: milestone.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx(FullImage, { src: screen5Img, alt: "Wanup design system — component library and token structure", caption: "Wanup Design System — a unified component library spanning hotel cards, booking widgets, forms, loyalty UI, and user account screens. Built with tokenised variables for consistent theming." }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { ref: impact.ref, className: `py-16 md:py-24 border-t border-border/20 ${impact.className}`, children: [
      /* @__PURE__ */ jsx(SectionLabel, { text: "Impact" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[2fr_5fr] gap-8 md:gap-20 items-start mb-16", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-3xl md:text-4xl font-display font-bold tracking-tight leading-tight", children: "Measurable Conversion & Retention Gains" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg md:text-xl leading-relaxed", children: "Results were tracked across a 90-day post-launch window covering both conversion metrics from the redesigned funnel and retention data from the new loyalty layer — measured against the same cohort from the previous quarter." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 border-t border-border/20", children: results.map((result, index) => /* @__PURE__ */ jsxs("div", { ref: metricsReveal[index].ref, className: `flex flex-col gap-3 ${cellBorder[index]} ${metricsReveal[index].className}`, children: [
        /* @__PURE__ */ jsx("span", { className: "font-display font-black leading-none text-foreground", style: { fontSize: "clamp(3.2rem, 6vw, 5rem)" }, children: result.value }),
        /* @__PURE__ */ jsx("p", { className: "text-base font-semibold text-foreground tracking-tight", children: result.label }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground leading-relaxed max-w-xs", children: result.description })
      ] }, index)) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { ref: techStack.ref, className: `py-16 md:py-24 border-t border-border/20 ${techStack.className}`, children: [
      /* @__PURE__ */ jsx(SectionLabel, { text: "Skills & Tools" }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-10", children: [
        { title: "UX Strategy", pills: ["Funnel Optimisation", "User Journey Mapping", "Conversion Rate Optimisation"] },
        { title: "Product Design", pills: ["Interaction Design", "Responsive Web", "Booking Flow Design", "Loyalty UX"] },
        { title: "Research & Validation", pills: ["Session Recording (Hotjar)", "Usability Testing", "A/B Testing", "Heatmap Analysis"] },
        { title: "Tools", pills: ["Figma", "Hotjar", "Notion", "Jira", "Zeroheight"] }
      ].map((category) => /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-xs font-semibold uppercase tracking-[0.18em] text-primary mb-4", children: category.title }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: category.pills.map((pill) => /* @__PURE__ */ jsx("span", { className: "px-4 py-1.5 text-sm rounded-full bg-secondary/60 text-foreground/80 border border-border/30", children: pill }, pill)) })
      ] }, category.title)) })
    ] }) })
  ] });
};
const aiCleanerCover = "/assets/Cover-icleaner-DZ5EVhA0.png";
const wanupCover = "/assets/Cover-wanup-DEyiXQtF.png";
const TABS = [
  {
    id: "ai-cleaner",
    type: "B2C · iOS App",
    year: "2024",
    title: "AI Cleaner",
    thumb: aiCleanerCover,
    thumbAlt: "AI Cleaner app interface",
    tags: ["DesignOps", "AI Integration", "Team Leadership"],
    metrics: [
      { value: "4.5", label: "App Store" },
      { value: "+30%", label: "Delivery speed" },
      { value: "+2.5GB", label: "Per user" }
    ]
  },
  {
    id: "wanup",
    type: "B2C · Web",
    year: "2024",
    title: "Wanup",
    thumb: wanupCover,
    thumbAlt: "Wanup hotel booking platform",
    tags: ["Booking Experience", "Design System", "Loyalty UX"],
    metrics: [
      { value: "+42%", label: "Checkout rate" },
      { value: "28%", label: "Abandonment" },
      { value: "3.1×", label: "Repeat booking" }
    ]
  }
];
const TabCard = ({ tab, isActive, onClick }) => /* @__PURE__ */ jsxs(
  "button",
  {
    onClick,
    className: `
      group w-full text-left rounded-xl overflow-hidden border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      ${isActive ? "border-foreground/20 bg-background" : "border-border/20 bg-secondary/20 hover:bg-secondary/40 hover:border-border/30 opacity-60 hover:opacity-80"}
    `,
    children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full overflow-hidden", style: { aspectRatio: "16/7" }, children: [
        tab.thumb ? /* @__PURE__ */ jsx(
          "img",
          {
            src: tab.thumb,
            alt: tab.thumbAlt,
            className: "w-full h-full object-cover object-center"
          }
        ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full bg-secondary/60 flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-[11px] tracking-[0.1em] uppercase text-muted-foreground/30", children: tab.thumbAlt }) }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute bottom-0 left-0 right-0 h-[2px] bg-foreground transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-1", children: [
          tab.type,
          " · ",
          tab.year
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-3", children: [
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: `font-display font-bold leading-tight transition-colors ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`,
              style: { fontSize: "clamp(1.05rem, 2vw, 1.25rem)" },
              children: tab.title
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center mt-0.5 transition-all duration-200 ${isActive ? "bg-foreground border-foreground text-background" : "border-border/30 text-muted-foreground"}`,
              children: isActive ? /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M5.5 2v7M2 6l3.5 3.5L9 6", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) }) : /* @__PURE__ */ jsx("svg", { width: "11", height: "11", viewBox: "0 0 11 11", fill: "none", children: /* @__PURE__ */ jsx("path", { d: "M2 9L9 2M9 2H3.5M9 2v5.5", stroke: "currentColor", strokeWidth: "1.3", strokeLinecap: "round", strokeLinejoin: "round" }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1.5 mb-4", children: tab.tags.map((tag) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "text-[11px] px-3 py-1 rounded-full border border-border/30 text-muted-foreground",
            children: tag
          },
          tag
        )) }),
        /* @__PURE__ */ jsx("div", { className: "flex gap-5 pt-4 border-t border-border/20", children: tab.metrics.map(({ value, label }) => /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx(
            "p",
            {
              className: `font-display font-bold leading-none mb-0.5 transition-colors ${isActive ? "text-foreground" : "text-muted-foreground"}`,
              style: { fontSize: "clamp(1rem, 1.8vw, 1.2rem)" },
              children: value
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "text-[10px] uppercase tracking-[0.07em] text-muted-foreground", children: label })
        ] }, label)) })
      ] })
    ]
  }
);
const CaseStudyTabs = () => {
  const [activeId, setActiveId] = useState(TABS[0].id);
  return /* @__PURE__ */ jsxs("section", { id: "case-study", className: "bg-background", children: [
    /* @__PURE__ */ jsxs("div", { className: "px-6 md:px-12 max-w-7xl mx-auto pt-28 md:pt-36 pb-10 md:pb-14", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block w-6 h-px bg-muted-foreground/40" }),
        /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: "Selected work" })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight leading-[1.05]", children: "Case studies" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "px-6 md:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: TABS.map((tab) => /* @__PURE__ */ jsx(
      TabCard,
      {
        tab,
        isActive: tab.id === activeId,
        onClick: () => setActiveId(tab.id)
      },
      tab.id
    )) }) }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "animate-in fade-in slide-in-from-bottom-3 duration-500",
        children: [
          activeId === "ai-cleaner" && /* @__PURE__ */ jsx(FeaturedCaseStudy, {}),
          activeId === "wanup" && /* @__PURE__ */ jsx(WanupCaseStudy, {})
        ]
      },
      activeId
    )
  ] });
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(
      Comp,
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";
const ExperienceSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Experience" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border-2 border-primary bg-card/50 relative shadow-md", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -top-3 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full", children: "Present" }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Senior Product Designer / DesignOPS" }),
            /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Leadtech group" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
            /* @__PURE__ */ jsx("p", { children: "Oct. 2018 - Present" }),
            /* @__PURE__ */ jsx("p", { children: "Barcelona" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Team Leadership: Mentor and coach a team of 6 designers, building a culture focused on AI integration and continuous process improvement." }),
          /* @__PURE__ */ jsx("li", { children: "Design Systems: Established and scaled a company-wide Design System, accelerating product delivery by 30%." }),
          /* @__PURE__ */ jsx("li", { children: "Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps." }),
          /* @__PURE__ */ jsx("li", { children: "Efficiency: Implemented DesignOps frameworks that streamlined collaboration,reducing delivery friction and increasing velocity by 25%." }),
          /* @__PURE__ */ jsx("li", { children: "Developed dashboards and data visualizations, increasing stakeholder engagement by 20%." }),
          /* @__PURE__ */ jsx("li", { children: "Applied quantitative and qualitative data analysis to measure and enhance user experience." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Senior UX Designer" }),
            /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Natevoo" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
            /* @__PURE__ */ jsx("p", { children: "Jun. 2018 - Oct. 2018" }),
            /* @__PURE__ */ jsx("p", { children: "Barcelona - 5 mos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Conceptualized and designed digital products focused on user experience." }),
          /* @__PURE__ */ jsx("li", { children: "Applied UX research methodologies to validate solutions and improve usability." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Senior Product Designer" }),
            /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Wanup" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
            /* @__PURE__ */ jsx("p", { children: "Aug. 2016 - Jun. 2018" }),
            /* @__PURE__ */ jsx("p", { children: "Barcelona - 1 yrs 11 mos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Art direction for digital and offline projects." }),
          /* @__PURE__ */ jsx("li", { children: "Designed user experiences for e-commerce and SaSS platform marketing materials." }),
          /* @__PURE__ */ jsx("li", { children: "Managed a team of 4 designers to ensure brand identity alignment." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-4", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Senior Designer" }),
            /* @__PURE__ */ jsx("p", { className: "text-primary", children: "PIMPAM Estudio" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
            /* @__PURE__ */ jsx("p", { children: "Mar. 2011 - Aug. 2016" }),
            /* @__PURE__ */ jsx("p", { children: "Valencia - 5 yrs 6 mos" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2 list-disc pl-5 text-muted-foreground", children: [
          /* @__PURE__ */ jsx("li", { children: "Developed applications with Digital Publishing Suite and designed print publications." }),
          /* @__PURE__ */ jsx("li", { children: "Notable clients: Adidas, Amnesia, Gandia Blasco, among others." })
        ] })
      ] })
    ] })
  ] });
};
const EducationSection = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Education" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "DesignOps Course" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Elisava" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
          /* @__PURE__ */ jsx("p", { children: "Feb 2024 - March 2024" }),
          /* @__PURE__ */ jsx("p", { children: "Barcelona, Spain" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Postgraduate in User Experience (UX) Design" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "UOC" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
          /* @__PURE__ */ jsx("p", { children: "2017 - 2018" }),
          /* @__PURE__ */ jsx("p", { children: "Barcelona, Spain" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "BA - Graphic Designer" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Sheffield Hallam University" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Typography - Advertising - Design - Art" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
          /* @__PURE__ */ jsx("p", { children: "2007 - 2008" }),
          /* @__PURE__ */ jsx("p", { children: "Sheffield, UK" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "p-6 rounded-xl border border-border bg-card/50", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-start justify-between mb-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold", children: "Foundation Degree Design" }),
          /* @__PURE__ */ jsx("p", { className: "text-primary", children: "Sheffield Hallam University" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Typography - Design - Art - Fundamentals" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground mt-2 md:mt-0 md:text-right", children: [
          /* @__PURE__ */ jsx("p", { children: "2005 - 2007" }),
          /* @__PURE__ */ jsx("p", { children: "Sheffield, UK" })
        ] })
      ] }) })
    ] })
  ] });
};
const SUPABASE_URL = "https://gefsvwcyxxgyfaandyjp.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlZnN2d2N5eHhneWZhYW5keWpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyMjYwNzUsImV4cCI6MjA1NzgwMjA3NX0.bqoDZOLq86zQ9GjaEomYAhBGkBiiGiZj-Kn_qD9xX5Q";
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
const About = () => {
  const [cvUrl, setCvUrl] = useState(null);
  const [activeTab, setActiveTab] = useState("experience");
  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        const { data, error } = await supabase.storage.from("cv_files").list("", {
          limit: 1,
          sortBy: { column: "created_at", order: "desc" }
        });
        if (error) throw error;
        if (data && data.length > 0) {
          const latestFile = data[0];
          const { data: { publicUrl } } = supabase.storage.from("cv_files").getPublicUrl(latestFile.name);
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error("Error fetching CV:", error);
      }
    };
    fetchLatestCV();
  }, []);
  return /* @__PURE__ */ jsx("section", { id: "about", className: "py-20 md:py-32 px-6 md:px-12 bg-gradient-to-b from-background to-background/90", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary animate-pulse", children: "About Me" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold tracking-tight mb-6", children: /* @__PURE__ */ jsx(AnimatedText, { text: "Professional Background", className: "inline-block", once: true }) }),
      /* @__PURE__ */ jsx("div", { className: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Digital product designer with extensive experience in DesignOps and Product design, specializing in optimizing workflows and enhancing efficiency within design teams." }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-4 space-y-12", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "default",
            size: "lg",
            className: "w-full group transition-all duration-300 hover:shadow-lg bg-gradient-to-r from-primary to-primary/80",
            onClick: () => window.open(cvUrl || "/alfonso-cv.pdf", "_blank"),
            children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5 transition-transform group-hover:translate-y-1" }),
              "Download CV"
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Zap, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Key Skills" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Palette, { className: "h-3 w-3" }),
              " UI design"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Layers, { className: "h-3 w-3" }),
              " User experience (UX)"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Code, { className: "h-3 w-3" }),
              " Design Systems"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Briefcase, { className: "h-3 w-3" }),
              " Digital product design"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Zap, { className: "h-3 w-3" }),
              " DesignOps"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(BarChart, { className: "h-3 w-3" }),
              " Data analysis"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(LineChart, { className: "h-3 w-3" }),
              " Success metrics"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Palette, { className: "h-3 w-3" }),
              " Branding"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-primary/10 text-primary hover:bg-primary/20 border-none flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Palette, { className: "h-3 w-3" }),
              " Graphic design"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Technical Skills" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "T" }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Tools:" }),
                " Figma, Sketch, Zeplin, Abstract, Jira, Confluence, Notion"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "M" }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Methodologies:" }),
                " DesignOps, Design Thinking, Agile, SCRUM"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "D" }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "UI/UX Design:" }),
                " Wireframing, Prototyping, Research, Visual Design"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "B" }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Branding & Marketing:" }),
                " Visual identity, Brand materials, Advertising design"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-5 h-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-primary", children: "A" }) }),
              /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Data Analysis:" }),
                " Interpreting metrics, data visualization, and optimizing digital experiences"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Languages" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { children: "First Certificate in English" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Sheffield College, UK" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { children: "English - intermediate level, PET" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "British Council" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 rounded-xl border border-border bg-card/30 backdrop-blur-sm transition-all duration-300 hover:shadow-md", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold", children: "Awards" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { children: "1:2 BA Graphic design" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Sheffield Hallam University (UK)" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("span", { children: "1st FD Graphic Design" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "2007-08, Norton College, Sheffield (UK)" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-8 space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-2 mb-6", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: activeTab === "experience" ? "default" : "outline",
              onClick: () => setActiveTab("experience"),
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4" }),
                "Experience"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: activeTab === "education" ? "default" : "outline",
              onClick: () => setActiveTab("education"),
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
                "Education"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "transition-all duration-300", children: activeTab === "experience" ? /* @__PURE__ */ jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ jsx(ExperienceSection, {}) }) : /* @__PURE__ */ jsx("div", { className: "animate-fade-in", children: /* @__PURE__ */ jsx(EducationSection, {}) }) })
      ] })
    ] })
  ] }) });
};
const Card = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
));
Card.displayName = "Card";
const CardHeader = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 p-6", className),
    ...props
  }
));
CardHeader.displayName = "CardHeader";
const CardTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
CardTitle.displayName = "CardTitle";
const CardDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "p",
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
CardDescription.displayName = "CardDescription";
const CardContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props }));
CardContent.displayName = "CardContent";
const CardFooter = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex items-center p-6 pt-0", className),
    ...props
  }
));
CardFooter.displayName = "CardFooter";
const Avatar = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Root,
  {
    ref,
    className: cn(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      className
    ),
    ...props
  }
));
Avatar.displayName = AvatarPrimitive.Root.displayName;
const AvatarImage = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full", className),
    ...props
  }
));
AvatarImage.displayName = AvatarPrimitive.Image.displayName;
const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  AvatarPrimitive.Fallback,
  {
    ref,
    className: cn(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      className
    ),
    ...props
  }
));
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
const TestimonialCard = ({ content, author, position, company, avatarSrc }) => {
  const initials = author.split(" ").map((n) => n[0]).join("").toUpperCase();
  return /* @__PURE__ */ jsx(Card, { className: "glass border-0 h-full", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4 text-primary", children: [
      /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Testimonial" })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-lg text-muted-foreground italic mb-6", children: [
      '"',
      content,
      '"'
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "h-12 w-12 mr-4 rounded-full overflow-hidden border-2 border-primary/20", children: avatarSrc ? /* @__PURE__ */ jsx(
        AvatarImage,
        {
          src: avatarSrc,
          alt: author,
          className: "object-cover w-full h-full rounded-full"
        }
      ) : /* @__PURE__ */ jsx(AvatarFallback, { className: "rounded-full", children: initials }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("p", { className: "font-bold", children: author }),
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          position,
          company ? `, ${company}` : ""
        ] })
      ] })
    ] })
  ] }) }) });
};
const Testimonials = () => {
  const testimonials = [
    {
      content: "Never afraid to speak her mind, Alfonso has been able to provide a unique perspective and a clarity of thought that I've found invaluable. But more importantly, he has demonstrated on multiple occasions a level of initiative that isn't common amongst her peers, organising and taking the lead in meetings with founders and CEOs of potential partner companies.",
      author: "Adolfo Sánchez Olmo",
      position: "Global Vice President IT Hospitality CoE at Radisson Hotel Group",
      company: "Head of EMMA",
      avatarSrc: "/lovable-uploads/4aa2a4cc-8765-4d41-b75d-1656c3d5ca8e.png"
    },
    {
      content: "Alfonso perfectly fulfils the tasks assigned to him in the foreseen time. It pays special attention to the final details and provides productive solutions in the workflow.",
      author: "Baptiste Pons",
      position: "Freelance Product designer",
      avatarSrc: "/lovable-uploads/9da1d061-a084-4749-ae66-5f1eb6165ee1.png"
    },
    {
      content: "He's an experienced professional who identifies and resolves complex usability issues on the various projects he works on. I would also like to highlight his expertise in Design Ops, which has contributed to the team's growth. He always approaches his work proactively and is eager to help and serve as a role model for his colleagues. I would recommend Alfonso to any digital product team looking to set a higher standard in every respect.",
      author: "Franc Andreu",
      position: "Product Design Team Lead",
      company: "Leadtech Group"
    },
    {
      content: "I worked with Alfonso at Leadtech, where he worked on a variety of digital products, demonstrating a great capacity for adaptation. He is a serious professional with a great attitude and extensive experience; he knows how to easily find efficient solutions to complex problems. He works very well both independently and as part of a team, being a highly collaborative professional. He knows how to work organically with different profiles, whether they are product, technical, or business-oriented. He is able to iterate efficiently based on the feedback received. He is highly focused on technical innovation, which makes his profile even more versatile. I am very glad to have had the opportunity to work with him, and I consider him a very solid professional within the UX/UI world.",
      author: "Davide Savina",
      position: "COO",
      company: "Leadtech"
    }
  ];
  const slides = [];
  for (let i = 0; i < testimonials.length; i += 2) {
    slides.push(testimonials.slice(i, i + 2));
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6e3);
    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsAutoPlay(false);
  };
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlay(false);
  };
  return /* @__PURE__ */ jsxs("section", { id: "testimonials", className: "py-24 md:py-32 px-6 md:px-12 relative", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_50%_50%,rgba(var(--primary-rgb),0.05)_0%,rgba(var(--primary-rgb),0)_100%)]",
        style: { "--primary-rgb": "52, 152, 219" }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto relative z-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-16 text-center", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary", children: "What people say" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight", children: /* @__PURE__ */ jsx(AnimatedText, { text: "Testimonials", className: "inline-block", once: true }) }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-2xl mx-auto", children: "I've had the privilege of working with amazing clients and teams who have shared their feedback on our collaboration." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative mb-8", children: [
        /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-lg", children: /* @__PURE__ */ jsx(
          "div",
          {
            className: "flex transition-transform duration-500 ease-out",
            style: { transform: `translateX(-${currentIndex * 100}%)` },
            children: slides.map((slide, slideIndex) => /* @__PURE__ */ jsx("div", { className: "w-full flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8", children: slide.map((testimonial, idx) => /* @__PURE__ */ jsx(
              TestimonialCard,
              {
                content: testimonial.content,
                author: testimonial.author,
                position: testimonial.position,
                company: testimonial.company,
                avatarSrc: testimonial.avatarSrc
              },
              idx
            )) }) }, slideIndex))
          }
        ) }),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToPrevious,
            className: "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-20 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200",
            "aria-label": "Previous testimonials",
            children: /* @__PURE__ */ jsx(ChevronLeft, { className: "w-6 h-6" })
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: goToNext,
            className: "absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-20 p-2 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors duration-200",
            "aria-label": "Next testimonials",
            children: /* @__PURE__ */ jsx(ChevronRight, { className: "w-6 h-6" })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center gap-3 mb-8", children: slides.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => goToSlide(index),
          className: `transition-all duration-300 rounded-full ${index === currentIndex ? "bg-primary w-8 h-3" : "bg-primary/30 hover:bg-primary/50 w-3 h-3"}`,
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "text-center text-sm text-muted-foreground mb-16", children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground", children: currentIndex + 1 }),
        /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
          " / ",
          slides.length
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "glass p-6 rounded-xl max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Ready to work together?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Let's collaborate to improve your team's design operations and create exceptional product experiences." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "#contact",
            className: "inline-flex px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-transform hover:scale-105 active:scale-95",
            children: "Get in touch"
          }
        )
      ] }) })
    ] })
  ] });
};
const contactInfo = [
  {
    icon: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
    label: "Email",
    value: "holalfonso@gmail.com",
    link: "mailto:holalfonso@gmail.com"
  },
  {
    icon: /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
    label: "Phone",
    value: "+34 678 815 239",
    link: "tel:+34678815239"
  },
  {
    icon: /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }),
    label: "Location",
    value: "Barcelona, Spain",
    link: "https://maps.google.com/?q=Barcelona,+Spain"
  }
];
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      toast$1.success("Message sent successfully!");
    }, 1500);
  };
  return /* @__PURE__ */ jsx("section", { id: "contact", className: "py-20 md:py-32 px-6 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 md:mb-20", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/10 text-primary", children: "Get In Touch" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold mb-6 tracking-tight", children: /* @__PURE__ */ jsx(AnimatedText, { text: "Let's Work Together", className: "inline-block", once: true }) }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-12 md:gap-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold mb-6", children: "Contact Information" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-4", children: contactInfo.map((item) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: item.link,
              className: "flex items-start space-x-4 group transition-colors hover:text-primary",
              target: "_blank",
              rel: "noopener noreferrer",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mt-0.5 flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors", children: item.icon }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-medium", children: item.label }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: item.value })
                ] })
              ]
            },
            item.label
          )) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "glass rounded-2xl p-6 md:p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-display font-bold mb-4", children: "Follow Me" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Connect with me on social media to see my latest works and design insights." }),
          /* @__PURE__ */ jsxs("div", { className: "flex space-x-4", children: [
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.linkedin.com/in/alfonsozamorano/",
                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors",
                "aria-label": "LinkedIn",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(Linkedin, { className: "w-5 h-5" })
              }
            ),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: "https://www.instagram.com/lfns_zmrn/",
                className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors",
                "aria-label": "Instagram",
                target: "_blank",
                rel: "noopener noreferrer",
                children: /* @__PURE__ */ jsx(Instagram, { className: "w-5 h-5" })
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-3", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "glass rounded-2xl p-6 md:p-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "name", className: "block text-sm font-medium mb-2", children: "Name" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "name",
                name: "name",
                type: "text",
                value: formData.name,
                onChange: handleChange,
                required: true,
                className: "w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "Email" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                id: "email",
                name: "email",
                type: "email",
                value: formData.email,
                onChange: handleChange,
                required: true,
                className: "w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "subject", className: "block text-sm font-medium mb-2", children: "Subject" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              id: "subject",
              name: "subject",
              type: "text",
              value: formData.subject,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "message", className: "block text-sm font-medium mb-2", children: "Message" }),
          /* @__PURE__ */ jsx(
            "textarea",
            {
              id: "message",
              name: "message",
              rows: 5,
              value: formData.message,
              onChange: handleChange,
              required: true,
              className: "w-full px-4 py-3 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            disabled: isSubmitting,
            className: "inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:scale-105 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed",
            children: isSubmitting ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white" }),
              "Sending..."
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              "Send Message",
              /* @__PURE__ */ jsx(SendIcon, { className: "h-4 w-4" })
            ] })
          }
        )
      ] }) })
    ] })
  ] }) });
};
const TransitionEffect = ({ className }) => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1e3);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "fixed inset-0 z-50 bg-background transition-transform duration-1000 ease-in-out will-change-transform",
        isVisible ? "translate-y-0" : "translate-y-full",
        className
      )
    }
  );
};
const featuredResources = [
  {
    id: 1,
    title: "Design ↔ Dev Handoff Checklist",
    description: "A free Notion checklist to ship pixel-perfect handoffs every time. 8 sections, 50+ checks — everything engineering needs to build without questions.",
    type: "Checklist",
    price: "Free",
    image: "/handoff-checklist-cover.png",
    url: "https://abyssinian-dodo-5d1.notion.site/Design-Dev-Handoff-Checklist-344985943d318147bb5ee79828691fa5",
    tags: ["Handoff", "Notion", "Free"]
  },
  {
    id: 2,
    title: "DesignOps Playbook",
    description: "A complete operating system for design teams. Covers governance, rituals, tooling, onboarding, and delivery — built from 10+ years running design operations at scale.",
    type: "Playbook",
    price: 29,
    image: "/designops-playbook-cover.png",
    url: "https://alfonsowave74.gumroad.com/l/mranlq",
    tags: ["DesignOps", "Notion", "Team Workflow"]
  }
];
const HomeResources = () => {
  return /* @__PURE__ */ jsx("section", { id: "resources", className: "py-20 md:py-32 px-6 md:px-12", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-12 md:mb-16", children: [
      /* @__PURE__ */ jsx("span", { className: "inline-block text-sm md:text-base font-medium tracking-wider mb-4 py-1 px-4 rounded-full bg-primary/20 text-primary", children: "Resources" }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row md:items-end justify-between", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-display font-bold mb-6 md:mb-0 tracking-tight", children: /* @__PURE__ */ jsx(AnimatedText, { text: "DesignOps Templates", className: "inline-block", once: true }) }),
        /* @__PURE__ */ jsx(Link, { to: "/resources", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "group", children: [
          "View all resources",
          /* @__PURE__ */ jsx(ArrowRight, { size: 16, className: "ml-2 transition-transform group-hover:translate-x-1" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-3xl mt-4", children: "Practical templates and frameworks built from 10+ years running design operations at scale. Ready to plug into your team on day one." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: featuredResources.map((resource) => {
      const isFree = resource.price === "Free";
      return /* @__PURE__ */ jsxs(
        Card,
        {
          className: "overflow-hidden border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group flex flex-col",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: resource.image,
                  alt: resource.title,
                  className: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-background/80 backdrop-blur-sm border-muted/30", children: resource.type }) }),
              /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(Badge, { className: isFree ? "bg-green-600/90 text-white border-0" : "bg-primary/90 text-primary-foreground border-0", children: isFree ? "Free" : `€${resource.price}` }) })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "p-6 flex flex-col flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold tracking-tight mb-2", children: resource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 flex-1", children: resource.description }),
              /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: resource.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-secondary/30", children: tag }, tag)) }),
              /* @__PURE__ */ jsx("a", { href: resource.url, target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(Button, { className: "w-full", variant: isFree ? "outline" : "default", children: isFree ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Download, { size: 15, className: "mr-2" }),
                "Download free"
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(ExternalLink, { size: 15, className: "mr-2" }),
                "Get on Gumroad — €",
                resource.price
              ] }) }) })
            ] })
          ]
        },
        resource.id
      );
    }) })
  ] }) });
};
const Index = () => {
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target;
      const anchor = target.closest("a");
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(anchor.hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", anchor.hash);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Portfolio of Alfonso Zamorano, Senior Product Designer and DesignOps Specialist with 10+ years of experience building design systems, leading teams, and shipping products." }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "10+ years designing digital products. DesignOps templates, case studies, and resources for design teams." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://azportfolio.net/" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://azportfolio.net/og-home.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "10+ years designing digital products. DesignOps templates, case studies, and resources for design teams." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://azportfolio.net/" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: `
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Alfonso Zamorano",
            "url": "https://azportfolio.net",
            "jobTitle": "Senior Product Designer & DesignOps Specialist",
            "description": "Senior Product Designer and DesignOps Specialist with 10+ years of experience building design systems, leading teams, and shipping products.",
            "sameAs": [
              "https://www.linkedin.com/in/alfonsozamorano"
            ]
          }
        ` })
    ] }),
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx(Hero, {}),
      /* @__PURE__ */ jsx(CaseStudyTabs, {}),
      /* @__PURE__ */ jsx(HomeResources, {}),
      /* @__PURE__ */ jsx(About, {}),
      /* @__PURE__ */ jsx(Testimonials, {}),
      /* @__PURE__ */ jsx(Contact, {})
    ] })
  ] });
};
const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogPortal = DialogPrimitive.Portal;
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    DialogPrimitive.Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
const DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
const DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
const ZoomableImage = ({
  src,
  alt,
  className,
  onLoad,
  onError
}) => {
  return /* @__PURE__ */ jsxs(Dialog, { children: [
    /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs("div", { className: "group relative cursor-zoom-in", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src,
          alt,
          className: `${className} transition-all duration-300 group-hover:opacity-80`,
          onLoad,
          onError
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 transition-opacity group-hover:opacity-100", children: /* @__PURE__ */ jsx(ZoomIn, { className: "h-8 w-8 text-primary" }) })
    ] }) }),
    /* @__PURE__ */ jsx(DialogContent, { className: "max-w-[90vw] max-h-[90vh]", children: /* @__PURE__ */ jsx(
      "img",
      {
        src,
        alt,
        className: "w-full h-full object-contain"
      }
    ) })
  ] });
};
const ProjectDetail = ({
  project
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  useEffect(() => {
    if (project) {
      setImageLoaded(false);
      setImageError(false);
    }
  }, [project]);
  if (!project) {
    return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-3xl font-bold mb-4", children: "Project not found" }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        " Back to Home"
      ] }) })
    ] }) });
  }
  const displayImage = project.heroImages && project.heroImages.length > 0 ? project.heroImages[0] : project.image;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsx("article", { className: "pt-32 pb-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 md:px-8", children: [
      /* @__PURE__ */ jsxs("header", { className: "mb-16", children: [
        /* @__PURE__ */ jsxs("nav", { className: "flex justify-between items-center mb-12", children: [
          /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
            " Back to Projects"
          ] }),
          project.title === "Loyalty WebApp B2B SaaS" && /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2 px-3 py-2 bg-background/50 hover:bg-secondary/20 rounded-md transition-all", children: [
            /* @__PURE__ */ jsx("div", { className: "w-40 h-12 overflow-hidden rounded-md", children: /* @__PURE__ */ jsx("img", { src: "/lovable-uploads/724b4ae0-8e3b-433c-9644-e252ff97a553.png", alt: "Wanup website", className: "w-full h-full object-cover" }) }),
            /* @__PURE__ */ jsx(Home, { size: 16, className: "text-primary" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-4", children: /* @__PURE__ */ jsx("span", { className: "text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full", children: project.category }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-display font-bold tracking-tight", children: project.title }),
          /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground", children: project.description })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
        /* @__PURE__ */ jsxs("figure", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "aspect-video w-full rounded-lg overflow-hidden bg-muted/20", children: [
            !imageLoaded && !imageError && /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "animate-pulse text-muted", children: "Loading image..." }) }),
            imageError && /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center bg-muted/20 p-4", children: /* @__PURE__ */ jsx("img", { alt: "DesignOps mission", className: "w-full h-full object-cover", src: "/lovable-uploads/bf73ca47-c600-42f9-9cfc-f6e34bce1d7f.png" }) }),
            !imageError && /* @__PURE__ */ jsx(ZoomableImage, { src: displayImage, alt: project.title, className: `w-full h-full object-cover ${imageLoaded ? "block" : "hidden"}`, onLoad: () => setImageLoaded(true), onError: () => {
              console.error("Image failed to load:", displayImage);
              setImageError(true);
            } })
          ] }),
          /* @__PURE__ */ jsxs("figcaption", { className: "mt-3 text-sm text-muted-foreground", children: [
            project.title,
            " - Project Overview"
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: project.content || /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h2", { children: "Project Overview" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: project.description }),
          /* @__PURE__ */ jsx("h2", { children: "Challenge" }),
          /* @__PURE__ */ jsx("p", { children: "The primary challenge in this project was to create a solution that balanced user needs with business goals. We needed to solve complex UX problems while maintaining brand consistency and technical feasibility." }),
          /* @__PURE__ */ jsx("h2", { children: "Solution" }),
          /* @__PURE__ */ jsx("p", { children: "After extensive research and multiple iterations, we created a design system that enabled consistency across all touchpoints. The solution improved user engagement by 30% and reduced development time by 40%." }),
          /* @__PURE__ */ jsx("h2", { children: "Result" }),
          /* @__PURE__ */ jsx("p", { children: "The implementation of this project led to significant improvements in user experience and business metrics:" }),
          /* @__PURE__ */ jsxs("ul", { children: [
            /* @__PURE__ */ jsx("li", { children: "30% increase in user engagement" }),
            /* @__PURE__ */ jsx("li", { children: "40% reduction in development time" }),
            /* @__PURE__ */ jsx("li", { children: "25% increase in conversion rates" })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
};
const ProjectOverview$6 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", children: "As a Senior Product Designer specialized in DesignOps at Leadtech Group, I developed a comprehensive framework to improve collaboration between design, development, and product teams. This initiative was crucial for our organization which had been experiencing communication silos and inefficiencies in project delivery." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "35% Reduction" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in project delivery time" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "40% Improvement" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in cross-team collaboration" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(CheckCheck, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "28% Decrease" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in revision cycles" })
      ] }) }) })
    ] })
  ] });
};
const AspectRatio = AspectRatioPrimitive.Root;
const ChallengeSection$7 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Leadtech Group faced significant challenges in coordinating work across design, development, and product teams:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Communication silos between different teams" }),
      /* @__PURE__ */ jsx("li", { children: "Inconsistent handoff processes causing delays" }),
      /* @__PURE__ */ jsx("li", { children: "Lack of standardized workflows across projects" }),
      /* @__PURE__ */ jsx("li", { children: "Limited visibility into project progress for stakeholders" }),
      /* @__PURE__ */ jsx("li", { children: "Frequent revisions due to misaligned expectations" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: "https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef0b2c3c8362baef07ebb_designops.jpg",
          alt: "Team collaboration session",
          className: "object-cover w-full h-full"
        }
      ) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 text-center", children: "Cross-functional team workshop to identify collaboration pain points" })
    ] })
  ] });
};
const SolutionSection$7 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Solution" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "I developed a comprehensive DesignOps framework focused on streamlining collaboration and enhancing communication between teams. The framework consisted of several key components:" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(Workflow, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Standardized Workflows" }),
          /* @__PURE__ */ jsx("p", { children: "Created clear, documented processes for each project phase, from initial discovery to final implementation. These workflows defined roles, responsibilities, and expectations at each stage." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(Share, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Centralized Resources" }),
          /* @__PURE__ */ jsx("p", { children: "Established a single source of truth for all project assets, documentation, and decisions. This included creating shared repositories, component libraries, and design systems accessible to all teams." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Communication Protocols" }),
          /* @__PURE__ */ jsx("p", { children: "Developed structured communication guidelines that defined when, how, and where different types of information should be shared. This included regular sync meetings, asynchronous updates, and feedback mechanisms." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-muted rounded-lg overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef03a90e9a93e6e0f0c34_design-system.jpg",
            alt: "Design system documentation",
            className: "object-cover w-full h-full"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Centralized design system documentation" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-muted rounded-lg overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "https://assets-global.website-files.com/659ee728e18c72ccd4e0cde8/659ef000e7b4a454c6019b93_data-viz.jpg",
            alt: "Collaboration metrics dashboard",
            className: "object-cover w-full h-full"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Real-time collaboration metrics dashboard" })
      ] })
    ] })
  ] });
};
const ProcessSection$7 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Process" }),
    /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l border-primary/30 space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "1" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Research & Assessment" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Conducted interviews and surveys with team members to identify pain points in the existing collaboration process. Analyzed workflow inefficiencies and bottlenecks." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "2" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Framework Design" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Created a structured framework that addressed the identified challenges. Developed workflow templates, communication guidelines, and resource repositories." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "3" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Implementation & Training" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Rolled out the framework through workshops and training sessions. Created documentation and guidelines to support adoption." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "4" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Measurement & Iteration" }),
        /* @__PURE__ */ jsx("p", { children: "Established metrics to track the framework's effectiveness. Continuously gathered feedback and made adjustments to improve the process." })
      ] })
    ] })
  ] });
};
const ResultsSection$7 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "The implementation of the Cross-team Collaboration Framework yielded significant improvements across multiple metrics:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Quantitative Results" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "35% reduction in project delivery time" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "40% improvement in team collaboration satisfaction" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "28% decrease in revision cycles" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "45% increase in on-time project completion" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Qualitative Outcomes" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Greater alignment between design vision and development implementation" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Improved morale and reduced friction between teams" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Enhanced quality of deliverables with fewer defects" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "More consistent user experience across products" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const LearningsSection$7 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Learnings & Next Steps" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "The implementation of this framework provided valuable insights into effective cross-team collaboration:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Clear communication protocols are essential for successful collaboration" }),
      /* @__PURE__ */ jsx("li", { children: "Regular feedback loops help maintain alignment and prevent drift" }),
      /* @__PURE__ */ jsx("li", { children: "Balancing structure with flexibility is key to maintaining agility" }),
      /* @__PURE__ */ jsx("li", { children: "Training and continuous support are critical for successful adoption" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Moving forward, we plan to expand this framework to additional teams and refine our metrics tracking to capture more granular data on collaboration effectiveness. We're also developing advanced training modules to help new team members quickly adapt to our collaborative workflow." })
  ] });
};
const CrossTeamCollaborationContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$6, {}),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-border/50 shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png",
          alt: "Cross-team Collaboration Radar Chart",
          className: "w-full h-auto"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "The Collaboration Framework Radar Chart visualizes the key competencies needed for effective cross-team collaboration. Each axis represents a critical skill area, with the colored overlays showing different team profiles." }) })
    ] }) }),
    /* @__PURE__ */ jsx(ChallengeSection$7, {}),
    /* @__PURE__ */ jsx(SolutionSection$7, {}),
    /* @__PURE__ */ jsx(ProcessSection$7, {}),
    /* @__PURE__ */ jsx(ResultsSection$7, {}),
    /* @__PURE__ */ jsx(LearningsSection$7, {})
  ] });
};
const ProjectOverview$5 = () => {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Project Overview" }),
    /* @__PURE__ */ jsx("p", { children: "As the Senior Product Designer at Leadtech Group, I led the initiative to create and maintain a comprehensive design system that significantly improved development efficiency and ensured visual consistency across our multiple products and brands." }),
    /* @__PURE__ */ jsx("p", { children: "This project involved extensive collaboration with developers and stakeholders to establish a framework that would serve as the foundation for all our digital products, enabling faster development cycles and a more cohesive user experience." }),
    /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: "/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png",
          alt: "Leadtech Design System Overview",
          className: "w-full rounded-lg shadow-lg"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic mt-2 text-center", children: "Overview of the Leadtech Design System components and documentation" })
    ] })
  ] });
};
const ChallengeSection$6 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Leadtech Group faced several challenges in maintaining a cohesive design language across its diverse product range:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Inconsistent UI components across different products" }),
      /* @__PURE__ */ jsx("li", { children: "Duplication of design efforts leading to inefficiencies" }),
      /* @__PURE__ */ jsx("li", { children: "Difficulty in scaling design efforts with growing product lines" }),
      /* @__PURE__ */ jsx("li", { children: "Lack of a centralized design resource for developers and designers" }),
      /* @__PURE__ */ jsx("li", { children: "Inconsistent user experience across the Leadtech ecosystem" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "Leadtech Design System Analytics Dashboard", className: "w-full h-full object-scale-down", src: "/lovable-uploads/3a432e07-768e-444b-a81f-61433a92231b.png" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 text-center", children: "Design System Analytics Dashboard showing component usage metrics" })
    ] })
  ] });
};
const SolutionSection$6 = () => {
  return /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold", children: "Solution" }),
    /* @__PURE__ */ jsx("p", { children: "After extensive research into design systems across the industry and evaluation of our specific needs, I developed a comprehensive design system that included:" }),
    /* @__PURE__ */ jsxs("div", { className: "py-6", children: [
      /* @__PURE__ */ jsx("img", { alt: "Design System Components", className: "w-full rounded-lg shadow-lg", src: "/lovable-uploads/5349fb3d-9087-4ddc-8c08-405b7aa7b592.png" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground italic mt-2 text-center", children: "Visual representation of the design system components and structure" })
    ] }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2", children: [
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Component Library:" }),
        " A structured collection of UI components with clear usage guidelines, properties, and behaviors. Each component was designed to be flexible, accessible, and reusable."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Design Tokens:" }),
        " Fundamental design atoms like colors, typography, spacing, and shadows that ensure consistency across all platforms and products."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Documentation:" }),
        " Comprehensive guidelines for designers and developers to understand how and when to use each component, including code snippets and design best practices."
      ] }),
      /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("strong", { children: "Governance Process:" }),
        " A clear workflow for requesting, creating, and modifying components to maintain the integrity of the design system as it evolved."
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "The system was implemented in Figma for designers and as a React component library for developers, ensuring a seamless handoff process and maintaining design consistency through all stages of development." })
  ] });
};
const ProcessSection$6 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Process" }),
    /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l border-primary/30 space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "1" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Research & Audit" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Conducted a thorough audit of existing Leadtech products to identify inconsistencies and areas for improvement. Researched industry best practices and emerging design trends." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "2" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Design & Development" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Designed and developed a comprehensive set of UI components and design tokens. Ensured that all components were accessible, responsive, and easy to use." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "3" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Implementation & Training" }),
        /* @__PURE__ */ jsx("p", { className: "mb-2", children: "Worked closely with development teams to implement the design system across all Leadtech products. Provided training and support to ensure that designers and developers were able to use the design system effectively." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "4" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Maintenance & Iteration" }),
        /* @__PURE__ */ jsx("p", { children: "Continuously monitored the usage of the design system and gathered feedback from users. Made regular updates and improvements to ensure that the design system remained relevant and effective." })
      ] })
    ] })
  ] });
};
const ComponentExamplesSection = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Component Examples" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "The Leadtech Design System includes a variety of components designed for consistency and reusability across platforms. Below are some examples of components from our library:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-1 gap-8 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "h-full w-full p-6 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit mb-4", children: /* @__PURE__ */ jsx(Component, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "UI Components" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Reusable interface elements like buttons, inputs, and cards that maintain consistent styling." }),
        /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("img", { alt: "Button component examples", className: "w-full rounded-md shadow-sm", src: "/lovable-uploads/18acb44e-a98b-4cd4-a733-e0f3eca0f0bd.png" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "h-full w-full p-6 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit mb-2", children: /* @__PURE__ */ jsx(FileCode, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-1", children: "Code Patterns" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: "Standardized code implementation guidelines ensuring consistent component behavior." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2 bg-background rounded-md p-3 font-mono text-xs shadow-sm overflow-hidden flex-grow", children: [
          /* @__PURE__ */ jsx("div", { className: "text-blue-500", children: "import" }),
          /* @__PURE__ */ jsxs("div", { children: [
            "{ Button } from ",
            /* @__PURE__ */ jsx("span", { className: "text-green-500", children: "'@leadtech/design-system'" }),
            ";"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-blue-500", children: "const" }),
            " Example = () => ("
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "ml-4", children: [
            "<",
            /* @__PURE__ */ jsx("span", { className: "text-orange-500", children: "Button width={93} height={40} borderRadius={50} gap={8} padding={{top: 8, right: 24, bottom: 8, left: 24}}" }),
            "> Click me </Button>"
          ] }),
          /* @__PURE__ */ jsx("div", { children: ");" })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "h-full w-full p-6 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit mb-4", children: /* @__PURE__ */ jsx(LayoutDashboard, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Layout Templates" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Pre-built layout structures for dashboards, forms, and content pages." }),
        /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("img", { alt: "Mobile filters UI examples", src: "/lovable-uploads/9ec4b5eb-c1ca-4930-b77e-35f026f82888.png", className: "w-full rounded-md shadow-sm object-contain" }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "h-full w-full p-6 flex flex-col min-h-[350px]", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit mb-4", children: /* @__PURE__ */ jsx(Smartphone, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Responsive Patterns" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Adaptable components designed to work seamlessly across different device sizes." }),
        /* @__PURE__ */ jsx("div", { className: "flex-grow" }),
        /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("img", { alt: "Mobile UI examples", className: "w-full rounded-md shadow-sm", src: "/lovable-uploads/f62e774d-8625-4afb-a943-603afc462ab5.png" }) })
      ] }) }) })
    ] })
  ] });
};
const ResultsSection$6 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "The implementation of the Leadtech Design System yielded significant improvements across multiple metrics:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Quantitative Results" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "30% increase in development efficiency" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "40% reduction in design inconsistencies" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "25% faster time-to-market for new products" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "15% increase in user satisfaction scores" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Qualitative Outcomes" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Improved collaboration between design and development teams" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Greater consistency in user experience across all Leadtech products" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Increased brand recognition and customer loyalty" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const LearningsSection$6 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Learnings & Next Steps" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "The development and implementation of the Leadtech Design System provided valuable insights into creating and maintaining a successful design system:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Strong leadership support is essential for driving adoption" }),
      /* @__PURE__ */ jsx("li", { children: "Continuous communication and collaboration are key to success" }),
      /* @__PURE__ */ jsx("li", { children: "Regular audits and updates are necessary to maintain relevance" }),
      /* @__PURE__ */ jsx("li", { children: "A well-defined governance model ensures consistency and quality" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Moving forward, we plan to expand the design system to include more advanced components and design patterns. We're also developing a comprehensive training program to help new team members quickly adapt to our design system." })
  ] });
};
const LeadtechGroupContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$5, {}),
    /* @__PURE__ */ jsx(ChallengeSection$6, {}),
    /* @__PURE__ */ jsx(SolutionSection$6, {}),
    /* @__PURE__ */ jsx(ProcessSection$6, {}),
    /* @__PURE__ */ jsx(ComponentExamplesSection, {}),
    /* @__PURE__ */ jsx(ResultsSection$6, {}),
    /* @__PURE__ */ jsx(LearningsSection$6, {})
  ] });
};
const ProjectOverview$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-border/50 shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "DesignOps Workflow Kickoff",
          className: "w-full h-auto",
          src: "/lovable-uploads/b1be486d-7971-4477-97b7-e2bb6ff06bd3.png"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "DesignOps Kickoff for 24 Apps Design team: Improving quality, speed and ease of use by creating and optimizing tools, guides, personas, and processes." }) })
    ] }) }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "As the Senior Product Designer and DesignOps lead at Leadtech Group, I was tasked with implementing and optimizing DesignOps processes to enhance team collaboration, reduce handoff time, and improve overall design efficiency." }),
    /* @__PURE__ */ jsx("p", { children: "This initiative was driven by the need to streamline collaboration between design, development, and product teams as our organization scaled. With multiple products in development simultaneously, we needed a systematic approach to maintain quality while increasing velocity." })
  ] });
};
const ChallengeSection$5 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "The organization faced several challenges that impacted design efficiency and product development:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Lengthy design-to-development handoff processes, with significant back-and-forth" }),
      /* @__PURE__ */ jsx("li", { children: "Inconsistent design practices across different product teams" }),
      /* @__PURE__ */ jsx("li", { children: "Limited visibility into design progress for stakeholders" }),
      /* @__PURE__ */ jsx("li", { children: "Difficulty scaling design operations as the company grew" }),
      /* @__PURE__ */ jsx("li", { children: "Challenges in maintaining design quality while increasing velocity" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "Our goal was to reduce handoff time by at least 30% and create a more collaborative environment between design and development teams while maintaining our high standards for quality." })
  ] });
};
const SolutionSection$5 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Solution" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "To address these challenges, I developed and implemented a comprehensive DesignOps framework focused on four key areas:" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(Workflow, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Streamlined Workflow" }),
          /* @__PURE__ */ jsx("p", { children: "Established a clear, repeatable process for design projects from inception to handoff, with well-defined checkpoints and expectations at each stage. We implemented standardized templates for design briefs, project scoping, and handoff documentation to ensure consistency." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(Share, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Collaboration Tools" }),
          /* @__PURE__ */ jsx("p", { children: "Selected and integrated a tailored stack of design tools that promoted collaboration and visibility. We established clear guidelines for file organization, naming conventions, and versioning to ensure all team members could easily locate and work with design assets." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(MessageSquare, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Communication Protocols" }),
          /* @__PURE__ */ jsx("p", { children: "Defined clear channels and cadences for communication between design, development, and product teams. We implemented regular design reviews and established standardized feedback mechanisms to reduce miscommunication and ensure alignment." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-6 items-start", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full shrink-0", children: /* @__PURE__ */ jsx(LineChart, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Metrics & Measurement" }),
          /* @__PURE__ */ jsx("p", { children: "Implemented a system to track key performance indicators for the design process, including handoff time, design iteration cycles, and implementation accuracy. These metrics allowed us to identify bottlenecks and continuously improve our processes." })
        ] })
      ] })
    ] })
  ] });
};
const ProcessSection$5 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Process" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "40% Reduction" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in handoff time" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Enhanced" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "team collaboration" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(CheckCheck, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Improved" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "design efficiency" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l border-primary/30 space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "1" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Research and Analysis" }),
        /* @__PURE__ */ jsx("p", { children: "I conducted interviews with designers, developers, and product managers to identify pain points in the existing workflow. I also performed a competitive analysis of DesignOps practices at similar organizations to establish benchmarks and identify best practices." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "2" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Workflow Mapping" }),
        /* @__PURE__ */ jsx("p", { children: "We mapped the entire design process from concept to implementation, identifying bottlenecks and opportunities for optimization. This exercise helped visualize the end-to-end flow and highlight areas for improvement." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "DesignOps Workflow Diagram", src: "/lovable-uploads/66fb836a-69d5-4b32-a171-1ab35fbb706e.png", className: "w-full h-full object-scale-down" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 text-center", children: "Detailed workflow diagram showing the design-to-development process" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "3" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Tool Evaluation and Integration" }),
        /* @__PURE__ */ jsx("p", { children: "After evaluating various design tools and collaboration platforms, we selected and integrated a stack that would best support our workflow needs while minimizing tool switching and context shifts." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "4" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Framework Development" }),
        /* @__PURE__ */ jsx("p", { children: "Based on our research and workflow mapping, I developed a comprehensive DesignOps framework tailored to our organization's needs, including documentation, templates, and guidelines." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Training and Implementation" }),
        /* @__PURE__ */ jsx("p", { children: "We rolled out the new processes through a series of workshops and training sessions, with a phased approach to ensure teams could adapt gradually." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
      /* @__PURE__ */ jsx(AspectRatio, { ratio: 4 / 3, className: "bg-muted rounded-lg overflow-hidden mb-4", children: /* @__PURE__ */ jsx("img", { alt: "DesignOps Workflow Implementation", src: "/lovable-uploads/55963e07-669a-4f5d-b0a0-d5e3ed321407.png", className: "w-full h-full object-contain" }) }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "DesignOps Framework Implementation" })
    ] })
  ] });
};
const ResultsSection$5 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "The implementation of our DesignOps framework yielded significant improvements in design efficiency and team collaboration:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Quantitative Results" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "40% reduction in design-to-development handoff time" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "35% improvement in team collaboration metrics" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "30% decrease in design revision cycles" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "25% faster time-to-market for new features" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Qualitative Outcomes" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Increased visibility into design progress for stakeholders" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Improved design consistency across products" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "Enhanced satisfaction among design and development teams" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCheck, { className: "h-5 w-5 text-primary flex-shrink-0" }),
            /* @__PURE__ */ jsx("span", { children: "More predictable design delivery timelines" })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 border border-border rounded-lg p-6 mb-12", children: [
      /* @__PURE__ */ jsx("blockquote", { className: "italic text-lg border-l-4 border-primary pl-4 py-2 mb-4", children: '"The DesignOps framework transformed how our design and development teams collaborate. What used to take weeks now takes days, and the quality of our products has improved significantly."' }),
      /* @__PURE__ */ jsx("p", { className: "text-right font-medium", children: "— Product Team Lead, Leadtech Group" })
    ] })
  ] });
};
const LearningsSection$5 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Learnings & Next Steps" }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "This project provided valuable insights into optimizing design operations:" }),
    /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 mb-8 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "The importance of balancing standardization with creative flexibility" }),
      /* @__PURE__ */ jsx("li", { children: "How tooling choices significantly impact workflow efficiency" }),
      /* @__PURE__ */ jsx("li", { children: "The value of incremental implementation over dramatic overhauls" }),
      /* @__PURE__ */ jsx("li", { children: "The need for continuous refinement based on team feedback" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Moving forward, we plan to:" }),
    /* @__PURE__ */ jsxs("ol", { className: "list-decimal pl-6 mb-4 space-y-2", children: [
      /* @__PURE__ */ jsx("li", { children: "Further automate repetitive design tasks through scripts and plugins" }),
      /* @__PURE__ */ jsx("li", { children: "Expand our design system to include more advanced component patterns" }),
      /* @__PURE__ */ jsx("li", { children: "Develop specialized training programs for new team members" }),
      /* @__PURE__ */ jsx("li", { children: "Implement more granular metrics to identify additional optimization opportunities" })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "The DesignOps framework continues to evolve as we gather more data and feedback, ensuring our design operations remain efficient and effective as the organization grows." })
  ] });
};
const DesignOpsWorkflowContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$4, {}),
    /* @__PURE__ */ jsx(ChallengeSection$5, {}),
    /* @__PURE__ */ jsx(SolutionSection$5, {}),
    /* @__PURE__ */ jsx(ProcessSection$5, {}),
    /* @__PURE__ */ jsx(ResultsSection$5, {}),
    /* @__PURE__ */ jsx(LearningsSection$5, {})
  ] });
};
const ProjectOverview$3 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs font-medium bg-primary/10 text-primary", children: "Data Visualization" }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs font-medium bg-primary/10 text-primary", children: "Dashboard Design" }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs font-medium bg-primary/10 text-primary", children: "UX Research" }),
      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs font-medium bg-primary/10 text-primary", children: "User Testing" })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", children: "As a Senior Product Designer at Leadtech Group, I took on the challenge of developing intuitive dashboards and data visualizations that would not only present complex information in an easily digestible format but also empower stakeholders to make better-informed decisions. The project resulted in a 20% increase in stakeholder engagement and significantly improved the decision-making process across departments." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg bg-muted/30", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Duration" }),
        /* @__PURE__ */ jsx("p", { children: "3 months" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg bg-muted/30", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "My Role" }),
        /* @__PURE__ */ jsx("p", { children: "Lead Product Designer" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "p-6 rounded-lg bg-muted/30", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2", children: "Team" }),
        /* @__PURE__ */ jsx("p", { children: "2 UX Designers, 1 Data Analyst, 3 Developers" })
      ] })
    ] })
  ] });
};
const ChallengeSection$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Challenge" }),
    /* @__PURE__ */ jsx("div", { className: "p-6 rounded-lg bg-red-500/10 border border-red-500/20 mb-8", children: /* @__PURE__ */ jsx("p", { className: "text-lg", children: "The company had access to vast amounts of data, but stakeholders were struggling to extract actionable insights due to complex, fragmented, and often overwhelming data presentations. Legacy reporting tools were difficult to use and lacked visual clarity, resulting in low adoption rates and decision-making based on incomplete information." }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Key Challenges" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Data was scattered across multiple platforms with inconsistent formatting" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Stakeholders spent excessive time trying to interpret complex data" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Existing dashboards had poor information hierarchy and visual overwhelm" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Low adoption rate of data tools due to poor user experience" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Project Goals" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Create intuitive dashboards that reveal insights at a glance" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Design a unified data experience across departments" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Increase stakeholder engagement with data by 20%" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Reduce time spent interpreting data by at least 30%" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const SolutionSection$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Solution" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", children: "We developed a comprehensive data visualization system that transformed complex data into intuitive, actionable insights. Our solution included a suite of customizable dashboards with a unified design language, clear information hierarchy, and thoughtful use of data visualization principles." }),
    /* @__PURE__ */ jsx("div", { className: "aspect-video w-full rounded-lg overflow-hidden mb-8", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: "/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png",
        alt: "Data Visualization Concept Map",
        className: "w-full h-full object-cover object-center"
      }
    ) }),
    /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground text-center mb-12", children: "Concept map showing the interconnected nature of data insights across the platform" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsx(BarChart, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Role-Based Dashboards" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Customized dashboards for different roles and departments, with relevant metrics and visualization types." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsx(PieChart, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Interactive Exploration" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Interactive elements allowing users to drill down into data for deeper insights and analysis." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsx(LineChart, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Trend Analysis" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Time-series visualizations that highlight patterns, trends, and anomalies in the data." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-4 rounded-full", children: /* @__PURE__ */ jsx(AreaChart, { className: "h-8 w-8 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "Unified Design Language" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Consistent visual elements, colors, and interactions to enhance learnability and usability." })
        ] })
      ] }) }) })
    ] })
  ] });
};
const ProcessSection$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Process" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(BarChart, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "20% Increase" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in stakeholder engagement" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(LineChart, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "30% Reduction" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "in data interpretation time" })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full mb-4", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "75% Adoption" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "across departments" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l border-primary/30 space-y-8 mb-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "1" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Stakeholder Interviews & Data Audit" }),
        /* @__PURE__ */ jsx("p", { children: "We began with comprehensive interviews across departments to understand how data was being used and what insights were most valuable. Simultaneously, we conducted a thorough audit of existing data sources, types, and quality to identify opportunities and limitations." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "2" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "User Research & Persona Development" }),
        /* @__PURE__ */ jsx("p", { children: "We identified key user types and created detailed personas based on their data needs, technical proficiency, and decision-making responsibilities. This helped us tailor the visualization approach to different user groups while maintaining a cohesive design system." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "3" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Information Architecture & Data Mapping" }),
        /* @__PURE__ */ jsx("p", { children: "We created a comprehensive data model that mapped relationships between different data points and established a clear information hierarchy. This became the foundation for designing intuitive navigation between different levels of data granularity." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx("img", { alt: "Data Visualization Information Architecture", src: "/lovable-uploads/a34955f1-1c9a-4745-b402-a31f0beb6f83.png", className: "w-full h-full object-scale-down" }) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2 text-center", children: "Information architecture mapping showing data relationships and visualization patterns" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "4" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Prototype Development & Testing" }),
        /* @__PURE__ */ jsx("p", { children: "We created interactive prototypes of dashboard layouts and visualization types, then conducted usability testing with representative users. This iterative process helped refine the designs based on real user feedback and behavior." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute -left-[41px] bg-background p-1 rounded-full border border-primary", children: /* @__PURE__ */ jsx("div", { className: "bg-primary rounded-full w-6 h-6 flex items-center justify-center text-primary-foreground font-bold text-xs", children: "5" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-3", children: "Implementation & Deployment" }),
        /* @__PURE__ */ jsx("p", { children: "Working closely with the development team, we implemented the designs in phases, starting with core dashboards and gradually adding more specialized visualizations. We established a feedback loop for continuous improvement based on actual usage data." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-muted/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-2 rounded-full", children: /* @__PURE__ */ jsx(Search, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Research Findings" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Users needed both overview and detailed views" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Color coding improved data recognition by 45%" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Interactive filtering was highly valued by 87% of users" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "p-6 bg-muted/30", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-2 rounded-full", children: /* @__PURE__ */ jsx(Presentation, { className: "h-5 w-5 text-primary" }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Design Principles" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Focus on clarity and minimizing cognitive load" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Progressive disclosure of complex information" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "text-primary font-bold", children: "•" }),
            /* @__PURE__ */ jsx("span", { children: "Consistent visual language across all visualizations" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
};
const ResultsSection$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results" }),
    /* @__PURE__ */ jsx("p", { className: "text-lg mb-8", children: "The implemented data visualization system transformed how the organization interacted with data, leading to several measurable improvements in stakeholder engagement, decision-making efficiency, and overall data literacy across departments." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { className: "border-primary/20", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full", children: /* @__PURE__ */ jsx(TrendingUp, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "20% Increase in Engagement" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Stakeholders now spend 20% more time interacting with data dashboards, indicating greater value and usability of the visualization system." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "border-primary/20", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "30% Reduction in Analysis Time" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Time spent analyzing and interpreting data decreased by 30%, allowing stakeholders to move from insight to action more quickly." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "border-primary/20", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "75% Adoption Rate" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Three-quarters of potential users across departments now regularly use the data visualization tools, up from 40% with the previous system." })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Card, { className: "border-primary/20", children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2", children: "15% Better Decision Outcomes" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Post-implementation analysis showed that decisions made with the new visualization system led to 15% better outcomes based on key performance metrics." })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 p-6 rounded-lg mb-12", children: [
      /* @__PURE__ */ jsx("blockquote", { className: "text-xl italic border-l-4 border-primary pl-4 mb-4", children: '"The new data visualization system has transformed how we understand our business. What used to take hours of analysis can now be understood at a glance, allowing us to make better decisions faster."' }),
      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "— Director of Operations, Leadtech Group" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png",
            alt: "Interactive Dashboard",
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Interactive dashboard showing key performance metrics" })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-muted rounded-lg overflow-hidden mb-4", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png",
            alt: "Data Relationship Visualization",
            className: "w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Visualization of complex data relationships" })
      ] })
    ] })
  ] });
};
const LearningsSection$4 = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Key Learnings" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-12", children: [
      /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit", children: /* @__PURE__ */ jsx(Lightbulb, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Data Context is Critical" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "We learned that even the most beautiful visualization fails without proper context. Providing clear labels, legends, and supporting information was essential for user understanding." })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit", children: /* @__PURE__ */ jsx(RefreshCw, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Iterative Testing Pays Off" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Our approach of continuous testing and refinement led to significant improvements in usability. Early assumptions were often incorrect, highlighting the importance of user validation." })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-3 rounded-full w-fit", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-primary" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "User Training is Essential" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Even with intuitive design, proper onboarding and training were necessary to achieve full adoption. Investing in user education significantly improved engagement and usage." })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-8 rounded-lg", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Future Opportunities" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-xl", children: "•" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Predictive analytics integration" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Incorporating machine learning models to provide predictive insights alongside historical data" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-xl", children: "•" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Mobile-optimized dashboards" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Creating fully responsive versions for on-the-go access to critical data points" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "text-primary font-bold text-xl", children: "•" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Cross-departmental data integration" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Expanding the system to better visualize relationships between data from different departments" })
          ] })
        ] })
      ] })
    ] })
  ] });
};
const DataVisualizationContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$3, {}),
    /* @__PURE__ */ jsx(ChallengeSection$4, {}),
    /* @__PURE__ */ jsx(SolutionSection$4, {}),
    /* @__PURE__ */ jsx(ProcessSection$4, {}),
    /* @__PURE__ */ jsx(ResultsSection$4, {}),
    /* @__PURE__ */ jsx(LearningsSection$4, {})
  ] });
};
const ProjectOverview$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "This project focused on designing user-centric mobile applications for both iOS and Android platforms, showcasing my expertise in cross-platform design principles and platform-specific guidelines." }),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-border/50 shadow-sm", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          alt: "AI Cleaner Mobile App Design",
          className: "w-full h-auto",
          src: "/lovable-uploads/0bc2a468-ef5a-499f-9a1e-0872d156546c.png"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "The AI Cleaner app design showcases an intelligent mobile interface for optimizing phone storage, featuring advanced AI-powered cleaning and performance analysis across multiple device screens." }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Client" }),
        /* @__PURE__ */ jsx("p", { children: "Leadtech Group - A leading e-commerce company aiming to expand their mobile presence with a flagship application that would provide a seamless shopping experience across platforms." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "My Role" }),
        /* @__PURE__ */ jsx("p", { children: "Lead UX/UI Designer - Responsible for creating the design strategy, wireframes, prototypes, and final UI designs while collaborating closely with iOS and Android development teams." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Timeline" }),
        /* @__PURE__ */ jsx("p", { children: "6 months (Full design cycle from research to handoff)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Tools Used" }),
        /* @__PURE__ */ jsx("p", { children: "Figma, Sketch, Principle, UserTesting.com" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Team" }),
        /* @__PURE__ */ jsx("p", { children: "1 UX Researcher, 2 UI Designers, 2 iOS Developers, 2 Android Developers" })
      ] })
    ] })
  ] });
};
const ChallengeSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "The primary challenge was to create a mobile shopping experience that felt native to both iOS and Android platforms while maintaining a consistent brand identity. This required balancing platform-specific design patterns with a cohesive cross-platform user experience." }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Key Challenges" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Creating a design system that could adapt to both Material Design (Android) and Human Interface Guidelines (iOS) while maintaining brand consistency" }),
        /* @__PURE__ */ jsx("li", { children: "Optimizing the experience for different screen sizes and resolutions across the fragmented Android device ecosystem" }),
        /* @__PURE__ */ jsx("li", { children: "Designing features that leveraged platform-specific capabilities (3D Touch on iOS, widgets on Android) without creating disparity in core functionality" }),
        /* @__PURE__ */ jsx("li", { children: "Ensuring the shopping flow remained intuitive and efficient regardless of platform navigation patterns" }),
        /* @__PURE__ */ jsx("li", { children: "Creating a design handoff process that served both iOS and Android development teams effectively" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "This project required deep knowledge of both platforms' design guidelines, technical capabilities, and user expectations to create an experience that would feel native to each platform while delivering a cohesive brand experience." })
  ] });
};
const SolutionSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Solution" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "I developed a comprehensive cross-platform design strategy that balanced platform-specific patterns with a consistent brand experience, resulting in apps that felt native to each platform while maintaining a unified brand identity." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Platform-Adaptive Design System" }),
        /* @__PURE__ */ jsx("p", { children: "Created a flexible design system with shared brand elements (colors, typography, spacing) but platform-specific components that respected each OS's interaction patterns and visual style. This enabled us to maintain brand consistency while providing an authentic native feel on each platform." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Unified Experience Architecture" }),
        /* @__PURE__ */ jsx("p", { children: "Designed a consistent information architecture and user flow across both platforms, ensuring that regardless of which platform users chose, the core experience and navigation logic remained familiar and intuitive, reducing learning curve for cross-platform users." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Platform-Specific Feature Enhancements" }),
        /* @__PURE__ */ jsx("p", { children: "Implemented platform-specific features that leveraged unique capabilities: widgets and notification actions for Android, 3D Touch quick actions and Apple Pay for iOS, enhancing the experience for users of each platform without compromising core functionality." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Optimized Development Handoff" }),
        /* @__PURE__ */ jsx("p", { children: "Created a streamlined handoff process with platform-specific component libraries and documentation that helped development teams implement designs accurately while respecting platform conventions, reducing implementation questions by 40%." })
      ] })
    ] })
  ] });
};
const ProcessStep = ({
  title,
  points,
  imageSrc,
  imageAlt,
  imageCaption
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: title }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 gap-6", children: [
      /* @__PURE__ */ jsx("div", { className: "bg-white dark:bg-zinc-800 p-6 rounded-lg border border-zinc-200 dark:border-zinc-700 shadow-sm", children: /* @__PURE__ */ jsx("ul", { className: "list-disc pl-6 space-y-2", children: points.map((point, index) => /* @__PURE__ */ jsx("li", { children: point }, index)) }) }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-700 shadow-sm", children: [
        /* @__PURE__ */ jsx(AspectRatio, { ratio: 16 / 9, className: "bg-white dark:bg-zinc-800", children: /* @__PURE__ */ jsx(
          "img",
          {
            alt: imageAlt,
            className: "w-full h-full object-cover",
            src: imageSrc
          }
        ) }),
        /* @__PURE__ */ jsx("div", { className: "p-3 bg-zinc-50 dark:bg-zinc-800/80", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-zinc-600 dark:text-zinc-300", children: imageCaption }) })
      ] })
    ] })
  ] });
};
const processStepsData = [
  {
    id: 1,
    title: "1. Research & Analysis",
    points: [
      "Conducted competitive analysis of top e-commerce apps on both platforms to identify patterns and best practices",
      "Performed user interviews with existing customers who used iOS and Android devices",
      "Analyzed platform-specific guidelines (Material Design 3 and iOS Human Interface Guidelines)",
      "Created user personas that represented both platform user types and their unique expectations"
    ],
    imageSrc: "/lovable-uploads/4789cc35-7092-4740-af94-ce7f152bbf3b.png",
    imageAlt: "Research and Analysis Phase",
    imageCaption: "Analyzing user behavior patterns and platform-specific guidelines to establish solid research foundation."
  },
  {
    id: 2,
    title: "2. Strategy & Information Architecture",
    points: [
      "Developed a unified information architecture and user flow that would work across platforms",
      "Created a feature parity matrix to ensure core functionality remained consistent",
      "Identified platform-specific enhancement opportunities to leverage unique capabilities",
      "Established design principles to guide decision-making throughout the process"
    ],
    imageSrc: "/lovable-uploads/bf0527b8-71d8-4a05-bb27-3cf2102daa11.png",
    imageAlt: "Information Architecture Planning",
    imageCaption: "Creating unified information architecture and user flows that work seamlessly across platforms."
  },
  {
    id: 3,
    title: "3. Wireframing & Prototyping",
    points: [
      "Created low-fidelity wireframes for critical user journeys (browsing, search, checkout)",
      "Developed platform-specific wireframes addressing navigation patterns for each OS",
      "Built interactive prototypes for user testing on both iOS and Android devices",
      "Conducted usability testing with users of both platforms to validate concepts"
    ],
    imageSrc: "/lovable-uploads/9f00aa05-f9b2-486b-8166-30126ef7e168.png",
    imageAlt: "Wireframing and Prototyping Process",
    imageCaption: "Building wireframes and interactive prototypes to test navigation patterns and user flows."
  },
  {
    id: 4,
    title: "4. Design System Development",
    points: [
      "Created a unified color palette, typography system, and spacing scale for brand consistency",
      "Designed platform-specific component libraries (buttons, form elements, cards, etc.)",
      "Established naming conventions and organization that would work for both development teams",
      "Documented responsive behaviors for different screen sizes and orientations"
    ],
    imageSrc: "/lovable-uploads/3eaa9d8f-3d72-4339-b200-982a6a06bc5c.png",
    imageAlt: "Design System Components",
    imageCaption: "Developing a comprehensive design system with components adapted for both iOS and Android."
  },
  {
    id: 5,
    title: "5. UI Design & Iterations",
    points: [
      "Created high-fidelity screens for all key user flows across both platforms",
      "Incorporated feedback from stakeholders and initial user testing sessions",
      "Refined platform-specific interaction details (animations, transitions, gestures)",
      "Conducted additional usability testing to validate final design solutions"
    ],
    imageSrc: "/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png",
    imageAlt: "UI Design and Iterations",
    imageCaption: "Refining high-fidelity UI designs with platform-specific interaction patterns and visual elements."
  },
  {
    id: 6,
    title: "6. Implementation & Optimization",
    points: [
      "Created detailed specifications and assets for development handoff",
      "Worked closely with iOS and Android development teams during implementation",
      "Conducted design QA throughout the development process",
      "Collected post-launch metrics and user feedback to inform future iterations"
    ],
    imageSrc: "/lovable-uploads/0a0b18bd-6af2-42d6-8ef4-b7a923f4a58d.png",
    imageAlt: "Implementation and Optimization",
    imageCaption: "Collaborating with development teams to ensure proper implementation and optimization of the design."
  }
];
const ProcessStepsList = () => {
  return /* @__PURE__ */ jsx("div", { className: "space-y-12", children: processStepsData.map((step) => /* @__PURE__ */ jsx(
    ProcessStep,
    {
      title: step.title,
      points: step.points,
      imageSrc: step.imageSrc,
      imageAlt: step.imageAlt,
      imageCaption: step.imageCaption
    },
    step.id
  )) });
};
const ProcessSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Design Process" }),
    /* @__PURE__ */ jsx(ProcessStepsList, {})
  ] });
};
const ResultsSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results & Impact" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "The cross-platform mobile app design project delivered significant improvements in both user engagement and business metrics, establishing a new standard for the company's mobile experience." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "User Experience Improvements" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "35% increase in user retention" }),
            " compared to the previous app, with users returning more frequently"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "28% improvement in task completion rate" }),
            " for key shopping flows, resulting in higher conversion"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "42% decrease in support tickets" }),
            " related to UI confusion or usability issues"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Average app rating improved by 1.5 stars" }),
            " on both App Store and Google Play"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Business Impact" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "22% increase in mobile conversion rate" }),
            ", directly attributable to improved checkout flow"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "30% higher average order value" }),
            " through enhanced product discovery and recommendation features"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "40% increase in mobile app revenue" }),
            " within six months of launch"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "15% reduction in development time" }),
            " for new features thanks to the comprehensive design system"
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Recognition & Feedback" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("blockquote", { className: "italic border-l-4 border-primary pl-4 py-2", children: [
          '"The redesigned app perfectly balances our brand identity with native platform experiences. Users love the intuitive navigation and seamless shopping experience regardless of which device they use."',
          /* @__PURE__ */ jsx("footer", { className: "mt-2 text-sm font-medium text-muted-foreground", children: "— Director of Digital Products, Leadtech Group" })
        ] }),
        /* @__PURE__ */ jsxs("blockquote", { className: "italic border-l-4 border-primary pl-4 py-2", children: [
          '"The new design system has significantly streamlined our development process. What used to take weeks now takes days, and the consistency across platforms has eliminated many of the implementation questions we used to struggle with."',
          /* @__PURE__ */ jsx("footer", { className: "mt-2 text-sm font-medium text-muted-foreground", children: "— Lead Mobile Developer, Leadtech Group" })
        ] })
      ] })
    ] })
  ] });
};
const LearningsSection$3 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Learnings & Next Steps" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Key Learnings" }),
        /* @__PURE__ */ jsx("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Platform-specific expertise is crucial" }),
            " - Understanding the nuances of each platform's design language and interaction patterns is essential for creating authentic experiences."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Unified design systems save time" }),
            " - Having a cohesive design system with platform-specific components significantly reduced design and development time for future features."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Early collaboration prevents implementation issues" }),
            " - Working closely with both iOS and Android developers from the beginning helped identify potential technical constraints before designs were finalized."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "User testing on actual devices is irreplaceable" }),
            " - Testing prototypes on physical iOS and Android devices revealed interaction issues that weren't apparent in software simulations."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Platform-specific enhancements drive engagement" }),
            " - Features that leveraged unique platform capabilities (like widgets on Android) showed higher engagement than standard features."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold mb-4", children: "Future Opportunities" }),
        /* @__PURE__ */ jsx("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Expand platform-specific features" }),
            " - Further leverage unique capabilities of each platform, such as AR shopping experiences on iOS and deeper Google ecosystem integration on Android."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Optimize for tablets and foldables" }),
            " - Adapt the design system to better support larger screens and new form factors like foldable devices."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Implement more personalization" }),
            " - Use machine learning to deliver more personalized shopping experiences based on user behavior and preferences."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Improve accessibility" }),
            " - Enhance the app's accessibility features to better serve users with disabilities across both platforms."
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Explore emerging technologies" }),
            " - Investigate opportunities for voice shopping, chatbots, and other emerging technologies that could enhance the mobile shopping experience."
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "italic", children: "This project has become a blueprint for our cross-platform design approach, setting a new standard for how we create cohesive yet platform-appropriate experiences. The learnings from this project continue to inform our mobile design strategy and have elevated the quality of all our digital products." })
    ] })
  ] });
};
const MobileAppDesignContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$2, {}),
    /* @__PURE__ */ jsx("div", { className: "mb-16", children: /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-border/50 shadow-sm", children: [
      /* @__PURE__ */ jsx("img", { alt: "AI Cleaner Mobile App Design", className: "w-full h-auto", src: "/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png" }),
      /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "The AI Cleaner app design showcases a modern interface for optimizing phone storage and enhancing performance, with features for smart cleaning and detailed analysis of media files." }) })
    ] }) }),
    /* @__PURE__ */ jsx(ChallengeSection$3, {}),
    /* @__PURE__ */ jsx(SolutionSection$3, {}),
    /* @__PURE__ */ jsx(ProcessSection$3, {}),
    /* @__PURE__ */ jsx(ResultsSection$3, {}),
    /* @__PURE__ */ jsx(LearningsSection$3, {})
  ] });
};
const ProjectOverview$1 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "I designed the landing page for VideoUp, an AI-powered video editing app. My focus was to create a modern, engaging interface aligned with 2025 design trends, optimizing both conversion rates and user experience." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Client" }),
        /* @__PURE__ */ jsx("p", { children: "VideoUp is a startup developing an AI-powered video editing application that aims to revolutionize how content creators and marketers produce and optimize video content for multiple platforms." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "My Role" }),
        /* @__PURE__ */ jsx("p", { children: "Lead UI Designer - Responsible for creating the landing page design strategy, visual identity, and UI elements while collaborating with the marketing and development teams." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Timeline" }),
        /* @__PURE__ */ jsx("p", { children: "6 weeks (Research, wireframing, design, and handoff)" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Tools Used" }),
        /* @__PURE__ */ jsx("p", { children: "Figma, Protopie, Hotjar, Google Analytics" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Team" }),
        /* @__PURE__ */ jsx("p", { children: "1 UI Designer, 1 UX Researcher, 2 Front-end Developers, 1 Marketing Specialist" })
      ] })
    ] })
  ] });
};
const ChallengeSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "VideoUp needed a landing page that would effectively communicate the sophisticated AI capabilities of their video editing app while maintaining a user-friendly appeal. The main challenge was balancing technical information with engaging visuals to drive conversions in a competitive market." }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50 mb-6", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Key Challenges" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "Creating a design that effectively communicates complex AI technology in an accessible, non-intimidating way to both professional and casual users" }),
        /* @__PURE__ */ jsx("li", { children: "Developing a visual language that would differentiate VideoUp from competitors while still appearing trustworthy and professional" }),
        /* @__PURE__ */ jsx("li", { children: "Designing for multiple user personas with varying technical knowledge and video editing needs" }),
        /* @__PURE__ */ jsx("li", { children: "Optimizing the conversion funnel to maximize sign-ups and trial activations" }),
        /* @__PURE__ */ jsx("li", { children: "Ensuring the landing page was fully responsive with a mobile-first approach while maintaining visual impact across all devices" })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "The landing page needed to showcase VideoUp's innovative features while making the technology accessible to a broad audience. It required a careful balance of technical information and user benefits, wrapped in an interface that felt both cutting-edge and approachable." })
  ] });
};
const SolutionSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Solution" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Our solution for VideoUp's landing page focused on creating a high-conversion, visually appealing design that effectively communicates the app's AI capabilities while maintaining excellent user experience across all devices." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsx(Card, { className: "border border-border/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Visual Design Strategy" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Implemented a vibrant gradient color scheme combining deep purples, bright blues, and electric pinks to create a modern, tech-forward aesthetic" }),
          /* @__PURE__ */ jsx("li", { children: "Used bold, clean typography with clear hierarchy to guide users through content" }),
          /* @__PURE__ */ jsx("li", { children: "Incorporated micro-interactions and subtle animations to enhance engagement without sacrificing performance" }),
          /* @__PURE__ */ jsx("li", { children: "Created custom iconography that unified the brand's visual language across the page" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Card, { className: "border border-border/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Conversion Optimization" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Strategically placed CTA buttons with high-contrast colors and action-oriented text" }),
          /* @__PURE__ */ jsx("li", { children: "Implemented social proof sections featuring user testimonials and usage statistics" }),
          /* @__PURE__ */ jsx("li", { children: "Created a streamlined trial sign-up process with minimal friction" }),
          /* @__PURE__ */ jsx("li", { children: "Designed feature highlights that clearly communicate benefits rather than just technical capabilities" }),
          /* @__PURE__ */ jsx("li", { children: "Incorporated trust signals including security badges and integrations with familiar platforms" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50 mb-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Key Design Elements" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Modern UI Components" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Floating cards with subtle shadows, glass-morphism effects, and animated gradients create a contemporary feel aligned with 2025 design trends." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Responsive Framework" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Built on a 12-column grid system that seamlessly adapts from desktop to mobile, ensuring consistent experience across all devices." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Performance Focus" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Optimized image loading, efficient animations, and streamlined code to ensure fast load times without sacrificing visual impact." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("p", { children: "The landing page design successfully balances technical sophistication with user-friendly accessibility, presenting VideoUp as a cutting-edge tool that remains approachable for users of all skill levels. The design system we created provides flexibility for future feature expansions while maintaining visual consistency." })
  ] });
};
const ProcessSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Design Process" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "1. Research & Discovery" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "I began with comprehensive research on competitors, market trends, and target audience needs. This included analyzing successful SaaS landing pages, identifying key conversion elements, and gathering insights on 2025 design trends relevant to tech products." }),
        /* @__PURE__ */ jsx("p", { children: "Key activities included user interviews with potential customers, competitive analysis of 15+ video editing tools, and heatmap studies of similar landing pages to identify engagement patterns." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "2. Information Architecture & Wireframing" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Based on research findings, I created the information architecture that prioritized VideoUp's key selling points and addressed common user questions. I developed low to mid-fidelity wireframes for mobile and desktop versions, focusing on conversion optimization." }),
        /* @__PURE__ */ jsx("p", { children: "The wireframes were tested with potential users to validate the structure and flow before moving to visual design, allowing us to identify and address navigation issues early." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "3. Visual Design & Branding" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "I developed a bold, tech-forward visual identity that aligned with VideoUp's brand positioning as an innovative AI tool. This included creating custom illustrations, selecting typography that balanced readability with personality, and developing a color palette with vibrant gradients that conveyed energy and innovation." }),
        /* @__PURE__ */ jsx("p", { children: "Multiple design concepts were presented to stakeholders, with the final direction chosen based on alignment with brand values and feedback from potential users." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "4. Prototype & Iteration" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "I created interactive prototypes with animations and microinteractions to test the complete user experience. These prototypes were tested with target users to gather feedback on usability, visual appeal, and clarity of messaging." }),
        /* @__PURE__ */ jsx("p", { children: "Based on testing results, I made several iterations to refine the design, focusing particularly on call-to-action visibility, feature explanation clarity, and mobile responsiveness." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "5. Handoff & Implementation" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "I prepared comprehensive design specifications and assets for the development team, including responsive breakpoints, animation details, and interaction specifications. I collaborated closely with developers during implementation to ensure the design vision was faithfully executed." }),
        /* @__PURE__ */ jsx("p", { children: "Post-launch, I continued to work with the marketing team to analyze user data and make data-driven refinements to optimize conversion rates further." })
      ] })
    ] })
  ] });
};
const ResultsSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "The new VideoUp landing page design delivered significant improvements in both user engagement and business metrics, exceeding the client's expectations and providing a strong foundation for their product launch." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-6 rounded-lg border border-primary/20 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-primary mb-2", children: "42%" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Increase in conversion rate from visitor to trial sign-up" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-6 rounded-lg border border-primary/20 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-primary mb-2", children: "37%" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Reduction in bounce rate compared to previous design" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-6 rounded-lg border border-primary/20 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-primary mb-2", children: "2:15" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Average increase in time spent on page" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 p-6 rounded-lg border border-primary/20 text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-4xl font-bold text-primary mb-2", children: "53%" }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "More mobile sign-ups than the industry average" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50 mb-8", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Client Feedback" }),
      /* @__PURE__ */ jsxs("blockquote", { className: "pl-4 border-l-2 border-primary italic", children: [
        `"The landing page design perfectly captures the innovative spirit of VideoUp while making our complex AI technology accessible and appealing. The conversion rates have exceeded our projections, and we've received overwhelmingly positive feedback from our users about the design. The mobile-first approach has been particularly impactful for our target demographic."`,
        /* @__PURE__ */ jsx("footer", { className: "mt-2 text-sm text-muted-foreground not-italic", children: "— Sarah Chen, CMO at VideoUp" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Additional Outcomes" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
        /* @__PURE__ */ jsx("li", { children: "The design system created for the landing page was adopted as the foundation for VideoUp's entire marketing ecosystem, ensuring consistent branding across all touchpoints." }),
        /* @__PURE__ */ jsx("li", { children: "Key elements of the landing page design influenced the in-app UI, creating a seamless user experience from marketing to product." }),
        /* @__PURE__ */ jsx("li", { children: "The project was featured in a popular design showcase, generating additional industry recognition for both VideoUp and our design approach." }),
        /* @__PURE__ */ jsx("li", { children: "The client has retained our services for ongoing optimization and additional product design work based on the success of this project." })
      ] })
    ] })
  ] });
};
const LearningsSection$2 = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Key Learnings" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "This project provided valuable insights into effective landing page design for AI-powered tools and the evolving expectations of users in the video editing space. Here are the key learnings from this project:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Visual Storytelling is Critical" }),
        /* @__PURE__ */ jsx("p", { children: "For complex AI tools, visual storytelling proved much more effective than technical explanations. Using before/after examples, animated sequences showing the AI in action, and visual metaphors helped users quickly understand the value proposition without getting lost in technical details." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Mobile Performance Matters" }),
        /* @__PURE__ */ jsx("p", { children: "Optimizing for mobile wasn't just about responsive layouts—performance was equally important. Working closely with developers to ensure animations and interactions remained smooth on mobile devices significantly improved engagement metrics on smartphones and tablets." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Strategic Use of Microinteractions" }),
        /* @__PURE__ */ jsx("p", { children: "Small, thoughtful microinteractions at key decision points boosted engagement and guided users through the conversion funnel more effectively than static elements. However, finding the right balance was key—too many animations became distracting rather than helpful." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "A/B Testing Reveals Surprises" }),
        /* @__PURE__ */ jsx("p", { children: "Some of our assumptions about what would convert best were proven wrong through A/B testing. For example, we found that more technical language in certain sections actually increased trust among our target audience, contrary to our initial hypothesis that simpler language would always perform better." })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-border/50", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "What I Would Do Differently" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Earlier User Testing:" }),
          " While we conducted user testing on wireframes and the final design, involving users at the very beginning of the conceptual phase would have provided even more valuable insights."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "More Personalization:" }),
          " If doing this project again, I would implement more personalized content paths based on user segments (e.g., professional video editors vs. casual users) to further optimize the conversion funnel for different personas."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Deeper Analytics Integration:" }),
          " Building more sophisticated analytics tracking into the design from the start would have allowed for more granular optimization post-launch."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Content-First Approach:" }),
          " While we had a collaborative process with the content team, I would push for finalizing key messaging earlier in the process to better integrate content strategy with visual design."
        ] })
      ] })
    ] })
  ] });
};
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = React.forwardRef(
  ({
    orientation = "horizontal",
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
  }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y"
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) {
        return;
      }
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    const scrollPrev = React.useCallback(() => {
      api == null ? void 0 : api.scrollPrev();
    }, [api]);
    const scrollNext = React.useCallback(() => {
      api == null ? void 0 : api.scrollNext();
    }, [api]);
    const handleKeyDown = React.useCallback(
      (event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );
    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    }, [api, setApi]);
    React.useEffect(() => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api == null ? void 0 : api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          opts,
          orientation: orientation || ((opts == null ? void 0 : opts.axis) === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx(
          "div",
          {
            ref,
            onKeyDownCapture: handleKeyDown,
            className: cn("relative", className),
            role: "region",
            "aria-roledescription": "carousel",
            ...props,
            children
          }
        )
      }
    );
  }
);
Carousel.displayName = "Carousel";
const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex",
        orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
        className
      ),
      ...props
    }
  ) });
});
CarouselContent.displayName = "CarouselContent";
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "group",
      "aria-roledescription": "slide",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
});
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute  h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
});
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      variant,
      size,
      className: cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
});
CarouselNext.displayName = "CarouselNext";
const VideoUpLandingContent = () => {
  const websiteImages = [
    {
      src: "/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png",
      alt: "VideoUp Landing Page Hero Section",
      caption: "The hero section highlights the app's AI capabilities with bold typography and gradient elements"
    },
    {
      src: "/lovable-uploads/66fb836a-69d5-4b32-a171-1ab35fbb706e.png",
      alt: "VideoUp Features Section",
      caption: "Feature highlights with vibrant UI cards and clear value propositions"
    },
    {
      src: "/lovable-uploads/c0a19b7f-5b09-47de-8aad-69eefa4e7fd9.png",
      alt: "VideoUp Mobile Optimization",
      caption: "Mobile-optimized version showing responsive layout and navigation"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview$1, {}),
    /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Website Screenshots" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6 text-muted-foreground", children: "The following screenshots showcase the key sections of the VideoUp landing page design, highlighting the modern UI elements, conversion-focused layout, and responsive design." }),
      /* @__PURE__ */ jsxs(Carousel, { className: "w-full max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx(CarouselContent, { children: websiteImages.map((image, index) => /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx(Card, { className: "border border-border/50", children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image.src,
              alt: image.alt,
              className: "w-full h-auto rounded-t-lg"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "p-4 bg-muted/30", children: /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: image.caption }) })
        ] }) }) }) }, index)) }),
        /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-2 lg:-left-12" }),
        /* @__PURE__ */ jsx(CarouselNext, { className: "right-2 lg:-right-12" })
      ] })
    ] }),
    /* @__PURE__ */ jsx(ChallengeSection$2, {}),
    /* @__PURE__ */ jsx(SolutionSection$2, {}),
    /* @__PURE__ */ jsx(ProcessSection$2, {}),
    /* @__PURE__ */ jsx(ResultsSection$2, {}),
    /* @__PURE__ */ jsx(LearningsSection$2, {})
  ] });
};
const Separator = React.forwardRef(
  ({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ jsx(
    SeparatorPrimitive.Root,
    {
      ref,
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        className
      ),
      ...props
    }
  )
);
Separator.displayName = SeparatorPrimitive.Root.displayName;
const OnlineCVOverview = () => {
  return /* @__PURE__ */ jsxs("section", { id: "overview", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "Project Overview" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "OnlineCV is a platform that simplifies resume creation with professional templates and AI-powered suggestions. I was tasked with designing a landing page that would effectively communicate the platform's value proposition and drive conversions, while maintaining a modern, professional aesthetic." }),
      /* @__PURE__ */ jsxs("div", { className: "my-6 grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-primary/10 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Conversion-focused Design" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "A structured layout with persuasive CTAs, clear content sections, and an intuitive user flow that guides visitors toward conversion." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary/10 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Visual UI & Branding" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "A balance between professionalism and approachability, using a refined color palette, elegant typography, and engaging visuals." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-primary/10 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Mobile-first & Smooth Interactions" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Optimized for mobile devices with seamless animations and an intuitive navigation experience that works across all device sizes." })
        ] })
      ] })
    ] })
  ] });
};
const ChallengeSection$1 = () => {
  return /* @__PURE__ */ jsxs("section", { id: "challenge", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "The Challenge" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "OnlineCV faced several challenges in the competitive resume-building market:" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-4 mt-4", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Market Differentiation:" }),
          " The resume-building market is highly competitive, requiring a distinct value proposition and visual identity."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Balancing Professional and Approachable:" }),
          " Creating a design that conveyed professionalism while remaining approachable and user-friendly."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Conversion Optimization:" }),
          " Crafting a user journey that effectively showcases features while guiding users toward the signup/conversion point."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Multi-device Experience:" }),
          " Ensuring a seamless and engaging experience across desktop, tablet, and mobile devices."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { children: "Visual Demonstration:" }),
          " Effectively showcasing the platform's templates and AI capabilities without overwhelming the user."
        ] })
      ] })
    ] })
  ] });
};
const ProcessSection$1 = () => {
  return /* @__PURE__ */ jsxs("section", { id: "process", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "My Process" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "I approached the OnlineCV landing page design with a systematic process focused on understanding user needs and optimizing for conversions:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-muted/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Research & Analysis" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "Conducted competitive analysis of leading resume platforms" }),
            /* @__PURE__ */ jsx("li", { children: "Reviewed existing user feedback and behavior patterns" }),
            /* @__PURE__ */ jsx("li", { children: "Identified key user pain points and expectations" }),
            /* @__PURE__ */ jsx("li", { children: "Analyzed successful landing page conversion tactics" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-muted/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Strategy & Planning" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "Defined key messaging hierarchy and value propositions" }),
            /* @__PURE__ */ jsx("li", { children: "Mapped optimal user flows and conversion touchpoints" }),
            /* @__PURE__ */ jsx("li", { children: "Established visual identity guidelines and constraints" }),
            /* @__PURE__ */ jsx("li", { children: "Created content strategy aligned with user needs" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-muted/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Design & Iteration" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "Developed wireframes and information architecture" }),
            /* @__PURE__ */ jsx("li", { children: "Created visual design concepts and UI components" }),
            /* @__PURE__ */ jsx("li", { children: "Designed responsive layouts for all device sizes" }),
            /* @__PURE__ */ jsx("li", { children: "Refined design based on stakeholder feedback" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-6 rounded-lg border border-muted/20", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Testing & Validation" }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("li", { children: "Conducted usability testing with target audience" }),
            /* @__PURE__ */ jsx("li", { children: "Gathered feedback on design clarity and visual appeal" }),
            /* @__PURE__ */ jsx("li", { children: "Identified and resolved potential friction points" }),
            /* @__PURE__ */ jsx("li", { children: "Validated design effectiveness against goals" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Design Exploration & Concepts" }),
        /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/lovable-uploads/d276fa41-1389-4da6-b492-bab97db74487.png",
            alt: "OnlineCV Design Concepts showing different color variations and layout designs",
            className: "w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Different color schemes and layout variations explored during the design process" })
      ] })
    ] })
  ] });
};
const SolutionSection$1 = () => {
  return /* @__PURE__ */ jsxs("section", { id: "solution", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "The Solution" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "The final OnlineCV landing page design incorporated several key elements that addressed the identified challenges while creating an engaging and conversion-focused experience:" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8 my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Hero Section" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Crafted a compelling hero section with a clear value proposition, engaging visuals of resume templates, and a prominent CTA. The design immediately communicates the platform's purpose and main benefit while directing user attention to the desired action." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/lovable-uploads/aff82d83-f09c-466e-aac2-29946e8f7b30.png",
              alt: "OnlineCV hero section showing the website interface with resume templates",
              className: "w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The OnlineCV hero section featuring a clean interface, resume template preview, and clear call-to-action" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Feature Showcase" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Designed a visually appealing feature showcase that highlights OnlineCV's key differentiators: AI-powered suggestions, professional templates, and ease of use. Each feature is presented with relevant imagery and concise copy that emphasizes user benefits rather than technical details." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/lovable-uploads/b644f2ad-1249-484d-aafe-dd0118c62098.png",
              alt: "OnlineCV feature showcase highlighting the advantages of using their resume builder",
              className: "w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The advantages section highlighting six key benefits of using OnlineCV for resume creation" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Testimonials & Social Proof" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Integrated authentic user testimonials and credibility markers throughout the page to build trust. The testimonials focus on real outcomes and benefits experienced by users, reinforcing the platform's value proposition." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/lovable-uploads/c4fc6dda-043a-46ec-8f71-c69171ade850.png",
              alt: "Trustpilot testimonials showing positive reviews from OnlineCV users",
              className: "w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Trustpilot reviews showcasing positive user experiences with OnlineCV's resume building platform" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Visual Design System" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Created a refined color palette and typography system that balances professionalism with approachability. The design uses subtle gradients, clean lines, and strategic white space to create a modern yet credible aesthetic that appeals to job seekers across industries." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 mb-8", children: [
          /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
            "img",
            {
              src: "/lovable-uploads/842125b7-1cc0-4fd3-9178-315057bfc996.png",
              alt: "OnlineCV visual design system showing color and UI variations",
              className: "w-full object-cover"
            }
          ) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Color palette and navigation design variations for the OnlineCV platform, showcasing consistent branding across different visual themes" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Responsive Implementation" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Ensured an optimal experience across all devices with a mobile-first approach. The design maintains visual hierarchy and clear CTAs at all breakpoints, with special attention to touch interactions on mobile devices and streamlined content presentation." }) })
        ] })
      ] })
    ] })
  ] });
};
const ResultsSection$1 = () => {
  return /* @__PURE__ */ jsxs("section", { id: "results", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "The Results" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "The redesigned OnlineCV landing page delivered significant improvements across key performance metrics:" }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "+47%" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium mb-4", children: "Conversion Rate" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Significant increase in visitor-to-signup conversion compared to the previous design." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "-28%" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium mb-4", children: "Bounce Rate" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Substantial reduction in users leaving the page without taking any action." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "+52%" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium mb-4", children: "Mobile Engagement" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Increased time spent and interactions from users on mobile devices." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/10 p-8 rounded-lg border border-muted/20 flex flex-col items-center text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary mb-2", children: "+33%" }),
          /* @__PURE__ */ jsx("h4", { className: "text-lg font-medium mb-4", children: "Feature Adoption" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Higher usage rates of premium features by converted users." })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "The redesign also received positive qualitative feedback from users and stakeholders, highlighting the improved clarity, visual appeal, and overall user experience. The new design effectively establishes OnlineCV as a premium offering in the resume-building market while maintaining accessibility for users across different demographics." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-12 mb-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Final Landing Page Design" }),
        /* @__PURE__ */ jsx("div", { className: "border border-muted/20 rounded-lg overflow-hidden", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: "/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png",
            alt: "OnlineCV final landing page showing resume templates and features",
            className: "w-full object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "The final OnlineCV landing page featuring the main hero section with resume templates and key feature highlights" })
      ] })
    ] })
  ] });
};
const LearningsSection$1 = () => {
  return /* @__PURE__ */ jsxs("section", { id: "learnings", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-6", children: "Key Learnings" }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-lg dark:prose-invert max-w-none", children: [
      /* @__PURE__ */ jsx("p", { children: "The OnlineCV landing page project provided valuable insights and learning opportunities:" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-6 my-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Balance is Critical" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "Finding the right balance between professional aesthetics and approachable design was crucial. Too formal, and the site feels inaccessible; too casual, and it loses credibility. The project reinforced the importance of carefully calibrating visual tone to match user expectations." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Visual Hierarchy Drives Conversion" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "The strategic arrangement of visual elements creates a natural flow that guides users toward conversion points. I learned that subtle visual cues and thoughtful spacing can be just as effective as explicit directions in guiding user behavior." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Show, Don't Just Tell" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "For tools like OnlineCV, visual demonstrations of the product in action proved more compelling than descriptive text. The project reinforced that showing realistic examples of templates and outputs significantly increases user confidence and interest." }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-lg overflow-hidden border border-muted/20", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-primary/10 p-6", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Iteration Improves Outcomes" }) }),
          /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("p", { children: "The iterative design process, incorporating feedback at multiple stages, led to substantial improvements in the final product. Each round of testing revealed unexpected insights that wouldn't have been captured in a linear design approach." }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "These learnings have enriched my approach to landing page design and will inform future projects where conversion optimization and brand positioning are key priorities." })
    ] })
  ] });
};
const OnlineCVContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(OnlineCVOverview, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ChallengeSection$1, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ProcessSection$1, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(SolutionSection$1, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ResultsSection$1, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(LearningsSection$1, {})
  ] });
};
const ProjectOverview = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Project Overview" }),
      /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Led the development and design of Wanup's B2B SaaS platform, a sophisticated solution for hotel bookings and loyalty program management. This project focused on creating an intuitive and scalable platform that would serve both hotel partners and end users effectively." }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Client" }),
          /* @__PURE__ */ jsx("p", { children: "Wanup - A leading hotel loyalty program provider aiming to revolutionize the way hotels and guests interact through a modern, digital-first platform." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "My Role" }),
          /* @__PURE__ */ jsx("p", { children: "Senior Product Designer - Responsible for the end-to-end design process, from UX research and wireframing to final UI design and development handoff." })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Timeline" }),
          /* @__PURE__ */ jsx("p", { children: "2 years (Aug 2016 - Jun 2018)" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Tools Used" }),
          /* @__PURE__ */ jsx("p", { children: "Sketch, InVision, Zeplin, Abstract" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Team" }),
          /* @__PURE__ */ jsx("p", { children: "4 Designers, 6 Developers, 2 Product Managers" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden border border-border/50", children: /* @__PURE__ */ jsx(
      ZoomableImage,
      {
        src: "/lovable-uploads/b06acd6a-aa23-4f4d-a84d-b1f6516899fe.png",
        alt: "Supabase Database Schema",
        className: "w-full h-auto"
      }
    ) }),
    /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden border border-border/50", children: /* @__PURE__ */ jsx(
      ZoomableImage,
      {
        src: "/lovable-uploads/17168ae9-eb7c-4ff0-9e04-97d7f8c5db12.png",
        alt: "Wanup Landing Page Design",
        className: "w-full h-auto object-cover"
      }
    ) })
  ] });
};
const ChallengeSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Challenge" }),
    /* @__PURE__ */ jsx("p", { className: "mb-6", children: "Wanup faced several complex challenges in creating a B2B SaaS platform for hotel loyalty programs:" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Technical Complexity" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Integration with multiple hotel booking systems" }),
          /* @__PURE__ */ jsx("li", { children: "Real-time availability and pricing updates" }),
          /* @__PURE__ */ jsx("li", { children: "Complex loyalty point calculation systems" }),
          /* @__PURE__ */ jsx("li", { children: "Multi-currency and multi-language support" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "User Experience" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Balancing features for both B2B and B2C users" }),
          /* @__PURE__ */ jsx("li", { children: "Simplifying complex booking workflows" }),
          /* @__PURE__ */ jsx("li", { children: "Creating intuitive loyalty program management" }),
          /* @__PURE__ */ jsx("li", { children: "Ensuring mobile responsiveness" })
        ] })
      ] })
    ] })
  ] });
};
const ProcessSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Design Process" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-primary/30", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Discovery & Research" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Conducted extensive user research with hotel partners and loyalty program members to understand their needs, pain points, and expectations. This included:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Stakeholder interviews with hotel managers" }),
          /* @__PURE__ */ jsx("li", { children: "User surveys with loyalty program members" }),
          /* @__PURE__ */ jsx("li", { children: "Competitive analysis of existing solutions" }),
          /* @__PURE__ */ jsx("li", { children: "Technical feasibility studies" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative pl-8 border-l-2 border-primary/30", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "UX Design & Information Architecture" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Created a comprehensive information architecture and user flows that addressed the needs of both B2B and B2C users:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "User flow diagrams for key journeys" }),
          /* @__PURE__ */ jsx("li", { children: "Wireframes for critical interfaces" }),
          /* @__PURE__ */ jsx("li", { children: "Interactive prototypes for user testing" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative pl-8", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-primary" }),
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Visual Design & Implementation" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Developed a clean, professional visual design system that balanced functionality with brand identity:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Created responsive UI components" }),
          /* @__PURE__ */ jsx("li", { children: "Developed interactive prototypes" }),
          /* @__PURE__ */ jsx("li", { children: "Conducted usability testing" }),
          /* @__PURE__ */ jsx("li", { children: "Prepared detailed documentation for development" })
        ] })
      ] })
    ] })
  ] });
};
const SolutionSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "The Solution" }),
    /* @__PURE__ */ jsx("p", { className: "mb-8", children: "We developed a comprehensive B2B SaaS platform that simplified hotel loyalty program management while providing an engaging experience for end users." }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Key Features" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "Intuitive dashboard for hotel partners" }),
          /* @__PURE__ */ jsx("li", { children: "Real-time booking management system" }),
          /* @__PURE__ */ jsx("li", { children: "Advanced loyalty point tracking" }),
          /* @__PURE__ */ jsx("li", { children: "Automated reward distribution" }),
          /* @__PURE__ */ jsx("li", { children: "Multi-currency support" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-3", children: "Technical Solutions" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: "API integration with multiple booking systems" }),
          /* @__PURE__ */ jsx("li", { children: "Real-time availability updates" }),
          /* @__PURE__ */ jsx("li", { children: "Responsive design for all devices" }),
          /* @__PURE__ */ jsx("li", { children: "Scalable architecture" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden border border-border/50", children: /* @__PURE__ */ jsx(
        ZoomableImage,
        {
          alt: "Wanup Solution Interface",
          src: "/lovable-uploads/7a1a686d-1706-4fa5-8a38-f8159c0da8b6.png",
          className: "w-full h-auto"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden border border-border/50", children: /* @__PURE__ */ jsx(
        ZoomableImage,
        {
          alt: "Wanup Solution Dashboard",
          src: "/lovable-uploads/cda6b9ef-facc-4dd6-94bf-13fff0127106.png",
          className: "w-full h-auto"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "rounded-lg overflow-hidden border border-border/50", children: /* @__PURE__ */ jsx(
        ZoomableImage,
        {
          alt: "Wanup Platform Interface",
          src: "/lovable-uploads/73beadac-1cc9-4bcf-a948-ab2e0e335f7f.png",
          className: "w-full h-auto"
        }
      ) })
    ] })
  ] });
};
const ResultsSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Results & Impact" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 mb-10", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Business Impact" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "30% increase in hotel partner adoption" }),
            " within the first six months"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "45% improvement in booking completion rates" }),
            " after UX optimizations"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "25% reduction in customer support tickets" }),
            " related to platform usage"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "User Satisfaction" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "92% satisfaction rate" }),
            " among hotel partners"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "85% increase in loyalty program engagement" }),
            " from end users"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "4.5/5 average rating" }),
            " from user feedback surveys"
          ] })
        ] })
      ] })
    ] })
  ] });
};
const LearningsSection = () => {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-6", children: "Key Learnings" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Project Insights" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Balance is crucial" }),
            " - Meeting both B2B and B2C needs requires careful consideration of different user perspectives"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Iterative development works" }),
            " - Regular feedback and incremental improvements led to better outcomes"
          ] }),
          /* @__PURE__ */ jsxs("li", { children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Technical limitations matter" }),
            " - Understanding system constraints early helps in designing more realistic solutions"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-muted/20 p-6 rounded-lg border border-border/50", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-4", children: "Future Considerations" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-6 space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: "Expand integration capabilities with more booking systems" }),
          /* @__PURE__ */ jsx("li", { children: "Implement advanced analytics for better insights" }),
          /* @__PURE__ */ jsx("li", { children: "Develop more automated features for routine tasks" }),
          /* @__PURE__ */ jsx("li", { children: "Enhanced mobile app experience" })
        ] })
      ] })
    ] })
  ] });
};
const WanupWebappContent = () => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-16", children: [
    /* @__PURE__ */ jsx(ProjectOverview, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ChallengeSection, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ProcessSection, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(SolutionSection, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(ResultsSection, {}),
    /* @__PURE__ */ jsx(Separator, { className: "bg-muted/50" }),
    /* @__PURE__ */ jsx(LearningsSection, {})
  ] });
};
const projectsWithContent = [
  {
    id: 5,
    title: "Mobile App Design",
    slug: "mobile-app-design",
    description: "Designed cross-platform mobile applications for iOS and Android that increased user retention by 35% and improved app store ratings by 1.5 stars.",
    category: "Mobile",
    image: "/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png",
    heroImages: [
      "/lovable-uploads/5cb0453f-dc0d-4b19-852f-8c3131354284.png"
    ],
    link: "/projects/mobile-app-design",
    content: /* @__PURE__ */ jsx(MobileAppDesignContent, {})
  },
  {
    id: 1,
    title: "Design Systems",
    slug: "design-systems",
    description: "Created and maintained a comprehensive design system that increased development efficiency by 30% and ensured visual consistency across multiple products.",
    category: "Design System",
    image: "/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png",
    heroImages: [
      "/lovable-uploads/3dcf1c6d-4dde-437c-b626-bbe99631bf3f.png"
    ],
    link: "/projects/design-systems",
    content: /* @__PURE__ */ jsx(LeadtechGroupContent, {})
  },
  {
    id: 2,
    title: "DesignOps Workflow",
    slug: "designops-workflow",
    description: "Implemented and optimized DesignOps processes that enhanced team collaboration, reduced handoff time by 40%, and improved overall design efficiency.",
    category: "DesignOps",
    image: "/lovable-uploads/ed4aab16-f8c3-46b1-be10-d44758f7d149.png",
    heroImages: [
      "/lovable-uploads/57eeac73-35bd-4bdd-bd6d-e697ef033612.png"
    ],
    link: "/projects/designops-workflow",
    content: /* @__PURE__ */ jsx(DesignOpsWorkflowContent, {})
  },
  {
    id: 3,
    title: "Wanup Webapp B2B SaaS",
    slug: "wanup-webapp-b2b-saas",
    description: "Designed and developed a comprehensive B2B SaaS platform for hotel bookings and loyalty program management, featuring an intuitive user interface and streamlined booking experience.",
    category: "UX/UI",
    image: "/lovable-uploads/241d29d3-0fb8-472d-a81c-4925e5256f9b.png",
    heroImages: [
      "/lovable-uploads/241d29d3-0fb8-472d-a81c-4925e5256f9b.png",
      "/lovable-uploads/8e40ce72-3e8b-4985-afc8-8f92e34cfc66.png",
      "/lovable-uploads/5ea3a279-d974-4fe4-85f5-ccb57fffa6a2.png",
      "/lovable-uploads/d18bb0bd-850d-42b3-88bc-b035d36fb153.png",
      "/lovable-uploads/131a06a8-d704-4c76-966d-3237434734d8.png"
    ],
    link: "/projects/wanup-webapp-b2b-saas",
    content: /* @__PURE__ */ jsx(WanupWebappContent, {})
  },
  {
    id: 4,
    title: "Data Visualization",
    slug: "data-visualization",
    description: "Developed intuitive dashboards and data visualizations that increased stakeholder engagement by 20% and improved decision-making processes.",
    category: "Product Design",
    image: "/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png",
    heroImages: [
      "/lovable-uploads/b3fb73d0-b03b-495d-81d7-fb908ec0b8e6.png"
    ],
    link: "/projects/data-visualization",
    content: /* @__PURE__ */ jsx(DataVisualizationContent, {})
  },
  {
    id: 7,
    title: "Cross-team Collaboration Framework",
    slug: "cross-team-collaboration-framework",
    description: "Created a structured DesignOps framework that improved collaboration between design, development, and product teams, reducing project delivery time by 35%.",
    category: "DesignOps",
    image: "/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png",
    heroImages: [
      "/lovable-uploads/a8a3c542-efbf-46c2-a78b-bcd8a2ddcb83.png"
    ],
    link: "/projects/cross-team-collaboration-framework",
    content: /* @__PURE__ */ jsx(CrossTeamCollaborationContent, {})
  },
  {
    id: 9,
    title: "OnlineCV Landing Page",
    slug: "onlinecv-landing-page",
    description: "Designed a conversion-focused landing page for OnlineCV with an intuitive user flow, refined color palette, and mobile-first approach that enhanced user engagement.",
    category: "UI Design",
    image: "/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png",
    heroImages: [
      "/lovable-uploads/b45151f4-a928-4038-8b12-0ac67c4ed2a9.png"
    ],
    link: "/projects/onlinecv-landing-page",
    content: /* @__PURE__ */ jsx(OnlineCVContent, {})
  },
  {
    id: 6,
    title: "VideoUp Landing Page",
    slug: "videoup-landing-page",
    description: "Designed a conversion-driven landing page for VideoUp, an AI-powered video editing app, with modern aesthetics and optimized user experience.",
    category: "UI Design",
    image: "/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png",
    heroImages: [
      "/lovable-uploads/5d3e945c-e1a2-425a-925e-7f2349820971.png"
    ],
    link: "/projects/videoup-landing-page",
    content: /* @__PURE__ */ jsx(VideoUpLandingContent, {})
  }
];
const ProjectPage = () => {
  const { id, slug } = useParams();
  const project = id ? projectsWithContent.find((p) => p.id.toString() === id) : projectsWithContent.find((p) => p.slug === slug);
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("Project page mounted, id:", id, "slug:", slug, "project:", project);
  }, [id, slug, project]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex flex-col", children: /* @__PURE__ */ jsx("main", { className: "flex-grow", children: /* @__PURE__ */ jsx(ProjectDetail, { project }) }) });
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-gray-100", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold mb-4", children: "404" }),
    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 mb-4", children: "Oops! Page not found" }),
    /* @__PURE__ */ jsx("a", { href: "/", className: "text-blue-500 hover:text-blue-700 underline", children: "Return to Home" })
  ] }) });
};
const Logo = () => {
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/",
      className: "text-xl font-display font-bold relative z-10 transition-colors duration-300",
      children: [
        "azportfolio",
        /* @__PURE__ */ jsx("span", { className: "text-primary", children: ".net" })
      ]
    }
  );
};
const NavLink = ({ href, label, onClick }) => {
  return /* @__PURE__ */ jsx(
    Link,
    {
      to: href,
      className: "text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
      onClick,
      children: label
    }
  );
};
const initialState = {
  theme: "system",
  setTheme: () => null
};
const ThemeProviderContext = createContext(initialState);
function ThemeProvider({
  children,
  defaultTheme = "system"
}) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("ui-theme") || defaultTheme
  );
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      root.classList.add(systemTheme);
      return;
    }
    root.classList.add(theme);
  }, [theme]);
  const value = {
    theme,
    setTheme: (theme2) => {
      localStorage.setItem("ui-theme", theme2);
      setTheme(theme2);
    }
  };
  return /* @__PURE__ */ jsx(ThemeProviderContext.Provider, { value, children });
}
const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === void 0)
    throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
function ThemeToggle$1({ className }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300",
        isDark ? "bg-zinc-950 border border-zinc-800" : "bg-white border border-zinc-200 shadow-sm",
        className
      ),
      onClick: () => setTheme(isDark ? "light" : "dark"),
      role: "button",
      tabIndex: 0,
      "aria-label": "Toggle theme",
      children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center w-full", children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
              isDark ? "transform translate-x-0 bg-zinc-800" : "transform translate-x-8 bg-gray-100"
            ),
            children: isDark ? /* @__PURE__ */ jsx(
              Moon,
              {
                className: "w-4 h-4 text-white",
                strokeWidth: 1.5
              }
            ) : /* @__PURE__ */ jsx(
              Sun,
              {
                className: "w-4 h-4 text-gray-700",
                strokeWidth: 1.5
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300",
              isDark ? "bg-transparent" : "transform -translate-x-8"
            ),
            children: isDark ? /* @__PURE__ */ jsx(
              Sun,
              {
                className: "w-4 h-4 text-gray-500",
                strokeWidth: 1.5
              }
            ) : /* @__PURE__ */ jsx(
              Moon,
              {
                className: "w-4 h-4 text-black",
                strokeWidth: 1.5
              }
            )
          }
        )
      ] })
    }
  );
}
function ThemeToggle() {
  return /* @__PURE__ */ jsx(ThemeToggle$1, {});
}
const DesktopNav = ({
  navItems,
  getNavItemHref,
  onDownloadCV
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center", children: [
    /* @__PURE__ */ jsx("nav", { className: "flex items-center space-x-8 mr-6", children: navItems.map((item) => /* @__PURE__ */ jsx(
      NavLink,
      {
        href: getNavItemHref(item.href),
        label: item.label
      },
      item.href
    )) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(ThemeToggle, {}),
      /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300",
          onClick: onDownloadCV,
          children: [
            /* @__PURE__ */ jsx(FileText, { size: 16, className: "mr-2" }),
            "Download CV"
          ]
        }
      )
    ] })
  ] });
};
const MobileMenuToggle = ({ isOpen, onToggle }) => {
  return /* @__PURE__ */ jsxs("div", { className: "md:hidden flex items-center gap-4", children: [
    /* @__PURE__ */ jsx(ThemeToggle, {}),
    /* @__PURE__ */ jsx(
      Button,
      {
        variant: "outline",
        size: "icon",
        className: "text-foreground border-border",
        onClick: onToggle,
        "aria-label": isOpen ? "Close menu" : "Open menu",
        children: /* @__PURE__ */ jsx(Menu, { size: 24 })
      }
    )
  ] });
};
const MobileMenu = ({
  isOpen,
  navItems,
  onLinkClick,
  onDownloadCV
}) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "fixed inset-0 z-50 bg-background/95 backdrop-blur-md md:hidden transition-all duration-300 flex flex-col items-center overflow-y-auto",
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-6 right-6", children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", onClick: onLinkClick, className: "text-foreground", children: [
          /* @__PURE__ */ jsx(X, { size: 24 }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" })
        ] }) }),
        /* @__PURE__ */ jsxs("nav", { className: "flex flex-col items-center space-y-6 py-24 px-6 w-full", children: [
          navItems.map((item) => /* @__PURE__ */ jsx(
            Link,
            {
              to: item.href,
              className: "text-xl font-medium transition-colors hover:text-primary",
              onClick: onLinkClick,
              children: item.label
            },
            item.href
          )),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              className: "mt-8 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 w-full max-w-[200px]",
              onClick: () => {
                onDownloadCV();
                onLinkClick();
              },
              children: [
                /* @__PURE__ */ jsx(FileText, { size: 18, className: "mr-2" }),
                "Download CV"
              ]
            }
          )
        ] })
      ]
    }
  );
};
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cvUrl, setCvUrl] = useState(null);
  const location = useLocation();
  const isProjectPage = location.pathname.includes("/project/");
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);
  const navItems = isProjectPage ? [
    { label: "Home", href: "/" },
    { label: "Case Study", href: "/#case-study" },
    { label: "Personal Projects", href: "/personal-projects" },
    { label: "Resources", href: "/resources" }
  ] : [
    { label: "Home", href: "/" },
    { label: "Case Study", href: "/#case-study" },
    { label: "Personal Projects", href: "/personal-projects" },
    { label: "Resources", href: "/resources" },
    { label: "About", href: "/#about" },
    { label: "Process", href: "/#process" },
    { label: "Contact", href: "/#contact" }
  ];
  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        const { data, error } = await supabase.storage.from("cv_files").list("", {
          limit: 1,
          sortBy: { column: "created_at", order: "desc" }
        });
        if (error) throw error;
        if (data && data.length > 0) {
          const latestFile = data[0];
          const { data: { publicUrl } } = supabase.storage.from("cv_files").getPublicUrl(latestFile.name);
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error("Error fetching CV:", error);
      }
    };
    fetchLatestCV();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  const handleDownloadCV = () => {
    window.open(cvUrl || "/alfonso-cv.pdf", "_blank");
  };
  const getNavItemHref = (href) => {
    if (isProjectPage && href.startsWith("/#")) {
      return href.replace("#", "");
    }
    return href;
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  return /* @__PURE__ */ jsx(
    "header",
    {
      className: cn(
        "fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-4 transition-all duration-300 will-change-transform",
        isScrolled ? "glass py-3" : "bg-transparent"
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(Logo, {}),
        /* @__PURE__ */ jsx(
          DesktopNav,
          {
            navItems,
            getNavItemHref,
            onDownloadCV: handleDownloadCV
          }
        ),
        /* @__PURE__ */ jsx(
          MobileMenuToggle,
          {
            isOpen: mobileMenuOpen,
            onToggle: toggleMobileMenu
          }
        ),
        /* @__PURE__ */ jsx(
          MobileMenu,
          {
            isOpen: mobileMenuOpen,
            navItems,
            onLinkClick: () => setMobileMenuOpen(false),
            onDownloadCV: handleDownloadCV
          }
        )
      ] })
    }
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  }
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
function FooterSection({ className }) {
  useTheme();
  const [cvUrl, setCvUrl] = useState(null);
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  useEffect(() => {
    const fetchLatestCV = async () => {
      try {
        const { data, error } = await supabase.storage.from("cv_files").list("", {
          limit: 1,
          sortBy: { column: "created_at", order: "desc" }
        });
        if (error) throw error;
        if (data && data.length > 0) {
          const latestFile = data[0];
          const { data: { publicUrl } } = supabase.storage.from("cv_files").getPublicUrl(latestFile.name);
          setCvUrl(publicUrl);
        }
      } catch (error) {
        console.error("Error fetching CV:", error);
      }
    };
    fetchLatestCV();
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const cvDownloadUrl = cvUrl || "/alfonso-cv.pdf";
  return /* @__PURE__ */ jsx("footer", { className: "w-full border-t bg-background/80 backdrop-blur-md", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-12 md:py-24", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid gap-12 md:grid-cols-7 lg:gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-3", children: [
        /* @__PURE__ */ jsx("h2", { className: "mb-6 text-3xl font-bold tracking-tight", children: "Alfonso Zamorano" }),
        /* @__PURE__ */ jsx("p", { className: "mb-6 text-muted-foreground max-w-md", children: "Digital product designer with extensive experience in DesignOps and Product design. Specialized in optimizing workflows, improving collaboration, and enhancing efficiency within design teams." }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-4 mb-8", children: [
          /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "rounded-full", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "https://www.linkedin.com/in/alfonsozamorano/", target: "_blank", rel: "noopener noreferrer", children: [
              /* @__PURE__ */ jsx(Linkedin, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "LinkedIn" })
            ] }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Connect on LinkedIn" }) })
          ] }) }),
          /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "rounded-full", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "mailto:holalfonso@gmail.com", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Email" })
            ] }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Email me" }) })
          ] }) }),
          /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", className: "rounded-full", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: "tel:+34678815239", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Phone" })
            ] }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: "Call me" }) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Navigate" }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#case-study", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Case Study" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/personal-projects", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Personal Projects" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#about", className: "text-muted-foreground hover:text-foreground transition-colors", children: "About Me" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#process", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Process" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/#contact", className: "text-muted-foreground hover:text-foreground transition-colors", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "md:col-span-2", children: /* @__PURE__ */ jsxs("div", { className: "bg-primary/5 rounded-lg p-6 border border-primary/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
          /* @__PURE__ */ jsx(User, { className: "h-5 w-5 text-primary mr-2" }),
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold", children: "Professional Experience" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Leadtech group" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Senior Product Designer / DesignOPS" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Wanup" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Senior Product Designer" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(Button, { variant: "default", size: "sm", className: "w-full group", asChild: true, children: /* @__PURE__ */ jsxs("a", { href: cvDownloadUrl, download: true, target: "_blank", rel: "noopener noreferrer", children: [
          /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-4 w-4 group-hover:animate-pulse" }),
          "Download CV"
        ] }) }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/40 pt-8 text-center md:flex-row", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
        "© ",
        currentYear,
        " Alfonso Zamorano. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "ghost",
          size: "sm",
          onClick: scrollToTop,
          className: "text-sm text-muted-foreground hover:text-foreground",
          children: [
            /* @__PURE__ */ jsx(ArrowUp, { className: "mr-2 h-4 w-4" }),
            "Back to top"
          ]
        }
      ) })
    ] })
  ] }) });
}
const Footer = () => {
  return /* @__PURE__ */ jsx(FooterSection, {});
};
const CursorEffect = () => {
  return null;
};
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === action.toast.id ? { ...t, ...action.toast } : t
        )
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  }
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    ToastPrimitives.Root,
    {
      ref,
      className: cn(toastVariants({ variant }), className),
      ...props
    }
  );
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
      className
    ),
    ...props
  }
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
  }
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Title,
  {
    ref,
    className: cn("text-sm font-semibold", className),
    ...props
  }
));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  ToastPrimitives.Description,
  {
    ref,
    className: cn("text-sm opacity-90", className),
    ...props
  }
));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxs(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxs(Toast, { ...props, children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsx(ToastTitle, { children: title }),
          description && /* @__PURE__ */ jsx(ToastDescription, { children: description })
        ] }),
        action,
        /* @__PURE__ */ jsx(ToastClose, {})
      ] }, id);
    }),
    /* @__PURE__ */ jsx(ToastViewport, {})
  ] });
}
const CVUploader = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [currentCV, setCurrentCV] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  useEffect(() => {
    fetchCurrentCV();
  }, []);
  const fetchCurrentCV = async () => {
    try {
      const { data: files, error } = await supabase.storage.from("cv_files").list("", {
        limit: 1,
        sortBy: { column: "created_at", order: "desc" }
      });
      if (error) throw error;
      if (files && files.length > 0) {
        const { data: { publicUrl } } = supabase.storage.from("cv_files").getPublicUrl(files[0].name);
        setCurrentCV(publicUrl);
      }
    } catch (error) {
      console.error("Error fetching current CV:", error);
    }
  };
  const deleteCurrentCV = async () => {
    var _a;
    if (!currentCV) return;
    setIsDeleting(true);
    try {
      const fileName = (_a = currentCV.split("/").pop()) == null ? void 0 : _a.split("?")[0];
      if (!fileName) throw new Error("Could not extract filename");
      const { error } = await supabase.storage.from("cv_files").remove([fileName]);
      if (error) throw error;
      setCurrentCV(null);
      toast({
        title: "CV deleted",
        description: "Current CV has been removed successfully"
      });
    } catch (error) {
      console.error("Error deleting CV:", error);
      toast({
        title: "Delete failed",
        description: "There was a problem deleting the CV",
        variant: "destructive"
      });
    } finally {
      setIsDeleting(false);
    }
  };
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    if (file.type !== "application/pdf") {
      toast({
        title: "Invalid file type",
        description: "Please upload a PDF file",
        variant: "destructive"
      });
      return;
    }
    setIsUploading(true);
    try {
      try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets == null ? void 0 : buckets.some((bucket) => bucket.name === "cv_files");
        if (!bucketExists) {
          await supabase.rpc("create_cv_files_bucket");
          console.log("CV files bucket created");
        }
      } catch (error2) {
        console.error("Error checking/creating bucket:", error2);
      }
      const fileName = `cv-${Date.now()}.pdf`;
      const { data, error } = await supabase.storage.from("cv_files").upload(fileName, file, {
        cacheControl: "3600",
        upsert: true
      });
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from("cv_files").getPublicUrl(fileName);
      setUploadedFile(publicUrl);
      setCurrentCV(publicUrl);
      toast({
        title: "Success!",
        description: "CV uploaded successfully"
      });
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your file",
        variant: "destructive"
      });
    } finally {
      setIsUploading(false);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    currentCV && /* @__PURE__ */ jsxs("div", { className: "bg-muted/30 rounded-lg p-4 border border-border/50", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-medium mb-3 text-foreground", children: "CV Actual" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-primary" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "CV disponible para descarga" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: () => window.open(currentCV, "_blank"),
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 mr-2" }),
                "Ver"
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "destructive",
              size: "sm",
              onClick: deleteCurrentCV,
              disabled: isDeleting,
              children: isDeleting ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: "cv-upload",
          className: "cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-primary/40 rounded-md p-4 hover:bg-primary/5 transition-colors",
          children: isUploading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-primary", children: [
            /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
            /* @__PURE__ */ jsx("span", { children: "Subiendo CV..." })
          ] }) : uploadedFile ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-primary", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsx("span", { children: "CV subido exitosamente" })
          ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxs("span", { children: [
              currentCV ? "Reemplazar CV actual" : "Subir nuevo CV",
              " (PDF)"
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        "input",
        {
          id: "cv-upload",
          type: "file",
          accept: ".pdf",
          className: "hidden",
          onChange: handleFileChange,
          disabled: isUploading
        }
      )
    ] }) }),
    uploadedFile && /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-2", children: [
      /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "Archivo CV subido y listo para descarga" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "w-full",
          onClick: () => {
            navigator.clipboard.writeText(uploadedFile);
            toast({
              title: "URL copiada!",
              description: "Enlace de descarga del CV copiado al portapapeles"
            });
          },
          children: "Copiar Enlace de Descarga"
        }
      )
    ] })
  ] });
};
const AdminPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-24 px-6 md:px-16 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
      /* @__PURE__ */ jsxs(
        Link,
        {
          to: "/",
          className: "inline-flex items-center text-sm text-primary mb-8 hover:underline transition-all",
          children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
            " Back to Home"
          ]
        }
      ),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-8", children: "Admin Dashboard" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md border border-border/50", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Upload CV" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Upload a new PDF file that will be used as the downloadable CV across the site." }),
          /* @__PURE__ */ jsx(CVUploader, {})
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md border border-border/50", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Site Image Management" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Upload and manage images used throughout the site." }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Link, { to: "/site-images", children: [
            /* @__PURE__ */ jsx(Image, { className: "h-4 w-4" }),
            "Manage Images"
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md border border-border/50", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Code Snippets" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Store and manage code snippets for easy access outside of Lovable." }),
          /* @__PURE__ */ jsx(Button, { asChild: true, className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs(Link, { to: "/code-snippets", children: [
            /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
            "Manage Code Snippets"
          ] }) })
        ] })
      ] })
    ] }) })
  ] });
};
const UploadArea = ({ isUploading, onFileSelect }) => {
  return /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-4", children: /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "image-upload",
        className: "cursor-pointer flex items-center justify-center w-full border-2 border-dashed border-primary/40 rounded-md p-4 hover:bg-primary/5 transition-colors",
        children: isUploading ? /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-primary", children: [
          /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 animate-spin" }),
          /* @__PURE__ */ jsx("span", { children: "Uploading..." })
        ] }) : /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2 text-muted-foreground", children: [
          /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5" }),
          /* @__PURE__ */ jsx("span", { children: "Upload Image" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "input",
      {
        id: "image-upload",
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: onFileSelect,
        disabled: isUploading
      }
    )
  ] }) });
};
const ImagePreview = ({
  imageUrl,
  aspectRatio,
  onDelete,
  onReset
}) => {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxs(AspectRatio, { ratio: aspectRatio, className: "bg-muted rounded-lg overflow-hidden relative group", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: imageUrl,
          alt: "Uploaded image",
          className: "w-full h-full object-cover"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center", children: /* @__PURE__ */ jsxs(
        Button,
        {
          variant: "destructive",
          size: "sm",
          onClick: onDelete,
          className: "flex items-center space-x-1",
          children: [
            /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4 mr-1" }),
            "Delete Image"
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex space-x-2", children: [
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          className: "w-full",
          onClick: () => {
            navigator.clipboard.writeText(imageUrl);
            toast({
              title: "URL copied!",
              description: "Image URL copied to clipboard"
            });
          },
          children: "Copy URL"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          variant: "outline",
          size: "sm",
          onClick: onReset,
          children: "Upload New"
        }
      )
    ] })
  ] });
};
const useImageStorage = (bucketName) => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  useEffect(() => {
    const checkBucketExists = async () => {
      try {
        const { data: buckets } = await supabase.storage.listBuckets();
        const bucketExists = buckets == null ? void 0 : buckets.some((bucket) => bucket.name === bucketName);
        if (!bucketExists) {
          console.log(`${bucketName} bucket not found. Make sure it exists in Supabase storage.`);
        } else {
          console.log(`${bucketName} bucket found successfully.`);
        }
      } catch (error) {
        console.error("Error checking bucket:", error);
      }
    };
    checkBucketExists();
  }, [bucketName]);
  const uploadImage = async (file) => {
    if (!file) return null;
    if (!file.type.startsWith("image/")) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (jpg, png, gif, etc.)",
        variant: "destructive"
      });
      return null;
    }
    setIsUploading(true);
    try {
      const fileName = `image-${Date.now()}.${file.name.split(".").pop()}`;
      const { data, error } = await supabase.storage.from(bucketName).upload(fileName, file, {
        cacheControl: "3600",
        upsert: true
      });
      if (error) throw error;
      const { data: { publicUrl } } = supabase.storage.from(bucketName).getPublicUrl(fileName);
      setUploadedImage(publicUrl);
      toast({
        title: "Success!",
        description: "Image uploaded successfully"
      });
      return publicUrl;
    } catch (error) {
      console.error("Error uploading file:", error);
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your image",
        variant: "destructive"
      });
      return null;
    } finally {
      setIsUploading(false);
    }
  };
  const deleteImage = async () => {
    if (!uploadedImage) return;
    try {
      const url = new URL(uploadedImage);
      const pathSegments = url.pathname.split("/");
      const fileName = pathSegments[pathSegments.length - 1];
      const { error } = await supabase.storage.from(bucketName).remove([fileName]);
      if (error) throw error;
      setUploadedImage(null);
      toast({
        title: "Success!",
        description: "Image deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting file:", error);
      toast({
        title: "Delete failed",
        description: "There was a problem deleting your image",
        variant: "destructive"
      });
    }
  };
  return {
    isUploading,
    uploadedImage,
    setUploadedImage,
    uploadImage,
    deleteImage
  };
};
const ImageUploader = ({
  bucketName = "site_images",
  onImageUploaded,
  aspectRatio = 16 / 9,
  maxWidth = "100%"
}) => {
  const {
    isUploading,
    uploadedImage,
    setUploadedImage,
    uploadImage,
    deleteImage
  } = useImageStorage(bucketName);
  const handleFileChange = async (e) => {
    var _a;
    const file = (_a = e.target.files) == null ? void 0 : _a[0];
    if (!file) return;
    const publicUrl = await uploadImage(file);
    if (publicUrl && onImageUploaded) {
      onImageUploaded(publicUrl);
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "space-y-4", style: { maxWidth }, children: !uploadedImage ? /* @__PURE__ */ jsx(
    UploadArea,
    {
      isUploading,
      onFileSelect: handleFileChange
    }
  ) : /* @__PURE__ */ jsx(
    ImagePreview,
    {
      imageUrl: uploadedImage,
      aspectRatio,
      onDelete: deleteImage,
      onReset: () => setUploadedImage(null)
    }
  ) });
};
const Tabs = TabsPrimitive.Root;
const TabsList = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.List,
  {
    ref,
    className: cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    ),
    ...props
  }
));
TabsList.displayName = TabsPrimitive.List.displayName;
const TabsTrigger = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Trigger,
  {
    ref,
    className: cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    ),
    ...props
  }
));
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;
const TabsContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  TabsPrimitive.Content,
  {
    ref,
    className: cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    ),
    ...props
  }
));
TabsContent.displayName = TabsPrimitive.Content.displayName;
const Collapsible = CollapsiblePrimitive.Root;
const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
const CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;
const SiteImages = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [expandedInfo, setExpandedInfo] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase.storage.from("site_images").list();
      if (error) throw error;
      const imagesWithUrls = await Promise.all(
        data.filter((file) => !file.id.endsWith("/")).map(async (file) => {
          const { data: { publicUrl } } = supabase.storage.from("site_images").getPublicUrl(file.name);
          return {
            name: file.name,
            url: publicUrl
          };
        })
      );
      setImages(imagesWithUrls);
    } catch (error) {
      console.error("Error fetching images:", error);
      toast({
        title: "Error",
        description: "Failed to load images",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  const handleImageDelete = async (fileName) => {
    try {
      const { error } = await supabase.storage.from("site_images").remove([fileName]);
      if (error) throw error;
      setImages(images.filter((img) => img.name !== fileName));
      toast({
        title: "Success",
        description: "Image deleted successfully"
      });
    } catch (error) {
      console.error("Error deleting image:", error);
      toast({
        title: "Error",
        description: "Failed to delete image",
        variant: "destructive"
      });
    }
  };
  const handleRefresh = () => {
    setRefreshing(true);
    fetchImages();
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-24 px-6 md:px-16 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/admin",
            className: "inline-flex items-center text-sm text-primary hover:underline transition-all",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
              " Back to Admin"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "sm",
            className: "flex items-center gap-1",
            onClick: handleRefresh,
            disabled: refreshing || isLoading,
            children: [
              refreshing ? /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }) : /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" }),
              "Refresh"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Site Images" }),
      /* @__PURE__ */ jsxs(Collapsible, { open: expandedInfo, onOpenChange: setExpandedInfo, className: "mb-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-2", children: "Quick image management for your portfolio site" }),
          /* @__PURE__ */ jsx(CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", children: expandedInfo ? /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(ChevronsUpDown, { className: "h-4 w-4" }) }) })
        ] }),
        /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx(Card, { className: "bg-muted/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6 text-sm", children: [
          /* @__PURE__ */ jsx("p", { className: "mb-2", children: "This page allows you to efficiently manage all images used in your portfolio:" }),
          /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("li", { children: [
              "Use ",
              /* @__PURE__ */ jsx("strong", { children: "Upload New" }),
              " to add new images to your site"
            ] }),
            /* @__PURE__ */ jsxs("li", { children: [
              "The ",
              /* @__PURE__ */ jsx("strong", { children: "Image Library" }),
              " tab shows all uploaded images"
            ] }),
            /* @__PURE__ */ jsx("li", { children: "Hover over any image to copy its URL or delete it" }),
            /* @__PURE__ */ jsx("li", { children: "Use copied URLs in your project content" })
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "library", className: "w-full", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "library", children: "Image Library" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "upload", children: "Upload New" })
        ] }),
        /* @__PURE__ */ jsx(TabsContent, { value: "upload", className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md border border-border/50", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold mb-4", children: "Upload New Image" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Upload images to be used throughout the site. Images will be stored in the Supabase storage bucket." }),
          /* @__PURE__ */ jsx(
            ImageUploader,
            {
              bucketName: "site_images",
              onImageUploaded: () => fetchImages(),
              maxWidth: "600px"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx(TabsContent, { value: "library", children: /* @__PURE__ */ jsxs("div", { className: "bg-card rounded-xl p-6 shadow-md border border-border/50", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-4", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Image Library" }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
              images.length,
              " images"
            ] })
          ] }),
          isLoading ? /* @__PURE__ */ jsx("div", { className: "py-12 flex justify-center", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-6 w-6 border-b-2 border-primary" }),
            /* @__PURE__ */ jsx("span", { children: "Loading images..." })
          ] }) }) : images.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "py-12 text-center", children: [
            /* @__PURE__ */ jsx(Image, { className: "h-12 w-12 mx-auto mb-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-medium mb-2", children: "No images found" }),
            /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-6", children: "Start by uploading some images using the upload tab." })
          ] }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: images.map((image) => /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden group", children: [
            /* @__PURE__ */ jsxs(AspectRatio, { ratio: 16 / 9, children: [
              /* @__PURE__ */ jsx(
                "img",
                {
                  src: image.url,
                  alt: image.name,
                  className: "w-full h-full object-cover",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "secondary",
                    size: "sm",
                    onClick: () => {
                      navigator.clipboard.writeText(image.url);
                      toast({
                        title: "URL copied!",
                        description: "Image URL copied to clipboard"
                      });
                    },
                    className: "w-32",
                    children: "Copy URL"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "destructive",
                    size: "sm",
                    onClick: () => handleImageDelete(image.name),
                    className: "w-32",
                    children: "Delete"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "p-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm truncate", title: image.name, children: image.name }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  className: "h-6 w-6 p-0",
                  onClick: () => {
                    navigator.clipboard.writeText(image.url);
                    toast({
                      title: "URL copied!",
                      variant: "default",
                      description: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(CheckCheck, { className: "h-4 w-4" }),
                        /* @__PURE__ */ jsx("span", { children: "URL copied to clipboard" })
                      ] })
                    });
                  },
                  children: /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "lucide lucide-clipboard", children: [
                    /* @__PURE__ */ jsx("rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1" }),
                    /* @__PURE__ */ jsx("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" })
                  ] })
                }
              )
            ] }) })
          ] }, image.name)) })
        ] }) })
      ] })
    ] }) })
  ] });
};
const AboutPage = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "About — Alfonso Zamorano, Senior Product Designer & DesignOps Specialist" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "10+ years of experience as a Senior Product Designer and DesignOps Specialist. Worked in fintech, SaaS, and e-commerce. Based in Europe, available for freelance and full-time roles." }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "About Alfonso Zamorano — Senior Product Designer & DesignOps Specialist" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "10+ years designing digital products across fintech, SaaS and e-commerce. Available for new opportunities." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://azportfolio.net/about" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "profile" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://azportfolio.net/about" })
    ] }),
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsx("div", { className: "pt-32 pb-24 px-6 md:px-16 lg:px-24", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-8", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center text-sm text-primary hover:underline transition-all",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
              " Back to Home"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/site-images",
            className: "text-sm bg-primary/10 text-primary px-3 py-1.5 rounded-md hover:bg-primary/20 transition-colors",
            children: "Manage Images"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-display font-bold mb-6", children: "About Me" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-12", children: [
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-primary" }),
            "Professional Profile"
          ] }),
          /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
            /* @__PURE__ */ jsx("p", { className: "text-lg mb-4", children: "Digital product designer with extensive experience in DesignOps and Product design. Specialized in optimizing workflows, improving collaboration, and enhancing efficiency within design teams. Expert in Figma, Sketch, Zeplin, and Abstract, with an agile mindset through SCRUM methodologies and tools like Jira/Confluence." }),
            /* @__PURE__ */ jsx("h3", { className: "font-medium mb-2", children: "Key skills:" }),
            /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: "UI design and user experience (UX)" }),
              /* @__PURE__ */ jsx("li", { children: "Creation and maintenance of Design Systems" }),
              /* @__PURE__ */ jsx("li", { children: "Digital product design and growth strategies" }),
              /* @__PURE__ */ jsx("li", { children: "Automation and process optimization within design teams (DesignOps)" }),
              /* @__PURE__ */ jsx("li", { children: "Quantitative and qualitative data analysis to improve decision-making" }),
              /* @__PURE__ */ jsx("li", { children: "Evaluation of success metrics and insight-based optimization" }),
              /* @__PURE__ */ jsx("li", { children: "Branding and graphic design" })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("section", { children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Briefcase, { className: "h-5 w-5 text-primary" }),
            "Experience"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Leadtech group" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Senior Product Designer / DesignOPS" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { children: "Oct. 2018 - Present" })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsx("li", { children: "Implemented and optimized DesignOps processes to enhance team collaboration and efficiency." }),
                /* @__PURE__ */ jsx("li", { children: "Created and maintained the Design System, ensuring visual consistency and scalability." }),
                /* @__PURE__ */ jsx("li", { children: "Designed digital experiences for different stages of the customer journey, focusing on iOS and Android apps." }),
                /* @__PURE__ */ jsx("li", { children: "Reduced data load times by 15% and improved visual consistency by 25%." }),
                /* @__PURE__ */ jsx("li", { children: "Developed dashboards and data visualizations, increasing stakeholder engagement by 20%." }),
                /* @__PURE__ */ jsx("li", { children: "Applied quantitative and qualitative data analysis to measure and enhance user experience." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Natevoo" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Senior UX Designer" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { children: "Jun. 2018 - Oct. 2018" })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsx("li", { children: "Conceptualized and designed digital products focused on user experience." }),
                /* @__PURE__ */ jsx("li", { children: "Applied UX research methodologies to validate solutions and improve usability." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Wanup" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Senior Product Designer" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { children: "Aug. 2016 - Jun. 2018" })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsx("li", { children: "Art direction for digital and offline projects." }),
                /* @__PURE__ */ jsx("li", { children: "Designed user experiences for e-commerce and SaSS platform marketing materials." }),
                /* @__PURE__ */ jsx("li", { children: "Managed a team of 4 designers to ensure brand identity alignment." })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "PIMPAM Estudio" }),
                  /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Senior Designer" })
                ] }),
                /* @__PURE__ */ jsx(Badge, { children: "Mar. 2011 - Aug. 2016" })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "list-disc pl-5 space-y-2 text-muted-foreground", children: [
                /* @__PURE__ */ jsx("li", { children: "Developed applications with Digital Publishing Suite and designed print publications." }),
                /* @__PURE__ */ jsx("li", { children: "Notable clients: Adidas, Amnesia, Gandia Blasco, among others." })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "education", children: [
          /* @__PURE__ */ jsxs(TabsList, { className: "mb-6", children: [
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "education", className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(GraduationCap, { className: "h-4 w-4" }),
              " Education"
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "skills", className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Code, { className: "h-4 w-4" }),
              " Technical Skills"
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "languages", className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Languages, { className: "h-4 w-4" }),
              " Languages"
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "awards", className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Trophy, { className: "h-4 w-4" }),
              " Awards"
            ] })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "education", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(GraduationCap, { className: "h-5 w-5 text-primary" }),
              "Education"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "DesignOps Course, Elisava" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Feb 2024 -- March 2024, Barcelona, Spain" })
              ] }) }) }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Postgraduate in User Experience (UX) Design, UOC" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "2017 -- 2018, Barcelona, Spain" })
              ] }) }) }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Sheffield Hallam University, BA - Graphic Designer" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "2007 -- 2008, Sheffield, UK" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Typography - Advertising - Design - Art" })
              ] }) }) }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "flex justify-between items-start", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "Sheffield Hallam University, Foundation Degree Design" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "2005 -- 2007, Sheffield, UK" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Typography - Design - Art - Fundamentals" })
              ] }) }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "skills", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Code, { className: "h-5 w-5 text-primary" }),
              "Technical Skills"
            ] }),
            /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6 space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Tools" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Figma", "Sketch", "Zeplin", "Abstract", "Jira", "Confluence", "Notion"].map((tool) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tool }, tool)) })
              ] }),
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Methodologies" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["DesignOps", "Design Thinking", "Agile", "SCRUM"].map((method) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: method }, method)) })
              ] }),
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "UI/UX Design" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Wireframing", "Prototyping", "Research", "Visual Design"].map((skill) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: skill }, skill)) })
              ] }),
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Branding & Marketing" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Visual identity", "Brand materials", "Advertising design"].map((skill) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: skill }, skill)) })
              ] }),
              /* @__PURE__ */ jsx(Separator, {}),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold mb-2", children: "Data Analysis" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: ["Interpreting metrics", "Data visualization", "Optimizing digital experiences"].map((skill) => /* @__PURE__ */ jsx(Badge, { variant: "outline", children: skill }, skill)) })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "languages", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Languages, { className: "h-5 w-5 text-primary" }),
              "Languages"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "First Certificate in English (FCE)" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Sheffield College, UK" })
              ] }) }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "English - intermediate level, PET" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "British Council Qualifications (Sheffield College, UK)" })
              ] }) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(TabsContent, { value: "awards", children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-display font-bold mb-4 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Trophy, { className: "h-5 w-5 text-primary" }),
              "Awards"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "1:2 BA Graphic design" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Sheffield Hallam University (UK)" })
              ] }) }) }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: "1st FD Graphic Design" }),
                /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "2007-08, Norton College, Sheffield, (UK)" })
              ] }) }) })
            ] })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
};
const PersonalProjectCard = ({
  title,
  description,
  type,
  image,
  link,
  tags
}) => {
  const handleCardClick = () => {
    if (link) {
      window.open(link, "_blank", "noopener noreferrer");
    }
  };
  return /* @__PURE__ */ jsxs(
    Card,
    {
      className: "overflow-hidden border border-muted/20 transition-all duration-300 hover:border-primary/50 hover:shadow-lg group cursor-pointer",
      onClick: handleCardClick,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: image,
              alt: title,
              className: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-background/80 backdrop-blur-sm border-muted/30", children: type }) })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start gap-2 mb-3", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold tracking-tight", children: title }),
            /* @__PURE__ */ jsx(
              "a",
              {
                href: link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "text-muted-foreground hover:text-primary transition-colors",
                "aria-label": `Visit ${title} project`,
                onClick: (e) => e.stopPropagation(),
                children: /* @__PURE__ */ jsx(ExternalLink, { size: 18 })
              }
            )
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: description }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-secondary/30", children: tag }, tag)) })
        ] })
      ]
    }
  );
};
const PersonalProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const personalProjects = [
    {
      id: 1,
      title: "Conexion Monitor",
      description: "A Figma plugin that helps designers monitor and manage connections between components in complex design systems. Visualizes dependencies and highlights potential issues.",
      type: "Figma Plugin",
      image: "/lovable-uploads/52d9cc5b-87a4-458c-a97b-1d77acf95ad4.png",
      link: "https://www.figma.com/community/plugin/1471535543456488959/conexion-monitor",
      tags: ["Design Systems", "Figma Plugin", "Developer Tool"]
    },
    {
      id: 2,
      title: "DesignOps Dashboard",
      description: "A custom dashboard built to visualize design team metrics and streamline DesignOps workflows. Provides insights on team productivity and project status.",
      type: "Internal Tool",
      image: "/lovable-uploads/12d78b9a-4afa-4e63-a37b-ff7e544d948c.png",
      link: "#",
      tags: ["DesignOps", "Dashboard", "Analytics"]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen py-32 px-6 md:px-12", children: [
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { size: 16, className: "mr-2" }),
          "Back to home"
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4", children: /* @__PURE__ */ jsx(AnimatedText, { text: "Personal Design Projects", className: "inline-block", once: true }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mb-6", children: "Explore my personal design projects and experiments that showcase my passion for creating innovative design solutions and tools." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12", children: personalProjects.map((project) => /* @__PURE__ */ jsx(
        PersonalProjectCard,
        {
          title: project.title,
          description: project.description,
          type: project.type,
          image: project.image,
          link: project.link,
          tags: project.tags
        },
        project.id
      )) })
    ] })
  ] });
};
const ResourceCard = ({
  title,
  description,
  type,
  price,
  image,
  gumroadUrl,
  tags,
  format,
  comingSoon = false
}) => {
  const handleGet = () => {
    if (comingSoon) return;
    window.open(gumroadUrl, "_blank", "noopener noreferrer");
  };
  const isFree = price === "Free";
  return /* @__PURE__ */ jsxs(Card, { className: `overflow-hidden border border-muted/20 transition-all duration-300 flex flex-col ${comingSoon ? "opacity-70" : "hover:border-primary/50 hover:shadow-lg group"}`, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative aspect-video overflow-hidden bg-muted", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: title,
          className: "w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 flex gap-2", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "bg-background/80 backdrop-blur-sm border-muted/30", children: type }) }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-3 right-3", children: /* @__PURE__ */ jsx(
        Badge,
        {
          className: isFree ? "bg-green-600/90 text-white border-0" : "bg-primary/90 text-primary-foreground border-0",
          children: isFree ? "Free" : `€${price}`
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-6 flex flex-col flex-1", children: [
      /* @__PURE__ */ jsx("div", { className: "mb-1", children: /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-widest font-medium", children: format }) }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold tracking-tight mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4 flex-1", children: description }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-5", children: tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "bg-secondary/30", children: tag }, tag)) }),
      /* @__PURE__ */ jsx(
        Button,
        {
          onClick: handleGet,
          className: "w-full",
          variant: comingSoon ? "outline" : isFree ? "outline" : "default",
          disabled: comingSoon,
          children: comingSoon ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("span", { className: "mr-2", children: "🔒" }),
            "Coming Soon"
          ] }) : isFree ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(Download, { size: 15, className: "mr-2" }),
            "Download free"
          ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(ExternalLink, { size: 15, className: "mr-2" }),
            "Get on Gumroad — €",
            price
          ] })
        }
      )
    ] })
  ] });
};
const resources = [
  {
    id: 6,
    title: "Design <> Dev Handoff Checklist",
    description: "A free Notion checklist to ship pixel-perfect handoffs every time. Covers component naming, spacing tokens, interactive states, and accessibility annotations.",
    type: "Checklist",
    price: "Free",
    image: "/handoff-checklist-cover.png",
    gumroadUrl: "https://abyssinian-dodo-5d1.notion.site/Design-Dev-Handoff-Checklist-344985943d318147bb5ee79828691fa5",
    tags: ["Handoff", "Notion", "Free"],
    format: "Notion Template"
  },
  {
    id: 1,
    title: "DesignOps Playbook",
    description: "A complete Notion playbook to implement DesignOps in your team from day one. Covers workflow governance, design rituals, tooling setup, and team onboarding processes.",
    type: "Playbook",
    price: 29,
    image: "/designops-playbook-cover.png",
    gumroadUrl: "https://alfonsowave74.gumroad.com/l/mranlq",
    tags: ["DesignOps", "Notion", "Team Workflow"],
    format: "Notion Template"
  },
  {
    id: 2,
    title: "UX Audit Framework",
    description: "A structured Figma + Notion bundle to run professional UX audits. Includes heuristic evaluation sheets, severity rating system, and a client-ready report template.",
    type: "Framework",
    price: 39,
    image: "/ux-audit-framework-cover.png",
    gumroadUrl: "https://alfonsowave74.gumroad.com/l/qlyyj",
    tags: ["UX Research", "Figma", "Notion", "Audit"],
    format: "Figma + Notion"
  },
  {
    id: 3,
    title: "Design System Documentation Kit",
    description: "Notion template to document your design system properly. Covers component specs, usage guidelines, governance rules, and versioning — ready to share with engineering.",
    type: "Documentation",
    price: 24,
    image: "/design-system-docs-cover.png",
    gumroadUrl: "https://alfonsowave74.gumroad.com/l/pafjjp",
    tags: ["Design Systems", "Notion", "Documentation"],
    format: "Notion Template"
  },
  {
    id: 4,
    title: "Design Sprint Facilitation Kit",
    description: "Everything you need to run a 5-day Design Sprint. Figma workshop boards, Notion planning docs, facilitator scripts, and voting/prioritisation tools.",
    type: "Workshop Kit",
    price: 34,
    image: "/design-sprint-cover.png",
    gumroadUrl: "https://alfonsowave74.gumroad.com/l/qfvbs",
    tags: ["Design Sprint", "Figma", "Workshop", "Facilitation"],
    format: "Figma + Notion"
  },
  {
    id: 5,
    title: "Design Team Onboarding Kit",
    description: "A Notion workspace to onboard new designers in under a week. Includes day-by-day plans, tool access checklists, buddy system setup, and first 30-60-90 day goals.",
    type: "Onboarding",
    price: 19,
    image: "/team-onboarding-cover.png",
    gumroadUrl: "https://alfonsowave74.gumroad.com/l/hdxkhs",
    tags: ["Onboarding", "Notion", "Team Management"],
    format: "Notion Template"
  }
];
const ALL = "All";
const filterOptions = [ALL, "Notion Template", "Figma + Notion"];
const ResourcesPage = () => {
  const [activeFilter, setActiveFilter] = useState(ALL);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const filtered = activeFilter === ALL ? resources : resources.filter((r) => r.format === activeFilter);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen py-32 px-6 md:px-12", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "DesignOps Resources & Templates — Alfonso Zamorano" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Free and premium Notion templates for design teams. Handoff checklists, UX audit frameworks, design system docs, sprint facilitation kits and more — built by a DesignOps specialist." }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "DesignOps Resources & Templates — Alfonso Zamorano" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Free and premium Notion templates for design teams. Handoff checklists, UX audit frameworks, design system docs, sprint facilitation kits and more." }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://azportfolio.net/resources" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "website" }),
      /* @__PURE__ */ jsx("meta", { property: "og:image", content: "https://azportfolio.net/handoff-checklist-cover.png" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:card", content: "summary_large_image" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:title", content: "DesignOps Resources & Templates — Alfonso Zamorano" }),
      /* @__PURE__ */ jsx("meta", { name: "twitter:description", content: "Free and premium Notion templates for design teams. Built by a DesignOps specialist with 10+ years of experience." }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://azportfolio.net/resources" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: `
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "DesignOps Resources & Templates",
            "description": "Free and premium Notion templates for design teams by Alfonso Zamorano.",
            "url": "https://azportfolio.net/resources",
            "author": {
              "@type": "Person",
              "name": "Alfonso Zamorano",
              "url": "https://azportfolio.net"
            }
          }
        ` })
    ] }),
    /* @__PURE__ */ jsx(TransitionEffect, {}),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-12", children: [
        /* @__PURE__ */ jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center mb-6 text-sm font-medium text-muted-foreground hover:text-primary transition-colors",
            children: [
              /* @__PURE__ */ jsx(ArrowLeft, { size: 16, className: "mr-2" }),
              "Back to home"
            ]
          }
        ),
        /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl xl:text-6xl font-display font-bold tracking-tight mb-4", children: /* @__PURE__ */ jsx(AnimatedText, { text: "DesignOps Resources", className: "inline-block", once: true }) }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-muted-foreground max-w-2xl mb-8", children: "Practical templates and frameworks built from 10+ years running design operations at scale. Ready to plug into your team on day one." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
          filterOptions.map((f) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setActiveFilter(f),
              className: `px-4 py-1.5 rounded-full text-sm font-medium border transition-colors duration-200 ${activeFilter === f ? "bg-primary text-primary-foreground border-primary" : "border-muted/40 text-muted-foreground hover:border-primary/50 hover:text-primary"}`,
              children: f
            },
            f
          )),
          /* @__PURE__ */ jsxs("span", { className: "ml-auto self-center text-sm text-muted-foreground", children: [
            filtered.length,
            " resource",
            filtered.length !== 1 ? "s" : ""
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: filtered.map((resource) => /* @__PURE__ */ jsx(ResourceCard, { ...resource }, resource.id)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-20 border border-muted/20 rounded-2xl p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-widest text-muted-foreground mb-3", children: "Custom work" }),
        /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Need something tailored to your team?" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground max-w-xl mx-auto mb-6", children: "I offer DesignOps consulting and bespoke workshops for design teams. Let's talk about what your team actually needs." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "/#contact",
            className: "inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors",
            children: "Get in touch"
          }
        )
      ] })
    ] })
  ] });
};
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      console.log("App loaded");
    }, 500);
  }, []);
  return /* @__PURE__ */ jsx("div", { className: "app", children: /* @__PURE__ */ jsxs(ThemeProvider, { defaultTheme: "dark", children: [
    /* @__PURE__ */ jsx(CursorEffect, {}),
    /* @__PURE__ */ jsxs(BrowserRouter, { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Index, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/project/:id", element: /* @__PURE__ */ jsx(ProjectPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/projects/:slug", element: /* @__PURE__ */ jsx(ProjectPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/admin", element: /* @__PURE__ */ jsx(AdminPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/site-images", element: /* @__PURE__ */ jsx(SiteImages, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/about", element: /* @__PURE__ */ jsx(AboutPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/personal-projects", element: /* @__PURE__ */ jsx(PersonalProjectsPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "/resources", element: /* @__PURE__ */ jsx(ResourcesPage, {}) }),
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(NotFound, {}) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(Toaster, {})
  ] }) });
}
const createRoot = ViteReactSSG(
  /* @__PURE__ */ jsx(HelmetProvider, { children: /* @__PURE__ */ jsx(App, {}) })
);
export {
  createRoot
};
