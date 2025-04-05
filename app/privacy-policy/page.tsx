// app/privacy-policy/page.tsx

export default function PrivacyPolicy() {
  return (
    <main className="p-6 max-w-3xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>

      <p className="mb-4">
        This Privacy Policy describes how your information is collected, used, and shared when you visit or use our Unit Converter web application ("the Site").
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We do not collect any personally identifiable information from our users. However, third-party services like Google AdSense may collect data to show relevant ads.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Google AdSense</h2>
      <p className="mb-4">
        We use Google AdSense to display ads. AdSense uses cookies to serve ads based on your previous visits to this and other websites.
      </p>
      <p className="mb-4">
        Google may use the data collected to contextualize and personalize the ads of its own advertising network. You can learn more and opt out here: 
        <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline ml-1">
          Google Ads Settings
        </a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
      <p className="mb-4">
        Cookies are small data files that are stored on your device. We use cookies through AdSense to provide relevant advertisements. You can disable cookies via your browser settings.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to third-party websites. We are not responsible for their content or privacy practices.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, feel free to contact us at:
        <a href="mailto:bolkapot@gmail.com" className="text-blue-600 underline ml-1">bolkapot@gmail.com</a>
      </p>

      <p className="text-sm text-gray-500 mt-6">Last updated: April 4, 2025</p>
    </main>
  );
}

