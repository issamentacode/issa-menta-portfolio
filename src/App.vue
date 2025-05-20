<template>
  <div class="min-h-screen bg-gray-50 text-gray-800 font-sans">
    <!-- Header / Introduction -->
    <section class="bg-gradient-to-br from-slate-800 to-gray-900 text-white py-14" >
  <div class="container mx-auto px-4 ">
    <!-- Photo centrée -->
    <div class="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-blue-500 mb-4 bg-size-[auto_100px]" data-aos="zoom-in">
      <img
      class="h-96 w-48 object-contain ..." src="/src/assets/profile.jpg"
        alt="Photo de profil"
      />
    </div>


    <!-- Résumé rapide -->
    <h1 class="text-3xl md:text-4xl font-bold">Issa MENTA</h1>
    <p class="text-lg mt-2">Étudiant MSc Cybersecurity Manager</p>
    <p class="text-sm text-gray-300 mt-1" data-aos="zoom-in">Actuellement à la recherche d’un stage en cybersécurité</p>

    <!-- Infos de contact -->
    <div class="mt-4 text-sm text-gray-300 flex flex-wrap justify-center gap-6">
      <span>📧 issamono62@gmail.com</span>
      <span>📱 +33 7 73 29 49 31</span>
      <a href="https://www.linkedin.com/in/issa-menta" target="_blank" class="hover:underline">💼 LinkedIn</a>
      <a href="https://github.com/issamentacode" target="_blank" class="hover:underline">💻 GitHub</a>
    </div>

    <div class="mt-6">
  <a
    href="/Cv_1p_issa-a1.pdf"
    download
    class="inline-block bg-accent hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300"
  >
    📄 Télécharger mon CV
  </a>
</div>

  </div>
