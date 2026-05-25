export type Service = {
  id: string;
  name: string;
  description: string;
  url: string;
  category: ServiceCategory;
  icon: string;
  accent: string;
};

export type ServiceCategory =
  | "Infrastructure"
  | "Containers"
  | "Storage"
  | "Networking"
  | "Data"
  | "Security";

export const services: Service[] = [
  {
    id: "proxmox",
    name: "Proxmox VE",
    description: "Hypervisor and VM management",
    url: "https://proxmox.internal",
    category: "Infrastructure",
    icon: "PX",
    accent: "from-orange-500/20 to-orange-500/5",
  },
  {
    id: "portainer",
    name: "Portainer",
    description: "Kubernetes cluster management",
    url: "http://portainer.internal",
    category: "Application",
    icon: "PT",
    accent: "from-sky-500/20 to-sky-500/5",
  },
  {
    id: "longhorn",
    name: "Longhorn",
    description: "Distributed block storage for Kubernetes",
    url: "http://longhorn.internal",
    category: "Infrastructure",
    icon: "LH",
    accent: "from-cyan-500/20 to-cyan-500/5",
  },
  {
    id: "synology",
    name: "Synology NAS",
    description: "Network-attached storage interface",
    url: "http://nas.internal",
    category: "Infrastructure",
    icon: "NAS",
    accent: "from-emerald-500/20 to-emerald-500/5",
  },
  {
    id: "adguard",
    name: "AdGuard",
    description: "Network-wide DNS and ad blocking",
    url: "http://dns.internal",
    category: "Infrastructure",
    icon: "AG",
    accent: "from-green-500/20 to-green-500/5",
  },
  {
    id: "mongo-express",
    name: "Mongo Express",
    description: "Web-based MongoDB admin interface",
    url: "http://mongodb.internal",
    category: "Data",
    icon: "ME",
    accent: "from-lime-500/20 to-lime-500/5",
  },
  {
    id: "vaultwarden",
    name: "Vaultwarden",
    description: "Self-hosted Bitwarden-compatible vault",
    url: "http://vaultwarden.internal",
    category: "Data",
    icon: "VW",
    accent: "from-indigo-500/20 to-indigo-500/5",
  },
];

export const categoryOrder: ServiceCategory[] = [
  "Application",
  "Data",
  "Infrastructure",
];
