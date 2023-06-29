import { useEffect } from 'react';

interface ColorMap { [key: string]: string[] }
interface ColorName { [key: string]: string }

const colorValues = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
const colorNames: ColorName = {
  red: 'Red',
  orange: 'Orange',
  amber: 'Amber',
  yellow: 'Yellow',
  lime: 'Lime',
  green: 'Green',
  emerald: 'Emerald',
  teal: 'Teal',
  cyan: 'Cyan',
  sky: 'Sky',
  blue: 'Blue',
  indigo: 'Indigo',
  violet: 'Violet',
  purple: 'Purple',
  magenta: 'Magenta',
  pink: 'Pink',
  rose: 'Rose',
  slate: 'Slate',
  neutral: 'Neutral',
};

const ColorPalette = () => {
  useEffect(() => {
    const buttons = document.querySelectorAll('.color-button');

    const selectColor = (name: string) => {
      const color = colors[name];
      const palettes = document.querySelectorAll('.color-palette-item') as NodeListOf<HTMLElement>;
      const hexes = document.querySelectorAll('.hex-code') as NodeListOf<HTMLElement>;
      const spans = document.querySelectorAll('.num') as NodeListOf<HTMLElement>;
      const colorName = document.querySelector('.color-name');

      palettes.forEach((item, i) => {
        item.style.backgroundColor = color[i];
      });

      hexes.forEach((item, i) => {
        const textcolor = getContrast(color[i]);
        item.innerHTML = color[i];
        item.style.color = textcolor;
      });

      spans.forEach((item, i) => {
        const textcolor = getContrast(color[i]);
        item.style.color = textcolor;
      });

      if (colorName !== null) {
        colorName.innerHTML = colorNames[name];
      }

    };

    const getContrast = (color: string) => {
      if (color.slice(0, 1) === '#') {
        color = color.slice(1);
      }

      const r = parseInt(color.substring(0, 2), 16);
      const b = parseInt(color.substring(2, 2), 16);
      const g = parseInt(color.substring(4, 2), 16);

      const yiq = (r * 299 + g * 587 + b * 114) / 1000;
      return yiq >= 128 ? 'black' : 'white';
    };

    const activeColor = (el: HTMLInputElement) => {
      const buttons = document.querySelectorAll('.color-button') as NodeListOf<HTMLElement>;
      buttons.forEach((item) => {
        item.style.boxShadow = 'none';
      });
      const color = colors[el.name][6];
      el.style.boxShadow = `0px 0px 0px 2px var(--color-canvas), 0px 0px 0px 4px ${color}`;
    };

    const colors: ColorMap = {
      red:     [ '#FEF2F2', '#FEE2E2', '#FECACA', '#FCA5A5', '#F87171', '#EF4444', '#DC2626', '#B91C1C', '#991B1B', '#7F1D1D', '#450A0A', ],
      orange:  [ '#FFF7ED', '#FFEDD5', '#FED7AA', '#FDBA74', '#FB923C', '#F97316', '#EA580C', '#C2410C', '#9A3412', '#7C2D12', '#431407', ],
      amber:   [ '#FFFBEB', '#FEF3C7', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B', '#D97706', '#B45309', '#92400E', '#78350F', '#451A03', ],
      yellow:  [ '#FEFCE8', '#FEF9C3', '#FEF08A', '#FDE047', '#FACC15', '#EAB308', '#CA8A04', '#A16207', '#854D0E', '#713F12', '#422006', ],
      lime:    [ '#F7FEE7', '#ECFCCB', '#D9F99D', '#BEF264', '#A3E635', '#84CC16', '#65A30D', '#4D7C0F', '#3F6212', '#365314', '#1A2E05', ],
      green:   [ '#F0FDF4', '#DCFCE7', '#BBF7D0', '#86EFAC', '#4ADE80', '#22C55E', '#16A34A', '#15803D', '#166534', '#14532D', '#052E16', ],
      emerald: [ '#ECFDF5', '#D1FAE5', '#A7F3D0', '#6EE7B7', '#34D399', '#10B981', '#059669', '#047857', '#065F46', '#064E3B', '#022C22', ],
      teal:    [ '#F0FDFA', '#CCFBF1', '#99F6E4', '#5EEAD4', '#2DD4BF', '#14B8A6', '#0D9488', '#0F766E', '#115E59', '#134E4A', '#042F2E', ],
      cyan:    [ '#ECFEFF', '#CFFAFE', '#A5F3FC', '#67E8F9', '#22D3EE', '#06B6D4', '#0891B2', '#0E7490', '#155E75', '#164E63', '#083344', ],
      sky:     [ '#F0F9FF', '#E0F2FE', '#BAE6FD', '#7DD3FC', '#38BDF8', '#0EA5E9', '#0284C7', '#0369A1', '#075985', '#0C4A6E', '#082F49', ],
      blue:    [ '#EFF6FF', '#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF', '#1E3A8A', '#172554', ],
      indigo:  [ '#EEF2FF', '#E0E7FF', '#C7D2FE', '#A5B4FC', '#818CF8', '#6366F1', '#4F46E5', '#4338CA', '#3730A3', '#312E81', '#1E1B4B', ],
      violet:  [ '#F5F3FF', '#EDE9FE', '#DDD6FE', '#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED', '#6D28D9', '#5B21B6', '#4C1D95', '#2E1065', ],
      purple:  [ '#FAF5FF', '#F3E8FF', '#E9D5FF', '#D8B4FE', '#C084FC', '#A855F7', '#9333EA', '#7E22CE', '#6B21A8', '#581C87', '#3B0764', ],
      magenta: [ '#FDF4FF', '#FAE8FF', '#F5D0FE', '#F0ABFC', '#E879F9', '#D946EF', '#C026D3', '#A21CAF', '#86198F', '#701A75', '#4A044E', ],
      pink:    [ '#FDF2F8', '#FCE7F3', '#FBCFE8', '#F9A8D4', '#F472B6', '#EC4899', '#DB2777', '#BE185D', '#9D174D', '#831843', '#500724', ],
      rose:    [ '#FFF1F2', '#FFE4E6', '#FECDD3', '#FDA4AF', '#FB7185', '#F43F5E', '#E11D48', '#BE123C', '#9F1239', '#881337', '#4C0519', ],
      slate:   [ '#F8FAFC', '#F1F5F9', '#E2E8F0', '#CBD5E1', '#94A3B8', '#64748B', '#475569', '#334155', '#1E293B', '#0F172A', '#020617', ],
      neutral: [ '#FAFAFA', '#F5F5F5', '#E5E5E5', '#D4D4D4', '#A3A3A3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0A0A0A', ],
    };

    buttons.forEach((button: Element) => {
      button.addEventListener('click', () => {
        selectColor((button as HTMLButtonElement).name);
        activeColor(button as HTMLInputElement);
      });
    });
  }, []);

  return (
    <div className='color-palette-container'>
      <div className='color-picker'>
        {Object.keys(colorNames).map((item) => (
          <button key={item} className='color-button' name={item.toLowerCase()} />
        ))}
      </div>
      <div className='color-chart'>
        <p className='color-name'>Click on a bubble to see its color palette</p>
        <div className='color-palette'>
          {colorValues.map((item) => (
            <div key={item} className='color-palette-item'>
              <span className='num select-none'>{item}</span>
              <span className='hex-code' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;

