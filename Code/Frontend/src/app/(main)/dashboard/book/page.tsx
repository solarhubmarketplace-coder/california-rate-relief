"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

function BookingConfirmationContent() {
  const searchParams = useSearchParams();
  const leadId = searchParams.get("lead_id");

  const [leadName, setLeadName] = useState("");
  const [loading, setLoading] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [error, setError] = useState("");
  const [leadNotFound, setLeadNotFound] = useState(false);

  useEffect(() => {
    // Fetch lead details to get name
    const fetchLeadDetails = async () => {
      if (!leadId) {
        setLeadNotFound(true);
        return;
      }

      try {
        // You can add an API call here to fetch lead details if needed
        // For now, we'll just use a default greeting
        setLeadName("Friend");
      } catch (err) {
        console.error("Error fetching lead:", err);
        setLeadNotFound(true);
      }
    };

    fetchLeadDetails();
  }, [leadId]);

  const handleConfirmInterest = async () => {
    if (!leadId) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${
          process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api"
        }/booking/confirm?lead_id=${leadId}`
      );

      if (response.data.success) {
        setConfirmed(true);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Error confirming interest:", err);
      setError(
        err.response?.data?.message ||
          "Failed to confirm. Please try again or call us directly."
      );
    } finally {
      setLoading(false);
    }
  };

  if (leadNotFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center animate-fade-in">
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">❌</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Invalid or Missing Link
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            We couldn&apos;t find your confirmation request. Please check your
            email for the correct link or contact us for assistance.
          </p>
          <div className="text-sm text-gray-500 mt-8">
            California Rate Relief Program ☀️
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full p-12 text-center animate-fade-in">
        {/* Icon */}
        <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-slow">
          <span className="text-4xl">☀️</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hey {leadName}! 👋
        </h1>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          Thanks for your interest in solar energy! We&apos;re excited to help
          you save money and power your home with clean energy.
        </p>

        {/* Info Box */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-8 text-left space-y-6">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                You&apos;ll get a call from our solar advisor
              </h3>
              <p className="text-sm text-gray-500">
                Usually within the next 24 hours
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Free consultation
              </h3>
              <p className="text-sm text-gray-500">
                No obligation, just helpful information
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 mb-1">
                Learn about savings & incentives
              </h3>
              <p className="text-sm text-gray-500">
                Discover how much you can save with solar
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {!confirmed && !loading && (
          <button
            onClick={handleConfirmInterest}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold py-4 px-8 rounded-xl hover:from-purple-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Yes, I&apos;m Ready to Talk! 🚀
          </button>
        )}

        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            <p className="text-gray-600">Confirming your request...</p>
          </div>
        )}

        {/* Success Message */}
        {confirmed && (
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="text-3xl">✅</span>
              <h3 className="text-xl font-bold text-green-800">Perfect!</h3>
            </div>
            <p className="text-green-700 font-medium">
              We&apos;ve confirmed your interest. Expect a call from our solar
              advisor soon!
            </p>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="bg-gradient-to-r from-red-50 to-rose-50 border-2 border-red-200 rounded-xl p-6 animate-fade-in">
            <div className="flex items-center justify-center space-x-3 mb-3">
              <span className="text-3xl">❌</span>
              <h3 className="text-xl font-bold text-red-800">Oops!</h3>
            </div>
            <p className="text-red-700 font-medium mb-4">{error}</p>
            <button
              onClick={handleConfirmInterest}
              className="text-red-600 hover:text-red-700 font-semibold underline"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-sm text-gray-500 mt-12">
          California Rate Relief Program ☀️
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default function BookingConfirmationPage() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          Loading...
        </div>
      }
    >
      <BookingConfirmationContent />
    </Suspense>
  );
}
