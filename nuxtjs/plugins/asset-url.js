export default ({ $config }, inject) => {
  inject("assetURL", function(id) {
    if (!id) return null;
    return `${$config.assetUrl}/assets/${id}`;
  });
};
