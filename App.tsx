
import React, { useState } from 'react';
import { ViewState } from './types';
import Home from './components/Home';
import Schedule from './components/Schedule';
import Worship from './components/Worship';
import Havruta from './components/Havruta';
import Praise from './components/Praise';
import Intro from './components/Intro';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const renderView = () => {
    switch (currentView) {
      case 'HOME':
        return <Home onNavigate={setCurrentView} />;
      case 'SCHEDULE':
        return <Schedule onGoHome={() => setCurrentView('HOME')} />;
      case 'WORSHIP':
        return <Worship onGoHome={() => setCurrentView('HOME')} />;
      case 'HAVRUTA':
        return <Havruta onGoHome={() => setCurrentView('HOME')} />;
      case 'PRAISE':
        return <Praise onGoHome={() => setCurrentView('HOME')} />;
      case 'INTRO':
        return <Intro onGoHome={() => setCurrentView('HOME')} />;
      default:
        return <Home onNavigate={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen max-w-lg mx-auto bg-white shadow-xl relative overflow-hidden flex flex-col">
      {renderView()}
    </div>
  );
};

export default App;
