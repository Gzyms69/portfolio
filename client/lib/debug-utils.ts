/**
 * Terminal System Debugger
 * Intercepts console output and global errors for diagnostic dumping.
 */

class SystemDebugger {
  private logs: string[] = [];
  private originalConsole: any = {};

  constructor() {
    this.logs.push(`[SYSTEM_DEBUG_INIT] ${new Date().toISOString()}`);
    this.setupInterception();
  }

  private setupInterception() {
    if (typeof window === 'undefined') return;

    const methods: Array<keyof Console> = ['log', 'error', 'warn', 'info'];
    
    methods.forEach(method => {
      this.originalConsole[method] = console[method];
      console[method] = (...args: any[]) => {
        const message = args.map(arg => 
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        ).join(' ');
        
        this.logs.push(`[${method.toUpperCase()}] ${message}`);
        this.originalConsole[method].apply(console, args);
      };
    });

    // Capture global errors
    window.onerror = (msg, url, line, col, error) => {
      this.logs.push(`[FATAL_ERROR] ${msg} at ${line}:${col} (${url})`);
      return false;
    };

    // Capture unhandled rejections
    window.onunhandledrejection = (event) => {
      this.logs.push(`[PROMISE_REJECTION] ${event.reason}`);
    };
  }

  public getLogs(): string {
    return this.logs.join('\n');
  }

  public dumpToText() {
    const blob = new Blob([this.getLogs()], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `terminal_debug_dump_${Date.now()}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
}

export const debuggerInstance = new SystemDebugger();
