<template>
    <main class="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen font-sans">
      <div class="max-w-6xl mx-auto px-6 py-12 space-y-24">
        <!-- Intro -->
        <section class="text-center">
          <img src="/profile.jpg" alt="Issa Menta" class="mx-auto w-40 h-40 rounded-full border-4 border-primary shadow-lg mb-4">
          <h1 class="text-4xl md:text-5xl font-bold text-accent">Issa MENTA</h1>
          <p class="text-xl mt-2 text-gray-300">Étudiant MSc Cybersécurité • Passionné par le Pentesting, l’IA et la Sécurité Réseau</p>
          <div class="mt-4 flex justify-center gap-4 text-blue-300 flex-wrap">
            <a href="mailto:issamono62@gmail.com" class="hover:underline">📧 issamono62@gmail.com</a>
            <a href="tel:+33773294931" class="hover:underline">📞 +33 7 73 29 49 31</a>
          </div>
          <div class="mt-2 flex justify-center gap-4 flex-wrap">
            <a href="https://linkedin.com/in/issa-menta" target="_blank" class="text-blue-400 hover:text-blue-500 underline">LinkedIn</a>
            <a href="https://github.com/issamentacode" target="_blank" class="text-blue-400 hover:text-blue-500 underline">GitHub</a>
          </div>
        </section>
  
        <!-- Résumé -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Résumé Professionnel</h2>
          <p class="text-gray-300 leading-relaxed">
            Étudiant motivé en Master Cybersécurité (ECE Paris) avec expertise en pentesting, sécurité réseau, DevOps, machine learning, et développement sécurisé. Recherchant un stage pour appliquer mes compétences techniques et managériales.
          </p>
        </section>
  
        <!-- Compétences Techniques -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Compétences Techniques</h2>
          <ul class="grid md:grid-cols-2 gap-6 text-gray-300">
            <li><strong>Pentesting & Sécurité Réseau:</strong> Metasploit, Nmap, Wireshark, Snort, pfSense</li>
            <li><strong>Développement Sécurisé:</strong> SDLC, SQLi/XSS/CSRF, HTML/CSS/JS, Django, Laravel</li>
            <li><strong>Réseaux & Systèmes:</strong> Linux, Windows Server, VLAN, NAT, VPN</li>
            <li><strong>DevOps:</strong> Docker, CI/CD, Jenkins, GitHub Actions</li>
            <li><strong>Machine Learning:</strong> Python, Scikit-learn, TensorFlow, CNN</li>
            <li><strong>Bases de Données:</strong> SQL, NoSQL (MongoDB)</li>
          </ul>
        </section>
  
        <!-- Compétences Managériales -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Compétences Managériales</h2>
          <ul class="list-disc pl-6 text-gray-300">
            <li>Gestion de projets : coordination, analyse, délais, budgets</li>
            <li>Leadership : résolution de conflits, motivation, DESC</li>
            <li>Gouvernance IT : ISO 27001, GDPR, gestion des risques</li>
          </ul>
        </section>
  
        <!-- Labs / Expériences Pratiques -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Expériences Pratiques (Labs)</h2>
          <ul class="list-disc pl-6 text-gray-300 space-y-2">
            <li>Git : branches, conflits, pull requests</li>
            <li>pfSense : firewalls, VPN OpenVPN, alias IP</li>
            <li>Snort : détection Nmap, SYN flood, SNMP</li>
            <li>Nmap & Wireshark : scans, captures UDP/TCP</li>
            <li>Projet : Gestion de projet IT simulé</li>
            <li>Management : motivation, feedback SMART</li>
          </ul>
        </section>
  
        <!-- Certifications -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Certifications</h2>
          <ul class="space-y-2 text-gray-300">
            <li>✅ CEH Fundamentals (Coursera)</li>
            <li>✅ IBM Cybersecurity Analyst (Coursera)</li>
            <li>✅ HTML/CSS/JS for Web Dev (Coursera)</li>
            <li>✅ Introduction to DevOps (Coursera)</li>
            <li>✅ Python for Data Science – DataScientest</li>
            <li>📚 CompTIA Security+ (en cours)</li>
            <li>📚 Microsoft Azure AI Fundamentals (en cours)</li>
            <li>📚 IBM Data Science (en cours)</li>
          </ul>
        </section>
  
        <!-- Expérience Pro -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Expérience Professionnelle</h2>
          <p class="text-gray-300 font-semibold">Technicien Réseaux – AGETIC, Mali (Août 2023 - Sept 2023)</p>
          <ul class="list-disc pl-6 text-gray-300">
            <li>Maintenance réseau et optimisation</li>
            <li>Gestion de matériel informatique client</li>
          </ul>
        </section>
  
        <!-- Formation -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Formation</h2>
          <ul class="text-gray-300 space-y-2">
            <li><strong>ECE Paris (2024–2026)</strong> — MSc Manager Cybersécurité</li>
            <li><strong>Université Djillali Liabès (2023–2025)</strong> — Master Réseaux & Sécurité</li>
            <li><strong>Université Djillali Liabès (2019–2023)</strong> — Licence Systèmes d’Information</li>
          </ul>
        </section>
  
        <!-- Projets -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Projets Académiques</h2>
          <ul class="text-gray-300 space-y-2">
            <li><strong>Reconnaissance Biométrique :</strong> deep learning CNN vs SVM</li>
            <li><strong>Gestion de Soutenances :</strong> app web étudiants/encadrants</li>
            <li><strong>Lab personnel :</strong> VMWare + Metasploitable, scans & exploits</li>
          </ul>
        </section>
  
        <!-- Langues et Soft Skills -->
        <section>
          <h2 class="text-2xl font-bold text-accent mb-4">Langues & Soft Skills</h2>
          <p class="text-gray-300">
            Langues : Français (natif), Anglais (TOEFL 63), Bambara (natif)<br>
            Soft skills : Leadership, résolution de problèmes, organisation, communication
          </p>
        </section>
      </div>
    </main>
  </template>
  
  <script setup>
  // Rien à ajouter ici pour l’instant
  </script>
  