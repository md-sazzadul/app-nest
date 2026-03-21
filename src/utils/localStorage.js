const STORAGE_KEY = "installedApps";

export const getInstalledApps = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const isAppInstalled = (appId) => {
  const apps = getInstalledApps();
  return apps.some((app) => app.id === appId);
};

export const installApp = (app) => {
  const apps = getInstalledApps();

  const alreadyInstalled = apps.find((a) => a.id === app.id);
  if (alreadyInstalled) return;

  apps.push(app);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
};

export const uninstallApp = (appId) => {
  const apps = getInstalledApps();
  const updatedApps = apps.filter((app) => app.id !== appId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedApps));
};
