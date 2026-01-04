import React, { useState, useEffect } from 'react';
import { 
  Activity, Shield, Zap, Search, Globe, ChevronRight, 
  BarChart3, CheckCircle2, AlertTriangle, XCircle, 
  Smartphone, Monitor, Code2, Database, Server, 
  Layout, DollarSign, TrendingUp, Download, Share2, 
  Moon, Sun, Loader2, ArrowRight, ArrowLeft, Menu, X, Copy,
  Lock, Eye, FileText, Layers, Mail, CheckIcon,
  Briefcase, Target, Wand2, FileJson, ExternalLink,
  Accessibility, Trash2, Printer, Terminal,
  ChevronDown, ChevronUp
} from 'lucide-react';

// --- UI Components (Simulating shadcn/ui) ---

const Button = ({ children, variant = 'primary', size = 'default', className = '', onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-sm",
    secondary: "bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50",
    outline: "border border-slate-200 bg-transparent hover:bg-slate-100 dark:border-slate-800 dark:text-slate-400 dark:hover:bg-slate-800",
    ghost: "hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",
    link: "text-primary underline-offset-4 hover:underline",
    destructive: "bg-red-500 text-white hover:bg-red-600",
  };
  const sizes = {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9",
  };
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.default} ${className}`} 
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

const Card = ({ children, className = '' }) => (
  <div className={`rounded-xl border border-slate-200 bg-white text-slate-950 shadow dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }) => <div className={`flex flex-col space-y-1.5 p-6 ${className}`}>{children}</div>;
const CardTitle = ({ children, className = '' }) => <h3 className={`font-semibold leading-none tracking-tight ${className}`}>{children}</h3>;
const CardDescription = ({ children, className = '' }) => <p className={`text-sm text-slate-500 dark:text-slate-400 ${className}`}>{children}</p>;
const CardContent = ({ children, className = '' }) => <div className={`p-6 pt-0 ${className}`}>{children}</div>;

const Badge = ({ children, variant = 'default', className = '' }) => {
  const base = "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  const variants = {
    default: "border-transparent bg-blue-600 text-white shadow hover:bg-blue-700",
    secondary: "border-transparent bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-50",
    outline: "text-slate-950 dark:text-slate-50",
    destructive: "border-transparent bg-red-500 text-white shadow hover:bg-red-600",
    success: "border-transparent bg-emerald-500 text-white shadow hover:bg-emerald-600",
  };
  return <div className={`${base} ${variants[variant] || variants.default} ${className}`}>{children}</div>;
};

const Progress = ({ value, className = '' }) => (
  <div className={`relative h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800 ${className}`}>
    <div className="h-full w-full flex-1 bg-blue-600 transition-all duration-500 ease-in-out" style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </div>
);

// --- Context-based Tabs Implementation ---
const TabsContext = React.createContext({ activeValue: '', onTabChange: () => {} });

const Tabs = ({ value, onValueChange, children, className = '' }) => {
  return (
    <TabsContext.Provider value={{ activeValue: value, onTabChange: onValueChange }}>
      <div className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = '' }) => (
  <div className={`inline-flex h-9 items-center justify-center rounded-lg bg-slate-100 p-1 text-slate-500 dark:bg-slate-800 dark:text-slate-400 ${className}`}>
    {children}
  </div>
);

