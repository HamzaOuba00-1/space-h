export type MarkdownModule = { default: string };
export type MarkdownCatalog = Record<string, () => Promise<string>>;

export async function loadMarkdownByPath(catalog: MarkdownCatalog, fullPath: string): Promise<string> {

  
  const loader = catalog[fullPath];
  if (!loader) {
    throw new Error(`Markdown not found in catalog: ${fullPath}`);
  }
  const mod = await loader();
  return mod;
}