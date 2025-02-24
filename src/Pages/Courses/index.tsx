import { Search, Menu } from "lucide-react";
import StarField from "../../components/StarField";
import CourseCard from "../../components/CourseCard";
import SeasonCard from "../../components/SeasonCard";

const courses = [
  {
    title: "HTML Fundamentals",
    description:
      "Create your first website with HTML, the building blocks of the web.",
    difficulty: "Beginner",
    icon: "html",
  },
  {
    title: "CSS Mastery",
    description:
      "Learn to use CSS selectors and properties to stylize your HTML pages.",
    difficulty: "Intermediate",
    icon: "css",
  },
  {
    title: "JavaScript Basics",
    description:
      "Learn variables, loops, functions, and events to start building interactive web apps.",
    difficulty: "Beginner",
    icon: "javascript",
  },
  {
    title: "Python Programming",
    description:
      "Learn programming fundamentals such as variables, control flow, and loops.",
    difficulty: "Beginner",
    icon: "python",
  },
  {
    title: "SQL Database",
    description: "Learn database basics, queries, calculations, and more.",
    difficulty: "Intermediate",
    icon: "sql",
  },
] as const;

const seasons = [
  {
    number: 1,
    title: "Web Development",
    description:
      "Master HTML, CSS, and JavaScript in this foundational season.",
    image:
      "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80",
  },
  {
    number: 2,
    title: "Data Science",
    description: "Dive into Python, SQL, and Data Analysis fundamentals.",
    image:
      "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80",
  },
  {
    number: 3,
    title: "Advanced Tools",
    description: "Level up with React, Node.js, and API development.",
    image:
      "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80",
  },
];

function Courses() {
  return (
    <div className="min-h-screen space-bg">
      <StarField />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-space-dark bg-opacity-90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="font-orbitron text-2xl text-neon-blue">
                CodeVerse
              </h1>
            </div>

            <div className="flex items-center gap-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="bg-space-light bg-opacity-50 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>

              <button className="p-2 hover:bg-space-light rounded-lg transition-colors">
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl mb-4">
              Choose Your Course and Season
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
              Embark on a coding journey through interactive courses and
              gamified learning
            </p>
          </div>

          {/* Courses Section */}
          <section className="mb-16">
            <h2 className="font-orbitron text-2xl mb-8">Popular Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard
                  key={course.title}
                  {...course}
                  // onClick={() =>
                  //   console.log(`Selected course: ${course.title}`)
                  // }
                />
              ))}
            </div>
          </section>

          {/* Seasons Section */}
          <section>
            <h2 className="font-orbitron text-2xl mb-8">Explore Seasons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seasons.map((season) => (
                <SeasonCard
                  key={season.number}
                  {...season}
                  onClick={() =>
                    console.log(`Selected season: ${season.number}`)
                  }
                />
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-space-dark bg-opacity-90 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-orbitron text-lg mb-4">CodeVerse</h3>
              <p className="text-gray-400 text-sm">
                Embark on your coding journey through the stars
              </p>
            </div>
            <div>
              <h4 className="font-orbitron text-sm mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-white transition-colors"
                  ></a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Profile
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-orbitron text-sm mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Courses;
