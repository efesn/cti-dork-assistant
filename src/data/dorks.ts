import { DorkTemplate } from "../types";

export const dorkTemplates: DorkTemplate[] = [
  {
    id: "TR-01",
    title: "Threat News Scan",
    category: "Threat Reports",
    query: 'site:thehackernews.com "{target}" ("breach" OR "attack")',
    description: "Hedef ile ilişkili güncel saldırı haberlerini yakalar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-02",
    title: "Incident Coverage",
    category: "Threat Reports",
    query: 'site:bleepingcomputer.com "{target}" ("incident" OR "compromise")',
    description: "Sızma veya olay raporlarını listeler.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-03",
    title: "CISA Advisory Lookup",
    category: "Threat Reports",
    query: 'site:cisa.gov "{target}" ("advisory" OR "alert")',
    description: "Resmi CISA duyurularında hedefi arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-04",
    title: "NVD CVE Map",
    category: "Threat Reports",
    query: 'site:nvd.nist.gov "{target}" "CVE"',
    description: "NVD kayıtlarında hedefe bağlı CVE izlerini arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-05",
    title: "MITRE ATT&CK Reference",
    category: "Threat Reports",
    query: 'site:mitre.org "{target}" "ATT&CK"',
    description: "MITRE ATT&CK ilişkili içerikleri bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-06",
    title: "Securelist Intel",
    category: "Threat Reports",
    query: 'site:securelist.com "{target}" ("report" OR "analysis")',
    description: "Kaspersky Securelist raporlarında hedefi tarar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-07",
    title: "Unit42 Campaigns",
    category: "Threat Reports",
    query: 'site:unit42.paloaltonetworks.com "{target}" ("threat" OR "campaign")',
    description: "Unit42 tehdit kampanyalarında hedefi arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-08",
    title: "CrowdStrike Reports",
    category: "Threat Reports",
    query: 'site:crowdstrike.com "{target}" ("threat intelligence" OR "report")',
    description: "CrowdStrike analizlerinde hedef sinyallerini bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-09",
    title: "Mandiant Intel",
    category: "Threat Reports",
    query: 'site:mandiant.com "{target}" ("threat" OR "intrusion")',
    description: "Mandiant içeriklerinde tehdit bağlamını bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-10",
    title: "Talos Research",
    category: "Threat Reports",
    query: 'site:talosintelligence.com "{target}" ("threat" OR "blog")',
    description: "Talos yayınlarında hedefe dair analizleri toplar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-11",
    title: "PDF Threat Reports",
    category: "Threat Reports",
    query: 'intitle:"threat report" "{target}" filetype:pdf',
    description: "PDF formatındaki tehdit raporlarına odaklanır.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "TR-12",
    title: "IR PDF Search",
    category: "Threat Reports",
    query: 'intitle:"incident response" "{target}" filetype:pdf',
    description: "Olay müdahale dökümanlarını PDF olarak bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "IOC-01",
    title: "GitHub IOC Hunt",
    category: "IOC Hunting",
    query: 'site:github.com "{target}" ("ioc" OR "indicator of compromise")',
    description: "Açık kaynak kod depolarında IOC aranır.",
    targetTypes: ["domain", "keyword", "ip", "hash"]
  },
  {
    id: "IOC-02",
    title: "Gist IOC/YARA",
    category: "IOC Hunting",
    query: 'site:gist.github.com "{target}" ("ioc" OR "yara")',
    description: "Gist paylaşımlarında IOC/YARA kayıtlarını bulur.",
    targetTypes: ["domain", "keyword", "hash"]
  },
  {
    id: "IOC-03",
    title: "VirusTotal Mentions",
    category: "IOC Hunting",
    query: 'site:virustotal.com "{target}" ("malicious" OR "detections")',
    description: "VirusTotal referanslarında hedef geçen sayfaları arar.",
    targetTypes: ["domain", "keyword", "ip", "hash"]
  },
  {
    id: "IOC-04",
    title: "URLScan Investigation",
    category: "IOC Hunting",
    query: 'site:urlscan.io "{target}" ("domain" OR "ip")',
    description: "URLScan üzerinde alan adı/IP izlerini toplar.",
    targetTypes: ["domain", "ip", "keyword"]
  },
  {
    id: "IOC-05",
    title: "abuse.ch Cross-Check",
    category: "IOC Hunting",
    query: 'site:abuse.ch "{target}" ("threatfox" OR "urlhaus")',
    description: "abuse.ch kaynaklarında IOC varlığını kontrol eder.",
    targetTypes: ["domain", "ip", "hash", "keyword"]
  },
  {
    id: "IOC-06",
    title: "Hybrid Analysis Samples",
    category: "IOC Hunting",
    query: 'site:hybrid-analysis.com "{target}" ("sample" OR "analysis")',
    description: "Sandbox analizlerinde hedef göstergelerini arar.",
    targetTypes: ["domain", "ip", "hash", "keyword"]
  },
  {
    id: "IOC-07",
    title: "OTX Pulse Search",
    category: "IOC Hunting",
    query: 'site:otx.alienvault.com "{target}" "pulse"',
    description: "OTX Pulse kayıtlarında hedefi tarar.",
    targetTypes: ["domain", "ip", "hash", "keyword"]
  },
  {
    id: "IOC-08",
    title: "Hash Context Search",
    category: "IOC Hunting",
    query: '"{target}" ("sha256" OR "md5") ("malware" OR "sample")',
    description: "Hash veya anahtar kelimeyi malware bağlamında arar.",
    targetTypes: ["hash", "keyword"]
  },
  {
    id: "IOC-09",
    title: "IOC Keyword Match",
    category: "IOC Hunting",
    query: 'intext:"{target}" intext:"Indicators of Compromise"',
    description: "Doküman ve bloglarda IOC bölümlerini hedefler.",
    targetTypes: ["domain", "ip", "hash", "keyword", "email"]
  },
  {
    id: "IOC-10",
    title: "C2 Correlation",
    category: "IOC Hunting",
    query: '"{target}" ("command and control" OR "C2") ("IOC" OR "indicator")',
    description: "C2 altyapılarıyla ilişkili açık kaynak sinyallerini bulur.",
    targetTypes: ["domain", "ip", "keyword"]
  },
  {
    id: "IOC-11",
    title: "Malpedia Linkage",
    category: "IOC Hunting",
    query: 'site:malpedia.caad.fkie.fraunhofer.de "{target}"',
    description: "Malpedia üzerinde aile/ad ilişkilerini kontrol eder.",
    targetTypes: ["keyword", "hash"]
  },
  {
    id: "IOC-12",
    title: "Intezer Analysis",
    category: "IOC Hunting",
    query: 'site:intezer.com "{target}" ("malware" OR "analysis")',
    description: "Intezer araştırmalarında hedefi arar.",
    targetTypes: ["domain", "ip", "hash", "keyword"]
  },
  {
    id: "PB-01",
    title: "Phishing Signal",
    category: "Phishing & Brand Abuse",
    query: '"{target}" ("phishing" OR "credential harvesting")',
    description: "Hedef marka için phishing bağlantısını arar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "PB-02",
    title: "Fake Login Detection",
    category: "Phishing & Brand Abuse",
    query: '"{target}" ("fake login" OR "spoofed page")',
    description: "Sahte giriş sayfası belirtilerini toplar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "PB-03",
    title: "Typosquat Lookup",
    category: "Phishing & Brand Abuse",
    query: '"{target}" ("lookalike domain" OR "typosquat")',
    description: "Taklit alan adı raporlarını bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "PB-04",
    title: "Social Media Scam Watch",
    category: "Phishing & Brand Abuse",
    query: 'site:x.com "{target}" ("phishing" OR "scam")',
    description: "X üzerinde dolandırıcılık sinyallerini tarar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "PB-05",
    title: "Community Scam Reports",
    category: "Phishing & Brand Abuse",
    query: 'site:reddit.com "{target}" ("phishing" OR "scam")',
    description: "Topluluk raporlarında marka istismarını arar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "PB-06",
    title: "OpenPhish Presence",
    category: "Phishing & Brand Abuse",
    query: 'site:openphish.com "{target}"',
    description: "OpenPhish üzerinde hedefin geçip geçmediğini arar.",
    targetTypes: ["domain", "keyword", "ip"]
  },
  {
    id: "PB-07",
    title: "URLHaus Phishing URL",
    category: "Phishing & Brand Abuse",
    query: 'site:urlhaus.abuse.ch "{target}" ("phishing" OR "malware URL")',
    description: "URLHaus kayıtlarında zararlı URL ilişkisini tarar.",
    targetTypes: ["domain", "keyword", "ip"]
  },
  {
    id: "PB-08",
    title: "PhishTank Check",
    category: "Phishing & Brand Abuse",
    query: 'site:phishtank.org "{target}" ("verified" OR "phish")',
    description: "PhishTank doğrulanmış kayıtları içinde arama yapar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "PB-09",
    title: "Suspicious Login Pages",
    category: "Phishing & Brand Abuse",
    query: 'inurl:login "{target}" ("verify account" OR "security check")',
    description: "Şüpheli kimlik doğrulama çağrıları içeren sayfaları bulur.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "PB-10",
    title: "Account Verification Bait",
    category: "Phishing & Brand Abuse",
    query: 'intitle:"account verification" "{target}"',
    description: "Hesap doğrulama temalı oltalama sayfalarını hedefler.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "VM-01",
    title: "Zero-Day Mentions",
    category: "Vulnerability Monitoring",
    query: '"{target}" ("zero-day" OR "0day")',
    description: "Sıfır gün açıklarına dair açık kaynak mention bulur.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-02",
    title: "RCE Tracking",
    category: "Vulnerability Monitoring",
    query: '"{target}" ("remote code execution" OR "RCE")',
    description: "RCE ile ilgili içerikleri hedefe göre listeler.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-03",
    title: "Privilege Escalation Intel",
    category: "Vulnerability Monitoring",
    query: '"{target}" ("privilege escalation" OR "vulnerability")',
    description: "Yetki yükseltme açıklarına ilişkin sinyal arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-04",
    title: "Exploit-DB CVE Signal",
    category: "Vulnerability Monitoring",
    query: 'site:exploit-db.com "{target}" ("CVE" OR "exploit")',
    description: "Exploit-DB üzerinde hedefe bağlı CVE izlerini arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-05",
    title: "PacketStorm Advisory",
    category: "Vulnerability Monitoring",
    query: 'site:packetstormsecurity.com "{target}" ("advisory" OR "CVE")',
    description: "PacketStorm duyurularında hedefi tarar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-06",
    title: "Rapid7 Vulnerability Feed",
    category: "Vulnerability Monitoring",
    query: 'site:rapid7.com "{target}" ("vulnerability" OR "CVE")',
    description: "Rapid7 içeriklerinde açık eşleşmelerini toplar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-07",
    title: "Tenable Plugin Clues",
    category: "Vulnerability Monitoring",
    query: 'site:tenable.com "{target}" ("plugin" OR "CVE")',
    description: "Tenable plug-in referanslarında hedefi arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "VM-08",
    title: "Vendor Security Blog Updates",
    category: "Vulnerability Monitoring",
    query: 'inurl:blog "{target}" ("security update" OR "incident")',
    description: "Üretici güvenlik bloglarını hedef bazlı tarar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "DW-01",
    title: "Breach/Dump References",
    category: "Dark Web & Leak Signals",
    query: '"{target}" ("data breach" OR "data leak") ("forum" OR "dump")',
    description: "Veri sızıntısı tartışmalarını erken fazda yakalar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "DW-02",
    title: "Ransomware Mention",
    category: "Dark Web & Leak Signals",
    query: '"{target}" ("ransomware" OR "extortion")',
    description: "Ransomware ve extortion referanslarını toplar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "DW-03",
    title: "Infostealer Clues",
    category: "Dark Web & Leak Signals",
    query: '"{target}" ("stealer logs" OR "infostealer")',
    description: "İnfostealer kaynaklı sızıntı belirtilerini bulur.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "DW-04",
    title: "IntelX Leak Search",
    category: "Dark Web & Leak Signals",
    query: 'site:intelx.io "{target}" ("leak" OR "paste")',
    description: "IntelX referanslarında hedefe dair leak sinyallerini tarar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "DW-05",
    title: "Pastebin Exposure Watch",
    category: "Dark Web & Leak Signals",
    query: 'site:pastebin.com "{target}" ("breach" OR "dump")',
    description: "Paste kaynaklı olası ifşaları erken görmek için kullanılır.",
    targetTypes: ["domain", "keyword", "email", "ip"]
  },
  {
    id: "DW-06",
    title: "Credential Leak Index",
    category: "Dark Web & Leak Signals",
    query: 'site:dehashed.com "{target}" ("breach" OR "exposure")',
    description: "Kimlik bilgisi ifşasıyla ilgili indeks kayıtlarını arar.",
    targetTypes: ["domain", "keyword", "email"]
  },
  {
    id: "AT-01",
    title: "Threat Actor Association",
    category: "Actor Tracking",
    query: '"{target}" ("threat actor" OR "APT") ("campaign" OR "operation")',
    description: "Hedefi olası aktör kampanyalarıyla ilişkilendirir.",
    targetTypes: ["domain", "keyword", "ip"]
  },
  {
    id: "AT-02",
    title: "TTP Correlation",
    category: "Actor Tracking",
    query: '"{target}" ("TTPs" OR "MITRE ATT&CK")',
    description: "Hedefin taktik/teknik prosedür bağlamını arar.",
    targetTypes: ["domain", "keyword", "hash"]
  },
  {
    id: "AT-03",
    title: "Recorded Future Signal",
    category: "Actor Tracking",
    query: 'site:recordedfuture.com "{target}" ("insikt" OR "threat")',
    description: "Recorded Future içeriklerinde hedef sinyalini bulur.",
    targetTypes: ["domain", "keyword", "ip"]
  },
  {
    id: "AT-04",
    title: "SentinelOne Campaigns",
    category: "Actor Tracking",
    query: 'site:sentinelone.com "{target}" ("threat actor" OR "campaign")',
    description: "SentinelOne araştırmalarında aktör bağlantılarını arar.",
    targetTypes: ["domain", "keyword"]
  },
  {
    id: "AT-05",
    title: "AbuseIPDB IP Reputation",
    category: "Actor Tracking",
    query: 'site:abuseipdb.com "{target}"',
    description: "IP hedefleri için itibar ve abuse kayıtlarını arar.",
    targetTypes: ["ip"]
  },
  {
    id: "AT-06",
    title: "ASN/Whois Context",
    category: "Actor Tracking",
    query: '"{target}" "whois" "autonomous system"',
    description: "IP/altyapı hedeflerinde ASN bağlamını ortaya çıkarır.",
    targetTypes: ["ip", "domain"]
  },
  {
    id: "AT-07",
    title: "HIBP Email Exposure",
    category: "Actor Tracking",
    query: '"{target}" "Have I Been Pwned"',
    description: "E-posta adresi için ihlal referanslarını arar.",
    targetTypes: ["email"]
  },
  {
    id: "AT-08",
    title: "Credential Stuffing Intel",
    category: "Actor Tracking",
    query: '"{target}" "credential stuffing"',
    description: "E-posta veya marka hedefi için stuffing mention toplar.",
    targetTypes: ["email", "domain", "keyword"]
  },
  {
    id: "AT-09",
    title: "Hash to VT Context",
    category: "Actor Tracking",
    query: '"{target}" "sha256" "VirusTotal"',
    description: "Hash hedefleri için VirusTotal bağlamını öne çıkarır.",
    targetTypes: ["hash"]
  },
  {
    id: "AT-10",
    title: "Malware Bazaar Cross-Ref",
    category: "Actor Tracking",
    query: '"{target}" "malware bazaar"',
    description: "Hash/malware aile adı için MalwareBazaar referansı arar.",
    targetTypes: ["hash", "keyword"]
  }
];

export const categoryOrder = [
  "Threat Reports",
  "IOC Hunting",
  "Phishing & Brand Abuse",
  "Vulnerability Monitoring",
  "Dark Web & Leak Signals",
  "Actor Tracking"
] as const;
