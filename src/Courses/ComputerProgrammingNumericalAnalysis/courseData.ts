export type CourseSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  equations?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  figure?: {
    type:
      | "pivot"
      | "orthogonal"
      | "eigenvectors"
      | "eigenlines"
      | "determinant"
      | "eigenbasis"
      | "power"
      | "rotation"
      | "symmetric";
    caption: string;
  };
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

const courseChaptersBase: CourseChapter[] = [
  {
    slug: "preface",
    eyebrow: "Start Here",
    title: "Preface",
    summary:
      " This course introduces programming as a way of thinking, not just as a syntax exercise. The emphasis is on engineering problem solving, numerical analysis, scientific Python, and responsible collaboration with AI tools.",
    sections: [
      {
        heading: "Preface",
        paragraphs: [
          "Large language models (LLMs) trained on human generated text started with a bang in November 2022 with launch of ChatGPT. Responses generated as if a real person is writing it. The tech industry in the brought this transforming change and the wall street bears kept waiting for the AI bubble to burst and are still waiting while writing this book.",
          "Programming has changed rapidly with the arrival of artificial intelligence tools. Students no longer need to treat coding as memorizing every command, but they do need to understand how to describe problems clearly, reason about algorithms, verify outputs, and judge whether computed results make physical and mathematical sense.",
          "These notes are designed for students beginning computer programming and numerical analysis. The course builds from the basic meaning of programming to computational thinking, prompt engineering, verification and validation, and scientific computing.",
          "Although the course uses Python, the emphasis is on general programming skills that can be applied in any language. The goal is to help students become confident, independent programmers who can use AI tools effectively and responsibly.",
        ],
      },
      {
        heading: "How to read these notes",
        bullets: [
          "Read one chapter at a time and use the next-chapter button at the bottom of each page.",
          "Use the table of contents to jump between chapters when revising.",
          "Treat AI-generated code as a draft that must be checked, tested, and interpreted by you."
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
          "Chapter 6: Matrix Algebra with NumPy",
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
  {
    slug: "matrix-algebra-with-numpy",
    eyebrow: "Chapter 6",
    title: "Matrix Algebra with NumPy",
    summary:
      "Matrix algebra is the language of systems of equations, transformations, stability, and data analysis. This chapter connects the essential ideas with NumPy commands so students can move between theory and computation.",
    sections: [
      {
        heading: "Matrices as transformations and systems",
        paragraphs: [
          "A matrix can be read in two useful ways. Algebraically, it represents a compact set of linear equations such as Ax = b. Geometrically, it represents a linear transformation that rotates, stretches, shears, reflects, or projects vectors.",
          "NumPy lets us work with both views. We can store a matrix as a two-dimensional array, multiply it by vectors, compute ranks and inverses, solve systems, and study eigenvalues.",
        ],
        code: [
          {
            language: "python",
            content:
              "import numpy as np\n\nA = np.array([[2, 1],\n              [0, 1]])\n\nprint(A)",
          },
        ],
      },
      {
        heading: "Rank and elementary operations",
        paragraphs: [
          "Elementary row operations include swapping rows, multiplying a row by a nonzero scalar, and adding a multiple of one row to another. These operations are the basis of Gaussian elimination.",
          "The rank of a matrix is the number of independent rows or columns. For a linear system, rank tells us whether the equations contain enough independent information to determine the unknowns.",
        ],
        code: [
          {
            language: "python",
            content:
              "A = np.array([[2, 1],\n              [0, 1]])\n\nrank_A = np.linalg.matrix_rank(A)\nprint(rank_A)",
          },
        ],
      },
      {
        heading: "Inverse matrices",
        paragraphs: [
          "A square matrix A is invertible if there exists a matrix A inverse such that multiplying them gives the identity matrix. In practical terms, an inverse lets us undo a linear transformation or solve Ax = b when the matrix is nonsingular.",
          "For numerical work, it is often better to solve a system directly with np.linalg.solve than to explicitly compute the inverse. Still, computing the inverse is useful for understanding the algebra.",
        ],
        code: [
          {
            language: "python",
            content:
              "B = np.linalg.inv(A)\nprint(B)\n\nAB = np.dot(A, B)\nprint(AB)  # approximately the identity matrix",
          },
        ],
      },
      {
        heading: "Solving simultaneous linear equations",
        paragraphs: [
          "A system of linear equations can be written as Ax = b. The augmented matrix [A | b] is useful for manual row reduction, while NumPy provides direct numerical solvers.",
          "The system has a unique solution when A has full rank and is square. If the rank is deficient, the system may have no solution or infinitely many solutions, depending on the augmented matrix.",
        ],
        code: [
          {
            language: "python",
            content:
              "A = np.array([[2, 1],\n              [5, 3]], dtype=float)\nb = np.array([1, 2], dtype=float)\n\nx = np.linalg.solve(A, b)\nprint(x)\nprint(A @ x)  # checks that Ax reproduces b",
          },
        ],
      },
      {
        heading: "Transpose, complex conjugate, and special matrices",
        paragraphs: [
          "The transpose swaps rows and columns. For complex matrices, the conjugate changes the sign of the imaginary part. Combining transpose and conjugate gives the conjugate transpose, which is central for Hermitian and unitary matrices.",
          "Special matrices are important because they have reliable structure. Symmetric matrices equal their transpose, orthogonal matrices preserve lengths, Hermitian matrices are the complex analogue of symmetric matrices, and unitary matrices are the complex analogue of orthogonal matrices.",
        ],
        code: [
          {
            language: "python",
            content:
              "A_T = A.T\nprint(A_T)\n\nA_complex = np.array([[2 + 1j, 1 - 2j],\n                      [2, 2]])\n\nA_complex_conjugate = np.conj(A_complex)\nprint(A_complex_conjugate)",
          },
        ],
      },
      {
        heading: "Eigenvalues and eigenvectors",
        paragraphs: [
          "An eigenvector is a nonzero vector whose direction is preserved by a matrix transformation. If Av = lambda v, then v is an eigenvector and lambda is the eigenvalue.",
          "Eigenvalues reveal stretching, shrinking, reversal, collapse, oscillation, and long-term behavior. They are essential in stability analysis, vibrations, differential equations, Markov models, and principal component analysis.",
        ],
        code: [
          {
            language: "python",
            content:
              "A = np.array([[2, 1],\n              [0, 1]], dtype=float)\n\neigc, eigv = np.linalg.eig(A)\nprint(eigc)  # eigenvalues\nprint(eigv)  # eigenvectors stored as columns",
          },
        ],
      },
      {
        heading: "Diagonalization",
        paragraphs: [
          "If a matrix has enough independent eigenvectors, it can be written in the form A = P D P inverse, where D is diagonal. This is powerful because diagonal matrices are easy to multiply, invert, and interpret.",
          "Diagonalization explains why eigenvectors are more than a formula. They identify the natural coordinate system in which a complicated transformation becomes simple scaling.",
        ],
        code: [
          {
            language: "python",
            content:
              "eigenvalues, P = np.linalg.eig(A)\nD = np.diag(eigenvalues)\nA_reconstructed = P @ D @ np.linalg.inv(P)\n\nprint(A_reconstructed)",
          },
        ],
      },
      {
        heading: "Compact NumPy workflow",
        bullets: [
          "Create matrices with np.array and use dtype=float for numerical linear algebra.",
          "Use A @ x or np.dot(A, x) for matrix-vector and matrix-matrix products.",
          "Use A.T for transpose and np.conj(A) for complex conjugation.",
          "Use np.linalg.matrix_rank(A) to check independence.",
          "Use np.linalg.solve(A, b) for Ax = b when A is square and nonsingular.",
          "Use np.linalg.inv(A) only when the inverse itself is needed.",
          "Use np.linalg.eig(A) to compute eigenvalues and eigenvectors.",
        ],
      },
      {
        heading: "Exercises",
        bullets: [
          "Compute the rank, inverse, and eigenvalues of a 2 by 2 matrix of your choice.",
          "Verify numerically that A multiplied by its inverse gives the identity matrix.",
          "Solve a 3 by 3 system Ax = b and check the solution by computing A @ x.",
          "Create a complex matrix and compare its transpose, conjugate, and conjugate transpose.",
          "Choose a diagonalizable matrix and reconstruct it from P, D, and P inverse.",
        ],
      },
    ],
  },
];

const matrixAlgebraWithNumpyChapter: CourseChapter = {
  slug: "matrix-algebra-with-numpy",
  eyebrow: "Chapter 6",
  title: "Matrix Algebra with NumPy",
  summary:
    "Matrix algebra is the language of linear systems, transformations, stability, and data analysis. This chapter follows the matrix lecture notes and then develops eigenvalues and eigenvectors in a more visual way using NumPy.",
  sections: [
    {
      heading: "Elementary row and column operations",
      paragraphs: [
        "Elementary operations are the basic moves used to simplify matrices. Row operations are used most often for solving systems of equations, while column operations are useful for understanding rank and column spaces.",
        "The three elementary row operations are: interchange two rows, multiply a row by a nonzero scalar, and add a scalar multiple of one row to another. The same ideas apply to columns.",
        "Two matrices are row equivalent if one can be obtained from the other by a finite sequence of elementary row operations. When solving Ax = b, these operations preserve the solution set if they are applied to the augmented matrix [A | b].",
      ],
      equations: [
        "R_i <-> R_j",
        "R_i <- k R_i, with k != 0",
        "R_i <- R_i + k R_j",
      ],
    },
    {
      heading: "Echelon forms and pivots",
      paragraphs: [
        "A matrix is in row echelon form when all zero rows are below nonzero rows, each lower-row pivot appears to the right of the pivot above it, and entries below each pivot are zero.",
        "Reduced row echelon form goes one step further: every leading entry is 1, and each leading 1 is the only nonzero entry in its column.",
        "The visual idea is a staircase of pivots moving from left to right as we go down the matrix.",
      ],
      figure: {
        type: "pivot",
        caption: "Pivot positions in row echelon form move down and to the right.",
      },
    },
    {
      heading: "Rank of a matrix",
      paragraphs: [
        "The rank of A is the number of nonzero rows in any row echelon form of A. Equivalently, it is the dimension of the column space of A.",
        "Rank measures how much independent information the matrix contains. The number of pivot columns equals rank(A), and the number of free variables in Ax = 0 is n - rank(A) for an m by n matrix.",
      ],
      equations: [
        "0 <= rank(A) <= min(m, n)",
        "free variables in Ax = 0: n - rank(A)",
        "A = [[1, 2, 1], [2, 4, 0], [3, 6, 3]]",
        "R_2 <- R_2 - 2R_1, R_3 <- R_3 - 3R_1",
        "[[1, 2, 1], [0, 0, -2], [0, 0, 0]], so rank(A) = 2",
      ],
      code: [
        {
          language: "python",
          content:
            "import numpy as np\n\nA = np.array([[1, 2, 1],\n              [2, 4, 0],\n              [3, 6, 3]], dtype=float)\n\nprint(np.linalg.matrix_rank(A))  # 2",
        },
      ],
    },
    {
      heading: "Inverse of a matrix by Gauss-Jordan elimination",
      paragraphs: [
        "A square matrix A is invertible, or nonsingular, if there exists a matrix A inverse such that multiplication in either order gives the identity matrix.",
        "The Gauss-Jordan method finds the inverse by forming [A | I] and applying row operations until the left block becomes I. If this reduction is possible, the right block becomes A inverse. If not, the inverse does not exist.",
      ],
      equations: [
        "A A^{-1} = A^{-1} A = I_n",
        "[A | I] -> [I | A^{-1}]",
        "For A = [[2, 1], [5, 3]], A^{-1} = [[3, -1], [-5, 2]]",
      ],
      code: [
        {
          language: "python",
          content:
            "A = np.array([[2, 1],\n              [5, 3]], dtype=float)\n\nA_inv = np.linalg.inv(A)\nprint(A_inv)\nprint(A @ A_inv)  # approximately the identity matrix",
        },
      ],
    },
    {
      heading: "Solving simultaneous linear equations",
      paragraphs: [
        "A system of m linear equations in n unknowns can be written compactly as Ax = b. The augmented matrix [A | b] keeps the coefficient matrix and right-hand side together during row reduction.",
        "The Rouche-Capelli theorem says that Ax = b is consistent exactly when rank(A) equals rank([A | b]). If this common rank equals the number of unknowns, the solution is unique. If it is smaller than the number of unknowns, free variables give infinitely many solutions.",
      ],
      equations: ["Ax = b", "rank(A) = rank([A | b])"],
      table: {
        headers: ["Condition", "Meaning", "Number of solutions"],
        rows: [
          ["rank(A) != rank([A | b])", "inconsistent", "none"],
          ["rank(A) = rank([A | b]) = n", "full column rank", "unique"],
          ["rank(A) = rank([A | b]) < n", "free variables exist", "infinitely many"],
        ],
      },
      code: [
        {
          language: "python",
          content:
            "A = np.array([[1, 2, 1],\n              [2, 4, 0],\n              [3, 6, 3]], dtype=float)\nb = np.array([4, 6, 12], dtype=float)\n\nprint('rank(A) =', np.linalg.matrix_rank(A))\nprint('rank([A|b]) =', np.linalg.matrix_rank(np.column_stack([A, b])))",
        },
      ],
    },
    {
      heading: "Special types of matrices",
      paragraphs: [
        "Special matrices appear repeatedly in numerical analysis because their structure gives useful guarantees. Orthogonal matrices preserve lengths and angles. Symmetric matrices have real eigenvalues and perpendicular eigenvectors. Hermitian matrices play the same role for complex matrices.",
        "For a real orthogonal matrix Q, Q transpose Q equals the identity, so the inverse is just the transpose. For a complex matrix A, the conjugate transpose A star is obtained by transposing and taking complex conjugates.",
      ],
      equations: [
        "orthogonal: Q^T Q = Q Q^T = I",
        "symmetric: A^T = A",
        "skew-symmetric: A^T = -A",
        "Hermitian: A* = A",
        "unitary: U* U = U U* = I",
      ],
      figure: {
        type: "orthogonal",
        caption:
          "An orthogonal matrix rotates or reflects vectors while preserving lengths and angles.",
      },
      table: {
        headers: ["Matrix type", "Defining condition", "Key property"],
        rows: [
          ["Orthogonal", "Q^T Q = I", "real length-preserving matrix"],
          ["Symmetric", "A^T = A", "real eigenvalues; orthogonally diagonalizable"],
          ["Skew-symmetric", "A^T = -A", "diagonal entries are zero"],
          ["Hermitian", "A* = A", "real eigenvalues; unitarily diagonalizable"],
          ["Skew-Hermitian", "A* = -A", "purely imaginary eigenvalues or zero"],
          ["Normal", "A* A = A A*", "unitarily diagonalizable over C"],
          ["Unitary", "U* U = I", "preserves complex inner products"],
        ],
      },
      code: [
        {
          language: "python",
          content:
            "theta = np.pi / 4\nQ = np.array([[np.cos(theta), -np.sin(theta)],\n              [np.sin(theta),  np.cos(theta)]])\n\nprint(Q.T @ Q)          # identity\nprint(np.linalg.det(Q)) # 1\n\nH = np.array([[2, 1j],\n              [-1j, 3]], dtype=complex)\nprint(np.allclose(H.conj().T, H))\nprint(np.linalg.eigvals(H))",
        },
      ],
    },
    {
      heading: "The central idea of eigenvalues and eigenvectors",
      paragraphs: [
        "A matrix represents a linear transformation. It takes an input vector v and produces Av. Usually Av points in a different direction from v.",
        "An eigenvector is the special case where the transformation does not turn the vector. The output Av stays on the same line as v, and the eigenvalue tells us how the vector is stretched, shrunk, reversed, or collapsed along that line.",
      ],
      equations: ["Av = lambda v", "(A - lambda I)v = 0", "det(A - lambda I) = 0"],
      figure: {
        type: "eigenvectors",
        caption:
          "Eigenvectors keep their direction under the transformation, while ordinary vectors may turn.",
      },
      code: [
        {
          language: "python",
          content:
            "A = np.array([[2, 1],\n              [0, 1]], dtype=float)\n\neigenvalues, eigenvectors = np.linalg.eig(A)\nprint(eigenvalues)\nprint(eigenvectors)  # eigenvectors are stored as columns",
        },
      ],
    },
    {
      heading: "A first visual eigenvalue example",
      paragraphs: [
        "For A = [[2, 1], [0, 1]], the vector [1, 0] is mapped to [2, 0], so it remains on the same horizontal line and has eigenvalue 2.",
        "The vector [1, -1] is mapped to itself, so it has eigenvalue 1. A generic vector such as [1, 1] changes direction, so it is not an eigenvector.",
        "In two dimensions, an eigenvector represents an entire eigenline: every nonzero scalar multiple of an eigenvector is again an eigenvector.",
      ],
      equations: [
        "A = [[2, 1], [0, 1]]",
        "v_1 = [1, 0]^T, A v_1 = [2, 0]^T = 2 v_1",
        "v_2 = [1, -1]^T, A v_2 = [1, -1]^T = 1 v_2",
        "A(c v) = c A v = c lambda v = lambda (c v)",
      ],
      figure: {
        type: "eigenlines",
        caption:
          "An eigenvector is best understood as an invariant direction or eigenline.",
      },
      code: [
        {
          language: "python",
          content:
            "vectors = {\n    'v1 eigenvector': np.array([1, 0], dtype=float),\n    'v2 eigenvector': np.array([1, -1], dtype=float),\n    'ordinary vector': np.array([1, 1], dtype=float),\n}\n\nfor label, v in vectors.items():\n    print(label, '->', A @ v)",
        },
      ],
    },
    {
      heading: "Meaning of the eigenvalue",
      paragraphs: [
        "The sign and size of lambda explain what happens along the eigenline. Positive eigenvalues preserve direction, negative eigenvalues reverse direction, and zero eigenvalues collapse the eigenvector to the zero vector.",
        "For a 2 by 2 matrix with eigenvalues lambda_1 and lambda_2, the determinant is their product and the trace is their sum. The determinant measures area scaling, while the eigenvalues describe scaling along natural directions.",
      ],
      equations: [
        "lambda > 1: stretched",
        "0 < lambda < 1: shrunk",
        "lambda < 0: reversed",
        "lambda = 0: collapsed",
        "det(A) = lambda_1 lambda_2",
        "tr(A) = lambda_1 + lambda_2",
      ],
      figure: {
        type: "determinant",
        caption:
          "The determinant gives total area scaling, while eigenvalues describe scaling along natural directions.",
      },
      code: [
        {
          language: "python",
          content:
            "eigvals = np.linalg.eigvals(A)\nprint('det(A) =', np.linalg.det(A))\nprint('product of eigenvalues =', np.prod(eigvals))\nprint('trace(A) =', np.trace(A))\nprint('sum of eigenvalues =', np.sum(eigvals))",
        },
      ],
    },
    {
      heading: "Cayley-Hamilton theorem",
      paragraphs: [
        "The Cayley-Hamilton theorem states that every square matrix satisfies its own characteristic equation. If p_A(lambda) is the characteristic polynomial of A, then p_A(A) is the zero matrix.",
        "For A = [[2, 1], [0, 1]], the characteristic polynomial is (lambda - 2)(lambda - 1), or lambda squared minus 3 lambda plus 2. Therefore A squared minus 3A plus 2I equals zero.",
        "When A is invertible, Cayley-Hamilton can also be rearranged to express A inverse as a polynomial in A.",
      ],
      equations: [
        "p_A(lambda) = det(lambda I - A)",
        "p_A(A) = 0",
        "A^2 - 3A + 2I = 0",
      ],
      code: [
        {
          language: "python",
          content:
            "A = np.array([[2, 1],\n              [0, 1]], dtype=float)\n\nleft_side = A @ A - 3 * A + 2 * np.eye(2)\nprint(left_side)",
        },
      ],
    },
    {
      heading: "Diagonalization",
      paragraphs: [
        "A square matrix is diagonalizable if there is an invertible matrix P and a diagonal matrix D such that A = P D P inverse. The columns of P are eigenvectors, and the diagonal entries of D are the corresponding eigenvalues.",
        "Diagonalization is useful because it changes the problem into the eigenvector coordinate system, applies independent scaling, and then changes back.",
      ],
      equations: [
        "A = P D P^{-1}",
        "P = [v_1 v_2 ... v_n]",
        "D = diag(lambda_1, lambda_2, ..., lambda_n)",
        "A^k = P D^k P^{-1}",
      ],
      figure: {
        type: "eigenbasis",
        caption:
          "Diagonalization means changing to the eigenbasis, scaling independently, and changing back.",
      },
      code: [
        {
          language: "python",
          content:
            "eigvals, P = np.linalg.eig(A)\nD = np.diag(eigvals)\n\nprint('P =')\nprint(P)\nprint('D =')\nprint(D)\nprint('P D P^{-1} =')\nprint(P @ D @ np.linalg.inv(P))\n\nk = 5\nA_power = P @ np.linalg.matrix_power(D, k) @ np.linalg.inv(P)\nprint(A_power)\nprint(np.linalg.matrix_power(A, k))",
        },
      ],
    },
    {
      heading: "Why eigenvectors matter",
      paragraphs: [
        "Eigenvectors reveal the natural axes of a transformation. In the right coordinate system, a complicated matrix action can become simple independent scaling.",
        "They also make powers of matrices easy. If A = P D P inverse, then A to the k is P D to the k P inverse. This matters in repeated transformations, Markov chains, difference equations, and dynamical systems.",
        "When one eigenvalue has the largest magnitude, repeated multiplication often makes many vectors align with the corresponding dominant eigenvector. This is the idea behind the power method.",
      ],
      equations: [
        "|lambda_1| > |lambda_2| >= ... >= |lambda_n|",
        "many iterates A^k x align with the eigenvector for lambda_1",
      ],
      figure: {
        type: "power",
        caption: "Repeated multiplication can reveal the dominant eigen-direction.",
      },
    },
    {
      heading: "Complex eigenvalues and rotations",
      paragraphs: [
        "Some real matrices do not have real eigenvectors. A pure rotation turns every nonzero real vector, so no nonzero real vector keeps its direction unless the rotation angle is 0 or pi.",
        "The eigenvalues of a two-dimensional rotation matrix are complex numbers on the unit circle. This is why complex eigenvalues often signal rotation-like behavior or oscillation.",
      ],
      equations: [
        "R_theta = [[cos(theta), -sin(theta)], [sin(theta), cos(theta)]]",
        "lambda = cos(theta) +/- i sin(theta) = exp(+/- i theta)",
      ],
      figure: {
        type: "rotation",
        caption:
          "A rotation turns every real vector, so its nontrivial eigenvalues are complex.",
      },
      code: [
        {
          language: "python",
          content:
            "theta = np.pi / 4\nR = np.array([[np.cos(theta), -np.sin(theta)],\n              [np.sin(theta),  np.cos(theta)]])\n\nprint(np.linalg.eigvals(R))",
        },
      ],
    },
    {
      heading: "Symmetric matrices and the spectral theorem",
      paragraphs: [
        "Real symmetric matrices are especially friendly. They have real eigenvalues and perpendicular eigenvectors. Geometrically, they stretch space along mutually perpendicular axes.",
        "The spectral theorem states that if A is real symmetric, then A can be diagonalized as A = Q D Q transpose, where Q is orthogonal and D is real diagonal.",
      ],
      equations: ["A^T = A", "A = Q D Q^T"],
      figure: {
        type: "symmetric",
        caption: "A symmetric matrix stretches along perpendicular eigen-directions.",
      },
      code: [
        {
          language: "python",
          content:
            "S = np.array([[3, 1],\n              [1, 2]], dtype=float)\n\neigvals, eigvecs = np.linalg.eigh(S)  # for symmetric/Hermitian matrices\nprint(eigvals)\nprint(eigvecs)\nprint(eigvecs.T @ eigvecs)  # identity",
        },
      ],
    },
    {
      heading: "Applications and significance",
      paragraphs: [
        "Eigenvalues and eigenvectors appear throughout science and engineering because they reveal the hidden geometry of linear systems.",
      ],
      table: {
        headers: ["Area", "Role of eigenvalues and eigenvectors"],
        rows: [
          ["Differential equations", "modes of growth, decay, and oscillation"],
          ["Dynamical systems", "long-term behavior under repeated transformation"],
          ["Data science and PCA", "principal directions of variation"],
          ["Ranking algorithms", "dominant eigenvector as long-run importance score"],
          ["Quantum mechanics", "eigenvalues as measurable values"],
          ["Vibrations", "normal modes and characteristic frequencies"],
          ["Stability analysis", "eigenvalue magnitudes determine stable or unstable behavior"],
        ],
      },
    },
    {
      heading: "Principal component analysis intuition",
      paragraphs: [
        "In data analysis, the eigenvectors of the covariance matrix give the directions of greatest variance. The largest eigenvalue corresponds to the direction in which the data are spread out the most.",
        "This makes PCA an eigenvalue problem: find the natural axes of a cloud of data, then describe the data using those axes.",
      ],
      code: [
        {
          language: "python",
          content:
            "rng = np.random.default_rng(7)\nX = rng.normal(size=(300, 2))\nstretch = np.array([[3, 1],\n                    [1, 1]])\nX = X @ stretch.T\nX = X - X.mean(axis=0)\n\ncov = np.cov(X.T)\neigvals, eigvecs = np.linalg.eigh(cov)\norder = np.argsort(eigvals)[::-1]\neigvals = eigvals[order]\neigvecs = eigvecs[:, order]\n\nprint(eigvals)\nprint(eigvecs)",
        },
      ],
    },
    {
      heading: "Compact workflows",
      bullets: [
        "For rank and systems: form A or [A | b], apply row operations, count pivots, compare rank(A) and rank([A | b]), then read off the solution.",
        "For inverses: reduce [A | I] to [I | A inverse], or use np.linalg.inv when the inverse itself is needed.",
        "For numerical linear systems: prefer np.linalg.solve(A, b) over explicitly forming A inverse.",
        "For eigenvalues: compute p_A(lambda) = det(lambda I - A), solve p_A(lambda) = 0, then solve (A - lambda I)v = 0.",
        "For diagonalization: collect independent eigenvectors in P and corresponding eigenvalues in D, then verify A = P D P inverse.",
        "For symmetric or Hermitian matrices: use np.linalg.eigh instead of np.linalg.eig.",
      ],
    },
    {
      heading: "Common misunderstandings",
      bullets: [
        "An eigenvector is not unique; any nonzero scalar multiple is also an eigenvector.",
        "Not every vector is an eigenvector.",
        "Not every real matrix has real eigenvalues.",
        "A repeated eigenvalue does not guarantee enough eigenvectors for diagonalization.",
        "Eigenvalues describe scaling along eigenvector directions, not necessarily along every direction.",
      ],
    },
    {
      heading: "Exercises",
      bullets: [
        "Find the rank of [[1, 2, 1], [2, 4, 0], [3, 6, 3]] by row reduction and verify it in NumPy.",
        "Use Gauss-Jordan elimination to find the inverse of [[2, 1], [5, 3]], then verify it with NumPy.",
        "For A = [[2, 1], [0, 1]], compute eigenvalues and eigenvectors by hand and with np.linalg.eig.",
        "Explain visually why the rotation matrix [[0, -1], [1, 0]] has no real eigenvectors.",
        "Create a Matplotlib plot showing three vectors and their images under [[1, 2], [0, 1]]. Which vectors keep their direction?",
        "Choose a symmetric 2 by 2 matrix and verify that its eigenvectors are perpendicular.",
      ],
    },
  ],
};

export const courseChapters: CourseChapter[] = courseChaptersBase.map((chapter) =>
  chapter.slug === matrixAlgebraWithNumpyChapter.slug
    ? matrixAlgebraWithNumpyChapter
    : chapter,
);
