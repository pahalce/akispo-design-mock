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
