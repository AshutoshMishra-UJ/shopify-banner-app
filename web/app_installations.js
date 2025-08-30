// Simple in-memory storage for app installations
const installations = new Set();

export const AppInstallations = {
  includes: (shopDomain) => {
    return installations.has(shopDomain);
  },
  set: (shopDomain) => {
    installations.add(shopDomain);
  },
  delete: (shopDomain) => {
    installations.delete(shopDomain);
  },
};
