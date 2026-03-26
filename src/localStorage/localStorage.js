const getAppData = () => {
  const getStoredApp = localStorage.getItem('app');

  if (getStoredApp) {
    const storedAppData = JSON.parse(getStoredApp);
    return storedAppData;
  } else {
    return [];
  }
};

const addStoredApp = id => {
  const addApp = getAppData();
  if (addApp.includes(id)) {
    return alert('already installed');
  } else {
    addApp.push(id);
    const data = JSON.stringify(addApp);
    localStorage.setItem('app', data);
  }
};

const removeStoredApp = id => {
  const storedApps = getAppData();
  const updatedApps = storedApps.filter(appId => appId !== id);
  localStorage.setItem('app', JSON.stringify(updatedApps));
};
export { addStoredApp, getAppData, removeStoredApp };
