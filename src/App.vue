<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    <!-- Navigation Sticky pour Accès Rapide aux Sections -->
    <nav class="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-md z-40 shadow-lg">
      <div class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" class="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Issa MENTA</a>
        <div class="flex gap-6">
          <a href="#about" class="text-gray-300 hover:text-cyan-400 transition">À propos</a>
          <a href="#skills" class="text-gray-300 hover:text-cyan-400 transition">Compétences</a>
          <a href="#projects" class="text-gray-300 hover:text-cyan-400 transition">Projets</a>
          <a href="#experience" class="text-gray-300 hover:text-cyan-400 transition">Expérience</a>
          <a href="#certifications" class="text-gray-300 hover:text-cyan-400 transition">Certifications</a>
          <a href="#contact" class="text-gray-300 hover:text-cyan-400 transition">Contact</a>
        </div>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-cyan-900/20"></div>
      <div class="absolute inset-0">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div class="relative z-10 text-center px-6" data-aos="fade-up">
            <div class="flex flex-col items-center">
            <img 
              :src="profilePic" 
              alt="Issa MENTA"
              class="w-32 h-32 rounded-full mx-auto border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/25"
            />
          </div>
        <h1 class="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          Issa MENTA
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-2">
          Cybersecurity Specialist & AI Developer
        </p>
        <p class="text-lg text-gray-400 mb-8">
          MSc Cybersécurité • Expert Pentesting & Machine Learning
        </p>
        
        <div class="flex flex-wrap justify-center gap-4 mb-8">
          <a href="mailto:issamono62@gmail.com" class="flex items-center bg-gray-800/50 backdrop-blur px-4 py-2 rounded-full hover:bg-gray-700/50 transition" aria-label="Envoyer un email">
            📧 issamono62@gmail.com
          </a>
          <a href="tel:+33773294931" class="flex items-center bg-gray-800/50 backdrop-blur px-4 py-2 rounded-full hover:bg-gray-700/50 transition" aria-label="Appeler">
            📞 +33 7 73 29 49 31
          </a>
          <div class="flex items-center bg-gray-800/50 backdrop-blur px-4 py-2 rounded-full">
            📍 Paris, France
          </div>
        </div>
        
        <div class="flex justify-center gap-4 mb-12">
          <a href="https://linkedin.com/in/issa-menta" target="_blank" class="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition" aria-label="LinkedIn">
            💼
          </a>
          <a href="https://github.com/issamentacode" target="_blank" class="bg-gray-700 hover:bg-gray-600 p-3 rounded-full transition" aria-label="GitHub">
            💻
          </a>
        </div>
        
        <a 
          href="/CV_Issa_Menta.pdf" 
          download
          class="inline-flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition transform hover:scale-105"
          aria-label="Télécharger le CV"
        >
          📄 Télécharger mon CV
        </a>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="py-20 px-6" data-aos="fade-up">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">À propos de moi</h2>
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              Étudiant passionné en MSc Cybersécurité à ECE Paris, je me spécialise dans le pentesting, 
              la sécurité réseau et l'intelligence artificielle appliquée à la cybersécurité. Mon expertise 
              couvre les technologies modernes de sécurité informatique, l'analyse de malwares et le 
              développement de solutions de détection d'intrusion.
            </p>
            <p class="text-gray-300 text-lg leading-relaxed mb-6">
              Avec une solide expérience en machine learning et une approche pratique de la sécurité 
              informatique, je recherche activement un stage pour appliquer mes compétences techniques 
              dans la détection d'anomalies, l'analyse comportementale et la réponse aux incidents.
            </p>
            <div class="grid grid-cols-2 gap-4 text-center">
              <div class="bg-gray-800/50 p-4 rounded-lg">
                <div class="text-2xl font-bold text-cyan-400">8+</div>
                <div class="text-sm text-gray-400">Projets Techniques</div>
              </div>
              <div class="bg-gray-800/50 p-4 rounded-lg">
                <div class="text-2xl font-bold text-cyan-400">7+</div>
                <div class="text-sm text-gray-400">Certifications</div>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur rounded-2xl p-8">
              <h3 class="text-xl font-semibold mb-4">Domaines d'expertise</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-cyan-400 rounded-full mr-3"></div>
                  <span>Cybersécurité & Pentesting</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                  <span>Intelligence Artificielle & ML</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                  <span>Développement Full-Stack</span>
                </div>
                <div class="flex items-center">
                  <div class="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                  <span>DevOps & Systèmes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="py-20 px-6 bg-gray-900/50" data-aos="fade-up">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Compétences Techniques</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <!-- Cybersécurité -->
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
            <div class="flex items-center mb-4">
              <div class="w-6 h-6 bg-cyan-400 rounded mr-3 flex items-center justify-center">🛡️</div>
              <h3 class="text-xl font-semibold">Cybersécurité</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in cybersecuritySkills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-xs text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-cyan-600 to-cyan-400 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ skill.tools }}</p>
              </div>
            </div>
          </div>

          <!-- Intelligence Artificielle -->
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
            <div class="flex items-center mb-4">
              <div class="w-6 h-6 bg-purple-400 rounded mr-3 flex items-center justify-center">🧠</div>
              <h3 class="text-xl font-semibold">Intelligence Artificielle</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in aiSkills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-xs text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ skill.tools }}</p>
              </div>
            </div>
          </div>

          <!-- Développement -->
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300" data-aos="fade-up" data-aos-delay="300">
            <div class="flex items-center mb-4">
              <div class="w-6 h-6 bg-blue-400 rounded mr-3 flex items-center justify-center">💻</div>
              <h3 class="text-xl font-semibold">Développement</h3>
            </div>
            <div class="space-y-4">
              <div v-for="skill in developmentSkills" :key="skill.name">
                <div class="flex justify-between mb-2">
                  <span class="text-sm font-medium">{{ skill.name }}</span>
                  <span class="text-xs text-gray-400">{{ skill.level }}%</span>
                </div>
                <div class="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    class="bg-gradient-to-r from-blue-600 to-blue-400 h-2 rounded-full transition-all duration-1000"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
                <p class="text-xs text-gray-500 mt-1">{{ skill.tools }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-6" data-aos="fade-up">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Projets & Réalisations</h2>
        
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="filter in filters"
            :key="filter.key"
            @click="activeFilter = filter.key"
            :class="[
              'flex items-center px-6 py-3 rounded-full transition',
              activeFilter === filter.key 
                ? 'bg-cyan-600 text-white' 
                : 'bg-gray-800/50 hover:bg-gray-700/50'
            ]"
            aria-label="Filtrer par {{ filter.label }}"
          >
            {{ filter.icon }} {{ filter.label }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(project, idx) in filteredProjects" 
            :key="project.id"
            class="bg-gray-800/50 backdrop-blur rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
            :data-aos="'fade-up'"
            :data-aos-delay="idx * 100"
            @click="selectedProject = project"
          >
            <div class="relative group">
              <div class="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-4xl">
                {{ project.emoji }}
              </div>
              <div class="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div class="text-2xl">👁️</div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
              <p class="text-gray-300 text-sm mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span 
                  v-for="tech in project.tech.slice(0, 3)" 
                  :key="tech"
                  class="bg-gray-700 text-xs px-2 py-1 rounded"
                >
                  {{ tech }}
                </span>
                <span v-if="project.tech.length > 3" class="bg-gray-700 text-xs px-2 py-1 rounded">
                  +{{ project.tech.length - 3 }}
                </span>
              </div>
              <div class="flex gap-2">
                <a 
                  v-if="project.demo && project.demo !== '#'"
                  :href="project.demo" 
                  target="_blank" 
                  @click.stop
                  class="flex items-center bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded text-sm hover:bg-cyan-600/30 transition"
                  aria-label="Démo du projet {{ project.title }}"
                >
                  🔗 Demo
                </a>
                <a 
                  v-if="project.github && project.github !== '#'"
                  :href="project.github" 
                  target="_blank" 
                  @click.stop
                  class="flex items-center bg-gray-700/50 text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-600/50 transition"
                  aria-label="Code du projet {{ project.title }}"
                >
                  💻 Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 px-6 bg-gray-900/50" data-aos="fade-up">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Expérience & Formation</h2>
        <div class="space-y-8">
          <div 
            v-for="(exp, idx) in experiences" 
            :key="idx"
            class="bg-gray-800/50 backdrop-blur rounded-xl p-8 border-l-4 border-cyan-400"
            :data-aos="'fade-right'"
            :data-aos-delay="idx * 100"
          >
            <div class="flex flex-wrap justify-between items-start mb-4">
              <div>
                <h3 class="text-xl font-semibold">{{ exp.title }}</h3>
                <p class="text-cyan-400 font-medium">{{ exp.company }}</p>
              </div>
              <span class="bg-gray-700 px-3 py-1 rounded-full text-sm">{{ exp.period }}</span>
            </div>
            <p class="text-gray-300 mb-4">{{ exp.description }}</p>
            <div class="grid md:grid-cols-2 gap-2">
              <div 
                v-for="(task, taskIdx) in exp.tasks" 
                :key="taskIdx"
                class="flex items-center text-sm text-gray-400"
              >
                <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                {{ task }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications Section -->
    <section id="certifications" class="py-20 px-6" data-aos="fade-up">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold text-center mb-16">Certifications & Reconnaissance</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="(cert, idx) in certifications" 
            :key="idx"
            class="bg-gray-800/50 backdrop-blur rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all"
            :data-aos="'fade-up'"
            :data-aos-delay="idx * 50"
          >
            <div class="flex items-start justify-between mb-3">
              <div :class="cert.verified ? 'text-green-400' : 'text-yellow-400'" class="text-2xl">
                {{ cert.verified ? '🏆' : '📚' }}
              </div>
              <span class="text-xs bg-gray-700 px-2 py-1 rounded">{{ cert.year }}</span>
            </div>
            <h3 class="font-semibold mb-2">{{ cert.name }}</h3>
            <p class="text-sm text-gray-400">{{ cert.org }}</p>
            <div :class="cert.verified 
              ? 'bg-green-500/20 text-green-300' 
              : 'bg-yellow-500/20 text-yellow-300'"
              class="mt-3 text-xs px-2 py-1 rounded-full inline-block"
            >
              {{ cert.verified ? 'Certifié' : 'En cours' }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 px-6 bg-gray-900/50" data-aos="fade-up">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">Contactez-moi</h2>
        <p class="text-xl text-gray-300 mb-12">
          Recherche active de stage en cybersécurité • Disponible immédiatement
        </p>
        
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <div class="text-4xl mb-4">📧</div>
            <h3 class="font-semibold mb-2">Email</h3>
            <a href="mailto:issamono62@gmail.com" class="text-gray-300 hover:text-cyan-400 transition" aria-label="Email">
              issamono62@gmail.com
            </a>
          </div>
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <div class="text-4xl mb-4">📞</div>
            <h3 class="font-semibold mb-2">Téléphone</h3>
            <a href="tel:+33773294931" class="text-gray-300 hover:text-cyan-400 transition" aria-label="Téléphone">
              +33 7 73 29 49 31
            </a>
          </div>
          <div class="bg-gray-800/50 backdrop-blur rounded-xl p-6">
            <div class="text-4xl mb-4">📍</div>
            <h3 class="font-semibold mb-2">Localisation</h3>
            <p class="text-gray-300">Paris, France</p>
          </div>
        </div>
        
        <div class="flex justify-center gap-6">
          <a 
            href="https://linkedin.com/in/issa-menta" 
            target="_blank"
            class="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-full transition transform hover:scale-105"
            aria-label="LinkedIn"
          >
            💼 LinkedIn
          </a>
          <a 
            href="https://github.com/issamentacode" 
            target="_blank"
            class="flex items-center bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-full transition transform hover:scale-105"
            aria-label="GitHub"
          >
            💻 GitHub
          </a>
          <a 
            href="/CV_Issa_Menta.pdf" 
            download
            class="flex items-center bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 px-6 py-3 rounded-full transition transform hover:scale-105"
            aria-label="Télécharger CV"
          >
            📄 Télécharger CV
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 px-6 border-t border-gray-800">
      <div class="max-w-6xl mx-auto text-center">
        <p class="text-gray-400">
          © 2025 Issa MENTA. Conçu avec passion pour la cybersécurité et l'innovation.
        </p>
      </div>
    </footer>

    <!-- Project Modal -->
    <transition name="modal">
      <div v-if="selectedProject" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" @click="selectedProject = null">
        <div class="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto transform transition-all" @click.stop>
          <div class="relative">
            <button 
              @click="selectedProject = null"
              class="absolute top-4 right-4 z-10 bg-gray-800 hover:bg-gray-700 rounded-full p-2 text-white transition"
              aria-label="Fermer"
            >
              ✕
            </button>
            <div class="w-full h-64 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-8xl rounded-t-2xl">
              {{ selectedProject.emoji }}
            </div>
            <div class="p-6">
              <h3 class="text-2xl font-bold mb-2">{{ selectedProject.title }}</h3>
              <p class="text-gray-300 mb-4">{{ selectedProject.longDescription }}</p>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 class="font-semibold mb-2">Technologies utilisées</h4>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span 
                      v-for="tech in selectedProject.tech" 
                      :key="tech"
                      class="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-sm"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>
                
                <div v-if="selectedProject.features">
                  <h4 class="font-semibold mb-2">Fonctionnalités clés</h4>
                  <ul class="text-sm text-gray-300 space-y-1">
                    <li 
                      v-for="(feature, idx) in selectedProject.features" 
                      :key="idx"
                      class="flex items-center"
                    >
                      <div class="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                      {{ feature }}
                    </li>
                  </ul>
                </div>
              </div>
              
              <div class="flex gap-3 mt-6">
                <a 
                  v-if="selectedProject.demo && selectedProject.demo !== '#'"
                  :href="selectedProject.demo" 
                  target="_blank"
                  class="flex items-center bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg transition"
                  aria-label="Voir le projet {{ selectedProject.title }}"
                >
                  🔗 Voir le projet
                </a>
                <a 
                  v-if="selectedProject.github && selectedProject.github !== '#'"
                  :href="selectedProject.github" 
                  target="_blank"
                  class="flex items-center bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition"
                  aria-label="Code source du projet {{ selectedProject.title }}"
                >
                  💻 Code source
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import AOS from 'aos' // Import AOS pour les animations
import 'aos/dist/aos.css' // CSS AOS

import profilePic from './assets/profile.jpg' // <-- utiliser un chemin relatif correct


// Données réactives
const activeFilter = ref('all')
const selectedProject = ref(null)
const imageLoading = ref(true) // Loading pour l'image
const imageError = ref(false) // Erreur si image non trouvée

// Skills data (inchangé)
const cybersecuritySkills = ref([
  { name: "Pentesting", level: 90, tools: "Nmap, Metasploit, Burp Suite" },
  { name: "Network Security", level: 85, tools: "pfSense, Wireshark, Snort" },
  { name: "Malware Analysis", level: 80, tools: "IDA Pro, Ghidra, Volatility" },
  { name: "Incident Response", level: 88, tools: "SIEM, Forensics Tools" }
])

const aiSkills = ref([
  { name: "Machine Learning", level: 95, tools: "Python, Scikit-learn, TensorFlow" },
  { name: "Deep Learning", level: 85, tools: "CNN, Neural Networks, Keras" },
  { name: "Data Analysis", level: 90, tools: "Pandas, NumPy, Matplotlib" },
  { name: "AI Security", level: 82, tools: "Adversarial ML, Model Defense" }
])

const developmentSkills = ref([
  { name: "Web Development", level: 88, tools: "Vue.js, React, Node.js" },
  { name: "Backend", level: 85, tools: "Django, Laravel, FastAPI" },
  { name: "DevOps", level: 80, tools: "Docker, Jenkins, CI/CD" },
  { name: "Databases", level: 82, tools: "SQL, MongoDB, PostgreSQL" }
])

// Projects data (complet, inchangé)
const projects = ref([
  {
    id: 1,
    title: "ATP-Consulting",
    description: "Site de service en stratégie d'innovation et transformation digitale, spécialisé Industrie 4.0.",
    longDescription: "Plateforme complète pour une entreprise de consulting spécialisée dans l'innovation industrielle et la transformation digitale. Interface moderne avec système de réservation et présentation des services.",
    tech: ["Vue.js", "Node.js", "Docker", "MongoDB"],
    category: "web",
    emoji: "🏢",
    demo: "https://atpanconsulting.com",
    github: "#",
    features: ["Design responsive", "Système de réservation", "Interface admin", "SEO optimisé"]
  },
  {
    id: 2,
    title: "Elegance Technique",
    description: "Atelier de réparation auto à Yaoundé avec système de prise de rendez-vous.",
    longDescription: "Application web pour un garage automobile avec système complet de gestion des rendez-vous, suivi des réparations et interface client intuitive.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    category: "web",
    emoji: "🚗",
    demo: "https://elegance-technique.com",
    github: "#",
    features: ["Gestion RDV", "Suivi réparations", "Notifications", "Paiement en ligne"]
  },
  {
    id: 3,
    title: "LocalHost Digital",
    description: "Agence Web & Digitale basée à Douala, spécialisée en solutions digitales.",
    longDescription: "Site vitrine moderne pour une agence digitale avec portfolio interactif, présentation des services et système de contact avancé.",
    tech: ["Vue.js", "Tailwind CSS", "Nuxt.js"],
    category: "web",
    emoji: "💻",
    demo: "https://localhost-digital.com",
    github: "#",
    features: ["Portfolio interactif", "Animations CSS", "Multi-langues", "CMS intégré"]
  },
  {
    id: 4,
    title: "Sand Beauty Shop",
    description: "Boutique en ligne de produits de beauté professionnels, shopping et wishlist.",
    longDescription: "E-commerce complet pour produits de beauté avec panier avancé, wishlist, système de paiement sécurisé et interface d'administration.",
    tech: ["Nuxt.js", "Stripe", "Vue.js", "PostgreSQL"],
    category: "ecommerce",
    emoji: "💄",
    demo: "https://sand-beauty.com",
    github: "#",
    features: ["E-commerce", "Paiement Stripe", "Wishlist", "Gestion stock"]
  },
  {
    id: 5,
    title: "TW Micronics",
    description: "Solutions IA et transformation digitale pour entreprises en Afrique.",
    longDescription: "Plateforme technologique offrant des solutions d'intelligence artificielle et de transformation digitale adaptées aux entreprises africaines.",
    tech: ["React", "TypeScript", "AI/ML", "Python"],
    category: "ai",
    emoji: "🤖",
    demo: "https://twmicronics.com",
    github: "#",
    features: ["Solutions IA", "Dashboard analytics", "API REST", "Machine Learning"]
  },
  {
    id: 6,
    title: "DeepChatter AI Security Analysis",
    description: "Analyse de sécurité d'une plateforme d'IA compromise par pollution de données.",
    longDescription: "Projet académique d'analyse approfondie des vulnérabilités d'une plateforme IA utilisée dans les secteurs critiques (santé, finance). Étude complète des vecteurs d'attaque, stratégies défensives et plan de remédiation suite à une compromission par pollution de données malveillantes.",
    tech: ["Cybersecurity Analysis", "Risk Assessment", "MITRE ATT&CK", "Incident Response"],
    category: "security",
    emoji: "🛡️",
    demo: "#",
    github: "#",
    features: ["Évaluation des risques", "Profilage d'acteurs malveillants", "Plan d'intervention", "Conformité RGPD/HIPAA"]
  },
  {
    id: 7,
    title: "Spam Detection ML Models",
    description: "Modèles d'apprentissage automatique pour la détection de spam avec 98% de précision.",
    longDescription: "Développement et comparaison de plusieurs algorithmes de machine learning (Random Forest, AdaBoost, Gradient Boosting) pour la classification de messages spam/ham. Optimisation des performances avec vectorisation TF-IDF et validation croisée.",
    tech: ["Python", "Scikit-learn", "TF-IDF", "Random Forest", "Gradient Boosting"],
    category: "ai",
    emoji: "🔍",
    demo: "#",
    github: "#",
    features: ["Précision 98%", "Vectorisation TF-IDF", "Comparaison d'algorithmes", "Validation croisée"]
  },
  {
    id: 8,
    title: "Cybersecurity Traffic Analysis",
    description: "Analyse et classification du trafic réseau pour détecter les attaques DDoS avec 99.9% de précision.",
    longDescription: "Système de détection d'intrusion utilisant le machine learning pour analyser les flux réseau en temps réel. Classification des attaques DDoS avec des modèles de gradient boosting sur dataset CICIDS2017, atteignant une précision exceptionnelle de 99.97%.",
    tech: ["Python", "Gradient Boosting", "Network Analysis", "CICIDS2017", "Pandas"],
    category: "security",
    emoji: "🌐",
    demo: "#",
    github: "#",
    features: ["Précision 99.97%", "Détection temps réel", "Analyse flux réseau", "Classification DDoS"]
  },
  {
    id: 9,
    title: "Healthcare Information Systems Analysis",
    description: "Analyse des systèmes d'information fantômes dans un établissement de santé.",
    longDescription: "Étude approfondie des problématiques d'intégration des systèmes d'information dans le secteur hospitalier. Analyse des systèmes 'fantômes' utilisés par les professionnels de santé, évaluation des risques de sécurité et recommandations de gouvernance IT.",
    tech: ["IT Governance", "Risk Analysis", "Healthcare IT", "GDPR Compliance"],
    category: "security",
    emoji: "🏥",
    demo: "#",
    github: "#",
    features: ["Analyse des risques", "Conformité RGPD", "Gouvernance IT", "Sécurité des données"]
  },
  {
    id: 10,
    title: "Snort IDS Configuration & Rules",
    description: "Déploiement et configuration avancée de Snort avec création de règles personnalisées de détection d'intrusion.",
    longDescription: "Mise en place complète d'un système de détection d'intrusion Snort avec création de règles sur mesure pour détecter différents types d'attaques : scan de ports, attaques DoS, connexions suspectes et tentatives d'intrusion. Utilisation de Scapy et hping3 pour la simulation d'attaques et validation des règles.",
    tech: ["Snort IDS", "Network Security", "Scapy", "hping3", "Rule Writing"],
    category: "security",
    emoji: "🔍",
    demo: "#",
    github: "#",
    features: ["Détection pings anormaux", "Détection SYN Flood", "Règles connexions Telnet", "Détection trafic HTTPS suspect"]
  },
  {
    id: 11,
    title: "pfSense Firewall Advanced Config",
    description: "Configuration complète de pfSense avec règles de pare-feu avancées et politique de sécurité réseau.",
    longDescription: "Déploiement et configuration avancée de pfSense sur VMware avec mise en place de règles de filtrage complexes, configuration NAT, VPN OpenVPN avec certificats SSL/TLS, et implémentation de politiques de sécurité réseau granulaires pour un environnement d'entreprise.",
    tech: ["pfSense", "OpenVPN", "SSL/TLS", "NAT Configuration", "Firewall Rules"],
    category: "security",
    emoji: "🛡️",
    demo: "#",
    github: "#",
    features: ["Configuration NAT", "Règles pare-feu", "VPN SSL/TLS", "Filtrage par domaine"]
  },
  {
    id: 12,
    title: "OpenSSL Cryptography Lab",
    description: "Laboratoire complet de cryptographie avec OpenSSL : chiffrement symétrique, asymétrique et signatures numériques.",
    longDescription: "Implémentation pratique des techniques cryptographiques modernes sous Linux avec OpenSSL. Maîtrise du chiffrement symétrique AES-256, cryptographie asymétrique RSA, signatures numériques, gestion de certificats X.509 et création d'autorités de certification pour infrastructures PKI.",
    tech: ["OpenSSL", "AES-256", "RSA", "X.509 Certificates", "PKI", "Digital Signatures"],
    category: "security",
    emoji: "🔐",
    demo: "#",
    github: "#",
    features: ["Chiffrement AES-256", "Clés RSA 4096-bit", "Signatures numériques", "Certificats X.509"]
  }
])

// Filters (inchangé)
const filters = ref([
  { key: 'all', label: 'Tous', icon: '🌐' },
  { key: 'web', label: 'Web', icon: '💻' },
  { key: 'ecommerce', label: 'E-commerce', icon: '🛒' },
  { key: 'security', label: 'Sécurité', icon: '🛡️' },
  { key: 'ai', label: 'IA', icon: '🤖' }
])

// Experience data (inchangé)
const experiences = ref([
  {
    title: "MSc Manager Cybersécurité",
    company: "ECE Paris",
    period: "2024 - 2026",
    description: "Formation spécialisée en management de la cybersécurité, pentesting et gouvernance IT",
    tasks: ["Pentesting avancé", "Gestion des risques", "Analyse forensique", "Management d'équipes cyber"]
  },
  {
    title: "Master Réseaux & Sécurité",
    company: "Université Djillali Liabès, Algérie",
    period: "2023 - 2025",
    description: "Spécialisation en sécurité des réseaux informatiques et systèmes d'information",
    tasks: ["Sécurité réseau", "Cryptographie", "Systèmes distribués", "Projets de recherche"]
  },
  {
    title: "Technicien Réseaux",
    company: "AGETIC, Mali",
    period: "Août - Sept 2021",
    description: "Maintenance réseau et optimisation des infrastructures IT",
    tasks: ["Maintenance réseau", "Gestion matériel", "Support technique", "Optimisation performance"]
  },
  {
    title: "Licence Systèmes d'Information",
    company: "Université Djillali Liabès",
    period: "2019 - 2023",
    description: "Formation fondamentale en informatique et systèmes d'information",
    tasks: ["Développement logiciel", "Base de données", "Réseaux informatiques", "Gestion de projets"]
  }
])

// Certifications (inchangé)
const certifications = ref([
  { name: "CEH Fundamentals", org: "EC-Council", year: "2025", verified: true },
  { name: "IBM Cybersecurity Analyst", org: "IBM", year: "2023", verified: true },
  { name: "HTML/CSS/JS for Web Dev", org: "Coursera", year: "2025", verified: true },
  { name: "Introduction to DevOps", org: "Coursera", year: "2024", verified: true },
  { name: "Python for Data Science", org: "DataScientest", year: "2024", verified: true },
  { name: "CompTIA Security+", org: "CompTIA", year: "En cours", verified: false },
  { name: "Azure AI Fundamentals", org: "Microsoft", year: "En cours", verified: false },
  { name: "IBM Data Science", org: "IBM", year: "En cours", verified: false }
])

// Computed properties
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects.value
  }
  return projects.value.filter(p => p.category === activeFilter.value)
})

// Initialisation AOS pour les animations
onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  })
})


</script>





<style scoped>
/* Transition pour le modal */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-active .bg-gray-900,
.modal-leave-active .bg-gray-900 {
  transition: transform 0.3s ease;
}
.modal-enter-from .bg-gray-900,
.modal-leave-to .bg-gray-900 {
  transform: scale(0.95);
}
</style>