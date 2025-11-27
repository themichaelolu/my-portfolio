import React from "react";

// --- Data Structures for Michael Olorundare's Portfolio ---

const personalDetails = {
  name: "Michael Olorundare",
  role: "Mobile Engineer (Flutter)",
  location: "Lagos, Nigeria",
  tagline: "Building reliable, production-grade Flutter apps",
  description:
    "I’m Michael Olorundare, a Mobile Engineer (Flutter) focused on turning Figma designs into responsive, production-ready Android & iOS apps — built with clean architecture, smooth animations, and scalable state management.",
  skills: [
    "Flutter & Dart",
    "Riverpod & Clean Architecture",
    "Play Store Deployments",
  ],
  contact: {
    email: "michaelolorundare@gmail.com",
    phone: "09069349103",
    location: "Lagos, Nigeria",
  },
  links: {
    github: "https://github.com/themichaelolu", // Replace with actual GitHub URL
    linkedin:
      "https://www.linkedin.com/in/michael-olorundare-a41335214/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", // Replace with actual LinkedIn URL
    resume: "#", // Replace with actual Resume URL
  },
};

const projectsData = [
  {
    title: "CIPM Mobile Nigeria",
    dates: "March 2025 – November 2025 · Exams Module & Deployment",
    summary:
      "Built the full exams workflow — timed tests, performance dashboards, and analytics — while ensuring production-ready API integrations and smooth Play Store deployment.",
    highlights: [
      "Implemented secure exam registration & dashboards.",
      "Integrated secure REST APIs for student details and exams.",
      "Used Riverpod for clean, scalable architecture.",
      "Managed release signing & Play Store compliance.",
    ],
    tags: ["Flutter", "Riverpod", "Firebase Analytics", "REST API"],
    playStore: "https://play.google.com/store/apps/details?id=com.cipm.mobile",
    colorGradient: "from-[#0b3d2e] to-[#84c225]",
    secondaryText: "Official mobile platform for CIPM Nigeria",
  },
  {
    title: "Getteasy Mobile App",
    dates: "February 2024 – August 2024 · UI Implementation",
    summary:
      "Translated complex hospitality Figma designs into pixel-perfect Flutter screens, complete with animations, reusable components, and responsive layouts.",
    highlights: [
      "UI Highlights: vivid orange brand theme, smooth galleries, modern hotel cards, and intuitive booking flows.",
    ],
    tags: ["Flutter", "Custom UI", "Animations"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.getteasyngltd.getteasy&hl=en",
    colorGradient: "from-[#ff6b35] to-[#f7931e]",
    secondaryText: "Hotel browsing & booking UI",
  },
  {
    title: "More Flutter Experiments",
    dates: "Ongoing · Architectures & CI/CD",
    summary:
      "Small-scale apps exploring Flutter architecture patterns, Firebase integrations, GitHub Actions CI/CD, and reusable UI foundations.",
    tags: ["Clean Architecture", "CI/CD", "Firebase"],
    placeholderText:
      "Internal tools, dashboards, prototypes & CI/CD experiments.",
    colorGradient: "bg-gray-100 dark:bg-gray-800/80",
  },
];

const experienceData = [
  {
    period: "2023 – Present",
    title: "Mobile Engineer (Flutter) · Cyberspace Limited",
    description:
      "Lead Flutter engineer delivering production-ready features across enterprise-grade applications.",
    details: [
      "Implemented core exam modules, dashboards, and analytics.",
      "Integrated secure API communication layers.",
      "Architected scalable Riverpod-based state system.",
    ],
  },
  {
    period: "2024",
    title: "Flutter UI Engineer · Getteasy Mobile App",
    description:
      "Built complete UI experiences for hospitality mobile screens following pixel-exact Figma designs.",
    details: [
      "Produced component-based UI library.",
      "Implemented hotel listings, room galleries & booking flow.",
    ],
  },
  {
    period: "Ongoing",
    title: "Freelance Mobile Engineer (Flutter)",
    description:
      "Building bespoke mobile apps and prototypes for clients across different industries.",
    details: [],
  },
];

const aboutSkills = [
  "📱 Flutter & Dart",
  "🔁 Riverpod",
  "🧩 Clean Architecture",
  "☁️ REST APIs · Firebase",
  "🎨 Figma → Flutter UI",
  "⚙️ Git · GitHub · CI/CD",
];

// --- Reusable Components ---

const Header = ({ details }) => (
  <header className="sticky top-0 z-50 flex items-center justify-center whitespace-nowrap bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-solid border-gray-200 dark:border-gray-800 px-4 sm:px-10">
    <div className="flex items-center justify-between w-full max-w-6xl py-3">
      <div className="flex items-center gap-4 text-[#111418] dark:text-gray-100">
        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
          {details.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>
        <div>
          <h1 className="text-[#111418] dark:text-gray-100 text-lg font-bold tracking-[-0.015em]">
            {details.name}
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {details.role} · {details.location}
          </p>
        </div>
      </div>
      <div className="hidden sm:flex flex-1 justify-end gap-8">
        <nav className="flex items-center gap-9">
          {["Projects", "Experience", "About", "Contact"].map((section) => (
            <a
              key={section}
              href={`#${section.toLowerCase()}`}
              className="text-[#111418] dark:text-gray-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors"
            >
              {section}
            </a>
          ))}
        </nav>
        <a
          href={details.links.resume}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">Download Resume</span>
        </a>
      </div>
    </div>
  </header>
);

const HeroSection = ({ details }) => (
  <section className="w-full @container py-10" id="hero">
    <div className="flex flex-col gap-6 text-center max-w-3xl mx-auto">
      <div className="flex flex-col gap-2">
        <h1 className="text-[#111418] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
          {details.tagline}
        </h1>
        <h2 className="text-gray-600 dark:text-gray-400 text-sm font-normal @[480px]:text-base">
          I’m **{details.name}**, a{" "}
          <span className="font-semibold">{details.role}</span> focused on
          turning Figma designs into responsive, production-ready Android & iOS
          apps — built with clean architecture, smooth animations, and scalable
          state management.
        </h2>
      </div>

      <div className="flex-wrap gap-3 flex justify-center">
        <a
          href={details.links.github}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold tracking-[0.015em] @[480px]:text-base hover:bg-primary/90 transition-colors"
        >
          <span className="truncate">GitHub</span>
        </a>
        <a
          href={details.links.linkedin}
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-gray-200 dark:bg-gray-800 text-[#111418] dark:text-gray-200 text-sm font-bold tracking-[0.015em] @[480px]:text-base hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          <span className="truncate">LinkedIn</span>
        </a>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs text-gray-600 dark:text-gray-400">
        {details.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900/50"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => {
  // Check for the special 'More Flutter Experiments' structure
  const isExperiment = project.title === "More Flutter Experiments";

  return (
    <article className="flex flex-col gap-4 rounded-xl bg-white dark:bg-gray-900/50 p-4 border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-lg transition-shadow duration-300">
      <div
        className={`aspect-video rounded-lg flex items-center justify-center ${
          isExperiment
            ? project.colorGradient
            : `bg-gradient-to-r ${project.colorGradient}`
        }`}
      >
        {isExperiment ? (
          <span className="text-gray-500 dark:text-gray-400 text-xs text-center px-4">
            {project.placeholderText}
          </span>
        ) : (
          <div className="text-white text-center px-4">
            <p className="text-base font-semibold">{project.title}</p>
            <p className="text-sm opacity-80">{project.secondaryText}</p>
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <p className="text-[#111418] dark:text-white text-base font-medium">
          {project.title}
        </p>
        <p className="text-xs text-gray-500">{project.dates}</p>

        <p className="text-sm text-gray-600 dark:text-gray-400">
          {project.summary}
        </p>

        {/* Handling CIPM/Getteasy specific details */}
        {project.highlights &&
          (isExperiment ? null : (
            <ul
              className={`text-xs text-gray-600 dark:text-gray-400 space-y-1 pl-4 ${
                project.title === "Getteasy Mobile App"
                  ? "list-none"
                  : "list-disc"
              }`}
            >
              {project.highlights.map((item, index) => (
                <li key={index}>
                  {project.title === "Getteasy Mobile App" ? (
                    <p className="text-xs bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg px-3 py-2">
                      {/* Simple hack to keep the bolding */}
                      <strong
                        dangerouslySetInnerHTML={{
                          __html: item.replace(
                            "UI Highlights:",
                            "<strong>UI Highlights:</strong>"
                          ),
                        }}
                      />
                    </p>
                  ) : (
                    // Simple hack to keep the bolding
                    <span
                      dangerouslySetInnerHTML={{
                        __html: item.replace(
                          "timed exams",
                          "<strong>timed exams</strong>"
                        ),
                      }}
                    />
                  )}
                </li>
              ))}
            </ul>
          ))}

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-primary/20 text-primary dark:text-white dark:bg-primary/40 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.playStore && (
        <div className="flex items-center gap-2 mt-auto">
          <a
            href={project.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-sm font-semibold hover:underline"
          >
            View on Google Play
          </a>
        </div>
      )}
    </article>
  );
};

const ProjectsSection = ({ projects }) => (
  <section className="w-full py-16" id="projects">
    <h2 className="text-[#111418] dark:text-white text-[22px] font-bold tracking-[-0.015em] pb-6 pt-5">
      Featured Projects
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
      A selection of live Flutter projects I’ve shipped to the Play Store.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  </section>
);

const ExperienceItem = ({ item }) => (
  <div className="relative flex flex-col gap-2">
    <div className="absolute -left-[38px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-background-light dark:border-background-dark"></div>
    <p className="text-xs text-gray-500 dark:text-gray-400">{item.period}</p>
    <h3 className="font-bold text-lg text-[#111418] dark:text-white">
      {item.title}
    </h3>
    <p className="text-sm text-gray-600 dark:text-gray-400">
      {item.description}
    </p>

    {item.details.length > 0 && (
      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1 mt-2 pl-4 list-disc">
        {item.details.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    )}
  </div>
);

const ExperienceSection = ({ experience }) => (
  <section className="w-full py-16" id="experience">
    <h2 className="text-[#111418] dark:text-white text-[22px] font-bold tracking-[-0.015em] pb-6 pt-5">
      Experience
    </h2>
    <p className="text-sm text-gray-600 dark:text-gray-400 mb-10">
      Roles and real-world engineering contributions.
    </p>

    <div className="relative flex flex-col gap-12 border-l-2 border-primary/30 pl-8">
      {experience.map((item, index) => (
        <ExperienceItem key={index} item={item} />
      ))}
    </div>
  </section>
);

const AboutSection = ({ details, skills }) => (
  <section
    className="w-full py-16 grid grid-cols-1 md:grid-cols-2 gap-12"
    id="about"
  >
    <div>
      <h2 className="text-[#111418] dark:text-white text-[22px] font-bold tracking-[-0.015em] pb-6 pt-5">
        About Me
      </h2>
      <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400 text-base">
        <p>
          I’m a passionate <strong>{details.role}</strong> with a track record
          of designing and deploying clean, scalable applications for both
          Android and iOS.
        </p>
        <p>
          I’ve delivered production apps such as <em>CIPM Mobile Nigeria</em>{" "}
          and <em>Getteasy</em>, achieving <strong>600+ downloads</strong>{" "}
          collectively on the Play Store. My focus is building smooth,
          responsive, user-centered apps.
        </p>
      </div>
    </div>

    <div>
      <h2 className="text-[#111418] dark:text-white text-[22px] font-bold tracking-[-0.015em] pb-6 pt-5">
        Tech Stack & Skills
      </h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="flex items-center gap-2 p-3 rounded-lg bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800"
          >
            <span className="text-sm font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ contact }) => {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = React.useState({});
  const [status, setStatus] = React.useState({
    submitting: false,
    success: false,
  });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Please enter your name.";
    if (!form.email.trim()) newErrors.email = "Please enter your email.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = "Please enter a valid email.";
    if (!form.message.trim() || form.message.trim().length < 8)
      newErrors.message = "Please enter a brief message (min 8 chars).";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const { [name]: _, ...rest } = prev;
        return rest;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ submitting: false, success: false });

    const newErrors = validate();
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }

    // Simulate async submission
    setStatus({ submitting: true, success: false });
    setTimeout(() => {
      setStatus({ submitting: false, success: true });
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    }, 700);
  };

  return (
    <section className="w-full py-16" id="contact">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-[#111418] dark:text-white text-[22px] font-bold tracking-[-0.015em]">
          Let&apos;s Connect
        </h2>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Have a project in mind or just want to say hi? Feel free to reach out.
          I&apos;m always open to discussing new opportunities.
        </p>

        {status.success && (
          <div className="mt-6 w-full rounded-lg p-3 bg-green-50 border border-green-100 text-center text-sm text-green-800">
            ✅ Thanks — your message was sent. I’ll get back to you soon.
          </div>
        )}

        <form
          className="mt-8 space-y-5 text-left"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                aria-invalid={!!errors.name}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                  errors.name
                    ? "border-red-300 focus:ring-1 focus:ring-red-300 dark:border-red-700"
                    : "border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-primary/60 focus:border-primary"
                } bg-white dark:bg-gray-900/60`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-red-600">{errors.name}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                aria-invalid={!!errors.email}
                className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                  errors.email
                    ? "border-red-300 focus:ring-1 focus:ring-red-300 dark:border-red-700"
                    : "border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-primary/60 focus:border-primary"
                } bg-white dark:bg-gray-900/60`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-600">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              aria-invalid={!!errors.message}
              className={`mt-1 block w-full rounded-lg border px-3 py-2 text-sm shadow-sm focus:outline-none ${
                errors.message
                  ? "border-red-300 focus:ring-1 focus:ring-red-300 dark:border-red-700"
                  : "border-gray-300 dark:border-gray-700 focus:ring-1 focus:ring-primary/60 focus:border-primary"
              } bg-white dark:bg-gray-900/60 resize-none`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-red-600">{errors.message}</p>
            )}
          </div>

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={status.submitting}
              className="inline-flex items-center justify-center rounded-lg px-6 h-11 text-sm font-semibold text-white bg-primary hover:bg-primary/90 transition-colors shadow-sm active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status.submitting ? "Sending..." : "Get in Touch"}
            </button>
          </div>
        </form>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-500">
          Prefer email? You can also reach me at{" "}
          <a
            href={`mailto:${contact.email}`}
            className="font-medium text-primary hover:underline"
          >
            {contact.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
};

const Footer = ({ details }) => (
  <footer className="w-full px-4 sm:px-10 pb-10 pt-5">
    <div className="max-w-6xl mx-auto text-center py-6 rounded-xl bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 shadow-sm">
      <p className="text-sm text-gray-700 dark:text-gray-200">
        Ready to build amazing mobile experiences together?
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
        © 2025 {details.name} · {details.role}
      </p>
    </div>
  </footer>
);

// --- Main Portfolio Component ---

const Portfolio = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-gradient-to-tr from-white via-slate-50 to-white dark:from-black dark:via-[#020617] dark:to-[#03061a]">
      {/* decorative background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-pink-200 via-amber-100 to-emerald-200 opacity-30 dark:opacity-20 blur-3xl transform rotate-12" />
        <div className="absolute -bottom-36 -left-36 w-96 h-96 rounded-full bg-gradient-to-tr from-cyan-100 via-indigo-200 to-violet-200 opacity-25 dark:opacity-15 blur-3xl transform -rotate-6" />
        <svg
          className="absolute top-8 left-1/2 -translate-x-1/2 opacity-5 dark:opacity-10"
          width="1200"
          height="120"
          viewBox="0 0 1200 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120C150 0 350 120 600 120C850 120 1050 0 1200 120V0H0V120Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <Header details={personalDetails} />

      <main className="layout-container flex h-full grow flex-col items-center flex-1">
        <div className="layout-content-container relative z-10 flex flex-col w-full max-w-6xl flex-1 px-4 sm:px-10 py-10 sm:py-20 rounded-3xl bg-white/70 dark:bg-gray-900/60 border border-gray-100 dark:border-gray-800/50 shadow-xl backdrop-blur-sm">
          <HeroSection details={personalDetails} />

          <hr className="w-full h-px bg-gray-200 dark:bg-gray-800 border-0" />

          <ProjectsSection projects={projectsData} />

          <hr className="w-full h-px bg-gray-200 dark:bg-gray-800 border-0" />

          <ExperienceSection experience={experienceData} />

          <hr className="w-full h-px bg-gray-200 dark:bg-gray-800 border-0" />

          <AboutSection details={personalDetails} skills={aboutSkills} />

          <hr className="w-full h-px bg-gray-200 dark:bg-gray-800 border-0" />

          <ContactSection contact={personalDetails.contact} />
        </div>

        <Footer details={personalDetails} />
      </main>
    </div>
  );
};

export default Portfolio;
