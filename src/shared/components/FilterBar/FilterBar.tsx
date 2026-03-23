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
      {/* ================= INPUT ================= */}
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder={placeholder}
        className="
          w-full rounded-2xl
          border border-[rgb(var(--border))]
          bg-[rgb(var(--bg-soft))]
          px-4 py-3
          text-sm text-[rgb(var(--fg))]
          placeholder:text-[rgb(var(--fg-muted))]
          outline-none
          transition-colors
          focus:border-[rgb(var(--fg))/0.25]
          focus:bg-[rgb(var(--bg-soft))]
        "
      />

      {/* ================= TAGS ================= */}
      <div className="flex flex-wrap gap-2">
        {/* All */}
        <button
          type="button"
          onClick={() => onTagChange(null)}
          className={[
            "rounded-full border px-3 py-1 text-xs transition-colors",

            selectedTag === null
              ? [
                  "border-[rgb(var(--fg))/0.2]",
                  "bg-[rgb(var(--bg-hover))]",
                  "text-[rgb(var(--fg))]",
                ].join(" ")
              : [
                  "border-[rgb(var(--border))]",
                  "bg-[rgb(var(--bg-soft))]",
                  "text-[rgb(var(--fg-muted))]",
                  "hover:bg-[rgb(var(--bg-hover))]",
                  "hover:text-[rgb(var(--fg))]",
                ].join(" "),
          ].join(" ")}
        >
          All
        </button>

        {/* Tags */}
        {tags.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => onTagChange(selectedTag === t ? null : t)}
            className={[
              "rounded-full border px-3 py-1 text-xs transition-colors",

              selectedTag === t
                ? [
                    "border-[rgb(var(--fg))/0.2]",
                    "bg-[rgb(var(--bg-hover))]",
                    "text-[rgb(var(--fg))]",
                  ].join(" ")
                : [
                    "border-[rgb(var(--border))]",
                    "bg-[rgb(var(--bg-soft))]",
                    "text-[rgb(var(--fg-muted))]",
                    "hover:bg-[rgb(var(--bg-hover))]",
                    "hover:text-[rgb(var(--fg))]",
                  ].join(" "),
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
}