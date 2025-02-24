import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  User,
  Trophy,
  Star,
  MessageSquare,
  Code2,
  Gamepad2,
  Compass,
  Ghost,
  Brain,
  Target,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Exercise {
  id: number;
  name: string;
  status: "Start" | "???" | "Locked";
}

interface Chapter {
  id: number;
  name: string;
  description: string;
  exercises: Exercise[];
  isClub?: boolean;
}

interface Game {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  difficulty: "Easy" | "Medium" | "Hard";
  xp: number;
  status: "Ready" | "Coming Soon";
}

const chapters: Chapter[] = [
  {
    id: 1,
    name: "Elements",
    description:
      "Create your first web page by learning about basic elements and tags.",
    exercises: [
      { id: 1, name: "Shooting Star", status: "Start" },
      { id: 2, name: "Elemental", status: "???" },
      { id: 3, name: "Newspaper", status: "???" },
      { id: 4, name: "Corporate Talk", status: "???" },
      { id: 5, name: "Sous-Chef", status: "???" },
      { id: 6, name: "Lost Pet", status: "???" },
      { id: 7, name: "Favorite Band", status: "???" },
      { id: 8, name: "Complete chapter to unlock", status: "???" },
    ],
  },
  {
    id: 2,
    name: "Structure",
    description: "Learn about document structure and semantic HTML.",
    exercises: [],
  },
  {
    id: 3,
    name: "Forms",
    description: "Master form elements and user input.",
    exercises: [],
    isClub: true,
  },
  {
    id: 4,
    name: "Semantic HTML",
    description: "Learn about semantic markup and accessibility.",
    exercises: [],
    isClub: true,
  },
  {
    id: 5,
    name: "Final Project",
    description: "Put your skills to the test with a comprehensive project.",
    exercises: [],
    isClub: true,
  },
  {
    id: 6,
    name: "Course Certificate",
    description: "Complete the course to earn your certificate.",
    exercises: [],
    isClub: true,
  },
];

const games: Game[] = [
  {
    id: 1,
    name: "Treasure Hunt",
    description: "Find hidden elements using HTML selectors and DOM traversal",
    icon: <Compass className="w-8 h-8 text-yellow-400" />,
    difficulty: "Medium",
    xp: 150,
    status: "Ready",
  },
  {
    id: 2,
    name: "Imposter Finder",
    description: "Spot incorrect HTML tags and fix semantic mistakes",
    icon: <Ghost className="w-8 h-8 text-purple-400" />,
    difficulty: "Hard",
    xp: 200,
    status: "Ready",
  },
  {
    id: 3,
    name: "Memory Match",
    description: "Match pairs of HTML elements and attributes",
    icon: <Brain className="w-8 h-8 text-blue-400" />,
    difficulty: "Easy",
    xp: 100,
    status: "Ready",
  },
  {
    id: 4,
    name: "Tag Master",
    description: "Race against time to type correct HTML tags",
    icon: <Target className="w-8 h-8 text-green-400" />,
    difficulty: "Medium",
    xp: 150,
    status: "Coming Soon",
  },
];

