function checkInViewport(Element) {
  const elementCoords = Element.getBoundingClientRect();
  const width = window.innerWidth;
  const height = window.innerHeight;
  const topCoordScreen = window.pageYOffset;
  const leftCoordScreen = window.pageXOffset;

  return (
    elementCoords.left >= 0 &&
    elementCoords.top >= 0 &&
    elementCoords.bottom <= height + topCoordScreen &&
    elementCoords.right <= width + leftCoordScreen
  );
}
