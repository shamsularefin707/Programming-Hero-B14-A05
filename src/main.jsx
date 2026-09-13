import { useEffect, useState } from "react";
import {
  ArrowRight,
  Code2,
  Github,
  Layers3,
  Linkedin,
  Menu,
  Sparkles,
  Star,
  Trash2,
  Twitter,
  X,
} from "lucide-react";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const navItems = ["Home", "Technologies", "Projects", "About", "Contact"];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button
          className="menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <a className="brand" href="#home">
          <span className="brand-icon">
            <Code2 size={20} />
          </span>
          <span>
            Dev<span>Stack</span>
          </span>
        </a>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button>Sign In</button>
          <button className="signup">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-copy">
        <div className="eyebrow">
          <Sparkles size={15} />
          BUILD YOUR PERFECT STACK
        </div>

        <h1>
          Build a stack that
          <br />
          <span>works for you.</span>
        </h1>

        <p>
          Discover the technologies behind modern software and put together a
          development stack that fits your next project.
        </p>

        <div className="hero-buttons">
          <a className="primary" href="#technologies">
            Explore Technologies
            <ArrowRight size={17} />
          </a>
          <a className="secondary" href="#about">
            Learn More
          </a>
        </div>

        <div className="stats">
          <div>
            <b>12+</b>
            <small>Technologies</small>
          </div>
          <div>
            <b>7</b>
            <small>Categories</small>
          </div>
          <div>
            <b>100%</b>
            <small>Customizable</small>
          </div>
        </div>
      </div>

      <div className="hero-art">
        <div className="code-card">
          <div className="dots">
            <i />
            <i />
            <i />
            <small>your-stack.js</small>
          </div>

          <pre>
            <span>const</span> stack = {"{"}
            {"\n"}  frontend: <em>"React"</em>,
            {"\n"}  backend: <em>"Node.js"</em>,
            {"\n"}  database: <em>"PostgreSQL"</em>,
            {"\n"}  styling: <em>"Tailwind"</em>
            {"\n"}{"}"};
          </pre>

          <span className="float one">⚛ React</span>
          <span className="float two">⬡ Node.js</span>
          <span className="float three">◈ PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

function TechCard({ tech, isAdded, handleAdd }) {
  return (
    <article className="tech-card">
      <div className="card-top">
        <div className="tech-icon">
          <img src={tech.icon} alt={`${tech.name} logo`} />
        </div>
        <span className="badge">{tech.badge}</span>
      </div>

      <h3>{tech.name}</h3>
      <p>{tech.description}</p>

      <div className="meta">
        <span>{tech.category}</span>
        <small>{tech.difficulty}</small>
      </div>

      <div className="card-bottom">
        <strong>
          <Star size={14} fill="currentColor" />
          {tech.rating}
        </strong>

        <button
          className={isAdded ? "added" : ""}
          disabled={isAdded}
          onClick={() => handleAdd(tech)}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </article>
  );
}

