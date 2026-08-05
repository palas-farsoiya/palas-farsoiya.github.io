export type CourseSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  code?: {
    language: string;
    content: string;
  }[];
};

export type CourseChapter = {
  slug: string;
  eyebrow: string;
  title: string;
  summary: string;
  sections: CourseSection[];
};

export const courseBasePath = "/courses/computer-programming-and-numerical-analysis";

export const courseInfo = {
  title: "Computer Programming and Numerical Analysis",
  subtitle: "Programming in the Age of Artificial Intelligence",
  instructor: "Palas Kumar Farsoiya",
  affiliation: "Department of Chemical Engineering, IIT Roorkee",
  pdfUrl:
    "/courses/computer-programming-and-numerical-analysis/Tutorials_CHC_101-10.pdf",
};

export const courseChapters: CourseChapter[] = [
  {
    slug: "preface",
    eyebrow: "Start Here",
    title: "Preface and Table of Contents",
    summary:
      "This course introduces programming as a way of thinking, not just as a syntax exercise. The emphasis is on engineering problem solving, numerical analysis, scientific Python, and responsible collaboration with AI tools.",
    sections: [
      {
        heading: "Preface",
        paragraphs: [
          "Programming has changed rapidly with the arrival of artificial intelligence tools. Students no longer need to treat coding as memorizing every command, but they do need to understand how to describe problems clearly, reason about algorithms, verify outputs, and judge whether computed results make physical and mathematical sense.",
          "These notes are designed for students beginning computer programming and numerical analysis. The course builds from the basic meaning of programming to computational thinking, prompt engineering, verification and validation, and scientific computing with NumPy and Matplotlib.",
        ],
      },
      {
        heading: "How to read these notes",
        bullets: [
          "Read one chapter at a time and use the next-chapter button at the bottom of each page.",
          "Use the table of contents to jump between chapters when revising.",
          "Treat AI-generated code as a draft that must be checked, tested, and interpreted by you.",
          "Keep the PDF nearby when you want the original printable lecture-note format.",
        ],
      },
      {
        heading: "Course contents",
        bullets: [
          "Chapter 1: What is Programming?",
          "Chapter 2: Introduction to Computational Thinking and Human-AI Collaboration",
          "Chapter 3: Prompt Engineering for Programmers",
          "Chapter 4: Verification and Validation of AI-Generated Code",
          "Chapter 5: Why NumPy?",
        ],
      },
    ],
  },
  {
    slug: "what-is-programming",
    eyebrow: "Chapter 1",
    title: "What is Programming?",
    summary:
      "Programming is the act of giving precise instructions to a computer. The chapter connects early computing history with modern languages and explains why programming education must evolve in the AI era.",
    sections: [
      {
        heading: "Why computers need programming",
        paragraphs: [
          "A computer is powerful but not intuitive. It can perform arithmetic, store data, repeat operations, and follow rules at remarkable speed, but it does not independently understand the intention behind an engineering problem. Programming translates human goals into exact steps that a machine can execute.",
          "This precision is especially important in science and engineering, where a small ambiguity can change a numerical result, a plot, or a design decision.",
        ],
      },
      {
        heading: "A short history of programming",
        paragraphs: [
          "The idea of programming predates modern electronic computers. Mechanical calculators, early algorithms, and the work of Ada Lovelace all showed that machines could be instructed to carry out symbolic and numerical procedures.",
          "As computers developed, people moved from machine language to assembly language and then to high-level languages. Each step made programming more expressive and less tied to the raw hardware.",
        ],
      },
      {
        heading: "From FORTRAN and C to MATLAB and Python",
        paragraphs: [
          "FORTRAN became important because it helped scientists write mathematical programs without directly managing machine instructions. C gave programmers more control over memory and performance. MATLAB made matrix-based numerical work interactive and convenient.",
          "Python became widely used because it is readable, flexible, and supported by strong scientific libraries. For modern numerical analysis, Python often acts as the main language while packages such as NumPy, SciPy, and Matplotlib provide the computational power.",
        ],
      },
      {
        heading: "Programming in the AI era",
        paragraphs: [
          "AI can generate code, explain errors, suggest algorithms, and convert descriptions into working drafts. This makes programming more accessible, but it also changes the skill students need most.",
          "The central skill is no longer only writing syntax from memory. It is the ability to define the problem, check assumptions, test code, identify failure modes, and connect results back to scientific reasoning.",
        ],
      },
      {
        heading: "Key takeaways",
        bullets: [
          "Programming is structured communication between a human and a computer.",
          "High-level languages make code easier to write, read, and maintain.",
          "AI tools are useful assistants, not replacements for engineering judgment.",
          "Good programmers must understand the problem, not just produce code that runs.",
        ],
      },
    ],
  },
  {
    slug: "computational-thinking-human-ai-collaboration",
    eyebrow: "Chapter 2",
    title: "Introduction to Computational Thinking and Human-AI Collaboration",
    summary:
      "Computational thinking breaks complex problems into manageable pieces. In an AI-assisted workflow, humans remain responsible for framing, checking, and interpreting the solution.",
    sections: [
      {
        heading: "Why learn programming now?",
        paragraphs: [
          "Learning programming in the age of AI is not outdated. It is more important because AI can produce code quickly, and students need enough understanding to decide whether that code is correct, efficient, and meaningful.",
          "Programming also teaches a disciplined way of thinking that is valuable beyond software: define variables, identify inputs and outputs, simplify the system, and reason through consequences.",
        ],
      },
      {
        heading: "The four habits of computational thinking",
        bullets: [
          "Decomposition: break a large problem into smaller tasks.",
          "Pattern recognition: notice repeated structures, equations, or computational steps.",
          "Abstraction: focus on the important details while temporarily ignoring distractions.",
          "Algorithm design: write a clear sequence of steps that can solve the problem.",
        ],
      },
      {
        heading: "Computational thinking versus programming",
        paragraphs: [
          "Computational thinking is the planning and reasoning process. Programming is one way to express that process in a language a computer can execute.",
          "A student can begin by describing an algorithm in plain language or pseudocode, then translate it into Python with or without help from AI.",
        ],
      },
      {
        heading: "Human-AI programming workflow",
        bullets: [
          "State the problem in physical, mathematical, and computational terms.",
          "Ask AI for a first draft only after the goal and assumptions are clear.",
          "Read the generated code line by line before running it.",
          "Test the code on simple cases with known answers.",
          "Interpret the result using engineering judgment.",
        ],
      },
      {
        heading: "The danger of blind trust",
        paragraphs: [
          "AI-generated code can look polished while containing subtle errors. It may use the wrong formula, assume incorrect units, mishandle boundary cases, or produce a convincing plot of the wrong quantity.",
          "The human learner must therefore act as the scientist: question the result, compare it with limits, and verify that the code is solving the intended problem.",
        ],
      },
    ],
  },
  {
    slug: "prompt-engineering-for-programmers",
    eyebrow: "Chapter 3",
    title: "Prompt Engineering for Programmers",
    summary:
      "Prompt engineering is the skill of specifying programming tasks clearly enough that AI can produce useful code. A good prompt includes context, constraints, inputs, outputs, and verification expectations.",
    sections: [
      {
        heading: "Programming is specification",
        paragraphs: [
          "When using AI, the prompt becomes part of the programming process. A vague prompt often gives a vague or overconfident answer. A precise prompt can produce a draft that is much closer to the required algorithm.",
          "Good prompts describe what problem is being solved, what assumptions are allowed, what language or libraries should be used, and how the answer should be checked.",
        ],
      },
      {
        heading: "Characteristics of good prompts",
        bullets: [
          "Context: explain the engineering or mathematical setting.",
          "Goal: state the exact task to be performed.",
          "Inputs and outputs: define variable names, units, dimensions, and expected format.",
          "Constraints: mention numerical method, library preference, accuracy, or performance needs.",
          "Verification: ask for tests, limiting cases, or comparison with an analytical result.",
        ],
      },
      {
        heading: "A useful prompt template",
        paragraphs: [
          "A reliable prompt often follows the same structure: role, task, details, constraints, and checks. This helps the model respond as a programming assistant rather than as a general explainer.",
        ],
        code: [
          {
            language: "text",
            content:
              "You are helping me write Python code for a numerical analysis problem.\nTask: [describe the calculation]\nInputs: [list variables, units, and array sizes]\nMethod: [state algorithm or library]\nOutput: [describe plot, table, or value]\nChecks: include simple tests and explain possible errors.",
          },
        ],
      },
      {
        heading: "Iterative refinement",
        paragraphs: [
          "The first prompt rarely needs to be perfect. A strong workflow is conversational: inspect the output, identify what is missing, and ask for a focused revision.",
          "Instead of saying only that code is wrong, describe the observed behavior and the expected behavior. This gives the AI a concrete debugging target.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Asking for code without defining the mathematical model.",
          "Not specifying units or array dimensions.",
          "Accepting an answer without tests.",
          "Requesting too many unrelated tasks in one prompt.",
          "Ignoring whether the solution is physically reasonable.",
        ],
      },
    ],
  },
  {
    slug: "verification-validation-ai-generated-code",
    eyebrow: "Chapter 4",
    title: "Verification and Validation of AI-Generated Code",
    summary:
      "Verification asks whether the code solves the equations correctly. Validation asks whether the equations represent the real problem. Both are essential when AI helps generate code.",
    sections: [
      {
        heading: "Verification versus validation",
        paragraphs: [
          "Verification means checking the implementation: did the program solve the mathematical problem correctly? Validation means checking the model: is the mathematical problem a good representation of the physical system?",
          "A code can be verified but not valid if it solves the wrong model. A model can be valid in principle but implemented incorrectly. Scientific computing needs both checks.",
        ],
      },
      {
        heading: "Verification checks",
        bullets: [
          "Run the code on a problem with a known analytical solution.",
          "Check limiting cases, such as zero velocity, very small time step, or symmetry.",
          "Compare multiple numerical resolutions to see whether the answer converges.",
          "Inspect units, signs, indexing, and boundary conditions.",
        ],
      },
      {
        heading: "Validation checks",
        bullets: [
          "Compare model predictions with experiments, observations, or trusted simulations.",
          "Ask whether neglected physics could dominate the result.",
          "Check whether parameter values are realistic.",
          "State the range of conditions where the model should and should not be trusted.",
        ],
      },
      {
        heading: "Common AI coding errors",
        paragraphs: [
          "AI tools may invent functions, silently change assumptions, use unstable numerical methods, or write code that works for one example but fails for edge cases. These errors can be difficult to notice because the generated code often looks tidy.",
        ],
      },
      {
        heading: "A practical V&V checklist",
        bullets: [
          "Can I explain every equation implemented in the code?",
          "Can I reproduce a known result?",
          "Do the units make sense at every major step?",
          "Do plots behave correctly in simple limits?",
          "Have I tested at least one intentionally simple case?",
        ],
      },
    ],
  },
  {
    slug: "why-numpy",
    eyebrow: "Chapter 5",
    title: "Why NumPy?",
    summary:
      "NumPy provides fast arrays, vectorized operations, mathematical functions, random numbers, and matrix tools. It is the foundation for much of scientific Python.",
    sections: [
      {
        heading: "Importing NumPy",
        paragraphs: [
          "NumPy is usually imported with the short alias np. This convention makes numerical code concise and recognizable to other Python users.",
        ],
        code: [
          {
            language: "python",
            content: "import numpy as np",
          },
        ],
      },
      {
        heading: "Arrays and vectorized operations",
        paragraphs: [
          "A NumPy array stores numerical data efficiently and allows operations on whole arrays at once. This vectorized style is usually clearer and faster than writing manual loops for every element.",
        ],
        code: [
          {
            language: "python",
            content:
              "import numpy as np\n\nx = np.array([1, 2, 3, 4])\ny = x**2 + 2*x + 1\nprint(y)",
          },
        ],
      },
      {
        heading: "Useful array constructors",
        bullets: [
          "np.zeros creates an array filled with zeros.",
          "np.ones creates an array filled with ones.",
          "np.linspace creates evenly spaced points over an interval.",
          "np.arange creates values separated by a fixed step.",
        ],
        code: [
          {
            language: "python",
            content:
              "zeros = np.zeros(5)\nones = np.ones(5)\nx = np.linspace(0, 1, 6)\nt = np.arange(0, 10, 2)",
          },
        ],
      },
      {
        heading: "Matrix operations",
        paragraphs: [
          "NumPy supports matrix multiplication, transposes, norms, and linear algebra operations. These tools are central in numerical analysis, data fitting, and engineering simulations.",
        ],
        code: [
          {
            language: "python",
            content:
              "A = np.array([[1, 2], [3, 4]])\nb = np.array([5, 6])\n\nx = np.linalg.solve(A, b)\nprint(x)",
          },
        ],
      },
      {
        heading: "Plotting with Matplotlib",
        paragraphs: [
          "Matplotlib is commonly used with NumPy arrays to visualize functions, numerical results, and experimental data. A simple plot should include labels so the result can be interpreted later.",
        ],
        code: [
          {
            language: "python",
            content:
              "import matplotlib.pyplot as plt\n\nx = np.linspace(0, 2*np.pi, 200)\ny = np.sin(x)\n\nplt.plot(x, y)\nplt.xlabel('x')\nplt.ylabel('sin(x)')\nplt.show()",
          },
        ],
      },
      {
        heading: "Engineering example",
        paragraphs: [
          "In engineering calculations, arrays can represent position, time, concentration, velocity, temperature, or pressure. NumPy makes it natural to evaluate formulas at many points and then plot or analyze the result.",
        ],
      },
      {
        heading: "Exercises",
        bullets: [
          "Create an array of 100 points from 0 to 1 and compute x squared.",
          "Plot sin(x), cos(x), and exp(-x) on the same graph.",
          "Solve a 2 by 2 system of linear equations using np.linalg.solve.",
          "Generate random numbers and plot a histogram.",
        ],
      },
    ],
  },
];
