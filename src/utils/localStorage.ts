const FAVORITES_KEY = "breathing-exercises-favorites";

export const getFavorites = (): string[] => {
  if (typeof window === "undefined") return [];
  const favorites = localStorage.getItem(FAVORITES_KEY);
  return favorites ? JSON.parse(favorites) : [];
};

export const toggleFavorite = (exerciseId: string): string[] => {
  const favorites = getFavorites();
  const newFavorites = favorites.includes(exerciseId)
    ? favorites.filter((id) => id !== exerciseId)
    : [...favorites, exerciseId];

  localStorage.setItem(FAVORITES_KEY, JSON.stringify(newFavorites));
  return newFavorites;
};

export const isFavorite = (exerciseId: string): boolean => {
  const favorites = getFavorites();
  return favorites.includes(exerciseId);
};
