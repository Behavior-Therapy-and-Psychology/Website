import { Link } from "react-router-dom";


export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#F4F2FA] px-6 py-20">
      <div className="max-w-3xl mx-auto text-[#443A77] space-y-6">

        {/* Header Row */}
        <div className="flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-4xl font-bold">Privacy Policy</h1>

          <Link
            to="/"
            className="text-sm bg-[#443A77] text-white px-4 py-2 rounded-2xl 
                       hover:bg-[#5a4f94] transition-colors duration-300"
          >
            Return Home
          </Link>
        </div>

        <p><strong>Effective Date:</strong> February 18, 2026</p>

        <h2 className="text-2xl font-semibold pt-6">Overview</h2>
        <p>
          Behavior Therapy and Psychology is committed to protecting your privacy.
          This website is a static informational website and does not
          collect personal information directly from visitors.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Information We Do Not Collect</h2>
        <p>
          This website does not provide user accounts, collect personal
          information, store visitor data, or use analytics tools.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Third-Party Services</h2>
        <p>
          Our website includes an embedded Google Map to display our
          location. Google may collect technical information such as IP
          address or usage data according to its own privacy policy.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Cookies</h2>
        <p>
          We do not use cookies directly. However, Google Maps may use
          cookies as part of its functionality.
        </p>

        <h2 className="text-2xl font-semibold pt-6">Contact</h2>
        <p>
          If you have questions about this policy, please contact us at (858) 673-5300.
        </p>
      </div>
    </main>
  );
}
