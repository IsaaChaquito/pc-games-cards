
export const validatePage = (page, totalPages) =>{
  return ((typeof(page) === 'string') && (page >= 1 && page <= totalPages))
}