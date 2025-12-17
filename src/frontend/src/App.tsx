export default function App() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <main className="flex-1 flex items-center justify-center">
                <h1 className="text-4xl">Uno flip.</h1>
            </main>
            
            <footer className="py-6 text-center text-sm text-black">
                © 2025. Built with love using{' '}
                <a 
                    href="https://caffeine.ai" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="underline hover:no-underline"
                >
                    caffeine.ai
                </a>
            </footer>
        </div>
    );
}
