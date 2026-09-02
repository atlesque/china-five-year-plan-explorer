import { sources, type SourceRef } from '@/data/sources';

export function getSource(sourceId: SourceRef['sourceId']) {
  return sources[sourceId];
}

export function sourceLabel(sourceId: SourceRef['sourceId']) {
  return sourceId === 'planZh' ? 'Chinese original' : 'English translation';
}

export function referenceText(ref: SourceRef) {
  const source = getSource(ref.sourceId);
  const page = ref.page ? `, pp. ${ref.page}` : '';
  return `${source.title}; ${ref.locator}${page}.`;
}
