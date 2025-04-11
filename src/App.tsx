import React from 'react';
import { Phone, Copy } from 'lucide-react';

interface Answers {
  colorName: string;
  personality: string;
}

const answers: Answers = {
  colorName: 'Teal',
  personality: 'Creative'
};

function App() {
  const handleGetStarted = () => {
    const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.userAgent);
    const messageText = `Your AI friend is being made. We will let you know once your personal AI is ready! For now, send this to Vera to get a taste of what AI friends can do.`;
    const phoneNumber = "+18557141806";
    
    const url = isAppleDevice
      ? `imessage://${phoneNumber}&body=${encodeURIComponent(messageText)}`
      : `sms:${phoneNumber}?body=${encodeURIComponent(messageText)}`;
    
    window.location.href = url;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('(855) 714-1806');
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6">
      <div className="w-full max-w-xl -mt-16">
        <div className="mt-8 text-center">
          <h1 className="text-5xl font-bold mb-4">
            <a href="https://www.linkedin.com/company/joinseries/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
              Your AI friend is being made.
            </a>
          </h1>
          <p className="text-gray-600 text-xl mb-12">Join the queue of users waiting to see the full power of an AI superconnector.</p>
          
          <button
            onClick={handleGetStarted}
            className="bg-black text-white rounded-full px-8 py-4 text-xl font-medium mb-8 hover:bg-gray-800 transition-colors"
          >
            Open iMessage
          </button>
          
          <div className="flex items-center justify-center gap-3 mb-6">
            <Phone className="w-5 h-5" />
            <span className="text-lg">(855) 714-1806</span>
            <button onClick={handleCopyPhone} className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
              <Copy className="w-5 h-5" />
            </button>
          </div>
          <p className="text-gray-600 text-sm">
            Android user? Text "Join" to this number!
          </p>          
        </div>
      </div>
    </div>
  );
}

export default App;