function Stack({ selectedItems, handleRemove, handleRemoveAll }) {
  const itemText = selectedItems.length === 1 ? "Technology" : "Technologies";

  return (
    <aside className="stack">
      <div className="stack-title">
        <div>
          <small>YOUR BUILDER</small>
          <h2>Your Stack</h2>
        </div>
        <b>{selectedItems.length}</b>
      </div>

      <p className="selected">
        {selectedItems.length} {itemText} Selected
      </p>

      {selectedItems.length === 0 ? (
        <div className="empty">
          <Layers3 size={30} />
          <h3>Your stack is empty</h3>
          <p>Add technologies from the library and they will appear here.</p>
        </div>
      ) : (
        <>
          <div className="stack-list">
            {selectedItems.map((tech) => (
              <div className="stack-item" key={tech.id}>
                <img src={tech.icon} alt="" />

                <div>
                  <b>{tech.name}</b>
                  <small>{tech.category}</small>
                </div>

                <button
                  onClick={() => handleRemove(tech)}
                  aria-label={`Remove ${tech.name}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>

          <button className="remove-all" onClick={handleRemoveAll}>
            <Trash2 size={15} />
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}

function Technologies({ technologies, stack, loading, handleAdd, handleRemove, handleRemoveAll }) {
  return (
    <section className="section" id="technologies">
      <div className="section-heading">
        <div>
          <small>TECHNOLOGY LIBRARY</small>
          <h2>
            Choose your <span>building blocks.</span>
          </h2>
        </div>
        <p>
          Explore popular tools and add the ones that make sense for your next
          project.
        </p>
      </div>

      {loading ? (
        <div className="loading">
          <div className="spinner" />
          <span>Loading technology library...</span>
        </div>
      ) : (
        <div className="tech-layout">
          <div className="grid">
            {technologies.map((tech) => (
              <TechCard
                key={tech.id}
                tech={tech}
                isAdded={stack.some((item) => item.id === tech.id)}
                handleAdd={handleAdd}
              />
            ))}
          </div>

          <Stack
            selectedItems={stack}
            handleRemove={handleRemove}
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
}

const footerGroups = [
  {
    title: "Product",
    links: [
      ["Technology Library", "#technologies"],
      ["Projects", "#projects"],
      ["Builder", "#technologies"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About", "#about"],
      ["Contact", "#contact"],
      ["Careers", "#contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy", "#contact"],
      ["Terms", "#contact"],
      ["Licenses", "#contact"],
    ],
  },
];

function Footer() {
  return (
    <footer id="contact">
      <div className="footer-main">
        <div>
          <a className="brand" href="#home">
            <span className="brand-icon">
              <Code2 size={20} />
            </span>
            <span>
              Dev<span>Stack</span>
            </span>
          </a>

          <p>
            A practical playground for discovering and building modern
            technology stacks.
          </p>

          <div className="socials">
            <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>

        <div className="footer-links">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <b>{group.title}</b>
              {group.links.map(([name, link]) => (
                <a key={name} href={link}>
                  {name}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="copyright">
        <span>© 2026 DevStack. Built for developers.</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not load technology data");
        }
        return response.json();
      })
      .then((data) => setTechnologies(data))
      .catch(() => toast.error("Could not load technology data."))
      .finally(() => setLoading(false));
  }, []);

  function handleAdd(tech) {
    const alreadyAdded = stack.some((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warning(`${tech.name} is already in your stack.`);
      return;
    }

    setStack((currentStack) => [...currentStack, tech]);
    toast.success(`${tech.name} added to your stack.`);
  }

  function handleRemove(tech) {
    setStack((currentStack) =>
      currentStack.filter((item) => item.id !== tech.id)
    );
    toast.info(`${tech.name} removed from your stack.`);
  }

  function handleRemoveAll() {
    if (stack.length === 0) return;

    setStack([]);
    toast.info("All technologies removed from your stack.");
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies
          technologies={technologies}
          stack={stack}
          loading={loading}
          handleAdd={handleAdd}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />

        <section className="features" id="projects">
          <div>
            <Code2 />
            <h3>Frontend Ready</h3>
            <p>Modern tools for building polished interfaces.</p>
          </div>
          <div>
            <Layers3 />
            <h3>Backend Power</h3>
            <p>Reliable tools for building scalable APIs.</p>
          </div>
          <div>
            <Sparkles />
            <h3>Data First</h3>
            <p>Choose storage based on what your project needs.</p>
          </div>
        </section>

        <section className="about section" id="about">
          <div>
            <small>WHY DEVSTACK</small>
            <h2>
              Less guessing.
              <br />
              <span>More building.</span>
            </h2>
          </div>
          <p>
            Choosing a technology stack can get confusing when every tutorial
            recommends something different. DevStack keeps the process simple:
            explore the options, compare their strengths, and build a stack
            that fits your project.
          </p>
        </section>
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2200} theme="dark" />
    </>
  );
}
