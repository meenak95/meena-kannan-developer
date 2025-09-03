import React from "react";
import { motion } from "framer-motion";

const codeSnippets = [
  {
    language: "java",
    content: `@RestController
@RequestMapping("/api/users")
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.findAll());
    }
}`,
    color: "text-orange-400"
  },
  {
    language: "javascript",
    content: `const UserDashboard = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        fetchUsers().then(setUsers);
    }, []);
    
    return (
        <div className="dashboard">
            {users.map(user => (
                <UserCard key={user.id} user={user} />
            ))}
        </div>
    );
};`,
    color: "text-yellow-400"
  },
  {
    language: "sql",
    content: `SELECT u.id, u.name, u.email,
       COUNT(p.id) as project_count
FROM users u
LEFT JOIN projects p ON u.id = p.user_id
WHERE u.status = 'ACTIVE'
GROUP BY u.id, u.name, u.email
ORDER BY project_count DESC;`,
    color: "text-blue-400"
  }
];

export default function CodeAnimation() {
  const [activeSnippet, setActiveSnippet] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveSnippet(prev => (prev + 1) % codeSnippets.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Terminal Window */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="bg-slate-900/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden"
        style={{ 
          transformStyle: "preserve-3d",
          transform: "perspective(1000px) rotateY(-5deg) rotateX(5deg)"
        }}
      >
        {/* Terminal Header */}
        <div className="bg-slate-800/80 px-6 py-4 border-b border-slate-700/50">
          <div className="flex items-center space-x-3">
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <div className="flex-1 text-center">
              <span className="text-gray-400 text-sm font-mono">
                {codeSnippets[activeSnippet].language.toUpperCase()} Editor
              </span>
            </div>
          </div>
        </div>

        {/* Code Content */}
        <div className="p-6 font-mono text-sm leading-relaxed min-h-[400px] relative overflow-hidden">
          {codeSnippets.map((snippet, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: index === activeSnippet ? 1 : 0,
                y: index === activeSnippet ? 0 : 20,
                display: index === activeSnippet ? 'block' : 'none'
              }}
              transition={{ duration: 0.8 }}
              className="absolute inset-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className={`w-2 h-2 ${snippet.color} rounded-full animate-pulse`}></div>
                <span className={`${snippet.color} text-xs uppercase tracking-wider`}>
                  {snippet.language}
                </span>
              </div>
              
              <pre className="text-gray-300 whitespace-pre-wrap">
                {snippet.content.split('\n').map((line, lineIndex) => (
                  <motion.div
                    key={lineIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index === activeSnippet ? lineIndex * 0.1 : 0, duration: 0.6 }}
                    className="hover:bg-slate-800/30 px-2 py-1 rounded transition-colors duration-200"
                  >
                    <span className="text-gray-600 text-xs mr-4 select-none">
                      {String(lineIndex + 1).padStart(2, '0')}
                    </span>
                    <span className="syntax-highlight">{line}</span>
                  </motion.div>
                ))}
              </pre>
            </motion.div>
          ))}

          {/* Typing Cursor */}
          <motion.div
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="absolute bottom-8 left-6 w-2 h-5 bg-cyan-400"
          />
        </div>
      </motion.div>

      {/* Code Language Tabs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="flex justify-center mt-6 space-x-4"
      >
        {codeSnippets.map((snippet, index) => (
          <button
            key={index}
            onClick={() => setActiveSnippet(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              index === activeSnippet
                ? `${snippet.color} bg-white/10 border border-current`
                : 'text-gray-500 hover:text-gray-300 bg-white/5 hover:bg-white/10'
            }`}
          >
            {snippet.language.toUpperCase()}
          </button>
        ))}
      </motion.div>

      {/* Floating Code Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {['{', '}', '(', ')', ';', '/', '*'].map((char, index) => (
          <motion.div
            key={index}
            className="absolute text-purple-500/20 text-2xl font-mono"
            animate={{
              x: [0, Math.random() * 40 - 20],
              y: [0, Math.random() * -40],
              rotate: [0, Math.random() * 360],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
          >
            {char}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
