import { motion } from 'framer-motion'

export function Interface() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 text-white"
      >
        <h1 className="text-6xl font-bold mb-4">Mehul Chaudhari</h1>
        <p className="text-xl text-zinc-400">Full Stack Developer</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.75 }}
        className="absolute bottom-8 left-8 text-white max-w-md"
      >
        <p className="text-zinc-400 mb-6">
          Passionate about creating elegant solutions to complex problems. 
          Experienced in modern web technologies and cloud architecture.
        </p>
        <div className="flex gap-6">
          <a 
            href="#contact" 
            className="bg-white text-zinc-900 px-4 py-2 rounded-md font-medium pointer-events-auto hover:bg-zinc-100 transition"
          >
            Contact Me
          </a>
          <a 
            href="#projects" 
            className="border border-white px-4 py-2 rounded-md font-medium pointer-events-auto hover:bg-white hover:text-zinc-900 transition"
          >
            View Projects
          </a>
        </div>
      </motion.div>
    </div>
  )
} 