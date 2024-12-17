import React, { useState } from 'react';
import { Moon, Palette, Monitor, Type } from 'lucide-react';
import { ThemePreview } from './components/ThemePreview';
import { ApplicationList } from './components/ApplicationList';
import { themeVariants } from './data/themes';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(themeVariants[0]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Moon className="w-8 h-8 text-purple-400" />
            <h1 className="text-2xl font-bold">Dracur PRO Generator</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Theme Preview
              </h2>
              <ThemePreview colors={selectedTheme.colors} />
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                Supported Applications
              </h2>
              <ApplicationList />
            </div>
          </section>

          <section className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Type className="w-5 h-5" />
                Theme Variants
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {themeVariants.map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setSelectedTheme(theme)}
                    className={`p-4 rounded-lg border-2 transition-colors ${
                      selectedTheme.name === theme.name
                        ? 'border-purple-400 bg-gray-800'
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  >
                    <h3 className="font-medium">{theme.name}</h3>
                    <div className="mt-2 flex gap-2">
                      {Object.values(theme.colors).slice(0, 5).map((color, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;