/**
 * Cloudflare Worker / OpenNext no-op shim for Payload CMS's loadEnv.
 * Cloudflare runtime receives environment variables via bindings, not filesystem findUp/dotenv.
 */
export function loadEnv(path) {}
export default loadEnv;
