type FilterBarProps = {
  query: string;
  onQueryChange: (value: string) => void;
  tags: string[];
  selectedTag: string | null;
  onTagChange: (tag: string | null) => void;
  placeholder: string;
};

export function FilterBar({
  query,
  onQueryChange,
  tags,
  selectedTag,
  onTagChange,
  placeholder,
}: FilterBarProps) {
  return (
    <div className="space-y-3">
      <input
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-black/10 bg-white/60 px-4 py-3 text-sm text-black/85 placeholder:text-black/40 outline-none transition focus:border-black/20 focus:bg-white/80 dark:border-white/10 dark:bg-white/5 dark:text-white/85 dark:placeholder:text-white/40 dark:focus:border-white/20"
      />

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => onTagChange(null)}
          className={[
            "rounded-full border px-3 py-1 text-xs transition",
            selectedTag === null
              ? "border-black/20 bg-black/5 text-black dark:border-white/20 dark:bg-white/12 dark:text-white"
              : "border-black/10 bg-white/40 text-black/70 hover:text-black hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/8",
          ].join(" ")}
        >
          All
        </button>

        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTagChange(selectedTag === t ? null : t)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition",
              selectedTag === null
                ? "border-black/20 bg-black/5 text-black dark:border-white/20 dark:bg-white/12 dark:text-white"
                : "border-black/10 bg-white/40 text-black/70 hover:text-black hover:bg-white/70 dark:border-white/10 dark:bg-white/5 dark:text-white/70 dark:hover:text-white dark:hover:bg-white/8",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}
