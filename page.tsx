import { Github, Twitter, Mail, ExternalLink, Terminal, Lock, ShieldCheck } from "lucide-react"
import { Suspense } from "react"

export default function HackerPortfolio() {
  const writeups = [
    {
      title: "Shadow Realm OSINT",
      date: "2025-12-15",
      category: "OSINT",
      desc: "Deep dive into locating a hidden server using geolocation and digital footprints.",
      tags: ["Geo-location", "Metadata", "Social Engineering"],
    },
    {
      title: "Operation Broken Wing",
      date: "2025-11-20",
      category: "OSINT",
      desc: "Tracing a leak back to an anonymous forum post through blockchain forensics.",
      tags: ["Crypto", "Digital Forensics", "OSINT"],
    },
    {
      title: "Corporate Espionage 101",
      date: "2025-10-05",
      category: "Pentesting",
      desc: "Vulnerability assessment report for a mock financial institution.",
      tags: ["Red Teaming", "Web Security", "Nmap"],
    },
  ]

  return (
    <Suspense fallback={null}>
      <div className="min-h-screen flex flex-col md:flex-row relative">
        <div className="scanline" />

        {/* Sidebar */}
        <aside className="w-full md:w-64 border-b md:border-b-0 md:border-r border-primary/20 p-8 flex flex-col shrink-0">
          <div className="mb-12">
            <h1 className="text-xl font-bold tracking-tighter text-primary animate-pulse">_BIEL_OSINT</h1>
            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-1">Status: Decrypting...</p>
          </div>

          <nav className="flex flex-col gap-6 text-sm">
            {["Home", "OSINT", "Pentesting", "About Me"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-primary transition-colors flex items-center gap-2 group"
              >
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                  {">"}
                </span>{" "}
                {item}
              </a>
            ))}
          </nav>

          <div className="mt-auto pt-12 space-y-4">
            <div className="h-px w-full bg-primary/10" />
            <div className="flex gap-4 opacity-60 hover:opacity-100 transition-opacity">
              <Github className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Twitter className="w-5 h-5 cursor-pointer hover:text-primary" />
              <Mail className="w-5 h-5 cursor-pointer hover:text-primary" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 md:p-16 max-w-5xl">
          <header className="mb-16">
            <div className="flex items-center gap-2 text-primary mb-4">
              <ShieldCheck className="w-5 h-5" />
              <span className="text-xs font-bold tracking-widest uppercase">Verified Access</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight text-balance leading-none">
              OSINT Challenges <span className="text-primary">by Biel</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed text-pretty border-l-2 border-primary/20 pl-6">
              Cybersecurity researcher specializing in digital footprint analysis and offensive security. I translate
              complex data points into actionable intelligence.
            </p>
          </header>

          {/* Terminal Mockup */}
          <div className="mb-16 border border-primary/20 bg-card/30 rounded-t-lg overflow-hidden">
            <div className="bg-primary/10 px-4 py-2 flex items-center gap-2 border-b border-primary/20">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
              </div>
              <span className="text-[10px] text-muted-foreground font-mono ml-2">biel@osint: ~/challenges</span>
            </div>
            <div className="p-6 font-mono text-xs space-y-2">
              <p className="text-primary">
                <span className="text-muted-foreground">$</span> whoami
              </p>
              <p className="text-foreground mb-4">{">"} Biel. OSINT Specialist. CTF Player. Security Researcher.</p>
              <p className="text-primary">
                <span className="text-muted-foreground">$</span> ls -la ./writeups
              </p>
              <p className="text-foreground opacity-70">
                total 42
                <br />
                drwxr-xr-x 2 biel users 4096 Dec 30 14:22 .<br />
                -rw-r--r-- 1 biel users 8192 Dec 15 09:11 shadow_realm.md
                <br />
                -rw-r--r-- 1 biel users 4096 Nov 20 11:05 broken_wing.md
              </p>
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">$</span>
                <span className="w-2 h-4 bg-primary animate-pulse" />
              </div>
            </div>
          </div>

          {/* Challenge Section */}
          <section id="osint">
            <div className="flex items-center justify-between mb-8 border-b border-primary/10 pb-4">
              <h3 className="text-sm uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                <Terminal className="w-4 h-4" /> Available Intel
              </h3>
              <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                <Lock className="w-3 h-3" /> Encrypted Logs
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-primary/10 border border-primary/10 overflow-hidden">
              {writeups.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-background p-8 hover:bg-card/50 transition-all group relative border border-primary/5"
                >
                  <div className="flex justify-between items-start mb-6">
                    <span className="text-[10px] text-primary bg-primary/10 px-3 py-1 font-bold border border-primary/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] text-muted-foreground font-mono">{item.date}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors tracking-tight">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-8 leading-relaxed">{item.desc}</p>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-muted-foreground/60 hover:text-primary transition-colors cursor-default"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full py-3 border border-primary/20 text-[10px] uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all">
                    Initiate Extraction <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Terminal Info Footer */}
          <footer className="mt-24 border-t border-primary/10 pt-8 text-[10px] text-muted-foreground uppercase flex flex-wrap gap-x-12 gap-y-4 font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Connection: Stable
            </div>
            <div>Auth_Level: Root</div>
            <div>Uptime: 231:42:09</div>
            <div className="ml-auto opacity-30">© {new Date().getFullYear()} BIEL.OSINT // BY_ORDER_OF_THE_WATCH</div>
          </footer>
        </main>
      </div>
    </Suspense>
  )
}
