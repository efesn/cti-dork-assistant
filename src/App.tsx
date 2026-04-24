import { startTransition, useDeferredValue, useState } from "react";
import { categoryOrder, dorkTemplates } from "./data/dorks";
import { DorkCategory, DorkTemplate, TargetType } from "./types";

const targetTypeOptions: { value: TargetType; label: string; hint: string }[] = [
  { value: "domain", label: "Domain", hint: "ornek.com" },
  { value: "keyword", label: "Anahtar Kelime", hint: "ransomware group name" },
  { value: "ip", label: "IP", hint: "8.8.8.8" },
  { value: "hash", label: "Hash", hint: "SHA256 / MD5" },
  { value: "email", label: "E-posta", hint: "analist@firma.com" }
];

function normalizeTarget(raw: string, targetType: TargetType): string {
  const cleaned = raw.trim();
  if (!cleaned) return "";

  if (targetType === "domain") {
    return cleaned
      .replace(/^https?:\/\//i, "")
      .replace(/^www\./i, "")
      .split("/")[0]
      .toLowerCase();
  }

  if (targetType === "email") {
    return cleaned.toLowerCase();
  }

  if (targetType === "hash") {
    return cleaned.replace(/\s+/g, "").toLowerCase();
  }

  return cleaned;
}

function renderQuery(template: DorkTemplate, target: string): string {
  return template.query.replace(/\{target\}/g, target || "<hedef>");
}

function makeGoogleLink(query: string): string {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

export default function App() {
  const [targetType, setTargetType] = useState<TargetType>("domain");
  const [target, setTarget] = useState("");
  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<DorkCategory[]>([
    ...categoryOrder
  ]);
  const [lastAction, setLastAction] = useState("");

  const normalizedTarget = normalizeTarget(target, targetType);
  const deferredSearch = useDeferredValue(search.trim().toLowerCase());

  const filteredDorks = dorkTemplates.filter((dork) => {
    const supportsTarget = dork.targetTypes.includes(targetType);
    const categoryEnabled = selectedCategories.includes(dork.category);
    const hitsSearch =
      deferredSearch.length === 0 ||
      dork.title.toLowerCase().includes(deferredSearch) ||
      dork.query.toLowerCase().includes(deferredSearch) ||
      dork.description.toLowerCase().includes(deferredSearch);

    return supportsTarget && categoryEnabled && hitsSearch;
  });

  const isReady = normalizedTarget.length > 0;

  const toggleCategory = (category: DorkCategory) => {
    startTransition(() => {
      setSelectedCategories((prev) => {
        if (prev.includes(category)) {
          return prev.filter((value) => value !== category);
        }
        return [...prev, category];
      });
    });
  };

  const selectAllCategories = () => {
    startTransition(() => setSelectedCategories([...categoryOrder]));
  };

  const clearCategories = () => {
    startTransition(() => setSelectedCategories([]));
  };

  const runDork = (query: string) => {
    if (!isReady) return;
    const link = makeGoogleLink(query);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  const copyDork = async (query: string) => {
    if (!isReady) return;
    try {
      await navigator.clipboard.writeText(query);
      setLastAction("Sorgu panoya kopyalandı.");
    } catch {
      setLastAction("Kopyalama başarısız oldu. Tarayıcı izinlerini kontrol edin.");
    }
  };

  const downloadDorks = (format: "txt" | "json") => {
    if (!isReady) return;

    const output = filteredDorks.map((item) => ({
      id: item.id,
      title: item.title,
      category: item.category,
      query: renderQuery(item, normalizedTarget),
      description: item.description
    }));

    const body =
      format === "json"
        ? JSON.stringify(output, null, 2)
        : output
            .map(
              (item) =>
                `[${item.id}] ${item.title}\nKategori: ${item.category}\nSorgu: ${item.query}\nNot: ${item.description}`
            )
            .join("\n\n");

    const mimeType = format === "json" ? "application/json" : "text/plain";
    const ext = format === "json" ? "json" : "txt";
    const blob = new Blob([body], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cti-dork-sonuclari.${ext}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-surface text-ink">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-amber-100 via-teal-50 to-transparent" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8 rounded-2xl border border-amber-200 bg-white/95 p-6 shadow-soft">
          <p className="mb-2 inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-teal-900">
            Cyber Threat Intelligence
          </p>
          <h1 className="font-heading text-3xl font-bold sm:text-4xl">
            Google Dork Automation Console
          </h1>
          <p className="mt-3 max-w-3xl text-sm text-slate-700 sm:text-base">
            Hedefe göre otomatik dork üretir, filtreler, çalıştırır ve dışa aktarır.
            Veri setinde CTI amaçlı <strong>{dorkTemplates.length}</strong> farklı
            dork şablonu bulunur.
          </p>
          <p className="mt-3 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-xs text-red-800">
            Bu araç yalnızca yasal, etik ve savunma amaçlı CTI araştırmaları için
            tasarlanmıştır.
          </p>
        </header>

        <section className="grid gap-6 lg:grid-cols-[340px_1fr]">
          <aside className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <h2 className="font-heading text-xl font-semibold">Arama Parametreleri</h2>

            <label className="mt-4 block text-sm font-semibold">Hedef Tipi</label>
            <select
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring-2"
              value={targetType}
              onChange={(event) => setTargetType(event.target.value as TargetType)}
            >
              {targetTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label className="mt-4 block text-sm font-semibold">Hedef Değeri</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring-2"
              value={target}
              placeholder={
                targetTypeOptions.find((option) => option.value === targetType)?.hint
              }
              onChange={(event) => setTarget(event.target.value)}
            />

            <label className="mt-4 block text-sm font-semibold">Dork İçinde Ara</label>
            <input
              className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none ring-teal-500 transition focus:ring-2"
              value={search}
              placeholder="CVE, phishing, ransomware..."
              onChange={(event) => setSearch(event.target.value)}
            />

            <div className="mt-5">
              <p className="text-sm font-semibold">Kategoriler</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categoryOrder.map((category) => {
                  const active = selectedCategories.includes(category);
                  return (
                    <button
                      key={category}
                      type="button"
                      className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                        active
                          ? "bg-teal-600 text-white"
                          : "border border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                      onClick={() => toggleCategory(category)}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold hover:bg-slate-100"
                  onClick={selectAllCategories}
                >
                  Tümünü Seç
                </button>
                <button
                  type="button"
                  className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold hover:bg-slate-100"
                  onClick={clearCategories}
                >
                  Temizle
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-2">
              <button
                type="button"
                className="rounded-xl bg-signal px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!isReady}
                onClick={() => downloadDorks("txt")}
              >
                Sonuçları TXT İndir
              </button>
              <button
                type="button"
                className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                disabled={!isReady}
                onClick={() => downloadDorks("json")}
              >
                Sonuçları JSON İndir
              </button>
            </div>

            {lastAction && (
              <p className="mt-4 rounded-lg border border-teal-200 bg-teal-50 px-3 py-2 text-xs text-teal-900">
                {lastAction}
              </p>
            )}
          </aside>

          <section className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Toplam Şablon
                </p>
                <p className="mt-1 font-heading text-3xl font-bold">
                  {dorkTemplates.length}
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Aktif Filtre Sonucu
                </p>
                <p className="mt-1 font-heading text-3xl font-bold text-signal">
                  {filteredDorks.length}
                </p>
              </article>
              <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  Hedef
                </p>
                <p className="mt-1 truncate font-heading text-xl font-bold">
                  {normalizedTarget || "Henüz girilmedi"}
                </p>
              </article>
            </div>

            <div className="grid gap-4">
              {filteredDorks.map((item) => {
                const query = renderQuery(item, normalizedTarget);
                const googleLink = makeGoogleLink(query);

                return (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-teal-700">
                          {item.id} · {item.category}
                        </p>
                        <h3 className="mt-1 font-heading text-lg font-semibold">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <button
                          type="button"
                          className="rounded-lg border border-slate-300 px-3 py-1 text-xs font-semibold hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
                          disabled={!isReady}
                          onClick={() => copyDork(query)}
                        >
                          Kopyala
                        </button>
                        <button
                          type="button"
                          className="rounded-lg bg-signal px-3 py-1 text-xs font-semibold text-white hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60"
                          disabled={!isReady}
                          onClick={() => runDork(query)}
                        >
                          Google'da Çalıştır
                        </button>
                      </div>
                    </div>

                    <p className="mt-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 font-mono text-xs leading-relaxed text-slate-800">
                      {query}
                    </p>
                    <p className="mt-3 text-sm text-slate-700">{item.description}</p>

                    <a
                      href={googleLink}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-block text-xs font-semibold text-teal-700 underline decoration-dotted underline-offset-4"
                    >
                      Doğrudan bağlantı
                    </a>
                  </article>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}
