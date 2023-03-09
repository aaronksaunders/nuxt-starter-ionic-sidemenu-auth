export default defineEventHandler(() => {
  return {
    api: 'works ' + new Date(),
  };
});
