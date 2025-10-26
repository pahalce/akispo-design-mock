/**
 * AkiSpot Tailwind CSS Configuration
 * 全てのページで共通で使用するTailwind設定
 * 
 * 原則:
 * - Tailwindのデフォルトトークンをできるだけ使用
 * - プロジェクト固有の色のみ拡張
 * - spacing, fontSize等はTailwindデフォルトを使用
 * 
 * 使用方法:
 * <script src="tailwind-config.js"></script>
 * を各HTMLファイルの<head>内でTailwind CDNの後に記述してください
 */

tailwind.config = {
  darkMode: 'class',
  theme: {
    extend: {
      /* プロジェクト固有のカラー定義のみ */
      colors: {
        // AkiSpot独自カラー
        primary: {
          DEFAULT: 'var(--color-primary)',
          hover: 'var(--color-primary-hover)',
          active: 'var(--color-primary-active)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          hover: 'var(--color-secondary-hover)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
        },
        
        // 既存コード互換性のための旧変数名（段階的に削除予定）
        background: 'var(--background-light)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
        'card-foreground': 'var(--card-foreground)',
        'primary-foreground': 'var(--primary-foreground)',
        'secondary-foreground': 'var(--secondary-foreground)',
        'accent-foreground': 'var(--accent-foreground)',
        muted: 'var(--muted)',
        'muted-foreground': 'var(--muted-foreground)',
        destructive: 'var(--destructive)',
        'destructive-foreground': 'var(--destructive-foreground)',
        border: 'var(--border)',
        'background-light': 'var(--background-light)',
        'card-light': 'var(--card)',
        'text-light': 'var(--foreground)',
      },
      
      /* フォントファミリー */
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
      
      /* プロジェクト固有の角丸（home.htmlの5xlカード用） */
      borderRadius: {
        '4xl': 'var(--radius)',
        '5xl': 'var(--radius)',
      },
      
      /* プロジェクト固有のシャドウ（カード用） */
      boxShadow: {
        'card': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
      },
      
      /* z-index（プロジェクト固有の階層） */
      zIndex: {
        dropdown: '10',
        sticky: '20',
        overlay: '30',
        modal: '50',
        popover: '60',
        toast: '100',
      },
    },
  },
};

