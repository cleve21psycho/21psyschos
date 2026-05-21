type Theme = "light" | "red" | "neon";

class ThemeStore {
  theme = $state<Theme>("light");

  constructor() {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme") as Theme | null;
      this.theme = stored || "light";
      this.applyTheme();
    }
  }

  toggle() {
    if (this.theme === "light") {
      this.theme = "red";
    } else if (this.theme === "red") {
      this.theme = "neon";
    } else {
      this.theme = "light";
    }
    this.applyTheme();
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", this.theme);
    }
  }

  setTheme(theme: Theme) {
    this.theme = theme;
    this.applyTheme();
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", this.theme);
    }
  }

  private applyTheme() {
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("light", "red", "neon");
      document.documentElement.classList.add(this.theme);
    }
  }


}

export const themeStore = new ThemeStore();