function Lessons() {
  const [expandedChapter, setExpandedChapter] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"learn" | "games">("learn");
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  const progress = {
    exercises: { completed: 0, total: 26 },
    projects: { completed: 0, total: 1 },
    xp: { earned: 0, total: 430 },
    badges: { earned: 0, total: 4 },
  };

  useEffect(() => {
    const root = document.documentElement;
    for (let i = 1; i <= 16; i++) {
      root.style.setProperty(`--x${i}`, Math.random().toFixed(2));
      root.style.setProperty(`--y${i}`, Math.random().toFixed(2));
    }
  }, []);

  const renderGamesSection = () => (
    <div className="max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {games.map((game) => (
          <motion.div
            key={game.id}
            className="bg-[#151823] rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            whileHover={{ y: -4 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: game.id * 0.1 }}
          >
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#1E2231] rounded-lg">{game.icon}</div>
                  <div>
                    <h3 className="text-lg font-pressStart mb-1">
                      {game.name}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded font-pressStart
                        ${
                          game.difficulty === "Easy"
                            ? "bg-green-500/20 text-green-400"
                            : game.difficulty === "Medium"
                              ? "bg-yellow-500/20 text-yellow-400"
                              : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {game.difficulty}
                      </span>
                      <span className="text-xs text-gray-400 font-pressStart">
                        {game.xp} XP
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 font-pressStart">
                {game.description}
              </p>
              <motion.button
                className={`w-full py-3 px-6 rounded-lg font-pressStart text-sm
                  ${
                    game.status === "Ready"
                      ? "bg-[#0099ff] hover:bg-[#33adff] text-white"
                      : "bg-[#1E2231] text-gray-400 cursor-not-allowed"
                  }`}
                whileHover={game.status === "Ready" ? { scale: 1.02 } : {}}
                whileTap={game.status === "Ready" ? { scale: 0.98 } : {}}
                onClick={() => game.status === "Ready" && setSelectedGame(game)}
                disabled={game.status !== "Ready"}
              >
                {game.status === "Ready" ? "Play Now" : "Coming Soon"}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0A0B11] text-white relative overflow-hidden">
      <div className="stars" />
      <div className="nebula" />

      {/* Hero Section */}
      <header className="relative header-gradient py-16 mb-8">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="floating"
              >
                <div className="w-16 h-16 bg-[#2A2F42] rounded-lg flex items-center justify-center">
                  <Code2 className="w-10 h-10 text-[#00a8ff]" />
                </div>
              </motion.div>

              <div>
                <motion.h1
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-5xl mb-4 tracking-wide font-pressStart bg-clip-text text-transparent bg-gradient-to-r from-[#00a8ff] to-[#6d00ff]"
                >
                  HTML
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-300 max-w-2xl font-pressStart text-sm"
                >
                  Create your first website with HTML, the building blocks of
                  the web and dive into the world of web development.
                </motion.p>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-4 border-b border-[#1E2231]">
              <motion.button
                className={`px-6 py-3 font-pressStart text-sm relative ${
                  activeTab === "learn" ? "text-[#00a8ff]" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("learn")}
                whileHover={{ y: -2 }}
              >
                Learn
                {activeTab === "learn" && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8ff]"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
              <motion.button
                className={`px-6 py-3 font-pressStart text-sm relative ${
                  activeTab === "games" ? "text-[#00a8ff]" : "text-gray-400"
                }`}
                onClick={() => setActiveTab("games")}
                whileHover={{ y: -2 }}
              >
                Games
                {activeTab === "games" && (
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-[#00a8ff]"
                    layoutId="activeTab"
                  />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        <AnimatePresence mode="wait">
          {activeTab === "learn" ? (
            <motion.div
              key="learn"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <div className="max-w-5xl mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Side - Course Content */}
                  <div className="lg:w-2/3">
                    <div className="space-y-4">
                      {chapters.map((chapter) => (
                        <motion.div
                          key={chapter.id}
                          className="chapter-card bg-[#151823] rounded-lg overflow-hidden"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: chapter.id * 0.1 }}
                        >
                          <button
                            className="w-full text-left p-4 flex items-center gap-4"
                            onClick={() => setExpandedChapter(chapter.id)}
                          >
                            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-[#1E2231] text-sm font-pressStart">
                              {chapter.id}
                            </span>
                            <div className="flex-grow">
                              <div className="flex items-center gap-2">
                                <h3 className="text-lg font-pressStart">
                                  {chapter.name}
                                </h3>
                                {chapter.isClub && (
                                  <span className="text-xs px-2 py-1 rounded bg-purple-500 font-pressStart">
                                    Club
                                  </span>
                                )}
                              </div>
                            </div>
                            <motion.div
                              animate={{
                                rotate:
                                  expandedChapter === chapter.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-6 h-6" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {expandedChapter === chapter.id &&
                              chapter.exercises.length > 0 && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="p-4 bg-[#0D0F17]">
                                    <p className="text-gray-400 mb-4 font-pressStart text-sm">
                                      {chapter.description}
                                    </p>
                                    <div className="space-y-3">
                                      {chapter.exercises.map((exercise) => (
                                        <motion.div
                                          key={exercise.id}
                                          className="flex items-center justify-between py-2"
                                          whileHover={{ x: 4 }}
                                          transition={{ duration: 0.2 }}
                                        >
                                          <div className="flex items-center gap-3">
                                            <span className="text-gray-500 font-pressStart text-xs">
                                              Exercise {exercise.id}
                                            </span>
                                            <span className="text-white font-pressStart text-xs">
                                              {exercise.name}
                                            </span>
                                          </div>
                                          <motion.button
                                            className={`glow-button px-4 py-2 rounded text-sm font-pressStart ${
                                              exercise.status === "Start"
                                                ? "bg-[#0099ff] hover:bg-[#33adff] text-white"
                                                : "bg-[#1E2231] text-gray-400"
                                            }`}
                                            disabled={
                                              exercise.status !== "Start"
                                            }
                                            whileHover={{
                                              scale:
                                                exercise.status === "Start"
                                                  ? 1.05
                                                  : 1,
                                            }}
                                            whileTap={{
                                              scale:
                                                exercise.status === "Start"
                                                  ? 0.95
                                                  : 1,
                                            }}
                                          >
                                            {exercise.status}
                                          </motion.button>
                                        </motion.div>
                                      ))}
                                    </div>
                                  </div>
                                </motion.div>
                              )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Right Side - Profile & Progress */}
                  <div className="lg:w-1/3 space-y-6">
                    {/* Profile Card */}
                    <motion.div
                      className="bg-[#151823] rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-lg bg-[#1E2231] flex items-center justify-center">
                          <User className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-pressStart text-sm">Your Name</h3>
                          <p className="text-xs text-gray-400 font-pressStart">
                            Level 1
                          </p>
                        </div>
                      </div>
                      <motion.button
                        className="glow-button w-full bg-[#1E2231] text-center py-2 rounded hover:bg-[#2A2F42] transition-colors font-pressStart text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Profile
                      </motion.button>
                    </motion.div>

                    {/* Course Progress */}
                    <motion.div
                      className="bg-[#151823] rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="font-pressStart text-sm mb-4">
                        Course Progress
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-xs mb-2 font-pressStart">
                            <span className="text-gray-400">Exercises</span>
                            <span>
                              {progress.exercises.completed}/
                              {progress.exercises.total}
                            </span>
                          </div>
                          <div className="h-2 bg-[#1E2231] rounded-full overflow-hidden progress-bar">
                            <div
                              className="h-full bg-[#0099ff]"
                              style={{
                                width: `${(progress.exercises.completed / progress.exercises.total) * 100}%`,
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-2 font-pressStart">
                            <span className="text-gray-400">
                              Projects Completed
                            </span>
                            <span>
                              {progress.projects.completed}/
                              {progress.projects.total}
                            </span>
                          </div>
                          <div className="h-2 bg-[#1E2231] rounded-full overflow-hidden progress-bar">
                            <div
                              className="h-full bg-[#0099ff]"
                              style={{
                                width: `${(progress.projects.completed / progress.projects.total) * 100}%`,
                              }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex justify-between text-xs mb-2 font-pressStart">
                            <span className="text-gray-400">XP Earned</span>
                            <span>
                              {progress.xp.earned}/{progress.xp.total}
                            </span>
                          </div>
                          <div className="h-2 bg-[#1E2231] rounded-full overflow-hidden progress-bar">
                            <div
                              className="h-full bg-[#0099ff]"
                              style={{
                                width: `${(progress.xp.earned / progress.xp.total) * 100}%`,
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Course Badges */}
                    <motion.div
                      className="bg-[#151823] rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-pressStart text-sm mb-2">
                        Course Badges
                      </h3>
                      <p className="text-xs text-gray-400 mb-4 font-pressStart">
                        Complete a chapter to earn a badge – collect 'em all!
                      </p>
                      <div className="grid grid-cols-4 gap-4">
                        {[...Array(4)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="badge aspect-square rounded bg-[#1E2231] flex items-center justify-center"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Trophy className="w-6 h-6 text-gray-600" />
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>

                    {/* Help Section */}
                    <motion.div
                      className="bg-[#151823] rounded-lg p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="font-pressStart text-sm mb-2">
                        Need HTML Help?
                      </h3>
                      <p className="text-xs text-gray-400 mb-4 font-pressStart">
                        Ask questions in our community!
                      </p>
                      <motion.button
                        className="glow-button w-full flex items-center justify-center gap-2 bg-[#1E2231] py-2 rounded hover:bg-[#2A2F42] transition-colors font-pressStart text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Go to Community</span>
                      </motion.button>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="games"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {renderGamesSection()}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}

export default Lessons;
