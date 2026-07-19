import {
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  Database,
  Gauge,
  Handshake,
  Layers,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
} from 'lucide-react';

/**
 * Registry of icons referenced by name in constants.
 * Importing only what we use keeps lucide-react fully tree-shakeable.
 */
const ICONS = {
  Bot,
  BrainCircuit,
  Code2,
  Compass,
  Database,
  Gauge,
  Handshake,
  Layers,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Target,
  Workflow,
};

/** Resolve an icon component by name, falling back to Sparkles. */
export const getIcon = (name) => ICONS[name] ?? Sparkles;
