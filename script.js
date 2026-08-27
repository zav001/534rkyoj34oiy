/* DonutClient download configuration.
   Change RELEASE_TAG when you publish a new GitHub release.
   The asset filename must match the JAR uploaded to that release. */
const DOWNLOAD_CONFIG = {
  owner: "zav001",
  repo: "534rkyoj34oiy",
  releaseTag: "T",
  assetName: "DonutClient-1.21.11.jar"
};

const downloadUrl = `https://github.com/${DOWNLOAD_CONFIG.owner}/${DOWNLOAD_CONFIG.repo}/releases/download/${encodeURIComponent(DOWNLOAD_CONFIG.releaseTag)}/${encodeURIComponent(DOWNLOAD_CONFIG.assetName)}`;

document.querySelectorAll("[data-download]").forEach(link => {
  link.href = downloadUrl;
  link.setAttribute("download", DOWNLOAD_CONFIG.assetName);
});

document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => document.querySelector('.menu')?.classList.remove('open'));
});
