export const handler = async (event, context) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello, World!",
      numero_suerte: 7
    })
  };
  return response;
};
