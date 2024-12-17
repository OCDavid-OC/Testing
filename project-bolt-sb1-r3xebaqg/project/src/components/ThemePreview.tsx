import React from 'react';
import { ThemeColors } from '../types/theme';

interface ThemePreviewProps {
  colors: ThemeColors;
}

export function ThemePreview({ colors }: ThemePreviewProps) {
  return (
    <div className="p-6 rounded-lg" style={{ backgroundColor: colors.background }}>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.purple }}></span>
          <code className="font-mono" style={{ color: colors.foreground }}>
            const dracurPro = new Theme();
          </code>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.green }}></span>
          <code className="font-mono" style={{ color: colors.foreground }}>
            dracurPro.initialize();
          </code>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 rounded-full" style={{ backgroundColor: colors.pink }}></span>
          <code className="font-mono" style={{ color: colors.comment }}>
            // Your perfect theme awaits
          </code>
        </div>
      </div>
    </div>
  );
}