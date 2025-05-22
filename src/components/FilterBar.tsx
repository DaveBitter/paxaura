"use client";

import { useState, useEffect } from "react";

interface FilterBarProps {
  onFilterChange: (filters: {
    difficulty: string;
    duration: string;
    benefits: string[];
    showFavorites: boolean;
  }) => void;
  showFavorites: boolean;
}

export default function FilterBar({
  onFilterChange,
  showFavorites,
}: FilterBarProps) {
  const [difficulty, setDifficulty] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [benefits, setBenefits] = useState<string[]>([]);
  const [showFavs, setShowFavs] = useState<boolean>(showFavorites);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Handle initial mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Handle filter changes
  useEffect(() => {
    if (isMounted) {
      onFilterChange({
        difficulty,
        duration,
        benefits,
        showFavorites: showFavs,
      });
    }
  }, [difficulty, duration, benefits, showFavs, isMounted]);

  // Handle showFavorites prop changes
  useEffect(() => {
    if (isMounted && showFavorites !== showFavs) {
      setShowFavs(showFavorites);
    }
  }, [showFavorites, isMounted]);

  const handleBenefitChange = (benefit: string) => {
    setBenefits((prev) =>
      prev.includes(benefit)
        ? prev.filter((b) => b !== benefit)
        : [...prev, benefit]
    );
  };

  if (!isMounted) {
    return (
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty
            </label>
            <select
              value=""
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled
            >
              <option value="">All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration
            </label>
            <select
              value=""
              className="w-full p-2 border border-gray-300 rounded-md"
              disabled
            >
              <option value="">All</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Benefits
            </label>
            <div className="space-y-2">
              {[
                "Stress Relief",
                "Focus",
                "Energy",
                "Sleep",
                "Anxiety Relief",
              ].map((benefit) => (
                <label key={benefit} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={false}
                    disabled
                    className="mr-2"
                  />
                  {benefit}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Favorites
            </label>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={false}
                disabled
                className="mr-2"
              />
              Show Favorites Only
            </label>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Difficulty
          </label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="advanced">Advanced</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration
          </label>
          <select
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">All</option>
            <option value="0-300">0-5 minutes</option>
            <option value="300-600">5-10 minutes</option>
            <option value="600-900">10-15 minutes</option>
            <option value="900-1200">15-20 minutes</option>
            <option value="1200-9999">20+ minutes</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Benefits
          </label>
          <div className="space-y-2">
            {[
              "Stress Relief",
              "Focus",
              "Energy",
              "Sleep",
              "Anxiety Relief",
            ].map((benefit) => (
              <label key={benefit} className="flex items-center">
                <input
                  type="checkbox"
                  checked={benefits.includes(benefit)}
                  onChange={() => handleBenefitChange(benefit)}
                  className="mr-2"
                />
                {benefit}
              </label>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Favorites
          </label>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={showFavs}
              onChange={(e) => setShowFavs(e.target.checked)}
              className="mr-2"
            />
            Show Favorites Only
          </label>
        </div>
      </div>
    </div>
  );
}
