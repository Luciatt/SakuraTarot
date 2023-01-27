
export function sakuraService() {
  const url = "https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";
  try {
    const response = fetch(
      url
    )
      .then((response) => response.json())
      .then((data) => data);
    return  response;
  } catch (error) {
    return [];
  }
}