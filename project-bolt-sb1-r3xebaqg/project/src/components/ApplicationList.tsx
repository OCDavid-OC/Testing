import React from 'react';
import { applications } from '../data/applications';
import * as Icons from 'lucide-react';

export function ApplicationList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {applications.map((app) => {
        const Icon = Icons[app.icon as keyof typeof Icons];
        return (
          <div
            key={app.name}
            className="p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <Icon className="w-5 h-5 text-purple-400" />
              <span className="text-gray-100">{app.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}