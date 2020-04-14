export type RequestProps = {
  method: string;
  url: string;
  params?: object;
};

export const request = async ({
  url,
  method,
  params = {}
}: RequestProps): Promise<any> => {
  const request = "http://localhost:3001/api" + url;
  const headers = {
    "Content-Type": "application/json;charset=UTF-8",
    Accept: "application/json"
  };
  const options =
    method === "get"
      ? { headers, method }
      : {
          headers,
          method,
          body: JSON.stringify(params)
        };
  console.log(params);

  try {
    const response = await fetch(request, options);
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result);
    }
    return result.data;
  } catch (error) {
    throw new Error(error);
  }
};
