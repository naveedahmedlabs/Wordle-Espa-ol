export const loadEnvConfig = (dir, dev, log) => ({ combinedEnv: process.env || {}, loadedEnvFiles: [] });
export const initialEnv = typeof process !== 'undefined' ? process.env : {};
export const processEnv = typeof process !== 'undefined' ? process.env : {};
export const updateInitialEnv = () => {};
export const resetEnv = () => {};

const nextEnv = {
  loadEnvConfig,
  initialEnv,
  processEnv,
  updateInitialEnv,
  resetEnv,
};

export default nextEnv;
