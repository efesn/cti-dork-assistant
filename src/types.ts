export type TargetType = "domain" | "keyword" | "ip" | "hash" | "email";

export type DorkCategory =
  | "Threat Reports"
  | "IOC Hunting"
  | "Phishing & Brand Abuse"
  | "Vulnerability Monitoring"
  | "Dark Web & Leak Signals"
  | "Actor Tracking";

export interface DorkTemplate {
  id: string;
  title: string;
  category: DorkCategory;
  query: string;
  description: string;
  targetTypes: TargetType[];
}
