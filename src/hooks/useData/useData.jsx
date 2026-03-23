const useData = () => {
  const heroDataPromise = fetch('./data.json').then(res => res.json());
  // console.log(heroDataPromise);
  return heroDataPromise;
};

export default useData;
