import './globals.css';
import { Inter } from 'next/font/google';

import { CopilotKit } from '@copilotkit/react-core';
import '@copilotkit/react-ui/styles.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PDF Assistant',
  description: 'Ask questions about your PDFs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CopilotKit runtimeUrl="http://localhost:8000/query" publicApiKey="">
          {children}
        </CopilotKit>
      </body>
    </html>
  );
}