</section>


    <!-- Section: À propos -->
    <section class="py-12 px-4 md:px-16 bg-white" data-aos="fade-up">
      <div class="max-w-4xl mx-auto bg-gray-100 rounded-2xl p-6 shadow-md">
        <h2 class="text-2xl font-semibold text-blue-800 mb-4">À propos de moi</h2>
        <p class="text-gray-700 leading-relaxed">
          Étudiant en MSc Cybersécurité à ECE Paris, spécialisé en pentesting (Nmap, Metasploit), sécurité réseau (pfSense, Snort) et gestion de projets IT. Compétences en DevOps (Docker, Git) et machine learning (Python). Je recherche un stage de 3 à 6 mois pour appliquer mes compétences techniques et managériales.
        </p>
      </div>
    </section>

    <!-- Section: Compétences Techniques -->
    <section class="section-style bg-gradient-to-br from-white to-slate-100" data-aos="fade-up">
      <div class="section-content-left">
        <h2 class="section-title">Compétences Techniques</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Pentesting : Nmap, Metasploit, Wireshark, Snort</li>
          <li>Sécurité Réseau : pfSense, OpenVPN, TCP/IP, NAT</li>
          <li>Gouvernance IT : ISO 27001, GDPR, gestion des risques</li>
          <li>Développement sécurisé : HTML, CSS, JavaScript, PHP, Django, Laravel</li>
          <li>DevOps : Docker, Jenkins, CI/CD, GitHub Actions</li>
          <li>IA appliquée : CNN, classification, Python, TensorFlow, Scikit-learn</li>
        </ul>
      </div>
    </section>

    <!-- Section: Compétences Managériales -->
    <section class="section-style bg-white" data-aos="fade-up">
      <div class="section-content-right">
        <h2 class="section-title">Compétences Managériales</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Gestion de projet : Gantt, planification agile, SCRUM</li>
          <li>Leadership : communication, écoute active, DESC</li>
          <li>Travail d’équipe, organisation, gestion de conflits</li>
        </ul>
      </div>
    </section>

    <!-- Section: Expériences Pratiques -->
    <section class="section-style bg-gradient-to-br from-slate-50 to-gray-100" data-aos="fade-up">
      <div class="section-content-left">
        <h2 class="section-title">Expériences Pratiques</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>PfSense : VPN, firewall, DNS filtering</li>
          <li>Snort : règles IDS personnalisées, analyse trafic</li>
          <li>Wireshark : capture + détection d’attaques réseau</li>
        </ul>
      </div>
    </section>

    <!-- Section: Certifications -->
    <section class="section-style bg-white" data-aos="fade-up" >
      <div class="section-content-right">
        <h2 class="section-title">Certifications</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
        <li><a class="text-blue-600 hover:underline" href="https://drive.google.com/drive/folders/1dBWpZaQrxlu4-AaMitSsfAUHCzdHlzdJ">HTML, CSS, and Javascript - Coursera (2025)</a></li>
        <li><a class="text-blue-600 hover:underline" href="https://drive.google.com/drive/folders/1dBWpZaQrxlu4-AaMitSsfAUHCzdHlzdJ">Introduction to DevOps - Coursera (2024)</a></li>
        <li><a class="text-blue-600 hover:underline" href="https://drive.google.com/drive/folders/1dBWpZaQrxlu4-AaMitSsfAUHCzdHlzdJ">CEH Fundamentals - Coursera (2025)</a></li>
        <li><a class="text-blue-600 hover:underline" href="https://drive.google.com/drive/folders/1dBWpZaQrxlu4-AaMitSsfAUHCzdHlzdJ">IBM Cybersecurity Analyst - IBM (2023)</a></li>
        <li><a class="text-blue-600 hover:underline" href="https://drive.google.com/drive/folders/1dBWpZaQrxlu4-AaMitSsfAUHCzdHlzdJ">Python for Data Science - DataScientest (450h)</a></li>
        <li>CompTIA Security+ (En préparation)</li>
        <li>Microsoft Azure AI Fundamentals (AI-900) (En préparation)</li>
        <li>IBM Data Science (En préparation)</li>
        </ul>
      </div>
    </section>

    <!-- Section: Expérience Pro -->
    <section class="section-style bg-slate-50" data-aos="fade-up">
      <div class="section-content-left">
        <h2 class="section-title">Expérience Professionnelle</h2>
        <p class="text-gray-700"><strong>Technicien Réseaux – AGETIC, Mali</strong> (Août–Sept 2023)</p>
        <ul class="list-disc list-inside ml-4 mt-2 text-gray-700">
          <li>Maintenance réseau</li>
          <li>Gestion composants électroniques</li>
        </ul>
      </div>
    </section>

    <!-- Section: Formations -->
    <section class="section-style bg-white" data-aos="fade-up">
      <div class="section-content-right">
        <h2 class="section-title">Formation</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>MSc Cybersécurité – ECE Paris (France)</li>
          <li>Master Réseaux & Sécurité – Algérie</li>
          <li>Licence Informatique – Algérie</li>
        </ul>
      </div>
    </section>

    <!-- Section: Projets -->
    <section class="section-style bg-slate-50" data-aos="fade-up">
      <div class="section-content-left">
        <h2 class="section-title">Projets Académiques</h2>
        <ul class="list-disc list-inside space-y-2 text-gray-700">
          <li>Reconnaissance veineuse avec Deep Learning</li>
          <li>Application de gestion de soutenances</li>
        </ul>
      </div>
    </section>

    <!-- Section: Langues & Soft Skills -->
    <section class="section-style bg-white" data-aos="fade-up">
      <div class="section-content-right">
        <h2 class="section-title">Langues</h2>
        <p class="text-gray-700">Français (natif), Anglais (TOEFL 63), Bambara</p>
        <h2 class="section-title mt-6">Soft Skills</h2>
        <p class="text-gray-700">Leadership, autonomie, rigueur, curiosité</p>
      </div>
    </section>
  </div>
</template>

<script setup>
// Aucun import nécessaire ici
</script>

<style scoped>
.section-style {
  @apply py-12 px-4 md:px-16;
}
.section-content-left {
  @apply max-w-4xl mx-auto md:flex md:flex-row;
}
.section-content-left > * {
  @apply md:w-2/3;
}
.section-content-right {
  @apply max-w-4xl mx-auto md:flex md:flex-row-reverse;
}
.section-content-right > * {
  @apply md:w-2/3;
}
.section-title {
  @apply text-2xl font-semibold text-blue-800 mb-4;
}
</style>
