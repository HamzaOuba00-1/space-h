export type Exercise = {
  slug: string;
  title: string;
  difficulty: "easy" | "medium" | "hard";
  statementMarkdownPath: string;
  solutionDownloadPath: string; // /downloads/xxx.zip
  tags: string[];
};