const TabsTrigger = ({ value, children, className = '' }) => {
  const { activeValue, onTabChange } = React.useContext(TabsContext);
  const isActive = activeValue === value;
  return (
    <button
      onClick={() => onTabChange(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${isActive ? 'bg-white text-slate-950 shadow dark:bg-slate-950 dark:text-slate-50' : 'hover:bg-white/50 dark:hover:bg-slate-900/50'} ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, className = '' }) => {
  const { activeValue } = React.useContext(TabsContext);
  if (value !== activeValue) return null;
  return <div className={`mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${className}`}>{children}</div>;
};

// Simple Dialog Implementation
const Dialog = ({ isOpen, onClose, title, description, children, maxWidth = 'max-w-lg' }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 animate-in fade-in duration-200 backdrop-blur-sm">
      <div className={`relative w-full ${maxWidth} rounded-xl border border-slate-200 bg-white p-6 shadow-lg dark:border-slate-800 dark:bg-slate-950 animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto`}>
        <div className="flex flex-col space-y-1.5 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold leading-none tracking-tight text-slate-900 dark:text-slate-50">{title}</h2>
          {description && <p className="text-sm text-slate-500 dark:text-slate-400">{description}</p>}
        </div>
        {children}
        <button onClick={onClose} className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
};

// --- Toast Notification System (New Feature) ---
const ToastContext = React.createContext({ addToast: () => {} });

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2">
        {toasts.map((toast) => (
          <div key={toast.id} className={`flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-white text-sm font-medium animate-in slide-in-from-right-full ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-slate-900 dark:bg-slate-700'}`}>
            {toast.type === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <Monitor className="h-4 w-4" />}
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

const useToast = () => React.useContext(ToastContext);


// --- Mock Data Generator (Enhanced) ---

const generateMockData = (url) => {
  const seed = url.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const rand = (offset = 0) => {
    const x = Math.sin(seed + offset) * 10000;
    return x - Math.floor(x);
  };
  
  const scorePerf = Math.floor(rand(1) * 40) + 55;
  const scoreSeo = Math.floor(rand(2) * 30) + 65;
  const scoreSec = Math.floor(rand(3) * 20) + 75;
  const scoreAcc = Math.floor(rand(4) * 30) + 60;

  return {
    id: Math.random().toString(36).substr(2, 9), // Added ID for history
    url,
    timestamp: new Date().toISOString(),
    scores: {
      overall: Math.round((scorePerf + scoreSeo + scoreSec + scoreAcc) / 4),
      performance: scorePerf,
      seo: scoreSeo,
      security: scoreSec,
      accessibility: scoreAcc
    },
    metrics: {
      fcp: (rand(12) * 2.0 + 0.5).toFixed(1) + 's',
      lcp: (rand(13) * 3.5 + 1.2).toFixed(1) + 's',
      cls: (rand(14) * 0.15).toFixed(3),
      ttfb: Math.floor(rand(15) * 150 + 20) + 'ms',
      interaction: Math.floor(rand(16) * 300 + 50) + 'ms'
    },
    techStack: [
      { name: 'Next.js', version: '14.1.0', status: 'Optimal', category: 'Frontend', detected: rand(5) > 0.3 },
      { name: 'React', version: '18.2.0', status: 'Optimal', category: 'Frontend', detected: true },
      { name: 'Tailwind CSS', version: '3.4.1', status: 'Optimal', category: 'CSS', detected: rand(6) > 0.4 },
      { name: 'Node.js', version: '20.11.0', status: 'Current', category: 'Backend', detected: rand(7) > 0.5 },
      { name: 'Google Analytics 4', version: 'Latest', status: 'Optimal', category: 'Analytics', detected: true },
      { name: 'Vercel', version: 'Edge', status: 'Optimal', category: 'Hosting', detected: rand(8) > 0.4 },
      { name: 'Hotjar', version: 'v2', status: 'Optimal', category: 'Analytics', detected: rand(9) > 0.6 },
    ].filter(t => t.detected),
    issues: [
      { id: 'P0', title: 'Serve images in next-gen formats', category: 'Performance', impact: 'High', effort: 'Moderate', desc: 'Image formats like WebP and AVIF often provide better compression than PNG or JPEG.', saving: '1.4s load time', steps: ['Configure image CDN', 'Use <picture> element', 'Convert static assets'], codeSnippet: '<img src="image.webp" type="image/webp" />' },
      { id: 'P1', title: 'Eliminate render-blocking resources', category: 'Performance', impact: 'High', effort: 'Moderate', desc: 'Resources are blocking the first paint of your page.', saving: '0.8s load time', steps: ['Defer non-critical JS', 'Inline critical CSS', 'Preload key requests'], codeSnippet: '<script src="script.js"></script>' },
      { id: 'P2', title: 'Missing Meta Descriptions', category: 'SEO', impact: 'Medium', effort: 'Low', desc: '14 pages are missing meta descriptions, affecting CTR.', saving: '+15% Organic CTR', steps: ['Add unique descriptions', 'Use 150-160 chars', 'Include target keywords'], codeSnippet: '<meta name="description" content="Your description here">' },
      { id: 'P2', title: 'Security Headers Missing', category: 'Security', impact: 'Medium', effort: 'Low', desc: 'HSTS and CSP headers not detected.', saving: 'Security Compliance', steps: ['Enable HSTS', 'Define CSP policy', 'Set X-Frame-Options'], codeSnippet: 'Header always set Strict-Transport-Security "max-age=31536000"' },
      { id: 'P3', title: 'Insufficient Color Contrast', category: 'Accessibility', impact: 'Medium', effort: 'Low', desc: 'Text elements do not meet WCAG AA standards.', saving: 'ADA Compliance', steps: ['Adjust text colors', 'Increase font weight', 'Check background opacity'], codeSnippet: '.text { color: #595959; } /* WCAG AA Compliant */' }
    ].filter((_, i) => rand(20 + i) > 0.4),
    cookies: [
      { name: '_ga', type: 'Analytics', secure: true },
      { name: 'session_id', type: 'Auth', secure: true },
      { name: 'preference_data', type: 'Functional', secure: false },
    ],
    business: {
      potentialUplift: Math.floor(rand(30) * 30) + 10 + '%',
      lostRevenue: '$' + (Math.floor(rand(31) * 8000) + 1200).toLocaleString() + '/mo',
      marketPosition: rand(32) > 0.5 ? 'Top 30%' : 'Top 50%'
    }
  };
};

// --- View Components ---

const LandingView = ({ url, setUrl, onAnalyze, history, onLoadHistory, onDeleteHistory }) => (
  <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors">
    {/* Background Decor */}
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[100px]" />
      <div className="absolute top-[40%] left-[40%] w-[20%] h-[20%] bg-emerald-500/5 rounded-full blur-[80px]" />
    </div>

    <div className="w-full max-w-4xl px-6 text-center z-10">
      <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 text-sm font-medium mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <Zap className="w-4 h-4 mr-2" />
        AI-Powered Website Auditor 3.0
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700 delay-100">
        Turn your website into a <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          revenue machine.
        </span>
      </h1>
      
      <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
        Instantly analyze performance, SEO, security, and accessibility. Get actionable insights to close more deals and improve conversions.
      </p>

      <form onSubmit={onAnalyze} className="relative max-w-xl mx-auto mb-12 group animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative flex bg-white dark:bg-slate-900 rounded-xl p-2 shadow-xl ring-1 ring-slate-200 dark:ring-slate-800">
          <div className="flex items-center pl-4 text-slate-400">
            <Globe className="w-5 h-5" />
          </div>
          <input 
            type="url" 
            placeholder="https://example.com"
            className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-lg px-4 text-slate-900 dark:text-white placeholder:text-slate-400"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button 
            type="submit"
            className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 border-0"
          >
            Analyze Site
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </form>

      {/* Recent Scans History (New Feature) */}
      {history.length > 0 && (
        <div className="max-w-2xl mx-auto mb-16 animate-in fade-in duration-700 delay-500">
          <div className="flex items-center justify-between mb-4">
             <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Recent Audits</h3>
             <button onClick={onDeleteHistory} className="text-xs text-red-500 hover:underline flex items-center"><Trash2 className="w-3 h-3 mr-1"/> Clear History</button>
          </div>
          <div className="grid grid-cols-1 gap-3">
             {history.slice(0, 3).map((scan, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 transition-colors cursor-pointer group" onClick={() => onLoadHistory(scan)}>
                   <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${scan.scores.overall > 80 ? 'bg-emerald-500' : scan.scores.overall > 50 ? 'bg-amber-500' : 'bg-red-500'}`} />
                      <span className="font-medium text-slate-700 dark:text-slate-300">{scan.url}</span>
                   </div>
                   <div className="flex items-center gap-4">
                      <span className="text-sm text-slate-400">{new Date(scan.timestamp).toLocaleDateString()}</span>
                      <div className="flex items-center">
                         <span className="font-bold text-slate-900 dark:text-white mr-1">{scan.scores.overall}</span>
                         <span className="text-xs text-slate-400">/100</span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500" />
                   </div>
                </div>
             ))}
          </div>
        </div>
      )}

      {/* Trust Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left animate-in fade-in duration-1000 delay-500">
        {[
          { icon: Search, title: "Deep SEO Analysis", desc: "Identify technical SEO issues blocking your rankings." },
          { icon: Zap, title: "Core Web Vitals", desc: "Measure real-world user experience and speed metrics." },
          { icon: TrendingUp, title: "Revenue Projection", desc: "Estimate lost revenue due to poor performance." }
        ].map((feature, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 hover:border-blue-500/30 transition-all hover:bg-white dark:hover:bg-slate-900">
            <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
              <feature.icon className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AnalysisProgress = ({ url, onComplete }) => {
  const steps = [
    { id: 1, label: "Crawling website structure...", icon: Globe },
    { id: 2, label: "Detecting technologies...", icon: Code2 },
    { id: 3, label: "Running performance tests...", icon: Zap },
    { id: 4, label: "Analyzing SEO factors...", icon: Search },
    { id: 5, label: "Checking security protocols...", icon: Shield },
    { id: 6, label: "Generating recommendations...", icon: Loader2 },
  ];

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalDuration = 4000; // Speed up slightly for better UX
    const interval = 50;
    const stepIncrement = 100 / (totalDuration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + stepIncrement;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        
        const stepIndex = Math.floor((next / 100) * steps.length);
        if (stepIndex < steps.length) {
          setCurrentStep(stepIndex);
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 p-6">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-10">
        <div className="text-center space-y-4">
          <div className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-50 dark:bg-blue-900/20 mb-2 ring-4 ring-blue-50 dark:ring-blue-900/10">
            <Loader2 className="h-10 w-10 text-blue-600 dark:text-blue-400 animate-spin" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Analyzing Website</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Gathering data for <span className="text-slate-900 dark:text-white font-medium">{url}</span>
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between text-sm font-medium">
            <span className="text-blue-600 dark:text-blue-400">{steps[currentStep].label}</span>
            <span className="text-slate-600 dark:text-slate-400">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-3" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isCompleted = index < currentStep;
            const isActive = index === currentStep;

            return (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-4 rounded-xl border transition-all duration-300 ${
                  isActive
                    ? "border-blue-500/50 bg-blue-50 dark:bg-blue-900/10 shadow-sm scale-[1.02]"
                    : isCompleted
                      ? "border-emerald-500/20 bg-emerald-50 dark:bg-emerald-900/5"
                      : "border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 opacity-60"
                }`}
              >
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${
                    isCompleted
                      ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400"
                      : isActive
                        ? "bg-blue-100 text-blue-600 dark:bg-blue-500/20 dark:text-blue-400"
                        : "bg-slate-200 text-slate-500 dark:bg-slate-800 dark:text-slate-500"
                  }`}
                >
                  {isCompleted ? <CheckCircle2 className="h-5 w-5" /> : <Icon className={`h-5 w-5 ${isActive ? "animate-pulse" : ""}`} />}
                </div>
                <span className={`text-sm font-medium ${isCompleted ? "text-emerald-700 dark:text-emerald-400" : isActive ? "text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-500"}`}>
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const AuditResults = ({ report, onReset }) => {
  const [activeTab, setActiveTab] = useState("overview");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState(null); // New state for modal
  const { addToast } = useToast();

  const handleCopyLink = () => {
    // navigator.clipboard.writeText(...) in real app
    addToast("Link copied to clipboard!", "success");
    setIsShareOpen(false);
  };

  const handleDownload = (format) => {
    setIsExportOpen(false);
    if (format === 'PDF') {
      window.print(); // Triggers print dialog which is used for PDF
    } else {
      addToast(`${format} report download started`, "info");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20 print:bg-white print:p-0">
      {/* Header */}
      <div className="sticky top-0 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-4 print:static print:border-none">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={onReset}
              className="-ml-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white print:hidden"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to home
            </Button>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Audit Report</h1>
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-800">
                {report.url}
              </Badge>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Generated on {new Date(report.timestamp).toLocaleDateString()} at {new Date(report.timestamp).toLocaleTimeString()}
            </p>
          </div>

          <div className="flex items-center gap-3 print:hidden">
            <Button variant="outline" onClick={() => setIsExportOpen(true)}>
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button variant="primary" onClick={() => setIsShareOpen(true)} className="bg-gradient-to-r from-blue-600 to-purple-600 border-0">
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl px-4 py-8 space-y-8 animate-in fade-in duration-700">
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 print:hidden">
            <TabsList className="w-auto inline-flex h-auto p-1 bg-white border border-slate-200 rounded-xl dark:bg-slate-900 dark:border-slate-800">
              {[
                { id: "overview", label: "Overview", icon: Layout },
                { id: "technical", label: "Technical Audit", icon: BarChart3 },
                { id: "seo", label: "SEO & Access", icon: Search },
                { id: "security", label: "Security", icon: Shield },
                { id: "business", label: "Business Intel", icon: Briefcase }
              ].map(tab => (
                <TabsTrigger 
                  key={tab.id} 
                  value={tab.id}
                  className="rounded-lg py-2.5 px-4 md:px-6 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md transition-all"
                >
                  <tab.icon className="mr-2 h-4 w-4" />
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value="overview" className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Score Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: "Overall Score", value: report.scores.overall, color: "text-emerald-500", icon: Layout },
                { label: "Performance", value: report.scores.performance, color: "text-amber-500", icon: Zap },
                { label: "SEO Score", value: report.scores.seo, color: "text-emerald-500", icon: Search },
                { label: "Accessibility", value: report.scores.accessibility, color: "text-emerald-500", icon: Accessibility },
              ].map((stat, i) => (
                <Card key={i} className="overflow-hidden border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <stat.icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />
                      </div>
                      <Badge variant={stat.value > 80 ? "secondary" : "outline"} className={stat.value > 80 ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400"}>
                        {stat.value > 80 ? "Good" : "Needs Work"}
                      </Badge>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                      <p className={`text-4xl font-bold tracking-tight ${stat.color}`}>{stat.value}</p>
                    </div>
                    <div className="mt-4 h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full ${stat.color.replace("text", "bg")} transition-all duration-1000`} style={{ width: `${stat.value}%` }} />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Findings & Tech Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2 border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Core Findings</CardTitle>
                  <CardDescription>Top critical issues discovered during analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {report.issues.slice(0, 3).map((issue, i) => (
                    <div 
                      key={i} 
                      onClick={() => setSelectedIssue(issue)}
                      className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100 dark:bg-slate-900 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-all group"
                    >
                      <div className={`mt-1 h-2 w-2 rounded-full shrink-0 ${issue.impact === "High" ? "bg-red-500" : "bg-amber-500"}`} />
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{issue.title}</h4>
                          <Badge variant="outline" className="text-[10px] h-5 border-slate-200 text-slate-500 dark:border-slate-700">
                            {issue.category}
                          </Badge>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{issue.desc}</p>
                      </div>
                      <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 opacity-0 group-hover:opacity-100 transition-all" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-slate-200 dark:border-slate-800">
                <CardHeader>
                  <CardTitle>Technology Stack</CardTitle>
                  <CardDescription>Detected platform & tools</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {['Frontend', 'Analytics', 'Hosting'].map(cat => (
                      <div key={cat}>
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">{cat}</h4>
                        <div className="flex flex-wrap gap-2">
                          {report.techStack.filter(t => t.category === cat).map((t, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
                              {t.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                    <Button variant="ghost" className="w-full mt-4 text-xs font-medium" onClick={() => setActiveTab("technical")}>
                      View full stack detail
                      <ExternalLink className="ml-2 h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="technical" className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            {/* Detailed Tech & Performance */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               <Card>
                 <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">First Contentful Paint</CardTitle></CardHeader>
                 <CardContent>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-bold text-emerald-500">{report.metrics.fcp}</span>
                     <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-600 border-emerald-200">Fast</Badge>
                   </div>
                   <p className="text-xs text-slate-500 mt-2">Time to render first DOM content.</p>
                 </CardContent>
               </Card>
               <Card>
                 <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Largest Contentful Paint</CardTitle></CardHeader>
                 <CardContent>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-bold text-amber-500">{report.metrics.lcp}</span>
                     <Badge variant="outline" className="text-[10px] bg-amber-50 text-amber-600 border-amber-200">Needs Work</Badge>
                   </div>
                   <p className="text-xs text-slate-500 mt-2">Time to render largest block.</p>
                 </CardContent>
               </Card>
               <Card>
                 <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-slate-500">Total Blocking Time</CardTitle></CardHeader>
                 <CardContent>
                   <div className="flex items-baseline gap-2">
                     <span className="text-3xl font-bold text-emerald-500">{report.metrics.interaction}</span>
                     <Badge variant="outline" className="text-[10px] bg-emerald-50 text-emerald-600 border-emerald-200">Good</Badge>
                   </div>
                   <p className="text-xs text-slate-500 mt-2">Main thread blocking time.</p>
                 </CardContent>
               </Card>
             </div>

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
               <Card>
                 <CardHeader><CardTitle>Detailed Stack</CardTitle></CardHeader>
                 <CardContent className="space-y-4">
                   {report.techStack.map((tech, i) => (
                     <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                       <div className="flex items-center gap-3">
                         <Code2 className="h-5 w-5 text-slate-400" />
                         <div>
                           <p className="font-medium text-sm text-slate-900 dark:text-white">{tech.name}</p>
                           <p className="text-xs text-slate-500">{tech.category}</p>
                         </div>
                       </div>
                       <Badge variant="outline">{tech.version}</Badge>
                     </div>
                   ))}
                 </CardContent>
               </Card>
               <Card>
                  <CardHeader><CardTitle>Performance Issues</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {report.issues.filter(i => i.category === 'Performance').map((issue, i) => (
                      <div key={i} className="p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-semibold text-sm text-slate-900 dark:text-white">{issue.title}</h4>
                          <Badge variant="secondary" className="text-[10px]">High Impact</Badge>
                        </div>
                        <p className="text-xs text-slate-500">{issue.desc}</p>
                      </div>
                    ))}
                  </CardContent>
               </Card>
             </div>
          </TabsContent>

          {/* Business Intelligence Tab */}
          <TabsContent value="business" className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-slate-950 border-emerald-100 dark:border-emerald-900/30">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Conversion Potential</CardTitle></CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">{report.business.potentialUplift}</span>
                  <p className="text-xs text-slate-500 mt-2">Estimated increase by fixing critical UX issues.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-slate-950 border-blue-100 dark:border-blue-900/30">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-blue-600 dark:text-blue-400">Revenue Opportunity</CardTitle></CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold text-blue-600 dark:text-blue-400">{report.business.lostRevenue}</span>
                  <p className="text-xs text-slate-500 mt-2">Potential revenue loss due to slow load times.</p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-purple-50 to-white dark:from-purple-950/20 dark:to-slate-950 border-purple-100 dark:border-purple-900/30">
                <CardHeader className="pb-2"><CardTitle className="text-sm font-medium text-purple-600 dark:text-purple-400">Market Position</CardTitle></CardHeader>
                <CardContent>
                  <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">{report.business.marketPosition}</span>
                  <p className="text-xs text-slate-500 mt-2">Relative to competitors in your sector.</p>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="h-5 w-5 text-blue-600" />
                  AI-Powered Action Plan
                </CardTitle>
                <CardDescription>Prioritized recommendations for maximum business impact. Click any item for code fixes.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {report.issues.map((rec, i) => (
                  <div 
                    key={i} 
                    onClick={() => setSelectedIssue(rec)}
                    className="group relative rounded-xl border border-slate-200 dark:border-slate-800 p-6 hover:border-blue-500/30 transition-all bg-slate-50/50 dark:bg-slate-900/50 cursor-pointer"
                  >
                    <div className="absolute -top-3 left-6">
                      <Badge className={`${rec.id === "P0" ? "bg-red-500" : rec.id === "P1" ? "bg-amber-500" : "bg-blue-500"} text-white border-none shadow-sm`}>
                        Priority {rec.id}
                      </Badge>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pt-2">
                      <div className="space-y-3 flex-1">
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">{rec.title}</h4>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{rec.desc}</p>
                        
                        <div className="bg-white dark:bg-slate-950 rounded-lg p-3 border border-slate-100 dark:border-slate-800 pointer-events-none">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Implementation Steps</p>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {rec.steps.map((step, j) => (
                              <li key={j} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                                <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="flex flex-row md:flex-col gap-3 min-w-[140px]">
                        <div className="flex-1 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-center">
                          <p className="text-[10px] text-slate-400 uppercase">Impact</p>
                          <p className="text-sm font-bold text-emerald-500">{rec.impact}</p>
                        </div>
                        <div className="flex-1 p-3 rounded-xl bg-white dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-center">
                          <p className="text-[10px] text-slate-400 uppercase">Effort</p>
                          <p className="text-sm font-bold text-amber-500">{rec.effort}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Placeholders for Security/SEO to maintain tabs structure */}
          <TabsContent value="seo" className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader><CardTitle>SEO Checks</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        {[
                            { label: "Title Tag", status: "Pass", desc: "Found and optimal length." },
                            { label: "Meta Description", status: "Fail", desc: "Missing on homepage." },
                            { label: "H1 Header", status: "Pass", desc: "One unique H1 found." },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                {item.status === 'Pass' ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                                <div>
                                    <p className="text-sm font-medium">{item.label}</p>
                                    <p className="text-xs text-slate-500">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle>Accessibility</CardTitle></CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <span>Contrast Ratio</span>
                            <Badge variant="outline" className="text-emerald-600 bg-emerald-50 border-emerald-200">AA Passed</Badge>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-slate-50 dark:bg-slate-900 rounded-lg">
                            <span>ARIA Labels</span>
                            <Badge variant="outline" className="text-amber-600 bg-amber-50 border-amber-200">92% Coverage</Badge>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </TabsContent>
          <TabsContent value="security" className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
             <Card>
                 <CardHeader><CardTitle>Security Headers</CardTitle></CardHeader>
                 <CardContent>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         {report.cookies.map((c, i) => (
                             <div key={i} className="flex justify-between p-3 border rounded-lg dark:border-slate-800">
                                 <div>
                                     <p className="font-mono text-sm">{c.name}</p>
                                     <p className="text-xs text-slate-500">{c.type}</p>
                                 </div>
                                 <Badge variant={c.secure ? 'secondary' : 'destructive'} className="h-6">{c.secure ? 'Secure' : 'Insecure'}</Badge>
                             </div>
                         ))}
                     </div>
                 </CardContent>
             </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Export Dialog */}
      <Dialog 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
        title="Export Report"
        description={`Choose your preferred format for the audit report for ${report.url}`}
      >
        <div className="grid grid-cols-2 gap-4 py-4">
          {[
            { id: 'PDF', icon: FileText, color: 'text-blue-600' },
            { id: 'JSON', icon: FileJson, color: 'text-purple-600' },
            { id: 'CSV', icon: BarChart3, color: 'text-emerald-600' },
            { id: 'HTML', icon: Layout, color: 'text-amber-600' }
          ].map(opt => (
            <button 
              key={opt.id}
              onClick={() => handleDownload(opt.id)}
              className="flex flex-col items-center justify-center p-4 gap-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors group"
            >
              <opt.icon className={`h-8 w-8 ${opt.color} group-hover:scale-110 transition-transform`} />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{opt.id} Report</span>
            </button>
          ))}
        </div>
      </Dialog>

      {/* Share Dialog */}
      <Dialog
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Share Audit Results"
        description="Share this comprehensive analysis with your client or team."
      >
        <div className="space-y-4 py-4">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <span className="text-xs text-slate-500 flex-1 truncate px-2">
              https://auditflow.app/report/{btoa(report.url).substring(0, 12)}...
            </span>
            <Button size="sm" variant="secondary" className="h-8 bg-white shadow-sm dark:bg-slate-800" onClick={handleCopyLink}>
              <Copy className="mr-2 h-3 w-3" />
              Copy
            </Button>
          </div>
          <Button variant="outline" className="w-full justify-center">
            <Mail className="mr-2 h-4 w-4" />
            Send via Email
          </Button>
        </div>
      </Dialog>

      {/* New Detailed Issue Modal (New Feature) */}
      <Dialog
        isOpen={!!selectedIssue}
        onClose={() => setSelectedIssue(null)}
        title={selectedIssue?.title}
        description={selectedIssue?.desc}
        maxWidth="max-w-2xl"
      >
        {selectedIssue && (
            <div className="space-y-6 pt-2">
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-900/30">
                        <span className="text-xs font-semibold text-red-600 dark:text-red-400 uppercase">Impact</span>
                        <p className="font-medium">{selectedIssue.impact}</p>
                    </div>
                    <div className="p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-900/30">
                        <span className="text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase">Effort</span>
                        <p className="font-medium">{selectedIssue.effort}</p>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-3">How to fix this issue</h4>
                    <div className="bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-800/50">
                            <div className="flex items-center gap-2 text-xs text-slate-500">
                                <Terminal className="w-3 h-3" />
                                <span>Code Solution</span>
                            </div>
                            <button onClick={() => addToast("Code copied!", "info")} className="text-xs text-blue-500 hover:text-blue-600">Copy</button>
                        </div>
                        <pre className="p-4 text-sm font-mono text-slate-700 dark:text-slate-300 overflow-x-auto">
                            {selectedIssue.codeSnippet || "// No code snippet available for this issue."}
                        </pre>
                    </div>
                </div>

                <div>
                    <h4 className="text-sm font-semibold mb-2">Detailed Steps</h4>
                    <ul className="space-y-2">
                        {selectedIssue.steps.map((step, idx) => (
                            <li key={idx} className="flex gap-3 text-sm text-slate-600 dark:text-slate-400">
                                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xs font-bold shrink-0">
                                    {idx + 1}
                                </span>
                                {step}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                    <Button variant="outline" onClick={() => setSelectedIssue(null)}>Close</Button>
                    <Button onClick={() => { addToast("Marked as fixed locally", "success"); setSelectedIssue(null); }}>
                        <CheckCircle2 className="w-4 h-4 mr-2" /> Mark Fixed
                    </Button>
                </div>
            </div>
        )}
      </Dialog>
    </div>
  );
};

// --- Main App ---

export default function SiteAuditPro() {
  const [darkMode, setDarkMode] = useState(false);
  const [view, setView] = useState('landing');
  const [url, setUrl] = useState('');
  const [report, setReport] = useState(null);
  const [history, setHistory] = useState([]);

  // Load persistence logic
  useEffect(() => {
    const saved = localStorage.getItem('audit_history');
    if (saved) {
      setHistory(JSON.parse(saved));
    }

    // Check system preference for dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!url) return;
    setView('analyzing');
  };

  const handleAnalysisComplete = () => {
    const newReport = generateMockData(url);
    setReport(newReport);
    
    // Save to history
    const updatedHistory = [newReport, ...history].slice(0, 10); // Keep last 10
    setHistory(updatedHistory);
    localStorage.setItem('audit_history', JSON.stringify(updatedHistory));
    
    setView('report');
  };

  const handleReset = () => {
    setView('landing');
    setReport(null);
    setUrl('');
  };

  const handleLoadHistory = (oldReport) => {
      setReport(oldReport);
      setView('report');
  };

  const handleDeleteHistory = () => {
      setHistory([]);
      localStorage.removeItem('audit_history');
  }

  return (
    <ToastProvider>
        <div className={`min-h-screen font-sans antialiased text-slate-900 dark:text-slate-50 bg-white dark:bg-slate-950 transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
          {/* Global Nav for Dark Mode Toggle */}
          <nav className="fixed top-0 right-0 z-50 p-4 print:hidden">
             <button 
               onClick={() => setDarkMode(!darkMode)}
               className="p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors"
             >
               {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
             </button>
          </nav>

          {view === 'landing' && (
             <LandingView 
                url={url} 
                setUrl={setUrl} 
                onAnalyze={handleAnalyze} 
                history={history}
                onLoadHistory={handleLoadHistory}
                onDeleteHistory={handleDeleteHistory}
             />
          )}
          {view === 'analyzing' && <AnalysisProgress url={url} onComplete={handleAnalysisComplete} />}
          {view === 'report' && report && <AuditResults report={report} onReset={handleReset} />}
        </div>
    </ToastProvider>
  );
}