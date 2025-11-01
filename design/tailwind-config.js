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
        destructive: {
          DEFAULT: 'var(--color-destructive)',
        },
        // Background Colors
        'background-light': 'var(--color-background-light)',
        'background-dark': 'var(--color-background-dark)',
        // Card Colors
        'card-light': 'var(--color-card-light)',
        'card-dark': 'var(--color-card-dark)',
        // Text Colors
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)',
        // Congestion Colors
        'congestion-low': 'var(--color-congestion-low)',
        'congestion-medium': 'var(--color-congestion-medium)',
        'congestion-high': 'var(--color-congestion-high)',
        // Chip Colors
        'chip-positive': 'var(--color-chip-positive)',
        'chip-negative': 'var(--color-chip-negative)',
      },
      
      /* フォントファミリー */
      fontFamily: {
        sans: ['Noto Sans JP', 'sans-serif'],
        serif: ['Noto Serif', 'serif'],
      },
      
      /* レイアウトサイズ */
      height: {
        'header': 'var(--header-height)',
        'icon-button': 'var(--icon-button-size)',
      },
      width: {
        'icon-button': 'var(--icon-button-size)',
      },
    },
  },
};
