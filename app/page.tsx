'use client';

import { GraduationCap, Briefcase, Code, Award, UserIcon, Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Education",
    icon: GraduationCap,
    items: [
      {
        title: "Artificial Intelligence and Data Science",
        place: "D. Y. Patil College of Engineering, Akurdi",
        year: "2024",
        description: "Pune, India • 8.98 CGPA"
      }
    ]
  },
  {
    title: "Experience",
    icon: Briefcase,
    items: [
      {
        title: "Software Engineer (AI Engineer)",
        company: "The DataTech Labs",
        year: "June 2024 - Present",
        location: "Pune, India",
        description: "• Created OCR Optimization for leading web security providers\n• Improved optimization time from minutes to seconds for image recognition\n• Deployed custom chatbots and AI agents\n• Created AI pipeline for new projects and MLOps pipeline for old projects"
      },
      {
        title: "Metaverse Intern",
        company: "Tech Mahindra Makers Lab",
        year: "September 2022 - January 2023",
        location: "Pune, India",
        description: "• Developed Metaverse projects for major retail store in Australia and Indian government bank\n• Implemented RL algorithms (PPO, A2C) in OpenAI Gym\n• Integrated ML models with Unreal Engine using TensorFlow Unreal Plugin"
      }
    ]
  },
  {
    title: "Projects",
    icon: Code,
    items: [
      {
        title: "Arbitrum Stylus Comparison",
        description: "Interactive web application comparing standard Rust and Stylus Rust smart contract development. Features live code execution, real-time editing, and educational content to help developers understand smart contract patterns.",
        tech: ["Rust", "Stylus", "Streamlit", "Smart Contracts", "Web3"],
        link: "https://arbitrum-stylus-comparision.streamlit.app/"
      },
      {
        title: "Privacy AI Agent (PrivAlert)",
        description: "Advanced privacy protection system using state-of-the-art AI models:\n• Leverages LLAMA 3.2 Vision 11B and LLAMA 3.1 8B models\n• Real-time risk detection and instant notifications\n• Prevents unauthorized sharing of sensitive data\n• AI-powered data breach prevention",
        tech: ["AI", "LLAMA", "Machine Learning", "Privacy", "Computer Vision"],
        link: "https://priv-front.vercel.app/"
      },
      {
        title: "Horror Palace in Metaverse",
        description: "Immersive multiplayer metaverse experience:\n• Supports up to 20 concurrent users with real-time voice chat\n• Custom avatar integration with Mona wallet and Ready Player Me\n• Private hangout spaces for friends\n• Seamless VRM avatar customization",
        tech: ["Mona Platform", "VRM", "WebGL", "Multiplayer", "3D Graphics"],
        link: "https://spaces.monaverse.com/spaces/monoverse-horror-palace"
      },
      {
        title: "Web3 Games Portfolio",
        description: "Collection of blockchain-integrated games:\n• Popup Catchers: Survival game with power-ups using Chainsafe SDK\n• Cac2O: Water conservation awareness game with NFT.storage\n• FHE Game: Fully Homomorphic Encryption game on Inco Blockchain\n• Pixelated Jumpsters: NFT collection game on Mantle testnet",
        tech: ["Unity", "Chainsafe SDK", "ThirdWeb", "NFT.storage", "Mantle", "FHE"],
        link: "https://devfolio.co/@Sarthak06/projects"
      }
    ]
  },
  {
    title: "Skills",
    icon: Code,
    items: [
      { 
        title: "Programming & Tools",
        tech: ["Python", "C#", "Unity", "Unreal Engine", "Golang", "Git", "Linux"]
      },
      {
        title: "Machine Learning & AI",
        tech: ["Deep Learning", "Reinforcement Learning", "NLP", "Generative AI"]
      },
      {
        title: "Blockchain & Web3",
        tech: ["Solidity", "Smart Contracts", "FHE", "Zero-Knowledge Proofs"]
      },
      {
        title: "Other Skills",
        tech: ["DevOps", "SQL", "Problem Solving", "Team Leadership"]
      }
    ]
  },
  {
    title: "Achievements",
    icon: Award,
    items: [
      {
        title: "Major Hackathon Victories",
        description: "• 🏆 3rd Place at Lanna Hackathon 2024 ($1000)\n• 🏆 3rd Place at Eth Toronto and Eth Women 2024 ($250)\n• 🏆 Best Mona Integration, ETHIndia 2023 ($1000)\n• 🏆 Algorand AlgohackJam 2022 ($1000)\n• 🥈 2nd Prize FIL Bangalore 2022\n• 🎯 26th Rank in CPL (Cyber Premier League) IIT Jammu 2022"
      },
      {
        title: "Additional Hackathon Achievements",
        description: "Successfully won bounties at:\n• 🌟 Vortex 01 2024\n• 🌟 BNB Chain Hackathon 2024\n• 🌟 Phala Workshop 2023\n• 🌟 ETH India 2022"
      },
      {
        title: "Certifications",
        description: "• IBM Data Science Professional Certificate\n• Applied Data Science Specialization\n• Insead Blockchain Revolution Specialization\n• Oracle OCI Foundations Associate"
      },
      {
        title: "Leadership Roles",
        description: "• Workshop Tutor - Intel AI Students Club\n• Web3 Lead - Blockwhizz Student Club\n• Team Member - DYPCOE Football Team"
      }
    ]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep via-brand-purple/20 to-brand-deep z-0" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container relative z-10 text-center"
        >
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-brand-purple to-brand-light bg-clip-text text-transparent animate-shine">
            Sarthak Shilwant
          </h1>
          <p className="text-xl text-brand-light/80 max-w-2xl mx-auto mb-8">
            AI Engineer & Blockchain Developer based in Pune, India
          </p>
          <div className="flex items-center justify-center gap-6">
            <a href="mailto:shilwantsarthak6@gmail.com" className="text-brand-light hover:text-brand-purple transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/sarthakshilwant/" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-purple transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/Sarthak-006" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-purple transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </header>

      <main className="container py-20 space-y-32">
        {sections.map((section, index) => (
          <motion.section
            key={section.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="flex items-center gap-4 mb-12">
              <section.icon className="w-8 h-8 text-brand-purple" />
              <h2 className="section-heading">{section.title}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: itemIndex % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: itemIndex * 0.1 }}
                  className="glass-card p-6 card-hover"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-semibold text-brand-purple">
                      {item.title}
                    </h3>
                    {'link' in item && (
                      <a 
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-brand-purple hover:text-brand-light transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                  {'place' in item && (
                    <p className="text-brand-light/80 mb-2">
                      {item.place} • {item.year}
                    </p>
                  )}
                  {'company' in item && (
                    <p className="text-brand-light/80 mb-2">
                      {item.company} • {item.year}
                      {item.location && <span className="block text-sm">{item.location}</span>}
                    </p>
                  )}
                  {'description' in item && (
                    <p className="text-brand-text/70 mt-2 whitespace-pre-line">{item.description}</p>
                  )}
                  {'tech' in item && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {item.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-brand-purple/20 text-brand-purple text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}
      </main>
    </div>
  );
} 