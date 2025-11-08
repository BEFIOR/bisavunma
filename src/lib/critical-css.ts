// Critical CSS for above-the-fold content (hero section)
// This CSS will be inlined to prevent render-blocking
// Minimized version to reduce size while covering essential hero styles
export const criticalCSS = `
  :root{--font-poppins:var(--font-poppins),sans-serif;--font-inter:var(--font-inter),system-ui,arial,sans-serif}
  html{background-color:#000}
  body{margin:0;padding:0;font-family:var(--font-inter),system-ui,arial,sans-serif;color:#fff;overflow-x:hidden}
  .font-poppins-bold{font-family:var(--font-poppins),sans-serif;font-weight:700}
  .font-poppins-light{font-family:var(--font-poppins),sans-serif;font-weight:300}
  .font-poppins-medium{font-family:var(--font-poppins),sans-serif;font-weight:500}
  .font-inter-regular{font-family:var(--font-inter),system-ui,arial,sans-serif;font-weight:400}
  .font-inter-medium{font-family:var(--font-inter),system-ui,arial,sans-serif;font-weight:500}
  .min-h-screen{min-height:100vh}
  .flex{display:flex}
  .items-center{align-items:center}
  .justify-center{justify-content:center}
  .bg-gradient-to-br{background-image:linear-gradient(to bottom right,var(--tw-gradient-stops))}
  .from-black{--tw-gradient-from:#000;--tw-gradient-to:rgba(0,0,0,0);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}
  .via-gray-900{--tw-gradient-to:rgba(17,24,39,0);--tw-gradient-stops:var(--tw-gradient-from),rgba(17,24,39,1),var(--tw-gradient-to)}
  .to-black{--tw-gradient-to:#000}
  .text-white{color:#fff}
  .text-gray-300{color:#d1d5db}
  .text-gray-400{color:#9ca3af}
  .text-sky-400{color:#38bdf8}
  .text-center{text-align:center}
  .text-6xl{font-size:3.75rem;line-height:1}
  .text-base{font-size:1rem;line-height:1.5rem}
  .text-sm{font-size:0.875rem;line-height:1.25rem}
  .max-w-7xl{max-width:80rem}
  .max-w-3xl{max-width:48rem}
  .max-w-4xl{max-width:56rem}
  .max-w-5xl{max-width:64rem}
  .mx-auto{margin-left:auto;margin-right:auto}
  .px-6{padding-left:1.5rem;padding-right:1.5rem}
  .px-12{padding-left:3rem;padding-right:3rem}
  .pt-6{padding-top:1.5rem}
  .pt-24{padding-top:6rem}
  .pb-16{padding-bottom:4rem}
  .pb-0{padding-bottom:0}
  .space-y-8>*+*{margin-top:2rem}
  .space-y-10>*+*{margin-top:2.5rem}
  .leading-relaxed{line-height:1.625}
  .tracking-tight{letter-spacing:-0.025em}
  .notranslate{translate:none}
  .overflow-x-hidden{overflow-x:hidden}
  @media (min-width:640px){.sm\\:flex-row{flex-direction:row}.sm\\:w-auto{width:auto}.sm\\:gap-8{gap:2rem}}
  @media (min-width:768px){.md\\:text-7xl{font-size:4.5rem;line-height:1}.md\\:text-2xl{font-size:1.5rem;line-height:2rem}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:max-w-4xl{max-width:56rem}.md\\:pt-36{padding-top:9rem}.md\\:pt-16{padding-top:4rem}.md\\:pb-0{padding-bottom:0}.md\\:space-y-12>*+*{margin-top:3rem}}
  @media (min-width:1024px){.lg\\:text-8xl{font-size:6rem;line-height:1}}
`;

