export type Language = 'en' | 'pl';

export interface FileSystemItem {
  name: string;
  type: 'file' | 'dir';
  content?: string | string[];
  children?: Record<string, FileSystemItem>;
}

// This is a simplified 'Virtual File System' parser. 
// It mimics how the terminal in Fallout 3/NV works.
export class FalloutTerminalParser {
  private language: Language;
  private currentPath: string[] = []; // Root is []
  
  // Decided to keep the file structure flat-ish for now to avoid 
  // complex recursion in the UI breadcrumbs.
  private fileSystem: Record<string, FileSystemItem> = {
    'projects': {
      name: 'projects',
      type: 'dir',
      children: {
        'bookshop.txt': { name: 'bookshop.txt', type: 'file', content: 'BookShop Library: A full-stack library management system built with FastAPI and React.' },
        'rust_polyglot.txt': { name: 'rust_polyglot.txt', type: 'file', content: 'Rust Polyglot Creator: Low-level CLI tool for binary manipulation.' },
        'portfolio.txt': { name: 'portfolio.txt', type: 'file', content: 'Portfolio Website: This terminal-themed experience.' }
      }
    },
    'about': {
      name: 'about',
      type: 'dir',
      children: {
        'me.txt': { name: 'me.txt', type: 'file', content: 'Dawid Czerwinski: Full-stack developer specialized in high-performance web apps.' },
        'skills.txt': { name: 'skills.txt', type: 'file', content: ['Languages: Python, Rust, TypeScript, C++', 'Tools: React, FastAPI, Docker, SQL'] }
      }
    },
    'system.log': { name: 'system.log', type: 'file', content: 'System initialized on 21.12.2025. All modules nominal.' }
  };

  constructor(language: Language = 'en') {
    this.language = language;
  }

  setLanguage(language: Language): void {
    this.language = language;
  }

  private getCurrentDirObj(): FileSystemItem {
    let current: FileSystemItem = { name: 'root', type: 'dir', children: this.fileSystem };
    for (const part of this.currentPath) {
      if (current.children && current.children[part]) {
        current = current.children[part];
      }
    }
    return current;
  }

  parse(input: string): string | string[] | { type: 'open_file', file: FileSystemItem } {
    const trimmedInput = input.trim();
    if (!trimmedInput) return '';

    const parts = trimmedInput.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const arg = parts[1];

    switch (cmd) {
      case 'help':
      case 'pomoc':
        return this.getHelpText();
      case 'ls':
      case 'dir':
      case 'lista':
        return this.listDirectory();
      case 'cd':
      case 'przejdz':
        return this.changeDirectory(arg);
      case 'cat':
      case 'pokaz':
        return this.readFile(arg);
      case 'about':
      case 'omnie':
        return this.readFile('about/me.txt');
      case 'projects':
      case 'projekty':
        return this.listDirectory('projects');
      case 'clear':
      case 'wyczysc':
        return '';
      case 'exit':
      case 'wyjdz':
        return this.getExitText();
      case 'snake':
      case 'waz':
        return this.getSnakeText();
      default:
        return this.language === 'en' 
          ? `Unknown command: ${cmd}. Type 'help' for assistance.`
          : `Nieznane polecenie: ${cmd}. Wpisz 'pomoc' aby uzyskać pomoc.`;
    }
  }

  private listDirectory(specificDirName?: string): string[] {
    let targetDir: FileSystemItem;
    
    if (specificDirName) {
      if (this.fileSystem[specificDirName] && this.fileSystem[specificDirName].type === 'dir') {
        targetDir = this.fileSystem[specificDirName];
      } else {
        return [this.language === 'en' ? `Directory not found: ${specificDirName}` : `Nie znaleziono katalogu: ${specificDirName}`];
      }
    } else {
      targetDir = this.getCurrentDirObj();
    }

    const items = targetDir.children ? Object.values(targetDir.children) : [];
    if (items.length === 0) return ['[EMPTY_DIRECTORY]'];
    
    return items.map(item => item.type === 'dir' ? `[DIR] ${item.name}/` : `      ${item.name}`);
  }

  private changeDirectory(target?: string): string {
    if (!target || target === '~' || target === '/') {
      this.currentPath = [];
      return 'Returning to root...';
    }
    if (target === '..') {
      if (this.currentPath.length > 0) {
        this.currentPath.pop();
        return `Moved to /${this.currentPath.join('/') || 'root'}`;
      }
      return 'Already at root.';
    }

    const currentDir = this.getCurrentDirObj();
    if (currentDir.children && currentDir.children[target] && currentDir.children[target].type === 'dir') {
      this.currentPath.push(target);
      return `Changed directory to /${this.currentPath.join('/')}`;
    }
    
    return this.language === 'en' ? `Directory not found: ${target}` : `Nie znaleziono katalogu: ${target}`;
  }

  private readFile(filename: string): string | string[] | { type: 'open_file', file: FileSystemItem } {
    if (!filename) return this.language === 'en' ? 'Usage: cat [filename]' : 'Użycie: cat [nazwa_pliku]';

    // Support simple paths like 'about/me.txt'
    if (filename.includes('/')) {
      const parts = filename.split('/');
      let current: FileSystemItem = { name: 'temp', type: 'dir', children: this.fileSystem };
      let found = true;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        if (current.children && current.children[part]) {
          current = current.children[part];
        } else {
          found = false;
          break;
        }
      }
      if (found && current.type === 'file') {
        return { type: 'open_file', file: current };
      }
    } else {
      const currentDir = this.getCurrentDirObj();
      if (currentDir.children && currentDir.children[filename] && currentDir.children[filename].type === 'file') {
        return { type: 'open_file', file: currentDir.children[filename] };
      }
    }

    return this.language === 'en' ? `File not found: ${filename}` : `Nie znaleziono pliku: ${filename}`;
  }

  private getHelpText(): string[] {
    return this.language === 'en' ? [
      'SYSTEM COMMANDS:',
      '- LS / DIR: List files',
      '- CD [dir]: Change directory',
      '- CAT [file]: Read file content',
      '- CLEAR: Wipe screen',
      '- EXIT: Terminate session',
      '- SNAKE: Launch minigame'
    ] : [
      'POLECENIA SYSTEMOWE:',
      '- LS / LISTA: Lista plików',
      '- CD [katalog]: Zmień katalog',
      '- CAT [plik]: Czytaj plik',
      '- WYCZYSC: Czyść ekran',
      '- WYJDZ: Zamknij sesję',
      '- WAZ: Uruchom grę'
    ];
  }

  private getExitText(): string {
    return this.language === 'en' ? 'Closing connection... Goodbye.' : 'Zamykanie połączenia... Do widzenia.';
  }

  private getSnakeText(): string {
    return this.language === 'en' ? 'Launching SNAKE.EXE...' : 'Uruchamianie WAZ.EXE...';
  }
}
