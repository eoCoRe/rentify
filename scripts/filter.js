let headerFilter = null;

export function setHeaderFilter(filter) {
  headerFilter = filter.target.value;
}

export function getHeaderFilter() {
  return headerFilter;
}
